import supabase from "./Supabase";

// export async function login({email,password}) {
//   const {data,error} = await supabase.auth.signIn({
//         email,password
//     })

//     if(error) throw new Error(error.message)

//     return data;
// }

// export async function login({ email, password }) {
//     console.log("Login request data:", { email, password });
    
//     // Call the Supabase API
//     const { data, error } = await supabase.auth.signIn({
//       email,
//       password
//     });
  
//     // Handle the error case
//     if (error) {
//       console.error("Supabase Error:", error); // Log full error object
//       throw new Error(error.message); // Throw error to be handled elsewhere
//     }
  
//     // Handle success case, return the data
//     console.log("Supabase Response Data:", data); // Log successful response
//     return data;  // This should be handled correctly
//   }

export async function login({ email, password }) {
    console.log("Login request data:", { email, password });  // Log data received in the function
  
    // Ensure email and password are not undefined
    if (!email || !password) {
      console.error("Email or Password is missing!");
      throw new Error("Email or Password is missing!");
    }
  
    const { data, error } = await supabase.auth.signIn({
      email,
      password,
    });
  
    if (error) {
      console.error("Supabase Error:", error);
      throw new Error(error.message);
    }
  
    console.log("Supabase Response Data:", data);
    return data;
  }
  