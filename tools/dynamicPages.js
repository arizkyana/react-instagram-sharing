const fs = require('fs');
const path = require('path');

/**
 * Get all 'pages' paths
 */
function getAllPagesPaths(dirPath, arrayOfFiles) {
  // const pages = path.join(__dirname, '../pages');
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach((file) => {
    if (fs.statSync(`${dirPath}/${file}`).isDirectory()) {
      arrayOfFiles = getAllPagesPaths(`${dirPath}/${file}`, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(__dirname, dirPath, "/", file));
    }
  });

  return arrayOfFiles;
}

const allPages = getAllPagesPaths('./src/pages');

const mappingAllPages = allPages.map((p) => {
  let pageFile = p.split('/src')[1];

  if (pageFile.match(/index.tsx/i)) {
    pageFile = pageFile.replace('/index.tsx', '');
  }
  // generate params
  // split first
  const pageFileSplited = pageFile.split('/');
  pageFileSplited.forEach((page, i) => {
    if (page.match(/\[[^\]]*]/g)) {

      // replace brackets [] with
      const params = page.split(']')[0].replace('[', '').trim();
      const replace = page.replace(/\[[^\]]*]/g, ':');
      pageFileSplited[i] = `${replace}${params}`;
      pageFile = pageFileSplited.join('/');
    }
  });

  const cleaningPath = pageFile.replace('/pages', '').trim().replace('.tsx', '').trim();
  return {
    component: `${p.split('/src')[1].replace('/pages/', '').trim().replace('.tsx', '').trim()}`,
    path: cleaningPath === '' ? '/' : cleaningPath,
  }
});

console.log('mapped :: ', mappingAllPages);
