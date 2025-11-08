import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const navigate = useNavigate();

  const [emailId, setEmailId] = useState("kdbeast@gmail.com");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = async () => {
    if (emailId === "kdbeast@gmail.com" && password === "beast") {
      dispatch(addUser({ emailId, password }));
      navigate("/feed");
    } else {
      console.error("Incorrect Id and Password");
    }
  };

  return (
    <div className="flex justify-center my-50">
      <div className="card card-border bg-base-300 w-96">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div className="my-4">
            <label className="form-control w-full max-w-xs">
              <div className="label my-1">
                <span className="label-text">Email Id</span>
              </div>
              <input
                type="text"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label my-1">
                <span className="label-text">Password</span>
              </div>
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          <div className="card-actions justify-center">
            <button onClick={handleLogin} className="btn btn-primary">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
