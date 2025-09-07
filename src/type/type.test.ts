import {$Model, $NewType, is, isType, Model} from '#lib';
import {expect, test} from 'vitest';

test('type', () => {
  const $A = () => $NewType('SomeTestPackage', 'A');
  const $B = () => $NewType('SomeTestPackage', 'B', $A());

  const model: Model = {
    $type: $B(),
  };

  expect(isType($A(), $A())).toBe(true);
  expect(isType($A(), $B())).toBe(false);
  expect(isType($B(), $A())).toBe(true);
  expect(is(model, $B())).toBe(true);
  expect(is(model, $A())).toBe(true);
  expect(is(model, $Model())).toBe(true);
});
