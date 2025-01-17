import React from "react";
import login from "../../Media/img/login.png";
import { Link } from "react-router-dom";
import { AiFillInstagram, AiOutlineGooglePlus } from "react-icons/ai";
import UseAuth from "../../Shear/UseAuth/UseAuth";
const Ragistration = () => {
  const { singUpWithEmail, singInWithGoogle, updateUserProfile, SetUser } =
    UseAuth();
  const singInWithEmail = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    // const photoUrl = form.photourl.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,email,password)
    console.log(name,email,password);
    singUpWithEmail(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        SetUser(user);
        // setError("");
        form.reset();
        updateUser(name);
      })
      .catch((error) => {
        const errorMessage = error.message;
        // setError(errorMessage);
        form.reset();
      });
  };
  const updateUser = (name) => {
    const profile = {
      displayName: name,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="md:mx-10 mx-3">
      <div className="my-10 grid md:grid-cols-2 gap-5 items-center">
        <div>
          <img src={login} alt="" />
        </div>
        <div>
          <h4 className="capitalize text-3xl font-medium text-center mb-10">
            please create your account
          </h4>
          <form onSubmit={singInWithEmail}>
            <input
              type="text"
              name="name"
              className="w-full outline-none bg-inherit border-b px-3 py-2"
              placeholder="Type Your Name"
            />
            <input
              type="email"
              name="email"
              className="w-full mt-2 outline-none bg-inherit border-b px-3 py-2"
              placeholder="Type Your Email"
            />
            <input
              type="password"
              name="password"
              className="w-full outline-none bg-inherit border-b px-3 py-2 mt-2"
              placeholder="Type Your Password"
            />

            <input
              className="btn btn-neutral mt-5"
              type="submit"
              value="sing up"
            />
            <Link className="btn btn-accent ml-5" to="/login">
              login
            </Link>
          </form>
          <div className="flex">
            <button onClick={singInWithGoogle} className="flex mt-10 items-center lowercase btn btn-accent">
              <AiOutlineGooglePlus className="text-2xl -mr-1"></AiOutlineGooglePlus>
              oogle
            </button>
            <button className="flex mt-10 items-center ml-5 btn btn-accent">
              <AiFillInstagram className="text-2xl -mr-1"></AiFillInstagram>
              instagram
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ragistration;
