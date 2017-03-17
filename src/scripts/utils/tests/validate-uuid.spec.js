import validateUUID from '../validate-uuid';

describe('validateUUID', function () {
  describe('when given invalid data', function () {
    beforeEach(function () {
      this.invalidString = '4499082e-9cdc-4828';
      this.array = [];
      this.object = {};
    });

    it('returns false', function () {
      expect(validateUUID(this.invalidString)).toEqual(false);
      expect(validateUUID(this.array)).toEqual(false);
      expect(validateUUID(this.object)).toEqual(false);
    });
  });

  describe('when given valid data', function () {
    beforeEach(function () {
      this.validString = '4499082e-9cdc-4828-8d18-40aea0b2970b';
    });

    it('returns true', function () {
      expect(validateUUID(this.validString)).toEqual(true);
    });
  });
});
