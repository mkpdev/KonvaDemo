import { SHOW_TASK } from '../ActionTypes'

const initialState = {
   files: [],
   image: ''
}

const Task = (state = initialState, action: any) => {
  switch (action.type) {
    case SHOW_TASK:
      return {
        ...state,
        image: action.text
      };
    default:
      return state;
  }
}

export default Task