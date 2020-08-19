// @ts-nocheck
import { ApplyPluginsType } from '/Users/axtlive/.config/yarn/global/node_modules/@umijs/runtime';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('@/layouts/index.js').default,
    "routes": [
      {
        "path": "/404",
        "exact": true,
        "component": require('@/pages/404.js').default
      },
      {
        "path": "/",
        "exact": true,
        "component": require('@/pages/index.js').default
      },
      {
        "path": "/page1",
        "exact": true,
        "component": require('@/pages/page1.js').default
      },
      {
        "path": "/page2",
        "exact": true,
        "component": require('@/pages/page2.js').default
      },
      {
        "path": "/sub",
        "routes": [
          {
            "path": "/sub/:id",
            "exact": true,
            "component": require('@/pages/sub/:id.js').default
          },
          {
            "path": "/sub/a",
            "exact": true,
            "component": require('@/pages/sub/a.js').default
          },
          {
            "path": "/sub/b",
            "exact": true,
            "component": require('@/pages/sub/b.js').default
          },
          {
            "path": "/sub/detail/$id",
            "exact": true,
            "component": require('@/pages/sub/detail/$id.js').default
          }
        ],
        "component": require('@/pages/sub/_layout.js').default
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
