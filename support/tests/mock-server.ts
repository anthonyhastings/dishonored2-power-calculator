import { rest } from 'msw';
import { setupServer } from 'msw/node';
import charactersData from '../fixtures/get-characters-success.json';
import powersData from '../fixtures/get-powers-success.json';

const handlers = [
  rest.get(/\/characters.json/, async (req, res, ctx) => {
    return res(ctx.json(charactersData));
  }),
  rest.get(/\/powers.json/, async (req, res, ctx) => {
    return res(ctx.json(powersData));
  }),
];

const server = setupServer(...handlers);

export { server, rest };
