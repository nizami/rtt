import {$Type} from '#lib';

export function is<T extends $Type>(model: any, type: T): model is Exclude<T['type'], undefined> {
  return (model?.$type as $Type)?.is(type) ?? false;
}
