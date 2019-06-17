import React,{Component} from 'react'

class Gridimage extends Component{
    render(){
        return(
        <div className="bd-example">
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ul className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ul>
            <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="https://wallpapercave.com/wp/fio4NNX.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
                <h5>Welcome to the dota 2 web</h5>
            </div>
            </div>
            <div className="carousel-item">
                <img src="https://wallpapercave.com/wp/p8fmFoP.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
                <h5>Welcome to the dota 2 web</h5>
            </div>
            </div>
            <div className="carousel-item">
                <img src="https://images2.alphacoders.com/474/thumb-1920-474206.jpg " className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
                <h5>Welcome to the dota 2 web</h5>
            </div>
            </div>
            </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            </div>
        </div>
        );
    }
}

export default Gridimage