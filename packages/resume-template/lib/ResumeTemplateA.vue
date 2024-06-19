<template>
  <div id="ru-page" style="background-color: rgb(207, 207, 207);">
    <div v-if="!disabled" style="position: absolute; z-index: 2; right: 0.5rem; top: 0.5;" @click="setDisable">
      {{ data.disabled == true ? "预览" : "编辑" }}
    </div>
    <div id="ru-left">
      <div id="ru-avatar">
        <img :src="data.avatar" alt="" srcset="">
      </div>
      <div class="ru-left-kw-box">

        <div class="ru-left-kw" v-for="base, index in data.baseKw" :key="index">
          <div class="ru-left-key" v-if="data.disabled">{{ base[0] }}</div>
          <input type="text" v-if="!data.disabled" v-model="base[0]" style="width: 4rem;">
          :&nbsp;
          <div class="ru-left-word">
            <input v-model="base[1]" type="text" :disabled="data.disabled">
          </div>
        </div>

      </div>
    </div>
    <div id="ru-right">
      <div class="ru-personage">
        <div class="ru-personage-title">个人简历</div>
        <div class="ru-personage-kws">
          <div class="ru-personage-item" v-for="job, index in data.jobKw" :key="index">
            <input type="text" :disabled="data.disabled" v-model="job[0]" style="width: 4rem;">
            :&nbsp;
            <input type="text" v-model="job[1]" :disabled="data.disabled">
          </div>
        </div>
      </div>

      <BlockHeader title="教育背景" @addItem="data.educationalBackground.push({})" :disabled="data.disabled" >
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1"
            width="28.333332061767578" height="28.333332061767578" viewBox="0 0 28.333332061767578 28.333332061767578">
            <g>
              <path
                d="M1.2448,1.2448C2.04183,0.447766,3.12283,0,4.25,0C4.25,0,24.0833,0,24.0833,0C25.2106,0,26.2915,0.447766,27.0885,1.2448C27.8855,2.04183,28.3333,3.12283,28.3333,4.25C28.3333,4.25,28.3333,24.0833,28.3333,24.0833C28.3333,25.2106,27.8855,26.2915,27.0885,27.0885C26.2915,27.8855,25.2106,28.3333,24.0833,28.3333C24.0833,28.3333,4.25,28.3333,4.25,28.3333C3.12283,28.3333,2.04183,27.8855,1.2448,27.0885C0.447766,26.2915,0,25.2106,0,24.0833C0,24.0833,0,4.25,0,4.25C0,3.12283,0.447766,2.04183,1.2448,1.2448C1.2448,1.2448,1.2448,1.2448,1.2448,1.2448ZM15.5833,25.5C15.5833,25.5,24.0833,25.5,24.0833,25.5C24.459,25.5,24.8194,25.3507,25.0851,25.0851C25.3507,24.8194,25.5,24.459,25.5,24.0833C25.5,24.0833,25.5,4.25,25.5,4.25C25.5,3.87427,25.3507,3.51394,25.0851,3.24826C24.8194,2.98259,24.459,2.83333,24.0833,2.83333C24.0833,2.83333,15.5833,2.83333,15.5833,2.83333C15.5833,2.83333,15.5833,25.5,15.5833,25.5C15.5833,25.5,15.5833,25.5,15.5833,25.5ZM12.75,2.83333C12.75,2.83333,12.75,25.5,12.75,25.5C12.75,25.5,4.25,25.5,4.25,25.5C3.87427,25.5,3.51394,25.3507,3.24826,25.0851C2.98259,24.8194,2.83333,24.459,2.83333,24.0833C2.83333,24.0833,2.83333,4.25,2.83333,4.25C2.83333,3.87427,2.98259,3.51394,3.24826,3.24826C3.51394,2.98259,3.87427,2.83333,4.25,2.83333C4.25,2.83333,12.75,2.83333,12.75,2.83333C12.75,2.83333,12.75,2.83333,12.75,2.83333Z"
                fill-rule="evenodd" fill="#000000" fill-opacity="1" />
            </g>
          </svg>
        </template>
        <template #context>
          <div v-for="ebItem in data.educationalBackground">
            <div style="display: flex; justify-content: space-between; margin-top: 1rem;">
              <div style="display: flex;">
                <input type="text" placeholder="开始时间" v-model="ebItem.starTime" style="width: 5rem;" :disabled="data.disabled">
                -
                <input type="text" placeholder="结束时间" v-model="ebItem.endTime" style="width: 5rem;" :disabled="data.disabled">
              </div>
              <div><input type="text" placeholder="就读大学" v-model="ebItem.collegiate" style="text-align: center" :disabled="data.disabled"></div>
              <div><input type="text" placeholder="就读专业" v-model="ebItem.profession"  style="text-align: right" :disabled="data.disabled"></div>
            </div>
            <div style="transform: translateX(0.2rem);">
              <div style="display: flex;">
                <div style="width: 20%;">专业成绩：</div>
                <input type="text" v-model="ebItem.professionalAchievement" placeholder="请输入专业成绩" :disabled="data.disabled">
              </div>
              <div style="display: flex;">
                <div style="width: 20%;">主修课程：</div>
                <input type="text" v-model="ebItem.majorCourse" placeholder="请输入主修课程" :disabled="data.disabled">
              </div>
            </div>
            </div>
        </template>
      </BlockHeader>

      <BlockHeader title="工作经验" @addItem="data.workExperience.push({})" :disabled="data.disabled">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1"
            width="29.33333396911621" height="26.666667938232422" viewBox="0 0 29.33333396911621 26.666667938232422">
            <g>
              <path
                d="M9.17157,1.17157C9.92172,0.421427,10.9391,0,12,0C12,0,17.3333,0,17.3333,0C18.3941,0,19.4116,0.421427,20.1617,1.17157C20.9119,1.92172,21.3333,2.93913,21.3333,4C21.3333,4,21.3333,5.33333,21.3333,5.33333C21.3333,5.33333,25.3333,5.33333,25.3333,5.33333C27.5425,5.33333,29.3333,7.1242,29.3333,9.33333C29.3333,9.33333,29.3333,22.6667,29.3333,22.6667C29.3333,24.8759,27.5425,26.6667,25.3333,26.6667C25.3333,26.6667,4,26.6667,4,26.6667C1.79087,26.6667,0,24.8759,0,22.6667C0,22.6667,0,9.33333,0,9.33333C0,7.1242,1.79087,5.33333,4,5.33333C4,5.33333,8,5.33333,8,5.33333C8,5.33333,8,4,8,4C8,2.93913,8.42143,1.92172,9.17157,1.17157C9.17157,1.17157,9.17157,1.17157,9.17157,1.17157ZM8,8C8,8,4,8,4,8C3.26363,8,2.66667,8.59696,2.66667,9.33333C2.66667,9.33333,2.66667,22.6667,2.66667,22.6667C2.66667,23.4031,3.26363,24,4,24C4,24,8,24,8,24C8,24,8,8,8,8C8,8,8,8,8,8ZM10.6667,24C10.6667,24,10.6667,8,10.6667,8C10.6667,8,18.6667,8,18.6667,8C18.6667,8,18.6667,24,18.6667,24C18.6667,24,10.6667,24,10.6667,24C10.6667,24,10.6667,24,10.6667,24ZM21.3333,24C21.3333,24,25.3333,24,25.3333,24C26.0697,24,26.6667,23.4031,26.6667,22.6667C26.6667,22.6667,26.6667,9.33333,26.6667,9.33333C26.6667,8.59695,26.0697,8,25.3333,8C25.3333,8,21.3333,8,21.3333,8C21.3333,8,21.3333,24,21.3333,24C21.3333,24,21.3333,24,21.3333,24ZM18.6667,5.33333C18.6667,5.33333,10.6667,5.33333,10.6667,5.33333C10.6667,5.33333,10.6667,4,10.6667,4C10.6667,3.64637,10.8071,3.30724,11.0572,3.05719C11.3072,2.80715,11.6464,2.66667,12,2.66667C12,2.66667,17.3333,2.66667,17.3333,2.66667C17.6869,2.66667,18.0261,2.80715,18.2761,3.05719C18.5261,3.30724,18.6667,3.64637,18.6667,4C18.6667,4,18.6667,5.33333,18.6667,5.33333C18.6667,5.33333,18.6667,5.33333,18.6667,5.33333Z"
                fill-rule="evenodd" fill="#000000" fill-opacity="1" />
            </g>
          </svg>
        </template>
        <template #context>
          <div v-for="weItem in data.workExperience">
            <div style="display: flex; justify-content: space-between; margin-top: 1rem;">
              <div style="display: flex;">
                <input type="text" placeholder="开始时间" v-model="weItem.starTime" style="width: 5rem;" :disabled="data.disabled">
                -
                <input type="text" placeholder="结束时间" v-model="weItem.endTime"  style="width: 5rem;" :disabled="data.disabled">
              </div>
              <div><input type="text" placeholder="工作单位" v-model="weItem.workUnit" style="text-align: center" :disabled="data.disabled"></div>
              <div><input type="text" placeholder="工作职位" v-model="weItem.jobPosition"  style="text-align: right" :disabled="data.disabled"></div>
            </div>
            <textarea rows="2" v-model="weItem.context" style="width: 100%;" :disabled="data.disabled">

          </textarea>
          </div>
        </template>
      </BlockHeader>

      <BlockHeader title="荣誉证书" @addItem="data.certificateOfHonor.push({})" :disabled="data.disabled">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1"
            width="24" height="36" viewBox="0 0 24 36">
            <g>
              <path
                d="M12,3C7.02943,3,3,7.02943,3,12C3,16.9706,7.02943,21,12,21C13.7458,21,15.3755,20.5029,16.7551,19.6427C16.8297,19.5837,16.9103,19.5315,16.9959,19.4872C19.4101,17.8731,21,15.1222,21,12C21,7.02943,16.9706,3,12,3C12,3,12,3,12,3ZM19.2924,21.5307C22.1544,19.3375,24,15.8843,24,12C24,5.37258,18.6274,0,12,0C5.37258,0,0,5.37258,0,12C0,15.885,1.84624,19.3389,4.70925,21.5321C4.70925,21.5321,3.01306,34.3024,3.01306,34.3024C2.93723,34.8735,3.19503,35.4375,3.67644,35.7537C4.15785,36.0699,4.77783,36.0826,5.27175,35.7863C5.27175,35.7863,12,31.7493,12,31.7493C12,31.7493,18.7283,35.7863,18.7283,35.7863C19.2222,36.0825,19.842,36.0699,20.3235,35.7537C20.8048,35.4375,21.0627,34.8736,20.9869,34.3027C20.9869,34.3027,19.2924,21.5307,19.2924,21.5307C19.2924,21.5307,19.2924,21.5307,19.2924,21.5307ZM16.4792,23.1362C15.0951,23.6934,13.5834,24,12,24C10.4172,24,8.90599,23.6936,7.52245,23.1368C7.52245,23.1368,6.39666,31.6126,6.39666,31.6126C6.39666,31.6126,11.2282,28.7137,11.2282,28.7137C11.7033,28.4287,12.2967,28.4287,12.7717,28.7137C12.7717,28.7137,17.6038,31.6129,17.6038,31.6129C17.6038,31.6129,16.4792,23.1362,16.4792,23.1362C16.4792,23.1362,16.4792,23.1362,16.4792,23.1362Z"
                fill-rule="evenodd" fill="#000000" fill-opacity="1" />
            </g>
          </svg>
        </template>
        <template #context>
          <div style="display: flex;" v-for="cohItem, index in data.certificateOfHonor" :key="index">
            <input type="text" placeholder="证书名称" v-model="cohItem.certificateName" :disabled="data.disabled">
            <input type="text" placeholder="获奖时间" v-model="cohItem.awardTime" style="text-align: center" :disabled="data.disabled">
            <input type="text" placeholder="颁发单位" v-model="cohItem.issuer" style="text-align: right" :disabled="data.disabled">
          </div>
        </template>
      </BlockHeader>

      <BlockHeader title="自我评价" :disabled="data.disabled">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1"
            width="32" height="26.666667938232422" viewBox="0 0 32 26.666667938232422">
            <g>
              <path
                d="M10.8906,0.593733C11.1379,0.222801,11.5542,0,12,0C12,0,20,0,20,0C20.4459,0,20.8621,0.222801,21.1095,0.593733C21.1095,0.593733,23.3803,4,23.3803,4C23.3803,4,28,4,28,4C29.0609,4,30.0783,4.42143,30.8284,5.17157C31.5785,5.92172,32,6.93913,32,8C32,8,32,22.6667,32,22.6667C32,23.7276,31.5785,24.7449,30.8284,25.4951C30.0783,26.2452,29.0609,26.6667,28,26.6667C28,26.6667,4,26.6667,4,26.6667C2.93913,26.6667,1.92172,26.2452,1.17157,25.4951C0.421428,24.7449,0,23.7276,0,22.6667C0,22.6667,0,8,0,8C0,6.93913,0.421428,5.92172,1.17157,5.17157C1.92172,4.42143,2.93913,4,4,4C4,4,8.61976,4,8.61976,4C8.61976,4,10.8906,0.593733,10.8906,0.593733C10.8906,0.593733,10.8906,0.593733,10.8906,0.593733ZM12.7136,2.66667C12.7136,2.66667,10.4427,6.07293,10.4427,6.07293C10.1954,6.44387,9.77913,6.66667,9.33333,6.66667C9.33333,6.66667,4,6.66667,4,6.66667C3.64637,6.66667,3.30724,6.80715,3.05719,7.05719C2.80715,7.30724,2.66667,7.64637,2.66667,8C2.66667,8,2.66667,22.6667,2.66667,22.6667C2.66667,23.0203,2.80715,23.3595,3.05719,23.6095C3.30724,23.8595,3.64637,24,4,24C4,24,28,24,28,24C28.3536,24,28.6928,23.8595,28.9428,23.6095C29.1928,23.3595,29.3333,23.0203,29.3333,22.6667C29.3333,22.6667,29.3333,8,29.3333,8C29.3333,7.64637,29.1928,7.30724,28.9428,7.05719C28.6928,6.80715,28.3536,6.66667,28,6.66667C28,6.66667,22.6667,6.66667,22.6667,6.66667C22.2208,6.66667,21.8045,6.44387,21.5572,6.07293C21.5572,6.07293,19.2864,2.66667,19.2864,2.66667C19.2864,2.66667,12.7136,2.66667,12.7136,2.66667C12.7136,2.66667,12.7136,2.66667,12.7136,2.66667ZM16,10.6667C13.7908,10.6667,12,12.4575,12,14.6667C12,16.8759,13.7908,18.6667,16,18.6667C18.2092,18.6667,20,16.8759,20,14.6667C20,12.4575,18.2092,10.6667,16,10.6667C16,10.6667,16,10.6667,16,10.6667ZM9.33333,14.6667C9.33333,10.9848,12.3181,8,16,8C19.6819,8,22.6667,10.9848,22.6667,14.6667C22.6667,18.3485,19.6819,21.3333,16,21.3333C12.3181,21.3333,9.33333,18.3485,9.33333,14.6667C9.33333,14.6667,9.33333,14.6667,9.33333,14.6667Z"
                fill-rule="evenodd" fill="#000000" fill-opacity="1" />
            </g>
          </svg>
        </template>
        <template #context>
          <textarea rows="4" style="width: 100%;" v-model="data.selfEvaluation" :disabled="data.disabled"></textarea>
        </template>
      </BlockHeader>



    </div>
  </div>
