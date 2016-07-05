var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FlashDeckComponent = (function (_super) {
    __extends(FlashDeckComponent, _super);
    function FlashDeckComponent() {
        var _this = this;
        _super.call(this);
        this.next = function () {
            if (_this.state.index < _this.props.flashCards.length - 1) {
                _this.state.index++;
                _this.setState(_this.state);
            }
        };
        this.previous = function () {
            if (_this.state.index != 0) {
                _this.state.index--;
                _this.setState(_this.state);
            }
        };
        this.nextButtonEnabled = function () {
            return (_this.state.index < _this.props.flashCards.length - 1);
        };
        this.previousButtonEnabled = function () {
            return (_this.state.index != 0);
        };
        this.state = {
            index: 0
        };
    }
    Object.defineProperty(FlashDeckComponent.prototype, "currentFlashCard", {
        get: function () {
            return (this.props.flashCards[this.state.index]);
        },
        enumerable: true,
        configurable: true
    });
    FlashDeckComponent.prototype.render = function () {
        var divStyle = {
            display: "flex",
            flexDirection: "column",
            backgroundColor: "Yellow",
            padding: "5px",
        };
        return (React.createElement("div", {style: divStyle, class: "FlashDeck"}, React.createElement("h1", null, "Card ", this.state.index + 1, " of ", this.props.flashCards.length), React.createElement(FlashCardComponent, React.__spread({}, this.currentFlashCard)), React.createElement("button", {onClick: this.previous, disabled: !this.previousButtonEnabled()}, "Previous"), React.createElement("button", {onClick: this.next, disabled: !this.nextButtonEnabled()}, "Next")));
    };
    return FlashDeckComponent;
}(React.Component));
//# sourceMappingURL=FlashDeckComponent.js.map