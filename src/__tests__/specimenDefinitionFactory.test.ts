import {expect} from 'chai';
import {specimenDefinitionFactory} from '../factory/fhir/r4/specimendefinition';
import {uuidV4Regex} from './helpers/patterns';

describe('specimenDefinitionFactory', () => {
  it('correctly creates a specimendefinition with no defaults', async () => {
    const cp = specimenDefinitionFactory.build();
    expect(cp.id).to.exist;
    expect(cp.id).to.match(uuidV4Regex);
    expect(cp.resourceType).to.exist;
    expect(cp.resourceType).to.equal('SpecimenDefinition');
  });
  it('correctly creates a specimendefinition with defaults', async () => {
    const preSets = {
      id: '9d5058fa-4ea5-47c9-bf62-d9b8426e4fe5',
      timeAspect: 'string',
    };
    const cp = specimenDefinitionFactory.build(preSets);
    expect(cp.id).to.exist;
    expect(cp.id).to.equal(preSets.id);
    expect(cp.resourceType).to.exist;
    expect(cp.resourceType).to.equal('SpecimenDefinition');
    expect(cp.timeAspect).to.exist;
    expect(cp.timeAspect).to.equal(cp.timeAspect);
  });
});
