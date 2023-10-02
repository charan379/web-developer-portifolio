import React from "react";
import Header from "./Components/Header";
import ContactInformation from "./Components/Contact";
import Summary from "./Components/Summary";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";

const ResumeT1 = () => {
  return (
    <>
      <div>
        <section className="max-w-3xl p-3 mx-auto mb-10 bg-gray-100 border-[3px] border-gray-500 print:border-0 page print:max-w-letter print:max-h-letter print:mx-0 print:my-0 lg:h-letter md:max-w-letter md:h-letter xsm:p-8 sm:p-9 md:p-16 lg:mt-6 rounded-xl print:bg-white">
          <Header />

          <section className="col-gap-8 md:col-count-2 print:col-count-2 md:h-letter-col-full print:h-letter-col-full col-fill-balance">
            <section className="flex-col">
              <ContactInformation />
              <Summary />
              <Education />
              <Skills />
              <Experience />
            </section>
          </section>
        </section>
      </div>
    </>
  );
};

export default ResumeT1;
