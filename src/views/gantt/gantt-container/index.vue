<!--
 * @Author: liguokang && li-gu@outlook.com
 * @Date: 2024-05-19 19:25:03
 * @LastEditors: liguokang && li-gu@outlook.com
 * @LastEditTime: 2024-05-20 14:25:36
 * @FilePath: \Vue3-gantt\src\views\dashboard\gantt\gantt-container\index.vue
 * @Description: 
 * Copyright (c) 2024 by Digital Management Center(DMC), All Rights Reserved. 
-->
<template>
  <div class="gantt-container" ref="ganttBox">
    <div class="gantt-container-heder">
      <div class="item-cell" v-for="attr in Object.keys(fff)" :key="attr">
        <span> {{ attr }}</span>
        <div class="cell-box">
          <div
            :class="['item-c-cell', { line: items.week == 'Su' || items.type == 'week' }]"
            :style="{ width: `${items.c_w}px`, '--line-height': `${boxHeight}px` }"
            v-for="items in fff[attr]"
            :key="items.dsc"
          >
            <!-- {{ boxHeight }} -->
            {{ items.dsc }}
          </div>
        </div>
      </div>
    </div>

    <div class="gantt-container-heder"> </div>
    <div class="gantt-container-item" v-for="it in asd" :key="it.title">
      <div
        class="item-d-cell"
        :style="`left: ${it.left}px; width: ${it.width}px;display: ${!it.width ? 'none' : ''}; `"
      >
        {{ it.title }}
        {{ it.start }}
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { ref, computed } from 'vue';
  import advancedFormat from 'dayjs/plugin/advancedFormat';
  import dayjs from 'dayjs';
  import { RowItem } from '../data';
  import { groupBy } from 'xe-utils';

  // const ganttBox = ref(null);

  const ganttBox: any = ref({});
  const boxHeight: any = computed(() => {
    return ganttBox.value.offsetHeight;
  });

  const props = defineProps({
    colsSources: {
      type: Array as PropType<RowItem[]>,
      default: () => {
        return [];
      },
    },
  });

  const _advancedFormat: any = dayjs.extend(advancedFormat);

  const all_fig = ref({});
  const ssss = (f, l) => {
    const formatEmu = {
      day: { t_str: 'YYYY年MM月', dsc_str: 'DD', c_w: 22, _step: 3600000 * 24 },
      week: { t_str: 'YYYY年', dsc_str: '第ww周', c_w: 120, _step: 3600000 * 24 * 7 },
      month: { t_str: 'YYYY年Q季度', dsc_str: 'MM月', c_w: 22 },
      quty: { t_str: 'YYYY年', dsc_str: '第Q季度', c_w: 22 },
    };
    let a222sd: any = [];
    let step: any = 'week';
    const __date = dayjs(f).subtract(2, 'day').startOf('day');
    let _next_date = __date;
    const { t_str, dsc_str, _step, c_w } = formatEmu[step];
    while (dayjs(_next_date).isBefore(l)) {
      // console.log(_next_date.format('YYYY年MM月'), '777777777777777');
      const _date = _advancedFormat(_next_date);
      a222sd.push({
        type: step,
        title: _date.format(t_str),
        week: _date.format('dd'),
        dsc: _date.format(dsc_str),
        c_w,
      });
      _next_date = dayjs(_next_date).add(1, step);
    }

    const _ttt = groupBy(a222sd, 'title');
    all_fig.value = { a222sd, f: __date, l, _step, c_w };
    console.log(__date, '88888888');
    return _ttt;
  };
  const fff: any = computed(() => {
    let firstDate: any = '';
    let lastDate: any = '';
    props.colsSources.map((t) => {
      const { start, end }: any = t;
      const _start_date = dayjs.unix(start);
      const _end_date = dayjs.unix(end);

      if (firstDate && _start_date) {
        firstDate = dayjs(_start_date).isBefore(firstDate) ? _start_date : firstDate;
      } else {
        firstDate = _start_date;
      }
      if (lastDate && _end_date) {
        lastDate = dayjs(_end_date).isAfter(lastDate) ? _end_date : lastDate;
      } else {
        lastDate = _end_date;
      }

      const _out = { year: _start_date.year() || '' };
      return _out;
    });
    const _s5555e = ssss(firstDate, lastDate);
    return _s5555e;
  });
  // console.log(fff, '2222222222');

  const getStyle = (t) => {
    const { f, _step, c_w }: any = all_fig.value;
    const { start = 0, end }: any = t;
    const _start_date = dayjs.unix(start);
    const _end_date = dayjs.unix(end);

    // console.log(
    //   start,
    //   _start_date.valueOf(),
    //   f.valueOf(),

    //   'DDDDDDDDDDDDDDDDDDDDDDDDDDD',
    // );
    const left = start ? ((Number(_start_date) - Number(f.valueOf())) / _step) * c_w : 0;
    const _with2 = start && !end ? 14 * c_w : '';
    const _with = start && end ? ((Number(_end_date) - Number(_start_date)) / _step) * c_w : _with2;
    // console.log(left, _step, c_w, 'DDDDDDDDDDDDDDDDDDDDDDDDDDD');
    return { left, width: _with };
  };
  const asd = computed(() => {
    const _outt = props.colsSources.map((e) => {
      return { ...e, ...getStyle(e) };
    });
    return _outt;
  });
</script>

<style lang="less" scoped>
  .gantt-container {
    display: grid;
    width: 100%;
    width: fit-content;
    height: fit-content;
    overflow: auto;
    border-left: 1px solid #eee;
    background: lawngreen;
    background: #fff;
    box-shadow: 12px 0 16px -10px rgb(0 0 0 / 15%);

    .gantt-container-heder {
      display: flex;
      position: sticky;
      z-index: 99;
      top: 0;
      width: fit-content;
      background: lightblue;
      background: #fff;

      .item-cell {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: auto;

        span {
          line-height: 20px;
        }

        .cell-box {
          display: flex;

          .item-c-cell {
            display: flex;
            position: relative;
            flex-direction: column;
            justify-content: center;
            width: 22px;
            line-height: 20px;
            text-align: center;

            &.line::after {
              content: '';
              position: absolute;
              top: -22px;
              align-self: flex-end;
              width: 1px;
              height: calc(var(--line-height) - 10px);
              margin-left: 3px;
              background: #ddd;
            }
          }
        }
      }
    }

    .item-cell {
      width: 145px;
      height: 44px;
      // padding: 0 15px;
      // border-right: 1px solid #eee;
      border-bottom: 1px solid #eee;
      line-height: 44px;
    }

    .gantt-container-item {
      display: flex;
      position: relative;
      align-items: center;
      height: 44px;
      border-bottom: 1px solid #eee;

      .item-d-cell {
        display: inline-flex;
        position: absolute;
        top: 10px;
        align-items: center;
        // width: 245px;
        height: 22px;
        background: lightcoral;
        white-space: nowrap;
      }
    }
  }
</style>
starstarstar
