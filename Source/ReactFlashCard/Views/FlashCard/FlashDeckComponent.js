class FlashDeckComponent extends React.Component {
    constructor() {
        super();
        this.next = () => {
            if (this.state.index < this.props.flashCards.length - 1) {
                this.state.index++;
                this.setState(this.state);
            }
        };
        this.previous = () => {
            if (this.state.index != 0) {
                this.state.index--;
                this.setState(this.state);
            }
        };
        this.nextButtonEnabled = () => {
            return (this.state.index < this.props.flashCards.length - 1);
        };
        this.previousButtonEnabled = () => {
            return (this.state.index != 0);
        };
        this.state = {
            index: 0
        };
    }
    get currentFlashCard() {
        return (this.props.flashCards[this.state.index]);
    }
    render() {
        var divStyle = {
            display: "flex",
            flexDirection: "column",
            backgroundColor: "Yellow",
            padding: "5px",
        };
        return (React.createElement("div", {style: divStyle, class: "FlashDeck"}, React.createElement("h1", null, "Card ", this.state.index + 1, " of ", this.props.flashCards.length), React.createElement(FlashCardComponent, React.__spread({}, this.currentFlashCard)), React.createElement("button", {onClick: this.previous, disabled: !this.previousButtonEnabled()}, "Previous"), React.createElement("button", {onClick: this.next, disabled: !this.nextButtonEnabled()}, "Next")));
    }
}
//# sourceMappingURL=FlashDeckComponent.js.map