import { useContext } from 'react';
import { defaultOptions } from '.';
import { ToastrContext } from './Context';
import { ToastrOptions } from './interfaces';

export const useToastr = () => {
  const toastrManager = useContext(ToastrContext);

  return {
    success(title: string, message?: string, options?: ToastrOptions) {
      toastrManager?.createToastr('success', title, message || '', options);
    },
    error(title: string, message?: string, options?: ToastrOptions) {
      toastrManager?.createToastr('error', title, message || '', options);
    },
    warning(title: string, message?: string, options?: ToastrOptions) {
      toastrManager?.createToastr('warning', title, message || '', options);
    },
  };
};
