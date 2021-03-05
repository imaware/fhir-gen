## Members

<dl>
<dt><a href="#loincCodes">loincCodes</a> ⇒ <code>R4.ICodeableConcept</code></dt>
<dd><p>Returns a random LOIC code FHIR CodeableConcept</p></dd>
</dl>

## Constants

<dl>
<dt><a href="#accountFactory">accountFactory</a> ⇒ <code>R4.IAccount</code></dt>
<dd><p>Defines a Factory for generating FHIR Accounts.</p></dd>
<dt><a href="#activityDefinitionFactory">activityDefinitionFactory</a> ⇒ <code>R4.IActivityDefinition</code></dt>
<dd><p>Defines a Factory for generating FHIR ActivityDefinitions.</p></dd>
<dt><a href="#addressFactory">addressFactory</a> ⇒ <code>R4.IAddress</code></dt>
<dd><p>Defines a Factory for generating FHIR Addresses.</p></dd>
<dt><a href="#bundleFactory">bundleFactory</a> ⇒ <code>R4.IBundle</code></dt>
<dd><p>Defines a Factory for generating FHIR dBundlees.</p></dd>
<dt><a href="#bundleEntryFactory">bundleEntryFactory</a> ⇒ <code>R4.IBundle_Entry</code></dt>
<dd><p>Defines a Factory for generating FHIR Bundle Entries.</p></dd>
<dt><a href="#carePlanFactory">carePlanFactory</a> ⇒ <code>R4.ICarePlan</code></dt>
<dd><p>Defines a Factory for generating FHIR CarePlans.</p></dd>
<dt><a href="#careTeamFactory">careTeamFactory</a> ⇒ <code>R4.ICareTeam</code></dt>
<dd><p>Defines a Factory for generating FHIR CareTeams.</p></dd>
<dt><a href="#chargeItemFactory">chargeItemFactory</a> ⇒ <code>R4.IChargeItem</code></dt>
<dd><p>Defines a Factory for generating FHIR ChargeItems.</p></dd>
<dt><a href="#contactPointFactory">contactPointFactory</a> ⇒ <code>R4.IContactPoint</code></dt>
<dd><p>Defines a Factory for generating FHIR ContactPoints.</p></dd>
<dt><a href="#diagnosticReportFactory">diagnosticReportFactory</a> ⇒ <code>R4.IDiagnosticReport</code></dt>
<dd><p>Defines a Factory for generating FHIR DiagnosticReports.</p></dd>
<dt><a href="#invoiceFactory">invoiceFactory</a> ⇒ <code>R4.IInvoice</code></dt>
<dd><p>Defines a Factory for generating FHIR Invoices.</p></dd>
<dt><a href="#observationFactory">observationFactory</a> ⇒ <code>R4.IObservation</code></dt>
<dd><p>Defines a Factory for generating FHIR Observations.</p></dd>
<dt><a href="#organizationFactory">organizationFactory</a> ⇒ <code>R4.IOrganization</code></dt>
<dd><p>Defines a Factory for generating FHIR Organizations.</p></dd>
<dt><a href="#patientFactory">patientFactory</a> ⇒ <code>R4.IPatient</code></dt>
<dd><p>Defines a Factory for generating FHIR Patients.</p></dd>
<dt><a href="#planDefinitionFactory">planDefinitionFactory</a> ⇒ <code>R4.IPlanDefinition</code></dt>
<dd><p>Defines a Factory for generating FHIR PlanDefinitions.</p></dd>
</dl>

## Functions

