import React,{Component} from 'react'

class Location extends Component{
    render(){
        return(
            <div>
                <h1 className="col font-weight-bold mb-4 ml-5">Location</h1>
            <div class="jumbotron ml-5 mr-5" style={{textAlign:"left"}}>
                    <a class="lead" href="google.com">- Jakarta</a><br/>
                    <a class="lead" href="google.com">- Bandung</a><br/>
                    <a class="lead" href="google.com">- Surabaya</a>
                </div>
          </div>
        )
    }
}

export default Location