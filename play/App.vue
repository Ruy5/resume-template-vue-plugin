<template>
    <div id="editor" class="box">
        <!-- <ResumeTemplateA :data="data"  :disabled="disabled" color="red"></ResumeTemplateA> -->
        <ResumeTemplateB :data="data" @uploadImg="uploadImg" :disabled="disabled" color="red"></ResumeTemplateB>
    </div>
    <button @click="clickGeneratePicture">下载</button>
</template>

<script setup>
import { reactive, ref } from 'vue';
import rufs from "rufs"
import html2canvas from "html2canvas"
const urlToBase64 = async (imageUrl) => {
    try {
        const response = await fetch(imageUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const blob = await response.blob();

        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    } catch (error) {
        console.error('Error converting image URL to Base64:', error);
    }
}

const uploadImg = async () => {
    const res = await rufs.simpleUpload("http://feli.top:1024/simplefile/upload", "wl")
    console.log("http://feli.top:1024"+res.data.url)
    const b64 = await urlToBase64("http://feli.top:1024"+res.data.url)
    data.avatar = b64
}

const clickGeneratePicture = () => {
  html2canvas(document.querySelector("#editor")).then(canvas => {
    // 转成图片，生成图片地址
    const imgUrl = canvas.toDataURL("image/png");

    console.log(imgUrl)
    const a = document.createElement("a");
    a.href = imgUrl;
    a.download = 'resume.png'; // Set the file name
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
}

const data = reactive({
    avatar: "http://qiniu.keepheartbeat.top/QRS7JYRWR_O%5DP8_Z0R2Y%244I.png",
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
.box {
    width: 60vw;
    border: solid 1px rgb(107, 107, 107);
}
</style>