<template>
  <div class="widget-todo">
    <TodoForm />
    <TodoList :todoList="state.todoList" />
    <TodoStatistics :todoList="state.todoList" />
  </div>
</template>

<script setup>
import { reactive, provide, watch, onMounted } from 'vue'
import TodoList from './components/TodoList.vue'
import TodoForm from './components/TodoForm.vue'
import TodoStatistics from './components/TodoStatistics.vue'

const state = reactive({
  todoList: []
})

onMounted(() => {
  state.todoList = JSON.parse(localStorage.getItem('widget-todo') || '[]')
})


watch(() => state.todoList, () => {
  state.todoList.sort((a, b) => {
    return a.isCompleted - b.isCompleted
  })

  localStorage.setItem('widget-todo', JSON.stringify(state.todoList))
}, { deep: true })

provide('checkedHandle', (todo, value) => {
  todo.isCompleted = value
})

provide('addTodo', (todo) => {
  state.todoList.unshift(todo)
})

provide('deleteTodo', index => {
  state.todoList.splice(index, 1)
})

provide('cleanCompleted', () => {
  state.todoList = state.todoList.filter(item => !item.isCompleted)
})

</script>

<style scoped>
.widget-todo {
  padding: 10px;
}
</style>