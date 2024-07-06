"use client"
import Image from "next/image";

const learnings = [
  {
    date: "7/6/24 8:55am",
    route: "mapvsobj",
    description: "Figure out the differences between map data structure and a object"
  }
]
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter()

  return <div className="m-5 ">
    Learning Projects 7/6/24 8:46am
    <div className="flex flex-wrap">
      {
        learnings.map(learning => {
          return <div className="bg-stone-500/50 rounded-sm p-5 flex flex-col gap-1">
            <h1 className=" text-lg mb-1 ">{learning.date}</h1>
            <p>{learning.description}</p>
            <button onClick={() => router.push(learning.route)}>{learning.route}</button>
          </div>
        })
      }
    </div>
  </div>
}
