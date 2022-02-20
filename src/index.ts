type FactoryOptions = {
  direction?: string;
};

type Data = object[] | object;

export function mutatorFactory(
  data: Data,
  mutators: any[] = [],
  options: FactoryOptions = { direction: 'ltr' },
) {
  const reducerFunction =
    options?.direction === 'rtl' ? 'reduceRight' : 'reduce';

  return mutators[reducerFunction]((accumulator, mutator): Data => {
    return Array.isArray(data)
      ? accumulator.map(mutator)
      : mutator(accumulator);
  }, data);
}
