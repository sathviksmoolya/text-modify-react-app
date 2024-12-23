import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert"
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // whetyher darkmode is enabled or not
  const [alert, setAlert] = useState(null)


  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }



  const toggleMode=()=>{
    if(mode ==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#05427f'
      showAlert("Dark mode enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("light mode enabled","success")
    }
  }
  return (
    // <div classNameName="blank">lovely</div>

    <>
    <Router>
      <Navbar title = "Textutils" aboutt="About us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/"
          element={<Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}/>
      </Routes>
      </div>
      </Router>

    
    </>
  );
}

export default App;
