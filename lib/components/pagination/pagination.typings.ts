export interface IPaginationProps {
  current: number;
  setCurrentPage: (props: any) => void;
  defaultPageSize: number;
  total: number;
}
