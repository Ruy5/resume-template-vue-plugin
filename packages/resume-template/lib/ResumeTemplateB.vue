<template>
  <div style="display: flex; width: 100%; background-color: #ffffff; flex-direction: column; align-items: center;">
    <div style="
        background-color: #068359; 
        height: 4rem; 
        width: 95%; 
        margin: 1rem 0; 
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 2rem;
      ">
      个人简历
    </div>
    <div style="
        width: 95%; 
        margin: 1rem 0; 
        display: flex;
      ">
      <div style="width: 80%;">
        <BlockHeader>
          
        </BlockHeader>
      </div>
      <div style="width: 20%;">
        <img style="width: 100%;" :src="data.avatar" alt="" srcset="">
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
  }
})

const { data, disabled } = toRefs(props)
</script>