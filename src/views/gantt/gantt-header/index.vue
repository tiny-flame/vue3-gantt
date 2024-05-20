<!--
 * @Author: liguokang && li-gu@outlook.com
 * @Date: 2024-05-19 16:30:22
 * @LastEditors: liguokang && li-gu@outlook.com
 * @LastEditTime: 2024-05-20 13:56:44
 * @FilePath: \Vue3-gantt\src\views\dashboard\gantt\gantt-header\index.vue
 * @Description: 
 * Copyright (c) 2024 by Digital Management Center(DMC), All Rights Reserved. 
-->
<template>
  <div class="gantt-header h-48px">
    <a-radio-group v-model:value="value1">
      <template v-for="item in panes" :key="item.key">
        <a-radio-button :value="item.value" class="min-w-70px"> {{ item.name }} </a-radio-button>
      </template>
    </a-radio-group>

    <a-button type="primary" @click="refresh()">刷新</a-button>

    <a-button type="primary" @click="scrollToToday()">今天</a-button>

    <a-button type="primary" @click="print()"> ↓ 导出为图片 </a-button>

    <span class="ml-12px">工具栏：</span>
    <a-switch class="baseline-switch" v-model:checked="checked" />

    <span class="ml-4">基线对比：</span>
    <a-switch class="baseline-switch" v-model:checked="checked">基线对比 </a-switch>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { GanttViewType } from './data';

  const panes = ref<{ name: string; value: string }[]>(GanttViewType);

  const value1 = ref<string>('a');
  const checked = ref<string>('a');

  function refresh() {}
  function scrollToToday() {}
  function print() {}
</script>

<style lang="less" scoped>
  .gantt-header {
    display: flex;
    align-items: center;
    background: #fff;

    .ant-btn {
      min-width: 70px;
      margin-left: 10px;
    }
  }
</style>
