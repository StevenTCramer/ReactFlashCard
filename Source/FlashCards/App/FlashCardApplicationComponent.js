"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Mui = require('material-ui');
var FlashCardApplicationComponent = (function (_super) {
    __extends(FlashCardApplicationComponent, _super);
    function FlashCardApplicationComponent() {
        var _this = this;
        _super.call(this);
        this.componentDidMount = function () {
            _this.getData();
        };
        this.componentWillUnmount = function () {
            _this.XmlHttpRequest.abort();
        };
        this.getData = function () {
            _this.XmlHttpRequest = new XMLHttpRequest();
            _this.XmlHttpRequest.open('GET', encodeURI('/FlashCardApplication/FlashCardApplicationFeature'));
            _this.XmlHttpRequest.onload = function () {
                if (this.XmlHttpRequest.status === 200) {
                    var data = JSON.parse(this.XmlHttpRequest.responseText);
                    this.setState(data);
                }
                else {
                    alert('Request failed.  Returned status of ' + this.XmlHttpRequest.status);
                }
            };
            _this.XmlHttpRequest.send();
        };
        this.state = {
            name: "",
            factoidCategories: [],
            flashCardPlayerOptionsList: [],
            flashDecks: [],
            guid: ""
        };
    }
    //<FlashDeckComponent {...this.state.flashDecks[0]}/>
    FlashCardApplicationComponent.prototype.render = function () {
        var divStyle = {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            background: "pink"
        };
        return (React.createElement("div", {style: divStyle}, React.createElement(Mui.RaisedButton, {key: 1, ref: "btn1", label: "Super Secret Password", primary: true})));
    };
    return FlashCardApplicationComponent;
}(React.Component));
var TestComponent = (function (_super) {
    __extends(TestComponent, _super);
    function TestComponent() {
        _super.apply(this, arguments);
    }
    TestComponent.prototype.render = function () {
        return (React.createElement(FlashCardApplicationComponent, null));
    };
    return TestComponent;
}(React.Component));
//# sourceMappingURL=FlashCardApplicationComponent.js.map