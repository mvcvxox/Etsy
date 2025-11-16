import { Link } from 'react-router-dom'


 
 export const Navbar = () => {
   return (
  <nav>
      <Link to="/">Inicio</Link>
      <Link to="/about">Acerca de</Link>
      <Link to="/FormularioRegisto">Formulario de registro</Link>
    </nav>   )
 }
 
