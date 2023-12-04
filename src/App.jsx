import {useNavigate} from "react-router-dom"

function App() {
  const navigate = useNavigate();
  return (
    <div>
      land me here sir, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
       consequatur incidunt cumque doloremque, rem illo fugit quod perspiciatis excepturi voluptas dolore sapiente molestiae,
        velit commodi consectetur. Minus nulla necessitatibus quasi?
        <span onClick={()=>{navigate("test")}} >click to test page</span>
    </div>
  )
}

export default App