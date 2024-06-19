# resume-template-vue-plugin
一款简历模板组件

# npm安装
```bash
npm i resume-template-vue3-plugin
```

# 全局注册
```js
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import ResumeTemplate from "resume-template-vue3-plugin"
import "resume-template-vue3-plugin/dist/style.css"

const app = createApp(App)
app.use(ResumeTemplate)
app.mount('#app')

```

# 使用
```vue
<template>
    <div class="box">
        <ResumeTemplateA :data="data"  :disabled="disabled"></ResumeTemplateA>
        <!-- <ResumeTemplateB ></ResumeTemplateB> -->
    </div>
   
</template>

<script setup>
import { reactive, ref } from 'vue';
const data = reactive({
    avatar:"http://qiniu.keepheartbeat.top/QRS7JYRWR_O%5DP8_Z0R2Y%244I.png",
    baseKw: [
        ["姓名", "小qiu"],
        ["年龄", "18"],
        ["性别", "公"],
        ["籍贯", "草莓星"],
        ["联系电话", "123456789"],
        ["联系邮箱", "123456@qq.com"],
    ],
    jobKw: [
        ["求职岗位", "java"],
        ["意向城市", "苏州"],
        ["期待薪资", "1k"],
        ["入职时间", "公元191"],
    ],
    educationalBackground: [
        {
            starTime: "2019-1-1",
            endTime: "2030-11-3",
            collegiate: "苏州信息",
            profession: "软件技术",
            professionalAchievement: "绩点 5.0",
            majorCourse: "java python"
        }
    ],
    workExperience: [
        {
            starTime: "2019-1-1",
            endTime: "2030-11-3",
            workUnit: "南京2473",
            jobPosition: "java开发",
            context: "在工作期间xxxx"
        }
    ],
    certificateOfHonor: [
        {
            certificateName: "技能大赛省一",
            awardTime: "2011-12",
            issuer: "工信部"
        }
    ],
    selfEvaluation: "我是个爱吃瓜的猹！",
    disabled: false
})

const disabled = ref(false)

</script>

<style scoped>
.box{
    width: 60vw;
    border: solid 1px rgb(107, 107, 107);
}
</style>

```