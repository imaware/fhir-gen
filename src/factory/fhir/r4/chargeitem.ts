import {R4} from '@ahryman40k/ts-fhir-types';
import {Factory, GeneratorFnOptions} from 'fishery';
import {random} from 'faker';
import {randomEnum} from '../../../util';

/**
 * Defines a Factory for generating FHIR ChargeItems.
 *
 * @param {GeneratorFnOptions<R4.IChargeItem, R4.IChargeItem>} opts Options for generating the ChargeItem object.
 *
 * @returns {R4.IChargeItem} - a FHIR ChargeItem
 */
export const chargeItemFactory = Factory.define<R4.IChargeItem, R4.IChargeItem>(
  (
    opts: GeneratorFnOptions<R4.IChargeItem, R4.IChargeItem>,
  ): R4.IChargeItem => {
    // Default values, if any
    const {params} = opts;
    return {
      id: random.uuid(),
      resourceType: 'ChargeItem',
      status: randomEnum(R4.ChargeItemStatusKind),
      ...params,
    } as R4.IChargeItem;
  },
);