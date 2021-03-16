import {R4} from '@imaware/ts-fhir-types';
import {expect} from 'chai';
import {DeepPartial} from 'fishery';
import {chargeItemGenerator} from '../generator/fhir/r4/chargeitem';

describe('ChargeItemGenerator', () => {
  it('correctly creates a list of 10 chargeitems', async () => {
    const cis = chargeItemGenerator(10);
    expect(cis.length).to.equal(10);
  });

  it('correctly creates a list of 10 chargeitems with presets', async () => {
    const cis = chargeItemGenerator(10, {
      status: 'billed' as R4.ChargeItemStatusKind,
    });
    expect(cis.length).to.equal(10);
    cis.forEach((ci: R4.IChargeItem) => {
      expect(ci.status).to.equal('billed');
    });
  });

  it('correctly creates a list of 3 chargeitems with different presets', async () => {
    const presets = [
      {
        note: ['foo'],
      },
      {
        status: 'billed',
      },
      {
        id: 'bar',
      },
    ] as Array<DeepPartial<R4.IChargeItem>>;
    const cis = chargeItemGenerator(presets.length, presets);
    expect(cis.length).to.equal(presets.length);
    cis.forEach((ci: R4.IChargeItem, index: number) => {
      expect(ci).to.containSubset(presets[index]);
    });
  });
});
