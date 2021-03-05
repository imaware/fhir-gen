import {R4} from '@ahryman40k/ts-fhir-types';
import {DeepPartial} from 'fishery';
import {chargeItemFactory} from '../../../factory/fhir/r4/chargeitem';
import {common} from '../../common';

/**
 * Creates an Array of size n containing FHIR ChargeItem objects.
 *
 * @param {number} n - The number of FHIR ChargeItems to generate.
 * @param {DeepPartial<R4.IChargeItem> | Array<DeepPartial<R4.IChargeItem>>} defaults - A subset of default properties for the generated objects.
 *
 * @returns {Array<R4.IChargeItem>} - The Array of FHIR chargeitems.
 */
export const chargeItemGenerator = (
  n: number,
  defaults:
    | DeepPartial<R4.IChargeItem>
    | Array<DeepPartial<R4.IChargeItem>> = {},
): Array<R4.IChargeItem> => {
  return common<R4.IChargeItem>(chargeItemFactory, n, defaults);
};
