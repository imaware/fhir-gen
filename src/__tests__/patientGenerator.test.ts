import {expect} from 'chai';
import {patientGenerator} from '../generator/fhir/r4/patient';

describe('PatientGenerator', () => {
  it('correctly creates a list of 10 patients', async () => {
    const pts = patientGenerator(10);
    expect(pts.length).to.equal(10);
  });
});
