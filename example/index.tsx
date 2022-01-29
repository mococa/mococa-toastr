import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ToastrProvider, useToastr } from '../src';

const App = () => {
  return (
    <ToastrProvider timeout={2500}>
      <div>
        <Component />
      </div>
    </ToastrProvider>
  );
};
const Component = () => {
  const toastr = useToastr();
  return (
    <div>
      <button
        onClick={() =>
          toastr.success('Sweet!', 'here is a success message', {
            delay: 5000,
          })
        }
      >
        click me
      </button>
      <button onClick={() => toastr.error('Oops!', 'something went wrong')}>
        click me
      </button>
      <button
        onClick={() =>
          toastr.warning(
            'Alert!',
            "be sure you're doing what you think you're doing",
            { delay: 30000 }
          )
        }
      >
        click me
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
