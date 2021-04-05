import {R4} from '@imaware/ts-fhir-types';
import {DeepPartial} from 'fishery';
import {specimenFactory} from '../../../factory/fhir/r4/specimen';
import {common} from '../../common';

/**
 * Creates an Array of size n containing FHIR Specimen objects.
 *
 * @param {number} n - The number of FHIR Specimen to generate.
 * @param {DeepPartial<R4.ISpecimen> | Array<DeepPartial<R4.ISpecimen>>} defaults - A subset of default properties for the generated objects.
 *
 * @returns {Array<R4.ISpecimen>} - The Array of FHIR Specimen.
 */
export const specimenGenerator = (
  n: number,
  defaults: DeepPartial<R4.ISpecimen> | Array<DeepPartial<R4.ISpecimen>> = {},
): Array<R4.ISpecimen> => {
  return common<R4.ISpecimen>(specimenFactory, n, defaults);
};
