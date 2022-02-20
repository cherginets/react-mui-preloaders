import React, {useEffect, useState} from 'react'

import { useLoader } from 'react-mui-preloaders'
import 'react-mui-preloaders/dist/index.css'

const App = () => {
  const {start, stop, loading, setLoading, Preloader} = useLoader(true);
  const [type, setType] = useState<string>('as_is');

  useEffect(() => {
    if(type === 'window') {
      setTimeout(() => setType('block'), 500)
    }
  }, [type])

  return <div className={'container'}>
    <h1>React Mui Preloaders</h1>

    <div style={{display: 'flex'}}>
      <div style={{marginRight: 20}}>
        <h2>Preloader Position</h2>
        <div className={'radio'} onChange={(e: any) => setType(e.target.value)}>
          <label><input type="radio" value="as_is" name="type" checked={type === "as_is"}/>as_is</label>
          <label><input type="radio" value="block" name="type" checked={type === "block"}/>block</label>
          <label><input type="radio" value="window" name="type" checked={type === "window"}/>window</label>
        </div>
      </div>
      <div>
        <h2>useLoader Hook actions</h2>
        <div style={{display: 'flex', alignItems: "center"}}>
          <button onClick={start} style={{marginRight: 10}}>start</button>
          <button onClick={stop} style={{marginRight: 10}}>stop</button>
          <div>
            <h3>setLoading</h3>
            <div className={'radio'} onChange={(e: any) => setLoading(e.target.value === 'true')}>
              <label><input type="radio" value={'true'} name="loading" checked={loading}/>true</label>
              <label><input type="radio" value={'false'} name="loading" checked={!loading}/>false</label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className={'some-container'}>
      <p>sometext</p>
      <Preloader type={type} />
    </div>
  </div>
}

export default App
