import * as React from "react";
import {Copyright} from "../Model";

export class CopyrightComponent extends React.Component<Copyright, {}> {
  render(): JSX.Element {
    var copyrightStyle: React.CSSProperties = {
      //border: "solid",
      //borderColor: "HotPink"
    };

    return (
      <div id="Copyright" class="copyright" style={copyrightStyle}>
        © {this.props.year} {this.props.name}
      </div>
    );
  }
}
