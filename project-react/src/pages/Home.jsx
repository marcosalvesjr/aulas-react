import { Link } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Section } from "../components/Section"
import { Login } from "./Login"


export function Home() {
    return (
        <>
            <Navbar />
            <Section />
            <Link to={"/login"}>Login</Link>
        </>
    )
}