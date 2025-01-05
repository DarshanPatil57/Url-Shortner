import supabase from "./Supabase"

export async function getUrls({user_id}) {
    const {data,error} = await supabase.from("url's").select("*").eq("user_id",user_id)

      if(error){ 
        console.error(error.message)
        throw new Error("Unable to load URL")
    }
        return data
  }