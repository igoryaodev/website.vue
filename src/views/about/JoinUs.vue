<template>
  <div class="joinus-wrap">
    <div class="common-title">{{$t('about.career')}}</div>
    <div class="apply-step">
      <div class="step-list clearfix">
        <div :class="{active: step == 1}">
          <span class="number">1</span>
          <span>{{$t('about.basicInfo')}}</span>
        </div>
        <div :class="{active: step == 2}">
          <span class="number">2</span>
          <span>{{$t('about.workSkill')}}</span>
        </div>
        <div :class="{active: step == 3}">
          <span class="number">3</span>
          <span>{{$t('about.submit')}}</span>
        </div>
      </div>
      <div class="step-form">
        <div class="step-form_position job-info" v-if="step == 1">
          <div class="step-item_title">{{$t('about.applyTo')}}</div>
          <ul class="list-unstyled">
            <li>
              <span>{{$t('about.req')}}</span>
              <span>&nbsp;:&nbsp;</span>
              <span>{{jobDetail.jobCode}}</span>
            </li>
            <li v-if="jobDetail.departmentDto">
              <span>{{$t('about.jobCat')}}</span>
              <span>&nbsp;:&nbsp;</span>
              <span v-if="isZh">{{jobDetail.departmentDto.name}}</span>
              <span v-if="!isZh">{{jobDetail.departmentDto.name_En}}</span>
            </li>
            <li v-if="jobDetail.LevelDto">
              <span>{{$t('about.jobLevel')}}</span>
              <span>&nbsp;:&nbsp;</span>
              <span v-if="isZh">{{jobDetail.LevelDto.jobLevel}}</span>
              <span v-if="!isZh">{{jobDetail.LevelDto.jobLevel_En}}</span>
            </li>
            <li>
              <span>{{$t('about.type')}}</span>
              <span>&nbsp;:&nbsp;</span>
              <span v-if="isZh">{{jobDetail.jobType}}</span>
              <span v-if="!isZh">{{jobDetail.jobType_En}}</span>
            </li>
          </ul>
        </div>
        <div class="visit-border" v-if="step == 1"></div> 
        <div class="step-form_info form-ucca">
          <div class="step-first" v-if="step == 1">
            <div class="step-item_title">{{$t('about.personal')}}</div>
            <div class="form-group clearfix">
              <div class="pull-left">
                <div>
                  <label class="light-gray">{{$t('about.firstName')}}</label><span class="danger">*</span>
                </div>
                <div>
                  <input type="text" class="form-control" v-model="job.firstName" v-validate="'required'" :class="{'error': errors.has('firstName')}" name="firstName">
                </div>
              </div>
              <div class="pull-left">
                <div>
                  <label class="light-gray">{{$t('about.lastName')}}</label><span class="danger">*</span>
                </div>
                <div>
                  <input type="text" class="form-control" v-model="job.lastName" v-validate="'required'" :class="{'error': errors.has('lastName')}" name="lastName">
                </div>
              </div>
            </div>
            <div class="form-group clearfix">
              <div class="pull-left">
                <div>
                  <label class="light-gray">{{$t('about.nationality')}}</label><span class="danger">*</span>
                </div>
                <div>
                  <multiselect v-model="nation" v-validate="'required'" :class="{'error': errors.has('nation')}" name="nation"  select-label="" v-bind:placeholder="$t('about.selectNa')" :options="countryList" label="en_name"></multiselect>
                </div>
              </div>
              <div class="pull-left">
                <div>
                  <label class="light-gray">{{$t('about.birthdate')}}</label><span class="danger">*</span>
                </div>
                <div>
                  <date-picker :date="startTime" :option="option"  :class="{'error': errors.has('startTime')}" name="startTime"></date-picker>
                  <!-- <input type="text" class="form-control" v-model="job.birthdate"> -->
                </div>
              </div>
            </div>
            <div class="form-group clearfix">
              <div class="pull-left">
                <div>
                  <label class="light-gray">{{$t('about.country')}}</label><span class="danger">*</span>
                </div>
                <div>
                  <multiselect v-model="country" v-validate="'required'" :class="{'error': errors.has('country')}" name="country" select-label="" v-bind:placeholder="$t('about.selectCountry')" :options="countryList" label="en_name"></multiselect>
                </div>
              </div>
              <div class="pull-left">
                <div>
                  <label class="light-gray">{{$t('about.province')}}</label><span class="danger">*</span>
                </div>
                <div>
                  <input type="text" class="form-control" v-model="job.province" v-validate="'required'" :class="{'error': errors.has('province')}" name="province">
                </div>
              </div>
            </div>
            <div class="form-group clearfix">
              <div class="pull-left">
                <div>
                  <label class="light-gray">{{$t('about.city')}}</label><span class="danger">*</span>
                </div>
                <div>
                  <input type="text" class="form-control" v-model="job.city" v-validate="'required'" :class="{'error': errors.has('city')}" name="city">
                </div>
              </div>
              <div class="pull-left">
                <div>
                  <label class="light-gray">{{$t('about.postalCode')}}</label><span class="danger">*</span>
                </div>
                <div>
                  <input type="text" class="form-control" v-model="job.postalCode" v-validate="'required'" :class="{'error': errors.has('code')}" name="code">
                </div>
              </div>
            </div>
          <div class="form-group clearfix">
            <div class="pull-left">
              <div>
                <label class="light-gray">{{$t('about.homeAddr1')}}</label><span class="danger">*</span>
              </div>
              <div>
                <input type="text" class="form-control" v-model="job.homeAddressOne" v-validate="'required'" :class="{'error': errors.has('addr')}" name="addr">
              </div>
            </div>
            <div class="pull-left">
              <div>
                <label class="light-gray">{{$t('about.homeAddr2')}}</label>
              </div>
              <div>
                <input type="text" class="form-control" v-model="job.homeAddressTwo">
              </div>
            </div>
          </div>
          <div class="form-group clearfix">
            <div class="pull-left">
              <div>
                <label class="light-gray">{{$t('about.email')}}</label><span class="danger">*</span>
              </div>
              <div>
                <input type="text" class="form-control" v-model="job.email" v-validate="'required|email'" :class="{'error': errors.has('email')}" name="email">
              </div>
            </div>
            <div class="pull-left">
              <div>
                <label class="light-gray">{{$t('about.mobile')}}</label><span class="danger">*</span>
              </div>
              <div>
                <input type="text" class="form-control" v-model="job.mobile">
              </div>
            </div>
          </div>
          <div class="form-group clearfix">
            <div class="pull-left">
              <div>
                <label class="light-gray">{{$t('about.expectedSalary')}}</label>
              </div>
              <div>
                <input type="text" class="form-control" v-model="job.expectedSalary">
              </div>
            </div>
            <div class="pull-left">
              <div>
                <label class="light-gray">{{$t('about.onboard')}}</label>
              </div>
              <div>
                <!-- <input type="text" class="form-control" v-model="job.onBoardDate"> -->
                <date-picker :date="boardDate" :option="option"></date-picker>
              </div>
            </div>
          </div>
          <div class="require-star">{{$t('about.required')}}</div>
          <div class="visit-border"></div>
          <div class="step-item_title">{{$t('about.education')}}</div>
          <div class="form-group clearfix">
            <div class="pull-left">
              <div>
                <label class="light-gray">{{$t('about.school')}}</label><span class="danger">*</span>
              </div>
              <div>
                <input type="text" class="form-control" v-model="job.schoolAttended">
              </div>
            </div>
            <div class="pull-left">
              <div>
                <label class="light-gray">{{$t('about.course')}}</label>
              </div>
              <div>
                <input type="text" class="form-control" v-model="job.courseDescription">
              </div>
            </div>
          </div>
          <div class="form-group clearfix">
            <div class="pull-left">
              <div>
                <label class="light-gray">{{$t('about.degree')}}</label><span class="danger">*</span>
              </div>
              <div>
                <input type="text" class="form-control" v-model="job.highestDegreeAttained">
              </div>
            </div>
            <div class="pull-left">
              <div>
                <label class="light-gray">{{$t('about.grade')}}</label>
              </div>
              <div>
                <input type="text" class="form-control" v-model="job.gradePointAverage">
              </div>
            </div>
          </div>
          <div class="form-group clearfix">
            <div class="pull-left">
              <div>
                <label class="light-gray">{{$t('about.major')}}</label><span class="danger">*</span>
              </div>
              <div>
                <input type="text" class="form-control" v-model="job.majoy">
              </div>
            </div>
            <div class="pull-left">
              <div>
                <label class="light-gray">{{$t('about.graduated')}}</label><span class="danger">*</span>
              </div>
              <div>
                <input type="text" class="form-control" v-model="job.yearGraduated">
              </div>
            </div>
          </div>
          <div class="require-star">{{$t('about.required')}}</div>
          <div class="visit-border"></div>
          <div class="step-control clearfix">
            <a class="next-step" @click="save">{{$t('about.nextStep')}}</a>
          </div>
        </div>
          <!--  step two -->
          <div class="step-two" v-if="step == 2">
            <div class="step-item_title">{{$t('about.relevant')}}</div>
            <p class="step-item_tips">{{$t('about.moreExper')}}</p>
            <div class="exper-list" v-for="(item,index) in jobExperienceDto" :key="item.id">
              <div class="form-group clearfix">
                <div class="pull-left">
                  <div>
                    <label class="light-gray">{{$t('about.companyName')}}</label>
                  </div>
                  <div>
                    <input type="text" class="form-control"  v-model="item.companyName">
                  </div>
                </div>
                <div class="pull-left">
                  <div>
                    <label class="light-gray">{{$t('about.jobTitle1')}}</label>
                  </div>
                  <div>
                    <input type="text" class="form-control" v-model="item.jobTitle">
                  </div>
                </div>
              </div>
              <div class="form-group clearfix">
                <div class="pull-left">
                  <div>
                    <label class="light-gray">{{$t('about.jobStatus')}}</label>
                  </div>
                  <div>
                    <multiselect v-model="item.jobStatus" select-label="" v-bind:placeholder="$t('about.selectStatus')" :options="statusList"></multiselect>
                  </div>
                </div>
                <div class="pull-left">
                  <div>
                    <label class="light-gray">{{$t('about.startDate')}}</label>
                  </div>
                  <div>
                    <date-picker :date="item.startTime" :option="option"></date-picker>
                  </div>
                </div>
              </div>
              <div class="form-group clearfix">
                <div class="pull-left">
                  <div>
                    <label class="light-gray">{{$t('about.endDate')}}</label>
                  </div>
                  <div>
                    <date-picker :date="item.endTime" :option="option"></date-picker>
                  </div>
                </div>
              </div>
              <div class="form-group clearfix">
                <div class="pull-left">
                  <div>
                    <label class="light-gray">{{$t('about.jobRespon')}}</label>
                  </div>
                  <div>
                    <textarea class="form-control" v-model="item.jobResponsibility"></textarea>
                  </div>
                </div>
              </div>
              <div class="del-other_job" v-if="index>0">
                <a @click="removeJob(index)">{{$t('about.delWork')}}</a>
              </div>
            </div>
            <div class="add-other_job">
              <a title="Add a work experience" @click="addWork">{{$t('about.addWork')}}</a>
            </div>
            <div class="visit-border"></div>
            <div class="step-item_title">{{$t('about.language')}}</div>
            <p class="step-item_tips">{{$t('about.moreLanguage')}}</p>
            <div class="lan-list" v-for="(sub,index) in jobLanguageDto" :key="sub.id">
              <div class="form-group clearfix">
                <div class="pull-left">
                  <div>
                    <label class="light-gray">{{$t('about.language1')}}</label><span class="danger">*</span>
                  </div>
                  <div>
                    <multiselect v-model="sub.language" select-label="" v-bind:placeholder="$t('about.selectLan')" :options="lanList" ></multiselect>
                  </div>
                </div>
                <div class="pull-left">
                  <div>
                    <label class="light-gray">{{$t('about.level')}}</label><span class="danger">*</span>
                  </div>
                  <div>
                    <multiselect v-model="sub.languageLevel" select-label="" v-bind:placeholder="$t('about.selectLevel')" :options="levelList"></multiselect>
                  </div>
                </div>
              </div>
              <div class="del-other_job" v-if="index>0">
                <a @click="removeLan(index)">{{$t('about.delLan')}}</a>
              </div>
            </div>
            <div class="add-other_job">
              <a @click="addLan">{{$t('about.addLanguage')}}</a>
            </div>
            <div class="require-star">{{$t('about.required')}}</div>
            <div class="visit-border"></div>
            <div class="step-item_title">{{$t('about.skill')}}</div>
            <div class="form-group clearfix">
              <div class="pull-left">
                <div>
                  <label class="light-gray">{{$t('about.otherSkill')}}</label>
                </div>
                <div>
                  <textarea  class="form-control" v-model="otherSkill"></textarea>
                </div>
              </div>
            </div>
            <div class="form-group clearfix">
              <div class="pull-left">
                <div>
                  <label class="light-gray">{{$t('about.professional')}}</label>
                </div>
                <div>
                  <textarea class="form-control" v-model="qualifications"></textarea>
                </div>
              </div>
            </div>
            <div class="visit-border"></div>
            <div class="step-control clearfix">
              <a class="next-step" @click="saveNext">{{$t('about.nextStep')}}</a>
              <a class="prev-step" @click="goPrev(1)">{{$t('about.previousStep')}}</a>
            </div>
          </div>
          <!-- step third -->
          <div class="step-third" v-if="step == 3">
            <div class="step-item_title">{{$t('about.self')}}</div>
            <div class="form-group clearfix">
              <div class="pull-left">
                <div>
                  <label class="light-gray">{{$t('about.self')}}</label>
                </div>
                <div>
                  <textarea class="form-control" v-model="selfAssessment"></textarea>
                </div>
              </div>
            </div>
            <div class="visit-border"></div>
            <div class="step-item_title">{{$t('about.attach')}}</div>
            <div class="form-group clearfix">
              <div class="pull-left">
                <div>
                  <label class="light-gray">{{$t('about.resume')}}</label><span class="danger">*</span>
                  <p class="file-tips">{{$t('about.uploadResume')}}</p>
                </div>
                <div>
                  <text-upload :catalog="102" @complete="uploadResume"></text-upload>
                </div>
              </div>
            </div>
            <div class="form-group clearfix">
              <div class="pull-left">
                <div>
                  <label class="light-gray">{{$t('about.letter')}}</label>
                  <p class="file-tips">{{$t('about.uploadLetter')}}</p>
                </div>
                <div>
                  <text-upload :catalog="102" @complete="uploadLetter"></text-upload>
                </div>
              </div>
            </div>
            <div class="limit-tips">
              <span>{{$t('about.fileLimit')}}</span>
            </div>
            <div class="visit-border"></div>
            <div class="step-control clearfix">
              <a class="next-step" @click="saveEnd">{{$t('about.nextStep')}}</a>
              <a class="prev-step" @click="goPrev(2)">{{$t('about.previousStep')}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-split"></div>
  </div>
</template>
<script>
import { Multiselect } from 'vue-multiselect'
import datePicker from 'vue-datepicker'
import TextUpload from '@/components/TextUpload'
import { MessageBox } from 'mint-ui'
import api from '@/api/api'


export default {
  name: 'join-us',
  data() {
    return {
      jobDetail: {},
      qualifications: null,
      otherSkill: null,
      countryList: [
        {},
      ],
      firstStep: '',
      jobExperienceDto: [
        {
          startTime: {
            time: '',
          },
          endTime: {
            time: '',
          },
        },
      ],
      jobLanguageDto: [
        {},
      ],
      step: 1,
      job: {},
      nation: null,
      country: null,
      startTime: {
        time: '',
      },
      startDate: {
        time: '',
      },
      endDate: {
        time: '',
      },
      boardDate: {
        time: '',
      },
      option: {
        type: 'day',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format: 'YYYY/MM/DD',
        placeholder: '',
        readonly: '',
        inputStyle: {
          display: 'inline-block',
          padding: '6px',
          'line-height': '22px',
          'font-size': '16px',
          border: '1px solid #e8e8e8',
          'border-radius': '2px',
          color: '#5F5F5F',
          width: '100%',
        },
        color: {
          header: '#3f51b5',
          headerText: '#fff',
        },
        buttons: {
          ok: 'Ok',
          cancel: 'Cancel',
        },
        overlayOpacity: 0.5, // 0.5 as default
        dismissible: true, // as true as default
      },
      secStep: null,
      jobStatus: null,
      statusList: [this.$t('about.selectStatus'), this.$t('about.statu1'), this.$t('about.statu2')],
      language: null,
      lanList: [
        this.$t('about.selectLan'),
        this.$t('about.arabic'),
        this.$t('about.cantonese'),
        this.$t('about.chinese'),
        this.$t('about.dutch'),
        this.$t('about.english'),
        this.$t('about.french'),
        this.$t('about.german'),
        this.$t('about.italian'),
        this.$t('about.japanese'),
        this.$t('about.korean'),
        this.$t('about.portuguese'),
        this.$t('about.russian'),
        this.$t('about.spanish'),
      ],
      level: null,
      levelList: [
        this.$t('about.selectLevel'),
        this.$t('about.level1'),
        this.$t('about.level2'),
        this.$t('about.level3'),
        this.$t('about.level4'),
      ],
      resume: null,
      letter: null,
      selfAssessment: null,
    }
  },
  computed: {
    isZh() {
      return this.$root.$i18n.locale === 'zh-CN'
    },
  },
  created() {
    api.getJobById(this.$route.params.id).then((data) => {
      this.jobDetail = data
    })
    api.getCountry().then((data) => {
      this.countryList = data
    })
  },
  methods: {
    save() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.job.nationalityId = this.nation.id
          this.job.countryId = this.country.id
          this.job.birthdate = this.startTime.time
          this.job.onBoardDate = this.boardDate.time
          api.addApply(this.job).then((data) => {
            if (data) {
              this.firstStep = data.id
              this.step += 1
            }
          })
        }
      })
    },
    saveNext() {
      this.jobExperienceDto.forEach((k) => {
        /* eslint no-param-reassign: "off" */
        k.startDate = k.startTime.time
        k.endDate = k.endTime.time
      })
      const skillParam = {
        qualifications: this.qualifications,
        otherSkill: this.otherSkill,
        applyJobId: this.firstStep,
        jobExperienceDto: this.jobExperienceDto,
        jobLanguageDto: this.jobLanguageDto,
      }
      api.addSkill(skillParam).then((data) => {
        if (data) {
          // this.secStep = data.applyJobId
          this.step += 1
        }
      })
    },
    saveEnd() {
      const aParam = {
        applyJobId: this.firstStep,
        resume: this.resume.key,
        coverLetter: this.letter ? this.letter.key : null,
        selfAssessment: this.selfAssessment,
      }
      api.addAttach(aParam).then((data) => {
        if (data) {
          this.$router.push({ name: 'apply-finish' })
        }
      })
    },
    addWork() {
      if (!this.jobExperienceDto) {
        this.jobExperienceDto = []
      }
      this.jobExperienceDto.push({
        startTime: {
          time: '',
        },
        endTime: {
          time: '',
        },
      })
    },
    removeJob(index) {
      this.jobExperienceDto.splice(index, 1)
    },
    addLan() {
      if (!this.jobLanguageDto) {
        this.jobLanguageDto = []
      }
      this.jobLanguageDto.push({})
    },
    removeLan(index) {
      this.jobLanguageDto.splice(index, 1)
    },
    uploadResume(result) {
      this.resume = result
    },
    uploadLetter(result) {
      this.letter = result
    },
    goPrev(index) {
      this.step = index
    },
  },
  components: {
    Multiselect,
    datePicker,
    TextUpload,
    MessageBox,
  },
}
</script>
<style lang="scss">
.multiselect.error {
  .multiselect__tags {
    border-color: #ff0000;
  }
}
.step-list {
  border-bottom: 3px solid #000;
  padding-bottom: 6px;
  margin-bottom: 35px;
  >div {
    float: left;
    margin-left: 35px;
    &:first-child{
      margin-left: 0;
    }
    &.active {
      span {
        color: #000;
      }
      span.number {
        border-color: #000;
      }
    }
    span {
      font-size: 15px;
      color: #999;
      float: left;
      margin-left: 5px;
    }
    span.number {
      border: 2px solid #999;
      border-radius: 50%;
      width: 16px;
      height: 16px;
      text-align: center;
      margin-left: 0px;
      box-sizing: content-box;
      font-family: 'MetricSemibold',Arial, Helvetica, sans-serif;
    }
  }
}
.step-form {
  .job-info {
    margin-top: 0;
  }
  .step-item_title {
    font-size: 17px;
    line-height: 20px;
    font-weight: bold;
    margin-bottom: 25px;
  }
}
.require-star {
  font-size: 11px;
  color: #ed3024;
  margin-top: 30px;
}
.step-control {
  .next-step {
    width: 190px;
    float: left;
    background: #ed3024;
    text-align: center;
    font-size: 15px;
    color: #fff;
    padding: 17px 0px 13px 0px;
    cursor: pointer;
  }
  .prev-step {
    font-size: 13px;
    color: #666;
    font-weight: bold;
    text-decoration: underline;
    float: left;
    margin-top: 18px;
    margin-left: 20px;
    cursor: pointer;
  }
}
.cov-vue-date {
  width: 100%;
  &.error {
    input {
      border-color: #ff0000 !important;
    }
  }
}
.step-item_tips {
  font-size: 13px;
  color: #999999;
}
.file-tips {
  font-size: 13px;
  color: #ed3024;
  font-weight: bold;
}
.add-other_job {
  margin-top: 20px;
  a {
    font-size: 13px;
    color: #ed3024;
    font-weight: bold;
    padding-right: 15px;
    background: url(../../assets/img/icon-show.jpg) right 2px no-repeat;
  }
}
.del-other_job {
  margin-top: 20px;
  a {
    font-size: 13px;
    color: #ed3024;
    font-weight: bold;
    padding-right: 15px;
    background: url(../../assets/img/icon-hide.jpg) right 2px no-repeat;
  }
}
.limit-tips {
  font-size: 11px;
  color: #666666;
  span {
    padding-left: 15px;
    background: url(../../assets/img/icon-notes.png) 0px 0px no-repeat;
  }
}
</style>
