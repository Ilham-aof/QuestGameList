import { QuestUpdate } from "../../_components/quest-update";

export default async function Page({params}){
    const {id} = await params; 
    const res = await fetch(`https://v1.appbackend.io/v1/rows/S3iqw7fXEAL3/${id}`);
    const data = await res.json();

  return(
    <main className="p-5 space-y-2 max-w-xl m-auto">
      <QuestUpdate id={data._id} questTitle={data.quest_title} questCategory={data.quest_category} questObjective={data.quest_objective} questDescription={data.quest_description} questStatus={data.status}/>
    </main>
  )
}