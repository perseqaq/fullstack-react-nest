import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {
    name: '@umijs',
    logo: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F3b6c143bb3fd4feecde5dab6e932dddd3e214b49.jpg&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625327428&t=66b8d9a85f29de3bcd314e0ebd45e835',
  },
  routes: [
    {
      path: '/',
      component: '../layout/index',
      menu: {
        flatMenu: true,
      },
      routes: [
        {
          path: '/crud',
          component: '@/pages/BasicCRUD/index',
          name: '基础crud页面',
          icon: 'SmileOutlined',
        },
        {
          path: '/analysis',
          component: '@/pages/Analysis/index',
          name: '分析图标页',
          icon: 'BarChartOutlined',
        },
      ],
    },
  ],
  antd: {
    dark: true,
  },
  fastRefresh: {},
  locale: {},
});
