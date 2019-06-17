import React,{Component} from 'react'
import Navbar from '../component/Navbar'
import Try from '../redux/components/Try'
import Footer from '../component/Footer'

class Hero extends Component{
    render(){
        return(
            <div className="bg-dark">
                <Navbar/>
                <Try/>
                <Footer/>
            </div>
        )
    }
}

export default Hero