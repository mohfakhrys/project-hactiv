import React,{Component} from 'react'
import { Link } from 'react-router-dom';

class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <Link to="/">
                <a className="navbar-brand text-white" href="/" >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Pev9VjKRsWtm5v92mNwqTn6zmA3JPu5ZqDMpx91EvpA3xk0-" class="card-img mr-2" alt="..." style={{maxWidth:"35px"}}/>
                    Dota 2
                </a>
                </Link>
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <Link to="/Update">
                    <li className="nav-item ">
                        <a className="nav-link text-white"href="/Update" >Update</a>
                    </li>
                    </Link>
                    <li className="nav-item " >
                        <a className="nav-link text-white" href="/Heroes" >Heroes</a>
                    </li>
                    <Link to="/News">
                    <li className="nav-item ">
                        <a className="nav-link text-white" href="/News" >News</a>
                    </li>
                    </Link>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item ">
                        <a className="nav-link text-white" href="/Login">Login</a>
                    </li>
                </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar