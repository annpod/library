export namespace Select {
  export interface IExtendedSelectOption {
    keyValue: string;
    value: any;
    options: ISelectOption[];
    placeholder: string;
    isDisabled?: boolean;
    optionValue?: string;
  }
}
