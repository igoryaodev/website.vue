<template>
  <div>
    <label class="qiniu-upload">
        <input type="file" @change="upload">
        <slot></slot>
    </label>
  </div>
</template>
<script>
import api from '@/api/api'

export default {
  name: 'text-upload',
  props: ['catalog'],
  data() {
    return {
      fileOptions: {
        url: 'http://upload.qiniu.com/',
      },
      token: null,
    }
  },
  methods: {
    upload(event) {
      const file = event.target.files[0]
      const self = this
      if (file) {
        const formData = new FormData()
        formData.append('file', file)
        api.getUploadToken(this.catalog, file.name).then((data) => {
          formData.append('token', data.token)
          api.uploadFile(formData).then((result) => {
            if (result.key) {
              self.$emit('complete', result)
            }
          })
        })
      }
    },
  },
}
</script>
<style lang="scss">
  .mo-upload {
    display: inline-block;
    position: relative;
    margin-bottom: 0;
    input[type="file"] {
        display: none;
    }
    .mo-upload--label {
        display: inline-block;
        position: relative;
    }
    }
</style>