<dl>
<dt><a href="#common">common(factory, n, params)</a> ⇒ <code>Array.&lt;T&gt;</code></dt>
<dd><p>Generic function for building a list of type T from a Factory.</p></dd>
<dt><a href="#accountGenerator">accountGenerator(n, defaults)</a> ⇒ <code>Array.&lt;R4.IAccount&gt;</code></dt>
<dd><p>Creates an Array of size n containing FHIR Account objects.</p></dd>
<dt><a href="#activityDefinitionGenerator">activityDefinitionGenerator(n, defaults)</a> ⇒ <code>Array.&lt;R4.IActivityDefinition&gt;</code></dt>
<dd><p>Creates an Array of size n containing FHIR ActivityDefinition objects.</p></dd>
<dt><a href="#addressGenerator">addressGenerator(n, defaults)</a> ⇒ <code>Array.&lt;R4.IAddress&gt;</code></dt>
<dd><p>Creates an Array of size n containing FHIR Address objects.</p></dd>
<dt><a href="#bundleGenerator">bundleGenerator(n, defaults)</a> ⇒ <code>Array.&lt;R4.IBundle&gt;</code></dt>
<dd><p>Creates an Array of size n containing FHIR Bundle objects.</p></dd>
<dt><a href="#bundleEntryGenerator">bundleEntryGenerator(n, defaults)</a> ⇒ <code>Array.&lt;R4.IBundle_Entry&gt;</code></dt>
<dd><p>Creates an Array of size n containing FHIR Bundle Entry objects.</p></dd>
<dt><a href="#carePlanGenerator">carePlanGenerator(n, defaults)</a> ⇒ <code>Array.&lt;R4.ICarePlan&gt;</code></dt>
<dd><p>Creates an Array of size n containing FHIR DiagnosticReport objects.</p></dd>
<dt><a href="#careTeamGenerator">careTeamGenerator(n, defaults)</a> ⇒ <code>Array.&lt;R4.ICareTeam&gt;</code></dt>
<dd><p>Creates an Array of size n containing FHIR CareTeam objects.</p></dd>
<dt><a href="#chargeItemGenerator">chargeItemGenerator(n, defaults)</a> ⇒ <code>Array.&lt;R4.IChargeItem&gt;</code></dt>
<dd><p>Creates an Array of size n containing FHIR ChargeItem objects.</p></dd>
<dt><a href="#contactPointGenerator">contactPointGenerator(n, defaults)</a> ⇒ <code>Array.&lt;R4.IContactPoint&gt;</code></dt>
<dd><p>Creates an Array of size n containing FHIR ContactPoint objects.</p></dd>
<dt><a href="#diagnosticReportGenerator">diagnosticReportGenerator(n, defaults)</a> ⇒ <code>Array.&lt;R4.IDiagnosticReport&gt;</code></dt>
<dd><p>Creates an Array of size n containing FHIR DiagnosticReport objects.</p></dd>
<dt><a href="#invoiceGenerator">invoiceGenerator(n, defaults)</a> ⇒ <code>Array.&lt;R4.IInvoice&gt;</code></dt>
<dd><p>Creates an Array of size n containing FHIR Invoice objects.</p></dd>
<dt><a href="#observationGenerator">observationGenerator(n, defaults)</a> ⇒ <code>Array.&lt;R4.IObservation&gt;</code></dt>
<dd><p>Creates an Array of size n containing FHIR Observation objects.</p></dd>
<dt><a href="#organizationGenerator">organizationGenerator(n, defaults)</a> ⇒ <code>Array.&lt;R4.IOrganization&gt;</code></dt>
<dd><p>Creates an Array of size n containing FHIR Organization objects.</p></dd>
<dt><a href="#patientGenerator">patientGenerator(n, defaults)</a> ⇒ <code>Array.&lt;R4.IPatient&gt;</code></dt>
<dd><p>Creates an Array of size n containing FHIR Patient objects.</p></dd>
<dt><a href="#planDefinitionGenerator">planDefinitionGenerator(n, defaults)</a> ⇒ <code>Array.&lt;R4.IPlanDefinition&gt;</code></dt>
<dd><p>Creates an Array of size n containing FHIR PlanDefinition objects.</p></dd>
<dt><a href="#randomEnum">randomEnum(anEnum)</a> ⇒ <code>T</code></dt>
<dd><p>Returns a random enum value.</p></dd>
</dl>

