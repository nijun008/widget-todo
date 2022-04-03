<template>
  <ul>
    <Todo v-for="(todo, index) in todoList" :key="todo.id" :todo="todo" :index="index" />
  </ul>
</template>

<script setup>
import { defineProps } from 'vue'
import Todo from './Todo.vue'

const props = defineProps({
  todoList: {
    type: Array,
    default: []
  }
})
</script>

<style scoped>
ul {
  padding: 0;
  list-style: none;
}
</style>