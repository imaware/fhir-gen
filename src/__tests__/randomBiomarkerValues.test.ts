import {R4} from '@imaware/ts-fhir-types';
import {expect} from 'chai';
import {loincCodes, randomObservationValues} from '../util';

describe('RandomObservationValues', () => {
  it('correctly generates a random observation value and reference range', async () => {
    const obs = randomObservationValues(loincCodes[0]);
    expect(obs.referenceRange).to.exist;
    expect(obs.referenceRange).to.not.be.empty;
    expect(obs.valueQuantity).to.exist;
    expect(obs.valueQuantity).to.not.be.empty;
  });

  it('correctly throws an error when not given a code', async () => {
    expect(() => randomObservationValues({})).to.throw(
      'no code provided in coding',
    );
  });

  it('correctly throws an error when given a code which it cannot generate a value for', async () => {
    expect(() =>
      randomObservationValues({
        coding: [
          {
            code: 'foo',
          },
        ] as R4.ICoding[],
      }),
    ).to.throw('unable to generate data for code');
  });
});
