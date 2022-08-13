import React, { Component } from "react";

export class Categories extends Component {
  constructor(props) {
    super();
    this.state = {
      categories: [
        {
          key: "all",
          name: "Всё",
        },
        {
          key: "chairs",
          name: "Стулья",
        },
        {
          key: "sofa",
          name: "Диваны",
        },
        {
          key: "armchair",
          name: "Кресло",
        },
        {
          key: "lamp",
          name: "Лампы",
        },
      ],
    };
  }
  render() {
    return (
      <div className="categories">
        {this.state.categories.map((item) => (
          <div
            key={item.key}
            onClick={() => this.props.chooseCategories(item.key)}
          >
            {item.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
