import Link from "next/link";
import { QuestList } from "./_components/quest-read";

export default async function Page(){

  return(
    <main className="p-5 space-y-2 max-w-xl m-auto">
      <h2 className="font-bold text-2xl">My Quest</h2>
      <p>Finish all your quest below</p>
      <QuestList/>
      <form>
      <Link href={"/quest/new_quest"}>
        <button className="common-button">New Quest</button>
      </Link>  
      </form>    
    </main>
  )
}