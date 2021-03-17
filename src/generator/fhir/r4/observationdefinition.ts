import {R4} from '@imaware/ts-fhir-types';
import {DeepPartial} from 'fishery';
import {observationDefinitionFactory} from '../../../factory/fhir/r4/observationdefinition';
import {common} from '../../common';

/**
 * Creates an Array of size n containing FHIR ObservationDefinition objects.
 *
 * @param {number} n - The number of FHIR ObservationDefinitions to generate.
 * @param {DeepPartial<R4.IObservationDefinition> | Array<DeepPartial<R4.IObservationDefinition>>} defaults - A subset of default properties for the generated objects.
 *
 * @returns {Array<R4.IObservationDefinition>} - The Array of FHIR ObservationDefinitions.
 */
export const observationDefinitionGenerator = (
  n: number,
  defaults:
    | DeepPartial<R4.IObservationDefinition>
    | Array<DeepPartial<R4.IObservationDefinition>> = {},
): Array<R4.IObservationDefinition> => {
  return common<R4.IObservationDefinition>(
    observationDefinitionFactory,
    n,
    defaults,
  );
};
