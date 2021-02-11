import {DeepPartial, Factory} from 'fishery';

/**
 * Generic function for building a list of type T from a Factory.
 *
 * @param {Factory<T>} factory - The Factory.
 * @param {number} n - Number of type T to create.
 *
 * @param params
 * @returns {Array<T>}
 */
export const common = <T>(
  factory: Factory<T>,
  n: number,
  params: DeepPartial<T> = {},
): Array<T> => {
  return factory.buildList(n, params);
};
