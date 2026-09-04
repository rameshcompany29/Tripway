import {Link} from 'react-router-dom'
const Home = ()=>{
    return (
        <header>
            <nav>
                <Link to="/">Tripway</Link>
                <div>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/hotels">Hotels</Link>
                </div>
            </nav>
        </header>
    )
}

export default Home