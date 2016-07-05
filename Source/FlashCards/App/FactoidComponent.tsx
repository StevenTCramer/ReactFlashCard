import * as React from 'react';

var factoidDivStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "Wheat",
    padding: "5px",
    border: "solid",
    borderColor: "Plum"
    //zIndex: 15
};

export class FactoidComponent extends React.Component<Factoid, {}> {

    render() {
        var divStyle: React.CSSProperties = { border: "solid", borderColor: "Plum" }
        return (
            <div style={factoidDivStyle} class="Factoid">
                <div>{this.props.factoidCategory.description}: </div>
                <div>{this.props.fact}</div>
            </div>
        );
    }
}

export class UnicodeFactoidComponent extends React.Component<Factoid, {}> {
    render() {
        var ddStyle: React.CSSProperties = { fontSize: "xx-large" }
        return (
            <div style={factoidDivStyle} class="UnicodeFactoid" >
                <div>{this.props.factoidCategory.description}: </div>
                <div style={ddStyle}>{this.props.fact}</div>
            </div>
        )
    }
}


export class AudioFactoidComponent extends React.Component<Factoid, {}> {

    handleClick = () => {
        var htmlPlayer: HTMLAudioElement;
        htmlPlayer = this.refs["player"] as HTMLAudioElement;
        htmlPlayer.play();
    }

    render() {
        return (
            <div style={factoidDivStyle} class="AudioFactoid">
                <audio ref="player" src={this.props.fact} preload="auto"></audio>
                <div style={{ paddingRight: 5 }}>{this.props.factoidCategory.description}</div>
                <div><input type="button" onClick={this.handleClick} value="..."/></div>
            </div>
        );
    }
}

export class ImageFactoidComponent extends React.Component<Factoid, {}> {
    render() {
        return (
            <div style={factoidDivStyle} class="Factoid">
                <div>
                    <div>{this.props.factoidCategory.description}</div>
                    <div>{this.props.fact}</div>
                </div>
            </div>
        );
    }
}

export class VideoFactoidComponent extends React.Component<Factoid, {}> {
    render() {
        var divStyle: React.CSSProperties = { border: "solid", borderColor: "Plum" }
        return (
            <div style={factoidDivStyle} class="Factoid">
                <div>
                    <div>{this.props.factoidCategory.description}</div>
                    <div>{this.props.fact}</div>
                </div>
            </div>
        );
    }
}