import {R4} from '@imaware/ts-fhir-types';
import {expect} from 'chai';
import {planDefinitionFactory} from '../factory/fhir/r4/plandefinition';
import {uuidV4Regex} from './helpers/patterns';

describe('PlanDefinitionFactory', () => {
  it('correctly creates an plandefinition with no defaults', async () => {
    const pd = planDefinitionFactory.build();
    expect(pd.id).to.exist;
    expect(pd.id).to.match(uuidV4Regex);
    expect(pd.resourceType).to.exist;
    expect(pd.resourceType).to.equal('PlanDefinition');
    expect(pd.status).to.exist;
  });
  it('correctly creates an plandefinition with defaults', async () => {
    const preSets = {
      id: '9d5058fa-4ea5-47c9-bf62-d9b8426e4fe5',
      status: 'draft' as R4.PlanDefinitionStatusKind,
    };
    const pd = planDefinitionFactory.build(preSets);
    expect(pd.id).to.exist;
    expect(pd.id).to.equal(preSets.id);
    expect(pd.resourceType).to.exist;
    expect(pd.resourceType).to.equal('PlanDefinition');
    expect(pd.status).to.exist;
    expect(pd.status).to.equal(pd.status);
  });
});
