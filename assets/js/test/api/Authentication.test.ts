import Authentication from '../../api/Authentication';
import paths from '../../api/paths';
import {
  ApiResponse,
  AuthenticationCredentials,
  AuthenticationErrors,
  AuthenticationUser,
} from '../../api/constants';
import { HTTP_HEADERS, HTTP_METHODS } from '../../constants';
import mockFetch from '../support/mockFetch';

describe('Authentication', () => {
  describe('#info', () => {
    const url: string = paths.authentication.info;
    const request = new Request(url, {
      method: HTTP_METHODS.get,
    });
    const goodStatus = 200;
    const jsonResp = {
      data: {
        email: 'user@ex.com',
        id: 0,
      },
    };

    beforeEach(() => {
      mockFetch({ jsonResp, ok: true, url, status: goodStatus });
    });

    it('calls fetch with given request', async () => {
      await Authentication.info();

      expect(window.fetch).toHaveBeenCalledTimes(1);
      expect(window.fetch).toHaveBeenCalledWith(request);
    });

    it('returns authenticated user', async () => {
      const response: ApiResponse<AuthenticationUser> = await Authentication.info();

      expect(response.httpStatus).toEqual(goodStatus);
      expect(response.data).toEqual(jsonResp.data);
    });

    describe('when user is unauthenticated', () => {
      const badStatus = 401;
      const errors: AuthenticationErrors = {
        authentication: 'unauthenticated',
      };

      beforeEach(() => {
        mockFetch({ jsonResp: { errors }, ok: false, url, status: badStatus });
      });

      it('throws ApiError', async () => {
        await expect(Authentication.info()).rejects.toThrow(`Request ${url} failed with ${badStatus} status`);
      });
    });
  });

  describe('#signIn', () => {
    const url: string = paths.authentication.signIn;
    const credentials: AuthenticationCredentials = {
      email: 'user@ex.com',
      password: 'password',
    };
    const request = new Request(url, {
      body: JSON.stringify({
        user: credentials,
      }),
      headers: new Headers({
        ...HTTP_HEADERS.contentType.json,
      }),
      method: HTTP_METHODS.post,
    });
    const goodStatus = 200;
    const jsonResp = {
      data: {
        email: credentials.email,
        id: 0,
      },
    };

    beforeEach(() => {
      mockFetch({ jsonResp, ok: true, url, status: goodStatus });
    });

    it('calls fetch with given request', async () => {
      await Authentication.signIn(credentials);

      expect(window.fetch).toHaveBeenCalledTimes(1);
      expect(window.fetch).toHaveBeenCalledWith(request);
    });

    it('authenticates user', async () => {
      const response: ApiResponse<AuthenticationUser> = await Authentication.signIn(credentials);

      expect(response.httpStatus).toEqual(goodStatus);
      expect(response.data).toEqual(jsonResp.data);
    });

    describe('when user already authenticated', () => {
      const badStatus = 401;
      const errors: AuthenticationErrors = {
        authentication: 'already_authenticated',
      };

      beforeEach(() => {
        mockFetch({ jsonResp: { errors }, ok: false, url, status: badStatus });
      });

      it('throws ApiError', async () => {
        await expect(Authentication.info()).rejects.toThrow(`Request ${url} failed with ${badStatus} status`);
      });
    });

    describe('with invalid credentials', () => {
      const badStatus = 401;
      const errors: AuthenticationErrors = {
        authentication: 'invalid_credentials',
      };

      beforeEach(() => {
        mockFetch({ jsonResp: { errors }, ok: false, url, status: badStatus });
      });

      it('throws ApiError', async () => {
        await expect(Authentication.info()).rejects.toThrow(`Request ${url} failed with ${badStatus} status`);
      });
    });
  });
});
