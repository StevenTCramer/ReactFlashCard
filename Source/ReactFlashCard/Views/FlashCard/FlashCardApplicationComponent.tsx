class FlashCardApplicationComponent extends React.Component<{}, {}> {

    render() {
        var divStyle: React.CSSProperties = {
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

        return (
            <div style={divStyle}>
                <FlashDeckComponent {...thaiFlashDeck}/>
            </div>
        );
    }
}

ReactDOM.render(
    <FlashCardApplicationComponent />,
    document.getElementById('content')
);