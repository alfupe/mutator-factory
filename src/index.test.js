import { mutatorFactory } from './index';

const addSurname = (data) => ({
  ...data,
  surname: data.name.split('').reverse().join(''),
});
const addAge = (data) => {
  return {
    ...data,
    age:
      data?.name && data?.surname
        ? `${(data.name + data.surname).length}`
        : 'unknown',
  };
};

test('should transform and array of data piping the mutators', () => {
  const testData = [
    {
      name: 'Foo',
    },
    {
      name: 'Bar',
    },
  ];
  const received = mutatorFactory(testData, [addSurname, addAge]);
  expect(received).toMatchInlineSnapshot(`
    Array [
      Object {
        "age": "6",
        "name": "Foo",
        "surname": "ooF",
      },
      Object {
        "age": "6",
        "name": "Bar",
        "surname": "raB",
      },
    ]
  `);
});

test('should transform an array of data composing the mutators', () => {
  const testData = [
    {
      name: 'Foo',
    },
    {
      name: 'Bar',
    },
  ];
  const received = mutatorFactory(testData, [addAge, addSurname], {
    direction: 'rtl',
  });
  expect(received).toMatchInlineSnapshot(`
    Array [
      Object {
        "age": "7",
        "name": "Foo",
        "surname": "ooF",
      },
      Object {
        "age": "6",
        "name": "Bar",
        "surname": "raB",
      },
    ]
  `);
});

test('should transform the array data composing the mutators with unknown age due to the incorrect mutator order', () => {
  const testData = [
    {
      name: 'Foo',
    },
    {
      name: 'Bar',
    },
  ];
  const received = mutatorFactory(testData, [addSurname, addAge], {
    direction: 'rtl',
  });
  expect(received).toMatchInlineSnapshot(`
    Array [
      Object {
        "age": "unknown",
        "name": "Foo",
        "surname": "ooF",
      },
      Object {
        "age": "unknown",
        "name": "Bar",
        "surname": "raB",
      },
    ]
  `);
});

test('should transform an object data piping the mutators', () => {
  const testData = {
    name: 'Foo',
  };
  const received = mutatorFactory(testData, [addSurname, addAge]);
  expect(received).toMatchInlineSnapshot(`
    Object {
      "age": "6",
      "name": "Foo",
      "surname": "ooF",
    }
  `);
});
