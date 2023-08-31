import React from "react";
   

    class userClass extends React.Component{
        constructor(props){
            super(props);

            this.state = {
                userInfo : {
                   name : "Dummy",
                   location : "Default",
                   
                }
            };
                // count1: 0,
                // count2 : 2,
            
            // console.log(this.props.name + "child constructor");
        }
        async componentDidMount () {
            // console.log("Child Component Did Mount");
            //Api calls this method
            const data = await fetch("https://github.com/sejalpatil8088");
            const json = await data.json();
            this.setState({
                userInfo : json,
            });

            console.log(json);
        }
        componentDidUpdate(){
            console.log("component did update");
        }
    render(){
         const{name,location} = this.state.userInfo;
       
        return(
          <div className="user-card">
           
            <h2>Name : {name}</h2>
            <h3>Location : {location}</h3>
             <h4>Contact : @sejalpatil</h4>
           </div>
        );
    }
}
export default userClass;