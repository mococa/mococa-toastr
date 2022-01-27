export enum ToastrTypes {
  success,
  error,
  warning,
}

export interface ToastrOptions {
  delay: number;
  onClose(): void;
}

export interface ToastrCreation {
  createToastr: (
    type: keyof typeof ToastrTypes,
    title: string,
    message: string,
    options?: ToastrOptions
  ) => void;
}

export interface IToastr {
  id: string;
  delay: number;
  title: string;
  message: string;
  type: keyof typeof ToastrTypes;
  onClose(id: string): void;
}
