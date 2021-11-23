<template>
  <h1>Todo-List</h1>
  <todo-item />
</template>

<script lang = "ts">

import { defineComponent } from '@vue/runtime-core'
import TodoItem from './item.vue'
export default defineComponent({
  name:'TodoList',
  components:{
    TodoItem
  },
  setup(){
    
  }
})
</script>

<style>

</style>