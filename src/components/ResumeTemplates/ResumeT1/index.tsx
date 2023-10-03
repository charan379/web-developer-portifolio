import React from "react";
import Header from "./Components/Header";
import ContactInformation from "./Components/Contact";
import Summary from "./Components/Summary";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";

const ResumeT1 = () => {
  return (
    <div className="mx-auto my-5 container max-w-5xl bg-slate-50 grid grid-cols-1 gap-4 p-4 rounded-xl border-stone-700 border-4">
      {/* Full-width 3 sections */}
      <div className="col-span-1 md:col-span-1 lg:col-span-1">
        {/* section 1 */}
        <Header className="w-full inline-flex items-center justify-between align-top mb-2 border-b-4 border-gray-300" />

        <div className="bg-gray-200 p-4 mb-4">
          <h2>Section 2</h2>
          <p>This is the content for section 2.</p>
        </div>

        <div className="bg-gray-200 p-4 mb-4">
          <h2>Section 3</h2>
          <p>This is the content for section 3.</p>
        </div>
      </div>

      <div className="col-span-1 md:col-span-1 lg:col-span-1">
        {/* Full-width section */}
        <div className="bg-gray-200 p-4 mb-4">
          <h2>Section 4</h2>
          {/* 1/2 cols */}
          <div className="max-h-[340px] flex flex-col flex-wrap gap-4 overflow-hidden">
            <div className="max-w-[50%] min-w-[50%] bg-gray-300 p-4">
              <h3>Child 1</h3>
              <p>Child 1 content.</p>
              <p>Child 1 content.</p>
              <p>Child 1 content.</p>
              <p>Child 1 content.</p>
              <p>Child 1 content.</p>
              <p>Child 1 content.</p>
              <p>Child 1 content.</p>
              <p>Child 1 content.</p>
              <p>Child 1 content.</p>
            </div>
            <div className="max-w-[50%] min-w-[50%] bg-gray-300 p-4">
              <h3>Child 2</h3>
              <p>Child 2 content.</p>
            </div>
            <div className="max-w-[50%] min-w-[50%] bg-gray-300 p-4">
              <h3>Child 3</h3>
              <p>Child 3 content.</p>
            </div>
            <div className="max-w-[50%] min-w-[50%] bg-gray-300 p-4">
              <h3>Child 4</h3>
              <p>Child 4 content.</p>
            </div>
            <div className="max-w-[50%] min-w-[50%] bg-gray-300  p-4">
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

        <div className="bg-gray-200 p-4 mb-4">
          <h2>Section 6</h2>
          <p>This is the content for section 6 .</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeT1;
