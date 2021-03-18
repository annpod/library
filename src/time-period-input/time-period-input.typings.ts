export interface ITimePeriod {
  amount: number;
  units: string;
}

export interface ITimePeriodUnit {
  key: string;
  name: string;
}

export interface ITimePeriodData {
  unitList: ITimePeriodUnit[];
  value: ITimePeriod;
}
