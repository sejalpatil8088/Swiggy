
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "./useRestrauntMenu";
import RestrauntCategory from "./RestrauntCategory"
import { useState } from "react";

const RestrauntMenu = () => {
  const { resId } = useParams();

  const dummy = "Dummy Data";

  const resInfo = useRestrauntMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* categories accordions */}
      {categories.map((category, index) => (
        // controlled component
        <RestrauntCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
          dummy={dummy}
        />
      ))}
    </div>
  );
};

export default RestrauntMenu;















// import { useState } from "react";
// import Shimmer from "./Shimmer";
// import { useParams } from "react-router-dom";
// // import { MENU_URL } from "../contants";
// import useRestrauntMenu from "./useRestrauntMenu";
// import RestrauntCategory from "./RestrauntCategory";


// const RestrauntMenu = () => {
  
  
//   const { resId } = useParams();
//   const dummy = "Dummy Data";
  

//   const resInfo = useRestrauntMenu(resId);
//   const [showIndex, setShowIndex] = useState(null);


 
//      if(resInfo === null) return <Shimmer/>
    
  
 
//       const { name, cuisines, costForTwoMessage} = 
//       resInfo?.cards[0]?.card?.card?.info; 

//       const{itemCards} =
//         //  resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || [];
//         resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
//         console.log(itemCards);
      
//        const Categories = 
//        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
//           (c) => 
//           c.card?.["card"]?.["@type"] ===
//           "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
//        );
//         console.log(Categories);
        
     
//     return (
     
//        <div className="text-center">
//            <h1 className="font-bold my-6 text-2xl" >{name}</h1>
//            <p className="font-bold text-lg">
//                {cuisines.join(" ,")} - {costForTwoMessage}
//            </p>
//            {Categories.map((category , index) => (
              
//               <RestrauntCategory
//               key={category?.card?.card.title}
//               data={category?.card?.card}
//               showItems={index === showIndex ? true : false}
//               setShowIndex={() => setShowIndex(index)}
//               dummy={dummy}
//             />

//            ))}
          
//   </div>
   
//   )
// };
// export default RestrauntMenu;
