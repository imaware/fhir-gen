import {R4} from '@imaware/ts-fhir-types';
import {DeepPartial} from 'fishery';
import {accountFactory} from '../../../factory/fhir/r4/account';
import {common} from '../../common';

/**
 * Creates an Array of size n containing FHIR Account objects.
 *
 * @param {number} n - The number of FHIR Accounts to generate.
 * @param {DeepPartial<R4.IAccount> | Array<DeepPartial<R4.IAccount>>} defaults - A subset of default properties for the generated objects.
 *
 * @returns {Array<R4.IAccount>} - The Array of FHIR Accounts.
 */
export const accountGenerator = (
  n: number,
  defaults: DeepPartial<R4.IAccount> | Array<DeepPartial<R4.IAccount>> = {},
): Array<R4.IAccount> => {
  return common<R4.IAccount>(accountFactory, n, defaults);
};
