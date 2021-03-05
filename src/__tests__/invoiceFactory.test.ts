import {expect} from 'chai';
import {invoiceFactory} from '../factory/fhir/r4/invoice';
import {uuidV4Regex} from './helpers/patterns';

describe('InvoiceFactory', () => {
  it('correctly creates an invoice with no defaults', async () => {
    const iv = invoiceFactory.build();
    expect(iv.id).to.exist;
    expect(iv.id).to.match(uuidV4Regex);
    expect(iv.resourceType).to.exist;
    expect(iv.resourceType).to.equal('Invoice');
  });
  it('correctly creates an invoice with defaults', async () => {
    const preSets = {
      id: '89cddcf5-9252-4376-844b-068d65417eda',
      date: new Date().toISOString(),
    };
    const iv = invoiceFactory.build(preSets);
    expect(iv.id).to.exist;
    expect(iv.id).to.equal(preSets.id);
    expect(iv.date).to.exist;
    expect(iv.date).to.equal(preSets.date);
    expect(iv.resourceType).to.exist;
    expect(iv.resourceType).to.equal('Invoice');
  });
});
