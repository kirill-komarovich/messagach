import React from 'react';
import { Reducer, ACTION_TYPES, INITIAL_STATE, ApiCall, DecoratedApiCall, State } from './constants';
import { API_ERROR_NAME } from '../../api/constants';
import reducer from './reducer';

const useApiCall = <Data, Errors>(apiCall: ApiCall<Data>): [State<Data, Errors>, DecoratedApiCall] => {
  const [state, dispatch] = React.useReducer<Reducer<Data, Errors>>(reducer, INITIAL_STATE);

  const decoratedApiCall: DecoratedApiCall = React.useCallback(async (...args) => {
    try {
      dispatch({ type: ACTION_TYPES.begin });
      const { data, httpStatus } = await apiCall(...args);

      dispatch({ type: ACTION_TYPES.end, data, httpStatus });
    } catch (exception) {
      if (exception.name === API_ERROR_NAME) {
        dispatch({ type: ACTION_TYPES.error, errors: exception.errors, httpStatus: exception.status })
      } else {
        throw exception;
      }
    }
  }, [apiCall]);

  return [state, decoratedApiCall];
};

export default useApiCall;
