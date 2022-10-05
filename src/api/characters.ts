import axios, { type AxiosResponse } from 'axios';

type APIResponse = JSONResponse<
  {
    attributes: {
      description: string;
      name: string;
      slug: CharacterSlugs;
    };
    id: string;
    type: 'characters';
  }[]
>;

export const getCharacters = ({
  abortSignal,
}: {
  abortSignal?: AbortSignal;
} = {}): Promise<AxiosResponse<APIResponse>> =>
  axios.get('/characters.json', {
    ...(abortSignal && { signal: abortSignal }),
  });
