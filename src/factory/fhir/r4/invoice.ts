import {R4} from '@imaware/ts-fhir-types';
import {Factory} from 'fishery';
import {datatype} from '@faker-js/faker/locale/en';
import {randomEnum} from '../../../util';

/**
 * Defines a Factory for generating FHIR Invoices.
 *
 * @param {GeneratorFnOptions<R4.IInvoice, R4.IInvoice>} opts Options for generating the Invoice object.
 *
 * @returns {R4.IInvoice} - a FHIR Invoice
 */
export const invoiceFactory = Factory.define<R4.IInvoice, R4.IInvoice>(
  (opts): R4.IInvoice => {
    // Default values, if any
    const {params} = opts;
    return {
      id: datatype.uuid(),
      resourceType: 'Invoice',
      status: randomEnum(R4.InvoiceStatusKind),
      ...params,
    } as R4.IInvoice;
  },
);
