import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartState } from "../../Context/Context";
import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  const {
    state: { cart },
  } = CartState();

  return (
    <header>
      <img src={logo} alt="logo" />
      <nav>
        <Link to="/">home</Link>
        <Link to='/cardapio'>cardápio</Link>
        <Link to="/" >localização</Link>
        <Link to="/quemsomos" >quem somos</Link>
        <Link to="/pedido">pedidos</Link>
        <div className="cart">
          <Link to="/carrinho">
            <FaShoppingCart />
            <span className="cartNumber">{cart.length}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header
