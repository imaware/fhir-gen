import {R4} from '@ahryman40k/ts-fhir-types';
import {expect} from 'chai';
import {random} from 'faker';
import {DeepPartial} from 'fishery';
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

  it('correctly creates a list of 3 diagnosticReports with different presets', async () => {
    const presets = [
      {
        status: 'cancelled',
      },
      {
        performer: `Practitioner/${random.uuid()}`,
      },
      {
        performer: `Subject/${random.uuid()}`,
      },
    ] as Array<DeepPartial<R4.IDiagnosticReport>>;
    const cts = diagnosticReportGenerator(presets.length, presets);
    expect(cts.length).to.equal(presets.length);
    cts.forEach((ct: R4.IDiagnosticReport, index: number) => {
      expect(ct).to.containSubset(presets[index]);
    });
  });
});
