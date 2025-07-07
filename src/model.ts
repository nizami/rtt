import {$NewType, $Type} from '#lib';

export const $type = Symbol('type');

export interface Model {
  [$type]: $Type;
}

export const $Model = () => $NewType<Model>('RuntimeType', 'Model');
