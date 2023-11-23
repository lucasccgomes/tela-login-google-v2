import { useContext } from "react";
import { AuthGoogleContext } from "../../context/authGoogle";
import "./home.css";
import { HiOutlineMail } from 'react-icons/hi';
import { BiLogOut } from 'react-icons/bi';

export const Home = () => {
  const { user, signOut } = useContext(AuthGoogleContext)
  let userLogado = JSON.parse(user)
  const createdAt = new Date(parseInt(userLogado.createdAt))

  return (
    <div className="profilecenter">
      <div className="profile">
        <header></header>
        <img src={userLogado.photoURL} alt="Foto do Perfil" />
        <h1>Bem Vindo</h1>
        <h2 className="name">{userLogado.displayName}</h2>
        <p className="email"><HiOutlineMail className="iconmail" />: {userLogado.email}</p>
        <div className="containeronelogin">
          <p className="onelogin">SEU PRIMEIRO LOGIN AQUI </p>
          <p>{createdAt.toLocaleString()}</p>
        </div>
        <button onClick={() => signOut()} ><BiLogOut />Sair</button>
      </div>
    </div>
  );
}
