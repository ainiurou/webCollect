import { IState, ITodo } from "@/typings";
import { Commit } from "vuex";
import { 
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
  }

}