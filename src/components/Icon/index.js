import React from "react";
import classnames from "classnames";
import {
  iconUrlTemplate,
  iconField,
  icon2xField
} from "../../globals/constants";
import styles from "./index.scss";

function Icon(props) {
  const { icon, alt, title, small } = props;
  let iconUrl = iconUrlTemplate.replace(iconField, icon);
  iconUrl = small ? iconUrl.replace(icon2xField, "") : iconUrl;
  console.log(`*************************************************`);
  console.log(`Icon`);
  console.log(iconUrl);
  console.log(`*************************************************`);
  return (
    <img
      className={classnames(styles.icon, small ? styles.small : "")}
      alt={alt}
      title={title}
      src={iconUrl}
    />
  );
}

export default Icon;
