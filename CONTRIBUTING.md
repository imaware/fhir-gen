# Introduction

## Thanks for considering a contribution to fhir-gen

>We at imaware want to help build out tooling for healthcare technology engineers and developers everywhere. We can't do it alone though! We welcome contributions from the community

## Tell them why they should read your guidelines

>This short guide explains how to effectively contribute new features and bugfixes to the fhir-gen library.

## Types of contributions

We are open to all types of contributions to our fhir-gen library.

> * Features (such as new FHIR resource factories and generators)
> * Bugfixes
> * Improvements ()

## Avoid

> * Breaking API Changes
> * Going beyond the scope of this project's intent

## Ground Rules

### FHIR Conformance

This library should always be conformant to the applicable [HL7 FHIR standards](http://hl7.org/fhir/).

> Responsibilities
>
> * Always

## Getting started

### Library intent

Simply put, this library's purpose is to serve as a factory for test FHIR data, to be used for testing purposes. It is not recommended that you use this in production systems. All contributions should be made with this in mind.

### Dev setup

This project is built using Nodejs 14.x.

We recommend you use `husky` to enable hooks. Simple run `yarn/npm husky install` in this repo (after installing dependencies) to enable pre-commit and commit-msg hooks.

### Adding a feature

If you would like to add a new resource generator, you can do so by addiing a few new files:
>
> * `src/factory/fhir/<r4|stu3>/<resource>.ts` - The Factory which generates a random FHIR resource.
> * `src/generator/fhir/<r4|stu3>/<resource>.ts` - The generator function, which uses the above Factory to generate a single (or an array) of FHIR resources, with optional override values.
> * `src/__tests__/<resource>Factory.test.ts` - Tests for the Factory.
> * `src/__tests__/<resource>Factory.test.ts` - Tests for the generator.

### How to report a bug

#### Security vulnerabilities

> If you find a security vulnerability, do NOT open an issue. Email security@imaware.health instead.

#### Submitting a bug report

Simply open an issue and select 'Bug Report'. Fill in any pertinent or helpful information, as well as how to replicate the issue. Code snippets are encouraged.

## Code review process

### Commit format

This repo follows the commitlint-conventional format (see commitlint.config.js). PRs with commits that do not conform to these conventions will fail automated checks.

### Automated checks

Automated checks run on all PRs. These checks must be passing before a PR will be reviewed. You can run these checks locally by running `npm run lint:fix` OR `yarn lint:fix`.

We review PRs regularly. If yours is passing checks and the change makes sense, we will approve and merge it.
