import { Story } from '@storybook/api';
import { Meta } from '@storybook/react';
import { IToastr, Toastr, ToastrProvider, useToastr } from '../src';

export default {
  title: 'Toastr',
  component: Toastr,
} as Meta;

export const Success = () => (
  <Toastr
    id="_sdf987fds"
    delay={99999999999}
    title="Success"
    message="Success message"
    type="success"
    onClose={() => {
      alert('onClose fired');
    }}
  />
);
export const Error = () => (
  <Toastr
    id="_4543654fsdf"
    delay={99999999999}
    title="Error"
    message="Success message"
    type="error"
    onClose={() => {
      alert('onClose fired');
    }}
  />
);
export const Warning = () => (
  <Toastr
    id="_123sdas1d"
    delay={999999999999}
    title="Warning"
    message="Warning message"
    type="warning"
    onClose={() => {
      alert('onClose fired');
    }}
  />
);
const Component = () => {
  const toastr = useToastr();
  return (
    <>
      <button
        onClick={() => {
          toastr.success('test', 'hello');
        }}
      >
        Success toastr
      </button>
      <br /> <br />
      <button
        onClick={() => {
          toastr.error('test', 'hello');
        }}
      >
        Error toastr
      </button>
      <br /> <br />
      <button
        onClick={() => {
          toastr.warning('test');
        }}
      >
        Warning toastr
      </button>
    </>
  );
};
export const Hook = () => (
  <ToastrProvider>
    <Component />
  </ToastrProvider>
);
