import { State, Action, ACTION_TYPES } from './constants';

const reducer = <Data, Errors>(state: State<Data, Errors>, action: Action<Data, Errors>) => {
  switch (action.type) {
    case ACTION_TYPES.begin:
      return {
        ...state,
        loading: true,
      };
    case ACTION_TYPES.end:
      return {
        ...state,
        loading: false,
        data: action.data,
        httpStatus: action.httpStatus,
        errors: null,
      };
    case ACTION_TYPES.error:
      return {
        ...state,
        loading: false,
        httpStatus: action.httpStatus,
        errors: action.errors,
      }
    default:
      throw new Error();
  }
}

export default reducer;