</template>

<script setup>
import BlockHeader from "./BlockHeaderA.vue"
import { ref, onMounted, onUnmounted, reactive, toRefs } from 'vue'

defineOptions({
  name: "ResumeTemplateA"
})


const props = defineProps({
  data: {
    type: Object,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: true
  }
})

const { data, disabled } = toRefs(props)

const setDisable = (flag) => {
  if (disabled) {
    data.value.disabled = !data.value.disabled
  }
}

</script>

<style scoped>
#ru-page {
  width: 100%;
  display: flex;
  position: relative;
}

#ru-left {
  width: 25.48076923076923%;
  height: 100%;
  background-color: rgb(207, 207, 207);

  min-height: 10px;
}

#ru-right {
  width: 74.51923076923077%;
  height: 100%;
  background-color: rgb(255, 255, 255);
  /* height: 100%; */
  /* margin: 5%; */
  min-height: 100px;
}

#ru-avatar {
  width: 60%;
  margin: 20%;
  display: flex;
}

#ru-avatar>img {
  width: 100%;
}

.ru-left-kw-box {
  margin-left: 20%;
}

.ru-left-kw {
  display: flex;
  margin-bottom: 15%;

}

.ru-left-key {
  /* display: flex; */
  width: 4em;
  text-align: justify;
}

