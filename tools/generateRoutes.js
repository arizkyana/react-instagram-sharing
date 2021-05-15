const pages = [
  'index',
  'account',
  'dashboard',
  'tickets/[id]/detail/[slug]/driver',
  'tickets/[id]/detail/[slug]',
  'tickets/[id]/detail/[slug]/passanger',
  'tickets/[id]',
];

const routes = pages.map((page) => {
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
    route,
    component: page,
  }
})

console.log('routes :: ', routes);