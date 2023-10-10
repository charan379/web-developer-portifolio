import React from "react";
import { PlainMailTo } from "@/components/Email";
import { PlainCallTo } from "@/components/Phone";
import { PlainSiteLink } from "@/components/ExternalSite";
import ContactItem from "./ContactItem";
import Heading1 from "../Headings/heading1";
import Text from "@/components/Text";

const ContactInformation: React.FC<ComponentProps> = (props) => {
  const data = {
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
      <Heading1>Details</Heading1>
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
          <Text>
            {data.address}
          </Text>
        </ContactItem>
      </div>
    </div>
  );
};

export default ContactInformation;
