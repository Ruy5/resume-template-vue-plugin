<template>
  <div id="ru-page">
    <div id="ru-left">
      <div id="ru-avatar">
        <img :src="props.data.avatar" alt="" srcset="">
      </div>
      <div class="ru-left-kw-box">
        <div class="ru-left-kw">
          <div class="ru-left-key">姓名</div>:&nbsp;
          <div class="ru-left-word">
            <!-- {{ kw[1] }} -->
            <input v-model="props.data.name" type="text" :disabled="props.disabled">
          </div>
        </div>

        <div class="ru-left-kw">
          <div class="ru-left-key">年龄</div>:&nbsp;
          <div class="ru-left-word">
            <!-- {{ kw[1] }} -->
            <input v-model="props.data.age" type="text" :disabled="props.disabled">
          </div>
        </div>

        <div class="ru-left-kw">
          <div class="ru-left-key">性别</div>:&nbsp;
          <div class="ru-left-word">
            <!-- {{ kw[1] }} -->
            <input v-model="props.data.sex" type="text" :disabled="props.disabled">
          </div>
        </div>

        <div class="ru-left-kw">
          <div class="ru-left-key">籍贯</div>:&nbsp;
          <div class="ru-left-word">
            <!-- {{ kw[1] }} -->
            <input v-model="props.data.address" type="text" :disabled="props.disabled">
          </div>
        </div>

        <div class="ru-left-kw">
          <div class="ru-left-key">联系方式</div>:&nbsp;
          <div class="ru-left-word">
            <!-- {{ kw[1] }} -->
            <input v-model="props.data.phone" type="text" :disabled="props.disabled">
          </div>
        </div>

        <div class="ru-left-kw">
          <div class="ru-left-key">邮箱</div>:&nbsp;
          <div class="ru-left-word">
            <!-- {{ kw[1] }} -->
            <input v-model="props.data.email" type="text" :disabled="props.disabled">
          </div>
        </div>
        
      </div>
    </div>
    <div id="ru-right">
      <div class="ru-personage">
        <div class="ru-personage-title">个人简历</div>
        <div class="ru-personage-kws">
          <div class="ru-personage-item" v-for="i in 4">
            <div class="ru-personage-key">求职岗位：&nbsp;</div>
            <input type="text" v-model="props.data.job" :disabled="props.disabled">
          </div>
        </div>
      </div>
      <div class="ru-educational-background">
        <div class="ru-educational-background-title">
          <div class="ru-icon-bg">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" width="28.333332061767578" height="28.333332061767578" viewBox="0 0 28.333332061767578 28.333332061767578"><g><path d="M1.2448,1.2448C2.04183,0.447766,3.12283,0,4.25,0C4.25,0,24.0833,0,24.0833,0C25.2106,0,26.2915,0.447766,27.0885,1.2448C27.8855,2.04183,28.3333,3.12283,28.3333,4.25C28.3333,4.25,28.3333,24.0833,28.3333,24.0833C28.3333,25.2106,27.8855,26.2915,27.0885,27.0885C26.2915,27.8855,25.2106,28.3333,24.0833,28.3333C24.0833,28.3333,4.25,28.3333,4.25,28.3333C3.12283,28.3333,2.04183,27.8855,1.2448,27.0885C0.447766,26.2915,0,25.2106,0,24.0833C0,24.0833,0,4.25,0,4.25C0,3.12283,0.447766,2.04183,1.2448,1.2448C1.2448,1.2448,1.2448,1.2448,1.2448,1.2448ZM15.5833,25.5C15.5833,25.5,24.0833,25.5,24.0833,25.5C24.459,25.5,24.8194,25.3507,25.0851,25.0851C25.3507,24.8194,25.5,24.459,25.5,24.0833C25.5,24.0833,25.5,4.25,25.5,4.25C25.5,3.87427,25.3507,3.51394,25.0851,3.24826C24.8194,2.98259,24.459,2.83333,24.0833,2.83333C24.0833,2.83333,15.5833,2.83333,15.5833,2.83333C15.5833,2.83333,15.5833,25.5,15.5833,25.5C15.5833,25.5,15.5833,25.5,15.5833,25.5ZM12.75,2.83333C12.75,2.83333,12.75,25.5,12.75,25.5C12.75,25.5,4.25,25.5,4.25,25.5C3.87427,25.5,3.51394,25.3507,3.24826,25.0851C2.98259,24.8194,2.83333,24.459,2.83333,24.0833C2.83333,24.0833,2.83333,4.25,2.83333,4.25C2.83333,3.87427,2.98259,3.51394,3.24826,3.24826C3.51394,2.98259,3.87427,2.83333,4.25,2.83333C4.25,2.83333,12.75,2.83333,12.75,2.83333C12.75,2.83333,12.75,2.83333,12.75,2.83333Z" fill-rule="evenodd" fill="#000000" fill-opacity="1"/></g></svg>
            
          </div>
          <div class="ru-educational-background-title-text">
            教育背景
          </div>

        </div>
        123

      </div>


    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "ResumeTemplateA"
})

import { ref, onMounted, onUnmounted, reactive } from 'vue'
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
console.log(props.data)
</script>

<style scoped>
#ru-page{
  width: 100%;
  display: flex;
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
#ru-avatar{
  width: 60%;
  margin: 20%;
  display: flex;
}
#ru-avatar>img{
  width: 100%;
}
.ru-left-kw-box{
  margin-left: 20%;
}
.ru-left-kw{
  display: flex;
  margin-bottom: 15%;

}
.ru-left-key{
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
    background-color: transparent; /* 背景色透明 */
    border: 1px solid transparent; /* 边框透明 */
    outline: none; /* 去除输入框聚焦时的默认边框 */
    padding: 5px; /* 添加一些内边距使输入内容不贴边 */
    color: inherit; /* 继承父元素的文本颜色 */
    font-size: inherit; /* 继承父元素的字体大小 */
}
input:focus {
  border: 1px solid rgba(0, 0, 0, 0.3); /* 聚焦时显示半透明的边框 */
}
.ru-left-word{
  width: 50%;
}
input {
  width: 100%;
  transform: translateY(-4px);
}
.ru-personage{
  width: 100%;
  margin:  5%;
}
.ru-personage-title{
  font-size: 2rem;
}
.ru-personage-kws{
  display: flex;
  flex-wrap: wrap
}

.ru-personage-item{
  width: 45%;
  display: flex;
  margin: 3% 0 0 0;
}

.ru-personage-kws input{
  
  width: 50%;
}
.ru-educational-background{
  margin: 0 5%;
}
.ru-educational-background-title{
  display: flex;
  
}
.ru-educational-background-title-text{
  flex: 1; 
   height: 3rem;
   margin-left: 0.5rem;
  border-bottom: solid 1px #cfcfcf;
  font-size: 2rem;
}
.ru-icon-bg{
  width: 3rem;
  height: 3rem;
  border-radius: 3rem;
  background-color: #cfcfcf;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.ru-icon-bg>svg{
  width: 50%;
}
</style>