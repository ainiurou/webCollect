
import { SET_TODO, SET_TODO_LIST } from "@/store/actionTypes"
import { ITodo, TODO_STATUS } from "@/typings"
import { Store, useStore } from "vuex"

export interface IUseTodo {
  setTodo:(value:string)=>void;
  setTodoList:()=>void;
  removeTodo:()=>void;
  setStatus:()=>void;
  setDoing:()=>void;
}

interface IUseLocalStorage {
  getLocalList:()=> ITodo[];
  setLocalList:(todoList:ITodo[]) => void;
}

function useTodo ():IUseTodo {

  const store:Store<any>  = useStore();
  const { getLocalList,setLocalList } : IUseLocalStorage = useLocalStorage();

  function setTodo (value:string):void {
    const todo: ITodo ={
      id:new Date().getTime(),
      content:value,
      status:TODO_STATUS.WILLDO
    }
    store.dispatch(SET_TODO,todo);
    setLocalList(store.state.list)
  }

  function setTodoList () {
    const todoList:ITodo[]  = getLocalList();
    store.dispatch(SET_TODO_LIST,todoList)
  }

  function removeTodo () {
  }

  function setStatus () {

  }

  function setDoing () {


  }

  return {
    setTodo,
    setTodoList,
    removeTodo,
    setStatus,
    setDoing
  }


}

function useLocalStorage ():IUseLocalStorage{
  function getLocalList ():ITodo[]{
    return JSON.parse(localStorage.getItem('todoList') || '[]')
  }

  function setLocalList (todoList:ITodo[]):void {
    localStorage.setItem('todoList',JSON.stringify(todoList))
  }

  return {
    getLocalList,
    setLocalList
  }
}

export {
  useTodo
}