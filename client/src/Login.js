import React from 'react'

import Stylesheet from "./Stylesheet"

import { Container } from 'react-bootstrap'

/*const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=14b9e3f3a3d343f68e3210d5a864c555&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"*/
const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=0a1ef6a7b041450dac417cd46bc4e38d&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
  return (
    <div className='body'>
    
      <Stylesheet/>
      <div className='d-flex justify-content-center'>
      <a className='Button' href={AUTH_URL}><span>Login With spotify</span><i></i></a>

      </div>
  
    </div>
  )
}


