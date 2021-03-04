import {R4} from '@ahryman40k/ts-fhir-types';
import {DeepPartial} from 'fishery';
import {addressFactory} from '../../../factory/fhir/r4/address';
import {common} from '../../../generator/common';

/**
 * Creates an Array of size n containing FHIR Address objects.
 *
 * @param {number} n - The number of FHIR Addresses to generate.
 * @param {DeepPartial<R4.IAddress> | Array<DeepPartial<R4.IAddress>>} defaults - A subset of default properties for the generated objects.
 *
 * @returns {Array<R4.IAddress>} - The Array of FHIR addresses.
 */
export const addressGenerator = (
  n: number,
  defaults: DeepPartial<R4.IAddress> | Array<DeepPartial<R4.IAddress>> = {},
): Array<R4.IAddress> => {
  return common<R4.IAddress>(addressFactory, n, defaults);
};
