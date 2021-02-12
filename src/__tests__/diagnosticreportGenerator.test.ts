import {R4} from '@ahryman40k/ts-fhir-types';
import {expect} from 'chai';
import {diagnosticReportGenerator} from '../generator/fhir/r4/diagnosticreport';

describe('DiagnosticReportGenerator', () => {
  it('correctly creates a list of 10 diagnosticReports', async () => {
    const drs = diagnosticReportGenerator(10);
    expect(drs.length).to.equal(10);
  });

  it('correctly creates a list of 10 diagnosticReports with presets', async () => {
    const drs = diagnosticReportGenerator(10, {
      status: 'corrected' as R4.DiagnosticReportStatusKind,
    });
    expect(drs.length).to.equal(10);
    drs.forEach((dr: R4.IDiagnosticReport) => {
      expect(dr.status).to.equal('corrected');
    });
  });
});
