import { HTTP_HEADERS, HTTP_METHODS } from '../constants';
import Base from './Base';
import paths from './paths';
import { ApiResponse, AuthenticationCredentials, AuthenticationUser } from './types';

class Authentication extends Base {
  public static signIn = async (
    { email, password }: AuthenticationCredentials,
  ): Promise<ApiResponse<AuthenticationUser>> => {
    const request = new Request(paths.authentication.signIn, {
      body: JSON.stringify({
        user: { email, password },
      }),
      headers: new Headers({
        ...HTTP_HEADERS.contentType.json,
      }),
      method: HTTP_METHODS.post,
    });
    return await Authentication.call(request);
  }

  public static info = async (): Promise<ApiResponse<AuthenticationUser>> => {
    const request = new Request(paths.authentication.info, {
      method: HTTP_METHODS.get,
    });
    return await Authentication.call(request);
  }
}

export default Authentication;
