import React, { Component } from "react";
import "./components.css";

class Resume extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="cv">
          <div className="section-a">
            <div className="user-name">
              <p>{this.props.name}</p>
              <p>{this.props.lName}</p>
            </div>

            <p className="title">{this.props.displayTitle}</p>
          </div>

          <div className="section-b">
            <div>
              <h4>Description</h4>
              <p className="user-description">
                {this.props.displayDescription}
              </p>
            </div>

            <div>
              <h4>Education</h4>
              <p className="user-education">{this.props.displayUniversity}</p>
              <p>Degree: {this.props.displayDegree}</p>
              <p>{this.props.displayUniCity}</p>
              <p>Discipline: {this.props.displayDiscipline}</p>
              <p>
                {this.props.displayUniFrom} - {this.props.displayUniTo}
              </p>
            </div>

            <div>
              <h4>Experience</h4>
              <div className="experience">
                <div>
                  <p>
                    <b>
                      {" "}
                      {this.props.displayFrom} - {this.props.displayTo}
                    </b>
                  </p>
                </div>

                <div>
                  <p>
                    <b>{this.props.displayPosition}</b>
                  </p>

                  <div className="post">
                    <p>
                      <i>{this.props.displayCompany},</i>
                    </p>
                    <p>{this.props.displayCity}.</p>
                  </div>
                </div>
              </div>

              <div className="experience">
                <div>
                  <p>
                    <b>
                      {" "}
                      {this.props.displayFrom2} - {this.props.displayTo2}
                    </b>
                  </p>
                </div>

                <div>
                  <div>
                    <p className="user-experience">
                      {this.props.displayPosition2}
                    </p>
                  </div>

                  <div className="post">
                    <p>
                      <i>{this.props.displayCompany2}.</i>
                    </p>
                    <p>{this.props.displayCity2}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-c">
            <div className="profile-photo">
              <img src={this.props.test} alt="" />
            </div>

            <h3>Personal details</h3>

            <div>
              <h4>Address</h4>
              <p>{this.props.displayAddress}</p>
            </div>

            <div>
              <h4>Phone number</h4>
              <p>{this.props.displayNumber}</p>
            </div>

            <div>
              <h4>Email</h4>
              <p>{this.props.displayEmail}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
