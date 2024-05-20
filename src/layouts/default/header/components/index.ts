/*
 * @Author: liguokang && li-gu@outlook.com
 * @Date: 2024-05-10 10:32:27
 * @LastEditors: liguokang && li-gu@outlook.com
 * @LastEditTime: 2024-05-20 15:35:10
 * @FilePath: \Vue3-gantt\src\layouts\default\header\components\index.ts
 * @Description: 
 * Copyright (c) 2024 by Digital Management Center(DMC), All Rights Reserved. 
 */
import { createAsyncComponent } from '@/utils/factory/createAsyncComponent';
import FullScreen from './FullScreen.vue';

// export const UserDropDown = createAsyncComponent(() => import('./user-dropdown/index.vue'), {
//   loading: true,
// });

export const LayoutBreadcrumb = createAsyncComponent(() => import('./Breadcrumb.vue'));

export const Notify = createAsyncComponent(() => import('./notify/index.vue'));

export const ErrorAction = createAsyncComponent(() => import('./ErrorAction.vue'));

export { FullScreen };
