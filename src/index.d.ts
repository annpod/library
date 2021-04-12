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
export { IHashMap, ISelectOption, IIconDescription };
