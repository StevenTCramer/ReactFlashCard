var thaiFlashDeck: FlashDeck = {
    flashCards: [helloFlashCard, fineFlashCard],
    categories: [
        {
            id: 1,
            description: "English"
        },
        {
            id: 2,
            description: "English literal"
        }

};

var helloFlashCard: FlashCard = {
    factoids: [
        {
            type: FactoidType.Text,
            category: thaiFlashDeck.categories[0],            
            fact: "hello"
        },
        {
            type: FactoidType.Text,
            description: "transliteration-mango",
            fact: "sawat1dii"
        },
        <AudioFactoid>
        {
            type: FactoidType.Audio,
            description: "Thai",
            fact: "/Content/Thai/sawat1 dii-1-สวัสดี.mp3"
        },
        <AudioFactoid>
        {
            type: FactoidType.Audio,
            description: "English",
            fact: "/Content/English/hello.mp3"
        },
        <UnicodeFactoid>
        {
            type: FactoidType.Unicode,
            description: "Thai",
            fact: "สวัสดี",
        },
        <ImageFactoid>
        {
            type: FactoidType.Image,
            description: "Image",
            fact: "hello",
            url: "/Content/Image/hello.png"
        },
        <VideoFactoid>
        {
            type: FactoidType.Video,
            description: "Video",
            fact: "hello",
            url: "/Content/ASL/hello.mp4"
        }
    ]
};

var fineFlashCard: FlashCard = {
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
        <AudioFactoid>
        {
            type: FactoidType.Audio,
            description: "Thai",
            fact: "/Content/Thai/sabaaidii.mp3"
        },
        <AudioFactoid>
        {
            type: FactoidType.Audio,
            description: "English Understood",
            fact: "/Content/English/Fine.mp3"
        },
        <AudioFactoid>
        {
            type: FactoidType.Audio,
            description: "English Literal",
            fact: "/Content/English/Fine.mp3"
        },
        <UnicodeFactoid>
        {
            type: FactoidType.Unicode,
            description: "Thai",
            fact: "สบายดี",
        }
    ]
};




var additionFlashDeck: FlashDeck = {
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