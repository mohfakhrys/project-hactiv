import React,{Component} from 'react'

class Card extends Component{
    render(){
        return(
        <div className="card-content mx-3 mt-3">
          <div className="row justify-content-between">
                <h1 className="col font-weight-bold mb-4 ml-5 text-white">News</h1>
            </div>
            <tr>
            <div className="card mb-5 " style={{maxWidth: "540px",marginLeft:"100px"}}>
                <div className="row no-gutters">
                <div className="col-md-4 mt-4">
                  <img src="http://cdn.dota2.com/apps/dota2/images/blogfiles/37sash42d_2019_cache_blog.png" className="card-img" alt="..."/>
                </div>
             <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">The International 2019 Collector’s </h5>
                <p className="card-text text-truncate">The final votes have been tallied and The International 2019 Collector’s Cache is now available, loaded with the top 18 item sets as voted on by the Dota 2 community.</p>
                <p className="card-text"><small className="text-muted">June 7, 2019 - Dota Team</small></p>
                <button type="button" className="btn btn-warning">Read More</button>
              </div>
             </div>
            </div>
          </div>
          <th scope="col">
          <div className="card mb-5" style={{maxWidth: "540px",marginLeft:"50px"}}>
                <div className="row no-gutters">
                <div className="col-md-4 mt-4">
                  <img src="http://cdn.dota2.com/apps/dota2/images/blogfiles/collectorscache_48s2u.png" className="card-img" alt="..."/>
                </div>
             <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Collector’s Cache Battle Pass Vote</h5>
                <p className="card-text font-weight-normal text-truncate">As always, the Dota 2 workshop has seen an impressive number of high-quality submissions for this year’s Collector’s Cache. To help make the final selection, we’d like to invite all Battle Pass owners to weigh in on the process.</p>
                <p className="card-text"><small className="text-muted">May 28, 2019 - Dota Team</small></p>
                <button type="button" className="btn btn-warning">Read More</button>
               </div>
              </div>
             </div>
            </div>
           </th>
          </tr>
          <tr> 
            <div className="card mb-5" style={{maxWidth: "540px", marginLeft:"100px",marginTop:"50px"}}>
                <div className="row no-gutters">
                <div className="col-md-4 mt-4">
                  <img src="http://cdn.dota2.com/apps/dota2/images/blogfiles/aghs_patch.png" className="card-img" alt="..."/>
                </div>
             <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">The 7.22 Gameplay Update</h5>
                <p className="card-text text-truncate">Today’s patch brings the debut of the 7.22 Gameplay Update, focused on introducing Aghanim’s Scepter upgrades to all remaining heroes in the game, adjusting existing Scepter upgrades for many other heroes, and unveiling a variety of gameplay balance changes—including the addition of Mars and Io to Captains Mode.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <button type="button" className="btn btn-warning">Read More</button>
               </div>
              </div>
             </div>
            </div>
            <th scope="col">
            <div className="card mb-5" style={{maxWidth: "540px",marginLeft:"50px"}}>
                <div className="row no-gutters">
                <div className="col-md-4 mt-4">
                  <img src="http://cdn.dota2.com/apps/dota2/images/blogfiles/planetfall_blog_zxgim.jpg" className="card-img" alt="..."/>
                </div>
             <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Planetfall — Earthshaker Arcana</h5>
                <p className="card-text font-weight-normal text-truncate">He who was one with the spirit of this Earth has now merged with a fragment from another world. Planetfall, the Earthshaker Arcana, has landed. Available now in The International 2019 Battle Pass.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <button type="button" className="btn btn-warning">Read More</button>
               </div>
              </div>
             </div>
            </div>
            </th>
          </tr>
          
        </div>
        );
    }
}

export default Card