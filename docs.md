## Constants

<dl>
<dt><a href="#addressFactory">addressFactory</a> ⇒ <code>R4.IAddress</code></dt>
<dd><p>Defines a Factory for generating FHIR Addresses.</p></dd>
<dt><a href="#patientFactory">patientFactory</a> ⇒ <code>R4.IPatient</code></dt>
<dd><p>Defines a Factory for generating FHIR Patients.</p></dd>
</dl>

## Functions

<dl>
<dt><a href="#common">common(factory, n)</a> ⇒ <code>Array.&lt;T&gt;</code></dt>
<dd><p>Generic function for building a list of type T from a Factory.</p></dd>
<dt><a href="#addressGenerator">addressGenerator(n)</a> ⇒ <code>Array.&lt;R4.IAddress&gt;</code></dt>
<dd><p>Creates an Array of size n containing FHIR Address objects.</p></dd>
<dt><a href="#patientGenerator">patientGenerator(n)</a> ⇒ <code>Array.&lt;R4.IPatient&gt;</code></dt>
<dd><p>Creates an Array of size n containing FHIR Patient objects.</p></dd>
</dl>

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

## common(factory, n) ⇒ <code>Array.&lt;T&gt;</code>
<p>Generic function for building a list of type T from a Factory.</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| factory | <code>Factory.&lt;T&gt;</code> | <p>The Factory.</p> |
| n | <code>number</code> | <p>Number of type T to create.</p> |

<a name="addressGenerator"></a>

## addressGenerator(n) ⇒ <code>Array.&lt;R4.IAddress&gt;</code>
<p>Creates an Array of size n containing FHIR Address objects.</p>

**Kind**: global function  
**Returns**: <code>Array.&lt;R4.IAddress&gt;</code> - <ul>
<li>The Array of FHIR addresses.</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | <p>The number of FHIR Addresses to generate.</p> |

<a name="patientGenerator"></a>

## patientGenerator(n) ⇒ <code>Array.&lt;R4.IPatient&gt;</code>
<p>Creates an Array of size n containing FHIR Patient objects.</p>

**Kind**: global function  
**Returns**: <code>Array.&lt;R4.IPatient&gt;</code> - <ul>
<li>The Array of FHIR Patients.</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | <p>The number of FHIR Patients to generate.</p> |

