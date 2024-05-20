import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/config";
const AuthPage = ({ setIsAuth }) => {
  //giriş butonuna tıklanırsa
  const handleClick = () => {
    signInWithPopup(auth, provider)
      //başarıyla giriş yaparsa çalışır
      .then((data) => {
        console.log(data.user);
        //kullanıcı yetkisini true çek
        setIsAuth(true);
        //kullanıcı bilgisini localstorage de sakla
        localStorage.setItem("token", data.user.refreshToken);
      });
  };
  return (
    <div className="container">
      <div className="auth">
        <h1>Chat Odası</h1>
        <p>Devam Etmek İçin Giriş Yapın</p>
        <button onClick={handleClick}>
          <img src="/g-logo.png" />
          <span>Google ile Gir</span>
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
