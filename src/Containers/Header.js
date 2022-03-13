import { Link} from 'react-router-dom'

function Header() {
    return(
        <header className="main-header">
            <Link to="/"><h1>{"{Galdo.Dev}"}</h1></Link>
            <Link to="/dashboard">Admin</Link>
        </header>
    )   
}

export default Header