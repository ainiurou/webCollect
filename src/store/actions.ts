import { IState, ITodo } from "@/typings";
import { Commit } from "vuex";
import { 
  REMOVE_TODO,
  SET_DOING,
  SET_STATUS,
  SET_TODO,
  SET_TODO_LIST
} from "./actionTypes";

interface ICtx {
  commit: Commit,
  state: IState
}

export default{
  [SET_TODO]({ commit } : ICtx, todo : ITodo) :void {
    commit(SET_TODO,todo)
  },

  [SET_TODO_LIST]({ commit }: ICtx,todoList:ITodo[]):void {
    commit(SET_TODO_LIST,todoList)
  },

  [REMOVE_TODO]({commit}:ICtx,id:number) :void {
    commit(REMOVE_TODO,id)
  },

  [SET_STATUS]({commit}:ICtx,id:number):void {
    commit(SET_STATUS,id)
  },

  [SET_DOING]({commit}:ICtx,id:number):void {
    commit(SET_DOING,id)
  }



}