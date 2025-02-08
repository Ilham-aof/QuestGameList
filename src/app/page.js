import Link from "next/link";
import { revalidatePath } from "next/cache";
import { QuestList } from "./quest/_components/quest-read";
import { QuestCreate } from "./quest/_components/quest-create";
import { API_URL } from "@/constants/api-url";

export default async function Page(){

  return(
    <main className="p-5 space-y-2 max-w-xl m-auto">
      <section>
        <h2 className="font-bold text-2xl">My Quest</h2>
        <p>Finish all your quest below</p>
      </section>
      <QuestList/>
      <QuestCreate/>
    </main>
  )
}