import { Link } from "react-router-dom"

export function Login() {
    return (
        <>
            <div className="bg-slate-500"><h1>Login</h1></div>
            <Link className="text-3xl" to={"/"}>Home</Link>
        </>
    )
}