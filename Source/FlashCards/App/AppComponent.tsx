import * as React from "react";
import * as ReactDOM from "react-dom";

import {SiteComponent} from "./Layout/SiteComponent";
import {HomePageComponent} from "./Pages/HomePageComponent";
import {App} from "./App";
import {data} from "./App";


class AppComponent extends React.Component<App, {}> {
  render(): JSX.Element {
    return (
        <SiteComponent {... this.props.site}  />
    );
  }
}

data.site.currentPage = <HomePageComponent />;

ReactDOM.render(
  <AppComponent site={data.site}/>,
  document.getElementById("app")
);
