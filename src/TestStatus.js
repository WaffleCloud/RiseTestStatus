import React, { useEffect, useState } from "react"

const SHEET_ID = "1D96ZHUqFqCg-6XcdNft-73J6cYxmQ262GNuVDKazJcU"
const API_KEY = "AIzaSyByXNOJuXAtSVVL-23JsiCjwj7JOyWgEBI"
const RANGE = "Sheet1!A1:Z100" // Change as needed

function TestStatus({searchTerm, setSearchTerm, rows, setRows, result, setResult}) {

  useEffect(() => {
    const fetchSheet = async () => {
      const res = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`
      )
      const data = await res.json()
      const values = data.values || []
      setRows(values)
    }

    fetchSheet()
  }, [])


  return (
    <div className="">
      <h2 className="">Testing Status</h2>
        <table className="">
         <div className="result-box">{result}</div>
        </table> 
    
    </div>
  );
}

export default TestStatus;
