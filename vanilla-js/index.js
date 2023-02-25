
const baseUrl = 'http://localhost:3500'
const tableBody = document.querySelector('#table-body')
const addForm = document.querySelector('#add-form')
const linearLoader = document.querySelector('#spinner')


// Loader Setup
export const showLoader = () => {
    tableBody.classList.add('hidden')
    linearLoader.classList.remove('hidden')
}

export const hideLoader = () => {
    tableBody.classList.remove('hidden')
    linearLoader.classList.add('hidden')
}


// GET
const fetchContacts = async () => {
    try {
        showLoader()
        const response = await fetch(baseUrl + '/contacts')
        const contacts = await response?.json()

        contacts?.map((item, index) => {
            let table;
            table = `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.email}</td>
                    <td>${item.phone}</td>
                    <td>
                        <a href="contact.html?id=${item.id}" class="editBtn btn btn-warning">
                            <img class="w-5 h-5" src="edit.png" alt="edit" />
                        </a>
                        <label  for="my-modal-${item.id}-1" class=" btn btn-error">
                            <img class="w-5 h-5" src="delete.png" alt="delete" />
                        </label>

                        <input type="checkbox" id="my-modal-${item.id}-1" class="modal-toggle" />
                            <label for="my-modal-${item.id}-1" class="modal cursor-pointer">
                                <label class="modal-box relative" for="">
                                    <p>You Are About To Delete <span class="text-accent"> ${item.name}</span></p>
                                    <h3 class="text-4xl font-bold my-7">Are You Sure?</h3>
                                    <button id="${item.id}" class="deleteBtn btn  btn-outline btn-error capitalize block ml-auto">Delete ${item.name}</button>
                                </label>
                            </label>
                    </td>
                </tr> 
                `
                tableBody.innerHTML += table
        })

        document.querySelectorAll('.deleteBtn').forEach(btn => {
            btn.addEventListener('click', deleteHandler)
        })

        hideLoader()
    } catch (err) {
        console.log(err)
    } finally {
        hideLoader()
    }
}

fetchContacts()


// DELETE
const deleteHandler = async (e) => {
    const { id } = e.target;
    try {
        await fetch(`${baseUrl}/contacts/${id}`, {
            method: 'DELETE',
        })
        location.reload()
    } catch (err) {
        console.log(err)
    }
}

// POST
const addNewUserHandler = async (newUser) => {
    try {
        await fetch(`${baseUrl}/contacts`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        })
        location.reload()
    } catch (err) {
        console.log(err)
    }
}

addForm?.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = addForm.querySelector('#name').value
    const email = addForm.querySelector('#email').value
    const phone = addForm.querySelector('#phone').value
    const newUser = { name, email, phone }
    addNewUserHandler(newUser)
})