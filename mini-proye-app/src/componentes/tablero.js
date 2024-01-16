import cuadro from '../cuadro';
function tablero( ){
  return (
    <div className="tablero">
      <cuadro valor={0} funcion ={click}/>
      <cuadro valor={1} funcion ={click}/>
      <cuadro valor={2} funcion ={click}/>
      <cuadro valor={3} funcion ={click}/>
      <cuadro valor={4} funcion ={click}/>
      <cuadro valor={5} funcion ={click}/>
      <cuadro valor={6} funcion ={click}/>
      <cuadro valor={7} funcion ={click}/>
      <cuadro valor={8}funcion ={click}/>

    </div>
  )
}
