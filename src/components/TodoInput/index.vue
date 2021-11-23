<template>
  <div>
    <input type="text"
    v-model="todoValue"
    @keyup.enter="setTodoValue">
  </div>
</template>

<script lang = "ts">
import store from "@/store";
import { SET_TODO } from "@/store/actionTypes";
import { defineComponent, ref } from "@vue/runtime-core";

export default defineComponent({
  name:'TodoInput',
  setup(){
    const todoValue = ref<string>('')

    const setTodoValue = (e : KeyboardEvent):void =>{
      if (e.key === 'Enter' && todoValue.value.trim().length) {
        //设置数据
        store.dispatch(SET_TODO,todoValue.value)
        todoValue.value = ''
      }
    }

    return{
      todoValue,
      setTodoValue
    }
  }
})
</script>

<style>

</style>