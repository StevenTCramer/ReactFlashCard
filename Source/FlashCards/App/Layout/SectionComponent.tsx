import * as React from "react";

//Interfaces
import {Section} from "./Model";

export class SectionComponent extends React.Component<Section, {}> {
    render():JSX.Element {
        return (
            <div id="section" class="section">
              Section Content Here.
            </div>
        );
    }
}
