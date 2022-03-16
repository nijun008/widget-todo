<template>
  <div>{{ msg }}</div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const msg = ref('hollo wwww')

    return { msg }
  }
})
</script>