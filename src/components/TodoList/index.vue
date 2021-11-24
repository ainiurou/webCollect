<template>
  
  <todo-item 
  v-for="item of todoList"
  :key="item.id"
  :item ="item"
  @removeTodo="removeTodo"
  @setStatus ="setStatus"
  @setDoing="setDoing"
  />
</template>

<script lang = "ts">

import { IUseTodo, useTodo } from '@/hooks'
import { ITodo } from '@/typings'
import { defineComponent, PropType } from '@vue/runtime-core'
import TodoItem from './item.vue'
export default defineComponent({
  name:'TodoList',
  props: {
    todoList: Array as PropType<ITodo[]>
  },
  components:{
    TodoItem
  },
  setup(){
    const {
      removeTodo,
      setStatus,
      setDoing
    } :IUseTodo = useTodo();

    return {
      removeTodo,
      setStatus,
      setDoing
    }
  }
  
})
</script>

<style>

</style>