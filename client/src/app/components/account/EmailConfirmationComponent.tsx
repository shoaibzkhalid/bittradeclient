import { BaseComponent } from "../base/BaseComponent";
import * as React from "react";
import { mdCallResponse } from "../../../models/call-response";
import { mdFormControl } from "../../../shared/form-control";
import { Transitions, mdTransition } from "../../../models/transitions";
import { TransitionState } from "../../../enums/transition";
import { mdAnimControl } from "../../../models/anim-control";
import { Button } from "antd";
import { SocketCustomEvents } from "../../../enums/socket";
import { mdRegisterSocketEvent } from "../../../models/register-socket-event";

export default class EmailConfirmationComponent extends BaseComponent {
  render() {
    this.initShorts();
    return (
      <>
        <div className="gx-text-center">
          <img
            className="gx-mt-2 gx-mb-2"
            src="/assets/images/footer-logo.png"
            width={180}
            height={88}
          />
        </div>
        <div
          className="gx-login-container"
          style={{ overflow: "auto", paddingBottom: "120px", height: "unset" }}
        >
          <div
            className="gx-login-content gx-text-center"
            style={{ maxWidth: "500px" }}
          >
            <div className="gx-login-header">
              <h1 className="gx-login-title">
                {this.state.verificationEmailHeader}
              </h1>
              <h2 className="gx-text-primary">{this.g.email}</h2>
            </div>
            <div className="gx-mb-3">
              {this.animatedCSSDiv(
                this.faicon("envelope-open-text", "10x"),
                this.state.animValues.mail_img
              )}
            </div>
            <p className="p-body color-white" style={{ fontSize: "18px" }}>
              {this.state.verificationEmailDetail}
            </p>
            <Button
              loading={this.state.showLoadingOnResetButton}
              disabled={this.state.disableResendEmailButton}
              type={"primary"}
              onClick={this.sendSignupVerificatinEmail}
            >
              {this.lang.ResendEmail}
            </Button>
          </div>
        </div>
      </>
    );
  }

  constructor(props) {
    super(props);
    this.init();
  }

  init() {
    this.state = {
      verificationEmailHeader: this.addNewLineHTML(
        this.lang.VerificationEmailSent.split(/\n/g)
      ),
      //  this.lang.VerificationEmailSent.replace(/\n/g, `<br/>`),
      verificationEmailDetail: this.addNewLineHTML(
        this.lang.VerificationEmailSentDetail.split(/\n/g)
      ),
      // verificationEmailDetail: this.lang.VerificationEmailSentDetail.replace(/\n/g, `<br/>`),
      disableResendEmailButton: false,
      showLoadingOnResetButton: false,
      animValues: {
        mail_img: new mdAnimControl(
          this.getTransition(Transitions.pulse, TransitionState.Running),
          "mail_img",
          true
        )
      }
    };
  }

  componentWillMount = () => {
    this.log.debug("registerEvent " + SocketCustomEvents.EmailVerified);
    this.socket.registerEvent(SocketCustomEvents.EmailVerified, () => {
      this.redirectToLogin(2000);
    });
    this.socket.emitEvent(
      SocketCustomEvents.AwaitingEmailVerification,
      this.g.username
    );
    // this.socket.emitEvent(this.constants.SocketEvents.WaitEmailVerification, this.g.username);
  };

  componentWillUnmount = () => {
    this.socket.unregisterEvent(SocketCustomEvents.EmailVerified);
  };

  sendSignupVerificatinEmail = ev => {
    this.updateState({
      showLoadingOnResetButton: true
    });
    this.http
      .get<mdCallResponse>(
        this.constants.EndPoints.GetSendSignUpVerificationEmail
      )
      .then((res: mdCallResponse) => {
        if (res) {
          if (!res.isSuccess) {
            this.errorNotification(res.message);
          } else {
            let newState = {
              ...this.state
            };
            if (ev) {
              newState = {
                ...newState,
                disableResendEmailButton: true
              };
            }
            newState = {
              ...newState,
              verificationEmailHeader: this.lang.VerificationEmailSentAgain
            };
            this.setState(newState);
            this.successNotification(res.message);
          }
        }
        this.updateState({
          showLoadingOnResetButton: false
        });
      })
      .catch(error => {
        this.log.debug(error);
        this.updateState({
          showLoadingOnResetButton: false
        });
      });
  };
}