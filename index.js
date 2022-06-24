const PORT = process.env.PORT || 8000
const express = require('express')
const cors = require('cors')

const app = express()

// CORS (Cross-Origin Resource Sharing) used when creating API with NodeJS
app.use(cors());

//array objects
const quotes = 
    [
        //Prophet Muhammad (SAW)
        {
            quote: 'Speak a good word or remain silent',
            quotee: 'Prophet Muhammad (peace be upon him)'
        },
        {
            quote: 'The best among you are those who are best to their wives',
            quotee: 'Prophet Muhammad (peace be upon him)'
        },
        {
            quote: 'The strong man is not the good wrestler, the strong man is only the one who controls himself when he is angry',
            quotee: 'Prophet Muhammad (peace be upon him)'
        },
        {
            quote: 'If Allah wants to do good to somebody, He afflicts him with trials',
            quotee: 'Prophet Muhammad (peace be upon him)'
        },
        {
            quote: 'I guarantee a house in Jannah for one who gives up arguing, even if he is in the right; and I guarantee a home in the middle of Jannah for one who abandons lying even for the sake of fun; and I guarantee a house  in the highest part of Jannah for one who has good manners',
            quotee: 'Prophet Muhammad (peace be upon him)'
        },
        {
            quote: 'Be in this world like a stranger or one who is passing through',
            quotee: 'Prophet Muhammad (peace be upon him)'
        },
        {
            quote: 'Give charity without delay, for it stands in the way of calamity',
            quotee: 'Prophet Muhammad (peace be upon him)'
        },
        {
            quote: 'When you are three persons, then two of you should not whisper excluding the third person, for what would grieve him',
            quotee: 'Prophet Muhammad (peace be upon him)'
        },
        {
            quote: 'Know that victory comes with patience, relief with affliction, and ease with hardship',
            quotee: 'Prophet Muhammad (peace be upon him)'
        },
        {
            quote: 'For him who follows a path for seeking knowledge, Allah will ease for him the path to Paradise',
            quotee: 'Prophet Muhammad (peace be upon him)'
        },
        //Four Rashidun Caliph
        {
            quote: 'Taking pains to remove the pains of others is the true essence of generosity',
            quotee: 'Abu Bakr as-Siddiq'
        },
        {
            quote: 'Without knowledge action is useless and knowledge without action is futile',
            quotee: 'Abu Bakr as-Siddiq'
        },
        {
            quote: 'One of the worst sins is a person taking his sin lightly',
            quotee: 'Abu Bakr as-Siddiq'
        },
        {
            quote: 'He who avoids complaint invites happiness',
            quotee: 'Abu Bakr as-Siddiq'
        },
        {
            quote: 'A man who is shy and modest is an amazing character, but a woman who is shy and modest is beyond amazing',
            quotee: 'Abu Bakr as-Siddiq'
        },
        {
            quote: 'Sometimes the people with the worst past, create the best future',
            quotee: 'Umar Ibn al-Khattab'
        },
        {
            quote: 'No amount of guilt can change the past, and no amount of worrying can change the future',
            quotee: 'Umar Ibn al-Khattab'
        },
        {
            quote: 'A man should be like a child with his wife, but if she needs him. He should act like a man',
            quotee: 'Umar Ibn al-Khattab'
        },
        {
            quote: "If you see that someone has slipped, correct him, pray for him, and don't help shaytan against him (by insulting him)",
            quotee: 'Umar Ibn al-Khattab'
        },
        {
            quote: 'Sit with those who have sinned and repented, for they have the softest of hearts',
            quotee: 'Umar Ibn al-Khattab'
        },
        // {
        //     quote: 'To be alone means you avoid bad company. But to have a true friend is better than being alone',
        //     quotee: 'Umar Ibn al-Khattab'
        // },
        {
            quote: 'Worrying about the dunya is a darkness in the heart, while worrying about akhirah is a light in the heart',
            quotee: 'Uthman Ibn Affan'
        },
        {
            quote: 'Acquire wisdom from the story of those who have already passed',
            quotee: 'Uthman Ibn Affan'
        },
        {
            quote: 'Silence is the best treatment for anger',
            quotee: 'Uthman Ibn Affan'
        },
        {
            quote: 'A backbiter harms three persons, firstly himself, secondly the person whom he is addressing and thirdly the person whom he is backbiting',
            quotee: 'Uthman Ibn Affan'
        },
        {
            quote: 'Knowledge is better than wealth, knowledge protect you but wealth you have to protect it',
            quotee: 'Uthman Ibn Affan'
        },
        {
            quote: 'Be like a flower that gives its fragrance even to the hand that crushed it',
            quotee: 'Hazrat Ali Ibn Abi Talib'
        },
        {
            quote: 'There is no wealth like intelligence, no poverty like ignorance, and no inheritance like good manners',
            quotee: 'Hazrat Ali Ibn Abi Talib'
        },
        {
            quote: 'Never make a decision in anger and never make a promise in happiness',
            quotee: 'Hazrat Ali Ibn Abi Talib'
        },
        {
            quote: 'Patience is of 2 types: Enduring what you hate & abstaining from what you love',
            quotee: 'Hazrat Ali Ibn Abi Talib'
        },
        {
            quote: "Do not take someone's silence as his pride, perhaps he is busy fighting with his self",
            quotee: 'Hazrat Ali Ibn Abi Talib'
        }
    ]

// function to add id and increment it for every object in array
function addId(arr) {
    return arr.map(function(obj, index) {
        return Object.assign({ id: index }, obj);
    });
};
    
const quotesID = addId(quotes);


// function to get a random item from an array
function getRandomQuote(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];

    return item;
}


app.get('/', (req, res) => {
    res.send("Welcome to Islamic Advice API")
})


app.get('/advice', (req, res) => {
    const quote = getRandomQuote(quotesID);
    const json = JSON.stringify(quote);

    res.send(json)
})


app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))