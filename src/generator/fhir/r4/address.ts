import {R4} from '@ahryman40k/ts-fhir-types';
import {addressFactory} from '../../../factory/fhir/r4/address';
import {common} from '../../../generator/common';

/**
 * Creates an Array of size n containing FHIR Address objects.
 *
 * @param {number} n - The number of FHIR Addresses to generate.
 *
 * @returns {Array<R4.IAddress>} - The Array of FHIR addresses.
 */
export const addressGenerator = (n: number): Array<R4.IAddress> => {
  return common<R4.IAddress>(addressFactory, n);
};
