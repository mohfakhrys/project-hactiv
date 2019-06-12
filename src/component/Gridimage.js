import React,{Component} from 'react'

class Gridimage extends Component{
    render(){
        return(
        <div class="bd-example">
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                <ul class="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ul>
            <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://wallpapercave.com/wp/fio4NNX.jpg" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
                <h5>Welcome to the dota 2 web</h5>
            </div>
            </div>
            <div class="carousel-item">
                <img src="https://wallpapercave.com/wp/p8fmFoP.jpg" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
                <h5>Welcome to the dota 2 web</h5>
            </div>
            </div>
            <div class="carousel-item">
                <img src="https://images2.alphacoders.com/474/thumb-1920-474206.jpg " class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
                <h5>Welcome to the dota 2 web</h5>
            </div>
            </div>
            </div>
                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>
        </div>
        );
    }
}

export default Gridimage