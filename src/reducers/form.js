import { CHANGE_NAME } from "../actions";

const initialState = {
  name: '',
}

export default function (state = initialState, { type, name }) {
  switch (type) {
    case CHANGE_NAME:
      return {
        ...state,
        name,
      }
      
    default:
      return state;
  }
}