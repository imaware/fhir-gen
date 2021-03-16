# fhir-gen

Node/Typescript module for generating random test FHIR data.

## Purpose

This library provides a set of factory functions for generating test FHIR data. Its purpose is to allow for easy on-the-fly generation of FHIR resources for writing unit tests. The factory functions use the [fishery](https://www.npmjs.com/package/fishery) module for factory generation.

### Required fields

Due to how this module uses DeepPartial\<T> objects to allow for overriding resource properties during generation, the factory functions _do not check_ for required FHIR properties. FHIR resources returned from these factory
functions are not guaranteed to be

### References

Randomly generated resources will not pass back any References in any properties. Due to the relational nature of these fields, it would not make sense to randomly generate a reference to a resource that doesn't exist.

## FHIR Specifications Implemented

- [ ] STU3
- [x] R4 (Partial)

## API Documentation

Auto-generated docs can found in `./docs.md`.

## Contributing

Read the guide for contributing in CONTRIBUTING.md.
