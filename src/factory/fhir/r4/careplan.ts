import {R4} from '@imaware/ts-fhir-types';
import {Factory} from 'fishery';
import {datatype, random} from '@faker-js/faker/locale/en';

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
  (opts): R4.ICarePlan => {
    // Default values, if any
    const {params} = opts;
    return {
      resourceType: 'CarePlan',
      id: datatype.uuid(),
      status: random.arrayElement(careplanStatuses),
      intent: 'proposal',
      ...params,
    } as R4.ICarePlan;
  },
);
