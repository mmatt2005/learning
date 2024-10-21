"use client"
import Image from "next/image";

interface Learning {
  date: string, 
  route: string, 
  description: string
}
const learnings: Learning[] = [
  {
    date: "7/6/24 8:55am",
    route: "mapvsobj",
    description: "Figure out the differences between map data structure and a object"
  },
  {
    date: "10/21/24 9:10a,",
    route: "backgroundThemes",
    description: "Testing"
  }
]
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter()

  return <div className="m-5 ">
    Learning Projects 7/6/24 8:46am
    <div className="flex flex-wrap gap-1">
      {
        learnings.map(learning => {
          return <div key={learning.route} className="bg-stone-500 rounded-sm p-5 flex flex-col gap-1">
            <h1 className=" text-lg mb-1 ">{learning.date}</h1>
            <p>{learning.description}</p>
            <button className="bg-blue-500" onClick={() => router.push(learning.route)}>{learning.route}</button>
          </div>
        })
      }
    </div>
  </div>
}
