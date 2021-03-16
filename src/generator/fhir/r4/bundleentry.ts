import {R4} from '@imaware/ts-fhir-types';
import {DeepPartial} from 'fishery';
import {bundleEntryFactory} from '../../../factory/fhir/r4/bundleentry';
import {common} from '../../common';

/**
 * Creates an Array of size n containing FHIR Bundle Entry objects.
 *
 * @param {number} n - The number of FHIR Bundle Entries to generate.
 * @param {DeepPartial<R4.IBundle_Entry> | Array<DeepPartial<R4.IBundle_Entry>>} defaults - A subset of default properties for the generated objects.
 *
 * @returns {Array<R4.IBundle_Entry>} - The Array of FHIR Bundle Entries.
 */
export const bundleEntryGenerator = (
  n: number,
  defaults:
    | DeepPartial<R4.IBundle_Entry>
    | Array<DeepPartial<R4.IBundle_Entry>> = {},
): Array<R4.IBundle_Entry> => {
  return common<R4.IBundle_Entry>(bundleEntryFactory, n, defaults);
};
