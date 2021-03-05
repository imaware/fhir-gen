import {R4} from '@ahryman40k/ts-fhir-types';
import {DeepPartial} from 'fishery';
import {invoiceFactory} from '../../../factory/fhir/r4/invoice';
import {common} from '../../common';

/**
 * Creates an Array of size n containing FHIR Invoice objects.
 *
 * @param {number} n - The number of FHIR Invoices to generate.
 * @param {DeepPartial<R4.IInvoice> | Array<DeepPartial<R4.IInvoice>>} defaults - A subset of default properties for the generated objects.
 *
 * @returns {Array<R4.IInvoice>} - The Array of FHIR invoices.
 */
export const invoiceGenerator = (
  n: number,
  defaults: DeepPartial<R4.IInvoice> | Array<DeepPartial<R4.IInvoice>> = {},
): Array<R4.IInvoice> => {
  return common<R4.IInvoice>(invoiceFactory, n, defaults);
};
