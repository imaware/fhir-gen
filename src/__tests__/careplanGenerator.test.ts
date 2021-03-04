import {R4} from '@ahryman40k/ts-fhir-types';
import {expect} from 'chai';
import {carePlanGenerator} from '../generator/fhir/r4/careplan';

describe('CarePlanGenerator', () => {
  it('correctly creates a list of 10 careplans', async () => {
    const cps = carePlanGenerator(10);
    expect(cps.length).to.equal(10);
  });

  it('correctly creates a list of 10 careplans with presets', async () => {
    const cps = carePlanGenerator(10, {
      status: 'entered-in-error',
    });
    expect(cps.length).to.equal(10);
    cps.forEach((cp: R4.ICarePlan) => {
      expect(cp.status).to.equal('entered-in-error');
    });
  });
});
