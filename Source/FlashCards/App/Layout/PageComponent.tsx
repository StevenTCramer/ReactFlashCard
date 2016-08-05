import * as React from "react";

//Components
import {SectionComponent} from "./SectionComponent";

//Interfaces
import {Page,Section} from "./Model";

//Misc
import {ColorPalette} from "./ColorPalette";

export class PageComponent extends React.Component<Page, {}> {

  renderSection = (aSection: Section) => {
    return (
      <SectionComponent {...aSection}/>
    );
  };

  render():JSX.Element {
    return (
      <div>
        {this.props.sections.map(this.renderSection)}
      </div>
    );
  }
}
