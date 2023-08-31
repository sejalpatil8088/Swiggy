import { IMG_CDN_URL } from "../contants";



// const RestrauntCard = (props) => {
//     const {resData} = props;

//     const {
//         name,
//         cuisines,
//         area,
//         cloudinaryImageId,
//         lastMileTravelString,
//         costForTwoString,
//         avgRating,
//         deliveryTime,
//     } = resData?.data|| {};

//     return(
//         <div className="res-card" style={{backgroundColor : "#f0f0f0"}}>
//            <img
//               className="res-logo"
//               alt="res-logo"
//               src={
//                 IMG_CDN_URL +
//                   cloudinaryImageId
//               }
//            />
//                 <h2>{name}</h2>
//                  <h5>{cuisines?.join(" , ")}</h5>
//                  <h5>{area}</h5>
//                  <h5>{lastMileTravelString}</h5>
//                  <h5>{costForTwoString}</h5>
//                  <h5>{avgRating} stars</h5>
//                  <h5>{deliveryTime} Minutes</h5>
//         </div>
//     );
// };

// export default RestrauntCard;
const RestrauntCard = ({
    name,
    cuisines,
    area,
    cloudinaryImageId,
    lastMileTravelString,
    costForTwoString,
    avgRating,
    
      }) => {
      return(
            <div className="card m-4 p-4 w-[250px] h-[350px] bg-white rounded-md hover:bg-gray-300 shadow-lg">
                <img
                   alt="food-img"
                   src={
                    IMG_CDN_URL +
                       cloudinaryImageId
                   }
                />
                <div className="heading">
                   <h2 className="font-bold px-2 py-2 text-lg">{name}</h2>
                   <h5 className="text-sm">{cuisines?.join(",")}</h5>
                   <h5>{area}</h5>
                   <h5>{lastMileTravelString}</h5>
                   <h5>{costForTwoString}</h5>
                   <h5 className="bg-green-600 w-8 text-sm ">{ avgRating} </h5>
                </div>
            </div>
        )
    };

    // higher order component
    // import - restaurantCard => return promoted restraunt card 

    // export const withPromotedLabel = (RestrauntCard) => {
    //     return (props) => {
    //         return(
    //             <div>
    //                <label>Promoted</label>
    //                <RestrauntCard {...props}/>
    //             </div>
    //         )
    //     }
    // }
    export default RestrauntCard;
















// import { IMG_CDN_URL } from '../contants';


// const RestrauntCard = ({name ,
//     cuisines ,
//      cloudinaryImageId ,
//      lastMileTravelString }) => {
      
//    return(
//        <div className="card">
//            <img 
//              alt="food-images"
//              src={
//                 IMG_CDN_URL
//                  +
//                 cloudinaryImageId
//              }
//            />
//            <h2>{name}</h2>
//            <h3>{cuisines}</h3>
//            <h4>{lastMileTravelString} Minutes</h4>
//        </div>
//    );
//  };

//  export default RestrauntCard;