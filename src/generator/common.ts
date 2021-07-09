import {DeepPartial, Factory} from 'fishery';

/**
 * Generic function for building a list of type T from a Factory.
 *
 * @param {Factory<T>} factory - The Factory.
 * @param {number} n - Number of type T to create.
 *
 * @param {DeepPartial<T> | Array<DeepPartial<T>>} params - Preset parameters to override randomly generated data.
 * If provided an array, it will ignore the 'n' param and use the length of the array.
 * @returns {Array<T>}
 */
export const common = <T>(
  factory: Factory<T>,
  n: number,
  params: DeepPartial<T> | Array<DeepPartial<T>> = {},
): Array<T> => {
  if (Array.isArray(params)) {
    return params.map((v: DeepPartial<T>): T => {
      return factory.build(v);
    });
  }
  return factory.buildList(n, params as DeepPartial<T>);
};
