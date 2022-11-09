import React from "react"
import InnerImg from "./InnerImg"
import MidSection from "./MidSection"
import Footer from "./Footer"
import './style.css'
import './nouman.jpeg'

export default function App() {
    return (
        <main className="mid--box">
            <InnerImg />
            <MidSection />
            <Footer />
        </main>
    )
}