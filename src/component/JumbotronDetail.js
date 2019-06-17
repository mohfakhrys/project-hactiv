import React,{Component} from 'react'
import axios from 'axios'

class JumbotronDetail extends Component{
    constructor(props) {
        super(props);
        this.state = {
          persons: []
        };
        this.state.filterText="";
      }
      s
      componentDidMount() {
        axios.get(`https://api.opendota.com/api/heroes`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
      }

    render(){
        const{persons}=this.state
        let filterByAttrAgi = persons.length !== 0 ?
        persons.filter(data=>{
            return data.primary_attr === 'agi'  
        })
        :
        []
        
        return(
            <div className="container bg-primary">
                <div className="row ">
                    <div className="col-md-auto">
                        <img className="img mt-3" src="http://cdn.dota2.com/apps/dota2/images/blogfiles/collectorscache_48s2u.png" alt="TI9" style={{maxWidth:"100px",maxHeight:"100px",marginBottom:"20px"}}/>
                    </div>
                    <div className="col-md-auto">
                        <img className="img mt-3" src="http://cdn.dota2.com/apps/dota2/images/blogfiles/collectorscache_48s2u.png" alt="TI9" style={{maxWidth:"100px",maxHeight:"100px",marginBottom:"20px"}}/>
                    </div>
                    <div className="col-md-auto">
                        <a className="img" href="google.com">
                            <img className="img mt-3" src="http://cdn.dota2.com/apps/dota2/images/blogfiles/collectorscache_48s2u.png" alt="TI9" style={{maxWidth:"100px",maxHeight:"100px",marginBottom:"20px"}}/>
                        </a> 
                    </div>
                </div>
            </div>
        );
    }
}

export default JumbotronDetail