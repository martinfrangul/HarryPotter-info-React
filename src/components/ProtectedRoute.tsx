import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { ReactNode } from "react";


const ProtectedRoute: React.FC<{ children: ReactNode }> = ({children}) => {

    const context = useContext(AuthContext);
    
    const { user, isFetching } = context

    if (isFetching) {
        return <div>Loading...</div>;
      }

    if (user === null) {
        return <Navigate to="/" />;
      }
    
      return <>{children}</>;
}

export default ProtectedRoute;