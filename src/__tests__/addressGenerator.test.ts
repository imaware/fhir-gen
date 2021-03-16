import {R4} from '@imaware/ts-fhir-types';
import {expect} from 'chai';
import {DeepPartial} from 'fishery';
import {addressGenerator} from '../generator/fhir/r4/address';

describe('AddressGenerator', () => {
  it('correctly creates a list of 10 addresss', async () => {
    const addrs = addressGenerator(10);
    expect(addrs.length).to.equal(10);
  });

  it('correctly creates a list of 10 addresses with presets', async () => {
    const addrs = addressGenerator(10, {
      state: 'TX',
    });
    expect(addrs.length).to.equal(10);
    addrs.forEach((addr: R4.IAddress) => {
      expect(addr.state).to.equal('TX');
    });
  });

  it('correctly creates a list of 3 addresses with different presets', async () => {
    const presets = [
      {
        status: 'active' as R4.ActivityDefinitionStatusKind,
      },
      {
        name: 'foo',
        state: 'FL',
      },
      {
        state: 'TX',
      },
    ] as Array<DeepPartial<R4.IAddress>>;
    const addrs = addressGenerator(presets.length, presets);
    expect(addrs.length).to.equal(presets.length);
    addrs.forEach((addr: R4.IAddress, index: number) => {
      expect(addr).to.containSubset(presets[index]);
    });
  });
});
