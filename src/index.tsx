import { ToastrOptions } from './interfaces';

export * from './Hook';
export * from './Context';
export * from './Toastr';
export * from './styles';
export * from './interfaces';

export const defaultOptions = (delay?: number): ToastrOptions => ({
  delay: delay || 5000,
  onClose() {},
});
