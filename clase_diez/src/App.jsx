import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";

const products = [
  {id:1, name: "producto uno", description: "descripcion del producto uno"},
  {id:2, name: "producto dos", description: "descripcion del producto dos"},
  {id:3, name: "producto tres", description: "descripcion del producto tres"},
  {id:4, name: "producto cuatro", description: "descripcion del producto cuatro"},
  {id:5, name: "producto cinco", description: "descripcion del producto cinco"}
]


//lista de productos

function ProductList() {
  return (
    <div>
      <h2>Lista de productos</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <Link to={`/products/${p.id}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

//detalle de cada producto

function ProductoDetail() {

  const {productId}=useParams();
  const navigate = useNavigate();

  const productIndex = products.findIndex((prod) => prod.id===parseInt(productId));
  
  const handleNextProduct = () => {
    const nextProductIndex = (productIndex + 1) % products.length; 
    navigate(`/products/${products[nextProductIndex].id}`);
  };
  
  const handlePrevProduct = () => {
    const prevProductIndex =
    (productIndex - 1 + products.length) % products.length;
    navigate(`/products/${products[prevProductIndex].id}`);
  };
  
  const product = products[productIndex];

  return (
    <div>
      <h2>Detalle de producto</h2>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <button onClick={handlePrevProduct}>Producto anterior</button>
      <button onClick={handleNextProduct}>Producto siguiente</button>
    </div>
  )

}

function App() {
  return (
    <Router>
      <div className='App'>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/products">Productos</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<h2>Pagina de inicio</h2>}/>
          <Route path='/products' element={<ProductList/>}/>
          <Route path='/products/:productId' element={<ProductoDetail/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
