import {R4} from '@imaware/ts-fhir-types';
import {expect} from 'chai';
import {contactPointFactory} from '../factory/fhir/r4/contactpoint';
import {uuidV4Regex} from './helpers/patterns';

describe('ContactPointFactory', () => {
  it('correctly creates an contactpoint with no defaults', async () => {
    const cp = contactPointFactory.build();
    expect(cp.id).to.exist;
    expect(cp.id).to.match(uuidV4Regex);
  });
  it('correctly creates an contactpoint with defaults', async () => {
    const preSets = {
      id: '89cddcf5-9252-4376-844b-068d65417eda',
      system: 'url' as R4.ContactPointSystemKind,
    };
    const cp = contactPointFactory.build(preSets);
    expect(cp.id).to.exist;
    expect(cp.id).to.equal(preSets.id);
    expect(cp.system).to.exist;
    expect(cp.system).to.equal(preSets.system);
  });
});
