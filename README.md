# rtt

Runtime Typescript Types

## Overview

This package provides a way to store type information in objects and check types at runtime in TypeScript. It is useful for scenarios where you need runtime type introspection, such as serialization, validation, or building type-safe APIs.

## Features

- Attach type metadata to objects.
- Check if an object is of a specific type at runtime using the `is` function.
- Support for type hierarchies and generics.

## Installation

```sh
npm install rtt
```

## Usage

```typescript
import {$NewType, is, Model} from 'rtt';

// Define types
const $A = () => $NewType('MyPackage', 'A');
const $B = () => $NewType('MyPackage', 'B', $A());

// Create a model instance
const model: Model = {
  $type: $B(),
};

// Runtime type checks
is(model, $B()); // true
is(model, $A()); // true (because B extends A)
```

## API

### `$NewType(packageName: string, typeName: string, parent?, generics?)`

Creates a new runtime type.

### `is(model: any, type: $Type): boolean`

Checks if the given model is of the specified type (or its parent).

### `Model`

Interface for objects with runtime type information.

---
