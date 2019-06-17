import React,{Component} from 'react'
import Navbar from '../component/Navbar'
import Try from '../redux/components/Try'




class Hero extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Try/>
            </div>
        )
    }
}

export default Hero