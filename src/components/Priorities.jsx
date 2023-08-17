import React from 'react'

function Priorities() {
  return (
    <>
    <div className="bg-white flex flex-row justify-evenly p-4 mt-4">
        <div className=" flex flex-col"> <div className="">Top Priority</div> <div className="">1.<hr/></div> <div className=""><input placeholder='type here' /></div></div>
        <div className=" border-l border-black h-24 mr-4"></div>
        <div className="flex flex-col"> <div className=""><br/></div> <div className="">2.<hr/></div><div className=""><input placeholder='type here' /></div></div>
        <div className=" border-l border-black h-24 mr-4"></div>
        <div className="flex flex-col"> <div className=""><br/></div> <div className="">3.<hr/></div> <div className=""><input placeholder='type here' /></div></div>
    </div>
    </>
  )
}

export default Priorities