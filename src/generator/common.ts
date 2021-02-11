import {Factory} from 'fishery';

/**
 * Generic function for building a list of type T from a Factory.
 *
 * @param {Factory<T>} factory - The Factory.
 * @param {number} n - Number of type T to create.
 *
 * @returns {Array<T>}
 */
export const common = <T>(factory: Factory<T>, n: number): Array<T> => {
  return factory.buildList(n);
};
