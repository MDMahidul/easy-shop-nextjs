import React from "react";
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = ({ from }) => {
  const handleGoogleLogin = async () => {};
  return (
    <button
      onClick={handleGoogleLogin}
      type="button"
      className="btn btn-primary mt-5 mx-auto"
    >
      <FcGoogle className="text-3xl mr-3" /> Continue with google
    </button>
  );
};

export default GoogleLogin;
