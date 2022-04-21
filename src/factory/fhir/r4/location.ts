import {R4} from '@imaware/ts-fhir-types';
import {Factory} from 'fishery';
import {company, datatype} from '@faker-js/faker/locale/en';
import {addressFactory} from './address';

/**
 * Defines a Factory for generating FHIR Locations.
 *
 * @param {GeneratorFnOptions<R4.ILocation, R4.ILocation>} opts Options for generating the Location object.
 *
 * @returns {R4.ILocation} - a FHIR Location
 */
export const locationFactory = Factory.define<R4.ILocation, R4.ILocation>(
  (opts): R4.ILocation => {
    // Default values, if any
    const {params} = opts;
    return {
      id: datatype.uuid(),
      resourceType: 'Location',
      address: addressFactory.build(),
      mode: 'instance',
      status: 'active',
      name: company.companyName(),
      ...params,
    } as R4.ILocation;
  },
);
