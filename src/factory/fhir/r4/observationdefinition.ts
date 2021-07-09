import {R4} from '@imaware/ts-fhir-types';
import {Factory, GeneratorFnOptions} from 'fishery';
import {datatype} from 'faker';

/**
 * Defines a Factory for generating FHIR ObservationDefinitions.
 *
 * @param {GeneratorFnOptions<R4.IObservationDefinition, R4.IObservationDefinition>} opts Options for generating the ObservationDefinition object.
 *
 * @returns {R4.IObservationDefinition} - a FHIR ObservationDefinition
 */
export const observationDefinitionFactory =
  Factory.define<R4.IObservationDefinition>(
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
        id: datatype.uuid(),
        code: {
          coding: [
            {
              code: datatype.uuid(),
              display: 'Coding code display',
              system: 'https://imaware.health/system',
            },
          ],
          text: 'Coding code text',
        },
        ...params,
      } as R4.IObservationDefinition;
    },
  );
