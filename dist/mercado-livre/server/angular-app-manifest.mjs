
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 936, hash: '25a57569218224945e5e44b173eef7c0c4008e4c4a5dbd2ef1a46573e5fda2ac', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1282, hash: 'f9f45167902ebf1b15847a58004aa71d1b3310a45d26ef9a04cf454ed266a256', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3659, hash: 'fefea3f9e82a92a2ae066106594df4f4e2d0e95b048410e6c359df2339beb0f1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-24JM3Z6T.css': {size: 42, hash: 'umJv61F35VQ', text: () => import('./assets-chunks/styles-24JM3Z6T_css.mjs').then(m => m.default)}
  },
};
