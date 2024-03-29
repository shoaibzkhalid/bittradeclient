import React from "react";
// First way to import
import { ClipLoader } from "react-spinners";
import { mdProps } from "../models/props";
import { SpinnerSize } from "../enums/general";

export class ClipLoaderComponent extends React.Component<mdProps> {
  constructor(props) {
    super(props);
  }
  render() {
    const style = `{
    display: block;
    margin: 0 auto;
    border-color: ${global.mainSpinnerConfig.color};
    border-bottom-color: transparent;
}`;
    return this.props.globals.showMainLoader ? (
      <div className="black-overlay">
        <div className="overlay-content">
          <ClipLoader
            css={style}
            sizeUnit={"px"}
            size={this.getSize()}
            loading={this.props.globals.showMainLoader}
          />
        </div>
      </div>
    ) : null;
  }

  getSize() {
    switch (global.mainSpinnerConfig.size) {
      case SpinnerSize.small:
        return 20;
      case SpinnerSize.medium:
        return 60;
      case SpinnerSize.large:
        return 100;
      default:
        return 35;
    }
  }
}
