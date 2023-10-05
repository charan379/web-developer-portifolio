import React from "react";
import { PlainMailTo } from "@/components/Email";
import { PlainCallTo } from "@/components/Phone";
import { PlainSiteLink } from "@/components/ExternalSite";
import ContactItem from "./ContactItem";

const ContactInformation: React.FC<ComponentProps> = (props) => {
  const data = {
    githubUserName: "charan379",
    website: "charanteja.me",
    email: "charanteja@gmail.com",
    phoneNumber: {
      countryCOde: "+91",
      number: "9876543210",
    },
    address: "29-3434, Jalganna street, Sinucha, Karihmi, AP - 520833",
  };
  // Contact Information
  return (
    <div className={props?.className ?? "pb-2"}>
      <div className="w-full flex flex-col md:flex-row flex-wrap gap-2 sm:gap-3">
        {/*  */}
        <ContactItem attribute="Email" key={"c1"}>
          <PlainMailTo email={data.email} key={"pmt"} />
        </ContactItem>

        {/*  */}
        <ContactItem attribute="Phone" key={"c2"}>
          {/*  */}
          <PlainCallTo
            countryCode={data.phoneNumber.countryCOde}
            number={data.phoneNumber.number}
            key={"pct"}
          />
        </ContactItem>

        {/*  */}
        <ContactItem attribute="Github" key={"c3"}>
          {/*  */}
          <PlainSiteLink
            siteUrl={`https://github.com/${data.githubUserName}`}
            displayText={data.githubUserName}
            key={"psl1"}
          />
        </ContactItem>

        {/*  */}
        <ContactItem attribute="Website" key={"c4"}>
          {/*  */}
          <PlainSiteLink
            siteUrl={`https://${data.website}`}
            displayText={data.website}
            key={"psl2"}
          />
        </ContactItem>

        {/*  */}
        <ContactItem attribute="Address" key={"c5"}>
          {data.address}
        </ContactItem>
      </div>
    </div>
  );
};

export default ContactInformation;
