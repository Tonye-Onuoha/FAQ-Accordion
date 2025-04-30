const plusIconsArray = Array.from(document.querySelectorAll("img[alt='A plus icon']"));
const questionContainersArray = Array.from(document.getElementsByClassName("question-container"));
const questionsArray = Array.from(document.getElementsByClassName("question"));
const answersArray = Array.from(document.getElementsByClassName("answer"));
const displayedAnswers = new Set();

const showAnswer = (e, index) => {
    if (e.currentTarget.src) {
        e.currentTarget.src = "assets/images/icon-minus.svg";
        e.currentTarget.alt = "A minus icon";
    } else {
        const icon = plusIconsArray[index];
        icon.src = "assets/images/icon-minus.svg";
        icon.alt = "A minus icon";
    }
    const questionContainer = questionContainersArray[index];
    questionContainer.style.border = "none";
    const answer = answersArray[index];
    answer.style.display = "block";
    answer.style.paddingBottom = "25px";
    if (index === 3) return;
    answer.style.borderBottom = "1px solid lightgray";
};

const hideAnswer = (e, index) => {
    if (e.currentTarget.src) {
        e.currentTarget.src = "assets/images/icon-plus.svg";
        e.currentTarget.alt = "A plus icon";
    } else {
        const icon = plusIconsArray[index];
        icon.src = "assets/images/icon-plus.svg";
        icon.alt = "A plus icon";
    }
    const answer = answersArray[index];
    answer.style.display = "none";
    answer.style.padding = "none";
    answer.style.border = "none";
    if (index === 3) return;
    const questionContainer = questionContainersArray[index];
    questionContainer.style.borderBottom = "1px solid lightgray";
};

const iconHandler = (index, e) => {
    // The event object is accessible in the function as "event" or the name of the last defined parameter (i.e "e" in this case).
    if (!displayedAnswers.has(index)) {
        displayedAnswers.add(index);
        showAnswer(e, index);
    } else {
        displayedAnswers.delete(index);
        hideAnswer(e, index);
    }
};

plusIconsArray.forEach((plusIcon, index) => {
    // The event object is passed automatically as the last argument whether its parameter is defined or not.
    // Therefore the event-handler function will be called as "iconHandler(index, eventObject)".
    plusIcon.addEventListener("click", iconHandler.bind(null, index));
});

questionsArray.forEach((question, index) => {
    // The event object is passed automatically as the last argument whether its parameter is defined or not.
    // Therefore the event-handler function will be called as "iconHandler(index, eventObject)".
    question.addEventListener("click", iconHandler.bind(null, index));
});
