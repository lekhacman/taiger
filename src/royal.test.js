import { getSortedList } from './royal';

describe('Royal Rumble', function() {
  const cases = [
    {
      input: [],
      output: [],
    },
  ];

  cases.forEach((c, id) => {
    test(`#${id} getSortedList`, function() {
      expect(getSortedList(c.input)).toEqual(c.output);
    });
  });
});
