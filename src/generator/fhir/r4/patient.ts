import {R4} from '@ahryman40k/ts-fhir-types';
import {patientFactory} from '../../../factory/fhir/r4/patient';
import {common} from '../../../generator/common';

/**
 * Creates an Array of size n containing FHIR Patient objects.
 *
 * @param {number} n - The number of FHIR Patients to generate.
 *
 * @returns {Array<R4.IPatient>} - The Array of FHIR Patients.
 */
export const patientGenerator = (n: number): Array<R4.IPatient> => {
  return common<R4.IPatient>(patientFactory, n);
};
