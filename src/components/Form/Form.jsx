import { useState } from "react"
import "./styles.css"

const Form = ({newlocation}) => {
    const [city, setCity] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({city});
        if(city === "" || !city)return;

        newlocation(city);
    }
    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <div className="padre">
                    <input type="text" className="input" placeholder="Ingrese una ciudad" onChange={(e) => setCity(e.target.value)} />
                    <button className="boton" type="submit">Buscar</button>
                </div>
            </form>
        </div>
    );
}

export default Form