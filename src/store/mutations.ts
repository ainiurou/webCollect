import { IState, ITodo } from "@/typings";
import { SET_TODO, SET_TODO_LIST } from "./actionTypes";

export default{
  [SET_TODO](state: IState,todo: ITodo): void{
    state.list.unshift(todo);
    
  },
  [SET_TODO_LIST](state:IState,todoList:ITodo[]):void{
    state.list = todoList;
  }
}