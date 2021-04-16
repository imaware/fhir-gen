import {R4} from '@imaware/ts-fhir-types';
import {random} from 'faker';
import {DeepPartial} from 'fishery';
import {
  A1C_LOINC_CODE,
  CHOLESTEROL_LOINC_CODE,
  HDL_LOINC_CODE,
  LDL_LOINC_CODE,
  LOINC_CODE_TYPE,
  TRIGLYCERIDES_LOINC_CODE,
  VITB12_LOINC_CODE,
  VITD_LOINC_CODE,
} from './loinc';

const codingNormalRange: R4.ICodeableConcept = {
  coding: [
    {
      system: 'http://hl7.org/fhir/referencerange-meaning',
      code: 'normal',
      display: 'Normal Range',
    },
  ],
  text: 'Normal Range',
};
const unitPct = '%';
const unitPgMl = 'pg/ml';
const uomSystem = 'http://unitsofmeasure.org';
const unitMgDl = 'mg/dL';
const unitNgMl = 'ng/mL';

interface ObservationValueGenerator {
  (): DeepPartial<R4.IObservation>;
}
/* istanbul ignore next */
export const biomarkerValueMap = new Map<
  LOINC_CODE_TYPE,
  ObservationValueGenerator
>([
  [
    HDL_LOINC_CODE,
    (): DeepPartial<R4.IObservation> => {
      return {
        // HDL
        referenceRange: [
          {
            id: random.uuid(),
            low: {
              value: 5,
            },
            high: {
              value: 20,
            },
            appliesTo: [codingNormalRange] as R4.ICodeableConcept[],
          },
        ] as R4.IObservation_ReferenceRange[],
        valueQuantity: {
          id: random.uuid(),
          value: random.float({max: 30, min: 2, precision: 1}),
          unit: unitMgDl,
          system: uomSystem,
        } as R4.IQuantity,
      } as DeepPartial<R4.IObservation>;
    },
  ],
  [
    LDL_LOINC_CODE,
    (): DeepPartial<R4.IObservation> => {
      return {
        // LDL
        referenceRange: [
          {
            id: random.uuid(),
            low: {
              value: 20,
            },
            high: {
              value: 80
            },
            appliesTo: [codingNormalRange] as R4.ICodeableConcept[],
          },
        ] as R4.IObservation_ReferenceRange[],
        valueQuantity: {
          id: random.uuid(),
          value: random.float({max: 100, min: 10, precision: 1}),
          unit: unitMgDl,
          system: uomSystem,
        } as R4.IQuantity,
      } as DeepPartial<R4.IObservation>;
    },
  ],
  [
    CHOLESTEROL_LOINC_CODE,
    (): DeepPartial<R4.IObservation> => {
      return {
        // Cholesterol
        referenceRange: [
          {
            id: random.uuid(),
            low: {
              value: 4,
            },
            high: {
              value: 15,
            },
            appliesTo: [codingNormalRange] as R4.ICodeableConcept[],
          },
        ] as R4.IObservation_ReferenceRange[],
        valueQuantity: {
          id: random.uuid(),
          value: random.float({max: 20, min: 1, precision: 1}),
          unit: unitMgDl,
          system: uomSystem,
        } as R4.IQuantity,
      } as DeepPartial<R4.IObservation>;
    },
  ],
  [
    TRIGLYCERIDES_LOINC_CODE,
    (): DeepPartial<R4.IObservation> => {
      return {
        // Triglycerides
        referenceRange: [
          {
            id: random.uuid(),
            low: {
              value: 0,
            },
            high: {
              value: 150,
            },
            appliesTo: [codingNormalRange] as R4.ICodeableConcept[],
          },
        ] as R4.IObservation_ReferenceRange[],
        valueQuantity: {
          id: random.uuid(),
          value: random.float({max: 200, min: 0, precision: 1}),
          unit: unitMgDl,
          system: uomSystem,
        } as R4.IQuantity,
      } as DeepPartial<R4.IObservation>;
    },
  ],
  [
    VITD_LOINC_CODE,
    (): DeepPartial<R4.IObservation> => {
      return {
        // Triglycerides
        referenceRange: [
          {
            id: random.uuid(),
            low: {
              value: 25,
            },
            high: {
              value: 100,
            },
            appliesTo: [codingNormalRange] as R4.ICodeableConcept[],
          },
        ] as R4.IObservation_ReferenceRange[],
        valueQuantity: {
          id: random.uuid(),
          value: random.float({max: 125, min: 10, precision: 1}),
          unit: unitNgMl,
          system: uomSystem,
        } as R4.IQuantity,
      } as DeepPartial<R4.IObservation>;
    },
  ],
  [
    VITB12_LOINC_CODE,
    (): DeepPartial<R4.IObservation> => {
      return {
        // Triglycerides
        referenceRange: [
          {
            id: random.uuid(),
            low: {
              value: 180,
            },
            high: {
              value: 194,
            },
            appliesTo: [codingNormalRange] as R4.ICodeableConcept[],
          },
        ] as R4.IObservation_ReferenceRange[],
        valueQuantity: {
          id: random.uuid(),
          value: random.float({max: 400, min: 100, precision: 1}),
          unit: unitPgMl,
          system: uomSystem,
        } as R4.IQuantity,
      } as DeepPartial<R4.IObservation>;
    },
  ],
  [
    A1C_LOINC_CODE,
    (): DeepPartial<R4.IObservation> => {
      return {
        // Triglycerides
        referenceRange: [
          {
            id: random.uuid(),
            low: {
              value: 3.8,
            },
            high: {
              value: 6.4,
            },
            appliesTo: [codingNormalRange] as R4.ICodeableConcept[],
          },
        ] as R4.IObservation_ReferenceRange[],
        valueQuantity: {
          id: random.uuid(),
          value: random.float({max: 8, min: 2, precision: 1}),
          unit: unitPct,
          system: uomSystem,
        } as R4.IQuantity,
      } as DeepPartial<R4.IObservation>;
    },
  ],
]);

export const randomObservationValues = (
  code: R4.ICodeableConcept,
): DeepPartial<R4.IObservation> => {
  const c = code.coding?.[0].code;
  if (c === undefined) {
    throw new Error('no code provided in coding');
  } else {
    const fn = biomarkerValueMap.get(c as LOINC_CODE_TYPE);
    if (!fn) {
      throw new Error(`unable to generate data for code ${c}`);
    }
    return fn();
  }
};
