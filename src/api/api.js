import axios from 'axios'
import Qs from 'qs'

export default {
  getHome(criteria) {
    return axios.get(`/api/uccaHomes?${Qs.stringify(criteria)}`).then(res => res.data)
  },
  getExhibition(criteria) {
    return axios.get(`/api/uccaActivitys?${Qs.stringify(criteria)}`).then(res => res.data)
  },
  getExhibitionDate(criteria) {
    return axios.get(`/api/uccaActivityTimes?${Qs.stringify(criteria)}`).then(res => res.data)
  },
  getExhibitionById(id) {
    return axios.get(`/api/uccaActivitys/${id}`).then(res => res.data)
  },
  getExhibitionWork(id) {
    return axios.get(`/api/uccaActivityWatchs?activityId=${id}`).then(res => res.data)
  },
  getExhibitionLive(id) {
    return axios.get(`/api/uccaActivityLives?activityId=${id}`).then(res => res.data)
  },
  getProgram(criteria) {
    return axios.get(`/api/uccaEvents?${Qs.stringify(criteria)}`).then(res => res.data)
  },
  getProgramDate(criteria) {
    return axios.get(`/api/uccaEventsTimes?${Qs.stringify(criteria)}`).then(res => res.data)
  },
  getProgramById(id) {
    return axios.get(`/api/uccaEvents/${id}`).then(res => res.data)
  },
  getvideoList(criteria) {
    return axios.get(`/api/uccaVideos?${Qs.stringify(criteria)}`).then(res => res.data)
  },
  getVideoById(id) {
    return axios.get(`/api/uccaVideos/${id}`).then(res => res.data)
  },
  getVideoDate(criteria) {
    return axios.get(`/api/uccaVideoTimes?${Qs.stringify(criteria)}`).then(res => res.data)
  },
  getShopCarousel() {
    return axios.get('/api/uccaMallHomeImages').then(res => res.data)
  },
  getProductList(criteria) {
    return axios.get(`/api/uccaProducts?${Qs.stringify(criteria)}`).then(res => res.data)
  },
  getEventByDate(criteria) {
    return axios.get(`/api/uccaActivitys?${Qs.stringify(criteria)}`).then(res => res.data)
  },
  getShopContent() {
    return axios.get('/api/uccaMallHomeContentPages').then(res => res.data)
  },
  subscribe(criteria) {
    return axios.post('/api/uccaEmail', criteria).then(res => res.data)
  },
  getPageByType(criteria) {
    return axios.get(`/api/uccaInformations?${Qs.stringify(criteria)}`).then(res => res.data)
  },
  getJobList(criteria) {
    return axios.get(`/api/uccaJobs?${Qs.stringify(criteria)}`).then(res => res.data)
  },
  getJobById(id) {
    return axios.get(`/api/uccaJobs/${id}`).then(res => res.data)
  },
  getDepartment(criteria) {
    return axios.get(`/api/uccaDepartments?${Qs.stringify(criteria)}`).then(res => res.data)
  },
  getLevel(criteria) {
    return axios.get(`/api/uccaJobLevels?${Qs.stringify(criteria)}`).then(res => res.data)
  },
  getCountry() {
    return axios.get('/api/uccaCountrys').then(res => res.data)
  },
  addApply(criteria) {
    return axios.post('/api/uccaApplyJobInfos', criteria).then(res => res.data)
  },
  addSkill(criteria) {
    return axios.post('/api/uccaApplyJobSkills', criteria).then(res => res.data)
  },
  addAttach(criteria) {
    return axios.post('/api/uccaApplyJobAttachs', criteria).then(res => res.data)
  },
  getUploadToken(catalog, ext) {
    return axios.get(`/capi/upload/token/${catalog}?name=${encodeURIComponent(ext)}`).then(res => res.data)
  },
  uploadFile(criteria) {
    return axios.post('http://upload.qiniu.com/', criteria).then(res => res.data)
  },
  sendContact(criteria) {
    return axios.post('/api/uccaContacts', criteria).then(res => res.data)
  },
  getEduBanner() {
    return axios.get('/api/uccaEduHomePages').then(res => res.data)
  },
  getEduHot() {
    return axios.get('/api/uccaEduHomeContentPages').then(res => res.data)
  },
  getClassCat() {
    return axios.get('/api/uccaEduCreativityTypes').then(res => res.data)
  },
  getNews(criteria) {
    return axios.get(`/api/uccaEduNews?${Qs.stringify(criteria)}`).then(res => res.data)
  },
  getNewsById(id) {
    return axios.get(`/api/uccaEduNews/${id}`).then(res => res.data)
  },
  getPhotoList(criteria) {
    return axios.get(`/api/uccaEduPhotoAlbums?${Qs.stringify(criteria)}`).then(res => res.data)
  },
  addEduApply(criteria) {
    return axios.post('/api/uccaEduContacts', criteria).then(res => res.data)
  },
  getWeekendShop(criteria) {
    return axios.get(`/api/UCCAEduInformationLists?${Qs.stringify(criteria)}`).then(res => res.data)
  },
  getHomeNews(criteria) {
    return axios.get(`/api/uccaEduHoneInfos?${Qs.stringify(criteria)}`).then(res => res.data)
  },
  getArtClass(id) {
    return axios.get(`/api/uccaEduCreativityById/${id}`).then(res => res.data)
  },
  search(key) {
    return axios.get(`/api/uccaActivitySearchs?key=${key}`).then(res => res.data)
  },
  getEduShopType(criteria) {
    return axios.get(`/api/uccaEduShopTypes?${Qs.stringify(criteria)}`).then(res => res.data)
  },
  getEduShopList(criteria) {
    return axios.get(`/api/uccaEduShopProducts?${Qs.stringify(criteria)}`).then(res => res.data)
  },
  getPastTopicList(criteria) {
    return axios.get(`/api/uccaEduWeekReports?${Qs.stringify(criteria)}`).then(res => res.data)
  },
}
