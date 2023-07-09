import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <div>
      <NavBar logo="logoBTY" />
      <ItemListContainer titulo1 = "Producto1" titulo2 = "Producto2" descripcion1 = "DescripcionProducto1" descripcion2 = "DescripcionProducto2" precio1 = "80" precio2 = "60"/>
    </div>
    )
}

export default App
