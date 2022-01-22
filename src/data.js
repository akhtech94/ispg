export const questions = [
    {
        _id: "61dd4b9059005f63eed6d148",
        question: "Reason for Testing",
        type: "dropdown",
        questionnaireId: "61d30eaa47ac06ad3b54710f",
        options: [
            { _id: "61dd4b9059005fd121d6d149", option: "Physician Referral" },
            { _id: "61dd4b9059005f9d0fd6d14a", option: "Travel" },
            {
                _id: "61dd4b9059005f2138d6d14b",
                option: "Exhibiting Symptoms of COVID-19",
            },
            { _id: "61dd4b9059005fa034d6d14c", option: "Workplace/Employment" },
            {
                _id: "61dd4b9059005f42c1d6d14d",
                option: "Exposure to COVID-19 positive patient",
            },
            { _id: "61dd4b9059005f644ad6d14e", option: "Other" },
        ],
        dependedQuestions: [
            {
                _id: "61dd4b9059005f44aad6d14f",
                answerId: "Other",
                questions: [
                    {
                        dependedQuestions: [],
                        _id: "61dd4b9059005f21ffd6d150",
                        question: "",
                        type: "textbox",
                        options: [],
                        questionnaireId: "61d30eaa47ac06ad3b54710f",
                        answers: [],
                    },
                ],
            },
        ],
    },
    {
        _id: "61dd4b9059005fa998d6d152",
        question: "Do you presently have any of the following condition/illness?",
        type: "radio",
        questionnaireId: "61d30eaa47ac06ad3b54710f",
        options: [
            { _id: "61dd4b9059005f4970d6d153", option: "Yes" },
            { _id: "61dd4b9059005f7220d6d154", option: "No" },
        ],
        dependedQuestions: [
            {
                _id: "61dd4b9059005f0522d6d155",
                answerId: "Yes",
                showAlways: true,
                questions: [
                    {
                        dependedQuestions: [
                            {
                                answerId: "Other",
                                questions: [
                                    {
                                        question: "",
                                        type: "textbox",
                                        options: [],
                                        dependedQuestions: [],
                                        questionnaireId: "61d30eaa47ac06ad3b54710f",
                                        _id: "61dd4d7e10b42db65d6a9690",
                                    },
                                ],
                                _id: "61dd4d6110b42db65d6a968f",
                            },
                        ],
                        _id: "61dd4b9059005f2517d6d156",
                        question: "",
                        type: "checkbox",
                        options: [
                            { _id: "61dd4b9059005f0ea2d6d157", option: "Diabetes" },
                            {
                                _id: "61dd4b9059005f73a6d6d158",
                                option: "Cardiac/Heart Disease",
                            },
                            {
                                _id: "61dd4b9059005f08e5d6d159",
                                option: "Immunocompromised",
                            },
                            { _id: "61dd4b9059005f2309d6d15a", option: "Hypertension" },
                            {
                                _id: "61dd4b9059005ff8f9d6d15b",
                                option: "Pulmonary/Lung Disease",
                            },
                            { _id: "61dd4b9059005ff3e4d6d15c", option: "Pregnancy" },
                            {
                                _id: "61dd4b9059005fc66ad6d15d",
                                option: "Renal/Kidney Disease",
                            },
                            { _id: "61dd4b9059005f7fe0d6d15e", option: "Liver Disease" },
                            { _id: "61dd4b9059005f12f7d6d15f", option: "Other" },
                        ],
                        questionnaireId: "61d30eaa47ac06ad3b54710f",
                        answers: [],
                    },
                ],
            },
        ],
    },
    {
        _id: "61dd4b9059005f2a93d6d160",
        question: "Are you experiencing any COVID related symptoms?",
        type: "radio",
        questionnaireId: "61d30eaa47ac06ad3b54710f",
        options: [
            { _id: "61dd4b9059005f812bd6d161", option: "Yes" },
            { _id: "61dd4b9059005f2fcfd6d162", option: "No" },
        ],
        dependedQuestions: [
            {
                _id: "61dd4b9059005fbda3d6d163",
                answerId: "Yes",
                questions: [
                    {
                        dependedQuestions: [],
                        _id: "61dd4b9059005f523cd6d164",
                        question: "",
                        type: "checkbox",
                        options: [
                            { _id: "61dd4b9059005f5155d6d165", option: "Abdominal Pain" },
                            { _id: "61dd4b9059005f0d48d6d166", option: "Chills" },
                            { _id: "61dd4b9059005f1eebd6d167", option: "Diarrhea" },
                            { _id: "61dd4b9059005f23c5d6d168", option: "Dry Cough" },
                            { _id: "61dd4b9059005f040dd6d169", option: "Fatigue" },
                            { _id: "61dd4b9059005f7ffdd6d16a", option: "Fever" },
                            { _id: "61dd4b9059005f0907d6d16b", option: "Headache" },
                            { _id: "61dd4b9059005f73b9d6d16c", option: "Myalgia" },
                            { _id: "61dd4b9059005f65d5d6d16d", option: "Loss of smell" },
                            {
                                _id: "61dd4b9059005f37eed6d16e",
                                option: "Shortness of Breath",
                            },
                            { _id: "61dd4b9059005f4f8bd6d16f", option: "Vomiting" },
                        ],
                        questionnaireId: "61d30eaa47ac06ad3b54710f",
                        answers: [],
                    },
                    {
                        dependedQuestions: [],
                        _id: "61dd4b9059005fc90bd6d170",
                        question: "Date of symptoms onset",
                        type: "datepicker",
                        options: [],
                        questionnaireId: "61d30eaa47ac06ad3b54710f",
                        answers: [],
                    },
                ],
            },
        ],
    },
    {
        _id: "61dd4b9059005f69dad6d171",
        question: "Any recent domestic travel?",
        type: "radio",
        questionnaireId: "61d30eaa47ac06ad3b54710f",
        options: [
            { _id: "61dd4b9059005f5b93d6d172", option: "Yes" },
            { _id: "61dd4b9059005f994fd6d173", option: "No" },
        ],
        dependedQuestions: [
            {
                _id: "61dd4b9059005f43c2d6d174",
                answerId: "Yes",
                questions: [
                    {
                        dependedQuestions: [],
                        _id: "61dd4b9059005f7a49d6d175",
                        question: "Domestic Travel Island",
                        combineMultipleAnswersInReport: true,
                        type: "checkbox",
                        options: [
                            { _id: "61dd4b9059005fa46ad6d176", option: "New Providence" },
                            { _id: "61dd4b9059005f1bcad6d177", option: "Abaco" },
                            { _id: "61dd4b9059005f7a96d6d178", option: "Acklins" },
                            { _id: "61dd4b9059005f4ba3d6d179", option: "Andros" },
                            { _id: "61dd4b9059005f5475d6d17a", option: "Berry Islands" },
                            { _id: "61dd4b9059005f596bd6d17b", option: "Bimini" },
                            { _id: "61dd4b9059005f16c4d6d17c", option: "Cat Island" },
                            { _id: "61dd4b9059005fc9c8d6d17d", option: "Crooked Island" },
                            { _id: "61dd4b9059005f8b0fd6d17e", option: "Eleuthera" },
                            { _id: "61dd4b9059005f6b28d6d17f", option: "Exuma" },
                            { _id: "61dd4b9059005f6e0dd6d180", option: "Grand Bahama" },
                            { _id: "61dd4b9059005f7beed6d181", option: "Harbour Island" },
                            { _id: "61dd4b9059005f9f83d6d182", option: "Inagua" },
                            { _id: "61dd4b9059005f8412d6d183", option: "Long Island" },
                            { _id: "61dd4b9059005f6290d6d184", option: "Mayaguana" },
                            { _id: "61dd4b9059005f7d07d6d185", option: "Ragged Island" },
                            { _id: "61dd4b9059005f8e96d6d186", option: "Rum Cay" },
                            { _id: "61dd4b9059005fdcded6d187", option: "San Salvador" },
                            { _id: "61dd4b9059005f6676d6d188", option: "Spanish Wells" },
                        ],
                        questionnaireId: "61d30eaa47ac06ad3b54710f",
                        answers: [],
                    },
                    {
                        dependedQuestions: [],
                        _id: "61dd4b9059005f4c85d6d189",
                        question: "Domestic Travel Date",
                        type: "datepicker",
                        options: [],
                        questionnaireId: "61d30eaa47ac06ad3b54710f",
                        answers: [],
                    },
                ],
            },
        ],
    },
    {
        _id: "61dd4b9059005f58a3d6d18a",
        question: "Any recent international travel?",
        type: "radio",
        questionnaireId: "61d30eaa47ac06ad3b54710f",
        options: [
            { _id: "61dd4b9059005ffd4ad6d18b", option: "Yes" },
            { _id: "61dd4b9059005f176fd6d18c", option: "No" },
        ],
        dependedQuestions: [
            {
                _id: "61dd4b9059005f7e0ad6d18d",
                answerId: "Yes",
                questions: [
                    {
                        dependedQuestions: [],
                        _id: "61dd4b9059005fb8fed6d18e",
                        question: "International Travel Country",
                        type: "dropdown",
                        options: [
                            {
                                _id: "61dd4b9059005f817fd6d18f",
                                id: 1,
                                option: "Afghanistan",
                                code: "AF",
                            },
                            {
                                _id: "61dd4b9059005f14efd6d190",
                                id: 2,
                                option: "Aland Islands",
                                code: "AX",
                            },
                            {
                                _id: "61dd4b9059005f10fdd6d191",
                                id: 3,
                                option: "Albania",
                                code: "AL",
                            },
                        ],
                        questionnaireId: "61d30eaa47ac06ad3b54710f",
                        answers: [],
                    },
                    {
                        dependedQuestions: [],
                        _id: "61dd4b9159005f1a1cd6d289",
                        question: "International Travel Date",
                        type: "datepicker",
                        options: [],
                        questionnaireId: "61d30eaa47ac06ad3b54710f",
                        answers: [],
                    },
                ],
            },
        ],
    },
    {
        _id: "61dd4b9159005f45d8d6d28a",
        question: "Have you recently been in contact with a positive person?",
        type: "radio",
        questionnaireId: "61d30eaa47ac06ad3b54710f",
        options: [
            { _id: "61dd4b9159005fc561d6d28b", option: "Yes" },
            { _id: "61dd4b9159005f37b6d6d28c", option: "No" },
        ],
        dependedQuestions: [
            {
                _id: "61dd4b9159005f77ced6d28d",
                answerId: "Yes",
                questions: [
                    {
                        dependedQuestions: [],
                        _id: "61dd4b9159005f562dd6d28e",
                        question: "Contact Date",
                        type: "datepicker",
                        options: [],
                        questionnaireId: "61d30eaa47ac06ad3b54710f",
                        answers: [],
                    },
                ],
            },
        ],
    },
    {
        _id: "61dd4b9159005f4ed2d6d28f",
        question: "Hospitalized recently?",
        type: "radio",
        questionnaireId: "61d30eaa47ac06ad3b54710f",
        options: [
            { _id: "61dd4b9159005f0003d6d290", option: "Yes" },
            { _id: "61dd4b9159005f0720d6d291", option: "No" },
        ],
        dependedQuestions: [
            {
                _id: "61dd4b9159005f4ab7d6d292",
                answerId: "Yes",
                questions: [
                    {
                        dependedQuestions: [],
                        _id: "61dd4b9159005fc8cad6d293",
                        question: "Name of the Hospital",
                        type: "textbox",
                        options: [],
                        questionnaireId: "61d30eaa47ac06ad3b54710f",
                        answers: [],
                    },
                    {
                        dependedQuestions: [],
                        _id: "61dd4b9159005f89d8d6d294",
                        question: "Hospitalized Date",
                        type: "datepicker",
                        options: [],
                        questionnaireId: "61d30eaa47ac06ad3b54710f",
                        answers: [],
                    },
                ],
            },
        ],
    },
];
