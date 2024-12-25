import styles from "./CarDetails.module.css"
const CarDetails = ({ brand, color, km }) => {
    return (
        <div className={styles.card}>
            <h1>{brand}</h1>
            <p>Cor: {color}</p>
            <p>KM:{km}</p>
        </div>
    )
}

export default CarDetails