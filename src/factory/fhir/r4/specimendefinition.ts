import {R4} from '@imaware/ts-fhir-types';
import {Factory, GeneratorFnOptions} from 'fishery';
import {datatype} from 'faker';

/**
 * Defines a Factory for generating FHIR SpecimenDefinition.
 *
 * @param {GeneratorFnOptions<R4.ISpecimenDefinition, R4.ISpecimenDefinition>} opts Options for generating the SpecimenDefinition object.
 *
 * @returns {R4.ISpecimenDefinition} - a FHIR SpecimenDefinition
 */
export const specimenDefinitionFactory = Factory.define<R4.ISpecimenDefinition>(
  (
    opts: GeneratorFnOptions<R4.ISpecimenDefinition, R4.ISpecimenDefinition>,
  ): R4.ISpecimenDefinition => {
    // Default values, if any
    const {params} = opts;
    return {
      resourceType: 'SpecimenDefinition',
      id: datatype.uuid(),
      ...params,
    } as R4.ISpecimenDefinition;
  },
);