<a name="loincCodes"></a>

## loincCodes ⇒ <code>R4.ICodeableConcept</code>

<p>Returns a random LOIC code FHIR CodeableConcept</p>

**Kind**: global variable  
**Returns**: <code>R4.ICodeableConcept</code> - <ul>
<li>A LOIC code as a CodeableConcept</li>
</ul>  
<a name="accountFactory"></a>

## accountFactory ⇒ <code>R4.IAccount</code>

<p>Defines a Factory for generating FHIR Accounts.</p>

**Kind**: global constant  
**Returns**: <code>R4.IAccount</code> - <ul>
<li>a FHIR Account</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>GeneratorFnOptions.&lt;R4.IAccount, R4.IAccount&gt;</code> | <p>Options for generating the Account object.</p> |

<a name="activityDefinitionFactory"></a>

## activityDefinitionFactory ⇒ <code>R4.IActivityDefinition</code>

<p>Defines a Factory for generating FHIR ActivityDefinitions.</p>

**Kind**: global constant  
**Returns**: <code>R4.IActivityDefinition</code> - <ul>
<li>a FHIR ActivityDefinition</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>GeneratorFnOptions.&lt;R4.IActivityDefinition, R4.IActivityDefinition&gt;</code> | <p>Options for generating the ActivityDefinition object.</p> |

<a name="addressFactory"></a>

## addressFactory ⇒ <code>R4.IAddress</code>

<p>Defines a Factory for generating FHIR Addresses.</p>

**Kind**: global constant  
**Returns**: <code>R4.IAddress</code> - <ul>
<li>a FHIR Address</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>GeneratorFnOptions.&lt;R4.IAddress, R4.IAddress&gt;</code> | <p>Options for generating the Address object.</p> |

<a name="bundleFactory"></a>

## bundleFactory ⇒ <code>R4.IBundle</code>

<p>Defines a Factory for generating FHIR dBundlees.</p>

**Kind**: global constant  
**Returns**: <code>R4.IBundle</code> - <ul>
<li>a FHIR dBundle</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>GeneratorFnOptions.&lt;R4.IBundle, R4.IBundle&gt;</code> | <p>Options for generating the dBundle object.</p> |

<a name="bundleEntryFactory"></a>

## bundleEntryFactory ⇒ <code>R4.IBundle\_Entry</code>

<p>Defines a Factory for generating FHIR Bundle Entries.</p>

**Kind**: global constant  
**Returns**: <code>R4.IBundle\_Entry</code> - <ul>
<li>a FHIR Bundle Entry</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>GeneratorFnOptions.&lt;R4.IBundle\_Entry, R4.IBundle\_Entry&gt;</code> | <p>Options for generating the Bundle Entry object.</p> |

<a name="carePlanFactory"></a>

## carePlanFactory ⇒ <code>R4.ICarePlan</code>

<p>Defines a Factory for generating FHIR CarePlans.</p>

**Kind**: global constant  
**Returns**: <code>R4.ICarePlan</code> - <ul>
<li>a FHIR CarePlan</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>GeneratorFnOptions.&lt;R4.ICarePlan, R4.ICarePlan&gt;</code> | <p>Options for generating the CarePlan object.</p> |

<a name="careTeamFactory"></a>

## careTeamFactory ⇒ <code>R4.ICareTeam</code>

<p>Defines a Factory for generating FHIR CareTeams.</p>

**Kind**: global constant  
**Returns**: <code>R4.ICareTeam</code> - <ul>
<li>a FHIR CareTeam</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>GeneratorFnOptions.&lt;R4.ICareTeam, R4.ICareTeam&gt;</code> | <p>Options for generating the CareTeam object.</p> |

<a name="chargeItemFactory"></a>

## chargeItemFactory ⇒ <code>R4.IChargeItem</code>

