// @ts-nocheck
import { ApplyPluginsType } from '/Users/axtlive/.config/yarn/global/node_modules/@umijs/runtime';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
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
