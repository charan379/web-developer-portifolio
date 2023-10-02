import React from "react";

const Summary = () => {
  return (
    <section className="pb-2 sm:pb-4 mt-0 border-b-4 border-gray-300 first:mt-0">
      {/* To keep in the same column */}
      <section className="break-inside-avoid">
        <h2 className="mb-2 text-xl font-bold tracking-widest text-gray-700 print:font-normal">
          SUMMARY
        </h2>

        <section className="mb-2 break-inside-avoid">
          <p className="mt-2 leading-normal text-gray-700 text-md">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem
          </p>
        </section>
      </section>
    </section>
  );
};

export default Summary;
