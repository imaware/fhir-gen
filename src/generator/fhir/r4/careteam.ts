import {R4} from '@ahryman40k/ts-fhir-types';
import {DeepPartial} from 'fishery';
import {careTeamFactory} from '../../../factory/fhir/r4/careteam';
import {common} from '../../common';

/**
 * Creates an Array of size n containing FHIR DiagnosticReport objects.
 *
 * @param {number} n - The number of FHIR DiagnosticReports to generate.
 * @param {DeepPartial<R4.ICareTeam>} defaults - A subset of default properties for the generated objects.
 *
 * @returns {Array<R4.ICareTeam>} - The Array of FHIR DiagnosticReports.
 */
export const careTeamGenerator = (
  n: number,
  defaults: DeepPartial<R4.ICareTeam> = {},
): Array<R4.ICareTeam> => {
  return common<R4.ICareTeam>(careTeamFactory, n, defaults);
};
