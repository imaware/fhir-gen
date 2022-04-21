import {R4} from '@imaware/ts-fhir-types';
import {datatype, random} from '@faker-js/faker/locale/en';

export const A1C_LOINC_CODE = '4548-4';
export const CHOLESTEROL_LOINC_CODE = '74521-3';
export const HDL_LOINC_CODE = '12345-6';
export const LDL_LOINC_CODE = '5341-2';
export const TRIGLYCERIDES_LOINC_CODE = '3043-7';
export const VITB12_LOINC_CODE = '16695-9';
export const VITD_LOINC_CODE = '35365-6';

export type LOINC_CODE_TYPE =
  | typeof A1C_LOINC_CODE
  | typeof CHOLESTEROL_LOINC_CODE
  | typeof HDL_LOINC_CODE
  | typeof LDL_LOINC_CODE
  | typeof TRIGLYCERIDES_LOINC_CODE
  | typeof VITB12_LOINC_CODE
  | typeof VITD_LOINC_CODE;

const loincSystem = 'https://loinc.org/';
export const loincCodes: Array<R4.ICodeableConcept> = [
  {
    id: datatype.uuid(),
    coding: [
      {
        id: datatype.uuid(),
        system: loincSystem,
        code: HDL_LOINC_CODE,
        display: 'HDL',
      },
    ] as Array<R4.ICoding>,
    text: 'HDL',
  } as R4.ICodeableConcept,
  {
    id: datatype.uuid(),
    coding: [
      {
        id: datatype.uuid(),
        system: loincSystem,
        code: LDL_LOINC_CODE,
        display: 'LDL',
      },
    ] as Array<R4.ICoding>,
    text: 'LDL',
  } as R4.ICodeableConcept,
  {
    id: datatype.uuid(),
    coding: [
      {
        id: datatype.uuid(),
        system: loincSystem,
        code: CHOLESTEROL_LOINC_CODE,
        display: 'Cholesterol',
      },
    ] as Array<R4.ICoding>,
    text: 'Cholesterol',
  } as R4.ICodeableConcept,
  {
    id: datatype.uuid(),
    coding: [
      {
        id: datatype.uuid(),
        system: loincSystem,
        code: TRIGLYCERIDES_LOINC_CODE,
        display: 'Trigl Bld-mCnc',
      },
    ] as Array<R4.ICoding>,
    text: 'Trigl Bld-mCnc',
  } as R4.ICodeableConcept,
  {
    id: datatype.uuid(),
    coding: [
      {
        id: datatype.uuid(),
        system: loincSystem,
        code: VITD_LOINC_CODE,
        display: 'Vit D+metab SerPl-mCnc',
      },
    ] as Array<R4.ICoding>,
    text: 'Vit D+metab SerPl-mCnc',
  } as R4.ICodeableConcept,
  {
    id: datatype.uuid(),
    coding: [
      {
        id: datatype.uuid(),
        system: loincSystem,
        code: VITB12_LOINC_CODE,
        display: 'Vit B12 Bld-mCnc',
      },
    ] as Array<R4.ICoding>,
    text: 'Vit B12 Bld-mCnc',
  } as R4.ICodeableConcept,
  {
    id: datatype.uuid(),
    coding: [
      {
        id: datatype.uuid(),
        system: loincSystem,
        code: A1C_LOINC_CODE,
        display: 'HbA1c MFr Bld',
      },
    ] as Array<R4.ICoding>,
    text: 'HbA1c MFr Bld',
  } as R4.ICodeableConcept,
];

/**
 * Returns a random LOIC code FHIR CodeableConcept
 *
 * @returns {R4.ICodeableConcept} - A LOIC code as a CodeableConcept
 */
export const randomLoincCode = (): R4.ICodeableConcept => {
  return random.arrayElement(loincCodes);
};
