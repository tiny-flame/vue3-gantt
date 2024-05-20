/*
 * @Author: liguokang && li-gu@outlook.com
 * @Date: 2024-05-10 10:32:27
 * @LastEditors: liguokang && li-gu@outlook.com
 * @LastEditTime: 2024-05-18 14:06:13
 * @FilePath: \vue-vben-admin\src\router\routes\modules\dashboard.ts
 * @Description:
 * Copyright (c) 2024 by Digital Management Center(DMC), All Rights Reserved.
 */
import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';
import { t } from '@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/dashboard',
  name: 'Dashboard',
  component: LAYOUT,
  redirect: '/gantt',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: t('routes.dashboard.dashboard'),
  },
  children: [
    {
      path: 'gantt',
      name: 'Gantt',
      component: () => import('@/views/gantt/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.dashboard.gantt'),
      },
    },
  ],
};

export default dashboard;
