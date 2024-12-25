const CarDetails = ({ brand, km, color, newCar }) => {
    return (
        <div>
            <h2>Detalhes do carro</h2>
            <ul>
                <li>Marca: {brand}</li>
                <li>Km: {km}</li>
                <li>Cor: {color}</li>
                {newCar && (<li>Carro novo</li>)}
            </ul>
            
            
        </div>
    )
}

export default CarDetails