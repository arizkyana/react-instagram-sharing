import pages from '../configs/pages';
const routes: { component: string, path: string }[] = pages.map((page) => {
  const pageSplited = page.split('/');
  let route = page;

  pageSplited.forEach((p, i) => {
    if (p.match(/\[[^\]]*]/g)) {
      // replace brackets [] with
      const params = p.split(']')[0].replace('[', '').trim();
      const replace = p.replace(/\[[^\]]*]/g, ':');
      pageSplited[i] = `${replace}${params}`;
      route = pageSplited.join('/');
    }

  });

  return {
    path: route,
    component: page,
  }
});

export default routes;
