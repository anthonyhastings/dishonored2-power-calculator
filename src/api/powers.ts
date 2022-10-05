import axios, { type AxiosResponse } from 'axios';

type APIResponse = JSONResponse<
  {
    id: string;
    type: 'powers';
    attributes: {
      parentPowerId: string | null;
      characterId: string | null;
      type: 'power' | 'enhancement';
      name: string;
      description: string;
      cost: string;
    };
  }[]
>;

export const getPowers = ({
  abortSignal,
}: {
  abortSignal?: AbortSignal;
} = {}): Promise<AxiosResponse<APIResponse>> =>
  axios.get('/powers.json', {
    ...(abortSignal && { signal: abortSignal }),
  });
