import {Link} from "react-router-dom"

function Navbar(){

    return(
        <nav className="flex flex-between gap-[450px] px-32">

            <div>
                <h1>Hospital web</h1>
            </div>
            <div className="flex flex-between gap-12">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/doctors'>Doctors</Link>
                <Link to='/servise'>Services</Link>
                <Link to='/contact'>Contact</Link>
            </div>

        </nav>

    )

}

export default Navbar;