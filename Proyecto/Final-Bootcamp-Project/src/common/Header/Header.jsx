import { useState } from "react";
import { ButtonNav } from "../ButtonNav/ButtonNav";
import "./Header.css";
import Search from "../Search/Search";
// import { makeAutoObservable } from "mobx"

export const Header = ({ apiKey }) => {

  const [token, setToken] = useState("");

  return (
    <div className="headerDesign">

      <ButtonNav destination={"/"} name={"Home"} />

      <ButtonNav destination={"/films"} name={"Films"} />
      {token !== "" ? (
        <div className="headerNavDesign">
          <ButtonNav destination={"/profile"} name={"Profile"} />
          <ButtonNav destination={"/profile"} name={"Log out"} />
        </div>
      ) : (
        <div className="headerNavDesign">
          <ButtonNav destination={"/register"} name={"Register"} />
          <ButtonNav destination={"/login"} name={"Login"} />
        </div>
      )}

      <Search />
    </div>
  );
};
