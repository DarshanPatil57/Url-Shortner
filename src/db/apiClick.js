import supabase from "./Supabase"

export async function getClickForUrl(user_id) {
    const {data,error} = await supabase.from("click's").select("*").eq("user_id",user_id)

      if(error){ 
        console.error(error.message)
        throw new Error("Unable to load Clicks")
    }
        return data
  }