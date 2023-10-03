import React from "react";
import AttributeValuePair from "@/components/AttributeValuePair";
import { PlainMailTo } from "@/components/Email";
import { PlainCallTo } from "@/components/Phone";
import { PlainSiteLink } from "@/components/ExternalSite";

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
      {/* To keep in the same column */}
      <section className="w-full h-full mb-2 flex flex-col gap-1 items-start justify-center">
        <div className="w-full flex flex-col md:flex-row flex-wrap">
          {/* email */}
          {
            data?.email && <AttributeValuePair key={1} AttributeAndValue={{
              attribute: "Email",
              value: <PlainMailTo email={data.email} />
            }} />
          }
          {/* phone */}
          {
            data?.phoneNumber && <AttributeValuePair key={""} AttributeAndValue={{
              attribute: "Phone",
              value: <PlainCallTo countryCode={data.phoneNumber?.countryCOde ?? ""} number={data.phoneNumber.number} />
            }} />
          }
          {/* website */}
          {
            data?.website && <AttributeValuePair key={3} AttributeAndValue={{
              attribute: "Website",
              value: <PlainSiteLink siteUrl={`https://${data.website}`} displayText={data.website} />
            }} />
          }
          {/* github */}
          {
            data?.githubUserName && <AttributeValuePair key={3} AttributeAndValue={{
              attribute: "Github",
              value: <PlainSiteLink siteUrl={`https://github.com/${data.githubUserName}`} displayText={data.githubUserName} />
            }} />
          }
        </div>

        {data?.address && <AttributeValuePair key={56} AttributeAndValue={{
          attribute: "Address",
          value: data.address
        }}
          style={{ maxWidth: "100%", width: "100%" }}
          valueStyle={{ maxWidth: "100%", width: "100%" }} />}
      </section>
    </div>
  );
};

export default ContactInformation;
