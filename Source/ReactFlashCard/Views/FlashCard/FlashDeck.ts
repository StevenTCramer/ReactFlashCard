interface FlashDeck {
    flashCards: FlashCard[];
    categories: FactoidCategory[];
}

interface FactoidCategory {
    id: number;
    description: string;
}