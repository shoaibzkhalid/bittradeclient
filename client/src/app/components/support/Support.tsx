import * as React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import FontAwesome from "../base/FontAwesome";
import { BaseComponent } from "../base/BaseComponent";
import ContactUsComponent from "../contact-us/ContactUsComponent";

export default class Support extends BaseComponent {
  render() {
    this.props.globals.title = this.lang.SubmitAComplaint;
    return (
      <>
        <Card className="gx-text-center">
          {/*------------------CARD HEADING-----------------------------*/}
          <h1 className="heading-big">{this.lang.SupportIntro}</h1>
          <p className="gx-text-center" style={{ fontSize: "20px" }}>
            {this.lang.SupportIntroPara}
          </p>

          <h1 className="heading-big">
            {this.lang.Popular} {this.lang.Articles}
          </h1>
          <div className="text-medium">
            <Link to={this.getLink(this.constants.RoutePaths.Travel)}>
              {this.lang.ArticleHeading1}
            </Link>
          </div>
          <div className="text-medium">
            <Link to={this.getLink(this.constants.RoutePaths.RealEstate)}>
              {this.lang.ArticleHeading2}
            </Link>
          </div>
        </Card>
        <Card className="gx-text-center">
          <h1 className="heading-big">
            {this.lang.Contact} {this.lang.Support}
          </h1>
          <br />
          <div className="text-medium">
            <p>
              {this.lang.Phone}: {this.lang.BitVelocityPhone}&nbsp;
              {FontAwesome.faIcon("phone")}
            </p>

            <p>
              {this.lang.Mobile}: {this.lang.BitVelocityMobile}&nbsp;
              {FontAwesome.faIcon("mobile-alt")}
            </p>
            <p>
              {this.lang.Email}: {this.lang.BitVelocityMail}&nbsp;
              {FontAwesome.faIcon("envelope")}
            </p>
          </div>
        </Card>
        <Card>
          <ContactUsComponent globals={this.props.globals} />
        </Card>
      </>
    );
  }
}