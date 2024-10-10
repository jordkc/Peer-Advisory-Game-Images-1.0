const realistic = [
    { title: "Overwhelmed with Responsibilities", challenge: "Feeling overwhelmed with too many responsibilities.", image: "images/TooBooked.png" },
    { title: "Test Anxiety", challenge: "Test anxiety and poor study habits.", image: "images/ihatetests.png" },
];

const fictional = [
    { title: "Cultivating Farming Land on Mars", challenge: "How can you grow food in a harsh environment with limited resources?", image: "images/FarmingonMars.png" },
    { title: "Haunted Amusement Park", challenge: "How do you manage both the business and the supernatural?", image: "images/HauntedAmusement.png" },

];

const responseCards = [
    { title: "Clarification Card", situation: "I don’t fully understand what you just said. Can you explain it differently?", image: "images/clarification.png" },
    { title: "Emotional Reaction Card", situation: "I feel really frustrated/upset about this issue.", image: "images/emotionalresponse.png" },
    { title: "Distraction Card", situation: "The advisee suddenly changes the topic or focuses on an unrelated issue.", image: "images/Distraction.png" },
    { title: "Time Constraint Card", situation: "I only have a few minutes to figure this out—can you give me quick advice?", image: "images/TimeConstraint.png" },
    { title: "\"But My Friend Said...\" Card", situation: "My friend told me something completely different from what you’re saying.", image: "images/butmyfriendsaid.png" }, 
    { title: "\"I’ve Tried That Already\" Card", situation: "I’ve already tried what you’re suggesting, and it didn’t work.", image: "images/ivetriedthatalready.png" }, 
    { title: "Request for Resources Card", situation: "Is there anything I can read, watch, or use to help me with this?", image: "images/resourcerequest.png" },
    { title: "Uncooperative Card", situation: "I don’t care about fixing this. It’s not a big deal.", image: "images/Uncooperative.png" },
];

// Event listeners for the scenario decks
document.getElementById("realistic-deck").addEventListener("click", function() {
    showScenario(realistic);
});

document.getElementById("fictional-deck").addEventListener("click", function() {
    showScenario(fictional);
});

// Event listener for the response card selection
document.getElementById("response-cards").addEventListener("click", function() {
    showResponses();
});

// Function to display a random scenario
function showScenario(scenarios) {
    const scenarioContainer = document.getElementById("scenario-container");
    scenarioContainer.innerHTML = ''; // Clear previous scenarios
    const randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];
    
    const scenarioBox = document.createElement("div");
    scenarioBox.classList.add("scenario-box");

    // Only show the image, remove the title and challenge text
    if (randomScenario.image) {
        scenarioBox.innerHTML = `<img src="${randomScenario.image}" alt="Scenario Image" style="width: 100%; border-radius: 10px;">`;
    } else {
        scenarioBox.innerHTML = 'No image available'; // Optional fallback
    }
    
    scenarioContainer.appendChild(scenarioBox);
    scenarioContainer.classList.remove('hidden'); // Show the scenario container
}

// Function to display four random response cards
function showResponses() {
    const responseContainer = document.getElementById("response-container");
    responseContainer.innerHTML = ''; // Clear previous content

    const selectedResponses = [];
    const responseCount = 4;

    while (selectedResponses.length < responseCount) {
        const randomResponse = responseCards[Math.floor(Math.random() * responseCards.length)];
        if (!selectedResponses.includes(randomResponse)) {
            selectedResponses.push(randomResponse);
        }
    }

    selectedResponses.forEach(response => {
        const responseBox = document.createElement("div");
        responseBox.classList.add("response-card");
        
        // Only show the image, remove text
        responseBox.innerHTML = `<img src="${response.image}" alt="${response.title}" style="width: 100%; border-radius: 10px;">`;
        
        responseContainer.appendChild(responseBox);
    });

    responseContainer.classList.remove('hidden');
}