<template>
  <div class="trial-wrap common-wrap">
    <div class="hidden-xs">
        <div class="common-title">{{$t('contact.enjoy')}}</div>
        <div class="trial-info">
          <div>
            <img src="../../../assets/img/banner17.jpg" alt="">
          </div>
          <div class="trial-text">
            <p>{{$t('contact.trialNow')}}</p>
          </div>
        </div>
        <div class="trial-apply common-post">
          <div class="trial-group">
            <div class="form-group clearfix">
              <div class="pull-left">
                <label for="">{{$t('contact.lastName')}}&nbsp;<span>*</span></label>
                <input type="text" class="form-control" v-model="contact.lastName" v-validate="'required'" :class="{'error': errors.has('lastName')}" name="lastName">
              </div>
              <div class="pull-right">
                <label for="">{{$t('contact.firstName')}}&nbsp;<span>*</span></label>
                <input type="text" class="form-control" v-model="contact.firstName" v-validate="'required'" :class="{'error': errors.has('firstName')}" name="firstName">
              </div>
            </div>
            <div class="form-group clearfix">
              <div class="pull-left">
                <label for="">{{$t('contact.babyAge')}}&nbsp;<span>*</span></label>
                <input type="text" class="form-control" v-model="contact.age" v-validate="'required'" :class="{'error': errors.has('age')}" name="age">
              </div>
              <div class="pull-right">
                <label for="">{{$t('contact.babySex')}}&nbsp;<span>*</span></label>
                <multiselect v-model="sex"  select-label="" v-bind:placeholder="''"  :options="sexList" v-validate="'required'" :class="{'error': errors.has('sex')}" name="sex"></multiselect>
              </div>
            </div>
            <div class="form-group clearfix">
              <div class="pull-left">
                <label for="">{{$t('contact.tel')}}&nbsp;<span>*</span></label>
                <input type="text" class="form-control" v-model="contact.phone" v-validate="'required'" :class="{'error': errors.has('phone')}" name="phone">
              </div>
              <div class="pull-right">
                <label for="">{{$t('contact.email')}}&nbsp;<span>*</span></label>
                <input type="text" class="form-control" v-model="contact.email" v-validate="'required|email'" :class="{'error': errors.has('email')}" name="email">
              </div>
            </div>
            <div class="form-group">
              <label for="">{{$t('contact.note')}}&nbsp;<span>*</span></label>
              <textarea name="" id="" cols="30" rows="5" class="form-control" v-model="contact.yourMessage" v-validate="'required'" :class="{'error': errors.has('message')}" name="message"></textarea>
            </div>
            <div class="form-group check-subscribe">
              <label for="">
                <input type="checkbox" v-model="contact.isReceive">
                {{$t('contact.receive')}}
              </label>
            </div>
            <div class="form-group clearfix">
              <button class="btn apply-submit" @click="submit">{{$t('contact.submit')}}</button>
              <a class="apply-cancel" @click="cancel">{{$t('contact.cancel')}}</a>
            </div>
            <div class="required-info">
              {{$t('contact.require1')}}<span>*</span>{{$t('contact.require2')}}
            </div>
          </div>
        </div>
        <div class="footer-split fot-border"></div>
      </div>
      <div class="visible-xs mobile-common_wrap mcreative-wrap">
        <div class="mobile-common_title">{{$t('contact.enjoy')}}</div>
        <div class="mtrial-img">
          <img src="../../../assets/img/banner17.jpg" alt="">
        </div>
        <div class="mtrial-content">
          <div class="mtrial-group form-ucca">
            <div class="form-group clearfix">
              <div class="pull-left">
                <label for="" class="light-gray">{{$t('contact.lastName')}}&nbsp;<span class="danger">*</span></label>
                <input type="text" class="form-control" v-model="contact.lastName" v-validate="'required'" :class="{'error': errors.has('lastName')}" name="lastName">
              </div>
              <div class="pull-right">
                <label for="" class="light-gray">{{$t('contact.firstName')}}&nbsp;<span class="danger">*</span></label>
                <input type="text" class="form-control" v-model="contact.firstName" v-validate="'required'" :class="{'error': errors.has('firstName')}" name="firstName">
              </div>
            </div>
            <div class="form-group clearfix">
              <div class="pull-left">
                <label for="" class="light-gray">{{$t('contact.babyAge')}}&nbsp;<span class="danger">*</span></label>
                <input type="text" class="form-control" v-model="contact.age" v-validate="'required'" :class="{'error': errors.has('age')}" name="age">
              </div>
              <div class="pull-right">
                <label for="" class="light-gray">{{$t('contact.babySex')}}&nbsp;<span class="danger">*</span></label>
                <multiselect v-model="sex"  select-label="" v-bind:placeholder="''"  :options="sexList" v-validate="'required'" :class="{'error': errors.has('sex')}" name="sex"></multiselect>
              </div>
            </div>
            <div class="form-group clearfix">
              <div class="pull-left">
                <label for="" class="light-gray">{{$t('contact.tel')}}&nbsp;<span class="danger">*</span></label>
                <input type="text" class="form-control" v-model="contact.phone" v-validate="'required'" :class="{'error': errors.has('phone')}" name="phone">
              </div>
              <div class="pull-right">
                <label for="" class="light-gray">{{$t('contact.email')}}&nbsp;<span class="danger">*</span></label>
                <input type="text" class="form-control" v-model="contact.email" v-validate="'required|email'" :class="{'error': errors.has('email')}" name="email">
              </div>
            </div>
            <div class="form-group clearfix">
              <div class="pull-left">
                <label for="" class="light-gray">{{$t('contact.tel')}}&nbsp;<span class="danger">*</span></label>
                <input type="text" class="form-control" v-model="contact.phone" v-validate="'required'" :class="{'error': errors.has('phone')}" name="phone">
              </div>
              <div class="pull-right">
                <label for="" class="light-gray">{{$t('contact.email')}}&nbsp;<span class="danger">*</span></label>
                <input type="text" class="form-control" v-model="contact.email" v-validate="'required|email'" :class="{'error': errors.has('email')}" name="email">
              </div>
            </div>
            <div class="form-group">
              <label for="" class="light-gray">{{$t('contact.note')}}&nbsp;<span class="danger">*</span></label>
              <textarea name="" id="" cols="30" rows="5" class="form-control" v-model="contact.yourMessage" v-validate="'required'" :class="{'error': errors.has('message')}" name="message"></textarea>
            </div>
            <div class="form-group check-subscribe">
              <label for="" class="light-gray">
                <input type="checkbox" v-model="contact.isReceive">
                {{$t('contact.receive')}}
              </label>
            </div>
            <div class="form-group clearfix">
              <button class="btn apply-submit" @click="submit">{{$t('contact.submit')}}</button>
              <a class="apply-cancel" @click="cancel">{{$t('contact.cancel')}}</a>
            </div>
            <div class="required-info">
              {{$t('contact.require1')}}<span class="danger">*</span>{{$t('contact.require2')}}
            </div>
          </div>
        </div>
      </div>
      </div>
