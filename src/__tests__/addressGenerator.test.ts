import {R4} from '@ahryman40k/ts-fhir-types';
import {expect} from 'chai';
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
});
