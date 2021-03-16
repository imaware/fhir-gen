import {R4} from '@imaware/ts-fhir-types';
import {Factory, GeneratorFnOptions} from 'fishery';
import {random} from 'faker';
import {randomEnum} from '../../../util';

/**
 * Defines a Factory for generating FHIR ActivityDefinitions.
 *
 * @param {GeneratorFnOptions<R4.IActivityDefinition, R4.IActivityDefinition>} opts Options for generating the ActivityDefinition object.
 *
 * @returns {R4.IActivityDefinition} - a FHIR ActivityDefinition
 */
export const activityDefinitionFactory = Factory.define<R4.IActivityDefinition>(
  (
    opts: GeneratorFnOptions<R4.IActivityDefinition, R4.IActivityDefinition>,
  ): R4.IActivityDefinition => {
    // Default values, if any
    const {params} = opts;
    return {
      resourceType: 'ActivityDefinition',
      id: random.uuid(),
      status: randomEnum(R4.ActivityDefinitionStatusKind),
      ...params,
    } as R4.IActivityDefinition;
  },
);
