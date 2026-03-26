import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <button>
            <Link to='/Home'>Home</Link>
        </button>
        <br></br>
        <button>
            <Link to='/Login'>Login</Link>
        </button>
        <br></br>
        <button>
        <Link to='/Login2'>Login2</Link>
      </button>
        <br></br>
      <button>
        <Link to='/Register'>Register</Link>
      </button>
      <br></br>
      <button>
      <Link to='About'>About</Link>
      </button>
    </div>
  )
}

export default Navbar
