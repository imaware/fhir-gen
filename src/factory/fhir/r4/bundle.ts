import {R4} from '@imaware/ts-fhir-types';
import {Factory} from 'fishery';
import {datatype} from '@faker-js/faker/locale/en';
import {randomEnum} from '../../../util';

/**
 * Defines a Factory for generating FHIR dBundlees.
 *
 * @param {GeneratorFnOptions<R4.IBundle, R4.IBundle>} opts Options for generating the dBundle object.
 *
 * @returns {R4.IBundle} - a FHIR dBundle
 */
export const bundleFactory = Factory.define<R4.IBundle, R4.IBundle>(
  (opts): R4.IBundle => {
    // Default values, if any
    const {params} = opts;
    return {
      resourceType: 'Bundle',
      id: datatype.uuid(),
      entry: [],
      type: randomEnum(R4.BundleTypeKind),
      ...params,
    } as R4.IBundle;
  },
);
