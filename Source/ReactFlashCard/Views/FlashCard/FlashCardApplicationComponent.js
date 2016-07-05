class FlashCardApplicationComponent extends React.Component {
    render() {
        var divStyle = {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            //opacity: 0.0,
            //width: "100%",
            //height: "100%",
            //zIndex: 10,
            //top: 0,
            //left: 0,
            //position: "absolute",
            background: "pink"
        };
        return (React.createElement("div", {style: divStyle}, React.createElement(FlashDeckComponent, React.__spread({}, thaiFlashDeck))));
    }
}
ReactDOM.render(React.createElement(FlashCardApplicationComponent, null), document.getElementById('content'));
//# sourceMappingURL=FlashCardApplicationComponent.js.map