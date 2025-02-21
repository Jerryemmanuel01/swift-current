import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectDashboard = ({element}) => {
  const { user } = useSelector((state) => state.userInfo);
    const { token } = useSelector((state) => state.auth);

  const role = user?.userInfo.role;
  
  if(!token){
    return <Navigate to="/auth/login"/>
  } 
  if(role !== "User"){
    return <Navigate to="/admin"/>
  } 
  return element
};

export default ProtectDashboard;
