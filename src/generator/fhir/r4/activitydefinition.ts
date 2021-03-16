import {R4} from '@imaware/ts-fhir-types';
import {DeepPartial} from 'fishery';
import {activityDefinitionFactory} from '../../../factory/fhir/r4/activitydefinition';
import {common} from '../../common';

/**
 * Creates an Array of size n containing FHIR ActivityDefinition objects.
 *
 * @param {number} n - The number of FHIR ActivityDefinitions to generate.
 * @param {DeepPartial<R4.IActivityDefinition> | Array<DeepPartial<R4.IActivityDefinition>>} defaults - A subset of default properties for the generated objects.
 *
 * @returns {Array<R4.IActivityDefinition>} - The Array of FHIR ActivityDefinitions.
 */
export const activityDefinitionGenerator = (
  n: number,
  defaults:
    | DeepPartial<R4.IActivityDefinition>
    | Array<DeepPartial<R4.IActivityDefinition>> = {},
): Array<R4.IActivityDefinition> => {
  return common<R4.IActivityDefinition>(activityDefinitionFactory, n, defaults);
};
