<template>
  <n-input v-model:value="content" type="text" size="small" placeholder="添加任务，回车保存" @keydown.enter="saveHandle" />
</template>

<script setup>
import { ref, inject } from 'vue'

const content = ref('')

const addTodo = inject('addTodo')

const saveHandle = () => {
  if (content.value && content.value.trim()) {
    let value = content.value.trim()
    addTodo({
      title: value,
      id: Date.now(),
      isCompleted: false,
      date: null
    })

    content.value = ''
  }
}
</script>