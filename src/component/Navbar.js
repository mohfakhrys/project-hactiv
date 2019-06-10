import React,{Component} from 'react'

class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-warning">
                <a className="navbar-brand" href="google.com">Zomoto</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item ">
                        <a className="nav-link" href="google.com">Home</a>
                    </li>
                    <li className="nav-item " >
                        <a className="nav-link" href="google.com">Location</a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link" href="google.com">Pricing</a>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item ">
                        <a className="nav-link" href="google.com">Login</a>
                    </li>
                </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar