import MultiActionAreaCard from "../Components/ImgMediaCard"
import Button from '@mui/material/Button';
import "./Home.css"


const Home = () => {
  return (
    <>
    <div className="heading">
      <h1>Album example</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat sed voluptas, aperiam illo omnis at dolorem expedita magni saepe harum reiciendis iure accusantium quidem? Voluptatibus officiis porro dolorum atque explicabo.</p>
    <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      </div>
    <div className="Cardcontainer">
      <MultiActionAreaCard/>
      <MultiActionAreaCard/>
      <MultiActionAreaCard/>
      <MultiActionAreaCard/>
      <MultiActionAreaCard/>
      <MultiActionAreaCard/>
      </div>
    </>
  )
}

export default Home