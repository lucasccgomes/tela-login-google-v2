import "./login.css"
import { useContext } from "react";
import { AuthGoogleContext } from "../../context/authGoogle";
import { Navigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import LogoFbase from "../../assets/logo-firebase.png"

export const Login = () => {

  const { signInGoogle, signed } = useContext(AuthGoogleContext);
  async function loginGoogle() {
    await signInGoogle()

  }
  if (!signed) {
    return (
      <div className="containercenter">
        
        <div className="containerlogin">
          <h1>Login</h1>
          <p>Insira sua credencial para acessar sua conta</p>
          <button onClick={() => signInGoogle()}><FcGoogle className="icong"/>Logar com Google</button>
        </div>
        <div className="logofirebase">
          <img src={LogoFbase} alt="logo da firebase" />
        </div>
      </div>
    );
  } else {
    return <Navigate to="/home" />
  }

}
