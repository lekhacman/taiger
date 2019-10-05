import * as R from 'ramda';

export const getSortedList = R.pipe(
  R.map(R.split(' ')),
  R.sortWith([
    R.ascend(R.prop(0)),
    R.ascend(
      R.compose(
        toInteger,
        R.prop(1)
      )
    ),
  ]),
  R.map(R.join(' '))
);

const ROMAN = {
  SINGLE: {
    I: 1,
    II: 2,
    III: 3,
    IV: 4,
    V: 5,
    VI: 6,
    VII: 7,
    VIII: 8,
    IX: 9,
    X: 10,
  },
  DOUBLE: {
    X: 10,
    XX: 20,
    XXX: 30,
    XL: 40,
    L: 50,
  },
};
const ROMAN_FLAT = R.pipe(
  Object.values,
  R.apply(R.mergeRight)
)(ROMAN);

export function toInteger(romanChars) {
  const singleLens = R.lensIndex(0);
  const doubleLens = R.lensIndex(1);

  return R.pipe(
    R.split(''),
    R.reduceRight(
      (char, acc) =>
        R.ifElse(
          R.compose(
            R.flip(R.has)(ROMAN.SINGLE),
            R.concat(char)
          ),
          R.always(R.over(singleLens, R.concat(char), acc)),
          R.always(R.over(doubleLens, R.concat(char), acc))
        )(R.view(singleLens, acc)),
      ['', '']
    ),
    R.map(
      R.compose(
        R.defaultTo(0),
        R.flip(R.prop)(ROMAN_FLAT)
      )
    ),
    R.reduce(R.add, 0)
  )(romanChars);
}
