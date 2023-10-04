import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import MainSection from './components/mainSection/MainSection';
import Thanks from './components/thanks/Thanks';
function App() {
  const [applicant, setApplicant] = useState("")

  return (
    <div className="App">
      <Navbar />
      <MainSection setApplicant={setApplicant} />
      {applicant &&

        <Thanks applicant={applicant} />
      }
    </div>
  );
}

export default App;