<p>Defines a Factory for generating FHIR ChargeItems.</p>

**Kind**: global constant  
**Returns**: <code>R4.IChargeItem</code> - <ul>
<li>a FHIR ChargeItem</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>GeneratorFnOptions.&lt;R4.IChargeItem, R4.IChargeItem&gt;</code> | <p>Options for generating the ChargeItem object.</p> |

<a name="contactPointFactory"></a>

## contactPointFactory ⇒ <code>R4.IContactPoint</code>

<p>Defines a Factory for generating FHIR ContactPoints.</p>

**Kind**: global constant  
**Returns**: <code>R4.IContactPoint</code> - <ul>
<li>a FHIR ContactPoint</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>GeneratorFnOptions.&lt;R4.IContactPoint, R4.IContactPoint&gt;</code> | <p>Options for generating the ContactPoint object.</p> |

<a name="diagnosticReportFactory"></a>

## diagnosticReportFactory ⇒ <code>R4.IDiagnosticReport</code>

<p>Defines a Factory for generating FHIR DiagnosticReports.</p>

**Kind**: global constant  
**Returns**: <code>R4.IDiagnosticReport</code> - <ul>
<li>a FHIR DiagnosticReport</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>GeneratorFnOptions.&lt;R4.IDiagnosticReport, R4.IDiagnosticReport&gt;</code> | <p>Options for generating the DiagnosticReport object.</p> |

<a name="invoiceFactory"></a>

## invoiceFactory ⇒ <code>R4.IInvoice</code>

<p>Defines a Factory for generating FHIR Invoices.</p>

**Kind**: global constant  
**Returns**: <code>R4.IInvoice</code> - <ul>
<li>a FHIR Invoice</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>GeneratorFnOptions.&lt;R4.IInvoice, R4.IInvoice&gt;</code> | <p>Options for generating the Invoice object.</p> |

<a name="observationFactory"></a>

## observationFactory ⇒ <code>R4.IObservation</code>

<p>Defines a Factory for generating FHIR Observations.</p>

**Kind**: global constant  
**Returns**: <code>R4.IObservation</code> - <ul>
<li>a FHIR Observation</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>GeneratorFnOptions.&lt;R4.IObservation, R4.IObservation&gt;</code> | <p>Options for generating the Observation object.</p> |

<a name="organizationFactory"></a>

## organizationFactory ⇒ <code>R4.IOrganization</code>

<p>Defines a Factory for generating FHIR Organizations.</p>

**Kind**: global constant  
**Returns**: <code>R4.IOrganization</code> - <ul>
<li>a FHIR Organization</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>GeneratorFnOptions.&lt;R4.IOrganization, R4.IOrganization&gt;</code> | <p>Options for generating the Organization object.</p> |

<a name="patientFactory"></a>

## patientFactory ⇒ <code>R4.IPatient</code>

<p>Defines a Factory for generating FHIR Patients.</p>

**Kind**: global constant  
**Returns**: <code>R4.IPatient</code> - <ul>
<li>a FHIR Patient</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>GeneratorFnOptions.&lt;R4.IPatient, R4.IPatient&gt;</code> | <p>Options for generating the Patient object.</p> |

<a name="planDefinitionFactory"></a>

## planDefinitionFactory ⇒ <code>R4.IPlanDefinition</code>

<p>Defines a Factory for generating FHIR PlanDefinitions.</p>

**Kind**: global constant  
**Returns**: <code>R4.IPlanDefinition</code> - <ul>
<li>a FHIR PlanDefinition</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>GeneratorFnOptions.&lt;R4.IPlanDefinition, R4.IPlanDefinition&gt;</code> | <p>Options for generating the PlanDefinition object.</p> |

<a name="common"></a>

## common(factory, n, params) ⇒ <code>Array.&lt;T&gt;</code>

