const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Ameer Shah', () => {
    expect(values.firstName).toEqual('Ameer Shah');
  });
  test('lastName is Khan', () => {
    expect(values.lastName).toEqual('Khan');
  });
  test('thisYear is 2026', () => {
    expect(values.thisYear).toEqual(2026);
  });
  test('birthYear is 2003', () => {
    expect(values.birthYear).toEqual(2003);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Ameer Shah Khan and I am 23 years old.');
  });
});

describe('step 3', () => {
  test('fullName is Carlos Stevenson', () => {
    expect(values.fullName).toEqual('Ameer Shah Khan');
  });
  test('age is 18', () => {
    expect(values.age).toEqual(23);
  });
});
