import React,{Component} from 'react'
import Navbar from '../component/Navbar'
import Card from '../component/Card'
import Gridimage from '../component/Gridimage'
import JumbotronHero from '../component/JumbotronHero'
import JumbotronTurney from '../component/JumbotronTurney'
import Footer from '../component/Footer'

class Home extends Component{
    render(){
        return(
            <div className="bg-dark">
                <Navbar/>
                <Gridimage/>
                <Card/>
                <JumbotronHero/>
                <JumbotronTurney/>
                <Footer/>
            </div>
        );
    }
}

export default Home