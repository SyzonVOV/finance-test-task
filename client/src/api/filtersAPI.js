const api = 'http://localhost:4000';

const fetchFilters = async () => {
  try {
    const response = await fetch(`${api}/filters`);

    if (!response.ok) {
      throw new Error(`Could not fetch, status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (e) {
    return e.message;
  }
};

export { fetchFilters };
