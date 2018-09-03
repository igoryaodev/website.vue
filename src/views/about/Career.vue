<template>
  <div class="aboutus-wrap mcareer-wrap">
    <div class="hidden-xs">
    <div class="h33"></div>
    <div class="common-title">{{$t('about.career')}}</div>
    <div class="clearfix">
      <div class="tleft">
        <div class="service-detail clearfix" v-html="detail[0].description" v-if="isZh && detail[0]"></div>
        <div class="service-detail clearfix" v-html="detail[0].description_En" v-if="!isZh && detail[0]"></div>
        <div class="visit-border"></div>
        <div class="position-title">{{$t('about.searchPosition')}}</div>
        <div class="position-select">
          <div class="row">
            <div class="col-md-6 col-xs-6">
              <div class="pselect-title">{{$t('about.filterDepartment')}}</div>
              <div class="pselect-list">
                <multiselect v-model="department" select-label="" placeholder="全部" :options="departmentList" label="name" @select="search"></multiselect>
              </div>
            </div>
            <div class="col-md-6 col-xs-6">
              <div class="pselect-title">{{$t('about.filterLevel')}}</div>
              <div class="pselect-list">
                <multiselect v-model="level" select-label="" placeholder="全部" :options="levelList" label="jobLevel" @select="searchByLevel"></multiselect>
              </div>
            </div>
          </div>
        </div>
        <div class="position-table">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>{{$t('about.req')}}</th>
                <th>{{$t('about.jobTitle')}}</th>
                <th>{{$t('about.jobCat')}}</th>
                <th>{{$t('about.jobLevel')}}</th>
                <th>{{$t('about.type')}}</th>
                <th>{{$t('about.date')}}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in jobList.list" :key="item.id">
                <td>{{item.jobCode}}</td>
                <td>
                  <router-link :to="{name: 'job-detail',params:{id: item.id}}">{{item.jobName}}</router-link>
                </td>
                <td>{{item.departmentDto.name}}</td>
                <td>{{item.LevelDto.jobLevel}}</td>
                <td>{{item.jobType}}</td>
                <td>
                  <span v-if="isZh">{{item.publishTime | date('YYYY')}}年{{item.publishTime | date('M')}}月{{item.publishTime | date('D')}}日</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="not-position">
          <p>{{$t('about.notjob')}}<router-link :to="{name: 'contact-post'}">{{$t('about.send')}}</router-link>{{$t('about.notjob1')}}</p>
        </div>
      </div>
    </div>
    <div class="footer-split"></div>
    </div>
    <div class="visible-xs mabout_wrap">
      <div class="mobile-common_title">{{$t('about.career')}}</div>
      <div class="mabout-content">
        <div class="service-detail clearfix" v-html="detail[0].description" v-if="isZh && detail[0]"></div>
        <div class="service-detail clearfix" v-html="detail[0].description_En" v-if="!isZh && detail[0]"></div>
      </div>
      <div class="mabout-job">
        <div class="position-title">{{$t('about.searchPosition')}}</div>
        <div class="mobile-select_date">
          <p>{{$t('about.filterDepartment')}}</p>
          <div class="mselect-date_list">
            <multiselect v-model="department" select-label="" placeholder="全部" :options="departmentList" label="name" @select="search"></multiselect>
          </div>
        </div>
        <div class="mobile-select_date">
          <p>{{$t('about.filterLevel')}}</p>
          <div class="mselect-date_list">
            <multiselect v-model="level" select-label="" placeholder="全部" :options="levelList" label="jobLevel" @select="searchByLevel"></multiselect>
          </div>
        </div>
        <div class="mabout-job_list">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>{{$t('about.req')}}</th>
                <th>{{$t('about.jobTitle')}}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in jobList.list" :key="item.id">
                <td>{{item.jobCode}}</td>
                <td>
                  <router-link :to="{name: 'job-detail',params:{id: item.id}}">{{item.jobName}}</router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="not-position">
          <p>{{$t('about.notjob')}}<router-link :to="{name: 'contact-post'}">{{$t('about.send')}}</router-link>{{$t('about.notjob1')}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Multiselect } from 'vue-multiselect'
import api from '@/api/api'

export default {
  name: 'career',
  data() {
    return {
      detail: [],
      departmentList: [],
      department: {
        id: 0,
        name: '全部',
        name_En: 'All',
      },
      levelList: [],
      level: {
        id: 0,
        name: '全部',
        name_En: 'All',
      },
      jobList: {},
    }
  },
  computed: {
    isZh() {
      return this.$root.$i18n.locale === 'zh-CN'
    },
  },
  created() {
    api.getPageByType({ infoCategory: 9 }).then((data) => {
      this.detail = data
    })
    api.getDepartment().then((data) => {
      this.departmentList = data
      this.departmentList.unshift({ id: 0, name: '全部', name_En: 'All' })
    })
    api.getLevel().then((data) => {
      this.levelList = data
      this.levelList.unshift({ id: 0, jobLevel: '全部', jobLevel_En: 'All' })
    })
    this.load()
  },
  methods: {
    load(params) {
      api.getJobList(params).then((data) => {
        this.jobList = data
      })
    },
    search(option) {
      this.load({ jobDepartmentId: option.id, jobLevelId: this.level.id })
    },
    searchByLevel(option) {
      this.load({ jobDepartmentId: this.department.id, jobLevelId: option.id })
    },
  },
  components: {
    Multiselect,
  },
}
</script>
<style lang="scss">
  .position-title {
    font-size: 17px;
    line-height: 20px;
    font-weight: bold;
  }
  .position-select {
    margin-top: 35px;
  }
  .pselect-title {
    font-size: 11px;
    color: #999;
  }
  .pselect-list {
    margin-top: 5px;
    position: relative;
  }
  .multiselect__option {
    min-height: 30px;
    padding: 7px 12px;
  }
  .multiselect__element {
    font-size: 12px;
  }
  .multiselect__option--highlight {
    background: #eb3024;
  }
  .position-table {
    margin-top: 30px;
    a {
      font-weight: bold;
      color: #ed3024;
    }
  }
  .not-position {
    font-size: 13px;
    color: #666;
    line-height: 20px;
    margin-top: 22px;
    a {
      color: #ed3024;
      font-weight: bold;
    }
  }
  @media screen and (max-width: 767px) {
    .mabout-job {
      .position-title {
        margin-top: 23px;
        font-size: 20px;
        font-family: Helvetica;
        line-height: initial;
      }
      .mobile-select_date {
        margin-top: 15px;
      }
      .mabout-job_list {
        margin-top: 35px;
        font-size: 12px;
        font-family: Helvetica;
        text-align: center;
        th {
          text-align: center;
        }
        a {
          color: #ed3024;
        }
      }
      .not-position {
        font-family: Helvetica;
        font-size: 12px;
        margin-top: 20px;
        line-height: 20px;
        a {
          font-weight: normal;
        }
      }
    }
  }
</style>
