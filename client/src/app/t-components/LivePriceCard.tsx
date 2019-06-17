import React from "react";

import Widget from "../../components/Widget/index";


const LivePriceWidget = ({ cardColor, icon, title, subTitle, iconColor }) => {
  return (
    <Widget styleName={`gx-card-full gx-p-3 gx-bg-${cardColor} gx-text-white`}>
      <div className="gx-media gx-align-items-center gx-flex-nowrap">
        <div className="gx-mr-2 gx-mr-xxl-3">
          {/* <FontAwesomeIcon icon={icon} /> */}
          <i className={`icon icon-${icon} gx-fs-icon-lg`} />
        </div>
        <div className="gx-media-body">
          <h1 className="gx-fs-lg gx-font-weight-medium gx-mb-1 gx-text-white">
            {title}
          </h1>
          <p className="gx-mb-0">{subTitle}</p>
        </div>
      </div>
    </Widget>
  );
};

export default LivePriceWidget;
