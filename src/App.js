import React from "react";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Стул серый",
          img: "стул серый.png",
          desc: "Lorem ipsum dolor sit amet,consectetur adipisicing",
          category: "chairs",
          price: "50.50",
        },
        {
          id: 2,
          title: "Стол желтый",
          img: "желтый стул.jpg",
          desc: "Lorem ipsum dolor sit amet,consectetur adipisicing",
          category: "chairs",
          price: "45.50",
        },

        {
          id: 3,
          title: "Диван серый",
          img: "диван серый.jpg",
          desc: "Lorem ipsum dolor sit amet,consectetur adipisicing",
          category: "sofa",
          price: "650.50",
        },
        {
          id: 4,
          title: "Диван розовый",
          img: "кресло желтое.jpg",
          desc: "Lorem ipsum dolor sit amet,consectetur adipisicing",
          category: "armchair",
          price: "50.50",
        },
        {
          id: 5,
          title: "Кресло белое",
          img: "белое кресло.jpg",
          desc: "Lorem ipsum dolor sit amet,consectetur adipisicing",
          category: "armchair",
          price: "50.50",
        },
        {
          id: 6,
          title: "Лампа черная",
          img: "Лампа черная.jpeg",
          desc: "Lorem ipsum dolor sit amet,consectetur adipisicing",
          category: "lamp",
          price: "26.30",
        },
        {
          id: 7,
          title: "Лампа белая",
          img: "лампа белая.jpg",
          desc: "Lorem ipsum dolor sit amet,consectetur adipisicing",
          category: "lamp",
          price: "23.50",
        },
        {
          id: 8,
          title: "Современная лампа",
          img: "Современная лампа.jpg",
          desc: "Lorem ipsum dolor sit amet,consectetur adipisicing",
          category: "lamp",
          price: "39.80",
        },
      ],
      showFullItem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategories = this.chooseCategories.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategories={this.chooseCategories} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />
        {this.state.showFullItem && (
          <ShowFullItem
            item={this.state.fullItem}
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
          />
        )}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chooseCategories(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter(
        (item) => item.category === category
      ),
    });
  }

  deleteOrder(id) {
    this.setState({
      orders: [...this.state.orders.filter((item) => item.id !== id)],
    });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
