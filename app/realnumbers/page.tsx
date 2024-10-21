"use client"
import React, { useEffect, useState } from "react"
import { fractionQuotient, isFraction, isPositiveFraction, isWholeNumber } from "./numberChecks"
import { generateNaturalNumber } from "./generateNumber"

type RealNumberTypes = "Natural" | "Positive Rational" | "Positive Irrational" | "Negative Rational"
export default function RealNumbers() {
    const [inputtedNumber, setInputtedNumber] = useState("")
    const [numberType, setNumberType] = useState<RealNumberTypes | null>(null)
    const [explanation, setExplanation] = useState("")

    const [quizQuestions, setQuizQuestions] = useState<{
        questions: number[],
        answer: number
        questionTitle: string
    }>({
        questions: [2, 4, 21],
        answer: 1,
        questionTitle: "Select the natural number"
    })

    useEffect(() => { 
        setQuizQuestions({...quizQuestions, questions: [generateNaturalNumber()]})
    }, [])

    function determineNumberType() {
        if (inputtedNumber === "" || inputtedNumber === ".") return setNumberType(null)

        isPositiveFraction(inputtedNumber)

        if (!isWholeNumber(Number(inputtedNumber)) && isPositiveFraction(inputtedNumber) && fractionQuotient(inputtedNumber) !== Math.floor(fractionQuotient(inputtedNumber))) {
            return setNumberType("Positive Rational"), setExplanation("Because its not a whole number, is a postive and is not a decimal")


        }

        if (!isWholeNumber(Number(inputtedNumber)) && isPositiveFraction(inputtedNumber) && fractionQuotient(inputtedNumber) === Math.floor(fractionQuotient(inputtedNumber))) {
            return setNumberType("Natural")
        }


        const wholeNumber = isWholeNumber(Number(inputtedNumber))
        if (wholeNumber) return setNumberType("Natural")



        return setNumberType(null)
    }

    useEffect(() => {
        determineNumberType()
    }, [inputtedNumber])



    return <div className="w-full h-screen p-10 ">
        <label htmlFor="numberinput">Number</label>
        <input value={inputtedNumber} onChange={(newNumber) => setInputtedNumber(newNumber.target.value)} id="numberinput" />

        {
            numberType && <p>
                {inputtedNumber} is a {numberType} number {explanation}
            </p>
        }

        <div className="mt-5">
            <h1 className="text-xl">{quizQuestions.questionTitle}</h1>
            <div className="flex gap-5">
                {
                    quizQuestions?.questions.map(question => {
                        return <p key={question} className="w-20 h-20 bg-stone-700 flex items-center justify-center text-lg">{question}</p>
                    })
                }
            </div>
        </div>
    </div>
}