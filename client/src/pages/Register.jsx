import axios from "axios";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await axios.post("http://localhost:3000/register", {
        username,
        email,
        password,
      });
      Swal.fire({
        title: "Account Registered!",
        text: "Register account success! Please log in.",
        icon: "success",
      });
      navigate("/login");
    } catch (error) {
      console.log(error.response?.data.message || error.message);
      Swal.fire({
        title: "Error!",
        text: error.response?.data.message || error.message,
        icon: "error",
        confirmButtonText: "Okay",
      });
    } finally {
      setLoading(false);
    }
  };
  async function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    const googleToken = response.credential;

    try {
      let { data } = await axios.post("http://localhost:3000/login/google", {
        googleToken,
      });
      localStorage.setItem("access_token", data.access_token);
      Swal.fire({
        title: "Logged In!",
        text: "Log in using Google account success!",
        icon: "success",
      });
      navigate("/");
    } catch (error) {
      console.log(error.response?.data.message || error.message);
      Swal.fire({
        title: "Error!",
        text: error.response?.data.message || error.message,
        icon: "error",
      });
    }
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "104930370327-iq20c5cqcgmrb7pbiuepevcumqptp73o.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" } // customization attributes
    );
  }, []);
  return (
    <section className="vh-100" style={{ backgroundColor: "#508bfc" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card shadow-2-strong"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5">
                <h3 className="mb-5">Register Your Account</h3>
                <form onSubmit={handleOnSubmit}>
                  <div data-mdb-input-init="" className="form-outline mb-4">
                    <label className="form-label" htmlFor="typeEmailX-2">
                      User Name
                    </label>
                    <input
                      type="text"
                      id="username"
                      className="form-control form-control-lg"
                      value={username}
                      onChange={(event) => setUsername(event.target.value)}
                    />
                  </div>
                  <div data-mdb-input-init="" className="form-outline mb-4">
                    <label className="form-label" htmlFor="typeEmailX-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="typeEmailX-2"
                      className="form-control form-control-lg"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                  <div data-mdb-input-init="" className="form-outline mb-4">
                    <label className="form-label" htmlFor="typePasswordX-2">
                      Password
                    </label>
                    <input
                      type="password"
                      id="typePasswordX-2"
                      className="form-control form-control-lg"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </div>
                  {loading ? (
                    <div className="spinner-border my-3 card border-0"></div>
                  ) : (
                    ""
                  )}
                  <div className="d-grid gap-2">
                    <button
                      className="btn btn-outline-primary btn-lg btn-block"
                      type="submit"
                    >
                      Register
                    </button>
                  </div>
                  <p className="mt-3 text-center">
                    Do you have an account?{" "}
                    <Link to={"/login"} className="link-info">
                      Login
                    </Link>
                  </p>
                </form>
                <hr className="my-2" />
                <p className="text-center">or</p>
                <div className="container mt-4">
                  <div className="card border-0">
                    <div id="buttonDiv" className="mx-auto gap-2">
                      Sign in with google
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
