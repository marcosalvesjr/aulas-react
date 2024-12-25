const Container = ({ children, myValueTesting }) => {
    return (
        <div>
            <h2>Este é o título do container</h2>
            {children}
            <p>O valor é {myValueTesting}</p>
        </div>
    )
}

export default Container