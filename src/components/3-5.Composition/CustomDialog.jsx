import React from "react";
import CommonDialog from "./CommonDialog";

export default function CustomDialog(props) {
  return (
    <CommonDialog>
      <h1>{props.title}</h1>
      <h5>{props.desc}</h5>
    </CommonDialog>
  );
}
