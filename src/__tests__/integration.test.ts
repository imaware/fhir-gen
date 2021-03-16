import {R4} from '@imaware/ts-fhir-types';
import {expect} from 'chai';
import {
  carePlanGenerator,
  diagnosticReportGenerator,
  observationGenerator,
  patientGenerator,
} from '../generator';

describe('Integration', () => {
  it('correctly creates a diagnosticreport containing 3 observations for a patient with a careplan', async () => {
    const obs = [
      observationGenerator(1)[0],
      observationGenerator(1)[0],
      observationGenerator(1)[0],
    ];
    const pt = patientGenerator(1)[0];
    const cp = carePlanGenerator(1, {
      subject: {
        reference: 'Patient' + '/' + pt.id,
      } as R4.IReference,
    })[0];
    const dr = diagnosticReportGenerator(1, {
      result: obs.map(
        (o: R4.IObservation): R4.IReference => {
          return {
            reference: 'Observation' + '/' + o.id,
          } as R4.IReference;
        },
      ) as R4.IReference[],
      subject: {
        reference: 'Patient' + '/' + pt.id,
      } as R4.IReference,
      basedOn: [
        {
          reference: 'CarePlan' + '/' + cp.id,
        },
      ] as R4.IReference[],
    })[0];
    expect(dr.result?.length).to.equal(3);
    expect(dr.subject).to.deep.equal({
      reference: 'Patient' + '/' + pt.id,
    });
    expect(dr.basedOn).to.deep.equal([
      {
        reference: 'CarePlan' + '/' + cp.id,
      },
    ]);
  });
});
