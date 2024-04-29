import { createRouter, createWebHistory } from 'vue-router';

import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.afterEach((to) => {
  // 修改当前标签页的名称
  const title = to.meta.title;
  const titleNode = document.querySelector('head > title');
  if (title && titleNode) {
    titleNode.textContent = title.toString();
  }
});
// 路由守卫

export default router;
