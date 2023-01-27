import React, { Component } from "react";
import "./App.css";
import Top from "./components/header";
import Resume from "./components/cv";
import image from "./avatar.png";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageLink: image,
      firstName: "",
      lastName: "",
      title: "",
      address: "",
      phoneNumber: "",
      email: "",
      description: "",
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
      positionTwo: "",
      companyTwo: "",
      cityTwo: "",
      fromTwo: "",
      toTwo: "",
      university: "",
      universityCity: "",
      degree: "",
      universityFrom: "",
      universityTo: "",
      discipline: "",
    };
  }

  fakeDetails = (e) => {
    e.preventDefault();
    this.setState({
      imageLink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNAPeiZkXWFS9VFiTkKfiANcdTpevcyeIpnQ&usqp=CAU",
      firstName: "Cesc",
      lastName: "Hernandez",
      title: "Devops Engineer",
      address: "19, Elsavador close, Marid Spain.",
      phoneNumber: "+015 67446 74",
      email: "Ceschernandez@hotmail.com",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      position: "Full stack Web Developer",
      company: "Microsoft",
      city: "New York",
      from: "2014",
      to: "2016",
      positionTwo: "Devops Engineer",
      companyTwo: "Facebook",
      cityTwo: "Texas",
      fromTwo: "2016",
      toTwo: "Till date",
      university: "Bradford University",
      universityCity: "London",
      degree: "BSC",
      universityFrom: "2003",
      universityTo: "2006",
      discipline: "Computer Science",
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <Top text="CV Creator"></Top>
        <div className="form-body">
          <form>
            <h4>Personal Information</h4>
            <div>
              <input
                name="firstName"
                type="text"
                onChange={this.handleChange}
                placeholder="First name"
                value={this.state.firstName}
              />
            </div>

            <div>
              <input
                name="lastName"
                type="text"
                onChange={this.handleChange}
                placeholder="Last name"
                value={this.state.lastName}
              />
            </div>

            <div>
              <input
                type="text"
                name="title"
                onChange={this.handleChange}
                placeholder="Title"
                value={this.state.title}
              />
            </div>

            <div>
              <input
                name="imageLink"
                type="text"
                onChange={this.handleChange}
                placeholder="Photo URL"
                accept="image/*"
                value={this.state.imageLink}
              />
            </div>

            <div>
              <input
                name="address"
                onChange={this.handleChange}
                type="text"
                placeholder="Address"
                value={this.state.address}
              />
            </div>

            <div>
              <input
                name="phoneNumber"
                type="tel"
                onChange={this.handleChange}
                placeholder="Phone number"
                value={this.state.phoneNumber}
              />
            </div>

            <div>
              <input
                name="email"
                type="email"
                onChange={this.handleChange}
                placeholder="Email"
                value={this.state.email}
              />
            </div>

            <div>
              <textarea
                name="description"
                onChange={this.handleChange}
                placeholder="Description"
                value={this.state.description}
              ></textarea>
            </div>
            <h4>Experience</h4>

            <div>
              <input
                name="position"
                type="text"
                onChange={this.handleChange}
                placeholder="Position"
                value={this.state.position}
              />
            </div>

            <div>
              <input
                type="text"
                name="company"
                onChange={this.handleChange}
                placeholder="Company"
                value={this.state.company}
              />
            </div>

            <div>
              <input
                name="city"
                onChange={this.handleChange}
                type="text"
                placeholder="City"
                value={this.state.city}
              />
            </div>

            <div>
              <input
                name="from"
                onChange={this.handleChange}
                type="text"
                placeholder="From"
                value={this.state.from}
              />
            </div>

            <div>
              <input
                name="to"
                onChange={this.handleChange}
                type="text"
                placeholder="To"
                value={this.state.to}
              />
            </div>

            <div>
              <input
                name="positionTwo"
                type="text"
                onChange={this.handleChange}
                placeholder="Position"
                value={this.state.positionTwo}
              />
            </div>

            <div>
              <input
                type="text"
                name="companyTwo"
                onChange={this.handleChange}
                placeholder="Company"
                value={this.state.companyTwo}
              />
            </div>

            <div>
              <input
                name="cityTwo"
                onChange={this.handleChange}
                type="text"
                placeholder="City"
                value={this.state.cityTwo}
              />
            </div>

            <div>
              <input
                name="fromTwo"
                onChange={this.handleChange}
                type="text"
                placeholder="From"
                value={this.state.fromTwo}
              />
            </div>

            <div>
              <input
                name="toTwo"
                onChange={this.handleChange}
                type="text"
                placeholder="To"
                value={this.state.toTwo}
              />
            </div>

            <h4>Education</h4>

            <div>
              <input
                type="text"
                name="university"
                onChange={this.handleChange}
                placeholder="University name"
                value={this.state.university}
              />
            </div>

            <div>
              <input
                name="universityCity"
                onChange={this.handleChange}
                type="text"
                placeholder="City"
                value={this.state.universityCity}
              />
            </div>

            <div>
              <input
                name="degree"
                onChange={this.handleChange}
                type="text"
                placeholder="degree"
                value={this.state.degree}
              />
            </div>

            <div>
              <input
                name="universityFrom"
                onChange={this.handleChange}
                type="text"
                placeholder="From"
                value={this.state.universityFrom}
              />
            </div>

            <div>
              <input
                name="discipline"
                onChange={this.handleChange}
                type="text"
                placeholder="Discipline"
                value={this.state.discipline}
              />
            </div>

            <div>
              <input
                name="universityTo"
                onChange={this.handleChange}
                type="text"
                placeholder="To"
                value={this.state.universityTo}
              />
            </div>

            <button className="details-button" onClick={this.fakeDetails}>
              Load fake details
            </button>
            <button className="reset-button">Reset</button>
          </form>
        </div>

        <Resume
          test={this.state.imageLink}
          name={this.state.firstName}
          lName={this.state.lastName}
          displayTitle={this.state.title}
          displayPhoto={this.state.imageLink}
          displayAddress={this.state.address}
          displayNumber={this.state.phoneNumber}
          displayEmail={this.state.email}
          displayDescription={this.state.description}
          displayPosition={this.state.position}
          displayCompany={this.state.company}
          displayCity={this.state.city}
          displayFrom={this.state.from}
          displayTo={this.state.to}
          displayPosition2={this.state.positionTwo}
          displayCompany2={this.state.companyTwo}
          displayCity2={this.state.cityTwo}
          displayFrom2={this.state.fromTwo}
          displayTo2={this.state.toTwo}
          displayUniversity={this.state.university}
          displayUniCity={this.state.universityCity}
          displayDegree={this.state.degree}
          displayUniFrom={this.state.universityFrom}
          displayUniTo={this.state.universityTo}
          displayDiscipline={this.state.discipline}
        ></Resume>
      </div>
    );
  }
}

export default App;
