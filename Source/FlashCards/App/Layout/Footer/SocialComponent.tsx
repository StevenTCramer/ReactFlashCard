import * as React from "react";

//Interfaces
import {Social} from "../Model";

export class SocialComponent extends React.Component<Social, {}> {
  render(): JSX.Element {
    var socialStyle: React.CSSProperties = {
      //border: "solid",
      //borderColor: "LightGreen"
    };

    return (
      <div id="social" class="social" style={socialStyle}>
        twitter, fB etc...
      </div>
    );
  }
}
