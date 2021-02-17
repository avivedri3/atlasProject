import React,{Component} from "react";
import Counter5 from "./counter5";
import Danger from "./danger";
import Success from "./success";

class AppHw extends Component{

  render(){
    return(
      <div>
        <Counter5 />
        <hr/>
        <Success message="Work form Apphw the parent" bg="greenyellow"/>
        <Danger message="Angular is for weak pepole!"/>
      </div>
    )
  }
}

export default AppHw;