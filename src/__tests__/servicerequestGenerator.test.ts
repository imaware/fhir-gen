import {R4} from '@imaware/ts-fhir-types';
import {expect} from 'chai';
import {DeepPartial} from 'fishery';
import {serviceRequestGenerator} from '../generator/fhir/r4/servicerequest';

describe('serviceRequestGenerator', () => {
  it('correctly creates a list of 10 servicerequests', async () => {
    const cps = serviceRequestGenerator(10);
    expect(cps.length).to.equal(10);
  });

  it('correctly creates a list of 10 servicerequests with presets', async () => {
    const cps = serviceRequestGenerator(10, {
      status: 'entered-in-error',
    });
    expect(cps.length).to.equal(10);
    cps.forEach((cp: R4.IServiceRequest) => {
      expect(cp.status).to.equal('entered-in-error');
    });
  });

  it('correctly creates a list of 3 servicerequests with different presets', async () => {
    const presets = [
      {
        status: 'active',
      },
      {
        patientInstruction: 'foo',
        identifier: [
          {
            use: 'official',
            value: 'something',
            system: 'https://imaware.health/system',
          } as R4.IIdentifier,
        ] as R4.IIdentifier[],
      },
      {
        name: 'bar',
        experimental: true,
      },
    ] as Array<DeepPartial<R4.IServiceRequest>>;
    const cps = serviceRequestGenerator(presets.length, presets);
    expect(cps.length).to.equal(presets.length);
    cps.forEach((cp: R4.IServiceRequest, index: number) => {
      expect(cp).to.containSubset(presets[index]);
    });
  });
});
