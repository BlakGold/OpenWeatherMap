import React from "react";
import { iconUrlTemplate, iconField } from "../../globals/constants";
import styles from "./index.scss";

function Icon(props) {
  const { icon, alt, title } = props;
  const iconUrl = iconUrlTemplate.replace(iconField, icon);
  console.log(`*************************************************`);
  console.log(`Icon`);
  console.log(iconUrl);
  console.log(`*************************************************`);
  return <img className={styles.icon} alt={alt} title={title} src={iconUrl} />;
}

export default Icon;
