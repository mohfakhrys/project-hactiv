import React,{Component} from 'react'
import Card from './Card';

state={
    Card:{
        News="News",
    }
}

class Data extends Component{
    render(){
        return(
            <div className="Data">
                <Card
                    News={this.props.Card.News}
                />
            </div>
        );
    }
}

export default Data