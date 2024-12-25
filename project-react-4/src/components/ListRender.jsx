import { useState } from "react"

const ListRender = () => {
    const [list] = useState(['Marcos', 'Daiane', 'Samuel', 'Sara'])

    const [users, setUsers] = useState([
        { id: 1, name: 'Marcos' },
        { id: 2, name: 'Daiane' },
        { id: 3, name: 'Samuel' },
        { id: 4, name: 'Amanda' }
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 5)

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id);

        })
        console.log(randomNumber)
    }
    return (
        <>
            <ul>

                {list.map((item, i) => (<li key={i}>{item}</li>))}

            </ul>
            <ul>
                {users.map((user) => (<li key={user.id}>{user.name}</li>))}
            </ul>
            <button onClick={deleteRandom}>Delete random user</button>
        </>


    )
}

export default ListRender