"use client"
import Image from "next/image";
import { FormEventHandler, useState } from "react";

export default function Home() {

  //Form variables(?)
  const [firstName, setFirstName] = useState(" "); 
  const [lastName, setLastName] = useState(" "); 
  const [email, setEmail] = useState(" "); 
  const [contactNo, setContactNo] = useState(" "); 

  //Handle Submit
  const handleSubmit= (event:React.FormEvent) =>{
    alert(` First Name: ${firstName}\n
    Last Name: ${lastName}\n
    Email: ${email}\n
    Contact Number: ${contactNo}\n`)
  }

  return <div className=" max-w-full h-screen flex items-center justify-center flex-col gap-6">
    <div className="bg-gradient-to-tl from-indigo-800 to-purple-800 rounded-3xl pt-8 pb-4 pl-8 pr-8 bg-transparent space-x-1.5">
      
      <h1 className="text-white text-lg text-center"> Contact Form</h1> 
      <hr/>

      <br/>

      <form className=" flex-col" onSubmit={handleSubmit}>
        <label className="font-sans text-base text-white">First name </label> <br/>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="rounded-sm text-black p-1"/><br/>

        <label className="font-sans text-base text-white">Last name </label> <br/>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="rounded-sm text-black p-1"/><br/>

        <label className="font-sans text-base text-white">Email </label> <br/>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-sm text-black p-1"/><br/>

        <label className="font-sans text-base text-white">Contact number </label> <br/>
        <input type="number" value={contactNo} onChange={(e) => setContactNo(e.target.value)} className="rounded-sm text-black p-1"/><br/>
        <br/>
        
        <div className="flex justify-end">
          <input type="submit" className="border white py-[8px] px-[16px] rounded-[8px] bg-blue-500 self-end"/>
        </div>

      </form>
    
    </div>

    <button className="border white py-[8px] px-[16px] rounded-[8px] bg-blue-500" onClick={()=>(
    window.alert("Hello World!")
  )
    
  }>Click Me!</button>
</div>

}
