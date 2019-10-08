import ApiError from './ApiError';
import { ApiResponse } from './types';

export default class Base {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected static call = async (request: Request): Promise<ApiResponse<any>> => {
    try {
      const response = await fetch(request);
      await Base.handleHttpErrors(response);
      const { data } = await response.json();

      return { data, httpStatus: response.status };
    } catch (exception) {
      throw exception;
    }
  }

  private static handleHttpErrors = async (response: Response): Promise<void> => {
    if (response.ok) {
      return;
    }

    const { errors } = await response.json();
    const status = response.status;
    const url = response.url;

    throw new ApiError(status, url, errors);
  }
}
