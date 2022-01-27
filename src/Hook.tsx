import { useContext } from 'react';
import { defaultOptions } from '.';
import { ToastrContext } from './Context';
import { ToastrOptions } from './interfaces';

export const useToastr = () => {
  const toastrManager = useContext(ToastrContext);

  return {
    success(
      title: string,
      message: string = '',
      options: ToastrOptions = defaultOptions
    ) {
      console.log('success toastr');
      toastrManager?.createToastr('success', title, message, options);
    },
    error(
      title: string,
      message: string = '',
      options: ToastrOptions = defaultOptions
    ) {
      console.log('error toastr');
      toastrManager?.createToastr('error', title, message, options);
    },
    warning(
      title: string,
      message: string = '',
      options: ToastrOptions = defaultOptions
    ) {
      console.log('warning toastr');
      toastrManager?.createToastr('warning', title, message, options);
    },
  };
};
