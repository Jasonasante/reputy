import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import MainSection from './components/mainSection/MainSection';
import Thanks from './components/thanks/Thanks';
function App() {
  const [applicant, setApplicant]=useState("")
  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((res) => res.json())
      .then((data) => console.log('running') );
  }, []);
  return (
    <div className="App">
      <Navbar/>
      <MainSection setApplicant={setApplicant}/>
      {applicant &&
      
      <Thanks applicant={applicant}/>
      }
    </div>
  );
}

export default App;
