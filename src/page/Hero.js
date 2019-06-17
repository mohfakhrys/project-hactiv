import React,{Component} from 'react'
import Navbar from '../component/Navbar'
import JumbotronDetail from '../component/JumbotronDetail'

class Hero extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <JumbotronDetail/>
            </div>
        )
    }
}

export default Hero