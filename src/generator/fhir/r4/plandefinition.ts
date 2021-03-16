import {R4} from '@imaware/ts-fhir-types';
import {DeepPartial} from 'fishery';
import {planDefinitionFactory} from '../../../factory/fhir/r4/plandefinition';
import {common} from '../../common';

/**
 * Creates an Array of size n containing FHIR PlanDefinition objects.
 *
 * @param {number} n - The number of FHIR PlanDefinitions to generate.
 * @param {DeepPartial<R4.IPlanDefinition> | Array<DeepPartial<R4.IPlanDefinition>>} defaults - A subset of default properties for the generated objects.
 *
 * @returns {Array<R4.IPlanDefinition>} - The Array of FHIR PlanDefinitions.
 */
export const planDefinitionGenerator = (
  n: number,
  defaults:
    | DeepPartial<R4.IPlanDefinition>
    | Array<DeepPartial<R4.IPlanDefinition>> = {},
): Array<R4.IPlanDefinition> => {
  return common<R4.IPlanDefinition>(planDefinitionFactory, n, defaults);
};
