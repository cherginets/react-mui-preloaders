# react-mui-preloaders

## Install

```bash
npm install --save react-mui-preloaders
```

## Usage

```tsx
import React, { Component,useCallback } from 'react'

import {useLoader, Preloader} from 'react-mui-preloaders'
import 'react-mui-preloaders/dist/index.css'

const App = () => {
  const {start, stop, loading, setLoading, Preloader, render} = useLoader(false);

  const send = useCallback(() => {
    start(); // or setLoading(true)
    (/* or your some promise*/new Promise((resolve) => setTimeout(resolve, 500)))
        .then(response => response/*your code*/)
        .catch(response => response/*your code*/)
        .finally(stop) // or setLoading(false)
  }, [start, stop])

  return <div>
    <button onClick={send} disabled={loading}>send something</button>
    {render(() => 'data 1 that cannot be seen during download, when loading === true Preloader will be displayed ')}
    {loading
      ? <Preloader place={'window'} size={100} />
      : 'data 2 that cannot be seen during download, when loading === true Preloader will be displayed '}
  </div>;
}
```

## License

MIT © [cherginets](https://github.com/cherginets)
