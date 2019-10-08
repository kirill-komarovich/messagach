import ApiError from '../../api/ApiError';

interface ApiErrorParams {
  errors: object;
  status: number;
  url: string;
}

const getException = ({ status, url, errors }: ApiErrorParams): ApiError => {
  try {
    throw new ApiError(status, url, errors);
  } catch (exception) {
    return exception;
  }
};

describe('ApiError', () => {
  const params: ApiErrorParams = {
    errors: {},
    status: 0,
    url: 'some url',
  };
  const attributes: string[] = Object.keys(params);

  describe('#name', () => {
    const name = 'ApiError';

    test('returns ApiError name', () => {
      expect(getException(params).name).toEqual(name);
    });
  });

  describe.each(attributes)('#$1', (attribute: keyof ApiErrorParams) => {
    test(`returns ${attribute} from params`, () => {
      expect(getException(params)[attribute]).toEqual(params[attribute]);
    });
  });
});
