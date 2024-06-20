<template>
    <div class="ru-educational-background" style="margin-bottom: 1rem;">
        <div class="ru-educational-background-title">
            <div class="ru-icon-bg" :style="{
                'background-color': props.color

            }">
                <slot name="icon">

                </slot>
            </div>
            <div class="ru-educational-background-title-text" style="display: flex; align-items: center; justify-content: space-between;"
                :style="{
                  'border-bottom': 'solid 1px '+ props.color
                }"  
              >
                {{ props.title }}
                <div style="height: 2rem;" @click="addItem" >
                  <svg v-if="! props.disabled" :fill="props.color" style="width: 100%; height: 100%;" t="1718784482580" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4265" width="200" height="200"><path d="M514.048 62.464q93.184 0 175.616 35.328t143.872 96.768 96.768 143.872 35.328 175.616q0 94.208-35.328 176.128t-96.768 143.36-143.872 96.768-175.616 35.328q-94.208 0-176.64-35.328t-143.872-96.768-96.768-143.36-35.328-176.128q0-93.184 35.328-175.616t96.768-143.872 143.872-96.768 176.64-35.328zM772.096 576.512q26.624 0 45.056-18.944t18.432-45.568-18.432-45.056-45.056-18.432l-192.512 0 0-192.512q0-26.624-18.944-45.568t-45.568-18.944-45.056 18.944-18.432 45.568l0 192.512-192.512 0q-26.624 0-45.056 18.432t-18.432 45.056 18.432 45.568 45.056 18.944l192.512 0 0 191.488q0 26.624 18.432 45.568t45.056 18.944 45.568-18.944 18.944-45.568l0-191.488 192.512 0z" p-id="4266"></path></svg>
                </div>
            </div>
        </div >
      <div style="margin-top: 1rem;">
        <slot name="context">

        </slot>
      </div>
    </div>

</template>

<script setup>
const props = defineProps(["title", "disabled", "color"])
const emit = defineEmits(['addItem'])

const addItem = () => emit('addItem')

</script>

<style scoped>

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
  font-size: 2rem;
}

.ru-icon-bg {
  width: 3rem;
  height: 3rem;
  border-radius: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.ru-icon-bg>svg {
  width: 50%;
}
</style>