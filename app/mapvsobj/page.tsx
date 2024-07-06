"use client"
import React, { useState } from "react"


type ResObjValue = string | [number, number] // tuple
interface ResObj {
    target1: ResObjValue
    target2: ResObjValue
    target3: ResObjValue
    target4: ResObjValue
}
/*
Here we will figure out the differences in preformance between the js map data structure and a object 

We will use the following problem from leetcode to show the preformance difference
https://leetcode.com/problems/two-sum/description/

Problem: Given an array of integers nums and an integer target, return indices of the
two numbers such that they add up to target.
*/
export default function MapVsObj() {
    const nums = [5, 6, 1, 2, 4, 5, 7, 8]
    const targets = [11, 6, 9, 7] // nums[n] + nums[n + 1] should add the targets[n]

    const [mapTime, setMapTime] = useState<number | null>(null)
    const [objTime, setObjTime] = useState<number | null>(null)


    function calcUsingMap() {
        const startTime = Date.now()


        const endTime = Date.now()


        setMapTime(endTime - startTime)
    }

    function calcUsingObj() {
        const startTime = Date.now()



        const resObj: ResObj = {
            target1: "",
            target2: "",
            target3: "",
            target4: ""
        }




        // DOESNT WORK YET
        while (Object.values(resObj).includes("")) {

            for (let i = 0; i < nums.length; i++) {
                if (Object.values(resObj).includes("")) {
                    if (targets.includes(i + (i + 1))) {
                        const targetNotFound = Object.values(resObj).findIndex(key => key === "")
                        if (targetNotFound === -1) {
                            console.log("NOT FOUND: ", resObj)
                        } else { 
                            console.log("FOUND: ",resObj )
                        }
    
                        // stores all the keys of resObject in a array 
                        const objKeys = Object.keys(resObj) as Array<keyof ResObj>
    
                        resObj[objKeys[targetNotFound]] = [i, (i + 1)]
                    } 
                }
            }
        }



        const endTime = Date.now()


        setObjTime(endTime - startTime)
    }

    return <div className="w-full h-screen flex">
        <div className="w-1/2 h-screen p-10">
            <h1 className="text-xl">Map</h1>
            <button onClick={calcUsingMap} >Calculate with map</button>
            {
                mapTime && <p>Time Taken: {mapTime} ms</p>
            }
        </div>
        <div className="w-1/2 h-screen p-10">
            <h1 className="text-xl">Object</h1>
            <button onClick={calcUsingObj}>Calculate with object</button>
            {
                objTime && <p>Time Taken: {objTime} ms</p>
            }
        </div>
    </div>
}