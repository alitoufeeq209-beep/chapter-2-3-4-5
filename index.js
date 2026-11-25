const chapters = [
  {
    name: "Chapter 2: Variables for Strings",
    questions: [
      {
        question: "Which data type stores text such as Lahore?",
        answers: ["string"]
      },
      {
        question: "Write a JavaScript statement that stores the text 'Lahore' in a variable named city.",
        answers: ["var city = 'lahore';", 'var city = "lahore";']
      },
      {
        question: "What should go inside alert() to show the value?\nvar city = 'Lahore';\nalert( ___ );",
        answers: ["city"]
      }
    ]
  },
  {
    name: "Chapter 3: Variables for Numbers",
    questions: [
      {
        question: "Write a JavaScript statement that stores the number 25 in a variable named age.",
        answers: ["var age = 25;"]
      },
      {
        question: "What is the result of 12 + 8?",
        answers: ["20"]
      },
      {
        question: "If score is 10, what is its value after this statement?\nscore = score + 5;",
        answers: ["15"]
      }
    ]
  },
  {
    name: "Chapter 4: Variable Names: Legal and Illegal",
    questions: [
      {
        question: "Is userName a legal JavaScript variable name? Answer yes or no.",
        answers: ["yes"]
      },
      {
        question: "Is user name a legal JavaScript variable name? Answer yes or no.",
        answers: ["no"]
      },
      {
        question: "Which name follows camelCase: user_response or userResponse? Type the correct name.",
        answers: ["userresponse"]
      }
    ]
  },
  {
    name: "Chapter 5: Math Expressions: Familiar Operators",
    questions: [
      {
        question: "What is the result of 9 * 4?",
        answers: ["36"]
      },
      {
        question: "What is the remainder of 17 % 5?",
        answers: ["2"]
      },
      {
        question: "What is the result of 20 / 4 + 3?",
        answers: ["8"]
      }
    ]
  }
];

let score = 0;
let total = 0;
let cancelled = false;

for (const chapter of chapters) {
  alert(chapter.name + "\nYou will answer 3 questions.");

  for (let i = 0; i < chapter.questions.length; i++) {
    const item = chapter.questions[i];

    const response = prompt(
      chapter.name +
      "\nQuestion " + (i + 1) + " of 3\n\n" +
      item.question
    );

    if (response === null) {
      alert("Quiz cancelled. Your score so far: " + score + " out of " + total + ".");
      cancelled = true;
      break;
    }

    total++;

    const normalizedResponse = response.trim().toLowerCase().replace(/\s+/g, " ");

    const isCorrect = item.answers.some(answer =>
      normalizedResponse === answer.toLowerCase().replace(/\s+/g, " ")
    );

    if (isCorrect) {
      score++;
      alert("Correct!");
    } else {
      alert("Not quite. One correct answer is: " + item.answers[0]);
    }
  }

  if (cancelled) {
    break;
  }
}

if (!cancelled) {
  alert("Quiz complete! Your score is " + score + " out of " + total + ".");
}