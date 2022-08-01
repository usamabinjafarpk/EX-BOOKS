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

export async function getUser(id, setsellerDetails) {
    const user = await supabase.from('users').select('name').match({id: id})
    !user?.error && setsellerDetails(user?.data[0])
}

// --------------------------------------------------Books ----------------------------------------------------------
export async function getBooks(setbookData) {
    const books = await supabase.from('books').select()
    if(!books.error) setbookData(books.data)
}
export async function getBookById(id, setbookData) {
    const books = await supabase.from('books').select(`*, seller(*)`).match({id: id})
    if(!books.error) setbookData(books.data[0])
}
// --------------------------------------------------chats-----------------------------------------------------
// export async function getChatGroups(userId){
//     const volunteer = await supabase.from('volunteers').select('group').match({ id: userId })
//     if(!volunteer?.error && volunteer?.data[0]?.group !== null){
//         const chatGroups = await supabase.from('opportunities').select().in('id', volunteer?.data[0]?.group)
//         // console.log(chatGroups?.data);
//         return {
//             data: chatGroups?.data, 
//             error: chatGroups?.error
//         }
//     } else {
//         return {
//             error: true 
//         }
//     }
// }

export async function getMessages(ids, setmessages, seterror){
    const messages = await supabase.from('chats').select(`
        *,
        to(
            name,
            id
        ),
        from(
            name,
            id
        )
    `).match({ 
        buyer: ids?.buyer, seller: ids?.seller, book: ids?.book 
    }).order('created_at', { ascending: true })

    if (messages?.error) {
        seterror(true)
    } else {
        setmessages(messages.data)
    }
}
export async function getMessage(id, setmessages, seterror){
    const messages = await supabase.from('chats').select(`
        *,
        volunteer (
            name,
            id
        )`).match({ id: id - 1 })

    if (messages?.error) {
        seterror(true)
    } else {
        console.log(messages);
        setmessages((prev)=> [...prev, messages.data[0]])
    }
}
export async function createMessage(ids, message, seterror){
    const res = await supabase.from('chats').insert([{ 
        from: ids?.from,
        to: ids?.to,
        buyer: ids?.buyer,
        seller: ids?.seller ,
        message: message, 
        book: ids?.book
    }])
    if(res.error) {
        seterror(true)
    }
}