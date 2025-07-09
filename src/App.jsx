
import { Route, Routes } from 'react-router-dom';
import CodeAI from './pages/CodeAI';
import Code from './pages/Code';
import Home from './pages/Home';
import Features from './pages/Features';
import About from './pages/About';
import Documentation from './pages/Documentation';

function App() {
  return (
   <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/1' element={<Code/>}/>
      <Route path='/code-review' element={<CodeAI/>}/>
      <Route path='/features' element={<Features/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/documentation' element={<Documentation/>}/>
    </Routes>
   </>
  )
} 

export default App;