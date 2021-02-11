import {R4} from '@ahryman40k/ts-fhir-types';
import {DeepPartial} from 'fishery';
import {observationFactory} from '../../../factory/fhir/r4/observation';
import {common} from '../../common';

/**
 * Creates an Array of size n containing FHIR Observation objects.
 *
 * @param {number} n - The number of FHIR Observations to generate.
 * @param {DeepPartial<R4.IObservation>} defaults - A subset of default properties for the generated objects.
 *
 * @returns {Array<R4.IObservation>} - The Array of FHIR Observations.
 */
export const observationGenerator = (
  n: number,
  defaults: DeepPartial<R4.IObservation> = {},
): Array<R4.IObservation> => {
  return common<R4.IObservation>(observationFactory, n, defaults);
};
