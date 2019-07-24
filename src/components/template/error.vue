<template>
  <div class="hello">
    <h1>{{ status }}</h1>
    <h2>{{ msg}}</h2>
  </div>
</template>

<script>
export default {
  name: 'error',
  data () {
    return {
      status: '404',
      msg: '찾을 수 없는 페이지입니다.'
    }
  }
}
</script>
