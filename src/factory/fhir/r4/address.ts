import {R4} from '@imaware/ts-fhir-types';
import {Factory} from 'fishery';
import {address as fakerAddress, datatype} from '@faker-js/faker/locale/en';

/**
 * Defines a Factory for generating FHIR Addresses.
 *
 * @param {GeneratorFnOptions<R4.IAddress, R4.IAddress>} opts Options for generating the Address object.
 *
 * @returns {R4.IAddress} - a FHIR Address
 */
export const addressFactory = Factory.define<R4.IAddress, R4.IAddress>(
  (opts): R4.IAddress => {
    // Default values, if any
    const {params} = opts;
    const state = fakerAddress.state();
    const addressLines = [] as string[];
    // First Line
    addressLines.push(fakerAddress.streetAddress());
    // Second Line
    if (datatype.boolean()) {
      addressLines.push(fakerAddress.secondaryAddress());
    }
    return {
      id: datatype.uuid(),
      type: 'both',
      line: addressLines,
      city: fakerAddress.city(),
      state: state,
      postalCode: fakerAddress.zipCodeByState(state),
      country: 'US',
      ...params,
    } as R4.IAddress;
  },
);
