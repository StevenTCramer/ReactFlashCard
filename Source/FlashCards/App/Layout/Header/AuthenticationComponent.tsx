import * as React from "react";
import {AuthenticationProperties} from "../Model";

//Misc
import {ColorPalette} from "../ColorPalette";

export class AuthenticationComponent extends React.Component<AuthenticationProperties, {}> {
  render(): JSX.Element {

    var authenticationSectionStyle: React.CSSProperties = {
      //border: "solid",
      //borderColor: ColorPalette.debugPalette[2]
    };

    return (
      <div class="Authentication" style={authenticationSectionStyle}>Authentication Stuff</div>
    );
  }
}
