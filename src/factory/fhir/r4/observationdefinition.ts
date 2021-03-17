import {R4} from '@imaware/ts-fhir-types';
import {Factory, GeneratorFnOptions} from 'fishery';
import {random} from 'faker';

/**
 * Defines a Factory for generating FHIR ObservatinoDefinition.
 *
 * @param {GeneratorFnOptions<R4.IObservationDefinition, R4.IObservationDefinition>} opts Options for generating the ObservationDefinition object.
 *
 * @returns {R4.IObservationDefinition} - a FHIR ObservationDefinition
 */
export const observationDefinitionFactory = Factory.define<R4.IObservationDefinition>(
  (
    opts: GeneratorFnOptions<
      R4.IObservationDefinition,
      R4.IObservationDefinition
    >,
  ): R4.IObservationDefinition => {
    // Default values, if any
    const {params} = opts;
    return {
      resourceType: 'ObservationDefinition',
      id: random.uuid(),
      code: {
        coding: [
          {
            code: random.uuid(),
            display: 'Coding code display',
            system: 'http://loinc.org',
          },
        ],
        text: 'Coding code text',
      },
      ...params,
    } as R4.IObservationDefinition;
  },
);
