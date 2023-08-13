import './App.css'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AlarmIcon from '@mui/icons-material/Alarm';
import RatingDemo from './RatingDemo';
import FormDemo from './FormDemo';
import NavBar from './NavBar'
function App() {


  return (
    <>
      {/* <Button variant="text" onClick={()=> alert("")}>Text</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="contained">Contained</Button>
      <Button color="success" variant="contained">Contained</Button>
      <Button size = "small"color="secondary" variant="contained">Contained</Button>
      <IconButton color="secondary" aria-label="add an alarm">
  <AlarmIcon />
      </IconButton> */}
      {/* <RatingDemo/> */}
      <NavBar/>
      <FormDemo/>
    </>
  )
}

export default App
