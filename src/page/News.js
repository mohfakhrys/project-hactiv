import React,{Component} from 'react'
import Navbar from '../component/Navbar'
import JumbotronNews from '../component/JumbotronNews'
import Footer from '../component/Footer'

class News extends Component{
    render(){
        return(
            <div className="bg-dark">
                <Navbar/>
                {/* <Gridimage/> */}
                <JumbotronNews/>
                <Footer/>
            </div>
        )
    }
}

export default News