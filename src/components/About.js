// import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../UserContext";

class About extends Component {
  constructor(props) {
    super(props);

    //console.log("Parent Constructor");
  }

  componentDidMount() {
    //console.log("Parent Component Did Mount");
  }

  render() {
    //console.log("Parent Render");

    return (
      <div>
        <h1>About Class Component</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is Namaste React Web Series</h2>
        <UserClass name={"First"} location={"Dehradun Class"} />
      </div>
    );
  }
}

export default About;

















// import { Outlet } from "react-router-dom";
// import User from "./User";
// import UserClass from "./UserClass";
// import { Component } from "react";
// import React from "react";

// class About extends Component{
//     constructor(props){
//         super(props);
//         console.log("parent constructor");

//     }
//     componentDidMount(){
//         console.log("Parent component did mount");
//     }
//     render(){

        
//         return(
//         <div>
//           <h1>About Class Component</h1>
//           <h2>This is Namaste React Web Series</h2>
//         {/* <User name={"Sejal Patil(function)"}/> */}
//         <UserClass UserClass name={"Sejal Patil(classes)" }location={"Benglore"}/>
//         <UserClass UserClass name={"Pooja Patil(classes)" }location={"USA"}/>
//         <Outlet/>
//      </div>
//         );
//     };
// }

// export default About;

