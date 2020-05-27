import React, { Component } from "react";
import axios from "axios";

class Testapi extends Component {
  state = {
    isLoading: true,
    groups: [],
  };

  async componentDidMount() {
    // console.log(this.state);
    // const response = await fetch("/greeting")
    // .then(response => {
    //   this.setState(response)
    //   return console.log(response);
    //   });
    // const body = await response.json();
    // this.setState({ groups: response.body.getReader(), isLoading: false });
    // console.log(response);

    // axios.get(`/open/categories`).then((response) => {
    //   // console.log(response);
    //   let data = response.data;
    //   console.log("...............",data);
      
    //   this.setState({ isLoading: false, groups: data.data[0].name });
    //   return console.log(this.state);
    // });

    // axios.post("/test", { text: "Hello Server" }).then((response) => {
    //   // console.log(this.state);
    //   this.setState({ isLoading: false, groups: response.data.greetings });
    //   return console.log(this.state);
    // });

    // var bodyFormData = new FormData();

    // bodyFormData.set("grant_type", "password");
    // bodyFormData.append("client_id", "live-test");
    // bodyFormData.append("username", "mailtomeaakash@gmail.com");
    // bodyFormData.append("password", "Aakash12@");
    // bodyFormData.append("client_secret", "abcde");

    // console.log(bodyFormData);

    // axios.post("/oauth/token", bodyFormData).then((response) => {
    //   // console.log(this.state);
    //   // this.setState({ isLoading: false, groups: response.data.greetings });
    //   return console.log(response);
    // });
  }

  render() {
    const { groups, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="App">
        <header className="App-header">
          <div className="App-intro">
            <h2>data</h2>
            <h3>{groups}</h3>
          </div>
        </header>
      </div>
    );
  }
}

export default Testapi;