<p>Generic function for building a list of type T from a Factory.</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| factory | <code>Factory.&lt;T&gt;</code> | <p>The Factory.</p> |
| n | <code>number</code> | <p>Number of type T to create.</p> |
| params | <code>DeepPartial.&lt;T&gt;</code> \| <code>Array.&lt;DeepPartial.&lt;T&gt;&gt;</code> | <p>Preset parameters to override randomly generated data. If provided an array, it will ignore the 'n' param and use the length of the array.</p> |

<a name="accountGenerator"></a>

## accountGenerator(n, defaults) ⇒ <code>Array.&lt;R4.IAccount&gt;</code>

<p>Creates an Array of size n containing FHIR Account objects.</p>

**Kind**: global function  
**Returns**: <code>Array.&lt;R4.IAccount&gt;</code> - <ul>
<li>The Array of FHIR Accounts.</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | <p>The number of FHIR Accounts to generate.</p> |
| defaults | <code>DeepPartial.&lt;R4.IAccount&gt;</code> \| <code>Array.&lt;DeepPartial.&lt;R4.IAccount&gt;&gt;</code> | <p>A subset of default properties for the generated objects.</p> |

<a name="activityDefinitionGenerator"></a>

## activityDefinitionGenerator(n, defaults) ⇒ <code>Array.&lt;R4.IActivityDefinition&gt;</code>

<p>Creates an Array of size n containing FHIR ActivityDefinition objects.</p>

**Kind**: global function  
**Returns**: <code>Array.&lt;R4.IActivityDefinition&gt;</code> - <ul>
<li>The Array of FHIR ActivityDefinitions.</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | <p>The number of FHIR ActivityDefinitions to generate.</p> |
| defaults | <code>DeepPartial.&lt;R4.IActivityDefinition&gt;</code> \| <code>Array.&lt;DeepPartial.&lt;R4.IActivityDefinition&gt;&gt;</code> | <p>A subset of default properties for the generated objects.</p> |

<a name="addressGenerator"></a>

## addressGenerator(n, defaults) ⇒ <code>Array.&lt;R4.IAddress&gt;</code>

<p>Creates an Array of size n containing FHIR Address objects.</p>

**Kind**: global function  
**Returns**: <code>Array.&lt;R4.IAddress&gt;</code> - <ul>
<li>The Array of FHIR addresses.</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | <p>The number of FHIR Addresses to generate.</p> |
| defaults | <code>DeepPartial.&lt;R4.IAddress&gt;</code> \| <code>Array.&lt;DeepPartial.&lt;R4.IAddress&gt;&gt;</code> | <p>A subset of default properties for the generated objects.</p> |

<a name="bundleGenerator"></a>

## bundleGenerator(n, defaults) ⇒ <code>Array.&lt;R4.IBundle&gt;</code>

<p>Creates an Array of size n containing FHIR Bundle objects.</p>

**Kind**: global function  
**Returns**: <code>Array.&lt;R4.IBundle&gt;</code> - <ul>
<li>The Array of FHIR Bundles.</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | <p>The number of FHIR Bundles to generate.</p> |
| defaults | <code>DeepPartial.&lt;R4.IBundle&gt;</code> \| <code>Array.&lt;DeepPartial.&lt;R4.IBundle&gt;&gt;</code> | <p>A subset of default properties for the generated objects.</p> |

<a name="bundleEntryGenerator"></a>

## bundleEntryGenerator(n, defaults) ⇒ <code>Array.&lt;R4.IBundle\_Entry&gt;</code>

<p>Creates an Array of size n containing FHIR Bundle Entry objects.</p>

**Kind**: global function  
**Returns**: <code>Array.&lt;R4.IBundle\_Entry&gt;</code> - <ul>
<li>The Array of FHIR Bundle Entries.</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | <p>The number of FHIR Bundle Entries to generate.</p> |
| defaults | <code>DeepPartial.&lt;R4.IBundle\_Entry&gt;</code> \| <code>Array.&lt;DeepPartial.&lt;R4.IBundle\_Entry&gt;&gt;</code> | <p>A subset of default properties for the generated objects.</p> |

