import {describe, expect, test} from 'vitest';
import {$Type} from '../type/type';
import {is} from './is';

describe('is', () => {
  test('should return true when model matches type exactly', () => {
    const type: $Type = {
      typeName: 'Person',
      packageName: 'test',
    };
    const model = {
      $type: {
        typeName: 'Person',
        packageName: 'test',
      },
    };
    expect(is(model, type)).toBe(true);
  });

  test('should return false when model has different type', () => {
    const type: $Type = {
      typeName: 'Person',
      packageName: 'test',
    };
    const model = {
      $type: {
        typeName: 'Car',
        packageName: 'test',
      },
    };
    expect(is(model, type)).toBe(false);
  });

  test('should return true when model type inherits from parent type', () => {
    const parentType: $Type = {
      typeName: 'Animal',
      packageName: 'test',
    };
    const model = {
      $type: {
        typeName: 'Dog',
        packageName: 'test',
        parent: {
          typeName: 'Animal',
          packageName: 'test',
        },
      },
    };
    expect(is(model, parentType)).toBe(true);
  });

  test('should handle generic types correctly', () => {
    const type: $Type = {
      typeName: 'List',
      packageName: 'test',
      generics: [
        {
          typeName: 'String',
          packageName: 'test',
        },
      ],
    };
    const model = {
      $type: {
        typeName: 'List',
        packageName: 'test',
        generics: [
          {
            typeName: 'String',
            packageName: 'test',
          },
        ],
      },
    };
    expect(is(model, type)).toBe(true);
  });

  test('should return false when generic types do not match', () => {
    const type: $Type = {
      typeName: 'List',
      packageName: 'test',
      generics: [
        {
          typeName: 'String',
          packageName: 'test',
        },
      ],
    };
    const model = {
      $type: {
        typeName: 'List',
        packageName: 'test',
        generics: [
          {
            typeName: 'Number',
            packageName: 'test',
          },
        ],
      },
    };
    expect(is(model, type)).toBe(false);
  });

  test('should return false when model has no $type property', () => {
    const type: $Type = {
      typeName: 'Person',
      packageName: 'test',
    };
    const model = {
      name: 'John',
    };
    expect(is(model, type)).toBe(false);
  });
});
