<template>
  <div class="wrapper">
    <todo-input />
    <todo-list />
  </div>
</template>

<script lang="ts">


import { defineComponent, onMounted } from '@vue/runtime-core'
import TodoInput from './components/TodoInput/index.vue'
import TodoList from './components/TodoList/index.vue'
import { IUseTodo, useTodo } from './hooks'

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
    const { setTodo }:IUseTodo = useTodo();
    onMounted(()=>{
      setTodo
    })
  }
})
</script>


