import * as React from 'react';
import {FactoidComponent, UnicodeFactoidComponent, AudioFactoidComponent, ImageFactoidComponent, VideoFactoidComponent} from './FactoidComponent';

export class FlashCardComponent extends React.Component<FlashCard, {}> {

    handleClick = () => {
        var htmlPlayer: HTMLAudioElement;
        htmlPlayer = this.refs["player"] as HTMLAudioElement;
        htmlPlayer.play();
    }

    renderFactoid(aFactoid: Factoid) {
        switch (aFactoid.factoidType) {
            case FactoidType.Text:
                return (<FactoidComponent {...aFactoid}/>);
            case FactoidType.Unicode:
                return (<UnicodeFactoidComponent {...aFactoid}/>);
            case FactoidType.Audio:
                return (<AudioFactoidComponent {...aFactoid}/>);
            case FactoidType.Image:
                return (<ImageFactoidComponent {...aFactoid}/>);
            case FactoidType.Video:
                return (<VideoFactoidComponent {...aFactoid}/>);
        }
    }

    render() {
        var liStyle: React.CSSProperties = { fontSize: "xx-large" };
        var ulStyle: React.CSSProperties = { listStyleType: "none" };
        var divStyle: React.CSSProperties = { border: "1px", borderStyle: "solid" };

        var outsideDivStyle: React.CSSProperties = {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "SkyBlue"
        };

        var dialogDivStyle: React.CSSProperties = {
            display: "flex",
            flexDirection: "column",
            backgroundColor: "WhiteSmoke",
            padding: "5px",
            margin: "5px"
        };

        return (
            <div style={outsideDivStyle}>
                <div style={dialogDivStyle} class="flash-card">
                    {this.props.factoids.map(this.renderFactoid) }
                    <AnswerComponent {...this.props.factoids[0]} />
                </div>
            </div>
        );
    }
}

class AnswerComponent extends React.Component<Factoid, {}> {

    render() {
        var divStyle: React.CSSProperties = {
            display: "flex",
            alignItems: "center",
            backgroundColor: "MistyRose",
        };

        return (
            <div style={divStyle}>
                <div style={{ paddingRight: "5px", paddingLeft: "5px" }}>some input: </div>
                <input></input>
            </div>
        )
    }
}

