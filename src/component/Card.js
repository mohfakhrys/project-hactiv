import React,{Component} from 'react'
import ikan_bakar from '../image/ikan_bakar.jpg'

class Card extends Component{
    render(){
        return(
        <div className="card-content mx-3 mt-3">
          <div className="row justify-content-between">
                <h1 className="col font-weight-bold mb-4 ml-5">News</h1>
            </div>
            <tr>
            <div class="card mb-4 ml-5" style={{maxWidth: "540px"}}>
                <div class="row no-gutters">
                <div class="col-md-4 mt-4">
                  <img src={ikan_bakar} class="card-img" alt="..."/>
                </div>
             <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Card </h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                <button type="button" class="btn btn-warning">Read More</button>
              </div>
             </div>
            </div>
          </div>
          <th scope="col">
          <div class="card mb-3 ml-5" style={{maxWidth: "540px"}}>
                <div class="row no-gutters">
                <div class="col-md-4 mt-4">
                  <img src={ikan_bakar} class="card-img" alt="..."/>
                </div>
             <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">asdfas</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                <button type="button" class="btn btn-warning">Read More</button>
               </div>
              </div>
             </div>
            </div>
           </th>
          </tr>
          <tr> 
            <div class="card mb-3 ml-5" style={{maxWidth: "540px"}}>
                <div class="row no-gutters">
                <div class="col-md-4 mt-4">
                  <img src={ikan_bakar} class="card-img" alt="..."/>
                </div>
             <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">asdfas</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                <button type="button" class="btn btn-warning">Read More</button>
               </div>
              </div>
             </div>
            </div>
            <th scope="col">
            <div class="card mb-3 ml-5" style={{maxWidth: "540px"}}>
                <div class="row no-gutters">
                <div class="col-md-4 mt-4">
                  <img src={ikan_bakar} class="card-img" alt="..."/>
                </div>
             <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">asdfas</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                <button type="button" class="btn btn-warning">Read More</button>
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