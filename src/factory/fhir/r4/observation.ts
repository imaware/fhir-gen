import {R4} from '@imaware/ts-fhir-types';
import {Factory} from 'fishery';
import {datatype} from '@faker-js/faker/locale/en';
import {randomEnum, randomLoincCode} from '../../../util/random';
import {randomObservationValues} from '../../../util/random/observationValues';

/**
 * Defines a Factory for generating FHIR Observations.
 *
 * @param {GeneratorFnOptions<R4.IObservation, R4.IObservation>} opts Options for generating the Observation object.
 *
 * @returns {R4.IObservation} - a FHIR Observation
 */
export const observationFactory = Factory.define<R4.IObservation>(
  (opts): R4.IObservation => {
    // Default values, if any
    const {params} = opts;
    const loincCode = (params.code as R4.ICodeableConcept) || randomLoincCode();
    return {
      resourceType: 'Observation',
      id: datatype.uuid(),
      status: randomEnum(R4.ObservationStatusKind),
      code: loincCode,
      ...randomObservationValues(loincCode),
      ...params,
    } as R4.IObservation;
  },
);
