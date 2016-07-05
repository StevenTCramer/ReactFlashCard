class FlashCardComponent extends React.Component {
    constructor(...args) {
        super(...args);
        this.handleClick = () => {
            var htmlPlayer;
            htmlPlayer = this.refs["player"];
            htmlPlayer.play();
        };
    }
    renderFactoid(aFactoid) {
        switch (aFactoid.type) {
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
    }
    render() {
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
    }
}
class AnswerComponent extends React.Component {
    render() {
        var divStyle = {
            display: "flex",
            alignItems: "center",
            backgroundColor: "MistyRose",
        };
        return (React.createElement("div", {style: divStyle}, React.createElement("div", {style: { paddingRight: "5px", paddingLeft: "5px" }}, "some input: "), React.createElement("input", null)));
    }
}
//# sourceMappingURL=FlashCardComponent.js.map