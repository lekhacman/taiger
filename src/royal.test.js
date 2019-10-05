import { getSortedList, toInteger } from './royal';

describe('Royal Rumble', function() {
  const cases = [
    {
      input: ['Louis IX', 'Louis VIII', 'David II'],
      output: ['David II', 'Louis VIII', 'Louis IX'],
    },
  ];

  cases.forEach((c, id) => {
    test(`#${id} getSortedList`, function() {
      expect(getSortedList(c.input)).toEqual(c.output);
    });
  });
});

describe('Roman parser', function() {
  const cases = [
    {
      input: 'I',
      output: 1,
    },
    {
      input: 'II',
      output: 2,
    },
    {
      input: 'V',
      output: 5,
    },
    {
      input: 'VII',
      output: 7,
    },
    {
      input: 'IX',
      output: 9,
    },
    {
      input: 'X',
      output: 10,
    },
    {
      input: 'XIII',
      output: 13,
    },
    {
      input: 'XXII',
      output: 22,
    },
    {
      input: 'XXXIV',
      output: 34,
    },
    {
      input: 'XLVII',
      output: 47,
    },
    {
      input: 'L',
      output: 50,
    },
    {
      input: 'LV',
      output: 55,
    },
  ];

  cases.forEach((c, id) => {
    test(`#${id} getSortedList`, function() {
      expect(toInteger(c.input)).toEqual(c.output);
    });
  });
});
