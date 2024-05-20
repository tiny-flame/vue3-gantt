<!--
 * @Author: liguokang && li-gu@outlook.com
 * @Date: 2024-05-19 19:25:03
 * @LastEditors: liguokang && li-gu@outlook.com
 * @LastEditTime: 2024-05-20 15:07:14
 * @FilePath: \Vue3-gantt\src\views\dashboard\gantt\gantt-side\index.vue
 * @Description: 
 * Copyright (c) 2024 by Digital Management Center(DMC), All Rights Reserved. 
-->
<template>
  <div class="gantt-side">
    <div class="gantt-sild-heder gantt-sild-item">
      <div class="item-cell" v-for="attr in cols" :key="attr.prop">
        {{ attr.title }}
      </div>
    </div>

    <div
      v-for="it in asd11"
      :key="it.title"
      :class="['gantt-sild-item', { haveChild: !!it?.children?.length }]"
    >
      <Icon icon="ion:chevron-down" v-if="!!it?.children?.length" />
      <div class="item-cell" v-for="attr in cols" :key="attr.prop">
        {{ it[attr.prop] }}
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { ref, computed } from 'vue';
  import { RowItem } from '../data';
  import dayjs from 'dayjs';
  import Icon from '@/components/Icon/Icon.vue';

  const props = defineProps({
    colsHeader: {
      type: Array as PropType<{ title: string; prop: string }[]>,
      default: () => {
        return [];
      },
    },
    colsSources: {
      type: Array as PropType<RowItem[]>,
      default: () => {
        return [];
      },
    },
  });

  const cols = ref(props.colsHeader);
  // const asd = ref(props.colsSources);
  const asd11 = computed(() => {
    return props.colsSources.map((e) => ({
      ...e,
      label: e.start ? dayjs.unix(e.start).format('YYYY-MM-DD HH:MM') : '',
    }));
  });
</script>

<style lang="less" scoped>
  .gantt-side {
    width: fit-content;
    height: fit-content;
    border-left: 1px solid #eee;
    background: #fff;
    box-shadow: 12px 0 16px -10px rgb(0 0 0 / 15%);
    // z-index: 999;
    // height: 100%;
    // overflow: auto;
    .gantt-sild-heder {
      position: sticky;
      top: 0;
      background: #fff;
      // width: fit-content;
    }

    .gantt-sild-item {
      display: flex;
      box-sizing: border-box;
      cursor: pointer;

      .item-cell {
        min-width: 145px;
        height: 44px;
        padding: 0 15px;
        border-right: 1px solid #eee;
        border-bottom: 1px solid #eee;
        line-height: 44px;
      }
    }

    .haveChild {
      .item-cell {
        padding-left: 0;
      }
    }
  }
</style>
