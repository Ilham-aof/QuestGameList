import { QuestUpdate } from "../_components/quest-update";

export default async function Page({params}) {
  const {id} = await params; 
  const res = await fetch(`https://v1.appbackend.io/v1/rows/S3iqw7fXEAL3/${id}`);
  const data = await res.json();

  if (data.category === "Story") {
    return (
      <main className="p-5 space-y-2 max-w-xl m-auto">
        <div className="rounded-lg border-2 border-yellow-400 p-2">
          <div className="justify-items-center">
          <h3 className="text-2xl font-bold text-yellow-400">{data.quest_title}</h3>
          </div>
          <div className="space-y-4">
              <div>
              <p className="font-semibold text-black">Quest Objective :</p>
              <p>{data.quest_objective}</p>
              </div>
              <div>
              <p className="font-semibold text-black">Quest Description :</p>
              <p>{data.quest_description}</p>
              </div>
          </div>
        </div>
        <QuestUpdate id={data._id} questTitle={data.quest_title} questCategory={data.quest_category} questObjective={data.quest_objective} questDescription={data.quest_description} questStatus={data.status}/>
      </main>
    );
  }

  else if (data.category === "Side Quest") {
    return (
      <main className="p-5 space-y-2 max-w-xl m-auto">
        <div className="rounded-lg border-2 border-blue-600 p-2">
          <div className="justify-items-center">
          <h3 className="text-2xl font-bold text-blue-600">{data.quest_title}</h3>
          </div>
          <div className="space-y-4">
              <div>
              <p className="font-semibold text-black">Quest Objective :</p>
              <p>{data.quest_objective}</p>
              </div>
              <div>
              <p className="font-semibold text-black">Quest Description :</p>
              <p>{data.quest_description}</p>
              </div>
          </div>
        </div>
        <QuestUpdate id={data._id} questTitle={data.quest_title} questCategory={data.quest_category} questObjective={data.quest_objective} questDescription={data.quest_description} questStatus={data.status}/>
      </main>
    );
  }

  if (data.category === "Side Quest") {
    return (
      <main className="p-5 space-y-2 max-w-xl m-auto">
        <div className="rounded-lg border-2 border-blue-600 p-2">
          <div className="justify-items-center">
          <h3 className="text-2xl font-bold text-blue-600">{data.quest_title}</h3>
          </div>
          <div className="space-y-4">
              <div>
              <p className="font-semibold text-black">Quest Objective :</p>
              <p>{data.quest_objective}</p>
              </div>
              <div>
              <p className="font-semibold text-black">Quest Description :</p>
              <p>{data.quest_description}</p>
              </div>
          </div>
        </div>
        <QuestUpdate id={data._id} questTitle={data.quest_title} questCategory={data.quest_category} questObjective={data.quest_objective} questDescription={data.quest_description} questStatus={data.status}/>
      </main>
    );
  }

  if (data.category === "Affinity") {
    return (
      <main className="p-5 space-y-2 max-w-xl m-auto">
        <div className="rounded-lg border-2 border-pink-300 p-2">
          <div className="justify-items-center">
          <h3 className="text-2xl font-bold text-pink-300">{data.quest_title}</h3>
          </div>
          <div className="space-y-4">
              <div>
              <p className="font-semibold text-black">Quest Objective :</p>
              <p>{data.quest_objective}</p>
              </div>
              <div>
              <p className="font-semibold text-black">Quest Description :</p>
              <p>{data.quest_description}</p>
              </div>
          </div>
        </div>
        <QuestUpdate id={data._id} questTitle={data.quest_title} questCategory={data.quest_category} questObjective={data.quest_objective} questDescription={data.quest_description} questStatus={data.status}/>
      </main>
    );
  }

  return (
    <main className="p-5 space-y-2 max-w-xl m-auto">
    <div className="rounded-lg border-2 border-purple-600 p-2">
      <div className="justify-items-center">
      <h3 className="text-2xl font-bold text-purple-600">{data.quest_title}</h3>
      </div>
      <div className="space-y-4">
        <div>
        <p className="font-semibold text-black">Quest Objective :</p>
        <p>{data.quest_objective}</p>
        </div>
        <div>
        <p className="font-semibold text-black">Quest Description :</p>
        <p>{data.quest_description}</p>
        </div>
      </div>
    </div>
    <QuestUpdate id={data._id} questTitle={data.quest_title} questCategory={data.quest_category} questObjective={data.quest_objective} questDescription={data.quest_description} questStatus={data.status}/>
  </main>
  );
}