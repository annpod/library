
export = Lib;

declare const Lib: Lib;

declare namespace Lib {
  interface IHashMap<T> {
    [key: string]: T;
  }

  interface ISelectOption {
    [key: string]: string;
    value: string;
    label: string;
  }

  interface IIconDescription {
    key: string;
    url: string;
  }
}
