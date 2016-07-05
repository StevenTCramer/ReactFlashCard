enum FactoidType {
    Text,
    Unicode,
    Audio,
    Image,
    Video
}

interface Entity {
    guid: string;
}

interface FactoidCategory extends Entity {
    description: string;
    flashCardApplication: FlashCardApplication;
    flashCardApplicationGuid: string;
}

interface FlashCard extends Entity {
    factoids: Factoid[];
    flashDeck: FlashDeck;
    flashDeckGuid: string;
}

interface FlashDeck extends Entity {
    flashCards: FlashCard[];
    factoidCategories: FactoidCategory[];
    flashCardApplication: FlashCardApplication;
    flashCardApplicationGuid: string;
}

interface Factoid extends Entity {
    factoidType: FactoidType;
    factoidCategory: FactoidCategory;
    flashCard: FlashCard;
    flashCardGuid: string;
    fact: string;
}

interface FlashCardPlayerOptions extends Entity {
    flashDeck: FlashDeck;
    displayCategories: FactoidCategory[];
    evaluationCategory: FactoidCategory;
    flashCardApplication: FlashCardApplication;
    flashCardApplicationGuid: string;
}

interface FlashCardApplication extends Entity {
    name: string;
    flashCardPlayerOptionsList: FlashCardPlayerOptions[];
    flashDecks: FlashDeck[];
    factoidCategories: FactoidCategory[];
}

interface FlashCardSpaState {
    flashCardApplication: FlashCardApplication;

}