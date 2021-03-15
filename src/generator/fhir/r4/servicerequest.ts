import {R4} from '@ahryman40k/ts-fhir-types';
import {DeepPartial} from 'fishery';
import {serviceRequestFactory} from '../../../factory/fhir/r4/servicerequest';
import {common} from '../../common';

/**
 * Creates an Array of size n containing FHIR ServiceRequest objects.
 *
 * @param {number} n - The number of FHIR ServiceRequests to generate.
 * @param {DeepPartial<R4.ServiceRequest> | Array<DeepPartial<R4.ServiceRequest>>} defaults - A subset of default properties for the generated objects.
 *
 * @returns {Array<R4.ServiceRequest>} - The Array of FHIR ServiceRequests.
 */
export const serviceRequestGenerator = (
  n: number,
  defaults:
    | DeepPartial<R4.IServiceRequest>
    | Array<DeepPartial<R4.IServiceRequest>> = {},
): Array<R4.IServiceRequest> => {
  return common<R4.IServiceRequest>(serviceRequestFactory, n, defaults);
};
