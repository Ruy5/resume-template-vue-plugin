<template>
    <div class="box">
        <ResumeTemplateA :data="data"  :disabled="false"></ResumeTemplateA>
        <!-- <ResumeTemplateB ></ResumeTemplateB> -->
    </div>
   
</template>

<script setup>
import { reactive } from 'vue';
const data = reactive({
    avatar:"http://qiniu.keepheartbeat.top/QRS7JYRWR_O%5DP8_Z0R2Y%244I.png",
    name: "小qiu",
    age: 18,
    sex: "公",
    address: "草莓星",
    phone: "123456789",
    email: "123456@qq.com",
    job: "Rust开发"
})

</script>

<style scoped>
.box{
    width: 60vw;
    border: solid 1px rgb(107, 107, 107);
}
</style>