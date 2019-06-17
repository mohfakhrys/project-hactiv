import React,{Component} from 'react'
import Navbar from '../component/Navbar'
import JumbotronUpdate from '../component/JumbotronUpdate'
import Footer from '../component/Footer'

class Update extends Component{
    render(){
        return(
            <div className="bg-dark">
                <Navbar/>
                {/* <Gridimage/> */}
                <JumbotronUpdate/>
                <Footer/>
            </div>
        );
    }
}
export default Update