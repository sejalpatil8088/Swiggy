import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [OnlineStatus , setOnlineStatus] = useState(true);
     useEffect(() => {
          window.addEventListener("offline" , () => {
            setOnlineStatus(false);

          })
          window.addEventListener("online" , () => {
            setOnlineStatus(true);
          });

     }, []);
    // check if online  then return online status
    return OnlineStatus;
}
export default useOnlineStatus;