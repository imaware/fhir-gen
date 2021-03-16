import {R4} from '@imaware/ts-fhir-types';
import {expect} from 'chai';
import {diagnosticReportFactory} from '../factory/fhir/r4/diagnosticreport';
import {uuidV4Regex} from './helpers/patterns';

describe('DiagnosticReportFactory', () => {
  it('correctly creates an diagnosticreport with no defaults', async () => {
    const dr = diagnosticReportFactory.build();
    expect(dr.id).to.exist;
    expect(dr.id).to.match(uuidV4Regex);
    expect(dr.resourceType).to.exist;
    expect(dr.resourceType).to.equal('DiagnosticReport');
    expect(dr.status).to.exist;
    expect(dr.status).to.be.oneOf(Object.values(R4.DiagnosticReportStatusKind));
  });
  it('correctly creates an diagnosticreport with defaults', async () => {
    const preSets = {
      id: '9d5058fa-4ea5-47c9-bf62-d9b8426e4fe5',
      status: 'final' as R4.DiagnosticReportStatusKind,
    };
    const dr = diagnosticReportFactory.build(preSets);
    expect(dr.id).to.exist;
    expect(dr.id).to.equal(preSets.id);
    expect(dr.resourceType).to.exist;
    expect(dr.resourceType).to.equal('DiagnosticReport');
    expect(dr.status).to.exist;
    expect(dr.status).to.equal(dr.status);
  });
});
