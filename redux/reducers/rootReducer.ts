import { CombinedState, combineReducers } from "redux";
import todoData, { todoState } from './todoData';
import createReducer from "@redux/createReducer";

export enum ActionType {
    STATUS_UPDATE = "STATUS_UPDATE"
}

export enum ActionStatus {
    REQUEST = "request",
    SUCCESS = "success",
    FAIL = "fail"
}

export interface StatusState {
    [key: string]: ActionStatus | null;
  }
  
  const statusReducer = createReducer<StatusState>(
    {},
    {
      [ActionType.STATUS_UPDATE](state: StatusState, payload: unknown) {
        return {
          ...state,
          ...(payload as StatusState)
        };
      }
    }
  );
  

export interface stateName {
    data: [];
}

export interface storeState {
    todoData: todoState,
    status: StatusState
}

export default combineReducers<CombinedState<storeState>>({
    todoData,
    status: statusReducer
});
