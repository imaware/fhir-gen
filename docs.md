## Members

<dl>
<dt><a href="#loincCodes">loincCodes</a> ⇒ <code>R4.ICodeableConcept</code></dt>
<dd><p>Returns a random LOIC code FHIR CodeableConcept</p></dd>
</dl>

## Constants

<dl>
<dt><a href="#addressFactory">addressFactory</a> ⇒ <code>R4.IAddress</code></dt>
<dd><p>Defines a Factory for generating FHIR Addresses.</p></dd>
<dt><a href="#observationFactory">observationFactory</a> ⇒ <code>R4.IObservation</code></dt>
<dd><p>Defines a Factory for generating FHIR Observations.</p></dd>
<dt><a href="#patientFactory">patientFactory</a> ⇒ <code>R4.IPatient</code></dt>
<dd><p>Defines a Factory for generating FHIR Patients.</p></dd>
</dl>

## Functions

<dl>
<dt><a href="#common">common(factory, n, params)</a> ⇒ <code>Array.&lt;T&gt;</code></dt>
<dd><p>Generic function for building a list of type T from a Factory.</p></dd>
<dt><a href="#addressGenerator">addressGenerator(n, defaults)</a> ⇒ <code>Array.&lt;R4.IAddress&gt;</code></dt>
<dd><p>Creates an Array of size n containing FHIR Address objects.</p></dd>
<dt><a href="#observationGenerator">observationGenerator(n, defaults)</a> ⇒ <code>Array.&lt;R4.IObservation&gt;</code></dt>
<dd><p>Creates an Array of size n containing FHIR Observation objects.</p></dd>
<dt><a href="#patientGenerator">patientGenerator(n, defaults)</a> ⇒ <code>Array.&lt;R4.IPatient&gt;</code></dt>
<dd><p>Creates an Array of size n containing FHIR Patient objects.</p></dd>
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

<a name="common"></a>

## common(factory, n, params) ⇒ <code>Array.&lt;T&gt;</code>
<p>Generic function for building a list of type T from a Factory.</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| factory | <code>Factory.&lt;T&gt;</code> | <p>The Factory.</p> |
| n | <code>number</code> | <p>Number of type T to create.</p> |
| params |  |  |

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
| defaults | <code>DeepPartial.&lt;R4.IAddress&gt;</code> | <p>A subset of default properties for the generated objects.</p> |

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
| defaults | <code>DeepPartial.&lt;R4.IObservation&gt;</code> | <p>A subset of default properties for the generated objects.</p> |

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
| defaults | <code>DeepPartial.&lt;R4.IPatient&gt;</code> | <p>A subset of default properties for the generated objects.</p> |

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

