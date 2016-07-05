"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var FlashMe = (function (_super) {
    __extends(FlashMe, _super);
    function FlashMe() {
        var _this = this;
        _super.apply(this, arguments);
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
    }
    FlashMe.prototype.render = function () {
        var divStyle = {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            background: "pink"
        };
        return (React.createElement("div", {style: divStyle}, "FlashMe"));
    };
    return FlashMe;
}(React.Component));
exports.FlashMe = FlashMe;
//# sourceMappingURL=flashme.js.map