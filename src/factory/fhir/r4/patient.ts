import {R4} from '@ahryman40k/ts-fhir-types';
import {Factory, GeneratorFnOptions} from 'fishery';
import {date, name, random} from 'faker';
import {addressFactory} from './address';
import {contactPointGenerator} from '../../../generator/fhir/r4/contactpoint';

/**
 * Defines a Factory for generating FHIR Patients.
 *
 * @param {GeneratorFnOptions<R4.IPatient, R4.IPatient>} opts Options for generating the Patient object.
 *
 * @returns {R4.IPatient} - a FHIR Patient
 */
export const patientFactory = Factory.define<R4.IPatient>(
  (opts: GeneratorFnOptions<R4.IPatient, R4.IPatient>): R4.IPatient => {
    // Default values, if any
    const {params} = opts;
    // Given name
    const given = [name.firstName()] as string[];
    if (random.boolean()) {
      given.push(name.middleName());
    }
    // Contact points
    const numContactPoints = random.number({min: 1, max: 3});
    const contactPoints = contactPointGenerator(
      numContactPoints,
      Array.from(Array(numContactPoints).keys()).map(
        (n: number): R4.IContactPoint => {
          return {rank: n};
        },
      ),
    );
    return {
      resourceType: 'Patient',
      id: random.uuid(),
      name: [
        {
          id: random.uuid(),
          family: name.lastName(),
          given,
        },
      ] as R4.IHumanName[],
      telecom: contactPoints,
      gender: random.boolean() ? 'male' : 'female',
      birthDate: date.past(100, new Date()).toISOString().split('T')[0],
      address: [addressFactory.build()] as R4.IAddress[],
      ...params,
    } as R4.IPatient;
  },
);
