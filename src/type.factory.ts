import {$Model, $Type, Model} from '#lib';

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

    toString(): string {
      return `${this.packageName}.${this.typeName}`;
    },

    nameEquals(other: $Type): boolean {
      return this.typeName === other.typeName && this.packageName == other.packageName;
    },

    is(other: $Type): boolean {
      if (this.parent?.is(other) || other.nameEquals($Model())) {
        return true;
      }

      if (other.generics && other.generics?.length > 0) {
        if (this.generics && this.generics.length === other.generics.length) {
          // todo Covariance and contravariance ???
          return this.generics.every((x, i) => x.is(other.generics![i]));
        }

        return false;
      }

      return this.nameEquals(other);
    },
  };
}
