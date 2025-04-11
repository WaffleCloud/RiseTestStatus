import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'



const WB_ID = "1D96ZHUqFqCg-6XcdNft-73J6cYxmQ262GNuVDKazJcU"
const API_KEY = "AIzaSyByXNOJuXAtSVVL-23JsiCjwj7JOyWgEBI"
const RANGE = "Today!A1:Z100" // Change as needed



function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [rows, setRows] = useState([])
  const [result, setResult] = useState([])
  const [dailyMessage, setDailyMessage] = useState("Enter the student's code to view testing status")

    useEffect(() => {

      //fetch spread sheet
      const fetchSheet = async () => {
        const res = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${WB_ID}/values/${RANGE}?key=${API_KEY}`
        )
        const data = await res.json()
        const values = data.values || []
        setRows(values)
        console.log("Fetched rows:", values);

      // 💬 Pull daily message
    if (values.length > 1) {
      const headers = values[0];
      const messageIndex = headers.indexOf("Daily Message"); // Change this to match your sheet

      if (messageIndex !== -1) {
        const firstDataRow = values[1]; // Adjust which row has the message
        setDailyMessage(firstDataRow[messageIndex]);
  
      }
    }
  } 
  fetchSheet()
}, [])

  



  const searchClickHandler = () => {
    if (rows.length === 0) return;

    const headers = rows[0];
    const nameIndex = headers.indexOf("LASID");
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
          <div className="search-contents">
            {dailyMessage}
            <br></br>
            <br></br>
            <input 
            type="text" 
            placeholder="Search..."
            className=""
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} 
            />
            <br></br>
            <br></br>
          </div>
          <button className="search-button" onClick={searchClickHandler}>Search</button>
          <br></br>
          <br></br>

          <div className="status-box">
            <h2 className="">Testing Status:</h2>
            
            <div className="result-box">
            {result ? (
              <span>{result}</span>
            ) : (
              <span style={{ color: "#aaa" }}>No result yet</span>
            )}
            </div>
          </div>
      </div>
      
    </div>
    
  );
}

export default App;