<a name="carePlanGenerator"></a>

## carePlanGenerator(n, defaults) ⇒ <code>Array.&lt;R4.ICarePlan&gt;</code>

<p>Creates an Array of size n containing FHIR DiagnosticReport objects.</p>

**Kind**: global function  
**Returns**: <code>Array.&lt;R4.ICarePlan&gt;</code> - <ul>
<li>The Array of FHIR DiagnosticReports.</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | <p>The number of FHIR DiagnosticReports to generate.</p> |
| defaults | <code>DeepPartial.&lt;R4.ICarePlan&gt;</code> \| <code>Array.&lt;DeepPartial.&lt;R4.ICarePlan&gt;&gt;</code> | <p>A subset of default properties for the generated objects.</p> |

<a name="careTeamGenerator"></a>

## careTeamGenerator(n, defaults) ⇒ <code>Array.&lt;R4.ICareTeam&gt;</code>

<p>Creates an Array of size n containing FHIR CareTeam objects.</p>

**Kind**: global function  
**Returns**: <code>Array.&lt;R4.ICareTeam&gt;</code> - <ul>
<li>The Array of FHIR CareTeams.</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | <p>The number of FHIR CareTeams to generate.</p> |
| defaults | <code>DeepPartial.&lt;R4.ICareTeam&gt;</code> \| <code>Array.&lt;DeepPartial.&lt;R4.ICareTeam&gt;&gt;</code> | <p>A subset of default properties for the generated objects.</p> |

<a name="chargeItemGenerator"></a>

## chargeItemGenerator(n, defaults) ⇒ <code>Array.&lt;R4.IChargeItem&gt;</code>

<p>Creates an Array of size n containing FHIR ChargeItem objects.</p>

**Kind**: global function  
**Returns**: <code>Array.&lt;R4.IChargeItem&gt;</code> - <ul>
<li>The Array of FHIR chargeitems.</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | <p>The number of FHIR ChargeItems to generate.</p> |
| defaults | <code>DeepPartial.&lt;R4.IChargeItem&gt;</code> \| <code>Array.&lt;DeepPartial.&lt;R4.IChargeItem&gt;&gt;</code> | <p>A subset of default properties for the generated objects.</p> |

<a name="contactPointGenerator"></a>

## contactPointGenerator(n, defaults) ⇒ <code>Array.&lt;R4.IContactPoint&gt;</code>

<p>Creates an Array of size n containing FHIR ContactPoint objects.</p>

**Kind**: global function  
**Returns**: <code>Array.&lt;R4.IContactPoint&gt;</code> - <ul>
<li>The Array of FHIR ContactPoint.</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | <p>The number of FHIR ContactPoints to generate.</p> |
| defaults | <code>DeepPartial.&lt;R4.IContactPoint&gt;</code> \| <code>Array.&lt;DeepPartial.&lt;R4.IContactPoint&gt;&gt;</code> | <p>A subset of default properties for the generated objects.</p> |

<a name="diagnosticReportGenerator"></a>

## diagnosticReportGenerator(n, defaults) ⇒ <code>Array.&lt;R4.IDiagnosticReport&gt;</code>

<p>Creates an Array of size n containing FHIR DiagnosticReport objects.</p>

**Kind**: global function  
**Returns**: <code>Array.&lt;R4.IDiagnosticReport&gt;</code> - <ul>
<li>The Array of FHIR DiagnosticReports.</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | <p>The number of FHIR DiagnosticReports to generate.</p> |
| defaults | <code>DeepPartial.&lt;R4.IDiagnosticReport&gt;</code> \| <code>Array.&lt;DeepPartial.&lt;R4.IDiagnosticReport&gt;&gt;</code> | <p>A subset of default properties for the generated objects.</p> |

