import { ApiResponse } from '../../api/constants';

export enum ACTION_TYPES {
  begin = 'REQUEST_BEGIN',
  end = 'REQUEST_END',
  error = 'REQUEST_ERROR',
};

export interface State<Data, Errors> {
  loading?: boolean;
  data?: Data | object;
  errors?: Errors | null;
  httpStatus?: number;
}

export interface Action<Data, Errors> extends State<Data, Errors>  {
  type: ACTION_TYPES;
}

export const INITIAL_STATE: Readonly<State<object, null>> = {
  loading: false,
  data: {},
  errors: null,
  httpStatus: 0,
};

export interface Reducer<Data, Errors> {
  (state: State<Data, Errors>, action: Action<Data, Errors>): State<Data, Errors>;
}

export type ApiCall<Data> = (...args: any[]) => Promise<ApiResponse<Data>>;
export type DecoratedApiCall = (...args: any[]) => Promise<void>;
