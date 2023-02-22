import {defineStore} from 'pinia';

export const useTickerStore = defineStore({
    id: 'ticker', state: () => ({
        isLoad: true,
        tickers: [
            {"name": "S&P 500", "price": '3,972.61', "percent": '+1.89%'},
            {"name": "Nasdaq", "price": '3,972.61', "percent": '+1.89%'},
            {"name": "Crude oil", "price": '3,972.61', "percent": '+1.89%'},
            {"name": "US 10Yr", "price": '3,972.61', "percent": '+1.89%'},
            {"name": "Euro", "price": '3,972.61', "percent": '+1.89%'},
            {"name": "Dow Jones", "price": '3,972.61', "percent": '+1.89%'},
            {"name": "Russell 2000", "price": '3,972.61', "percent": '+1.89%'},
            {"name": "Gold", "price": '3,972.61', "percent": '+1.89%'},
            {"name": "Silver", "price": '3,972.61', "percent": '+1.89%'},
            {"name": "Bitcoin", "price": '3,972.61', "percent": '+1.89%'},
            {"name": "Silver", "price": '3,972.61', "percent": '+1.89%'},
            {"name": "Nikkei 225", "price": '3,972.61', "percent": '+1.89%'},
            {"name": "DAX", "price": '3,972.61', "percent": '+1.89%'},
            {"name": "FTSE 100", "price": '3,972.61', "percent": '+1.89%'},
            {"name": "Hang Seng", "price": '3,972.61', "percent": '+1.89%'},
            {"name": "Shanghai", "price": '3,972.61', "percent": '+1.89%'},
            {"name": "VIX", "price": '3,972.61', "percent": '+1.89%'},
            {"name": "US 30Yr", "price": '3,972.61', "percent": '+1.89%'},
            {"name": "US 2Yr", "price": '3,972.61', "percent": '+1.89%'},
            {"name": "US 5Yr", "price": '3,972.61', "percent": '+1.89%'}
        ]
    })
});
export const useSearchStore = defineStore({
    id: 'search', state: () => ({
        "isLoad": false,
        "level": 1,
        "active_category": "Economy",
        "categories": [
            {
                "id": 0,
                "name": "Economy"
            },
            {
                "id": 1,
                "name": "Politics"
            },
            {
                "id": 2,
                "name": "Fashion"
            },
            {
                "id": 3,
                "name": "Sport"
            },
            {
                "id": 4,
                "name": "Travel"
            },
            {
                "id": 5,
                "name": "Technology"
            },
            {
                "id": 6,
                "name": "Science"
            },
            {
                "id": 7,
                "name": "Entertainment"
            },
            {
                "id": 8,
                "name": "Lifestyle"
            },
            {
                "id": 9,
                "name": "Health"
            },
            {
                "id": 10,
                "name": "Food"
            },
            {
                "id": 11,
                "name": "Education"
            },
            {
                "id": 12,
                "name": "Business"
            },
            {
                "id": 13,
                "name": "Finance"
            },
            {
                "id": 14,
                "name": "Environment"
            },
            {
                "id": 15,
                "name": "Culture"
            },
            {
                "id": 16,
                "name": "Crypto"
            },
            {
                "id": 17,
                "name": "Art"
            },
            {
                "id": 18,
                "name": "Regulation"
            },
            {
                "id": 19,
                "name": "Taxes"
            },
            {
                "id": 20,
                "name": "Biology"
            },
            {
                "id": 20,
                "name": "Chemistry"
            }
        ],
        "searchOptions": [
            {
                "id": 0,
                "viewType": true,
                "name": "I slipped from top floor",
                "position": {
                    "x": 0,
                    "y": 0
                },
                "type": "teleportable",
                "level": 0
            },
            {
                "id": 1,
                "name": "Oil Jumps 40%",
                "viewType": true,
                "position": {
                    "x": 0,
                    "y": 0
                },
                "type": "teleportable",
                "level": 0
            },
            {
                "id": 2,
                "viewType": true,
                "name": "Russia Attacks Ukraine",
                "position": {
                    "x": 0,
                    "y": 0
                },
                "type": "teleportable",
                "level": 0
            },
            {
                "id": 3,
                "viewType": true,
                "name": "Alcohol is banned by law",
                "position": {
                    "x": 0,
                    "y": 0
                },
                "type": "teleportable",
                "level": 0
            },
            {
                "id": 4,
                "viewType": true,
                "name": "Rushi Sunak becames PM",
                "position": {
                    "x": 0,
                    "y": 0
                },
                "type": "teleportable",
                "level": 0
            },
            {
                "id": 5,
                "viewType": true,
                "name": "Recession is coming",
                "position": {
                    "x": 0,
                    "y": 0
                },
                "type": "teleportable",
                "level": 0
            },
            {
                "id": 6,
                "viewType": true,
                "name": "Olympics postponed to next year",
                "position": {
                    "x": 0,
                    "y": 0
                },
                "type": "teleportable",
                "level": 0
            },
            {
                "id": 8,
                "viewType": true,
                "name": "Elon Musk bought twitter",
                "position": {
                    "x": 0,
                    "y": 0
                },
                "type": "teleportable",
                "level": 0
            },
            {
                "id": 9,
                "viewType": true,
                "name": "Structure revamped twitter",
                "position": {
                    "x": 0,
                    "y": 0
                },
                "type": "teleportable",
                "level": 0
            },
            {
                "id": 10,
                "viewType": true,
                "name": "I got no gun in front of dangerous animals",
                "position": {
                    "x": 0,
                    "y": 0
                },
                "type": "teleportable",
                "level": 0
            }
        ],
        "nodes": [
            {
                "id": 0,
                "viewType": true,
                "name": "I slipped from top floor",
                "position": {
                    "x": 0,
                    "y": 0
                },
                "type": "teleportable",
                "level": 0,
                "parent_id": null
            },
            {
                "id": 1,
                "name": "Oil Jumps 40%",
                "viewType": true,
                "position": {
                    "x": 0,
                    "y": 0
                },
                "type": "teleportable",
                "level": 0,
                "parent_id": null
            },
            {
                "id": 2,
                "viewType": true,
                "name": "Russia Attacks Ukraine",
                "position": {
                    "x": 0,
                    "y": 0
                },
                "type": "teleportable",
                "level": 0,
                "parent_id": null
            },
            {
                "id": 3,
                "viewType": true,
                "name": "Alcohol is banned by law",
                "position": {
                    "x": 0,
                    "y": 0
                },
                "type": "teleportable",
                "level": 0,
                "parent_id": null
            },
            {
                "id": 4,
                "viewType": true,
                "name": "Rushi Sunak becames PM",
                "position": {
                    "x": 0,
                    "y": 0
                },
                "type": "teleportable",
                "level": 0,
                "parent_id": null
            },
            {
                "id": 5,
                "viewType": true,
                "name": "Recession is coming",
                "position": {
                    "x": 0,
                    "y": 0
                },
                "type": "teleportable",
                "level": 0,
                "parent_id": null
            },
            {
                "id": 6,
                "viewType": true,
                "name": "Olympics postponed to next year",
                "position": {
                    "x": 0,
                    "y": 0
                },
                "type": "teleportable",
                "level": 0,
                "parent_id": null
            },
            {
                "id": 8,
                "viewType": true,
                "name": "Elon Musk bought twitter",
                "position": {
                    "x": 0,
                    "y": 0
                },
                "type": "teleportable",
                "level": 0,
                "parent_id": null
            },
            {
                "id": 9,
                "viewType": true,
                "name": "Structure revamped twitter",
                "position": {
                    "x": 0,
                    "y": 0
                },
                "type": "teleportable",
                "level": 0,
                "parent_id": null
            },
            {
                "id": 10,
                "viewType": true,
                "name": "I got no gun in front of dangerous animals",
                "position": {
                    "x": 0,
                    "y": 0
                },
                "type": "teleportable",
                "level": 0,
                "parent_id": null
            },
            {
                "name": "Immigrants flood the Belgrade from Russia",
                "predictor": "Alex B.",
                "predictorImg": "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "impact": "positive",
                "probability": "80",
                "actions": [
                    {}
                ],
                "category": "Economy",
                "option_id": 2,
                "parent_id": 2,
                "id": 21,
                "viewType": false,
                "type": "teleportable",
                "level": 1
            },
            {
                "name": "Oil price jumps 50%",
                "predictor": "Alex B.",
                "predictorImg": "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "impact": "positive",
                "probability": "80",
                "actions": [
                    {}
                ],
                "category": "Finance",
                "option_id": 2,
                "parent_id": 2,
                "id": 22,
                "viewType": false,
                "type": "teleportable",
                "level": 1
            },
            {
                "name": "Wheat price jumps 40%",
                "predictor": "Alex B.",
                "predictorImg": "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "impact": "negative",
                "probability": "90",
                "actions": [
                    {}
                ],
                "category": "Food",
                "option_id": 2,
                "parent_id": 2,
                "id": 23,
                "viewType": false,
                "type": "teleportable",
                "level": 1
            },
            {
                "name": "Price of electricity jumps 50%",
                "predictor": "Alex B.",
                "predictorImg": "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "impact": "negative",
                "probability": "80",
                "actions": [
                    {}
                ],
                "category": "Environment",
                "option_id": 2,
                "parent_id": 2,
                "id": 24,
                "viewType": false,
                "type": "teleportable",
                "level": 1
            },
            {
                "name": "Oil companies increase production",
                "predictor": "Alex B.",
                "predictorImg": "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "impact": "negative",
                "probability": "80",
                "actions": [
                    {}
                ],
                "category": "Environment",
                "option_id": 2,
                "parent_id": 2,
                "id": 24,
                "viewType": false,
                "type": "teleportable",
                "level": 1
            },
            {
                "name": "Travel restrictions put in place for Ukraine",
                "predictor": "Alex B.",
                "predictorImg": "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "impact": "negative",
                "probability": "80",
                "actions": [
                    {}
                ],
                "category": "Environment",
                "option_id": 2,
                "parent_id": 2,
                "id": 25,
                "viewType": false,
                "type": "teleportable",
                "level": 1
            },
            {
                "name": "Businesses in Ukraine impacted by sanctions",
                "predictor": "Alex B.",
                "predictorImg": "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "impact": "negative",
                "probability": "80",
                "actions": [
                    {}
                ],
                "category": "Environment",
                "option_id": 2,
                "parent_id": 2,
                "id": 26,
                "viewType": false,
                "type": "teleportable",
                "level": 1
            },
            {
                "name": "NATO deploys troops to Ukraine",
                "predictor": "Alex B.",
                "predictorImg": "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "impact": "negative",
                "probability": "80",
                "actions": [
                    {}
                ],
                "category": "Environment",
                "option_id": 2,
                "parent_id": 2,
                "id": 27,
                "viewType": false,
                "type": "teleportable",
                "level": 1
            },
            {
                "name": "Rise in food prices in Ukraine",
                "predictor": "Alex B.",
                "predictorImg": "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "impact": "negative",
                "probability": "80",
                "actions": [
                    {}
                ],
                "category": "Environment",
                "option_id": 2,
                "parent_id": 2,
                "id": 28,
                "viewType": false,
                "type": "teleportable",
                "level": 1
            },
            {
                "name": "Civilians in Ukraine face water and electricity shortages",
                "predictor": "Alex B.",
                "predictorImg": "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "impact": "negative",
                "probability": "80",
                "actions": [
                    {}
                ],
                "category": "Environment",
                "option_id": 2,
                "parent_id": 2,
                "id": 29,
                "viewType": false,
                "type": "teleportable",
                "level": 1
            },
            {
                "name": "Loss of jobs in Ukraine",
                "predictor": "Alex B.",
                "predictorImg": "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "impact": "negative",
                "probability": "80",
                "actions": [
                    {}
                ],
                "category": "Environment",
                "option_id": 2,
                "parent_id": 2,
                "id": 30,
                "viewType": false,
                "type": "teleportable",
                "level": 1
            },
            {
                "name": "Rise in military spending in Europe",
                "predictor": "Alex B.",
                "predictorImg": "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "impact": "negative",
                "probability": "80",
                "actions": [
                    {}
                ],
                "category": "Environment",
                "option_id": 2,
                "parent_id": 2,
                "id": 31,
                "viewType": false,
                "type": "teleportable",
                "level": 1
            },
            {
                "name": "Decrease in investments in Ukraine",
                "predictor": "Alex B.",
                "predictorImg": "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "impact": "negative",
                "probability": "80",
                "actions": [
                    {}
                ],
                "category": "Environment",
                "option_id": 2,
                "parent_id": 2,
                "id": 32,
                "viewType": false,
                "type": "teleportable",
                "level": 1
            },
            {
                "name": "Increase in cyber-attacks from Russia",
                "predictor": "Alex B.",
                "predictorImg": "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "impact": "negative",
                "probability": "80",
                "actions": [
                    {}
                ],
                "category": "Environment",
                "option_id": 2,
                "parent_id": 2,
                "id": 33,
                "viewType": false,
                "type": "teleportable",
                "level": 1
            },
            {
                "name": "Rise in air pollution in Ukraine",
                "predictor": "Alex B.",
                "predictorImg": "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "impact": "negative",
                "probability": "80",
                "actions": [
                    {}
                ],
                "category": "Environment",
                "option_id": 2,
                "parent_id": 2,
                "id": 34,
                "viewType": false,
                "type": "teleportable",
                "level": 1
            },
            {
                "name": "Food supply decreases in Russia",
                "predictor": "Alex B.",
                "predictorImg": "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "impact": "positive",
                "probability": "70",
                "actions": [
                    {}
                ],
                "category": "Food",
                "option_id": 2,
                "parent_id": 2,
                "id": 35,
                "viewType": false,
                "type": "teleportable",
                "level": 1
            },
            {
                "name": "Russian companies move to Cyprus",
                "predictor": "Alex B.",
                "predictorImg": "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "impact": "negative",
                "probability": "50",
                "actions": [
                    {}
                ],
                "category": "Business",
                "option_id": 2,
                "parent_id": 2,
                "id": 36,
                "viewType": false,
                "type": "teleportable",
                "level": 1
            },
            {
                "name": "Gas prices jump 50%",
                "predictor": "Alex B.",
                "predictorImg": "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "impact": "negative",
                "probability": "50",
                "actions": [
                    {}
                ],
                "category": "Business",
                "option_id": 2,
                "parent_id": 22,
                "id": 37,
                "viewType": false,
                "type": "teleportable",
                "level": 2
            },
            {
                "name": "Transport costs jump 50%",
                "predictor": "Alex B.",
                "predictorImg": "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "impact": "negative",
                "probability": "50",
                "actions": [
                    {}
                ],
                "category": "Business",
                "option_id": 2,
                "parent_id": 22,
                "id": 38,
                "viewType": false,
                "type": "teleportable",
                "level": 2
            },
            {
                "name": "Food prices jump 50%",
                "predictor": "Alex B.",
                "predictorImg": "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "impact": "negative",
                "probability": "50",
                "actions": [
                    {}
                ],
                "category": "Business",
                "option_id": 2,
                "parent_id": 22,
                "id": 39,
                "viewType": false,
                "type": "teleportable",
                "level": 2
            },
            {
                "name": "Rise in inflation",
                "predictor": "Alex B.",
                "predictorImg": "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "impact": "negative",
                "probability": "50",
                "actions": [
                    {}
                ],
                "category": "Business",
                "option_id": 2,
                "parent_id": 22,
                "id": 40,
                "viewType": false,
                "type": "teleportable",
                "level": 2
            },
            {
                "name": "Businesses close down",
                "predictor": "Alex B.",
                "predictorImg": "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "impact": "negative",
                "probability": "50",
                "actions": [
                    {}
                ],
                "category": "Business",
                "option_id": 2,
                "parent_id": 22,
                "id": 41,
                "viewType": false,
                "type": "teleportable",
                "level": 2
            },
            {
                "name": "Travelling becomes more expensive",
                "predictor": "Alex B.",
                "predictorImg": "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "impact": "negative",
                "probability": "50",
                "actions": [
                    {}
                ],
                "category": "Business",
                "option_id": 2,
                "parent_id": 22,
                "id": 42,
                "viewType": false,
                "type": "teleportable",
                "level": 2
            },
            {
                "name": "Political unrest",
                "predictor": "Alex B.",
                "predictorImg": "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "impact": "negative",
                "probability": "50",
                "actions": [
                    {}
                ],
                "category": "Business",
                "option_id": 2,
                "parent_id": 22,
                "id": 43,
                "viewType": false,
                "type": "teleportable",
                "level": 2
            },
            {
                "name": "Food shortages",
                "predictor": "Alex B.",
                "predictorImg": "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "impact": "negative",
                "probability": "50",
                "actions": [
                    {}
                ],
                "category": "Business",
                "option_id": 2,
                "parent_id": 22,
                "id": 44,
                "viewType": false,
                "type": "teleportable",
                "level": 2
            },
            {
                "name": "City pollution increases",
                "predictor": "Alex B.",
                "predictorImg": "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "impact": "negative",
                "probability": "50",
                "actions": [
                    {}
                ],
                "category": "Business",
                "option_id": 2,
                "parent_id": 22,
                "id": 45,
                "viewType": false,
                "type": "teleportable",
                "level": 2
            },
            {
                "name": "Healthcare costs rise",
                "predictor": "Alex B.",
                "predictorImg": "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "impact": "negative",
                "probability": "50",
                "actions": [
                    {}
                ],
                "category": "Business",
                "option_id": 2,
                "parent_id": 22,
                "id": 46,
                "viewType": false,
                "type": "teleportable",
                "level": 2
            },
            {
                "name": "Decrease in GDP",
                "predictor": "Alex B.",
                "predictorImg": "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "impact": "negative",
                "probability": "50",
                "actions": [
                    {}
                ],
                "category": "Business",
                "option_id": 2,
                "parent_id": 22,
                "id": 47,
                "viewType": false,
                "type": "teleportable",
                "level": 2
            },

            {
                "name": "Workers demand higher wages",
                "category": "Economy",
                "predictor": "Alex B.",
                "predictorImg": "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "impact": "negative",
                "probability": "50",
                "actions": [
                    {}
                ],
                "option_id": 2,
                "parent_id": 40,
                "id": 47,
                "viewType": false,
                "type": "teleportable",
                "level": 3
            },
            {
                "name": "Businesses cut jobs",
                "category": "Business",
                "predictor": "Alex B.",
                "predictorImg": "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "impact": "negative",
                "probability": "50",
                "actions": [
                    {}
                ],
                "option_id": 2,
                "parent_id": 40,
                "id": 48,
                "viewType": false,
                "type": "teleportable",
                "level": 3
            },
            {
                "name": "Currency devaluation",
                "category": "Economy",
                "predictor": "Alex B.",
                "predictorImg": "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "impact": "negative",
                "probability": "50",
                "actions": [
                    {}
                ],
                "option_id": 2,
                "parent_id": 40,
                "id": 49,
                "viewType": false,
                "type": "teleportable",
                "level": 3
            },
            {
                "name": "Travel costs increase",
                "category": "Travel",
                "predictor": "Alex B.",
                "predictorImg": "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "impact": "negative",
                "probability": "50",
                "actions": [
                    {}
                ],
                "option_id": 2,
                "parent_id": 40,
                "id": 50,
                "viewType": false,
                "type": "teleportable",
                "level": 3
            },
            {
                "name": "Political instability",
                "category": "Politics",
                "predictor": "Alex B.",
                "predictorImg": "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "impact": "negative",
                "probability": "50",
                "actions": [
                    {}
                ],
                "option_id": 2,
                "parent_id": 40,
                "id": 51,
                "viewType": false,
                "type": "teleportable",
                "level": 3
            },
            {
                "name": "Food prices rise",
                "category": "Food",
                "predictor": "Alex B.",
                "predictorImg": "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "impact": "negative",
                "probability": "50",
                "actions": [
                    {}
                ],
                "option_id": 2,
                "parent_id": 40,
                "id": 52,
                "viewType": false,
                "type": "teleportable",
                "level": 3
            },
            {
                "name": "Rent hikes",
                "category": "City",
                "predictor": "Alex B.",
                "predictorImg": "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "impact": "negative",
                "probability": "50",
                "actions": [
                    {}
                ],
                "option_id": 2,
                "parent_id": 40,
                "id": 53,
                "viewType": false,
                "type": "teleportable",
                "level": 3
            },
            {
                "name": "Higher taxes",
                "category": "Economy",
                "predictor": "Alex B.",
                "predictorImg": "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "impact": "negative",
                "probability": "50",
                "actions": [
                    {}
                ],
                "option_id": 2,
                "parent_id": 40,
                "id": 54,
                "viewType": false,
                "type": "teleportable",
                "level": 3
            },
            {
                "name": "Reduced tourism",
                "category": "Travel",
                "predictor": "Alex B.",
                "predictorImg": "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "impact": "negative",
                "probability": "50",
                "actions": [
                    {}
                ],
                "option_id": 2,
                "parent_id": 40,
                "id": 55,
                "viewType": false,
                "type": "teleportable",
                "level": 3
            },
            {
                "name": "Unemployment rises",
                "category": "Economy",
                "predictor": "Alex B.",
                "predictorImg": "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "impact": "negative",
                "probability": "50",
                "actions": [
                    {}
                ],
                "option_id": 2,
                "parent_id": 40,
                "id": 56,
                "viewType": false,
                "type": "teleportable",
                "level": 3
            },
            {
                "name": "Decreased health care",
                "category": "Health",
                "predictor": "Alex B.",
                "predictorImg": "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "impact": "negative",
                "probability": "50",
                "actions": [
                    {}
                ],
                "option_id": 2,
                "parent_id": 40,
                "id": 57,
                "viewType": false,
                "type": "teleportable",
                "level": 3
            },
            {
                "name": "Decreased public services",
                "category": "City",
                "predictor": "Alex B.",
                "predictorImg": "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "impact": "negative",
                "probability": "50",
                "actions": [
                    {}
                ],
                "option_id": 2,
                "parent_id": 40,
                "id": 58,
                "viewType": false,
                "type": "teleportable",
                "level": 3
            }
        ],
        "edges": [],
        "currentEdges": [],
        "currentNodes": []
    }),

    getters: {
        //new logic
        getNodeById: (state) => {
            return (id) => {
                var data = [];
                state.nodes.map((item) => {
                    if (parseInt(item.parent_id) == parseInt(id)) {
                        data.push(item);
                    }
                });
                return data;
            };
        },

        getLevel: (state) => {
            return state.level;
        },

        getEventById: (state) => {
            return (id) => state.searchOptions.find((option) => option.id === parseInt(id))
        },

        getSearchResultById: (state) => {
            return (id) => state.searchOptions.find((option) => parseInt(option.id) === parseInt(id))
        },

        getNode: (state) => {
            return (id) => state.nodes.find((option) => parseInt(option.id) === parseInt(id))
        },

        getNodeLength: (state) => {
            return (id) => {
                var data = [];
                state.nodes.map((item) => {
                    if (parseInt(item.parent_id) == parseInt(id)) {
                        data.push(item);
                    }
                });
                return data.length;
            };
        },

        getNodeLengthAll: (state) => {
            return () => {
                return state.nodes.length + state.searchOptions.length;
            };
        },

        getNodes: (state) => {
            return (id) => {
                var data = [// state.searchOptions.find((option) => parseInt(option.id) === parseInt(id))
                ];
                state.nodes.map((item) => {
                    if (parseInt(item.option_id) == parseInt(id) && (item.level <= state.level)) {
                        data.push(item);
                    }
                });

                return data;
            }
        },

        getEdges: (state) => {
            return (id) => {
                var data = [];
                state.edges.map((item) => {
                    if (parseInt(item.option_id) == parseInt(id) && (item.level <= state.level)) {
                        data.push(item);
                    }
                });
                return data;
            };
        },

        getLastNodes: (state) => {
            return (id) => {
                var data = [];
                state.nodes.map((item) => {
                    if (parseInt(item.parent_id) == parseInt(id)) {
                        data.push(item);
                    }
                });

                return data;
            }
        },

    },
    actions: {
        setNode(data) {
            this.nodes.push(data);
        },
        setEdge(data) {
            this.edges.push(data);
        },
        setCurrentEdge(data) {
            this.state.currentEdges = data;
        },
        setCurrentNode(data) {
            this.state.currentNodes = data;
        }
    },
    persist: {
        enabled: true
    }

})
