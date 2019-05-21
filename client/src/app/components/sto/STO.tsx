import * as React from "react";
import { Card, Row } from "antd";
import { BaseComponent } from "../base/BaseComponent";
import HeaderBanner from "./HeaderBanner";
import "./STO.less";

export default class About extends BaseComponent {
  render() {
    return (
      <>
        <HeaderBanner />
        <Card className="placeholder-card" />
        <Card>
          <h1 className="logo-text heading-big gx-text-center">
            {this.lang.STOFeaturesHeading}
          </h1>
          <Row className="sto-row gx-text-center">
            {this.antd.colmd8(
              <Card>
                <img src="/assets/images/flash.svg" alt="Secured" />
                <h1 className="heading-medium">
                  {this.lang.Instant} {this.lang.Funding}
                </h1>
                {/* <p className="text-small">{this.lang.TwoFactorAuthPara}</p> */}
              </Card>
            )}

            {this.antd.colmd8(
              <Card className="security-feature-card">
                <img src="/assets/images/clock.svg" alt="DDOS Protection" />
                <h1 className="heading-medium">
                  {this.lang.TwentyFourHours} {this.lang.Approval}
                </h1>
                {/* <p className="text-small">{this.lang.DDosPara}</p> */}
              </Card>
            )}

            {this.antd.colmd8(
              <Card className="security-feature-card">
                <img src="/assets/images/curriculum.svg" alt="Application" />
                <h1 className="heading-medium">
                  {this.lang.Easy} {this.lang.Application}
                </h1>
                {/* <p className="text-small">{this.lang.OfflineStoragePara1}</p> */}
              </Card>
            )}
          </Row>
        </Card>
        <Card>
          <h1
            className="gx-text-center heading-big"
            style={{ marginBottom: "30px" }}
          >
            {this.lang.AboutHeading}
          </h1>
          <p className="gx-text-center text-medium">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro sed
            corrupti exercitationem dolor atque esse cumque, necessitatibus ab
            expedita quae, dolore totam possimus at eius temporibus provident
            illum numquam error!
          </p>
        </Card>
        <Card>
          <h1
            className="gx-text-center heading-big"
            style={{ marginBottom: "30px" }}
          >
            Assets That Can Be Tokenized
          </h1>
          <hr className="heading-bottom-line gx-text-center" />

          <Row className="about-row gx-text-center">
            {this.antd.colmd6(
              <div>
                <img src="/assets/images/money.svg" alt={this.lang.Loans} />
                <h1 className="heading-big">{this.lang.Loans}</h1>
              </div>
            )}
            {this.antd.colmd6(
              <div>
                <img
                  src="/assets/images/bank-statement.svg"
                  alt={this.lang.Shares}
                />
                <h1 className="heading-big">{this.lang.Shares}</h1>
              </div>
            )}

            {this.antd.colmd6(
              <div>
                <img
                  src="/assets/images/building.svg"
                  alt={this.lang.RealEstate}
                />
                <h1 className="heading-big">{this.lang.RealEstate}</h1>
              </div>
            )}

            {this.antd.colmd6(
              <div>
                <img src="/assets/images/funding.svg" alt={this.lang.Funds} />
                <h1 className="heading-big">{this.lang.Funds}</h1>
              </div>
            )}
          </Row>
        </Card>
      </>
    );
  }
}