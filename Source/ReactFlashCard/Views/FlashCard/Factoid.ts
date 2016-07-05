enum FactoidType {
    Text,
    Unicode,
    Audio,
    Image,
    Video
}


interface Factoid {
    type: FactoidType;
    category: FactoidCategory;
    fact: string;
}

interface UnicodeFactoid extends Factoid {}

interface AudioFactoid extends Factoid {}

interface ImageFactoid extends Factoid {}

interface VideoFactoid extends Factoid { }

class FactoidEvaluator {
    constructor(aFactoid: Factoid) {

    }

    evaluate = (): boolean => {
        return false;
    };

}