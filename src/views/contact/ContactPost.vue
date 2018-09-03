<template>
  <div class="exhibiton-wrap">
    <div class="hidden-xs">
    <div class="common-title">{{$t('contact.enquiry')}}</div>
    <div class="visit-border">
    </div>
    <div class="lang_zh form-ucca">
      <div class="form-group clearfix">
        <div class="pull-left">
          <div>
            <label class="light-gray">{{$t('contact.lastName')}}</label><span class="danger">*</span>
          </div>
          <div>
            <input type="text" class="form-control" v-model="contact.lastName" v-validate="'required'" name="last" :class="{error: errors.has('last')}">
          </div>
        </div>
        <div class="pull-left">
          <div>
            <label class="light-gray">{{$t('contact.firstName')}}</label><span class="danger">*</span>
          </div>
          <div>
            <input type="text" class="form-control" v-model="contact.firstName" v-validate="'required'" name="first" :class="{error: errors.has('first')}">
          </div>
        </div>
      </div>
      <div class="form-group clearfix">
        <div class="pull-left">
          <div>
            <label class="light-gray">{{$t('contact.prefix')}}</label><span class="danger">*</span>
          </div>
          <div>
          <!-- <select class="form-control">
            <option value="先生">先生</option>
            <option value="女士">女士</option>
          </select> -->
           <multiselect class="mult-select" v-validate="'required'" name="prefix" :class="{error: errors.has('prefix')}" v-model="contact.prefix" :options="genderList" :searchable="false" :close-on-select="false" :show-labels="false" placeholder="先生"></multiselect>
          <!-- <pre class="language-json"><code>{{ value  }}</code></pre> -->
          </div>
        </div>
        <div class="pull-left">
          <div>
            <label class="light-gray">{{$t('contact.email')}}</label><span class="danger">*</span>
          </div>
          <div>
            <input type="text" class="form-control" v-model="contact.email" v-validate="'required|email'" name="email" :class="{error: errors.has('email')}">
          </div>
        </div>
      </div>
      <div class="form-group clearfix">
        <div class="pull-left">
          <div>
            <label class="light-gray">{{$t('contact.phone')}}</label><span class="danger">*</span>
          </div>
          <div>
            <input type="text" class="form-control" v-model="contact.phone" v-validate="'required'" name="phone" :class="{error: errors.has('phone')}">
          </div>
        </div>
        <div class="pull-left">
          <div>
            <label class="light-gray">{{$t('contact.type')}}</label><span class="danger">*</span>
          </div>
          <div>
          <multiselect class="mult-select" v-validate="'required'" name="enquire" :class="{error: errors.has('enquire')}" v-model="contact.enquiryType" :options="advisoryList" :searchable="false" :close-on-select="false" :show-labels="false" placeholder="一般咨询"></multiselect>
            <!-- <input type="text" class="form-control"> -->
          </div>
        </div>
      </div>
      <div class="form-group clearfix">
        <div class="pull-left">
          <div>
            <label class="light-gray">{{$t('contact.message')}}</label><span class="danger">*</span>
          </div>
          <div>
            <textarea placeholder="不超过200字" v-model="contact.yourMessage" v-validate="'required'" name="message" :class="{error: errors.has('message')}"></textarea>
          </div>
        </div>
      </div>
      <!-- <div class="form-group clearfix">
        <div class="pull-left">
          <div>
            <label class="light-gray">请输入图片中显示的验证码</label><span class="danger">*</span>
          </div>
          <div>
            <input type="text" class="form-control">
          </div>
        </div>
      </div> -->
      <div class="form-group clearfix">
        <div class="pull-left">
          <div>
            <button class="danger-btn" @click="submit">{{$t('contact.submit')}}</button>
          </div>
        </div>
      </div>
      <div class="form-group clearfix">
        <div class="pull-left">
          <div class="tips">
            带 <span class="danger">*</span> 号为必填项
          </div>
        </div>
      </div>
    </div>
    <div class="footer-split"></div>
    </div>
    <div class="visible-xs mcontact_wrap">
      <div class="mobile-common_title">{{$t('contact.enquiry')}}</div>
      <div class="mcontact-content">
        <div class="lang_zh form-ucca">
      <div class="form-group clearfix">
        <div class="pull-left">
          <div>
            <label class="light-gray">{{$t('contact.lastName')}}</label><span class="danger">*</span>
          </div>
          <div>
            <input type="text" class="form-control" v-model="contact.lastName" v-validate="'required'" name="last" :class="{error: errors.has('last')}">
          </div>
        </div>
        <div class="pull-left">
          <div>
            <label class="light-gray">{{$t('contact.firstName')}}</label><span class="danger">*</span>
          </div>
          <div>
            <input type="text" class="form-control" v-model="contact.firstName" v-validate="'required'" name="first" :class="{error: errors.has('first')}">
          </div>
        </div>
      </div>
      <div class="form-group clearfix">
        <div class="pull-left">
          <div>
            <label class="light-gray">{{$t('contact.prefix')}}</label><span class="danger">*</span>
          </div>
          <div>
          <!-- <select class="form-control">
            <option value="先生">先生</option>
            <option value="女士">女士</option>
          </select> -->
           <multiselect class="mult-select" v-validate="'required'" name="prefix" :class="{error: errors.has('prefix')}" v-model="contact.prefix" :options="genderList" :searchable="false" :close-on-select="false" :show-labels="false" placeholder="先生"></multiselect>
          <!-- <pre class="language-json"><code>{{ value  }}</code></pre> -->
          </div>
        </div>
        <div class="pull-left">
          <div>
            <label class="light-gray">{{$t('contact.email')}}</label><span class="danger">*</span>
          </div>
          <div>
            <input type="text" class="form-control" v-model="contact.email" v-validate="'required|email'" name="email" :class="{error: errors.has('email')}">
          </div>
        </div>
      </div>
      <div class="form-group clearfix">
        <div class="pull-left">
          <div>
            <label class="light-gray">{{$t('contact.phone')}}</label><span class="danger">*</span>
          </div>
          <div>
            <input type="text" class="form-control" v-model="contact.phone" v-validate="'required'" name="phone" :class="{error: errors.has('phone')}">
          </div>
        </div>
        <div class="pull-left">
          <div>
            <label class="light-gray">{{$t('contact.type')}}</label><span class="danger">*</span>
          </div>
          <div>
          <multiselect class="mult-select" v-validate="'required'" name="enquire" :class="{error: errors.has('enquire')}" v-model="contact.enquiryType" :options="advisoryList" :searchable="false" :close-on-select="false" :show-labels="false" placeholder="一般咨询"></multiselect>
            <!-- <input type="text" class="form-control"> -->
          </div>
        </div>
      </div>
      <div class="form-group clearfix">
        <div class="pull-left">
          <div>
            <label class="light-gray">{{$t('contact.message')}}</label><span class="danger">*</span>
          </div>
          <div>
            <textarea placeholder="不超过200字" v-model="contact.yourMessage" v-validate="'required'" name="message" :class="{error: errors.has('message')}"></textarea>
          </div>
        </div>
      </div>
      <!-- <div class="form-group clearfix">
        <div class="pull-left">
          <div>
            <label class="light-gray">请输入图片中显示的验证码</label><span class="danger">*</span>
          </div>
          <div>
            <input type="text" class="form-control">
          </div>
        </div>
      </div> -->
      <div class="form-group clearfix">
        <div class="pull-left">
          <div>
            <button class="danger-btn" @click="submit">{{$t('contact.submit')}}</button>
          </div>
        </div>
      </div>
      <div class="form-group clearfix">
        <div class="pull-left">
          <div class="tips">
            带 <span class="danger">*</span> 号为必填项
          </div>
        </div>
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
    name: 'contact-post',
    data() {
      return {
        genderList: ['先生', '女士'],
        // gender: null,
        // advisory: null,
        advisoryList: ['一般咨询', '展览', '公共项目', '会员', '门票'],
        contact: {
          prefix: '先生',
          enquiryType: '一般咨询',
        },
      }
    },
    methods: {
      submit() {
        this.$validator.validateAll().then((result) => {
          if (result) {
            api.sendContact(this.contact).then((data) => {
              if (data) {
                MessageBox.alert('发送成功', '').then(() => {
                  this.contact = {
                    prefix: '先生',
                    enquiryType: '一般咨询',
                  }
                })
              }
            })
          }
        })
      },
    },
    components: {
      Multiselect,
      MessageBox,
    },
  }
</script>
<style lang="scss">
@media screen and (max-width: 767px) {
  .mcontact-content {
    .form-ucca .pull-left {
      width: 100%;
      margin: 0;
      margin-bottom: 12px;
    }
    .form-ucca textarea {
      width: 100%;
      max-width: 100%;
    }
    .form-ucca .danger-btn {
      width: 100%;
    }
    .form-group {
      margin-bottom: 0px;
    }
  }
}
</style>
