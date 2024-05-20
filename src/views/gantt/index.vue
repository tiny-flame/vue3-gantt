<!--
 * @Author: liguokang && li-gu@outlook.com
 * @Date: 2024-05-18 14:04:37
 * @LastEditors: liguokang && li-gu@outlook.com
 * @LastEditTime: 2024-05-20 14:22:15
 * @FilePath: \Vue3-gantt\src\views\dashboard\gantt\index.vue
 * @Description: 
 * Copyright (c) 2024 by Digital Management Center(DMC), All Rights Reserved. 
-->
<template>
  <div class="gantt-wapper">
    <GanttHeader />
    <div class="gantt-content">
      <GanttSilde :colsSources="colsSources" :colsHeader="colsHeader" />
      <GanttContainer :colsSources="colsSources" />
    </div>
  </div>
</template>
<script lang="ts" setup>
  import GanttHeader from './gantt-header/index.vue';
  import GanttSilde from './gantt-side/index.vue';
  import { ref } from 'vue';
  import GanttContainer from './gantt-container/index.vue';
  import { colsSources } from './data';

  const colsHeader = ref([
    {
      title: '标题',
      prop: 'title',
    },
    {
      title: '开始时间',
      prop: 'label',
    },
    {
      title: '结束时间',
      prop: 'end',
    },
  ]);
</script>

<style lang="less" scoped>
  .gantt-wapper {
    height: calc(100vh - 80px);
    padding: 4px 0 8px 8px;

    .gantt-content {
      display: flex;
      position: relative;
      justify-content: space-between;
      height: calc(100% - 50px);
      overflow: auto;
      border-top: 6px solid #fafafa;
      background: #fafafa;
    }
  }
</style>
