import {R4} from '@ahryman40k/ts-fhir-types';
import {Factory, GeneratorFnOptions} from 'fishery';
import {date, internet, name, phone, random} from 'faker';
import {addressFactory} from './address';

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
    const contactPoints = [] as R4.IContactPoint[];
    // // Email
    contactPoints.push({
      id: random.uuid(),
      system: 'email',
      value: internet.email(),
      rank: contactPoints.length,
    } as R4.IContactPoint);
    // // Phone (SMS)
    if (random.boolean()) {
      contactPoints.push({
        id: random.uuid(),
        system: 'sms',
        value: phone.phoneNumber('1##########'),
        rank: contactPoints.length,
      } as R4.IContactPoint);
    }
    // // Phone
    if (random.boolean()) {
      contactPoints.push({
        id: random.uuid(),
        system: 'phone',
        value: phone.phoneNumber('1##########'),
        rank: contactPoints.length,
      } as R4.IContactPoint);
    }
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
