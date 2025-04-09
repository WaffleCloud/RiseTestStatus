import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import TestStatus from "./TestStatus"
import SearchBox from './SearchBox';


function App() {
  const [searchingBox, setSearchBox] = useState(true)
  const [testingStatus, setTestStatus] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [text, setText] = useState("Search")
  const [rows, setRows] = useState([])
  const [result, setResult] = useState([])


 

  // const searchClickHandler = () => {
     
  // }


  // const handleSearch = () => {
  
  // };

  const multipleHandlers = () => {
    // searchClickHandler()
    // handleSearch()
    
    if(searchingBox){
      setTestStatus(true)
      setSearchBox(false)
  }else if(testingStatus){
      setSearchBox(true)
      setTestStatus(false)
  }
  text === "Search" ? setText("Return") : setText("Search")
    if (rows.length === 0) return;

    const headers = rows[0];
    const nameIndex = headers.indexOf("Student Code");
    const targetIndex = headers.indexOf("Testing Status"); // The column you want to retrieve from

    const match = rows.find((row, i) => i !== 0 && row[nameIndex] === searchTerm);

    if (match) {
      setResult(match[targetIndex]);
    } else {
      setResult("No match found.");
    }

   

  }

  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="box">
          {testingStatus && <TestStatus 
          searchTerm={searchTerm} setSearchTerm={setSearchTerm}
          rows={rows} setRows={setRows}
          result={result} setResult={setResult}
          />}
          {searchingBox && <SearchBox searchingBox={searchingBox} setSearchBox={setSearchBox} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>}
          
          <button className="search-button" onClick={multipleHandlers}>{text}</button>
        </div>



    </div>
  );
}

export default App;
