import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Section } from "../components/Section";

export function Home() {
    return (
        <>
            < Navbar />
            < Section />
            <Link to={"/login"}>Login</Link>
            <Link to={"/list"}>List</Link>
        </>
    );
}