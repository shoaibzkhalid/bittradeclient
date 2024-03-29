import { BaseComponent } from "../base/BaseComponent";
import React from "react";
import { Row } from "antd";
import { Link } from "react-router-dom";
import "./mainfooter.less";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../../containers/Logo/Logo";

export default class MainFooter extends BaseComponent {
  render() {
    this.initShorts();
    return (
      <>
        <div className="gx-header-horizontal-dark main-footer">
          <div className="gx-container gx-mt-5 gx-mb-5 footer">
            <Row>
              {this.links.map((l, i) => {
                return (
                  <React.Fragment key={i}>
                    {this.antd.colmd6(
                      <>
                        <p className="h2">{l.heading}</p>
                        <ul>
                          {l.children.map((c, i) => {
                            return (
                              <li key={i}>
                                <Link to={c.link}>{c.title}</Link>
                              </li>
                            );
                          })}
                        </ul>
                      </>
                    )}
                  </React.Fragment>
                );
              })}
              {this.antd.colmd6(
                <div className="social">
                  <p className="h2">{this.lang.Social}</p>
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/bitvelocityio/" className="fb">
                        <FontAwesomeIcon icon={["fab", "facebook-f"]} />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/bit_velocity" className="tw">
                        <FontAwesomeIcon icon={["fab", "twitter"]} />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/channel/UC0xlAuIbAfTO5XZq8mfh3aA" className="yt">
                        <FontAwesomeIcon icon={["fab", "youtube"]} />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/bitvelocityio/" className="insta">
                        <FontAwesomeIcon icon={["fab", "instagram"]} />
                      </a>
                    </li>
                  </ul>
                  <p className="p">
                    <Link to={this.getLink(this.constants.RoutePaths.Home)}>
                      <Logo />
                    </Link>
                  </p>
                </div>
              )}
            </Row>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <p>
              {this.lang.Phone}:&nbsp;{this.lang.BitVelocityMobile}&nbsp;
              <FontAwesomeIcon icon="phone" />
              &nbsp;|&nbsp;{this.lang.Email}:&nbsp;
              {this.lang.SupportEmail}&nbsp;
              <FontAwesomeIcon icon="envelope" />
            </p>
            {`${this.lang.Copyrights} ${this.lang.SiteCompanyName}, ${
              this.lang.Company
            } # ${this.lang.CompanyNumber}, © ${new Date().getFullYear()}`}
          </div>
        </div>
      </>
    );
  }

  links: any[];
  constructor(props) {
    super(props);
    this.init();
  }

  init() {
    this.links = [
      {
        heading: this.lang.Features,
        children: [
          {
            title: this.lang.TradeDemo,
            link: this.getLink(this.constants.RoutePaths.Trading)
          },
          {
            title: this.lang.InvestorsZone,
            link: this.getLink(this.constants.RoutePaths.InvestorsZone)
          },
          {
            title: this.lang.OurFees,
            link: this.getLink(this.constants.RoutePaths.OurFees)
          }
        ]
      },
      {
        heading: this.lang.Explore,
        children: [
          {
            title: this.lang.MarketStatistics,
            link: this.getLink(this.constants.RoutePaths.Market)
          },
          {
            title: this.lang.Security,
            link: this.getLink(this.constants.RoutePaths.Security)
          },

          {
            title: this.lang.AboutUs,
            link: this.getLink(this.constants.RoutePaths.AboutUs)
          }
        ]
      },
      {
        heading: this.lang.Support,
        children: [
          {
            title: this.lang.SupportCenter,
            link: this.getLink(this.constants.RoutePaths.Support)
          },
          {
            title: this.lang.KnowledgeBase,
            link: this.getLink(this.constants.RoutePaths.KnowledgeBase)
          },
          {
            title: this.lang.FAQ,
            link: this.getLink(this.constants.RoutePaths.FAQ)
          }
        ]
      }
    ];
  }
}
