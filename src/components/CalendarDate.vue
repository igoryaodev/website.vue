<template>
  <div class="calendar clearfix">
    <div class="calendar-header">
      <a @click="prev" class="prev-cal">
        <img src="../assets/img/prev-cal.png" alt="">
      </a>
      <span v-if="isZh">{{month | date('YYYY')}}<i>年</i>{{month | date('M')}}<i>月</i></span>
      <span v-if="!isZh">{{month | date('MMMM')}} {{month | date('YYYY')}}</span>
      <a @click="next" class="next-cal">
        <img src="../assets/img/next-cal.png" alt="">
      </a>
    </div>
    <div class="calendar-weeks" v-for="week in weeks" :key="week.id">
      <span class="calendar-day" v-for="day in week.days" :key="day.id" :class="{today: day.isToday, 'diff-month': !day.isCurrentMonth, selected: day.date.isSame(selected)}" @click="select(day)">
        {{day.number}}
      </span>
    </div>
    <div class="calendar-weeks calendar-weekday">
      <span>{{$t('shop.sun')}}</span>
      <span>{{$t('shop.mon')}}</span>
      <span>{{$t('shop.tue')}}</span>
      <span>{{$t('shop.wed')}}</span>
      <span>{{$t('shop.thu')}}</span>
      <span>{{$t('shop.fri')}}</span>
      <span>{{$t('shop.sat')}}</span>
    </div>
  </div>
</template>
<script>
import moment from 'moment'

export default {
  name: 'calendar-date',
  props: ['selected'],
  data() {
    return {
      weeks: [],
      month: null,
      // selected: moment(),
    }
  },
  computed: {
    isZh() {
      return this.$root.$i18n.locale === 'zh-CN'
    },
  },
  created() {
    this.month = moment(this.selected).clone()
    /* eslint prefer-const: "off" */
    let start = moment(this.selected).clone()
    start.date(1)
    this.removeTime(start.day(0))
    this.buildMonth(start, this.month)
  },
  methods: {
    prev() {
      let prev = this.month.clone()
      this.removeTime(prev.month(prev.month() - 1).date(1))
      this.month.month(this.month.month() - 1)
      this.buildMonth(prev, this.month)
    },
    next() {
      let next = this.month.clone()
      this.removeTime(next.month(next.month() + 1).date(1))
      this.month.month(this.month.month() + 1)
      this.buildMonth(next, this.month)
    },
    select(day) {
      // this.selected = day.date
      this.$emit('select-date', day.date)
    },
    removeTime(date) {
      return date.day(0).hour(0).minute(0).second(0)
             .millisecond(0)
    },
    buildMonth(start, month) {
      this.weeks = []
      let done = false
      let date = start.clone()
      let monthIndex = date.month()
      let count = 0
      while (!done) {
        this.weeks.push({ days: this.buildWeek(date.clone(), month) })
        date.add(1, 'week')
        done = (count += 1) > 2 && monthIndex !== date.month()
        monthIndex = date.month()
      }
    },
    buildWeek(date, month) {
      const days = []
      for (let i = 0; i < 7; i += 1) {
        days.push({
          name: date.format('dd').substring(0, 1),
          number: date.date(),
          isCurrentMonth: date.month() === month.month(),
          isToday: date.isSame(new Date(), 'day'),
          date,
        })
        /* eslint no-param-reassign: "off" */
        date = date.clone()
        date.add(1, 'd')
      }
      return days
    },
  },
}
</script>
<style lang="scss">
.calendar {
    color: #010101;
    border: 1px solid #000;
    padding: 2px;
    .calendar-header {
        float: left;
        width: 100%;
        height: 30px;
        background: #ed3024;
        color: #fff;
        margin-bottom: 8px;
        &>* {
            display: inline-block;
            height: 30px;
            line-height: 30px;
            vertical-align: middle;
        }
        span {
            float: left;
            width: 100%;
            text-align: center;
            padding-right: 40px;
            padding-left: 50px;
            margin-left: -40px;
            box-sizing: border-box;
            font-size: 20px;
            font-family: 'MetricSemibold',arial;
            padding-top: 3px;
            i {
              font-style: normal;
              font-size: 17px;
              font-weight: bold;
            }
        }
        a {
            float: left;
            width:40px;
            font-weight: bold;
            position: relative;
            box-sizing: border-box;
            padding: 0 10px;
            cursor: pointer;
        }
        .next-cal {
          text-align: right;
          margin-left: -40px;
        }
    }
    .calendar-weeks {
        float: left;
        width: 100%;
        >span {
            float: left;
            width: 14.2857%;
            width: calc(100% / 7);
            text-align: center;
            cursor: pointer;
            height: 30px;
            line-height: 30px;
            vertical-align: middle;
            padding-top: 3px;
            box-sizing: border-box;
            font-size: 18px;
            font-family: 'metric-regular',Arial, Helvetica, sans-serif;
            &:hover {
              background-color: #ed3024;
              color: #fff;
            }
            &.today {
                background-color: #000;
                color: #fff;
            }
            &.diff-month {
                color: transparent !important;
                background-color: transparent !important;
            }
            &.selected {
              background-color: #ed3024;
              color: #fff;
            }
        }
    }
    .calendar-weekday {
      >span {
        color: #999;
        font-size: 15px;
        &:hover {
          color: #999;
          background-color: #fff;
        }
      }
    }
}
</style>