<a name="invoiceGenerator"></a>

## invoiceGenerator(n, defaults) ⇒ <code>Array.&lt;R4.IInvoice&gt;</code>

<p>Creates an Array of size n containing FHIR Invoice objects.</p>

**Kind**: global function  
**Returns**: <code>Array.&lt;R4.IInvoice&gt;</code> - <ul>
<li>The Array of FHIR invoices.</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | <p>The number of FHIR Invoices to generate.</p> |
| defaults | <code>DeepPartial.&lt;R4.IInvoice&gt;</code> \| <code>Array.&lt;DeepPartial.&lt;R4.IInvoice&gt;&gt;</code> | <p>A subset of default properties for the generated objects.</p> |

<a name="observationGenerator"></a>

## observationGenerator(n, defaults) ⇒ <code>Array.&lt;R4.IObservation&gt;</code>

<p>Creates an Array of size n containing FHIR Observation objects.</p>

**Kind**: global function  
**Returns**: <code>Array.&lt;R4.IObservation&gt;</code> - <ul>
<li>The Array of FHIR Observations.</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | <p>The number of FHIR Observations to generate.</p> |
| defaults | <code>DeepPartial.&lt;R4.IObservation&gt;</code> \| <code>Array.&lt;DeepPartial.&lt;R4.IObservation&gt;&gt;</code> | <p>A subset of default properties for the generated objects.</p> |

<a name="organizationGenerator"></a>

## organizationGenerator(n, defaults) ⇒ <code>Array.&lt;R4.IOrganization&gt;</code>

<p>Creates an Array of size n containing FHIR Organization objects.</p>

**Kind**: global function  
**Returns**: <code>Array.&lt;R4.IOrganization&gt;</code> - <ul>
<li>The Array of FHIR Organizations.</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | <p>The number of FHIR Organizations to generate.</p> |
| defaults | <code>DeepPartial.&lt;R4.IOrganization&gt;</code> \| <code>Array.&lt;DeepPartial.&lt;R4.IOrganization&gt;&gt;</code> | <p>A subset of default properties for the generated objects.</p> |

<a name="patientGenerator"></a>

## patientGenerator(n, defaults) ⇒ <code>Array.&lt;R4.IPatient&gt;</code>

<p>Creates an Array of size n containing FHIR Patient objects.</p>

**Kind**: global function  
**Returns**: <code>Array.&lt;R4.IPatient&gt;</code> - <ul>
<li>The Array of FHIR Patients.</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | <p>The number of FHIR Patients to generate.</p> |
| defaults | <code>DeepPartial.&lt;R4.IPatient&gt;</code> \| <code>Array.&lt;DeepPartial.&lt;R4.IPatient&gt;&gt;</code> | <p>A subset of default properties for the generated objects.</p> |

<a name="planDefinitionGenerator"></a>

## planDefinitionGenerator(n, defaults) ⇒ <code>Array.&lt;R4.IPlanDefinition&gt;</code>

<p>Creates an Array of size n containing FHIR PlanDefinition objects.</p>

**Kind**: global function  
**Returns**: <code>Array.&lt;R4.IPlanDefinition&gt;</code> - <ul>
<li>The Array of FHIR PlanDefinitions.</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | <p>The number of FHIR PlanDefinitions to generate.</p> |
| defaults | <code>DeepPartial.&lt;R4.IPlanDefinition&gt;</code> \| <code>Array.&lt;DeepPartial.&lt;R4.IPlanDefinition&gt;&gt;</code> | <p>A subset of default properties for the generated objects.</p> |

<a name="randomEnum"></a>

## randomEnum(anEnum) ⇒ <code>T</code>

<p>Returns a random enum value.</p>

**Kind**: global function  
**Returns**: <code>T</code> - <ul>
<li>A randomly selected enum</li>
</ul>  

| Param | Description |
| --- | --- |
| anEnum | <p>An enum to return a random value from.</p> |
