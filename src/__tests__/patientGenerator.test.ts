import {R4} from '@ahryman40k/ts-fhir-types';
import {expect} from 'chai';
import {patientGenerator} from '../generator/fhir/r4/patient';

describe('PatientGenerator', () => {
  it('correctly creates a list of 10 patients', async () => {
    const pts = patientGenerator(10);
    expect(pts.length).to.equal(10);
  });

  it('correctly creates a list of 10 patients with presets', async () => {
    const pts = patientGenerator(10, {
      gender: 'male' as R4.PatientGenderKind,
    });
    expect(pts.length).to.equal(10);
    pts.forEach((pt: R4.IPatient) => {
      expect(pt.gender).to.equal('male');
    });
  });
});
