<!--
 * @Author: liguokang && li-gu@outlook.com
 * @Date: 2024-05-10 10:32:27
 * @LastEditors: liguokang && li-gu@outlook.com
 * @LastEditTime: 2024-05-20 15:37:31
 * @FilePath: \Vue3-gantt\src\layouts\iframe\index.vue
 * @Description: 
 * Copyright (c) 2024 by Digital Management Center(DMC), All Rights Reserved. 
-->
<template>
  <div v-if="showFrame">
    <template v-for="frame in getFramePages" :key="frame.path">
      <!-- <FramePage
        v-if="frame.meta.frameSrc && hasRenderFrame(frame.name)"
        v-show="showIframe(frame)"
        :frameSrc="frame.meta.frameSrc"
      /> -->
    </template>
  </div>
</template>
<script lang="ts" setup>
  import { unref, computed } from 'vue';
  // import FramePage from '@/views/sys/iframe/index.vue';

  import { useFrameKeepAlive } from './useFrameKeepAlive';

  defineOptions({ name: 'FrameLayout' });

  const { getFramePages, hasRenderFrame, showIframe } = useFrameKeepAlive();

  const showFrame = computed(() => unref(getFramePages).length > 0);
</script>
