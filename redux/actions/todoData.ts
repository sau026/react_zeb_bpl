// import axios from 'axios';
import { GET_ALL_TODOS, CREATE_TODOS } from "../api/apiEndPoints";
import { ActionType } from '../reducers/todoData'
import  _axios  from '../api/axios'
import actionCreator from "@redux/actionCreator";

export const getAllTodos = () => async (dispatch: any) => {
  await actionCreator(
    "fetchTodoData",
    async (dispatch: any): Promise<void> => {
      const response = await _axios({
        url: GET_ALL_TODOS,
        method: "get"
      });

      dispatch({
        type: ActionType.GET_TODO_DATA,
        payload: response.data
      });
    }
  );
};


export const createTodos = (data:any) => async (dispatch: any) => {
  const response = await _axios({
    url: CREATE_TODOS,
    method: "post",
    data: data
  });

  dispatch({
    type: ActionType.CREATE_TODOS,
    payload: response.data
  });
};