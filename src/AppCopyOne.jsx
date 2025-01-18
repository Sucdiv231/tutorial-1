import React from "react";

export default function App() {
  return (
    <div className="bg-red-200 h-screen flex flex-col items-center justify-center text-yellow-900">
      {/* Write Header, Paragraph, and button */}

      <h1 className="font-bold text-3xl mb-10 ">Hello Bruh</h1>
      <p className="max-w-[60%] bg-white p-10 rounded-[0.5rem]">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat enim
        voluptate, molestias dolore aliquam, error beatae deserunt iste quae
        fugiat voluptatibus aliquid nemo illum. Recusandae ad quae suscipit
        repudiandae. Tenetur!
      </p>
      <button className="py-4 px-6 bg-white p-4 rounded-xl mt-10 hover:bg-opacity-50 transition duration-500 ease-in">
        Submit Bruh
      </button>
    </div>
  );
}
