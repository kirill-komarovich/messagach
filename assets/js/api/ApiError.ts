import { API_ERROR_NAME } from './constants';

export default class ApiError<Errors> extends Error {
  constructor(public status: number, public url: string, public errors: Errors) {
    super(`Request ${url} failed with ${status} status`);

    this.stack = (new Error() as Error).stack;
    this.name = API_ERROR_NAME;
  }
}
