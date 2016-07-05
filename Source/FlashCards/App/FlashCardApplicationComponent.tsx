import * as React from 'react';
import * as Mui from 'material-ui';

export class FlashCardApplicationComponent extends React.Component<{}, FlashCardApplication> {
    thaiFlashDeck: FlashDeck;

    XmlHttpRequest: XMLHttpRequest;

    constructor() {
        super();
        this.state = {
            name:"",
            factoidCategories:[],
            flashCardPlayerOptionsList: [],
            flashDecks: [],
            guid: ""     
        };
    }

    componentDidMount = (): void => {
        this.getData();
    }

    componentWillUnmount = (): void => {
        this.XmlHttpRequest.abort();
    }

    //<FlashDeckComponent {...this.state.flashDecks[0]}/>
    render() {
        var divStyle: React.CSSProperties = {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            background: "pink"
        };


        return (
            <div style={divStyle}>
          
                <Mui.RaisedButton
                    key={1}
                    ref="btn1"
                    label="Super Secret Password"
                    primary={true} />
            </div>            
        );
    }

    getData = (): void => {
        this.XmlHttpRequest = new XMLHttpRequest();
        this.XmlHttpRequest.open('GET', encodeURI('/FlashCardApplication/FlashCardApplicationFeature'));
        this.XmlHttpRequest.onload = function () {
            if (this.XmlHttpRequest.status === 200) {
                var data = JSON.parse(this.XmlHttpRequest.responseText);     
                this.setState(data) ;
            }
            else {
                alert('Request failed.  Returned status of ' + this.XmlHttpRequest.status);
            }
        };
        this.XmlHttpRequest.send(); 
    }
}


class TestComponent extends React.Component<{}, {}> {
    render() {
        return (            
                <FlashCardApplicationComponent/>
        );
    }
}
