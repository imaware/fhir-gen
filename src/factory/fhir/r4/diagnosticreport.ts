import {R4} from '@ahryman40k/ts-fhir-types';
import {Factory, GeneratorFnOptions} from 'fishery';
import {random} from 'faker';
import {randomEnum} from '../../../util/random';

/**
 * Defines a Factory for generating FHIR DiagnosticReports.
 *
 * @param {GeneratorFnOptions<R4.IDiagnosticReport, R4.IDiagnosticReport>} opts Options for generating the DiagnosticReport object.
 *
 * @returns {R4.IDiagnosticReport} - a FHIR DiagnosticReport
 */
export const diagnosticReportFactory = Factory.define<R4.IDiagnosticReport>(
  (
    opts: GeneratorFnOptions<R4.IDiagnosticReport, R4.IDiagnosticReport>,
  ): R4.IDiagnosticReport => {
    // Default values, if any
    const {params} = opts;
    return {
      resourceType: 'DiagnosticReport',
      id: random.uuid(),
      status: randomEnum(R4.DiagnosticReportStatusKind),
      ...params,
    } as R4.IDiagnosticReport;
  },
);