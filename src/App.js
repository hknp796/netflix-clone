import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import {action,originals} from './urls'
import './Components/App.css';
import RowPost from './Components/RowPost/RowPost';
function App() {

 
  return (
    <div>
      <Navbar/>
      <Banner/>
      <RowPost url={originals} title="Netflix Originals"  />
      <RowPost url={action} title="Action" isSmall />
    </div>
  )
  }


export default App;
