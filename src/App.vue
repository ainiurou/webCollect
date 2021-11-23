<template>
  <div class="wrapper">
    <todo-input />
    <todo-list />
  </div>
</template>

<script lang="ts">


import { defineComponent } from '@vue/runtime-core'
import TodoInput from './components/TodoInput/index.vue'
import TodoList from './components/TodoList/index.vue'

export default defineComponent({
  name: 'App',
  components:{
    TodoInput,
    TodoList
  },
  beforeCreate(){
    console.log("---beforeCreate---")
  },
  created(){
    console.log("---create---")
  },
  setup(){
    console.log("---setup---")
  }
})
</script>


