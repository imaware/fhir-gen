import {R4} from '@imaware/ts-fhir-types';
import {expect} from 'chai';
import {DeepPartial} from 'fishery';
import {specimenDefinitionGenerator} from '../generator/fhir/r4/specimendefinition';

describe('specimenDefinitionGenerator', () => {
  it('correctly creates a list of 10 specimens', async () => {
    const cps = specimenDefinitionGenerator(10);
    expect(cps.length).to.equal(10);
  });

  it('correctly creates a list of 10 specimens with presets', async () => {
    const cps = specimenDefinitionGenerator(10, {
      timeAspect: 'string',
    });
    expect(cps.length).to.equal(10);
    cps.forEach((cp: R4.ISpecimenDefinition) => {
      expect(cp.timeAspect).to.equal('string');
    });
  });

  it('correctly creates a list of 3 specimens with different presets', async () => {
    const presets = [
      {
        timeAspect: 'string',
      },
      {
        identifier: {
          use: 'official',
          value: 'something',
          system: 'https://imaware.health/system',
        } as R4.IIdentifier,
      },
    ] as Array<DeepPartial<R4.ISpecimenDefinition>>;
    const cps = specimenDefinitionGenerator(presets.length, presets);
    expect(cps.length).to.equal(presets.length);
    cps.forEach((cp: R4.ISpecimenDefinition, index: number) => {
      expect(cp).to.containSubset(presets[index]);
    });
  });
});
