Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    title: "GK Question",
    firstPageIsStarted: true,
    startSurveyText: "Start Quiz",
    pages: [
        {
            "elements": [
                {
                    "name": "name",
                    "type": "text",
                    "title": "Please enter your name:",
                    "placeHolder": "Please enter your name",
                    "isRequired": true,
                    "autoComplete": "name"
                }
            ]
            },
       
        {
            "elements": [
                {
                    "type": "html",
                    "html": "The SRM University .",
                }
            ]
        }, 
        
        {
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "India won the Lord's Test",
                    "title": "India won the Lord's Test on August 16, 2021, defeating England by 151 runs. It was India's ____________ victory at Lords against the hosts",
                    "choices": [
                        "4th", "3rd", "5th", "6th"
                    ],
                    "correctAnswer": "3rd"
                }
            ]
        }, {
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "Tokyo Olympic 2020",
                    "title": "Which of the following players won maximum gold medals in the Tokyo Olympic 2020?'",
                    "choicesOrder": "random",
                    "choices": [
                        "Cealeb Dressel (USA)", "Emma Mckeon (Australia)", "Daiki Hashimoto (Japan)", "Vitalina Batsarashkina (Russia)"
                    ],
                    "correctAnswer": "Cealeb Dressel (USA)"
                }
            ]
        }, {
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "Hockey",
                    "title": "Which of the following states sponsored India's Men's Hockey Team and Women's Hockey Team?",
                    "choicesOrder": "random",
                    "choices": [
                        "Punjab", "Odisha", "Haryana", "Rajasthan"
                    ],
                    "correctAnswer": "Odisha"
                }
            ]
            
        },
        {
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "Tokyo Olympic 2020",
                    "title": "Which of the following players won maximum gold medals in the Tokyo Olympic 2020?'",
                    "choicesOrder": "random",
                    "choices": [
                        "Cealeb Dressel (USA)", "Emma Mckeon (Australia)", "Daiki Hashimoto (Japan)", "Vitalina Batsarashkina (Russia)"
                    ],
                    "correctAnswer": "Cealeb Dressel (USA)"
                }
            ]
        },
        
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};


window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (sender) {
        localStorage.setItem("final", JSON.stringify(sender.data));
        console.log(sender.data);
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
            
    });

$("#surveyElement").Survey({model: survey});

console.log(localStorage.getItem("final"));