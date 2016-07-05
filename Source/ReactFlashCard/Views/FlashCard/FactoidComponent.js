var factoidDivStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "Wheat",
    padding: "5px",
    border: "solid",
    borderColor: "Plum"
};
class FactoidComponent extends React.Component {
    render() {
        var divStyle = { border: "solid", borderColor: "Plum" };
        return (React.createElement("div", {style: factoidDivStyle, class: "Factoid"}, React.createElement("div", null, this.props.category.description, ": "), React.createElement("div", null, this.props.fact)));
    }
}
class UnicodeFactoidComponent extends React.Component {
    render() {
        var ddStyle = { fontSize: "xx-large" };
        return (React.createElement("div", {style: factoidDivStyle, class: "UnicodeFactoid"}, React.createElement("div", null, this.props.category.description, ":"), React.createElement("div", {style: ddStyle}, this.props.fact)));
    }
}
class AudioFactoidComponent extends React.Component {
    constructor(...args) {
        super(...args);
        this.handleClick = () => {
            var htmlPlayer;
            htmlPlayer = this.refs["player"];
            htmlPlayer.play();
        };
    }
    render() {
        return (React.createElement("div", {style: factoidDivStyle, class: "AudioFactoid"}, React.createElement("audio", {ref: "player", src: this.props.fact, preload: "auto"}), React.createElement("div", {style: { paddingRight: 5 }}, this.props.category.description), React.createElement("div", null, React.createElement("input", {type: "button", onClick: this.handleClick, value: "..."}))));
    }
}
class ImageFactoidComponent extends React.Component {
    render() {
        return (React.createElement("div", {style: factoidDivStyle, class: "Factoid"}, React.createElement("div", null, React.createElement("div", null, this.props.category.description), React.createElement("div", null, this.props.fact))));
    }
}
class VideoFactoidComponent extends React.Component {
    render() {
        var divStyle = { border: "solid", borderColor: "Plum" };
        return (React.createElement("div", {style: factoidDivStyle, class: "Factoid"}, React.createElement("div", null, React.createElement("div", null, this.props.category.description), React.createElement("div", null, this.props.fact))));
    }
}
//# sourceMappingURL=FactoidComponent.js.map