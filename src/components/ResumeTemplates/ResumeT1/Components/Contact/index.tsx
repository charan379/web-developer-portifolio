import React from "react";

const ContactInformation = () => {
  {
  }
  // Contact Information
  return (
    <section className="pb-2">
      {/* To keep in the same column */}
      <section className="break-inside-avoid">
        <section className="pb-4 mb-2 border-b-4 border-gray-300 break-inside-avoid">
          <ul className="list-inside pr-7">
            <li className="mt-1 leading-normal text-black transition duration-100 ease-in text-gray-500 text-md hover:text-gray-700 print:">
              <a href="#" className="group">
                <span className="mr-2 text-lg font-semibold text-gray-700 leading-snugish">
                  Portfolio:
                </span>
                charanteja.me
                <span className="inline-block font-normal text-black transition duration-100 ease-in text-gray-500 print:text-black group-hover:text-gray-700 print:">
                  ↗
                </span>
              </a>
            </li>
            <li className="mt-1 leading-normal transition duration-100 ease-in text-gray-500 text-md hover:text-gray-700">
              <a href="https://github.com/charan379" className="group">
                <span className="mr-5 text-lg font-semibold text-gray-700 leading-snugish">
                  Github:
                </span>
                charan379
                <span className="inline-block font-normal text-black transition duration-100 ease-in text-gray-500 print:text-black group-hover:text-gray-700 print:">
                  ↗
                </span>
              </a>
            </li>

            <li className="mt-1 leading-normal transition duration-100 ease-in text-gray-500 text-md hover:text-gray-700">
              <a href="mailto:charanteja@gmail.com" className="group">
                <span className="mr-8 text-lg font-semibold text-gray-700 leading-snugish">
                  Email:
                </span>
                charanteja@gmail.com
                <span className="inline-block font-normal transition duration-100 ease-in text-gray-500 print:text-black group-hover:text-gray-700">
                  ↗
                </span>
              </a>
            </li>
            <li className="mt-1 leading-normal transition duration-100 ease-in text-gray-500 text-md hover:text-gray-700">
              <a href="tel:+919876543210">
                <span className="mr-5 text-lg font-semibold text-gray-700 leading-snugish">
                  Phone:
                </span>
                +91 9876543210
              </a>
            </li>
          </ul>
        </section>
      </section>
    </section>
  );
};

export default ContactInformation;
