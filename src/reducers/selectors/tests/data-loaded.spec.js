import Immutable from 'immutable';
import { transform } from '../data-loaded';

describe('#dataLoadedTransform', () => {
  describe('when the characters', () => {
    describe('request errors', () => {
      let result;

      beforeEach(() => {
        const charactersRequest = Immutable.Map({ hasErrored: true });

        result = transform(undefined, charactersRequest);
      });

      it('returns an error', () => {
        expect(result).toEqual(expect.any(Error));
      });
    });

    describe('request is still in flight', () => {
      let result;

      beforeEach(() => {
        const charactersRequest = Immutable.Map({ inFlight: true });
        const powersRequest = Immutable.Map({});

        result = transform(
          undefined,
          charactersRequest,
          undefined,
          powersRequest
        );
      });

      it('returns false', () => {
        expect(result).toBe(false);
      });
    });

    describe('are undefined', () => {
      let result;

      beforeEach(() => {
        const charactersRequest = Immutable.Map({ inFlight: true });
        const powersRequest = Immutable.Map({});

        result = transform(
          undefined,
          charactersRequest,
          undefined,
          powersRequest
        );
      });

      it('returns false', () => {
        expect(result).toBe(false);
      });
    });
  });

  describe('when the powers', () => {
    describe('request errors', () => {
      let result;

      beforeEach(() => {
        const charactersRequest = Immutable.Map({});
        const powersRequest = Immutable.Map({ hasErrored: true });

        result = transform(
          undefined,
          charactersRequest,
          undefined,
          powersRequest
        );
      });

      it('returns an error', () => {
        expect(result).toEqual(expect.any(Error));
      });
    });

    describe('request is still in flight', () => {
      let result;

      beforeEach(() => {
        const charactersRequest = Immutable.Map({});
        const powersRequest = Immutable.Map({ inFlight: true });

        result = transform(
          undefined,
          charactersRequest,
          undefined,
          powersRequest
        );
      });

      it('returns false', () => {
        expect(result).toBe(false);
      });
    });

    describe('are undefined', () => {
      let result;

      beforeEach(() => {
        const charactersRequest = Immutable.Map({});
        const powersRequest = Immutable.Map({});

        result = transform(
          undefined,
          charactersRequest,
          undefined,
          powersRequest
        );
      });

      it('returns false', () => {
        expect(result).toBe(false);
      });
    });
  });

  describe('when both characters and powers are defined', () => {
    let result;

    beforeEach(() => {
      const charactersRequest = Immutable.Map({});
      const characters = Immutable.Map({ batman: 'Bruce Wayne' });
      const powersRequest = Immutable.Map({});
      const powers = Immutable.List(['telekinesis']);

      result = transform(characters, charactersRequest, powers, powersRequest);
    });

    it('returns true', () => {
      expect(result).toBe(true);
    });
  });
});
