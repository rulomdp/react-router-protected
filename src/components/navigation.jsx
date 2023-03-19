import {Link} from 'react-router-dom'

export function Navigation() {
    return <nav>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/landing">Landing</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/analitycs">Analitycs</Link></li>
        <li><Link to="/admin">Admin</Link></li>
      </ul>
    </nav>
    }
    
    