import {R4} from '@imaware/ts-fhir-types';
import {Factory} from 'fishery';
import {internet, phone, datatype} from '@faker-js/faker/locale/en';
import {randomEnum} from '../../../util';

/**
 * Defines a Factory for generating FHIR ContactPoints.
 *
 * @param {GeneratorFnOptions<R4.IContactPoint, R4.IContactPoint>} opts Options for generating the ContactPoint object.
 *
 * @returns {R4.IContactPoint} - a FHIR ContactPoint
 */
export const contactPointFactory = Factory.define<R4.IContactPoint>(
  (opts): R4.IContactPoint => {
    // Default values, if any
    const {params} = opts;
    const system = params.system || randomEnum(R4.ContactPointSystemKind);
    let value = '';
    switch (system) {
      case R4.ContactPointSystemKind._phone:
      case R4.ContactPointSystemKind._fax:
      case R4.ContactPointSystemKind._pager:
      case R4.ContactPointSystemKind._sms:
        value = phone.phoneNumber('1##########');
        break;
      case R4.ContactPointSystemKind._email:
      case R4.ContactPointSystemKind._other:
        value = internet.email();
        break;
      case R4.ContactPointSystemKind._url:
        value = internet.url();
        break;
    }
    return {
      id: datatype.uuid(),
      system,
      value,
      rank: 1,
      ...params,
    } as R4.IContactPoint;
  },
);
