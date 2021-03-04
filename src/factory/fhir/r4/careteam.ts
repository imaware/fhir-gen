import {R4} from '@ahryman40k/ts-fhir-types';
import {Factory, GeneratorFnOptions} from 'fishery';
import {random} from 'faker';
import {randomEnum} from '../../../util';

/**
 * Defines a Factory for generating FHIR CareTeams.
 *
 * @param {GeneratorFnOptions<R4.ICareTeam, R4.ICareTeam>} opts Options for generating the CareTeam object.
 *
 * @returns {R4.ICareTeam} - a FHIR CareTeam
 */
export const careTeamFactory = Factory.define<R4.ICareTeam>(
  (opts: GeneratorFnOptions<R4.ICareTeam, R4.ICareTeam>): R4.ICareTeam => {
    // Default values, if any
    const {params} = opts;
    return {
      resourceType: 'CareTeam',
      id: random.uuid(),
      status: randomEnum(R4.CareTeamStatusKind),
      ...params,
    } as R4.ICareTeam;
  },
);
