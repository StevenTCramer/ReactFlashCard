"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="flashme.tsx" />
var React = require('react');
var ReactDOM = require('react-dom');
var FlashMe_1 = require("./FlashMe");
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        _super.apply(this, arguments);
    }
    App.prototype.render = function () {
        return (React.createElement("div", null, React.createElement(TestComponent, null), React.createElement(FlashMe_1.FlashMe, null)));
    };
    return App;
}(React.Component));
var TestComponent = (function (_super) {
    __extends(TestComponent, _super);
    function TestComponent() {
        _super.apply(this, arguments);
    }
    TestComponent.prototype.render = function () {
        return React.createElement("div", null, "TestComponent");
    };
    return TestComponent;
}(React.Component));
ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//ReactDOM.render(
//    <FlashCardApplicationComponent />,
//    document.getElementById('content')
//); 
//# sourceMappingURL=App.js.map