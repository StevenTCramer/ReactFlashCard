var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var factoidDivStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "Wheat",
    padding: "5px",
    border: "solid",
    borderColor: "Plum"
};
var FactoidComponent = (function (_super) {
    __extends(FactoidComponent, _super);
    function FactoidComponent() {
        _super.apply(this, arguments);
    }
    FactoidComponent.prototype.render = function () {
        var divStyle = { border: "solid", borderColor: "Plum" };
        return (React.createElement("div", {style: factoidDivStyle, class: "Factoid"}, React.createElement("div", null, this.props.factoidCategory.description, ": "), React.createElement("div", null, this.props.fact)));
    };
    return FactoidComponent;
}(React.Component));
var UnicodeFactoidComponent = (function (_super) {
    __extends(UnicodeFactoidComponent, _super);
    function UnicodeFactoidComponent() {
        _super.apply(this, arguments);
    }
    UnicodeFactoidComponent.prototype.render = function () {
        var ddStyle = { fontSize: "xx-large" };
        return (React.createElement("div", {style: factoidDivStyle, class: "UnicodeFactoid"}, React.createElement("div", null, this.props.factoidCategory.description, ": "), React.createElement("div", {style: ddStyle}, this.props.fact)));
    };
    return UnicodeFactoidComponent;
}(React.Component));
var AudioFactoidComponent = (function (_super) {
    __extends(AudioFactoidComponent, _super);
    function AudioFactoidComponent() {
        var _this = this;
        _super.apply(this, arguments);
        this.handleClick = function () {
            var htmlPlayer;
            htmlPlayer = _this.refs["player"];
            htmlPlayer.play();
        };
    }
    AudioFactoidComponent.prototype.render = function () {
        return (React.createElement("div", {style: factoidDivStyle, class: "AudioFactoid"}, React.createElement("audio", {ref: "player", src: this.props.fact, preload: "auto"}), React.createElement("div", {style: { paddingRight: 5 }}, this.props.factoidCategory.description), React.createElement("div", null, React.createElement("input", {type: "button", onClick: this.handleClick, value: "..."}))));
    };
    return AudioFactoidComponent;
}(React.Component));
var ImageFactoidComponent = (function (_super) {
    __extends(ImageFactoidComponent, _super);
    function ImageFactoidComponent() {
        _super.apply(this, arguments);
    }
    ImageFactoidComponent.prototype.render = function () {
        return (React.createElement("div", {style: factoidDivStyle, class: "Factoid"}, React.createElement("div", null, React.createElement("div", null, this.props.factoidCategory.description), React.createElement("div", null, this.props.fact))));
    };
    return ImageFactoidComponent;
}(React.Component));
var VideoFactoidComponent = (function (_super) {
    __extends(VideoFactoidComponent, _super);
    function VideoFactoidComponent() {
        _super.apply(this, arguments);
    }
    VideoFactoidComponent.prototype.render = function () {
        var divStyle = { border: "solid", borderColor: "Plum" };
        return (React.createElement("div", {style: factoidDivStyle, class: "Factoid"}, React.createElement("div", null, React.createElement("div", null, this.props.factoidCategory.description), React.createElement("div", null, this.props.fact))));
    };
    return VideoFactoidComponent;
}(React.Component));
//# sourceMappingURL=FactoidComponent.js.map