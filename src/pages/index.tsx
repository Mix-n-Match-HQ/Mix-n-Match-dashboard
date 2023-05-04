import Image from "next/image";
import classnames from "classnames";
import { useState } from "react";

export default function Home() {
  const [bgColor, setbgColor] = useState("");
  const [buttonColor, setbuttonColor] = useState("");
  const [textColor, settextColor] = useState("");
  const [titleColor, settitleColor] = useState("");
  const [inputName, setInputName] = useState("");
  const baseUrl = "https://who-is-this-huddle01.vercel.app/";
  const [mUrl, setUrl] = useState(baseUrl);
  const [iframe, setIframe] = useState(
    ''
  );

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(iframe);
    setCopied(true);
  };



  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputName(event.target.value);
  }

  function generateIFrame() {
    let uri = baseUrl + "?" + "bg=" + bgColor + "&" + "btn=" + buttonColor + "&" +"txt=" + textColor + "&" + "cname=" + inputName + "&" + "titlecolor=" + titleColor;
    let iframe = '<iframe src="'+ uri + '" allow="camera; microphone" name="Whoisthis" scrolling="no" height="600px"></iframe>'
    setUrl(uri);
    setIframe(iframe);
    setbgColor('')
    setbuttonColor('')
    settextColor('')
    settitleColor('')
    
  }

  return (
    <div className="text-white">
      <div className=" flex items-center text-white fixed top-0 left-0">
        <div className="p-4">
          <Image
            className="rounded-2xl"
            src="/Whoisthis.jpg"
            alt="alt text"
            width={150}
            height={50}
          />
        </div>
        <span className="text-2xl font-bold ml-2">Dashboard</span>
      </div>

      {buttonColor || textColor || bgColor || titleColor ? (
        <div className=" flex items-center min-w-0 text-white fixed right-0 bottom-1/3 ">
        <div className="bg-white p-6 rounded-lg text-blue-900 opacity-90">
          My Selection - <br /><br />
          Title Color :
          <span className={`ml-2 py-2 px-10 rounded-lg ${(titleColor === 'text-black') ? 'bg-black' : (titleColor === 'text-white') ? 'bg-white' : ''} mr-6 mb-4`} /><br /><br />
          Background Color :
          <span className={`ml-2 py-2 px-10 rounded-lg ${bgColor} mr-6 mb-4`}/><br /><br />
          Button Color :
          <span className={`ml-2 py-2 px-10 rounded-lg ${buttonColor} mr-6 mb-4`} /><br /><br />
          Text Color :
          <span className={`ml-2 py-2 px-10 rounded-lg ${(textColor === 'text-black') ? 'bg-black' : (textColor === 'text-white') ? 'bg-white' : ''} mr-6 mb-4`} /><br /><br />
          
        </div>
      </div>
      ) : null}

      

      <div className="flex flex-col py-4 pt-32 px-4 md:px-32">
        <h1 className="text-2xl p-4">Settings</h1>
        <div className="bg-white p-8 bg-opacity-20 border-blue-500 border-2 shadow-lg rounded-lg overflow-hidden w-full h-auto mb-4">
          <span className="text-2xl p-4 pl-1">Your Community Name : </span>
          <input
            type="text"
            value={inputName}
            onChange={handleInputChange}
            className="border-2 border-gray-300 p-2 text-blue-500 rounded-md"
          />
          <span className="text-xl p-4 pl-1 ml-8">Title Color:</span>
          <button
            onClick={() => {
              settitleColor("text-black");
            }}
            className="py-6 px-10 rounded-lg bg-black  mr-6 "
          />
          <button
            onClick={() => {
              settitleColor("text-white");
            }}
            className="py-6 px-10 rounded-lg bg-white mr-6 "
          />
          <h1 className="text-2xl p-4 pl-1">Background Color</h1>
          <button
            onClick={() => {
              setbgColor("bg-gray-100");
            }}
            className="py-6 px-10 rounded-lg bg-gray-100 mr-6 mb-4"
          />
          <button
            onClick={() => {
              setbgColor("bg-red-100");
            }}
            className="py-6 px-10 rounded-lg bg-red-100 mr-6 mb-4"
          />
          <button
            onClick={() => {
              setbgColor("bg-orange-100");
            }}
            className="py-6 px-10 rounded-lg bg-orange-100 mr-6 mb-4"
          />
          <button
            onClick={() => {
              setbgColor("bg-yellow-100");
            }}
            className="py-6 px-10 rounded-lg bg-yellow-100 mr-6 mb-4"
          />
          <button
            onClick={() => {
              setbgColor("bg-green-100");
            }}
            className="py-6 px-10 rounded-lg bg-green-100 mr-6 mb-4"
          />
          <button
            onClick={() => {
              setbgColor("bg-sky-100");
            }}
            className="py-6 px-10 rounded-lg bg-sky-100 mr-6 mb-4"
          />
          <button
            onClick={() => {
              setbgColor("bg-blue-100");
            }}
            className="py-6 px-10 rounded-lg bg-blue-100 mr-6 mb-4"
          />
          <button
            onClick={() => {
              setbgColor("bg-purple-100");
            }}
            className="py-6 px-10 rounded-lg bg-purple-100 mr-6 mb-4"
          />
          <button
            onClick={() => {
              setbgColor("bg-pink-100");
            }}
            className="py-6 px-10 rounded-lg bg-pink-100 mr-6 mb-4"
          />
          <button
            onClick={() => {
              setbgColor("bg-white");
            }}
            className="py-6 px-10 rounded-lg bg-white mr-6 mb-4"
          />
          <br />
          <button
            onClick={() => {
              setbgColor("bg-gray-500");
            }}
            className="py-6 px-10 rounded-lg bg-gray-500 mr-6 mb-4"
          />
          <button
            onClick={() => {
              setbgColor("bg-red-500");
            }}
            className="py-6 px-10 rounded-lg bg-red-500 mr-6 mb-4"
          />
          <button
            onClick={() => {
              setbgColor("bg-orange-500");
            }}
            className="py-6 px-10 rounded-lg bg-orange-500 mr-6 mb-4"
          />
          <button
            onClick={() => {
              setbgColor("bg-yellow-500");
            }}
            className="py-6 px-10 rounded-lg bg-yellow-500 mr-6 mb-4"
          />
          <button
            onClick={() => {
              setbgColor("bg-green-500");
            }}
            className="py-6 px-10 rounded-lg bg-green-500 mr-6 mb-4"
          />
          <button
            onClick={() => {
              setbgColor("bg-sky-500");
            }}
            className="py-6 px-10 rounded-lg bg-sky-500 mr-6 mb-4"
          />
          <button
            onClick={() => {
              setbgColor("bg-blue-500");
            }}
            className="py-6 px-10 rounded-lg bg-blue-500 mr-6 mb-4"
          />
          <button
            onClick={() => {
              setbgColor("bg-purple-500");
            }}
            className="py-6 px-10 rounded-lg bg-purple-500 mr-6 mb-4"
          />
          <button
            onClick={() => {
              setbgColor("bg-pink-500");
            }}
            className="py-6 px-10 rounded-lg bg-pink-500 mr-6 mb-4"
          />
          <button
            onClick={() => {
              setbgColor("bg-black");
            }}
            className="py-6 px-10 rounded-lg bg-black mr-6 mb-4"
          />
          <h1 className="text-2xl p-4 pl-1">Button Color</h1>
          <button
            onClick={() => {
              setbuttonColor("bg-gray-100");
            }}
            className="py-6 px-10 rounded-lg bg-gray-100 mr-6 mb-4"
          />
          <button
            onClick={() => {
              setbuttonColor("bg-red-100");
            }}
            className="py-6 px-10 rounded-lg bg-red-100 mr-6 mb-4"
          />
          <button
            onClick={() => {
              setbuttonColor("bg-orange-100");
            }}
            className="py-6 px-10 rounded-lg bg-orange-100 mr-6 mb-4"
          />
          <button
            onClick={() => {
              setbuttonColor("bg-yellow-100");
            }}
            className="py-6 px-10 rounded-lg bg-yellow-100 mr-6 mb-4"
          />
          <button
            onClick={() => {
              setbuttonColor("bg-green-100");
            }}
            className="py-6 px-10 rounded-lg bg-green-100 mr-6 mb-4"
          />
          <button
            onClick={() => {
              setbuttonColor("bg-sky-100");
            }}
            className="py-6 px-10 rounded-lg bg-sky-100 mr-6 mb-4"
          />
          <button
            onClick={() => {
              setbuttonColor("bg-blue-100");
            }}
            className="py-6 px-10 rounded-lg bg-blue-100 mr-6 mb-4"
          />
          <button
            onClick={() => {
              setbuttonColor("bg-purple-100");
            }}
            className="py-6 px-10 rounded-lg bg-purple-100 mr-6 mb-4"
          />
          <button
            onClick={() => {
              setbuttonColor("bg-pink-100");
            }}
            className="py-6 px-10 rounded-lg bg-pink-100 mr-6 mb-4"
          />
          <button
            onClick={() => {
              setbuttonColor("bg-white");
            }}
            className="py-6 px-10 rounded-lg bg-white mr-6 mb-4"
          />
          <br />
          <button
            onClick={() => {
              setbuttonColor("bg-gray-500");
            }}
            className="py-6 px-10 rounded-lg bg-gray-500 mr-6 mb-4"
          />
          <button
            onClick={() => {
              setbuttonColor("bg-red-500");
            }}
            className="py-6 px-10 rounded-lg bg-red-500 mr-6 mb-4"
          />
          <button
            onClick={() => {
              setbuttonColor("bg-orange-500");
            }}
            className="py-6 px-10 rounded-lg bg-orange-500 mr-6 mb-4"
          />
          <button
            onClick={() => {
              setbuttonColor("bg-yellow-500");
            }}
            className="py-6 px-10 rounded-lg bg-yellow-500 mr-6 mb-4"
          />
          <button
            onClick={() => {
              setbuttonColor("bg-green-500");
            }}
            className="py-6 px-10 rounded-lg bg-green-500 mr-6 mb-4"
          />
          <button
            onClick={() => {
              setbuttonColor("bg-sky-500");
            }}
            className="py-6 px-10 rounded-lg bg-sky-500 mr-6 mb-4"
          />
          <button
            onClick={() => {
              setbuttonColor("bg-blue-500");
            }}
            className="py-6 px-10 rounded-lg bg-blue-500 mr-6 mb-4"
          />
          <button
            onClick={() => {
              setbuttonColor("bg-purple-500");
            }}
            className="py-6 px-10 rounded-lg bg-purple-500 mr-6 mb-4"
          />
          <button
            onClick={() => {
              setbuttonColor("bg-pink-500");
            }}
            className="py-6 px-10 rounded-lg bg-pink-500 mr-6 mb-4"
          />
          <button
            onClick={() => {
              setbuttonColor("bg-black");
            }}
            className="py-6 px-10 rounded-lg bg-black mr-6 mb-4"
          />
          <h1 className="text-2xl p-4 pl-1">Text Color</h1>
          <button
            onClick={() => {
              settextColor("text-white");
            }}
            className="py-6 px-10 rounded-lg bg-white mr-6 mb-4"
          />
          <button
            onClick={() => {
              settextColor("text-black");
            }}
            className="py-6 px-10 rounded-lg bg-black mr-6 mb-4"
          />{" "}
          <br />
          <button
            onClick={generateIFrame}
            className="py-4 px-10 rounded-lg bg-blue-500 mt-8"
          >
            Generate
          </button>
        </div>
        <h1 className="text-2xl p-4">iFrame Code Snippit</h1>
        <div className="bg-white p-8 bg-opacity-20 text-sm shadow-lg border-blue-500 border-2 rounded-lg overflow-hidden w-full h-auto mb-8">
          {iframe}
          <br />
          <button
            onClick={handleCopy}
            className="py-2 px-4 rounded-lg bg-blue-500 mt-8"
          >
            {copied ? "Copied !" : "Copy"}
          </button>
        </div>
        <h1 className="text-2xl p-4">Output</h1>
        <iframe
          className=" border-blue-500 border-2 shadow-lg rounded-lg"
          src={mUrl}
          allow="camera; microphone"
          name="Whoisthis"
          scrolling="no"
          height="600px"
        ></iframe>
      </div>
    </div>
  );
}