</template>
<script>
import { Multiselect } from 'vue-multiselect'
import { MessageBox } from 'mint-ui'
import api from '@/api/api'

export default {
  name: 'reservation',
  data() {
    return {
      sex: null,
      sexList: [
        this.$t('contact.male'),
        this.$t('contact.female'),
      ],
      contact: {},
    }
  },
  methods: {
    submit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.contact.sex = this.sex
          api.addEduApply(this.contact).then((data) => {
            if (data) {
              MessageBox.alert('发送成功', '')
              this.contact = {}
            }
          })
        }
      })
    },
    cancel() {
      this.contact = {}
    },
  },
  components: {
    Multiselect,
    MessageBox,
  },
}
</script>
<style lang="scss">
.trial-info {
  margin-top: 45px;
}
.trial-text {
  margin-top: 16px;
  font-size: 12px;
  color: #000;
  font-family: "Microsoft Yahei","SimSun";
  line-height: 18px;
}
.trial-apply {
  margin-top: 45px;
  border-top: 1px solid #000;
  padding-top: 30px;
  .trial-group {
    width: 740px;
  }
}
.apply-cancel {
  cursor: pointer;
}
@media screen and (max-width: 767px) {
  .mtrial-img {
    img {
      width: 100%;
      height: auto;
    }
  }
  .mtrial-group {
    margin-top: 20px;
    .form-group {
      margin-bottom: 0;
    }
    .pull-left {
      width: 100%;
      margin-right: 0;
      margin-bottom: 12px;
    }
    .pull-right {
      width: 100%;
      margin-right: 0;
      margin-bottom: 12px;
    }
    textarea {
      width: 100%;
    }
    .check-subscribe {
      margin-top: 12px;
      margin-bottom: 12px;
    }
    .required-info {
      font-size: 13px;
      margin-top: 10px;
      color: #999;
    }
    .apply-submit {
      width: 70%;
      cursor: pointer;
      background: #ed3024;
      font-size: 15px;
      color: #fff;
      text-align: center;
    }
    .apply-cancel {
      margin-left: 10px;
    }
  }
}
</style>


