"use client"
import React, { useRef, useState } from "react"

export default function Filter2Arrays() {
    const [array1, setArray1] = useState([3, "5", "Green", false])
    const [array2, setArray2] = useState(["blue", "gren", 35, 90])

    const input1Ref = useRef<HTMLInputElement | null>(null)

    const [commonValues, setCommonValues] = useState([])
    return <div className="flex flex-col items-center justify-evenly h-screen ">
        <div className="">
            <h1 className="text-xl">filter 2 arrays</h1>
            <p >here we can see how when can filter 2 arrays and find in common values from both of them</p>
        </div>
        <div className="flex items-center justify-evenly w-full">
            <div className="flex justify-evenly w-full">
                <div className="">
                    <h1 className=" font-semibold text-lg">array 1</h1>
                    {array1.map(value => {
                        return <p>{value}</p>
                    })}
                    <div className="flex gap-1 mt-5">
                        <input ref={input1Ref} />
                        <button onClick={() => { 
                            const inputValue = input1Ref.current?.value
                            if (inputValue && input1Ref.current) {
                                setArray1([...array1, inputValue])
                                input1Ref.current.value = ""
                                input1Ref.current.focus()
                            } 
                        }}>Add</button>
                    </div>
                </div>
                <div className="">
                    <h1 className=" font-semibold text-lg">array 2</h1>
                    {array2.map(value => {
                        return <p>{value}</p>
                    })}
                    <div className="flex gap-1 mt-5">
                        <input />
                        <button>Add</button>
                    </div>
                </div>
            </div>
        </div>
        In common values:
    </div>
}