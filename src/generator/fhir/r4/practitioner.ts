import {R4} from '@imaware/ts-fhir-types';
import {DeepPartial} from 'fishery';
import {practitionerFactory} from '../../../factory/fhir/r4/practitioner';
import {common} from '../../common';

/**
 * Creates an Array of size n containing FHIR Practitioner objects.
 *
 * @param {number} n - The number of FHIR Practitioners to generate.
 * @param {DeepPartial<R4.IPractitioner> | Array<DeepPartial<R4.IPractitioner>>} defaults - A subset of default properties for the generated objects.
 *
 * @returns {Array<R4.IPractitioner>} - The Array of FHIR Practitioners.
 */
export const practitionerGenerator = (
  n: number,
  defaults:
    | DeepPartial<R4.IPractitioner>
    | Array<DeepPartial<R4.IPractitioner>> = {},
): Array<R4.IPractitioner> => {
  return common<R4.IPractitioner>(practitionerFactory, n, defaults);
};
