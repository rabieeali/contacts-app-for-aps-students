const baseUrl = 'http://localhost:3500'
const tableBody = document.querySelector('#table-body')
const addForm = document.querySelector('#add-form')
const linearLoader = document.querySelector('.progress')


// Modal Setup
$(document).ready(function () {
    $('.modal').modal();
});

// Loader Setup
const showLoader = () => {
    tableBody.classList.add('hide')
    linearLoader.classList.remove('hide')

}
const hideLoader = () => {
    tableBody.classList.remove('hide')
    linearLoader.classList.add('hide')

}

// GET
const fetchContacts = async () => {
    showLoader()
    try {
        const response = await fetch(baseUrl + '/contacts')
        const contacts = await response.json()

        contacts.map((item, index) => {
            let table;
            table = `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.email}</td>
                    <td>${item.phone}</td>
                    <td>
                        <button id="${item.id}" class="editBtn indigo lighten-2 waves-effect waves-light btn-small">Edit</button>
                        <button id="${item.id}" class="deleteBtn red accent-3 waves-effect waves-light btn-small">Delete</button>
                    </td>
                </tr> 
                `
            if (tableBody) {
                tableBody.innerHTML += table
            }
        })

        document.querySelectorAll('.deleteBtn').forEach(btn => {
            btn.addEventListener('click', deleteHandler)
        })

        document.querySelectorAll('.editBtn').forEach(btn => {
            btn.addEventListener('click', editHandler)
        })
    } catch (err) {
        console.log(err)
    } finally {
        hideLoader()
    }
}

// maybe do it when window is ready!
fetchContacts()

// DELETE
const deleteHandler = async (e) => {
    const id = e.target.id;
    const confiremed = window.confirm('Are You Sure?')
    if (confiremed) {
        showLoader()
        try {
            await fetch(`${baseUrl}/contacts/${id}`, {
                method: 'DELETE',
            })
            await fetchContacts()
        } catch (err) {
            console.log(err)
        } finally {
            hideLoader()
        }
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
        await fetchContacts()
    } catch (err) {
        console.log(err)
    } finally {
        hideLoader()
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

// PUT
const editHandler = (e) => {
    const id = e.target.id
    localStorage.setItem('id', id)
    window.location.href = 'contact.html'
}