import { IDictionaryOption, ISelectOption, IHashMap } from 'typings/etc';

export const formatSelectOptions = (
  list: IDictionaryOption[],
  key: string = 'key',
  extraField: string = ''
): ISelectOption[] => {
  return list.map((element: IHashMap<any>) => {
    const option: ISelectOption = {
      value: element[key],
      label: element.name,
    };
    if (extraField) {
      option[extraField] = element[extraField];
    }
    return option;
  });
};

export function findSelectOption(
  value: string,
  optionList: ISelectOption[]
): ISelectOption | null {
  const foundOption = optionList
    ? optionList.find((option) => option.value === value)
    : null;
  return foundOption ? foundOption : null;
}

export function findSelectOptions(
  value: string[],
  optionList: ISelectOption[]
): ISelectOption[] {
  return optionList
    ? optionList.filter((option) => value.includes(option.value))
    : [];
}

export const filterValues = (
  values: string | string[],
  options: ISelectOption[]
) => {
  if (Array.isArray(values)) {
    const optionValues = options.map((item: any) => item.value);
    return values.filter((item: string) => optionValues.includes(item));
  }
  return '';
};
