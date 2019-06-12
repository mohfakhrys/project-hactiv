import React,{Component} from 'react'

class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <a className="navbar-brand text-white" href="google.com">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Pev9VjKRsWtm5v92mNwqTn6zmA3JPu5ZqDMpx91EvpA3xk0-" class="card-img mr-2" alt="..." style={{maxWidth:"35px"}}/>
                    Dota 2
                </a>
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item ">
                        <a className="nav-link text-white" href="google.com">Update</a>
                    </li>
                    <li className="nav-item " >
                        <a className="nav-link text-white" href="google.com">Heroes</a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link text-white" href="google.com">News</a>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item ">
                        <a className="nav-link text-white" href="google.com">Login</a>
                    </li>
                </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar