import {R4} from '@imaware/ts-fhir-types';
import {expect} from 'chai';
import {DeepPartial} from 'fishery';
import {contactPointGenerator} from '../generator/fhir/r4/contactpoint';

describe('PatientGenerator', () => {
  it('correctly creates a list of 10 contactpoints', async () => {
    const cps = contactPointGenerator(10);
    expect(cps.length).to.equal(10);
  });

  it('correctly creates a list of 10 contactpoints with presets', async () => {
    const cps = contactPointGenerator(10, {
      value: 'foo',
    });
    expect(cps.length).to.equal(10);
    cps.forEach((cp: R4.IContactPoint) => {
      expect(cp.value).to.equal('foo');
    });
  });

  it('correctly creates a list of 3 contactpoints with different presets', async () => {
    const presets = [
      {
        name: 'foo',
      },
      {
        active: true,
      },
      {
        id: 'bar',
      },
    ] as Array<DeepPartial<R4.IContactPoint>>;
    const cps = contactPointGenerator(presets.length, presets);
    expect(cps.length).to.equal(presets.length);
    cps.forEach((cp: R4.IContactPoint, index: number) => {
      expect(cp).to.containSubset(presets[index]);
    });
  });
});
