import {R4} from '@imaware/ts-fhir-types';
import {expect} from 'chai';
import {DeepPartial} from 'fishery';
import {invoiceGenerator} from '../generator/fhir/r4/invoice';

describe('InvoiceGenerator', () => {
  it('correctly creates a list of 10 invoices', async () => {
    const ivs = invoiceGenerator(10);
    expect(ivs.length).to.equal(10);
  });

  it('correctly creates a list of 10 invoices with presets', async () => {
    const ivs = invoiceGenerator(10, {
      status: 'draft' as R4.InvoiceStatusKind,
    });
    expect(ivs.length).to.equal(10);
    ivs.forEach((iv: R4.IInvoice) => {
      expect(iv.status).to.equal('draft');
    });
  });

  it('correctly creates a list of 3 invoices with different presets', async () => {
    const presets = [
      {
        note: ['foo'],
      },
      {
        status: 'draft',
      },
      {
        id: 'bar',
      },
    ] as Array<DeepPartial<R4.IInvoice>>;
    const ivs = invoiceGenerator(presets.length, presets);
    expect(ivs.length).to.equal(presets.length);
    ivs.forEach((iv: R4.IInvoice, index: number) => {
      expect(iv).to.containSubset(presets[index]);
    });
  });
});
