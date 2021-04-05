import {R4} from '@imaware/ts-fhir-types';
import {DeepPartial} from 'fishery';
import {specimenDefinitionFactory} from '../../../factory/fhir/r4/specimendefinition';
import {common} from '../../common';

/**
 * Creates an Array of size n containing FHIR SpecimenDefinition objects.
 *
 * @param {number} n - The number of FHIR SpecimenDefinition to generate.
 * @param {DeepPartial<R4.ISpecimenDefinition> | Array<DeepPartial<R4.ISpecimenDefinition>>} defaults - A subset of default properties for the generated objects.
 *
 * @returns {Array<R4.ISpecimenDefinition>} - The Array of FHIR SpecimenDefinition.
 */
export const specimenDefinitionGenerator = (
  n: number,
  defaults:
    | DeepPartial<R4.ISpecimenDefinition>
    | Array<DeepPartial<R4.ISpecimenDefinition>> = {},
): Array<R4.ISpecimenDefinition> => {
  return common<R4.ISpecimenDefinition>(specimenDefinitionFactory, n, defaults);
};
