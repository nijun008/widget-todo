<template>
  <div>
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: process.env.npm_package_libName,
  data() {
    return {
      msg: '我的第一个组件'
    }
  }
}
</script>