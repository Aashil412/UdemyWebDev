import './App.css'
import Counter from './Counter';
import Dumbo from './Dumbo';
import ScoreKeeper from './ScoreKeeper';
import EmojiClicker from './EmojiClicker';
import ScoreKeeper2 from './ScoreKeeper2';
import Lucky7 from './Lucky7';
import LuckyN from './LuckyN';
import { sum } from './utils';
import BoxGrid from './BoxGrid';
function lessthan4(dice) {
  return sum(dice) < 4; 
}

function allSameValue(dice) {
  return dice.every(v => v === dice[0]);
}

function App() {
  
  return (
    <>
      <input type="text" name="" id="" />
      <button>Submit</button>
      <BoxGrid/>
      {/* <LuckyN winCheck={lessthan4} title="Roll less than 4"/>
      <LuckyN winCheck={allSameValue} title ="Roll the same number"/> */}
      {/* <ScoreKeeper2 numPlayers={10} target={ 3} /> */}
      {/* <EmojiClicker/> */}
      {/* <Counter/>
      <Dumbo/> */}
      {/* <ScoreKeeper/> */}
    {/* <h1>State Demo!</h1> */}
    </>
  )
}

export default App
