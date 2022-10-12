import React from "react";
import "./Navbar.css";
import logo1 from "../assets/LARGE_PIN2.png";
import { useEffect, useState } from "react";
import "./fonts.css";
import { Link } from "react-scroll";
const stripes = [
  { id: 0, hexColor: "#A6C038", text: "Home", to: "home" },
  { id: 1, hexColor: "#E2863E", text: "Events", to: "events" },
  { id: 2, hexColor: "#C45633", text: "Medallion", to: "medallion" },
  { id: 3, hexColor: "#524021", text: "T-Shirt", to: "tshirt" },
  {
    id: 4,
    hexColor: "#669FA1",
    text: "BDP",
    to: "https://bdpstout.com",
    bdpLink: true,
  },
];

function StripeList(props) {
  //const numbers = props.numbers;
  /*
    This function pulls color JSON values through an prop(erty) for 
    the stripes that slide in when the React App is rendered 
    and has correlating ID values to support react mapping functionality.
    Returns the listStripes value
  */
  const ds = props.jsonDataSet;
  const listStripes = ds.map((de) =>
    de.id !== 4 ? (
      <Link
        to={de.to}
        spy={false}
        smooth={true}
        offset={-255}
        duration={500}
        className="reax-link navLink d-block stripe p-2 nunito"
        key={de.id}
        style={{ backgroundColor: de.hexColor }}
      >
        {de.text}
      </Link>
    ) : (
      <a
        href={de.to}
        target="_blank"
        rel="noopener noreferrer"
        className="reax-link navLink d-block stripe p-2 nunito"
        key={de.id}
        style={{ backgroundColor: de.hexColor }}
      >
        {de.text}
      </a>
    )
  );

  return listStripes;
}

function Navbar() {
  const [isShrunk, setShrunk] = useState(false);
  useEffect(() => {
    const handler = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 80 ||
            document.documentElement.scrollTop > 80)
        ) {
          return true;
        }
        if (
          isShrunk &&
          document.body.scrollTop < 80 &&
          document.documentElement.scrollTop < 80
        ) {
          return false;
        }

        return isShrunk;
      });
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <div className="container-fluid sticky-top">
        <div>
          <img
            src={logo1}
            alt="logo flower"
            className={isShrunk ? "logoOnScroll fixed-top" : "logo fixed-top"}
          ></img>
        </div>
        <div className={isShrunk ? "stripeRetract" : "stripeExpand"}>
          <StripeList jsonDataSet={stripes} />
        </div>
      </div>
    </>
  );
}
export default Navbar;
