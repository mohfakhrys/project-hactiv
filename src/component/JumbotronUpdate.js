import React,{Component} from 'react'

class JumbotronUpdate extends Component{
    render(){
        return(
            <div className="head">
                <h1 className="font-weight-bold mb-4 ml-5 mt-2 text-white">Update</h1>
            <div className="jumbotron jumbotron-fluid" style={{marginLeft:"100px",marginRight:"100px"}}> 
                <div className="container ">
                    <h1 className="title">Dota 2 Update - June 5th 2019</h1>
                    <small className="font-weight-bold">June 5, 2019 - Valve</small>
                    <p className="lead" style={{textAlign:"justify"}}>Added a new camera test convar "dota_camera_alternative" that takes a number input for different camera setting configurations. This convar will only be around short term and the input mappings may change.</p>
                </div>
                <div className="container border-top border-dark">
                    <h1 className="title mt-4">Dota 2 Update - May 29th, 2019</h1>
                    <small className="font-weight-bold">June 5, 2019 - Valve</small>
                    <p className="lead" style={{textAlign:"justify"}}>- Fixed Marksmanship's extra proc damage portion not being properly reduced by bonus armor</p>
                </div>
                <div className="container border-top border-dark">
                    <h1 className="title mt-4">Dota 2 Update - May 15th, 2019</h1>
                    <small className="font-weight-bold">June 5, 2019 - Valve</small>
                    <p className="lead"style={{textAlign:"justify"}}>* There was an issue that affected some players who used shovels in the first few hours of the battle pass release. We’ve granted additional shovels to the affected players.</p>
                </div>
                <div className="container border-top border-dark">
                    <h1 className="title mt-4">Dota 2 Update - May 10th, 2019</h1>
                    <small className="font-weight-bold">June 5, 2019 - Valve</small>
                    <p className="lead"style={{textAlign:"justify"}}>* Fixed issues related to MMR wager tokens</p>
                </div>
                <div className="container border-top border-dark">
                    <h1 className="title mt-4">Dota 2 Update - March 11, 2019</h1>
                    <small className="font-weight-bold">June 5, 2019 - Valve</small>
                    <p className="lead"style={{textAlign:"justify"}}>Custom Games API:
                        <br/>- Added GetDedicatedServerKeyV2 which utilizes a new approach for securing/generating the keys. Any custom game that relies on GetDedicatedServerKey to communicate with its backend will want to switch to the V2 version as soon as possible.
                        <br/>- To give custom game authors time to switch to the new system, GetDedicatedServerKey will remain unchanged until 3/31/2019, after which will be automatically switched to V2.
                        <br/>- When playing on local/unofficial servers, GetDedicatedServerV2 will return special values to make the state more clear for developers (e.g. “Invalid_NotOnDedicatedServer”).	</p>
                </div>
            </div>
            </div>
        )
    }
}

export default JumbotronUpdate