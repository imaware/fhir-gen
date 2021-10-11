import {R4} from '@imaware/ts-fhir-types';
import {DeepPartial} from 'fishery';
import {locationFactory} from '../../../factory/fhir/r4/location';
import {common} from '../../common';

/**
 * Creates an Array of size n containing FHIR Location objects.
 *
 * @param {number} n - The number of FHIR Locations to generate.
 * @param {DeepPartial<R4.ILocation> | Array<DeepPartial<R4.ILocation>>} defaults - A subset of default properties for the generated objects.
 *
 * @returns {Array<R4.ILocation>} - The Array of FHIR locations.
 */
export const locationGenerator = (
  n: number,
  defaults: DeepPartial<R4.ILocation> | Array<DeepPartial<R4.ILocation>> = {},
): Array<R4.ILocation> => {
  return common<R4.ILocation>(locationFactory, n, defaults);
};
