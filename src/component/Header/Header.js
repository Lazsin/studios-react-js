import { styled } from 'styled-components'
import logo from "./logo-name.svg"
import { useEffect, useState } from "react"
import { Button } from '../Button/Button'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.header`
height: 75px;
display: flex;
padding: 30px 10%;
justify-content: space-between;
border-radius: 50px;
background-color: gray;
align-items: center;
`


export default function Header() {
    const [now, setNow]=useState(new Date())
    useEffect(()=>{
        const interval=setInterval(()=>setNow(new Date()), 1000)
        return()=>{
            clearInterval(interval)
        }
    })
    return(
        <>
        <HeaderContainer>
            <a href='/'><img src={logo} style={{height: 100, width: 100 }} alt="logo" /></a>
            <h1>Studios</h1>
            {/* <h3>Time now: {now.toLocaleTimeString()}</h3> */}
            <nav>
                <a href='/posts'><Button>Posts</Button></a>
                <a href='/form'><Button>Form</Button></a>
            </nav>
        </HeaderContainer>
        <hr color="gray"></hr>
        </>
    )
    
}