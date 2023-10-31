import React from 'react'
import Home from './Componant/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import Add from './Componant/Add';
import Edit from './Componant/Edit';
import './App.css'
function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/create' element={<Add/>}/>
                    <Route path='/edit' element={<Edit/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App