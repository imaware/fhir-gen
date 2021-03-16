import {R4} from '@imaware/ts-fhir-types';
import {expect} from 'chai';
import {DeepPartial} from 'fishery';
import {organizationGenerator} from '../generator/fhir/r4/organization';

describe('PatientGenerator', () => {
  it('correctly creates a list of 10 organizations', async () => {
    const orgs = organizationGenerator(10);
    expect(orgs.length).to.equal(10);
  });

  it('correctly creates a list of 10 organizations with presets', async () => {
    const orgs = organizationGenerator(10, {
      name: 'foo',
    });
    expect(orgs.length).to.equal(10);
    orgs.forEach((org: R4.IOrganization) => {
      expect(org.name).to.equal('foo');
    });
  });

  it('correctly creates a list of 3 organizations with different presets', async () => {
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
    ] as Array<DeepPartial<R4.IOrganization>>;
    const orgs = organizationGenerator(presets.length, presets);
    expect(orgs.length).to.equal(presets.length);
    orgs.forEach((org: R4.IOrganization, index: number) => {
      expect(org).to.containSubset(presets[index]);
    });
  });
});
