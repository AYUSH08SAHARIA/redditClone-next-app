"use client"
import React from 'react'
import "./Navbar.css"
import Modal from 'react-modal';
import google from "../../ImageForReddit/image 8.png"
import Image from 'next/image'
import { useState } from "react"
import logo from "../../ImageForReddit/Reddit.png"
import logoname from "../../ImageForReddit/namelogo.png"
import searchIcon from "../../ImageForReddit/search.png"
import { CircleX } from 'lucide-react';
export default function Navbar() {
    const [modelIsOpen, setmodelIsOpen] = useState(false);

    const handleCreate = ()=>{
      if(modelIsOpen == false){
        setmodelIsOpen(true);
      }else{
        setmodelIsOpen(false)
      }
    }

  return (
    
    <div className='main'>
        <Modal style={{ overlay: { backgroundColor: "rgb(12 12 12 / 49%)" } }}
        isOpen={modelIsOpen}
        className="model1classNameForCommunity"
        onRequestClose={() => setmodelIsOpen(false)}>
        <div style={{marginLeft:20 , marginTop:10}}>
        <div style={{display:"flex",justifyContent:"space-between"}}>
            
          <p style={{marginBottom:10, color:"black", fontFamily:"poppins",fontSize:"40px" , fontWeight:"bold"}}>Log In</p>
          <CircleX style={{marginRight:"20px", marginTop:"13px", color:"black", cursor:"pointer"}} onClick={handleCreate} />
          </div>
          <p style={{color:"#808080" , fontSize:13 , marginTop:5, color:"black"}}>By continuing, you agree to our User Agreement and acknowledge that you understand the Privacy Policy.</p>
          <input className="CreateCommunityInput1" placeholder="Email/Username" />
          <input className="CreateCommunityInput1" placeholder="Password" />

          
          
          <div style={{display:'flex' , flexDirection:"Column", alignItems:'center' ,marginTop:40 ,}}>
            <button style={{width:"430px",height:"50px" ,borderRadius:10, padding:5 , marginLeft:0,marginBottom:"10px" , backgroundColor:"#DC5F00" , border:"1px solid white" ,fontWeight:"bold" ,fontSize:"20px"}}>Log In</button>
            <p style={{color:"black", fontWeight:"bold", marginBottom:"10px"}}>or</p>
            <button style={{width:"430px" ,height:"50px", padding:5 , marginLeft:10 , borderRadius:10 , backgroundColor:"white" , color:"#838383" , border:"none",fontWeight:"bold" ,fontSize:"20px"}}>
                <Image style={{marginRight:"25px",height:"30px"}}
                    src={google}
                    />
                <span >Continue with Google</span>
            </button>
          </div>

        </div>

      </Modal>


        <div className='Rightbar'>
            <div className='logoContainer'>
            <Image
                src={logo}
                className='logostyle'
                alt="Picture of the author"
            />
            <Image
                src={logoname}
                className='logonamestyle'
                alt="Picture of the author"
            />
            </div>
        </div>
        <div className='Centerbar'>
            <div style={{display: 'flex' , alignItems: 'center', marginLeft:20}}>
              <Image
                  src={searchIcon}
                  className='searchstyle'
                  alt="Picture of the author"
              />
              <input placeholder='Search' className='SearchBox'  />
            </div>
        </div>
        <div className='Leftbar'>
        <div style={{paddingTop: '5px', paddingBottom:'5px', borderRadius:'20px'}}>
        <button className='login' onClick={handleCreate}>
            Log In/Sign Up
        </button>
        </div>
            
        </div>
    </div>
  )
}
