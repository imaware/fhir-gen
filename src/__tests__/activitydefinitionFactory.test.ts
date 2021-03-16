import {R4} from '@imaware/ts-fhir-types';
import {expect} from 'chai';
import {activityDefinitionFactory} from '../factory/fhir/r4/activitydefinition';
import {uuidV4Regex} from './helpers/patterns';

describe('ActivityDefinitionFactory', () => {
  it('correctly creates an activitydefinition with no defaults', async () => {
    const pd = activityDefinitionFactory.build();
    expect(pd.id).to.exist;
    expect(pd.id).to.match(uuidV4Regex);
    expect(pd.resourceType).to.exist;
    expect(pd.resourceType).to.equal('ActivityDefinition');
    expect(pd.status).to.exist;
  });
  it('correctly creates an activitydefinition with defaults', async () => {
    const preSets = {
      id: '9d5058fa-4ea5-47c9-bf62-d9b8426e4fe5',
      status: 'draft' as R4.ActivityDefinitionStatusKind,
    };
    const pd = activityDefinitionFactory.build(preSets);
    expect(pd.id).to.exist;
    expect(pd.id).to.equal(preSets.id);
    expect(pd.resourceType).to.exist;
    expect(pd.resourceType).to.equal('ActivityDefinition');
    expect(pd.status).to.exist;
    expect(pd.status).to.equal(pd.status);
  });
});
