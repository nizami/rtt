import {$NewType, $Type} from '#lib';

export interface Model {
  $type: $Type;
}

export const $Model = () => $NewType<Model>('RuntimeType', 'Model');
