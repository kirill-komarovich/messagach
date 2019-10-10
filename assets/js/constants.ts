export const HTTP_METHODS = Object.freeze({
  delete: 'DELETE',
  get: 'GET',
  post: 'POST',
  put: 'PUT',
});

export const HTTP_HEADERS = Object.freeze({
  contentType: {
    json: {
      'Content-Type': 'application/json',
    },
  },
});

export const HTTP_STATUSES = Object.freeze({
  noContent: 204,
  ok: 200,
  unauthorized: 401,
});
