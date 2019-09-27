import { HTTP_METHODS, HTTP_HEADERS } from '../constants';

const authentication = Object.freeze({
  signIn: async ({ email, password }) => {
    try {
      const response = await fetch('/api/v1/users/sign_in', {
        method: HTTP_METHODS.post,
        headers: new Headers({
          ...HTTP_HEADERS.contentType.json,
        }),
        body: JSON.stringify({
          user: { email, password },
        }),
      });

      const data = await response.json();

      return { data, httpStatus: response.status };
    } catch (exception) {
      throw exception;
    }
  },

  signOut: async () => {
    try {
      const response = await fetch('/api/v1/users/sign_out', {
        method: HTTP_METHODS.delete,
      });

      const data = await response.json();

      return { data, httpStatus: response.status };
    } catch (exception) {
      throw exception;
    }
  },

  info: async () => {
    try {
      const response = await fetch('/api/v1/users/info', {
        method: HTTP_METHODS.get,
      });
      const data = await response.json();

      return { data, httpStatus: response.status };
    } catch (exception) {
      throw exception;
    }
  },
});

export default authentication;
