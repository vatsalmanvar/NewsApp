import React, {useState} from "react";
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

const App = () => {
  const pageSize = 30;
  //const apikey = "blah blah blah"
  const apikey = "af1fe69be280497fa8652c21db706871";

  const [progress, setProgress] = useState(0)

    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={progress}
          />
            <Routes>
            <Route exact path='/' element={<News setProgress={setProgress} key='general' pageSize={pageSize} country='us' category='general' apikey={apikey} />}></Route>
            <Route exact path='/business' element={<News setProgress={setProgress} key='business' pageSize={pageSize} country='us' category='business' apikey={apikey} />}></Route>
            <Route exact path='/entertainment' element={<News setProgress={setProgress} key='entertainment' pageSize={pageSize} country='us' category='entertainment' apikey={apikey} />}></Route>
            <Route exact path='/health' element={<News setProgress={setProgress} key='health' pageSize={pageSize} country='us' category='health' apikey={apikey} />}></Route>
            <Route exact path='/science' element={<News setProgress={setProgress} key='science' pageSize={pageSize} country='us' category='science' apikey={apikey} />}></Route>
            <Route exact path='/sports' element={<News setProgress={setProgress} key='sports' pageSize={pageSize} country='us' category='sports' apikey={apikey} />}></Route>
            <Route exact path='/technology' element={<News setProgress={setProgress} key='technology' pageSize={pageSize} country='us' category='technology' apikey={apikey} />}></Route>
            </Routes>
        </Router>
      </div>
    )
}

export default App;

// Your API key is: b816db51751b41119fc241c0fc0d5546   vatsal manvar
// Your API key is: 4e773c90d95447deb6ff9bbafde68659   19bce120
// Your API key is: af1fe69be280497fa8652c21db706871   anjanamanvar

