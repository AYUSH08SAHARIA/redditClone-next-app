import Navbar from '@/app/components/Navbar'
import SubHome from '@/app/components/SubHome/SubHome'
import Caraousel from '@/app/components/Carousell/carousel'
import React from 'react'

export default function Home() {
  return (
    <div>
    <div style={{display:"relative"}}>
    <div style={{position:"sticky",backgroundColor:"red"}}>
      <Navbar/>
      </div>
      {/* <Caraousel/> */}
      <SubHome/>
      </div>
    </div>
  )
}
