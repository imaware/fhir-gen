import {R4} from '@imaware/ts-fhir-types';
import {Factory} from 'fishery';
import {random, datatype} from '@faker-js/faker/locale/en';

const serviceRequestStatuses = [
  'draft',
  'active',
  'on-hold',
  'revoked',
  'completed',
  'entered-in-error',
  'unknown',
];

const serviceRequestIntents = [
  'proposal',
  'plan',
  'directive',
  'order',
  'original-order',
  'reflex-order',
  'filler-order',
  'instance-order',
  'option',
];

/**
 * Defines a Factory for generating FHIR ServiceRequests.
 *
 * @param {GeneratorFnOptions<R4.IServiceRequest, R4.IServiceRequest>} opts Options for generating the ServiceRequest object.
 *
 * @returns {R4.IServiceRequest} - a FHIR ServiceRequest
 */
export const serviceRequestFactory = Factory.define<R4.IServiceRequest>(
  (opts): R4.IServiceRequest => {
    // Default values, if any
    const {params} = opts;
    return {
      resourceType: 'ServiceRequest',
      id: datatype.uuid(),
      status: random.arrayElement(serviceRequestStatuses),
      intent: random.arrayElement(serviceRequestIntents),
      subject: {
        display: 'Test Patient Reference Display',
      },
      ...params,
    } as R4.IServiceRequest;
  },
);
