import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Main from './Main';
import VideoCall from './VideoCall';

function PulicRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/room/:roomId' element={<VideoCall/>}/>
      </Routes>
    </Router>
  )
}

export default PulicRouter