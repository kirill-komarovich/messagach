import 'isomorphic-fetch';

interface MockFetchParams {
  jsonResp: object;
  status: number;
  ok: boolean;
  url: string;
}

export default ({ jsonResp, status, ok, url }: MockFetchParams): void => {
  const mockFetchPromise = Promise.resolve({
    json: () => Promise.resolve(jsonResp),
    ok,
    status,
    url,
  });
  window.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
};
