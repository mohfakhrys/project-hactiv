import React,{Component} from 'react'

class JumbotronNews extends Component{
    render(){
        return(
            <div className="head">
                <h1 className="font-weight-bold mb-4 ml-5 mt-2 text-white">News</h1>
            <div className="jumbotron jumbotron-fluid" style={{marginLeft:"100px",marginRight:"100px"}}> 
                <div className="container">
                    <img className="img" src="http://cdn.dota2.com/apps/dota2/images/blogfiles/37sash42d_2019_cache_blog.png" alt="TI9" style={{maxWidth:"500px",maxHeight:"500px",marginBottom:"20px",marginLeft:"300px"}}/>
                    <h1 className="title">The International 2019 Collector’s Cache</h1>
                    <small className="date">June 7, 2019 - Dota Team</small>
                    <p className="lead mt-3 mb-3" style={{textAlign:"justify"}}>The final votes have been tallied and The International 2019 Collector’s Cache is now available, loaded with the top 18 item sets as voted on by the Dota 2 community.
                                    Unboxing 15 treasures will automatically grant you 36 Battle Levels, and the odds of receiving a bonus rare item will increase with each treasure you open. You can also recycle any unwanted items for 2 Battle Levels.
                                    The 2019 Cache is available for $2.49 and will only be on sale for 30 days. This will be the only way to acquire these exclusive items, except for the ultra rare Rubick item, which will be marketable towards the end of 2020 after next year’s International concludes. Each purchase contributes 25% of sales directly to The International prize pool.
                                    The final vote tally is listed below, with the exception of a second Tidehunter set at rank 18 – that set will be released at some point in the future.
                                    We’d like to thank all of the community artists who tendered submissions for this year’s treasure, as well as the entire Battle Pass community for casting votes in support of their favorite item sets. We look forward to seeing all of this new finery in the lanes.
                    </p>
                    <div className="border-top border-dark mb-3 mt-3">
                    </div>
                    <img className="img mt-3" src="http://cdn.dota2.com/apps/dota2/images/blogfiles/collectorscache_48s2u.png" alt="TI9" style={{maxWidth:"500px",maxHeight:"500px",marginBottom:"20px",marginLeft:"300px"}}/>
                    <h1 className="title">Collector’s Cache Battle Pass Vote</h1>
                    <small>May 28, 2019 - Dota Team</small>
                    <p className="lead mt-3"style={{textAlign:"justify"}}>As always, the Dota 2 workshop has seen an impressive number of high-quality submissions for this year’s Collector’s Cache. To help make the final selection, we’d like to invite all Battle Pass owners to weigh in on the process.
                                        From now until Monday, June 3, the final candidates for the Collector’s Cache will be featured for preview in the Dota 2 client, where all players can see a lineup of the item sets for easy comparison. Battle Pass owners can give a thumbs up or down to each set under consideration, and sets with the highest scores will be prepared for inclusion in this year’s Cache.
                                        We thank each workshop artist that submitted items for this year’s call to arms, and we look forward to seeing which sets strike a chord with the Battle Pass community.
                    </p>
                    <div className="border-top border-dark mb-3 mt-3">
                    </div>
                    <img className="img mt-3" src="http://cdn.dota2.com/apps/dota2/images/blogfiles/aghs_patch.png" alt="TI9" style={{maxWidth:"500px",maxHeight:"500px",marginBottom:"20px",marginLeft:"300px"}}/>
                    <h1 className="title">The 7.22 Gameplay Update</h1>
                    <small>May 24, 2019 - Dota Team</small>
                    <p className="lead mt-3"style={{textAlign:"justify"}}>Today’s patch brings the debut of the 7.22 Gameplay Update, focused on introducing Aghanim’s Scepter upgrades to all remaining heroes in the game, adjusting existing Scepter upgrades for many other heroes, and unveiling a variety of gameplay balance changes—including the addition of Mars and Io to Captains Mode.
                                                                          Head over to the 7.22 update page to check out a full list of changes.
                   </p>
                   <div className="border-top border-dark mb-3 mt-3">
                    </div>
                    <img className="img mt-3" src="http://cdn.dota2.com/apps/dota2/images/blogfiles/planetfall_blog_zxgim.jpg" alt="TI9" style={{maxWidth:"500px",maxHeight:"500px",marginBottom:"20px",marginLeft:"300px"}}/>
                    <h1 className="title">Planetfall — Earthshaker Arcana</h1>
                    <small>May 24, 2019 - Dota Team</small>
                    <p className="lead mt-3"style={{textAlign:"justify"}}>He who was one with the spirit of this Earth has now merged with a fragment from another world. Planetfall, the Earthshaker Arcana, has landed. Available now in The International 2019 Battle Pass.
                                                                          The Arcana includes an all-new model, custom Echo Slam, Enchant Totem, Blink Dagger, and Stun effects, a combo counter for showing your ability streaks, and over 500 new Arcana-exclusive voice lines. Earn 500 Kills or Assists with Echo slam to unlock the Burning Descent alternate style.
                                                                           Learn more about Planetfall on the update website.
                    </p>
                </div>
            </div>
            </div>
        )
    }
}

export default JumbotronNews