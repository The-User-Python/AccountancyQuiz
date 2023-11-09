const questionCategories = [
    {
        category: "Realization Account",
        questions: [
            "What is the purpose of realization account?",
            "How is the gain or loss on realization distributed among partners?"
        ]
    },
    {
        category: "Forfeiture of Shares",
        questions: [
            "Explain the meaning of the forfeiture of shares.",
            "What are the consequences of share forfeiture?"
        ]
    },
    {
        category: "Revaluation Account",
        questions: [
            "When is a revaluation account prepared?",
            "How does the revaluation account affect the capital accounts of partners?"
        ]
    }
];

function generateQuestion() {
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options");

    // Clear previous options
    optionsContainer.innerHTML = "";

    // Randomly select a question from each category
    questionCategories.forEach((category) => {
        const randomIndex = Math.floor(Math.random() * category.questions.length);
        const selectedQuestion = category.questions[randomIndex];

        // Display the selected question
        const questionDiv = document.createElement("div");
        questionDiv.innerHTML = `<strong>${category.category}:</strong> ${selectedQuestion}`;
        optionsContainer.appendChild(questionDiv);
    });
}
