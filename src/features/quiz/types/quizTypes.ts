// all TS types and interfaces

export type QuestionBuilder = {
    category: string,
    correctAnswer: string,
    difficulty: string,
    id: string,
    incorrectAnswers: string[],
    isNiche: boolean,
    question: {
        text: string
    },
    regions: string | undefined[],
    tags: string[],
    type: string,
}

export type fetchQuestionParams = {
    category: string,
    difficulty: string,
}

export type HandlingData = {
    chosenAnswerValue: string,
    storedChosenAnswer: string[],
    allAnswers: string[],
    remaningTime: number,
}

export type MajorFunctions = {
    quizData: {
        fullQuestion: QuestionBuilder | null,
        status: "idle" | "loading" | "succeeded",
    },
    storedData: HandlingData | null,
    currentPath: string,
    fimTvPoints: number,
    sportsPoints: number,
    sciencePoints: number,
    generalPoints: number,

}

export type PointsPayload = { category: string, selectedAnswer: string, correctAnswer: string | undefined}