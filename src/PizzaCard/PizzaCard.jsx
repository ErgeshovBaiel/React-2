import './PizzaCard.css'

const pizzaData = [
    {
        name: ""
    }
]

const PizzaCard = (props) => {
    return (
        <div className='card'>
            <img src={props.imgUrl} alt=""  className='pizz-img'/>
            <h3> {props.pizzaName}</h3>
            <p> {props.pizzaText}</p>
            <div className='card-footer'>
                <h4>от {props.pizzaPrice} сом</h4>
                <button className='choose'>Выбрать</button>
            </div>
        </div>
    )
}

export default PizzaCard