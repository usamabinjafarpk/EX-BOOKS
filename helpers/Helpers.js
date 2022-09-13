import { supabase } from "../supabase";

// ------------------------------------------------------ auth ----------------------------------------------------
export async function signUp({email, password, metadata, seterror, router}){
    delete metadata.password

    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
            data: metadata,
        }
    })

    // create a public schema table 
    if(!error){
        const userData = await supabase.from('users').insert([{ 
            id: data?.user?.id, 
            name: metadata.name, 
            gender: metadata.gender,
            email: metadata.email,
            phone: metadata.phone,
            address: metadata.address,
            pincode: metadata.pincode

        }])

        userData?.error ? seterror(userData?.error): router.push('/')
    }else seterror(error?.message)
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


// ------------------------------------------------------------------------------- Books --------------------------------------------------------------------------
export async function addBook({data, seterror, router, setloading}){
    setloading(true)
    // upload book image
    const image = await supabase.storage.from('books').upload(data.book_name.toLowerCase().trim().replace(/\s+/g,"_"), data.image[0])
    data.image = 'https://krzjdyuyykpijrzinphc.supabase.co/storage/v1/object/public/' + image?.data?.Key 
    if(image?.error) seterror(true)
    else {
        // inserting book details to book table
        const book = await supabase.from('books').insert([data])
        if (book?.error) seterror(true)
        else 
            router.push('/book/'+ book?.data[0]?.id)
    }
    setloading(false)
}
export async function getBookById(id, setbookData) {
    const books = await supabase.from('books').select(`*, seller(*)`).match({id: id})
    if(!books.error) setbookData(books.data[0])
}
export async function getBooks(setbookData) {
    const books = await supabase.from('books').select().is({buyer: null})
    if(!books.error) setbookData(books.data)
}
export async function getBooksBySeller(setbookData, id) {
    const books = await supabase.from('books').select().match({seller: id})
    if(!books.error) setbookData(books.data)
}
export async function searchBooks(setbookData, id) {
    const books = await supabase.from('books').select().match({seller: id})
    if(!books.error) setbookData(books.data)
}


// --------------------------------------------------chats-----------------------------------------------------
export async function getMessages(ids, setmessages, seterror){
    const messages = await supabase.from('chats').select(`*, sender(*), buyer(*), book(*, seller(name))`).match({ 
        buyer: ids?.buyer, book: ids?.book 
    }).order('created_at', { ascending: true })

    if (messages?.error) {
        seterror(true)
    } else {
        setmessages(messages.data)
    }
}
export async function createMessage(ids, message, seterror){
    const res = await supabase.from('chats').insert([{ 
        sender: ids?.sender,
        buyer: ids?.buyer,
        message: message, 
        book: ids?.book
    }])
    if(res?.error) {
        seterror(true)
    }
}

export async function getChatsByBook(bookId ,setbuyersData) {
    const books = await supabase.from('chats').select(`buyer(id, name)`).match({book: bookId})
    if(!books.error){
        const data = books.data?.map((item) => item?.buyer?.id) 
        const uniqData = [... new Set(data)]
        const buyers = await supabase.from('users').select('id,name').in('id', uniqData)
        !buyers?.error && setbuyersData(buyers?.data)
    }
}