import React,{Component} from 'react'
import axios from 'axios'

class jumbotronTurney extends Component{
    constructor(props) {
        super(props);
        this.state = {
          team: []
        };
        this.state.filterText="";
      }
      componentDidMount() {
        axios.get(`https://api.opendota.com/api/teams`)
          .then(res => {
            const team = res.data;
            this.setState({ team });
          })
      } 
      
    render(){
        const{team}=this.state
        let filterByName = team.length !== 0 ?
            team.filter(data=>{
                return data.name === 'Team Secret'
              }
                ):[]
        let filterByName1 = team.length !== 0 ?
            team.filter(data=>{
                return data.name === 'Virtus.pro'  }):[]
        let filterByName2 = team.length !== 0 ?
            team.filter(data=>{
                return data.team_id === 39  }):[]
        let filterByName3 = team.length !== 0 ?
            team.filter(data=>{
                return data.team_id === 726228  }):[]
        let filterByName4 = team.length !== 0 ?
            team.filter(data=>{
                return data.team_id === 15  }):[]  
        return(
            <div className="heroes">
                <h1 className="font-weight-bold mb-4 ml-5 text-white">Dota Pro Circuit</h1>
            <div class="jumbotron" style={{textAlign:"left",marginLeft:"100px",marginRight:"100px"}}>
            <p className="Dpc">Standing
            {filterByName.length !== 0 ?
                      filterByName.map(result => {
                    return (
                      <React.Fragment key={result.name} style={{marginTop:"10px"}}>
                        <p className= "data">1.    
                            <img src="https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/1838315.png" class="card-img" alt="secret" style={{maxHeight:"100px",maxWidth:"100px",marginRight:"10px"}}/>
                            {result.name}
                        </p>
                      </React.Fragment>
                      )}):
                    <h5>wait......</h5>
                  }
                  {filterByName1.length !== 0 ?
                      filterByName1.map(result => {
                    return (
                      <React.Fragment key={result.name} style={{marginTop:"10px"}}>
                        <p className= "data">2.    
                            <img src="https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/1883502.png" class="card-img" alt="VP" style={{maxHeight:"100px",maxWidth:"100px",marginRight:"10px"}}/>
                            {result.name}
                        </p>
                      </React.Fragment>
                      )}):
                    <h5>wait......</h5>
                  }
                  {filterByName2.length !== 0 ?
                      filterByName2.map(result => {
                    return (
                      <React.Fragment key={result.name} style={{marginTop:"10px"}}>
                        <p className= "data">3.    
                            <img src="https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/39.png" class="card-img" alt="VP" style={{maxHeight:"100px",maxWidth:"100px",marginRight:"10px"}}/>
                            {result.name}
                        </p>
                      </React.Fragment>
                      )}):
                    <h5>wait......</h5>
                  }
                  {filterByName3.length !== 0 ?
                      filterByName3.map(result => {
                    return (
                      <React.Fragment key={result.name} style={{marginTop:"10px"}}>
                        <p className= "data">4.    
                            <img src="https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/726228.png" class="card-img" alt="VP" style={{maxHeight:"100px",maxWidth:"100px",marginRight:"10px"}}/>
                            {result.name}
                        </p>
                      </React.Fragment>
                      )}):
                    <h5>wait......</h5>
                  }
                  {filterByName4.length !== 0 ?
                      filterByName4.map(result => {
                    return (
                      <React.Fragment key={result.name} style={{marginTop:"10px"}}>
                        <p className= "data">5.    
                            <img src="https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/15.png" class="card-img" alt="VP" style={{maxHeight:"100px",maxWidth:"100px",marginRight:"10px"}}/>
                            {result.name}
                        </p>
                      </React.Fragment>
                      )}):
                    <h5>wait......</h5>
                  }
                  </p>
                </div>
          </div>
        )
    }
}

export default jumbotronTurney