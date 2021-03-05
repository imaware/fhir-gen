import {R4} from '@ahryman40k/ts-fhir-types';
import {DeepPartial} from 'fishery';
import {contactPointFactory} from '../../../factory/fhir/r4/contactpoint';
import {common} from '../../common';

/**
 * Creates an Array of size n containing FHIR ContactPoint objects.
 *
 * @param {number} n - The number of FHIR ContactPoints to generate.
 * @param {DeepPartial<R4.IContactPoint> | Array<DeepPartial<R4.IContactPoint>>} defaults - A subset of default properties for the generated objects.
 *
 * @returns {Array<R4.IContactPoint>} - The Array of FHIR ContactPoint.
 */
export const contactPointGenerator = (
  n: number,
  defaults:
    | DeepPartial<R4.IContactPoint>
    | Array<DeepPartial<R4.IContactPoint>> = {},
): Array<R4.IContactPoint> => {
  return common<R4.IContactPoint>(contactPointFactory, n, defaults);
};
