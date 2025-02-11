import { QuestCreate } from "../_components/quest-create";

export default async function Page(){

  return(
    <main className="p-5 space-y-2 max-w-xl m-auto">
      <QuestCreate/>
    </main>
  )
}