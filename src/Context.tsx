import React, { createContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.index.css';

import {
  IToastr,
  ToastrCreation,
  ToastrOptions,
  ToastrTypes,
  ProviderInterface,
} from './interfaces';

import { defaultOptions } from '.';
import { Toastr } from './Toastr';
import { genID } from './helpers';

export const ToastrContext = createContext<ToastrCreation | null>(null);

export const ToastrProvider: React.FC<ProviderInterface> = ({
  timeout,
  children,
}) => {
  const [toastrs, setToastrs] = useState<IToastr[]>([]);

  useEffect(() => {
    const toastrRoot = document.getElementById('toastr-root');

    if (!toastrRoot) {
      const root = document.createElement('div');
      root.id = 'toastr-root';
      document.body.append(root);
      return;
    }

    ReactDOM.render(
      <div className="toastr-container">
        {toastrs?.map((toastr) => (
          <Toastr
            id={toastr.id}
            key={toastr.id}
            type={toastr.type}
            title={toastr.title}
            message={toastr.message}
            timeout={toastr.timeout || timeout || 5000}
            onClose={(id) => {
              setToastrs((prevToastrs) =>
                prevToastrs.filter((el) => el.id !== id)
              );
              if (toastr.options?.onClose) return toastr.options?.onClose();
            }}
          />
        ))}
      </div>,
      toastrRoot
    );
  }, [toastrs]);

  const createToastr = (
    type: keyof typeof ToastrTypes,
    title: string,
    message: string,
    options: ToastrOptions = defaultOptions(timeout)
  ) => {
    setToastrs((prevToastrs) => [
      ...prevToastrs,
      {
        onClose() {},
        ...options,
        type,
        title,
        message,
        id: genID(),
      },
    ]);
  };

  return (
    <ToastrContext.Provider value={{ createToastr }}>
      {children}
    </ToastrContext.Provider>
  );
};
