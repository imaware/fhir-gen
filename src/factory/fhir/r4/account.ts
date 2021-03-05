import {R4} from '@ahryman40k/ts-fhir-types';
import {Factory, GeneratorFnOptions} from 'fishery';
import {random} from 'faker';

/**
 * Defines a Factory for generating FHIR Accounts.
 *
 * @param {GeneratorFnOptions<R4.IAccount, R4.IAccount>} opts Options for generating the Account object.
 *
 * @returns {R4.IAccount} - a FHIR Account
 */
export const accountFactory = Factory.define<R4.IAccount>(
  (opts: GeneratorFnOptions<R4.IAccount, R4.IAccount>): R4.IAccount => {
    // Default values, if any
    const {params} = opts;
    return {
      resourceType: 'Account',
      id: random.uuid(),
      ...params,
    } as R4.IAccount;
  },
);
