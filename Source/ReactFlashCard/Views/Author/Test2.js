class QuizComponent extends React.Component {
    render() {
        return (React.createElement("div", null, this.props.books.map((aBook) => {
            return React.createElement(BookComponent, React.__spread({}, aBook));
        })));
    }
}
class BookComponent extends React.Component {
    render() {
        return (React.createElement("div", null, React.createElement("h4", null, this.props.title)));
    }
}
class Hello extends React.Component {
    render() {
        return (React.createElement("div", null, "Hello, World!"));
    }
}
class Inner extends React.Component {
    render() {
        return (React.createElement("div", null, React.createElement("h3", null, "Inner")));
    }
}
class Outer extends React.Component {
    render() {
        return (React.createElement("div", null, React.createElement("h2", null, "Outer"), React.createElement(Inner, null)));
    }
}
var quiz = {
    books: [
        { title: "The Lord of the Rings" },
        { title: "The Iliad" }
    ]
};
ReactDOM.render(React.createElement(QuizComponent, React.__spread({}, quiz)), document.getElementById('content'));
//# sourceMappingURL=Test2.js.map