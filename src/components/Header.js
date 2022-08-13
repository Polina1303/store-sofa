import React, { useState } from "react";
import { FaInstalod, FaShoppingCart } from "react-icons/fa";
import Orders from "./Orders";

const showOrders = (props) => {
  let summa = 0;
  props.orders.forEach((item) => (summa += Number.parseFloat(item.price)));
  return (
    <div>
      {props.orders.map((item) => (
        <Orders onDelete={props.onDelete} key={item.id} item={item} />
      ))}
      <p className="summa">Сумма:{new Intl.NumberFormat().format(summa)}</p>
    </div>
  );
};

const showNothing = (props) => {
  return <div className="empty">Товаров нет</div>;
};

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);
  return (
    <header>
      <div>
        <span className="logo">House Staff</span>
        <ul className="nav">
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingCart
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop-cart-button ${cartOpen && "active"}`}
        />

        {cartOpen && (
          <div className="shop-cart">
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"> </div>
    </header>
  );
}
