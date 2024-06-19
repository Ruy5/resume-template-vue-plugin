<template>
    <div>
        <div style="display: flex; align-items: center; justify-content: space-between;">
            <span style="font-size: 2rem;border-bottom: solid 4px #068359;">{{ props.title }}</span>
            <svg v-if="props.disabled" @click="addItem" style="height: 2rem; width: 2rem;" t="1718802654871" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4271" width="200" height="200"><path d="M512 1024C229.239611 1024 0.017919 794.741738 0.017919 511.98135 0.017919 229.22096 229.239611-0.000731 512-0.000731 794.760389-0.000731 1023.982081 229.22096 1023.982081 511.98135 1023.982081 794.741738 794.760389 1024 512 1024ZM512 73.176136C269.649625 73.176136 73.158216 269.667545 73.158216 512.017919 73.158216 754.368294 269.649625 950.859703 512 950.859703 754.350375 950.859703 950.841784 754.368294 950.841784 512.017919 950.841784 269.667545 754.350375 73.176136 512 73.176136ZM548.570149 731.438811 475.429851 731.438811 475.429851 548.588068 292.579109 548.588068 292.579109 475.411201 475.429851 475.411201 475.429851 292.560457 548.570149 292.560457 548.570149 475.411201 731.420891 475.411201 731.420891 548.588068 548.570149 548.588068 548.570149 731.438811Z" fill="#068359" p-id="4272"></path></svg>
        </div>
        
        <div style=" border-bottom: solid 1px #068359; margin-top: 4px;"></div>
        <div style="margin-top: 1rem;">
            <slot name="context"></slot>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(["title", "disabled"])
const emit = defineEmits(['addItem'])

const addItem = () => emit('addItem')
</script>