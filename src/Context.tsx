import React, { createContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.index.css';

import {
  IToastr,
  ToastrCreation,
  ToastrOptions,
  ToastrTypes,
} from './interfaces';

import { defaultOptions } from '.';
import { Toastr } from './Toastr';

export const ToastrContext = createContext<ToastrCreation | null>(null);

export const ToastrProvider: React.FC = ({ children }) => {
  const [toastrs, setToastrs] = useState<IToastr[]>([]);

  useEffect(() => {
    //setTimeout(() => {
    const root = document.createElement('div');
    root.id = 'toastr-root';
    document.body.appendChild(root);
    //}, 200);
  }, []);

  useEffect(() => {
    const toastrRoot = document.getElementById('toastr-root');
    if (!toastrRoot) return;

    ReactDOM.render(
      <div className="toastr-container">
        {toastrs?.map((toastr) => (
          <Toastr
            id={toastr.id}
            key={toastr.id}
            type={toastr.type}
            title={toastr.title}
            message={toastr.message}
            delay={toastr.delay || 5000}
            onClose={(id) => {
              setToastrs((prevToastrs) =>
                prevToastrs.filter((el) => el.id !== id)
              );
            }}
          />
        ))}
      </div>,
      toastrRoot
    );
  }, [toastrs]);

  const genID = () => '_' + Math.random().toString(36).substr(2, 9);

  const createToastr = (
    type: keyof typeof ToastrTypes,
    title: string,
    message: string,
    options: ToastrOptions = defaultOptions
  ) => {
    setToastrs((prevToastrs) => [
      ...prevToastrs,
      { ...options, type, title, message, id: genID() },
    ]);
  };

  return (
    <ToastrContext.Provider value={{ createToastr }}>
      {children}
    </ToastrContext.Provider>
  );
};
