var helloFlashCard = {
    factoids: [
        {
            type: FactoidType.Text,
            description: "english",
            fact: "hello"
        },
        {
            type: FactoidType.Text,
            description: "transliteration-mango",
            fact: "sawat1dii"
        },
        {
            type: FactoidType.Audio,
            description: "Thai",
            fact: "/Content/Thai/sawat1 dii-1-สวัสดี.mp3"
        },
        {
            type: FactoidType.Audio,
            description: "English",
            fact: "/Content/English/hello.mp3"
        },
        {
            type: FactoidType.Unicode,
            description: "Thai",
            fact: "สวัสดี",
        },
        {
            type: FactoidType.Image,
            description: "Image",
            fact: "hello",
            url: "/Content/Image/hello.png"
        },
        {
            type: FactoidType.Video,
            description: "Video",
            fact: "hello",
            url: "/Content/ASL/hello.mp4"
        }
    ]
};
var fineFlashCard = {
    factoids: [
        {
            type: FactoidType.Text,
            description: "english understood",
            fact: "I'm Fine"
        },
        {
            type: FactoidType.Text,
            description: "english literal",
            fact: "Fine"
        },
        {
            type: FactoidType.Text,
            description: "transliteration-mango",
            fact: "sabaai dii"
        },
        {
            type: FactoidType.Audio,
            description: "Thai",
            fact: "/Content/Thai/sabaaidii.mp3"
        },
        {
            type: FactoidType.Audio,
            description: "English Understood",
            fact: "/Content/English/Fine.mp3"
        },
        {
            type: FactoidType.Audio,
            description: "English Literal",
            fact: "/Content/English/Fine.mp3"
        },
        {
            type: FactoidType.Unicode,
            description: "Thai",
            fact: "สบายดี",
        }
    ]
};
var thaiFlashDeck = {
    flashCards: [helloFlashCard, fineFlashCard]
};
var additionFlashDeck = {
    flashCards: [
        {
            factoids: [
                {
                    type: FactoidType.Text,
                    description: "expression",
                    fact: "2+2"
                },
                {
                    type: FactoidType.Text,
                    description: "answer",
                    fact: "4"
                }]
        },
        {
            factoids: [
                {
                    type: FactoidType.Text,
                    description: "expression",
                    fact: "2+3"
                },
                {
                    type: FactoidType.Text,
                    description: "answer",
                    fact: "5"
                }]
        }
    ]
};
//# sourceMappingURL=FlashCardApplication.js.map