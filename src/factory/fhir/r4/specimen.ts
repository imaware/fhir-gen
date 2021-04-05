import {R4} from '@imaware/ts-fhir-types';
import {Factory, GeneratorFnOptions} from 'fishery';
import {random} from 'faker';

/**
 * Defines a Factory for generating FHIR Specimen.
 *
 * @param {GeneratorFnOptions<R4.ISpecimen, R4.ISpecimen>} opts Options for generating the Specimen object.
 *
 * @returns {R4.ISpecimen} - a FHIR Specimen
 */
export const specimenFactory = Factory.define<R4.ISpecimen>(
  (opts: GeneratorFnOptions<R4.ISpecimen, R4.ISpecimen>): R4.ISpecimen => {
    // Default values, if any
    const {params} = opts;
    return {
      resourceType: 'Specimen',
      id: random.uuid(),
      ...params,
    } as R4.ISpecimen;
  },
);
