import {R4} from '@imaware/ts-fhir-types';
import {Factory, GeneratorFnOptions} from 'fishery';
import {datatype} from 'faker';
import {randomEnum} from '../../../util';

/**
 * Defines a Factory for generating FHIR PlanDefinitions.
 *
 * @param {GeneratorFnOptions<R4.IPlanDefinition, R4.IPlanDefinition>} opts Options for generating the PlanDefinition object.
 *
 * @returns {R4.IPlanDefinition} - a FHIR PlanDefinition
 */
export const planDefinitionFactory = Factory.define<R4.IPlanDefinition>(
  (
    opts: GeneratorFnOptions<R4.IPlanDefinition, R4.IPlanDefinition>,
  ): R4.IPlanDefinition => {
    // Default values, if any
    const {params} = opts;
    return {
      resourceType: 'PlanDefinition',
      id: datatype.uuid(),
      status: randomEnum(R4.PlanDefinitionStatusKind),
      ...params,
    } as R4.IPlanDefinition;
  },
);
