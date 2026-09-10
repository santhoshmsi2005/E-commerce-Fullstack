import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const GoogleAuthButton = () => {
  const navigate = useNavigate();

  const handleSuccess = (credentialResponse) => {
    const user = jwtDecode(credentialResponse.credential);

    localStorage.setItem("google_user", JSON.stringify(user));

    navigate("/products");
  };

  return (
    <div className="mt-5 flex justify-center">
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={() => console.log("Google Login Failed")}
      />
    </div>
  );
};

export default GoogleAuthButton;