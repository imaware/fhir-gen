import {R4} from '@ahryman40k/ts-fhir-types';
import {DeepPartial} from 'fishery';
import {carePlanFactory} from '../../../factory/fhir/r4/careplan';
import {common} from '../../common';

/**
 * Creates an Array of size n containing FHIR DiagnosticReport objects.
 *
 * @param {number} n - The number of FHIR DiagnosticReports to generate.
 * @param {DeepPartial<R4.ICarePlan> | Array<DeepPartial<R4.ICarePlan>>} defaults - A subset of default properties for the generated objects.
 *
 * @returns {Array<R4.ICarePlan>} - The Array of FHIR DiagnosticReports.
 */
export const carePlanGenerator = (
  n: number,
  defaults: DeepPartial<R4.ICarePlan> | Array<DeepPartial<R4.ICarePlan>> = {},
): Array<R4.ICarePlan> => {
  return common<R4.ICarePlan>(carePlanFactory, n, defaults);
};
