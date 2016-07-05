var staticNameData = [
    "Priscila",
    "Shawnda",
    "Lakita",
    "Elana",
    "April",
    "Dexter",
    "Marx",
    "Marcela",
    "Zonia",
    "Merrie",
    "Dorie",
    "Sybil",
    "Lyn",
    "Catharine",
    "Edmond",
    "Lizeth",
    "Leonarda",
    "Rory",
    "Silas",
    "David"
];
class BrainApplicationComponent extends React.Component {
    render() {
        return (React.createElement("div", null, React.createElement("div", {className: "title"}, "Welcome to Brain.fm Code Challenge.", React.createElement("br", null), "Completed by Steven T.Cramer"), React.createElement(PersonListContainer, null)));
    }
}
class PersonListContainer extends React.Component {
    constructor() {
        super();
        this.checkFilter = (aPerson) => {
            return aPerson.name.toLowerCase().includes(this.state.search);
        };
        this.filterPeople = () => {
            if (this.state.search) {
                this.filteredPeople = this.state.people.filter(this.checkFilter);
            }
            else {
                this.filteredPeople = this.state.people;
            }
        };
        this.setSearchString = (aSearchString) => {
            this.state.search = aSearchString.toLowerCase();
            this.setState(this.state);
        };
        this.buildPerson = (aName, index) => {
            var person = {
                id: index,
                name: aName
            };
            return person;
        };
        this.getData = () => {
            // do api call with promise in real world
            // but for this the data is static.
            return staticNameData.map(this.buildPerson);
        };
        this.deletePerson = (aPerson) => {
            _.remove(this.state.people, (person) => person.id === aPerson.id);
            this.state.modalPerson = null;
            this.setState(this.state);
        };
        this.showModal = (aPerson) => {
            this.state.modalPerson = aPerson;
            this.setState(this.state);
        };
        this.cancelModal = () => {
            this.state.modalPerson = null;
            this.setState(this.state);
        };
        this.state = {
            people: this.getData(),
            modalPerson: null,
            search: null
        };
        this.filteredPeople = this.state.people;
    }
    render() {
        this.filterPeople();
        return (React.createElement(PersonListComponent, React.__spread({}, this)));
    }
}
class PersonListComponent extends React.Component {
    constructor(...args) {
        super(...args);
        this.renderName = (aPerson) => {
            var personProps = {
                person: aPerson,
                handleClick: this.props.showModal
            };
            return (React.createElement(PersonComponent, React.__spread({}, personProps)));
        };
    }
    render() {
        var modalDialog;
        if (this.props.state.modalPerson) {
            var deletePersonComponentProps = {
                person: this.props.state.modalPerson,
                delete: this.props.deletePerson,
                cancel: this.props.cancelModal
            };
            modalDialog = React.createElement(DeletePersonComponent, React.__spread({}, deletePersonComponentProps));
        }
        else {
            modalDialog = null;
        }
        return (React.createElement("div", null, React.createElement("br", null), React.createElement("div", null, "Click any item to delete."), React.createElement(SearchComponent, React.__spread({}, this.props)), React.createElement("div", null, React.createElement("ul", null, React.createElement("li", null, this.props.filteredPeople.map(this.renderName)))), modalDialog));
    }
}
class SearchComponent extends React.Component {
    constructor(...args) {
        super(...args);
        this.handleOnChange = () => {
            var filterInput = this.refs["Filter"];
            this.props.setSearchString(filterInput.value);
        };
    }
    render() {
        var debouncedOnChange = _.debounce(this.handleOnChange, 250);
        return (React.createElement("div", null, React.createElement("br", null), "Filter:", React.createElement("input", {ref: "Filter", type: "textbox", onChange: debouncedOnChange})));
    }
}
class PersonComponent extends React.Component {
    constructor(...args) {
        super(...args);
        this.handleClick = () => {
            this.props.handleClick(this.props.person);
        };
    }
    render() {
        var spanStyle = {
            cursor: "pointer"
        };
        return (React.createElement("div", null, React.createElement("span", {onClick: this.handleClick, style: spanStyle}, this.props.person.name)));
    }
}
class DeletePersonComponent extends React.Component {
    constructor(...args) {
        super(...args);
        this.handleDelete = () => {
            this.props.delete(this.props.person);
        };
    }
    render() {
        var outsideDivStyle = {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0.9,
            width: "100%",
            height: "100%",
            zIndex: 10,
            top: 0,
            left: 0,
            position: "absolute",
            background: "#000"
        };
        var dialogDivStyle = {
            display: "flex",
            flexDirection: "column",
            backgroundColor: "grey",
            padding: "5px",
            zIndex: 15
        };
        var buttonDivStyle = {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            padding: "5px"
        };
        return (React.createElement("div", {style: outsideDivStyle}, React.createElement("div", {style: dialogDivStyle}, React.createElement("div", null, "Do you want to delete ", this.props.person.name, "?"), React.createElement("div", {style: buttonDivStyle}, React.createElement("button", {onClick: this.handleDelete}, "Delete"), React.createElement("button", {onClick: this.props.cancel}, "Cancel")))));
    }
}
ReactDOM.render(React.createElement(BrainApplicationComponent, null), document.getElementById('app'));
//# sourceMappingURL=AppComponent.js.map