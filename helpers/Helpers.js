import { supabase } from "../../supabse";

// ------------------------------------------------------ auth ----------------------------------------------------
export async function signUp({email, password, data}){
    delete data.password

    const { user, session, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    },
    {
      data: data,
    })

    // create a public schema table for volunteers
    if(!error){
        const date = new Date()
        const volunteer = await supabase.from('volunteers').insert([{ 
            id: user.id, created_at: date.toISOString(), name: data.name, group: null 
        }])

        if(volunteer.error){
            return {
                error: volunteer.error.message
            }
        }
    }

    return {
        user: user, 
        session: session, 
        error: error?.message
    }
}

export async function signIn({email, password}){
    const { user, session, error } = await supabase.auth.signIn({
        email: email,
        password: password,
    })

    return {
        user: user, 
        session: session, 
        error: error?.message
    }
}