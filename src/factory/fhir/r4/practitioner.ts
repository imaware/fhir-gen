import {R4} from '@imaware/ts-fhir-types';
import {Factory} from 'fishery';
import {datatype} from '@faker-js/faker/locale/en';

/**
 * Defines a Factory for generating FHIR Practitioners.
 *
 * @param {GeneratorFnOptions<R4.IPractitioner, R4.IPractitioner>} opts Options for generating the Practitioner object.
 *
 * @returns {R4.IPractitioner} - a FHIR Practitioner
 */
export const practitionerFactory = Factory.define<R4.IPractitioner>(
  (opts): R4.IPractitioner => {
    // Default values, if any
    const {params} = opts;
    return {
      resourceType: 'Practitioner',
      id: datatype.uuid(),
      ...params,
    } as R4.IPractitioner;
  },
);
