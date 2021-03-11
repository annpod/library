export interface IModalButton {
  label: string;
  onClick: () => void;
}

export interface IModalHeader {
  type?: string;
  headerTitle: string;
  theme?: any;
  confirmButton: IModalButton | null;
  cancelButton: IModalButton;
}