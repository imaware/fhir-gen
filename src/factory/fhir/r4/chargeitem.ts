import {R4} from '@imaware/ts-fhir-types';
import {Factory} from 'fishery';
import {datatype} from '@faker-js/faker/locale/en';
import {randomEnum} from '../../../util';

/**
 * Defines a Factory for generating FHIR ChargeItems.
 *
 * @param {GeneratorFnOptions<R4.IChargeItem, R4.IChargeItem>} opts Options for generating the ChargeItem object.
 *
 * @returns {R4.IChargeItem} - a FHIR ChargeItem
 */
export const chargeItemFactory = Factory.define<R4.IChargeItem, R4.IChargeItem>(
  (opts): R4.IChargeItem => {
    // Default values, if any
    const {params} = opts;
    return {
      id: datatype.uuid(),
      resourceType: 'ChargeItem',
      status: randomEnum(R4.ChargeItemStatusKind),
      ...params,
    } as R4.IChargeItem;
  },
);
