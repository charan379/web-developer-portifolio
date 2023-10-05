import React from "react";


const Summary: React.FC<ComponentProps> = (props) => {

  const { className, style } = props;
  return (
    <div className={className ?? "pb-2 border-b-4 border-gray-300"} style={style}>
      {/* To keep in the same column */}
      <section className="break-inside-avoid">
        <h2 className="mb-2 text-xl font-bold tracking-widest text-gray-700 print:font-normal">
          SUMMARY
        </h2>

        <section className="mb-2 break-inside-avoid">
          <p className="mt-2 px-4 leading-normal text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem
          </p>
        </section>
      </section>
    </div>
  );
};

export default Summary;
