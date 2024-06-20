<template>
  <div style="display: flex; width: 100%; background-color: #ffffff; flex-direction: column; align-items: center; position: relative;">
    <div v-if="!disabled" style="position: absolute; z-index: 2; right: 0.5rem; top: 0.5;" @click="setDisable">
      {{ data.disabled == true ? "预览" : "编辑" }}
    </div>
    <div style="
        height: 4rem; 
        width: 95%; 
        margin: 1rem 0; 
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 2rem;
      "
      :style="{
        
        'background-color': props.color
      }"
      >
      个人简历
    </div>
    <div style="
        width: 95%; 
        margin: 1rem 0; 
        display: flex;
      ">
      <div style="width: 80%; padding-right: 2rem;">
        <BlockHeader title="基本信息" @addItem="data.baseKw.push(['', ''])" :disabled="data.disabled" :color="props.color">
          <template #context>
            <div class="ru-personage-kws">
              <div class="ru-personage-item" v-for="job, index in data.jobKw" :key="index">
                <input type="text" :disabled="data.disabled" v-model="job[0]" style="width: 4rem;">
                :&nbsp;
                <input type="text" v-model="job[1]" :disabled="data.disabled">
              </div>
              <div class="ru-personage-item" v-for="job, index in data.baseKw" :key="index">
                <input type="text" :disabled="data.disabled" v-model="job[0]" style="width: 4rem;">
                :&nbsp;
                <input type="text" v-model="job[1]" :disabled="data.disabled">
              </div>
            </div>
          </template>
        </BlockHeader>
      </div>
      <div style="width: 20%;">
        <img style="width: 100%;" :src="data.avatar" alt="" srcset="">
      </div>
    </div>


    <div style="
        width: 95%; 
        margin: 1rem 0; 
        display: flex;
      ">
     <div style="width: 100%;">
      <BlockHeader title="教育背景" @addItem="data.educationalBackground.push({})" :disabled="data.disabled" :color="props.color">

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
                <div style="width: 10%;">专业成绩：</div>
                <input type="text" style="width: 90%;" v-model="ebItem.professionalAchievement" placeholder="请输入专业成绩" :disabled="data.disabled">
              </div>
              <div style="display: flex;">
                <div style="width: 10%;">主修课程：</div>
                <input type="text" style="width: 90%;" v-model="ebItem.majorCourse" placeholder="请输入主修课程" :disabled="data.disabled">
              </div>
            </div>
            </div>
        </template>
      </BlockHeader>
     </div>
    </div>


    <div style="
        width: 95%; 
        margin: 1rem 0; 
        display: flex;
      ">
     <div style="width: 100%;">
      <BlockHeader title="工作经验" @addItem="data.workExperience.push({})" :disabled="data.disabled" :color="props.color">
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
     </div>
    </div>

    <div style="
        width: 95%; 
        margin: 1rem 0; 
        display: flex;
      ">
     <div style="width: 100%;">
      <BlockHeader title="荣誉证书"  @addItem="data.certificateOfHonor.push({})" :disabled="data.disabled" :color="props.color">
        <template #context>
          <div style="display: flex; justify-content: space-between;" v-for="cohItem, index in data.certificateOfHonor" :key="index">
            <input type="text" placeholder="证书名称" v-model="cohItem.certificateName" :disabled="data.disabled">
            <input type="text" placeholder="获奖时间" v-model="cohItem.awardTime" style="text-align: center" :disabled="data.disabled">
            <input type="text" placeholder="颁发单位" v-model="cohItem.issuer" style="text-align: right" :disabled="data.disabled">
          </div>
        </template>
      </BlockHeader>
     </div>
    </div>

    <div style="
        width: 95%; 
        margin: 1rem 0; 
        display: flex;
      ">
     <div style="width: 100%;">
      <BlockHeader title="自我评价" :color="props.color">
        <template #context>
          <textarea rows="4" style="width: 100%;" v-model="data.selfEvaluation" :disabled="data.disabled"></textarea>
        </template>
      </BlockHeader>
     </div>
    </div>

  </div>
</template>

<script setup>
import BlockHeader from "./BlockHeaderB.vue"
import { ref, onMounted, onUnmounted, reactive, toRefs } from 'vue'
defineOptions({
  name: "ResumeTemplateB"
})

const props = defineProps({
  data: {
    type: Object,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: true
  },
  color: {
    type: String,
    default: "#068359"
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

.ru-personage-kws{
  display: flex;
  flex-wrap: wrap;
}
.ru-personage-item{
  width: 50%;
}
</style>