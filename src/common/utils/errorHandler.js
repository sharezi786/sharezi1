export function parseApiError(error) {
  if (error.response && error.response.data) {
    return error.response.data.message || error.response.data.error || 'API Error';
  }
  return error.message || 'Unknown error';
}