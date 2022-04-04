<template>
  <div class="todo-footer flex between middle">
    <div>
      <n-button  type="primary" size="small" @click="cleanClick">清空已完成</n-button>
    </div>
    <div>{{ completedCount }} / {{props.todoList.length}}</div>
  </div>
</template>

<script setup>
import { inject, defineProps, computed } from 'vue'

const props = defineProps({
  todoList: {
    type: Array,
    default: () => []
  }
})

const completedCount = computed(() => {
  let total = props.todoList.reduce((count,current) => {
    if (current.isCompleted) {
      return count + 1
    }
    return count
  }, 0)

  return total
})

const cleanCompleted = inject('cleanCompleted')

const cleanClick = () => {
  cleanCompleted()
}

</script>

<style scoped>
.todo-footer {

}
</style>