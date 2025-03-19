import React from "react";

export default function Aichat() {
  return (
    <>
      <div className="bg-white p-4 rounded shadow-lg max-w-md mx-auto border border-gray-300">
        <div className="flex flex-col  space-y-4">
          <div className="bg-blue-100 text-blue-800 p-2 rounded-lg">
            <div className="flex justify-between items-center">
              <p className="text-sm font-bold">John Doe</p>
              <p className="text-xs">12:45 PM</p>
            </div>
            <p className="text-sm">
              Hi John, here's what the AI has suggested for you:
            </p>
          </div>
          <div className="bg-gray-100 text-gray-800 p-3 rounded-lg">
            <div className="flex justify-between items-center">
              <p className="text-sm font-bold">AI</p>
              <p className="text-xs">12:46 PM</p>
            </div>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet
              aliquam vel, ullamcorper sit amet ligula.
            </p>
          </div>
          <div className="bg-gray-100 text-gray-800 p-3 rounded-lg">
            <div className="flex justify-between items-center">
              <p className="text-sm font-bold">AI</p>
              <p className="text-xs">12:46 PM</p>
            </div>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet
              aliquam vel, ullamcorper sit amet ligula.
            </p>
          </div>
        </div>
        <div className="mt-4 flex">
          <textarea
            className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
            placeholder="Type your message here..."
          ></textarea>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">
            Send
          </button>
        </div>
      </div>
    </>
  );
}

