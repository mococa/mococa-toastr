import { ToastrOptions } from './interfaces';

export * from './Hook';
export * from './Context';
export * from './Toastr';
export * from './styles';
export * from './interfaces';

export const defaultOptions = (timeout?: number): ToastrOptions => ({
  timeout: timeout || 5000,
  onClose() {},
});
