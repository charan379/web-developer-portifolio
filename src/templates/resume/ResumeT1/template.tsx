import React from "react";

const Template = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 p-4">
        {/* Full-width sections */}
        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <div className="bg-gray-200 p-4 mb-4">
            <h2>Section 1</h2>
            <p>This is the content for section 1.</p>
          </div>

          <div className="bg-gray-300 p-4 mb-4">
            <h2>Section 2</h2>
            <p>This is the content for section 2.</p>
          </div>

          <div className="bg-gray-400 p-4 mb-4">
            <h2>Section 3</h2>
            <p>This is the content for section 3.</p>
          </div>
        </div>

        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          {/* Full-width section */}
          <div className="bg-gray-500 p-4 mb-4">
            <h2>Section 4 (Full Width)</h2>
            {/* 1/2 cols */}
            <div className="grid grid-rows-3 grid-flow-col-dense gap-4">
              <div className="bg-gray-600 p-4">
                <h3>Child 1</h3>
                <p>Child 1 content.</p>
              </div>
              <div className="bg-gray-700 p-4">
                <h3>Child 2</h3>
                <p>Child 2 content.</p>
              </div>
              <div className="bg-gray-700 p-4">
                <h3>Child 3</h3>
                <p>Child 3 content.</p>
              </div>
              <div className="bg-gray-700 p-4">
                <h3>Child 4</h3>
                <p>Child 4 content.</p>
              </div>
              <div className="min-w-[50%] bg-gray-700 p-4">
                <h3>Child 5</h3>
                <p>Child 5 content.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <div className="bg-gray-200 p-4 mb-4">
            <h2>Section 5</h2>
            <p>This is the content for section 5.</p>
          </div>

          <div className="bg-gray-300 p-4 mb-4">
            <h2>Section 6</h2>
            <p>This is the content for section 6 .</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template;
