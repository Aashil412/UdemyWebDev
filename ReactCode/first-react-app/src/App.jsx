import './App.css'
import Chicken from './Chicken';
import Greeter from './Greeter';
import Die from './Die';
import ListPicker from './ListPicker';
import DoubleDice from './DoubleDice';
import Heading from './Heading';
import ColorList from './ColorList';
import Slots from './Slots';
import ShoppingList from './ShoppingList';
import PropertyList from './PropertyList';
import Clicker from './Clicker';
import Form from './Form';
import Counter from './Counter';
import Toggler from './Toggler';
import ToggleCounter from './ToggleCounter';
import ColorBox from './ColorBox';
import ColorBoxGrid from './ColorBoxGrid';
const data = [
  {id: 1,item: "eggs",quantity: 12, completed: false},
  {id: 2, item: "milk",quantity: 1, completed: true},
  {id: 3,item: "chicken breats", quantity: 4, completed: false},
  {id: 4,item: "carrots",quantity: 6, completed: true},
]
const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
  
]
const colors = [
  "#E53935",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF5722",
];

function App() {
  return (
    <div>
      <ColorBoxGrid  colors = {colors}/>
      {/* <ToggleCounter/> */}
      {/* <Toggler/> */}
      {/* <Counter/> */}
      {/* <Clicker message="HI!!!" buttonText="Please Click Me"/>
      <Clicker message="Please Stop Clicking Me!" buttonText="do not click"/> */}
      {/* <Form/>
      <Clicker/> */}
      {/* <PropertyList properties={ properties} /> */}
      {/* <ShoppingList items={data} /> */}
      {/* <Greeter person ="Bill" from ="Aashil"/>
      <Greeter person="Ted" />
      <Greeter  from="Aashil" />
      <Die numSides={ 20} />
      <Die  />
      <Die numSides={20} />
      <ListPicker values={ [1,2,3]} />
      <ListPicker values={['a', 'b', 'c']} />
      <DoubleDice/>
      <DoubleDice/>
      <DoubleDice />
      <Heading color="magenta" text="welcome!" fontSize = "20px" />
      <Heading color="teal" text="blah" fontSize="48px" />
      
      <ColorList colors={ ["red","pink","purple","teal"] } />
      <ColorList colors={ ["olive","orangered","slategrey"] } />
      <Slots val1 = "h"  val2 = "h"  val3 = "h"/>
      <Slots val1 = "h"  val2 = "a"  val3 = "h"/> */}
    </div>
  );
}

export default App
