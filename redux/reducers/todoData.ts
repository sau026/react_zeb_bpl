import createReducer from "@redux/createReducer";

export enum ActionType {
  GET_TODO_DATA = "GET_TODO_DATA",
  CREATE_TODOS = "CREATE_TODO_DATA",
  SET_LOADING = "SET_LOADING"
}

export interface todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export interface todoState {
  todoData : todo[],
}

const initialState : todoState = {
  todoData: [],
};

export default createReducer<todoState>(initialState, {
  [ActionType.GET_TODO_DATA](
    state: todoState,
    payload
  ): todoState {
    return {
      ...state,
      todoData: payload as todo[]
    };
  },
  [ActionType.CREATE_TODOS](
    state : todoState,
    payload
  ): todoState {
    return {
      ...state,
      ...(payload as todo)
    };
  }
});
