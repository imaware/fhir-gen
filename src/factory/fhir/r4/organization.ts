import {R4} from '@imaware/ts-fhir-types';
import {Factory, GeneratorFnOptions} from 'fishery';
import {company, random} from 'faker';
import {contactPointGenerator} from '../../../generator/fhir/r4/contactpoint';
import {addressFactory} from './address';

/**
 * Defines a Factory for generating FHIR Organizations.
 *
 * @param {GeneratorFnOptions<R4.IOrganization, R4.IOrganization>} opts Options for generating the Organization object.
 *
 * @returns {R4.IOrganization} - a FHIR Organization
 */
export const organizationFactory = Factory.define<R4.IOrganization>(
  (
    opts: GeneratorFnOptions<R4.IOrganization, R4.IOrganization>,
  ): R4.IOrganization => {
    // Default values, if any
    const {params} = opts;
    // Contact points
    const numContactPoints = random.number({min: 1, max: 3});
    const contactPoints = contactPointGenerator(
      numContactPoints,
      Array.from(Array(numContactPoints).keys()).map(
        (n: number): R4.IContactPoint => {
          return {rank: n + 1};
        },
      ),
    );
    return {
      resourceType: 'Organization',
      id: random.uuid(),
      name: company.companyName(),
      telecom: contactPoints,
      address: [addressFactory.build()] as R4.IAddress[],
      ...params,
    } as R4.IOrganization;
  },
);
