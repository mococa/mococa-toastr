# mococa-toastr

### Installation

```
npm install mococa-toastr
```

### Usage

To use it, you need to wrap your application with `ToastrProvider`. You can also pass as parameter to this provider the default timeout for the toastrs to disappear

```js
//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ToastrProvider } from 'mococa-toastr';

ReactDOM.render(
  <React.StrictMode>
    <ToastrProvider>
      <App />
    </ToastrProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
```

Then, to use it in your component:

```js
import { useToastr } from 'mococa-toastr';

function App() {
  const toastr = useToastr();
  const optionals = { timeout: 1234 }


  const openToastr = () => {
    toastr.success('Success', 'success message here', optionals);
  };

  return (
    <div className="App">
      <button onClick={openToastr}>Click me</button>
    </div>
  );
}
```

Simple as that