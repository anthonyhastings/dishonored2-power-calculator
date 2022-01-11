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

export const getCharacters = (): Promise<AxiosResponse<APIResponse>> =>
  axios.get('/characters.json');
