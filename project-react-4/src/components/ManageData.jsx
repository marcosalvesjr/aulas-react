import { useState } from "react";

const ManageData = () => {
    const someData = 10;
    const [number, setNumber] = useState(someData);
    return (
        <div>
            <p>
                Número {number}
            </p>
            <button onClick={() => { setNumber(15) }}>Mudar número</button>
        </div>
    )
}

export default ManageData