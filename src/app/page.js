import Link from "next/link";

export default async function Page(){

  return(
    <main className="h-screen justify-items-center content-center space-y-2">
      <h2 className="font-bold text-2xl">Simple CRUD</h2>
      <form>
        <Link href={"/quest"}>
          <button className="common-button">Go To My Quest</button>
        </Link>
      </form>
    </main>
  )
}