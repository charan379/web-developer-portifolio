import React from "react";
import { PlainMailTo } from "@/components/Email";
import { PlainCallTo } from "@/components/Phone";
import { PlainSiteLink } from "@/components/ExternalSite";
import ContactItem from "./ContactItem";

const ContactInformation: React.FC<ComponentProps> = (props) => {
  const data = {
    githubUserName: 'charan379',
    website: 'charanteja.me',
    email: 'charanteja@gmail.com',
    phoneNumber: {
      countryCOde: '+91',
      number: '9876543210'
    },
    address: "29-3434, Jalganna street, Sinucha, Karihmi, AP - 520833"
  }
  // Contact Information
  return (
    <div className={props?.className ?? "pb-2"}>
      <div className="w-full flex flex-col md:flex-row flex-wrap gap-2 sm:gap-3">
        <ContactItem attribute="Email" value={<PlainMailTo email={data.email} />} key={1} />
        <ContactItem attribute="Phone" value={<PlainCallTo countryCode={data.phoneNumber.countryCOde} number={data.phoneNumber.number} />} key={2} />
        <ContactItem attribute="Github" value={<PlainSiteLink siteUrl={`https://github.com/${data.githubUserName}`} displayText={data.githubUserName} />} key={3} />
        <ContactItem attribute="Website" value={<PlainSiteLink siteUrl={`https://${data.website}`} displayText={data.website} />} key={4} />
        <ContactItem attribute="Address" value={data.address} key={5} />
      </div>

    </div>
  );
};


export default ContactInformation;
