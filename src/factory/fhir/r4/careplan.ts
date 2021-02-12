import {R4} from '@ahryman40k/ts-fhir-types';
import {Factory, GeneratorFnOptions} from 'fishery';
import {random} from 'faker';

const careplanStatuses = [
  'draft',
  'active',
  'on-hold',
  'revoked',
  'completed',
  'entered-in-error',
  'unknown',
];

/**
 * Defines a Factory for generating FHIR CarePlans.
 *
 * @param {GeneratorFnOptions<R4.ICarePlan, R4.ICarePlan>} opts Options for generating the CarePlan object.
 *
 * @returns {R4.ICarePlan} - a FHIR CarePlan
 */
export const carePlanFactory = Factory.define<R4.ICarePlan>(
  (opts: GeneratorFnOptions<R4.ICarePlan, R4.ICarePlan>): R4.ICarePlan => {
    // Default values, if any
    const {params} = opts;
    return {
      resourceType: 'CarePlan',
      id: random.uuid(),
      status: random.arrayElement(careplanStatuses),
      ...params,
    } as R4.ICarePlan;
  },
);
