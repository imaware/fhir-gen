import {R4} from '@imaware/ts-fhir-types';
import {DeepPartial} from 'fishery';
import {diagnosticReportFactory} from '../../../factory/fhir/r4/diagnosticreport';
import {common} from '../../common';

/**
 * Creates an Array of size n containing FHIR DiagnosticReport objects.
 *
 * @param {number} n - The number of FHIR DiagnosticReports to generate.
 * @param {DeepPartial<R4.IDiagnosticReport> | Array<DeepPartial<R4.IDiagnosticReport>>} defaults - A subset of default properties for the generated objects.
 *
 * @returns {Array<R4.IDiagnosticReport>} - The Array of FHIR DiagnosticReports.
 */
export const diagnosticReportGenerator = (
  n: number,
  defaults:
    | DeepPartial<R4.IDiagnosticReport>
    | Array<DeepPartial<R4.IDiagnosticReport>> = {},
): Array<R4.IDiagnosticReport> => {
  return common<R4.IDiagnosticReport>(diagnosticReportFactory, n, defaults);
};
