


import { useState, useEffect , useContext } from "react";
import RestrauntCard   from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { URL } from "../contants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../useOnlineStatus";
import withPromotedLabel from "./withPromotedLabel";
import UserContext from "../UserContext";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestrauntCardPromoted = withPromotedLabel(RestrauntCard);

  useEffect(() => {
    getRestaurants();    
  }, []);                 

  const getRestaurants = async () => {
    try{
      const data = await fetch(URL); 
      const json = await data.json();
      // console.log(json);
      setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
      setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
      console.log(allRestaurants)
    }catch(error){
      console.log(error);
    }
  };
  const OnlineStatus = useOnlineStatus();
  const { loggedInUser, setUserName } = useContext(UserContext);
  
  if(OnlineStatus === false) 
  return (
  <h1>Looks like you're offline!! Please check your internet connection. </h1>
  );

  
  
  

  function filterData(searchText, restaurants) {
    const filteredData = restaurants.filter((restaurant) =>
      restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filteredData;
  }
  

  
  
  return allRestaurants.length === 0 ? <Shimmer /> : (
    <>
      <div className="  search m-4 p-2 ml-4 text-center pb-3 ">
        <input
          type="text"
          className="shadow-lg text-center pt-3 pr-7 pb-4 pl-6"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
             setSearchText(e.target.value);
          }}
        />
        <button
          className="px-3 py-4 bg-green-300  rounded-lg pl-5 pt-3 hover:bg-green-400 ml-4 "
          onClick={() => {
            // when we click then need to filter the data
           // const data = allRestaurants.filter((res) => res.data.name.toLowerCase().includes(searchText.toLocaleLowerCase()));
           const data =  filterData(searchText,allRestaurants);
           setFilteredRestaurants(data);
           console.log(data);
          }}
        >
          Search
        </button> 
        <div className="search m-4 p-4 flex items-center">
          <label>UserName : </label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

      </div>

      <div className="flex flex-wrap ml-12 gap-2">
        
        {filteredRestaurants?.length === 0 ? (
          <h1>No Restaurant Matches Your Filter</h1>
        ) : (
         
            filteredRestaurants.map((restaurant) => {
            return (
              <Link
               key={restaurant?.info?.id} 

               to={"/restaurant/" + restaurant?.info?.id}
               >  
                {restaurant?.info.promoted ? (
              <RestrauntCardPromoted resData={restaurant?.info} />
            ) : (
              
                <RestrauntCard {...restaurant?.info} />
            )}
              
                </Link>
            );
          })
        )}
        </div>
      
    </>
  );
};

export default Body;
