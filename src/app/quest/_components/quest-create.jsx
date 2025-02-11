import { revalidatePath } from "next/cache";
import { API_URL } from "@/constants/api-url";


export const QuestCreate = async () => {

  async function createQuestAction(formData) {
    "use server"

    const questTitle = formData.get("quest-title");
    const questCategory = formData.get("quest-category");
    const questObjective = formData.get("quest-objective");
    const questDescription = formData.get("quest-description");
    const questStatus = formData.get("quest-status");

    await fetch(API_URL , {
      method: "POST",
      headers: {
            'Content-Type': 'application/json'
      },
      body: JSON.stringify([{category:questCategory, quest_objective:questObjective, quest_description:questDescription, quest_title:questTitle, status:questStatus}])
    })

    revalidatePath("/");
  }

  return (
    <section>
    <h2 className="font-bold text-2xl">Create Quest</h2>
    <form className="space-y-2" action={createQuestAction}>
      <p>Quest Title</p>
      <input name="quest-title" placeholder="Quest Title"/>
      <p>Quest Category</p>
      <select name="quest-category" placeholder="Select Category">
        <option value="Story">Story</option>
        <option value="Side Quest">Side Quest</option>
        <option value="Affinity">Affinity</option>
        <option value="Others">Others</option>
      </select>
      <p>Quest Objective</p>
      <input name="quest-objective" placeholder="Objective"/>
      <p>Quest Description</p>
      <textarea name="quest-description" placeholder="Description"/>
      <input name="quest-status" defaultValue={"Unfinish"} hidden/>
      <button className="common-button">Create Quest</button>
    </form>
  </section>
  )
}
