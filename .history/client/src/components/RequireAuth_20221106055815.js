import { useContext} from "react";
import {Navigate}
import { AuthContext} from "../providers/AuthProvider";

const RequireAuth = () => {
          const auth = useContext(AuthContext)
          if(!auth.authenticated){
                    return<Navigate to
          }
          return (

          );
}

export default RequireAuth;
