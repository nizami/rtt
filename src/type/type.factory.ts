import {$Type, Model} from '#lib';

export function $NewType<T extends Model>(
  packageName: string,
  typeName: string,
  parent?: $Type | null | undefined,
  generics?: $Type[] | null | undefined,
): $Type<T> {
  return {
    packageName,
    typeName,
    parent,
    generics,
  };
}
