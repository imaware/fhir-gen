import {R4} from '@ahryman40k/ts-fhir-types';
import {expect} from 'chai';
import {DeepPartial} from 'fishery';
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

  it('correctly creates a list of 3 patients with different presets', async () => {
    const presets = [
      {
        name: [
          {
            family: 'foo',
            given: ['bar'],
          },
        ],
      },
      {
        birthDate: '01-01-1980',
      },
      {
        gender: 'm',
      },
    ] as Array<DeepPartial<R4.IPatient>>;
    const pts = patientGenerator(presets.length, presets);
    expect(pts.length).to.equal(presets.length);
    pts.forEach((pt: R4.IPatient, index: number) => {
      expect(pt).to.containSubset(presets[index]);
    });
  });
});
