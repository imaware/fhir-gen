import {R4} from '@imaware/ts-fhir-types';
import {Factory} from 'fishery';
import {datatype} from 'faker';

/**
 * Defines a Factory for generating FHIR Accounts.
 *
 * @param {GeneratorFnOptions<R4.IAccount, R4.IAccount>} opts Options for generating the Account object.
 *
 * @returns {R4.IAccount} - a FHIR Account
 */
export const accountFactory = Factory.define<R4.IAccount>(
  (opts): R4.IAccount => {
    // Default values, if any
    const {params} = opts;
    return {
      resourceType: 'Account',
      id: datatype.uuid(),
      status: 'active',
      ...params,
    } as R4.IAccount;
  },
);
