import {$Model, $Type} from '#lib';

export function is<T extends $Type>(model: any, type: T): model is Exclude<T['type'], undefined> {
  return '$type' in model && isType(model?.$type, type);
}

export function isType(a: $Type, b: $Type): boolean {
  if ( nameEquals(b, $Model()) || (a.parent && isType(a.parent, b))) {
    return true;
  }

  if (b.generics && b.generics.length > 0) {
    if (a.generics && a.generics.length === b.generics.length) {
      // todo Covariance and Contravariance ???
      return a.generics.every((x, i) => isType(x, b.generics![i]));
    }

    return false;
  }

  return nameEquals(a, b);
}

function nameEquals(a: $Type, b: $Type): boolean {
  return a.typeName === b.typeName && a.packageName == b.packageName;
}
