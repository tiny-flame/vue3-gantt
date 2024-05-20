export enum GanttType {
  day = 'day',
  quarter = 'quarter',
  month = 'month',
  year = 'year',
  week = 'week',
  hour = 'hour',
}

export const GanttViewType = [
  {
    name: '日',
    value: GanttType.day,
  },
  {
    name: '周',
    value: GanttType.week,
  },
  {
    name: '月',
    value: GanttType.month,
  },
  {
    name: '季',
    value: GanttType.quarter,
  },
  {
    name: '年',
    value: GanttType.year,
  },
];
