import Image from "next/image";
import classnames from "classnames";
import { useState } from "react";

export default function Home() {
  const [bgColor, setbgColor] = useState("");
  const [buttonColor, setbuttonColor] = useState("");
  const [textColor, settextColor] = useState("");
  const baseUrl = "https://who-is-this-huddle01.vercel.app/";
  const [mUrl, setUrl] = useState(baseUrl);
  const [iframe, setIframe] = useState(
    '<iframe className=" border-blue-500 border-2 shadow-lg rounded-lg" src="https://who-is-this-huddle01.vercel.app/" allow="camera; microphone" name="Whoisthis" scrolling="no" height="600px"></iframe>'
  );

  function generateIFrame(){
    let uri = baseUrl + "?" + "bg=" + bgColor 
    console.log(uri)
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

      <div className="flex flex-col py-4 pt-32 px-4 md:px-32">
        <h1 className="text-2xl p-4">Settings</h1>
        <div className="bg-white p-8 bg-opacity-20 border-blue-500 border-2 shadow-lg rounded-lg overflow-hidden w-full h-auto mb-4">
        <h1 className="text-2xl p-4">Background Color</h1>
          <button onClick={()=>{setbgColor('bg-gray-100')}} className="py-6 px-10 rounded-lg bg-gray-100 mr-6 mb-4"/>
          <button onClick={()=>{setbgColor('bg-red-100')}} className="py-6 px-10 rounded-lg bg-red-100 mr-6 mb-4"/>
          <button onClick={()=>{setbgColor('bg-orange-100')}} className="py-6 px-10 rounded-lg bg-orange-100 mr-6 mb-4"/>
          <button onClick={()=>{setbgColor('bg-yellow-100')}} className="py-6 px-10 rounded-lg bg-yellow-100 mr-6 mb-4"/>
          <button onClick={()=>{setbgColor('bg-green-100')}} className="py-6 px-10 rounded-lg bg-green-100 mr-6 mb-4"/>
          <button onClick={()=>{setbgColor('bg-sky-100')}} className="py-6 px-10 rounded-lg bg-sky-100 mr-6 mb-4"/>
          <button onClick={()=>{setbgColor('bg-blue-100')}} className="py-6 px-10 rounded-lg bg-blue-100 mr-6 mb-4"/>
          <button onClick={()=>{setbgColor('bg-purple-100')}} className="py-6 px-10 rounded-lg bg-purple-100 mr-6 mb-4"/>
          <button onClick={()=>{setbgColor('bg-pink-100')}} className="py-6 px-10 rounded-lg bg-pink-100 mr-6 mb-4"/>
          <button onClick={()=>{setbgColor('bg-white')}} className="py-6 px-10 rounded-lg bg-white mr-6 mb-4"/>
          <br/>
          <button onClick={()=>{setbgColor('bg-gray-500')}} className="py-6 px-10 rounded-lg bg-gray-500 mr-6 mb-4"/>
          <button onClick={()=>{setbgColor('bg-red-500')}} className="py-6 px-10 rounded-lg bg-red-500 mr-6 mb-4"/>
          <button onClick={()=>{setbgColor('bg-orange-500')}} className="py-6 px-10 rounded-lg bg-orange-500 mr-6 mb-4"/>
          <button onClick={()=>{setbgColor('bg-yellow-500')}} className="py-6 px-10 rounded-lg bg-yellow-500 mr-6 mb-4"/>
          <button onClick={()=>{setbgColor('bg-green-500')}} className="py-6 px-10 rounded-lg bg-green-500 mr-6 mb-4"/>
          <button onClick={()=>{setbgColor('bg-sky-500')}} className="py-6 px-10 rounded-lg bg-sky-500 mr-6 mb-4"/>
          <button onClick={()=>{setbgColor('bg-blue-500')}} className="py-6 px-10 rounded-lg bg-blue-500 mr-6 mb-4"/>
          <button onClick={()=>{setbgColor('bg-purple-500')}} className="py-6 px-10 rounded-lg bg-purple-500 mr-6 mb-4"/>
          <button onClick={()=>{setbgColor('bg-pink-500')}} className="py-6 px-10 rounded-lg bg-pink-500 mr-6 mb-4"/>
          <button onClick={()=>{setbgColor('bg-black')}} className="py-6 px-10 rounded-lg bg-black mr-6 mb-4"/>
          <h1 className="text-2xl p-4">Button Color</h1>
          <button onClick={()=>{setbgColor('bg-gray-100')}} className="py-6 px-10 rounded-lg bg-gray-100 mr-6 mb-4"/>
          <button onClick={()=>{setbgColor('bg-red-100')}} className="py-6 px-10 rounded-lg bg-red-100 mr-6 mb-4"/>
          <button onClick={()=>{setbgColor('bg-orange-100')}} className="py-6 px-10 rounded-lg bg-orange-100 mr-6 mb-4"/>
          <button onClick={()=>{setbgColor('bg-yellow-100')}} className="py-6 px-10 rounded-lg bg-yellow-100 mr-6 mb-4"/>
          <button onClick={()=>{setbgColor('bg-green-100')}} className="py-6 px-10 rounded-lg bg-green-100 mr-6 mb-4"/>
          <button onClick={()=>{setbgColor('bg-sky-100')}} className="py-6 px-10 rounded-lg bg-sky-100 mr-6 mb-4"/>
          <button onClick={()=>{setbgColor('bg-blue-100')}} className="py-6 px-10 rounded-lg bg-blue-100 mr-6 mb-4"/>
          <button onClick={()=>{setbgColor('bg-purple-100')}} className="py-6 px-10 rounded-lg bg-purple-100 mr-6 mb-4"/>
          <button onClick={()=>{setbgColor('bg-pink-100')}} className="py-6 px-10 rounded-lg bg-pink-100 mr-6 mb-4"/>
          <button onClick={()=>{setbgColor('bg-white')}} className="py-6 px-10 rounded-lg bg-white mr-6 mb-4"/>
          <br/>
          <button onClick={()=>{setbgColor('bg-gray-500')}} className="py-6 px-10 rounded-lg bg-gray-500 mr-6 mb-4"/>
          <button onClick={()=>{setbgColor('bg-red-500')}} className="py-6 px-10 rounded-lg bg-red-500 mr-6 mb-4"/>
          <button onClick={()=>{setbgColor('bg-orange-500')}} className="py-6 px-10 rounded-lg bg-orange-500 mr-6 mb-4"/>
          <button onClick={()=>{setbgColor('bg-yellow-500')}} className="py-6 px-10 rounded-lg bg-yellow-500 mr-6 mb-4"/>
          <button onClick={()=>{setbgColor('bg-green-500')}} className="py-6 px-10 rounded-lg bg-green-500 mr-6 mb-4"/>
          <button onClick={()=>{setbgColor('bg-sky-500')}} className="py-6 px-10 rounded-lg bg-sky-500 mr-6 mb-4"/>
          <button onClick={()=>{setbgColor('bg-blue-500')}} className="py-6 px-10 rounded-lg bg-blue-500 mr-6 mb-4"/>
          <button onClick={()=>{setbgColor('bg-purple-500')}} className="py-6 px-10 rounded-lg bg-purple-500 mr-6 mb-4"/>
          <button onClick={()=>{setbgColor('bg-pink-500')}} className="py-6 px-10 rounded-lg bg-pink-500 mr-6 mb-4"/>
          <button onClick={()=>{setbgColor('bg-black')}} className="py-6 px-10 rounded-lg bg-black mr-6 mb-4"/>
          <h1 className="text-2xl p-4">Text Color</h1>
          <button onClick={()=>{setbgColor('bg-white')}} className="py-6 px-10 rounded-lg bg-white mr-6 mb-4"/><button onClick={()=>{setbgColor('bg-black')}} className="py-6 px-10 rounded-lg bg-black mr-6 mb-4"/>  <br/>

          <button onClick={generateIFrame} className="py-4 px-10 rounded-lg bg-blue-500 mt-8">Generate</button>
        </div>
        <h1 className="text-2xl p-4">iFrame Code Snippit</h1>
        <div className="bg-white p-8 bg-opacity-20 text-sm shadow-lg border-blue-500 border-2 rounded-lg overflow-hidden w-full h-auto mb-8">
          {iframe}
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
