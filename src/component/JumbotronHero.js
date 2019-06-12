import React,{Component} from 'react'
import axios from 'axios'

class jumbotron extends Component{
    constructor(props) {
        super(props);
        this.state = {
          persons: []
        };
        this.state.filterText="";
      }
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
        let filterByAttrStr = persons.length !== 0 ?
        persons.filter(data=>{
            return data.primary_attr === 'str'  
        })
        :
        []
        let filterByAttrInt = persons.length !== 0 ?
        persons.filter(data=>{
            return data.primary_attr === 'int'  
        })
        :
        []

        return(
            <div className="heroes">
                <h1 className="font-weight-bold mb-4 ml-5">Heroes</h1>
            <div class="jumbotron ml-5 mr-5" style={{textAlign:"left"}}>
                    <tr>
                    <p>hero agility:{filterByAttrAgi.length !== 0 ?
                      filterByAttrAgi.map(result => {
                    return (
                      <React.Fragment key={result.localized_name}>
                        <li className= "spacing=10dp">              
                          {result.localized_name},
                        </li>
                      </React.Fragment>
                      )
                     })
                    :
                    <h5>wait......</h5>
                  }
                  </p>
                  <th scope="col">
                  <p className="nama-hero font-weight-normal" style={{marginLeft:"300px"}}>
                    hero int:{filterByAttrInt.length !== 0 ?
                      filterByAttrInt.map(result => {
                    return (
                      <React.Fragment key={result.localized_name}>
                        <li className= "spacing=10dp">              
                          {result.localized_name},
                        </li>
                      </React.Fragment>
                      )
                     })
                    :
                    <h5>wait......</h5>
                  }
                  </p>
                  </th>
                  <th scope="col">
                  <p className="nama-hero font-weight-normal" style={{marginLeft:"300px"}}>
                    hero str:{filterByAttrStr.length !== 0 ?
                      filterByAttrStr.map(result => {
                    return (
                      <React.Fragment key={result.localized_name}>
                        <li className= "spacing=10dp">              
                          {result.localized_name},
                        </li>
                      </React.Fragment>
                      )
                     })
                    :
                    <h5>wait......</h5>
                  }
                  </p>
                  </th>
                  </tr>
                </div>
          </div>
        )
    }
}

export default jumbotron