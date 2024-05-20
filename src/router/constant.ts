/*
 * @Author: liguokang && li-gu@outlook.com
 * @Date: 2024-05-10 10:32:27
 * @LastEditors: liguokang && li-gu@outlook.com
 * @LastEditTime: 2024-05-20 15:43:24
 * @FilePath: \Vue3-gantt\src\router\constant.ts
 * @Description:
 * Copyright (c) 2024 by Digital Management Center(DMC), All Rights Reserved.
 */
export const REDIRECT_NAME = 'Redirect';

export const PARENT_LAYOUT_NAME = 'ParentLayout';

export const PAGE_NOT_FOUND_NAME = 'PageNotFound';

export const EXCEPTION_COMPONENT = () => import('@/views/sys/exception/Exception.vue');

/**
 * @description: default layout
 */
export const LAYOUT = () => import('@/layouts/default/index.vue');

/**
 * @description: parent-layout
 */
export const getParentLayout = (_name?: string) => {
  return () =>
    new Promise((resolve) => {
      resolve({
        name: _name || PARENT_LAYOUT_NAME,
      });
    });
};
