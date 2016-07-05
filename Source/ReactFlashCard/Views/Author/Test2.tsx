interface factoid {

}

interface Quiz {
    books: Book[];
}

interface Book {
    title: string;
}

class QuizComponent extends React.Component<Quiz, {}>
{
    render() {
        return (
            <div>
                {this.props.books.map((aBook) => {
                    return <BookComponent {...aBook}/>;
                }) }
            </div>
        );
    }
}

class BookComponent extends React.Component<Book, {}>
{
    render() {
        return (
            <div>
                <h4>{this.props.title}</h4>
            </div>
        );
    }
}

class Hello extends React.Component<{}, {}>
{

    render() {
        return (<div>
            Hello, World!
        </div>);
    }
}

class Inner extends React.Component<{}, {}>
{
    render() {
        return (
            <div>
                <h3>Inner</h3>
            </div>
        );
    }
}

class Outer extends React.Component<{}, {}>
{
    render() {
        return (
            <div>
                <h2>Outer</h2>
                <Inner/>
            </div>
        );
    }

}

var quiz: Quiz = {
    books: [
        { title: "The Lord of the Rings" },
        { title: "The Iliad" }
    ]
};

ReactDOM.render(
    <QuizComponent  {...quiz} />,
    document.getElementById('content')
);