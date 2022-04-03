<template>
  <li class="todo-item" :class="{ completed : props.todo.isCompleted }">

    <n-checkbox :checked="props.todo.isCompleted" @update:checked="checkedChange" />

    <span class="todo-label">{{ todo.title }}</span>

    <n-popconfirm @positive-click="deleteHandle">
      <template #trigger>
        <n-button quaternary type="warning">删除</n-button>
      </template>
      是否要删除？
    </n-popconfirm>
  </li>
</template>

<script setup>
import { defineProps, inject } from 'vue'

const checkedHandle = inject('checkedHandle')

const deleteTodo = inject('deleteTodo')

const props = defineProps({
  todo: {
    type: Object,
    default: () => ({})
  },
  index: {
    type: Number,
    required: true
  }
})

const checkedChange = (value) => {
  checkedHandle(props.todo, value)
}

const deleteHandle = () => {
  deleteTodo(props.index)
}
</script>

<style scoped>
.todo-item {
  padding: 2px 0;
}
.todo-item .todo-label {
  margin-left: 10px;
}
.completed .todo-label {
    color: #666;
    text-decoration: line-through;
  }
</style>