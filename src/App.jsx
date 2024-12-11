import PizzaCard from "./PizzaCard/PizzaCard"

// PROPS
// DRY

const pizzaData = [
  {
    name: "Пицца Черепашки-ниндзя",
    price: 890,
    imgUrl: "https://media.dodostatic.net/image/r:233x233/019342AED63577C6A52E16D13B12892E.avif",
    text: "Очень сырная пицца 30 см от героев в панцире. Упакована в яркую коробку в ретро-стилистике любимого мультсериала. Один из четырех уникальных 3D-стикеров в подарок!"
  },
  {
    name: "Мясная с аджикой",
    price: 890,
    imgUrl: "https://media.dodostatic.net/image/r:292x292/11EF6612D8805B8FA33D45115AFF17C7.avif",
    text: "Охотничьи колбаски, острый соус аджика, колбаски чоризо из цыпленка, цыпленок , пепперони из цыпленка , моцарелла, томатный соус"
  },
  {
    name: "Баварская",
    price: 890,
    imgUrl: "https://media.dodostatic.net/image/r:292x292/11EF346408A39615BD3478135F9F6673.avif",
    text: "Охотничьи колбаски, маринованные огурчики, красный лук, томаты, горчичный соус, моцарелла, томатный соус"
  },
  {
    name: "Чикен Бомбони",
    price: 890,
    imgUrl: "https://media.dodostatic.net/image/r:292x292/11EF3DB2188200718EDEB6D5EC3E3ECD.avif",
    text: "Куриные кусочки в панировке, сладкий перчик, сыры чеддер, пармезан и моцарелла, красный лук, соусы сладкий чили и альфредо",
  },
]

const App = () => {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      {pizzaData.map(pizza => {
        return <PizzaCard
          key={pizza.name}
          pizzaPrice={pizza.price}
          pizzaName={pizza.name}
          pizzaText={pizza.text}
          imgUrl={pizza.imgUrl} />
      })}
    </div>
  )
}

export default App

