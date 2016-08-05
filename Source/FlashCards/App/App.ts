import {Site} from "./Layout/Model";

export interface App {
  site: Site;
};

const palette: string[] = ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9",
  "#bc80bd", "#ccebc5", "#ffed6f"];

export var data: App = {
  site: {
    header: {
      logo: {
        name: "The Freeze Team",
        url: "/Static/Images/Tft.ico"
      },
      authenticationProperties: {
        username: "Mr. Freeze"
      },
      navigationItems: [{
        index: 1,
        name: "The Freeze Team",
        url: "http://www.thefreezeteam.com/",
        children: null
      }],
    },
    footer: {
      copyright: {
        name: "The Freeze Team",
        year: 2016
      },
      social: {
      },
      navigationItems: [{
        index: 1,
        name: "The Freeze Team",
        url: "http://www.thefreezeteam.com/",
        children: null
      }]
    },
    pages: null,
    currentPage: null
  }
};
