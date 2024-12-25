const UserDetails = ({ name, age, profession }) => {
  return (
    <div>
      <h2>Detalhes do usuário</h2>
      <ul>
        <li>Nome: {name}</li>
        <li>Idade: {age}</li>
        <li>Profição: {profession}</li>
        {age >= 18 ? (<li>Pode tirar habilitação</li>) : (<li>Não pode tirar habilitação</li>)}
      </ul>
    </div>
  )
}

export default UserDetails