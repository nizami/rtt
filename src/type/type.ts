export interface $Type<T = unknown> {
  packageName: string;
  typeName: string;
  type?: T;
  parent?: $Type | null | undefined;
  generics?: $Type[] | null | undefined;
}
