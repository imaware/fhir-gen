import {R4} from '@ahryman40k/ts-fhir-types';
import {expect} from 'chai';
import {planDefinitionGenerator} from '../generator/fhir/r4/plandefinition';

describe('PlanDefinitionGenerator', () => {
  it('correctly creates a list of 10 plandefinitions', async () => {
    const cts = planDefinitionGenerator(10);
    expect(cts.length).to.equal(10);
  });

  it('correctly creates a list of 10 plandefinitions with presets', async () => {
    const cts = planDefinitionGenerator(10, {
      status: 'active' as R4.PlanDefinitionStatusKind,
    });
    expect(cts.length).to.equal(10);
    cts.forEach((ct: R4.IPlanDefinition) => {
      expect(ct.status).to.equal('active');
    });
  });
});
