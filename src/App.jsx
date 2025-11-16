import { Routes, Route } from 'react-router-dom'
import { Home } from './view/general/Home.jsx'
import { Navbar } from './view/general/navbar.jsx'
import { FormRegistro } from './view/general/FormRegistro.jsx'
function App() {
  return (
    <>          
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/FormularioRegisto" element={<FormRegistro />} />

    </Routes> 
     </>
  )
}

export default App
