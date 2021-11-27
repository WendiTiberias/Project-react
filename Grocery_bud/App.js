import React from "react";
import "./App.css";
import Form from "./Form";
import GroceryItem from "./Item";
import Alert from "./Alert";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: JSON.parse(localStorage.getItem("grocery")) || [],
      btnName: "Submit",
      query: "",
      notif: "",
      variant: "",
    };

    this.changeBinder = this.changeBinder.bind(this);
    this.cleanState = this.cleanState.bind(this);
    this.updateBinder = this.updateBinder.bind(this);
    this.deleteBinder = this.deleteBinder.bind(this);
    this.editBinder = this.editBinder.bind(this);
  }

  cleanState = () => {
    this.setState({
      query: "",
      notif: "",
      variant: "",
    });
  };

  changeBinder = (value) => {
    this.setState({
      query: value,
    });
  };

  deleteBinder = (id) => {
    const filter = this.state.item.filter((finding) => {
      return finding.id !== id ? finding : "";
    });

    this.setState({
      item: filter,
      notif: "success delete item",
      variant: "rgba(255,53,53,0.35)",
      id: "",
    });

    localStorage.setItem("grocery", JSON.stringify(filter));
    setTimeout(() => this.cleanState(), 2400);
  };

  editBinder = (finder) => {
    const { id, grocery, toggle } = finder;
    this.setState({
      btnName: "Edit",
      query: grocery,
      id: id,
    });
  };

  updateBinder = () => {
    switch (this.state.btnName) {
      case "Submit":
        const obj = {
          id: Math.floor(Math.random() * 100000) + 1,
          grocery: this.state.query,
          toggle: false,
        };
        this.setState({
          item: [...this.state.item, obj],
          notif: "success update item",
          variant: "rgba(45,253,121,0.38)",
        });

        break;

      case "Edit":
        const mapper = this.state.item.map((finder) => {
          return finder.id === this.state.id
            ? { ...finder, grocery: this.state.query }
            : finder;
        });

        this.setState({
          item: mapper,
          notif: "success edit item",
          variant: "rgba(45,253,121,0.38)",
          btnName: "Submit",
        });

        localStorage.setItem("grocery", JSON.stringify(mapper));
    }
    setTimeout(() => this.cleanState(), 2400);
  };

  render() {
    return (
      <div className="container">
        <div className="grocery-binder">
          {this.state.notif !== "" && (
            <Alert msg={this.state.notif} variant={this.state.variant} />
          )}
          <h3>Grocery Bud</h3>
          <Form
            value={this.state.query}
            onUpdate={this.updateBinder}
            query={this.changeBinder}
            name={this.state.btnName}
          />
          <GroceryItem
            onEdit={this.editBinder}
            onDelete={this.deleteBinder}
            item={this.state.item}
          />
        </div>
      </div>
    );
  }
}

export default App;
