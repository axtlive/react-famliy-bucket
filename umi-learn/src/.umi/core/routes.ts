// @ts-nocheck
import { ApplyPluginsType } from '/Users/axtlive/.config/yarn/global/node_modules/@umijs/runtime';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('/Users/axtlive/Desktop/React/react-famliy-bucket/umi-learn/src/layouts/index.js').default,
    "exact": false,
    "routes": [
      {
        "path": "/",
        "component": require('/Users/axtlive/Desktop/React/react-famliy-bucket/umi-learn/src/pages/index').default,
        "title": "首页",
        "Routes": [
          "../routes/HandleTitle.js"
        ],
        "exact": true
      },
      {
        "path": "/login",
        "component": require('/Users/axtlive/Desktop/React/react-famliy-bucket/umi-learn/src/pages/login').default,
        "title": "登录页",
        "Routes": [
          "../routes/HandleTitle.js"
        ],
        "exact": true
      },
      {
        "path": "/welcome",
        "component": require('/Users/axtlive/Desktop/React/react-famliy-bucket/umi-learn/src/pages/welcome').default,
        "title": "欢迎页",
        "Routes": [
          "../routes/HandleTitle.js"
        ],
        "exact": true
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
