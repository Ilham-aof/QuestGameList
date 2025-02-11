import { revalidatePath } from "next/cache";
import { API_URL } from "@/constants/api-url";

export const QuestUpdate = async ({id, questTitle, questCategory, questObjective, questDescription, questStatus}) => {
  async function updateQuestAction(formData) {
      "use server"
      const questId = formData.get("quest-id");
      const questTitle = formData.get("quest-title");
      const questCategory = formData.get("quest-category");
      const questObjective = formData.get("quest-objective");
      const questDescription = formData.get("quest-description");
      const questStatus = formData.get("quest-status");
  
      await fetch(API_URL , {
        method: "PUT",
        headers: {
              'Content-Type': 'application/json'
        },
        body: JSON.stringify({_id:questId, category:questCategory, quest_objective:questObjective, quest_description:questDescription, quest_title:questTitle, status:questStatus})
      })
  
      revalidatePath("/");
    }

  return (
    <section>
    <h2 className="font-bold text-2xl">Edit Quest</h2>
    <form className="space-y-2" action={updateQuestAction}>
      <input name="quest-id" defaultValue={id} hidden/>
      <p>Quest Title</p>
      <input name="quest-title" defaultValue={questTitle}/>
      <p>Quest Category</p>
      <select name="quest-category">
        <option value="Story">Story</option>
        <option value="Side Quest">Side Quest</option>
        <option value="Affinity">Affinity</option>
        <option value="Others">Others</option>
      </select>
      <p>Quest Objective</p>
      <input name="quest-objective" defaultValue={questObjective}/>
      <p>Quest Description</p>
      <textarea name="quest-description" defaultValue={questDescription}/>
      <p>Quest Status</p>
      <select name="quest-status">
        <option value="Finish">Finish</option>
        <option value="Unfinish">Unfinish</option>
      </select>
      <button className="common-button">Update Quest</button>
    </form>
  </section>
  )
}
