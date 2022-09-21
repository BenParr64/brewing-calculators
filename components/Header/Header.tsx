import * as React from "react";
import ContactBanner from "../ContactBanner/ContactBanner";
import InfoBanner from "../InfoBanner/InfoBanner";
import Navigation from "../Navigation/Navigation";

const links = [
  {
    name: "Shop",
    link: "http://localhost:8000",
    subLinks: [
      {
        subLinkName: "test",
        subLinkLink: "test",
      },
    ],
  },
];

const Header = () => {
  return (
    <>
    <InfoBanner/>
    <ContactBanner/>
    <Navigation/>
    </>
  );
};

export default Header;
