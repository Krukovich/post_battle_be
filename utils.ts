export const prepareURL = (limit?: number): string => {
  if (limit) {
    return `${process.env.GET_FAKE_JSON_URL}?limit=${limit}`;
  } else {
    return `${process.env.GET_FAKE_JSON_URL}`;
  }
};
