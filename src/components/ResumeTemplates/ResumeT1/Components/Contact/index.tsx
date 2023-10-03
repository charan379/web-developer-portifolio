import React from "react";
import KeyValuePair from "../KeyValuePair";

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
            data?.email && <KeyValuePair key={1} keyValuePair={{
              key: "Email",
              value: <a href={`mailto:${data?.email}`}>
                {data.email}
              </a>
            }} />
          }
          {/* phone */}
          {
            data?.phoneNumber && <KeyValuePair key={""} keyValuePair={{
              key: "Phone",
              value: <a href={`tel:${data.phoneNumber?.countryCOde}${data.phoneNumber?.number}`}>
                {data.phoneNumber?.countryCOde} {data.phoneNumber?.number}
              </a>
            }} />
          }
          {/* website */}
          {
            data?.website && <KeyValuePair key={3} keyValuePair={{
              key: "Website",
              value: <a href={`https://${data.website}`}>
                {data.website}
              </a>
            }} />
          }
          {/* github */}
          {
            data?.githubUserName && <KeyValuePair key={3} keyValuePair={{
              key: "Github",
              value: <a href={`https://github.com/${data.githubUserName}`}>
                {data.githubUserName}
              </a>
            }} />
          }
        </div>

        {data?.address && <KeyValuePair key={56} keyValuePair={{
          key: "Address",
          value: data.address
        }}
          style={{ maxWidth: "100%", width: "100%" }}
          valueStyle={{ maxWidth: "100%", width: "100%" }} />}
      </section>
    </div>
  );
};

export default ContactInformation;
