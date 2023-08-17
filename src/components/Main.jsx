import React from 'react'
import Times from './Times'
import Priorities from './Priorities'
import Shopping from './Shopping'
import Habit from './Habit'

function Main() {
  return (
    <>
    <div className="bg-[#FFD5FF] w-[1376px] h-screen pl-32 pt-10 pr-32">
      <Times/>
      <Priorities/>
      <Shopping/>
      <Habit/>
    </div>
    </>
  )
}

export default Main