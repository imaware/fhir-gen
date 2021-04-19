import {R4} from '@imaware/ts-fhir-types';
import {Factory, GeneratorFnOptions} from 'fishery';
import {datatype} from 'faker';
import {randomEnum} from '../../../util';

/**
 * Defines a Factory for generating FHIR Bundle Entries.
 *
 * @param {GeneratorFnOptions<R4.IBundle_Entry, R4.IBundle_Entry>} opts Options for generating the Bundle Entry object.
 *
 * @returns {R4.IBundle_Entry} - a FHIR Bundle Entry
 */
export const bundleEntryFactory = Factory.define<
  R4.IBundle_Entry,
  R4.IBundle_Entry
>(
  (
    opts: GeneratorFnOptions<R4.IBundle_Entry, R4.IBundle_Entry>,
  ): R4.IBundle_Entry => {
    // Default values, if any
    const {params} = opts;
    const id = params.id || datatype.uuid();
    return {
      id,
      request: {
        method: randomEnum(R4.Bundle_RequestMethodKind),
      },
      fullUrl: `urn:uuid:${id}`,
      ...params,
    } as R4.IBundle_Entry;
  },
);
