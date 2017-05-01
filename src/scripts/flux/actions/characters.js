export const fetchCharactersRequest = () => ({
  type: 'FETCH_CHARACTERS_REQUEST'
});

export const fetchCharactersFailure = (error) => ({
  type: 'FETCH_CHARACTERS_FAILURE',
  error
});

export const fetchCharactersSuccess = (response) => ({
  type: 'FETCH_CHARACTERS_SUCCESS',
  response
});
