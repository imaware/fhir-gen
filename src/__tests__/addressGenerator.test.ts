import {expect} from 'chai';
import {addressGenerator} from '../generator/fhir/r4/address';

describe('AddressGenerator', () => {
  it('correctly creates a list of 10 addresss', async () => {
    const pts = addressGenerator(10);
    expect(pts.length).to.equal(10);
  });
});
