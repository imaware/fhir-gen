import {R4} from '@imaware/ts-fhir-types';
import {DeepPartial} from 'fishery';
import {bundleFactory} from '../../../factory/fhir/r4/bundle';
import {common} from '../../common';

/**
 * Creates an Array of size n containing FHIR Bundle objects.
 *
 * @param {number} n - The number of FHIR Bundles to generate.
 * @param {DeepPartial<R4.IBundle> | Array<DeepPartial<R4.IBundle>>} defaults - A subset of default properties for the generated objects.
 *
 * @returns {Array<R4.IBundle>} - The Array of FHIR Bundles.
 */
export const bundleGenerator = (
  n: number,
  defaults: DeepPartial<R4.IBundle> | Array<DeepPartial<R4.IBundle>> = {},
): Array<R4.IBundle> => {
  return common<R4.IBundle>(bundleFactory, n, defaults);
};
