import {R4} from '@ahryman40k/ts-fhir-types';
import {DeepPartial} from 'fishery';
import {patientFactory} from '../../../factory/fhir/r4/patient';
import {common} from '../../../generator/common';

/**
 * Creates an Array of size n containing FHIR Patient objects.
 *
 * @param {number} n - The number of FHIR Patients to generate.
 * @param {DeepPartial<R4.IPatient> | Array<DeepPartial<R4.IPatient>>} defaults - A subset of default properties for the generated objects.
 *
 * @returns {Array<R4.IPatient>} - The Array of FHIR Patients.
 */
export const patientGenerator = (
  n: number,
  defaults: DeepPartial<R4.IPatient> | Array<DeepPartial<R4.IPatient>> = {},
): Array<R4.IPatient> => {
  return common<R4.IPatient>(patientFactory, n, defaults);
};
