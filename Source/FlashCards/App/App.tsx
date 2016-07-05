import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {TestComponent } from "./TestComponent";


class App extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <TestComponent  />
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);

//ReactDOM.render(
//    <FlashCardApplicationComponent />,
//    document.getElementById('content')
//);