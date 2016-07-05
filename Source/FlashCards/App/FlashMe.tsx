import * as React from 'react';

export class FlashMe extends React.Component<{}, {}> {
    thaiFlashDeck: FlashDeck;
    XmlHttpRequest: XMLHttpRequest;


    componentDidMount = (): void => {
        this.getData();
    }

    componentWillUnmount = (): void => {
        this.XmlHttpRequest.abort();
    }


    render() {
        var divStyle: React.CSSProperties = {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            background: "pink"
        };

        return (
            <div style={divStyle}>FlashMe</div>
        );
    }

    getData = (): void => {
        this.XmlHttpRequest = new XMLHttpRequest();
        this.XmlHttpRequest.open('GET', encodeURI('/FlashCardApplication/FlashCardApplicationFeature'));
        this.XmlHttpRequest.onload = function () {
            if (this.XmlHttpRequest.status === 200) {
                var data = JSON.parse(this.XmlHttpRequest.responseText);
                this.setState(data);
            }
            else {
                alert('Request failed.  Returned status of ' + this.XmlHttpRequest.status);
            }
        };
        this.XmlHttpRequest.send();
    }
}