// const BASE_URL = 'https://mate-api.herokuapp.com';
const BASE_URL = 'http://localhost:8080';

export const request = async(url, body) => {
  try {
    const response = await fetch(
      `${BASE_URL}${url}`,
      body
        ? {
          method: 'POST',
          body: JSON.stringify(body),
        }
        : undefined,
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const serverResponse = await response.json();

    return serverResponse.data || serverResponse;
  } catch (error) {
    throw new Error(`Server error: ${error.message}`);
  }
};
