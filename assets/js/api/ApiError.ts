export default class ApiError extends Error {
  constructor(public status: number, public url: string, public errors: object) {
    super(`Request ${url} failed with ${status} status`);

    this.stack = (new Error() as Error).stack;
    this.name = 'ApiError';
  }
}
