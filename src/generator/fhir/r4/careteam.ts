import {R4} from '@imaware/ts-fhir-types';
import {DeepPartial} from 'fishery';
import {careTeamFactory} from '../../../factory/fhir/r4/careteam';
import {common} from '../../common';

/**
 * Creates an Array of size n containing FHIR CareTeam objects.
 *
 * @param {number} n - The number of FHIR CareTeams to generate.
 * @param {DeepPartial<R4.ICareTeam> | Array<DeepPartial<R4.ICareTeam>>} defaults - A subset of default properties for the generated objects.
 *
 * @returns {Array<R4.ICareTeam>} - The Array of FHIR CareTeams.
 */
export const careTeamGenerator = (
  n: number,
  defaults: DeepPartial<R4.ICareTeam> | Array<DeepPartial<R4.ICareTeam>> = {},
): Array<R4.ICareTeam> => {
  return common<R4.ICareTeam>(careTeamFactory, n, defaults);
};
