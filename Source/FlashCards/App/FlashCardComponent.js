var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FlashCardComponent = (function (_super) {
    __extends(FlashCardComponent, _super);
    function FlashCardComponent() {
        var _this = this;
        _super.apply(this, arguments);
        this.handleClick = function () {
            var htmlPlayer;
            htmlPlayer = _this.refs["player"];
            htmlPlayer.play();
        };
    }
    FlashCardComponent.prototype.renderFactoid = function (aFactoid) {
        switch (aFactoid.factoidType) {
            case FactoidType.Text:
                return (React.createElement(FactoidComponent, React.__spread({}, aFactoid)));
            case FactoidType.Unicode:
                return (React.createElement(UnicodeFactoidComponent, React.__spread({}, aFactoid)));
            case FactoidType.Audio:
                return (React.createElement(AudioFactoidComponent, React.__spread({}, aFactoid)));
            case FactoidType.Image:
                return (React.createElement(ImageFactoidComponent, React.__spread({}, aFactoid)));
            case FactoidType.Video:
                return (React.createElement(VideoFactoidComponent, React.__spread({}, aFactoid)));
        }
    };
    FlashCardComponent.prototype.render = function () {
        var liStyle = { fontSize: "xx-large" };
        var ulStyle = { listStyleType: "none" };
        var divStyle = { border: "1px", borderStyle: "solid" };
        var outsideDivStyle = {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "SkyBlue"
        };
        var dialogDivStyle = {
            display: "flex",
            flexDirection: "column",
            backgroundColor: "WhiteSmoke",
            padding: "5px",
            margin: "5px"
        };
        return (React.createElement("div", {style: outsideDivStyle}, React.createElement("div", {style: dialogDivStyle, class: "flash-card"}, this.props.factoids.map(this.renderFactoid), React.createElement(AnswerComponent, React.__spread({}, this.props.factoids[0])))));
    };
    return FlashCardComponent;
}(React.Component));
var AnswerComponent = (function (_super) {
    __extends(AnswerComponent, _super);
    function AnswerComponent() {
        _super.apply(this, arguments);
    }
    AnswerComponent.prototype.render = function () {
        var divStyle = {
            display: "flex",
            alignItems: "center",
            backgroundColor: "MistyRose",
        };
        return (React.createElement("div", {style: divStyle}, React.createElement("div", {style: { paddingRight: "5px", paddingLeft: "5px" }}, "some input: "), React.createElement("input", null)));
    };
    return AnswerComponent;
}(React.Component));
//# sourceMappingURL=FlashCardComponent.js.map