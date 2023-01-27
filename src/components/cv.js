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
              <h4 className="blue">Description</h4>
              <p className="user-description">
                {this.props.displayDescription}
              </p>
            </div>

            <div>
              <h4 className="blue">Education</h4>
              <div className="experience">
                <div>
                  <p className="work-date">
                    <b>
                      {" "}
                      {this.props.displayUniFrom} - {this.props.displayUniTo}
                    </b>
                  </p>
                </div>

                <div className="info">
                  <p className="user-education">
                    <b>
                      {" "}
                      {this.props.displayUniversity},{" "}
                      {this.props.displayUniCity}
                    </b>
                  </p>
                  <p>
                    Degree:<i> {this.props.displayDegree}</i>
                  </p>
                  <p>
                    Discipline:<i> {this.props.displayDiscipline}</i>
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="blue">Experience</h4>
              <div className="experience">
                <div>
                  <p className="work-date">
                    <b>
                      {" "}
                      {this.props.displayFrom} - {this.props.displayTo}
                    </b>
                  </p>
                </div>

                <div className="info">
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
                  <p className="work-date">
                    <b>
                      {" "}
                      {this.props.displayFrom2} - {this.props.displayTo2}
                    </b>
                  </p>
                </div>

                <div className="info">
                  <div>
                    <p>
                      <b> {this.props.displayPosition2}</b>
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

            <h3 className="blue">Personal details</h3>

            <div>
              <h4 className="blue">Address</h4>
              <p>{this.props.displayAddress}</p>
            </div>

            <div>
              <h4 className="blue">Phone number</h4>
              <p>{this.props.displayNumber}</p>
            </div>

            <div>
              <h4 className="blue">Email</h4>
              <p>{this.props.displayEmail}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
