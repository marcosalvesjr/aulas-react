import { useState } from 'react'
import './MyForm.css'

const MyForm = ({ user }) => {
    //Gerenciamento de dados
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const [bio, setBio] = useState(user ? user.bio : '');
    const [role, setRole] = useState(user ? user.role : '');

    const handleName = (e) => { setName(e.target.value) };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando formulario");
        console.log(name, email, bio, role);
        //limpando formulario
        setEmail('');
        setName('');
        setBio('');
    };


    return (
        <div>
            {/* envio de form */}
            {/* criação de formulario */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input value={name} onChange={handleName} type="text" name="name" placeholder="Digite o seu nome" />
                </div>
                {/* LABEL ENVOLVENDO INPUT */}
                <label>
                    <span>E-mail</span>
                    {/* simplificação de manipulação de state */}
                    <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" name='email' placeholder='Digite o seu Email' />
                </label>
                {/* text area */}
                <label >
                    <span>Bio:</span>
                    <textarea name="bio" placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                </label>
                {/* select */}
                <label>
                    <span>Função select</span>
                    <select value={role} name="role" onChange={(e) => setRole(e.target.value)}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>

                </label>
                <input type="submit" value="Enviar" />
            </form>



        </div>
    )
}

export default MyForm