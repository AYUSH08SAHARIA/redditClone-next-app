import React from 'react'
import "./subhome.css"
import Contentpost  from './contentpost'
import Post from './Post'
import Subcat from "./Subcat.js"
import Link from 'next/link'
import RightItempart1 from '../RightItems/RightItempart1'
import RightItempart2 from '../RightItems/RightItempart2'
import { FakePost } from '@/app/fake'
export default function SubHome() {
  return (
    <div className='MainSubhome'>
      <div className='subhomeLeft' style={{position:"relative"}}>
       <div style={{position:"fixed"}}>
         <div className='left-cont' >
         <Link href={`#`}>
           <h2 style={{marginBottom:"50px"}}>Home</h2>
           <h2>Discover</h2>
           </Link>
          </div>
       </div>
      </div>
      <div className='MainSubhomeCenter'>
            <h1 style={{marginLeft: '0.5rem', marginTop:'2.5rem', marginBottom:'2rem'}}>Home</h1>
           <Contentpost/>
           <Subcat/>
           {FakePost.map((item)=>(
              <Post item={item}/>

            ))}
      </div>
      <div className='subhomeRight' style={{position:"relative"}}>
          <div style={{position:"fixed"}}>
          <RightItempart1/>
          <RightItempart2/>
          </div>
      </div>
    </div>
  )
}
