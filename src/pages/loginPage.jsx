import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../components/login/login";
import { useAuth } from "../services/Auth/AuthContext";

function LoginPage() {
  const { isUserLoggedIn, setIsUserLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    const token = sessionStorage.getItem('token');
    setIsUserLoggedIn(!!token);
  };

  useEffect(() => {
    if (isUserLoggedIn) {
      navigate("/home");
    }
  }, [isUserLoggedIn, navigate]);

  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        {!isUserLoggedIn ? (
          <Login onLoginSuccess={handleLoginSuccess} /> 
        ) : (
          null
        )}
      </div>
    </div>
  );
}

export default LoginPage;