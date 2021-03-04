import {R4} from '@ahryman40k/ts-fhir-types';
import {Factory, GeneratorFnOptions} from 'fishery';
import {random} from 'faker';
import {randomEnum} from '../../../util';

/**
 * Defines a Factory for generating FHIR dBundlees.
 *
 * @param {GeneratorFnOptions<R4.IBundle, R4.IBundle>} opts Options for generating the dBundle object.
 *
 * @returns {R4.IBundle} - a FHIR dBundle
 */
export const bundleFactory = Factory.define<R4.IBundle, R4.IBundle>(
  (opts: GeneratorFnOptions<R4.IBundle, R4.IBundle>): R4.IBundle => {
    // Default values, if any
    const {params} = opts;
    return {
      resourceType: 'Bundle',
      id: random.uuid(),
      entry: [],
      type: randomEnum(R4.BundleTypeKind),
      ...params,
    } as R4.IBundle;
  },
);