.ru-left-key:after {
  content: '';
  display: inline-block;
  width: 100%;
  height: 0;
}

input {
  background-color: transparent;
  /* 背景色透明 */
  border: 1px solid transparent;
  /* 边框透明 */
  outline: none;
  /* 去除输入框聚焦时的默认边框 */
  padding: 5px;
  /* 添加一些内边距使输入内容不贴边 */
  color: inherit;
  /* 继承父元素的文本颜色 */
  font-size: inherit;
  /* 继承父元素的字体大小 */
}

input:focus {
  border: 1px solid rgba(0, 0, 0, 0.3);
  /* 聚焦时显示半透明的边框 */
}

textarea {
  background-color: transparent;
  /* 背景色透明 */
  border: 1px solid transparent;
  /* 边框透明 */
  outline: none;
  /* 去除输入框聚焦时的默认边框 */
  padding: 5px;
  /* 添加一些内边距使输入内容不贴边 */
  color: inherit;
  /* 继承父元素的文本颜色 */
  font-size: inherit;
  /* 继承父元素的字体大小 */
}

textarea:focus {
  border: 1px solid rgba(0, 0, 0, 0.3);
  /* 聚焦时显示半透明的边框 */
}


.ru-left-word {
  width: 50%;
}

input {
  width: 100%;
  transform: translateY(-4px);
}

.ru-personage {
  width: 100%;
  margin: 5%;
}

.ru-personage-title {
  font-size: 2rem;
}

.ru-personage-kws {
  display: flex;
  flex-wrap: wrap
}

.ru-personage-item {
  width: 45%;
  display: flex;
  margin: 3% 0 0 0;
}

.ru-personage-kws input {

  width: 50%;
}

.ru-educational-background {
  margin: 0 5%;
}

.ru-educational-background-title {
  display: flex;

}

.ru-educational-background-title-text {
  flex: 1;
  height: 3rem;
  margin-left: 0.5rem;
  border-bottom: solid 1px #cfcfcf;
  font-size: 2rem;
}

.ru-icon-bg {
  width: 3rem;
  height: 3rem;
  border-radius: 3rem;
  background-color: #cfcfcf;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.ru-icon-bg>svg {
  width: 50%;
}
</style>