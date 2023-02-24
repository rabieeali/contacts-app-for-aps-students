const baseUrl = 'http://localhost:3500'
const id = localStorage.getItem('id')
const editForm = document.querySelector('#edit-form')

const inputLoading = () => {
    editForm.querySelector('#name').value = 'Loading ...'
    editForm.querySelector('#email').value = 'Loading ...'
    editForm.querySelector('#phone').value = 'Loading ...'
}

// PUT
const editUserHandler = async (user) => {
    await fetch(`${baseUrl}/contacts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    })
    window.location.href = 'index.html'
}



const getUser = async () => {
    inputLoading()
    
    try {
        const response = await fetch(`${baseUrl}/contacts/${id}`)
        const contact = await response.json()

        editForm.querySelector('#name').value = contact.name
        editForm.querySelector('#email').value = contact.email
        editForm.querySelector('#phone').value = contact.phone

        editForm.addEventListener('submit', (e) => {
            e.preventDefault()
            const name = editForm.querySelector('#name').value
            const email = editForm.querySelector('#email').value
            const phone = editForm.querySelector('#phone').value
            const newUser = { name, email, phone }
            editUserHandler(newUser)
        })

    } catch (err) {
        console.log(err)
    }
}

getUser()