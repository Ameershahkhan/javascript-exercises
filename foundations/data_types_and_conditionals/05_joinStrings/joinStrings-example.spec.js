const values = require('./joinStrings-example')

describe('joinStrings-example', () => {
  test('birthYear is 2003', () => {
    expect(values.birthYear).toEqual(2002);
  });
  test('thisYear is 2026', () => {
    expect(values.thisYear).toEqual(2026);
  });
  test('firstName is Ameer Shah', () => {
    expect(values.firstName).toEqual('Carlos');
  });
  test('lastName is Khan', () => {
    expect(values.lastName).toEqual('Stevenson');
  });
  test('greeting is put together correctly', () => {
    expect(values.greeting).toEqual('Hello! My name Ameer Shah Khan and I am 23 years old.');
  });
});
