import { revalidatePath } from "next/cache";
import { API_URL } from "@/constants/api-url";


export const QuestDelete = async ({id, status}) => {

    async function deleteQuestAction(formData) {
        "use server"
    
        const id = formData.get("quest-id");
        
        await fetch(API_URL , {
          method: "DELETE",
          headers: {
                'Content-Type': 'application/json'
          },
          body: JSON.stringify([id])
        })
    
        revalidatePath("/");
    }   

  if (status === "Finish") {
    return (
      <form action={deleteQuestAction}>
            <input name="quest-id" defaultValue={id} hidden/>
            <input name="quest-status" defaultValue={status} hidden/>
            <button className="bg-green-600 text-xs text-white px-2 py-1">Done</button>
      </form>
    )    
  }
  return (
    <form action={deleteQuestAction}>
          <input name="quest-id" defaultValue={id} hidden/>
          <input name="quest-status" defaultValue={status} hidden/>
          <button className="bg-red-600 text-xs text-white px-2 py-1">Delete</button>
    </form>
  )
}
