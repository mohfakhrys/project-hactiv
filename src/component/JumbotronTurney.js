import React,{Component} from 'react'

class jumbotronTurney extends Component{
    render(){
        return(
            <div className="heroes">
                <h1 className="font-weight-bold mb-4 ml-5">Tournament</h1>
            <div class="jumbotron ml-5 mr-5" style={{textAlign:"left"}}>
                    <a class="lead" href="google.com">- Jakarta</a><br/>
                    <a class="lead" href="google.com">- Bandung</a><br/>
                    <a class="lead" href="google.com">- Surabaya</a>
                </div>
          </div>
        )
    }
}

export default jumbotronTurney