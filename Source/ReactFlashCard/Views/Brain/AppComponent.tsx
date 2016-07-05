var staticNameData: string[] = [
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

interface Person {
    id: number;
    name: string;
}

interface PersonProps {
    person: Person;
    handleClick(aPerson: Person): void;
}

class BrainApplicationComponent extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <div className="title">
                    Welcome to Brain.fm Code Challenge.
                    <br/>
                    Completed by Steven T.Cramer
                </div>
                <PersonListContainer/>
            </div>
        );
    }
}

interface PersonListState {
    people: Person[];
    modalPerson: Person;
    search: string;
}

class PersonListContainer extends React.Component<{}, PersonListState> {
    filteredPeople: Person[];

    constructor() {
        super();
        this.state = {
            people: this.getData(),
            modalPerson: null,
            search: null
        }
        this.filteredPeople = this.state.people;
    }

    checkFilter = (aPerson: Person): boolean => {
        return aPerson.name.toLowerCase().includes(this.state.search);
    }

    filterPeople = () => {
        if (this.state.search) {
            this.filteredPeople = this.state.people.filter(this.checkFilter);
        } else {
            this.filteredPeople = this.state.people;
        }
    }

    setSearchString = (aSearchString: string) => {
        this.state.search = aSearchString.toLowerCase();
        this.setState(this.state);
    }

    buildPerson = (aName: string, index: number) => {
        var person: Person = {
            id: index,
            name: aName
        };
        return person;
    }

    getData = (): Person[] => {
        // do api call with promise in real world
        // but for this the data is static.
        return staticNameData.map(this.buildPerson);
    }

    deletePerson = (aPerson: Person) => {
        _.remove(this.state.people, (person: Person) => person.id === aPerson.id);
        this.state.modalPerson = null;
        this.setState(this.state);
    }

    showModal = (aPerson: Person) => {
        this.state.modalPerson = aPerson;
        this.setState(this.state);
    }

    cancelModal = () => {
        this.state.modalPerson = null;
        this.setState(this.state);
    }

    render() {
        this.filterPeople();
        return (
            <PersonListComponent {...this}/>
        );
    }
}



class PersonListComponent extends React.Component<PersonListContainer, {}> {

    renderName = (aPerson: Person) => {
        var personProps: PersonProps = {
            person: aPerson,
            handleClick: this.props.showModal
        }
        return (
            <PersonComponent {...personProps}/>
        )
    }

    render() {

        var modalDialog;
        if (this.props.state.modalPerson) {
            var deletePersonComponentProps: DeletePersonComponentProps = {
                person: this.props.state.modalPerson,
                delete: this.props.deletePerson,
                cancel: this.props.cancelModal
            }
            modalDialog = <DeletePersonComponent {...deletePersonComponentProps}/>;
        } else {
            modalDialog = null;
        }

        return (
            <div>
                <br/>
                <div>Click any item to delete.</div>
                <SearchComponent {...this.props} />
                <div>
                    <ul>
                        <li>
                            {this.props.filteredPeople.map(this.renderName) }
                        </li>
                    </ul>
                </div>
                {modalDialog}
            </div>
        );
    }
}


class SearchComponent extends React.Component<PersonListContainer, {}>{

    refs: {
        [string: string]: any;
        filterInput: JSX.Element;
    }

    handleOnChange = () => {
        var filterInput: HTMLInputElement = this.refs["Filter"];
        this.props.setSearchString(filterInput.value);
    }

    render() {
        var debouncedOnChange = _.debounce(this.handleOnChange, 250);

        return (
            <div>
                <br/>
                Filter:
                <input ref="Filter" type="textbox" onChange={debouncedOnChange}/>
            </div>
        );
    }
}

class PersonComponent extends React.Component<PersonProps, {}> {
    handleClick = () => {
        this.props.handleClick(this.props.person);
    }

    render() {

    var spanStyle: React.CSSProperties = {
        cursor: "pointer"
    };

        return (
            <div>
                <span onClick={this.handleClick} style={spanStyle}>
                    {this.props.person.name}
                </span>
            </div>
        );
    }
}

interface DeletePersonComponentProps {
    person: Person;
    delete(aPerson: Person): void;
    cancel(): void;
}

class DeletePersonComponent extends React.Component<DeletePersonComponentProps, {}> {

    handleDelete = () => {
        this.props.delete(this.props.person);
    }

    render() {
        var outsideDivStyle: React.CSSProperties = {
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

        var dialogDivStyle: React.CSSProperties = {
            display: "flex",
            flexDirection: "column",
            backgroundColor: "grey",
            padding: "5px",
            zIndex: 15
        };

        var buttonDivStyle: React.CSSProperties = {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            padding: "5px"
        }
        
        return (
            <div style={outsideDivStyle}>
                <div style={dialogDivStyle}>
                    <div>
                        Do you want to delete {this.props.person.name}?
                    </div>
                    <div style={buttonDivStyle}>
                        <button onClick={this.handleDelete} >Delete</button>
                        <button onClick={this.props.cancel }>Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <BrainApplicationComponent/>,
    document.getElementById('app')
);