import {R4} from '@imaware/ts-fhir-types';
import {DeepPartial} from 'fishery';
import {organizationFactory} from '../../../factory/fhir/r4/organization';
import {common} from '../../common';

/**
 * Creates an Array of size n containing FHIR Organization objects.
 *
 * @param {number} n - The number of FHIR Organizations to generate.
 * @param {DeepPartial<R4.IOrganization> | Array<DeepPartial<R4.IOrganization>>} defaults - A subset of default properties for the generated objects.
 *
 * @returns {Array<R4.IOrganization>} - The Array of FHIR Organizations.
 */
export const organizationGenerator = (
  n: number,
  defaults:
    | DeepPartial<R4.IOrganization>
    | Array<DeepPartial<R4.IOrganization>> = {},
): Array<R4.IOrganization> => {
  return common<R4.IOrganization>(organizationFactory, n, defaults);
};
