import { revalidatePath } from "next/cache";
import Link from "next/link";
import { QuestDelete } from "./quest-delete";
import { API_URL } from "@/constants/api-url";


export const QuestList = async () => {

    const res = await fetch(API_URL);
    const data = await res.json();
    
    const storyData = data.data.filter((i) => i.category === "Story");
    const sideStoryData = data.data.filter((i) => i.category === "Side Quest");
    const affinityData = data.data.filter((i) => i.category === "Affinity");
    const othersData = data.data.filter((i) => i.category === "Others");
    
  return (
    <section className="space-y-3">
    {storyData.map((item) => {     
      if (item.status === "Finish" ) {
        return <div key={item._id} className="flex gap-3 text-green-600 font-semibold text-lg rounded-lg border-2 border-green-600 p-2">
          <Link href={`/quest/${item._id}`}>[{item.category}] {item.quest_title}</Link>
          <QuestDelete id={item._id} status={item.status}/>
        </div> 
      }

      return <div key={item._id} className="flex gap-3 text-yellow-400 font-semibold text-lg rounded-lg border-2 border-yellow-400 p-2">
        <Link href={`/quest/${item._id}`}>[{item.category}] {item.quest_title}</Link>
        <QuestDelete id={item._id} status={item.status}/>
      </div>
    })}

    {sideStoryData.map((item) => {     
      if (item.status === "Finish") {
        return <div key={item._id} className="flex gap-3 text-green-600 font-semibold text-lg rounded-lg border-2 border-green-600 p-2">
          <Link href={`/quest/${item._id}`}>[{item.category}] {item.quest_title}</Link>
          <QuestDelete id={item._id} status={item.status}/>
        </div>
      }
      return <div key={item._id} className="flex gap-3 text-blue-600 font-semibold text-lg rounded-lg border-2 border-blue-600 p-2">
        <Link href={`/quest/${item._id}`}>[{item.category}] {item.quest_title}</Link>
        <QuestDelete id={item._id} status={item.status}/>
      </div>
    })}

    {affinityData.map((item) => {     
      if (item.status === "Finish") {
        return <div key={item._id} className="flex gap-3 text-green-600 font-semibold text-lg rounded-lg border-2 border-green-600 p-2">
          <Link href={`/quest/${item._id}`}>[{item.category}] {item.quest_title}</Link>
          <QuestDelete id={item._id} status={item.status}/>
        </div>
      }

      return <div key={item._id} className="flex gap-3 text-pink-300 font-semibold text-lg rounded-lg border-2 border-pink-300 p-2">
        <Link href={`/quest/${item._id}`}>[{item.category}] {item.quest_title}</Link>
        <QuestDelete id={item._id} status={item.status}/>
      </div>
    })}

    {othersData.map((item) => {     
      if (item.status === "Finish") {
        return <div key={item._id} className="flex gap-3 text-green-600 font-semibold text-lg rounded-lg border-2 border-green-600 p-2">
          <Link href={`/quest/${item._id}`}>[{item.category}] {item.quest_title}</Link>
          <QuestDelete id={item._id} status={item.status}/>
        </div>    
      }

      return <div key={item._id} className="flex gap-3 text-purple-600 font-semibold text-lg rounded-lg border-2 border-purple-600 p-2">
        <Link href={`/quest/${item._id}`}>[{item.category}] {item.quest_title}</Link>
        <QuestDelete id={item._id} status={item.status}/>
      </div>
        
    })}
    </section>
  )
}