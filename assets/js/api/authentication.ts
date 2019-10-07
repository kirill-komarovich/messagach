import { HTTP_HEADERS, HTTP_METHODS } from '../constants';

interface Credentials {
  email: string;
  password: string;
}

const authentication = Object.freeze({
  signIn: async ({ email, password }: Credentials) => {
    try {
      const response = await fetch('/api/v1/users/sign_in', {
        body: JSON.stringify({
          user: { email, password },
        }),
        headers: new Headers({
          ...HTTP_HEADERS.contentType.json,
        }),
        method: HTTP_METHODS.post,
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
