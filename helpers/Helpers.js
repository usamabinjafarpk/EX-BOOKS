import { supabase } from "../supabase";

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
        const volunteer = await supabase.from('buyers').insert([{ 
            id: user.id, 
            name: data.name, 
            gender: data.gender,
            email: data.email,
            phone: data.phone,
            address: data.address,
            pincode: data.pincode

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

// --------------------------------------------------chats-----------------------------------------------------
export async function getChatGroups(userId){
    const volunteer = await supabase.from('volunteers').select('group').match({ id: userId })
    if(!volunteer?.error && volunteer?.data[0]?.group !== null){
        const chatGroups = await supabase.from('opportunities').select().in('id', volunteer?.data[0]?.group)
        // console.log(chatGroups?.data);
        return {
            data: chatGroups?.data, 
            error: chatGroups?.error
        }
    } else {
        return {
            error: true 
        }
    }
}