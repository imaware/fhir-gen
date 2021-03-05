import {R4} from '@ahryman40k/ts-fhir-types';
import {Factory, GeneratorFnOptions} from 'fishery';
import {random} from 'faker';
import {randomEnum} from '../../../util';
import {chargeItemGenerator} from 'src/generator/fhir/r4/chargeitem';

/**
 * Defines a Factory for generating FHIR Invoices.
 *
 * @param {GeneratorFnOptions<R4.IInvoice, R4.IInvoice>} opts Options for generating the Invoice object.
 *
 * @returns {R4.IInvoice} - a FHIR Invoice
 */
export const invoiceFactory = Factory.define<R4.IInvoice, R4.IInvoice>(
  (opts: GeneratorFnOptions<R4.IInvoice, R4.IInvoice>): R4.IInvoice => {
    // Default values, if any
    const {params} = opts;
    return {
      id: random.uuid(),
      resourceType: 'Invoice',
      status: randomEnum(R4.InvoiceStatusKind),
      ...params,
    } as R4.IInvoice;
  },
);
