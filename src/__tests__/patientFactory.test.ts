import {expect} from 'chai';
import {patientFactory} from '../factory/fhir/r4/patient';
import {uuidV4Regex} from './helpers/patterns';

describe('PatientFactory', () => {
  it('correctly creates an patient with no defaults', async () => {
    const pt = patientFactory.build();
    expect(pt.id).to.exist;
    expect(pt.id).to.match(uuidV4Regex);
    expect(pt.resourceType).to.exist;
    expect(pt.resourceType).to.equal('Patient');
    expect(pt.name).to.exist;
    expect(pt.name?.length).to.equal(1);
    expect(pt.name?.[0].id).to.match(uuidV4Regex);
    expect(pt.name?.[0].family).to.exist;
    expect(pt.name?.[0].family?.length).to.be.greaterThan(0);
    expect(pt.name?.[0].given).to.exist;
    expect(pt.name?.[0].given?.length).to.be.greaterThan(0).and.lessThan(3);
    expect(pt.telecom).to.exist;
    expect(pt.telecom?.length).to.be.greaterThan(0).and.lessThan(4);
    expect(pt.gender).to.exist;
    expect(pt.gender).to.be.oneOf(['male', 'female']);
    expect(pt.birthDate).to.exist;
    expect(pt.birthDate?.length).to.be.greaterThan(0);
    expect(pt.address).to.exist;
    expect(pt.address?.length).to.equal(1);
  });
  it('correctly creates an patient with defaults', async () => {
    const preSets = {
      id: '89cddcf5-9252-4376-844b-068d65417eda',
      name: [
        {
          id: '59aeeab-5ef1-4fb8-b4af-e5a9b23ea0cf',
          family: 'Foomily',
          given: ['Barry'],
        },
      ],
    };
    const pt = patientFactory.build(preSets);
    expect(pt.id).to.exist;
    expect(pt.id).to.equal(preSets.id);
    expect(pt.resourceType).to.exist;
    expect(pt.resourceType).to.equal('Patient');
    expect(pt.name).to.exist;
    expect(pt.name).to.deep.equal(preSets.name);
    expect(pt.gender).to.exist;
    expect(pt.gender).to.be.oneOf(['male', 'female']);
    expect(pt.telecom).to.exist;
    expect(pt.telecom?.length).to.be.greaterThan(0).and.lessThan(4);
    expect(pt.birthDate).to.exist;
    expect(pt.birthDate?.length).to.be.greaterThan(0);
    expect(pt.address).to.exist;
    expect(pt.address?.length).to.equal(1);
  });
});
