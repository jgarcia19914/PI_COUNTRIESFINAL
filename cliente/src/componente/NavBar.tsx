import { Link,useLocation  } from 'react-router-dom'
import '../style/NavBarstyle.css'

function NavBar() {

  return (
    <div className='NavBar'>
      <Link to='/'>
        <button>Home</button>
      </Link>
      <Link to='/actividad' >
        <button>Actividad</button>
      </Link>
      <Link to='/CrearActividad'>
        <button>Crear Actividad</button>
      </Link>
      <div className='search'>
      </div>
    </div>
  );
}

export default NavBar;