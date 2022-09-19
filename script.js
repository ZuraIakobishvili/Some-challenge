
const form = document.querySelector('form') ;
const tbodyEl = document.querySelector('tbody');
const tableEl = document.querySelector('table');

function addFunction(e){
    e.preventDefault();
   
    
    
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const address    = document.getElementById('address').value;
    const birthday = document.getElementById('birthday').value;
    const gender = document.getElementById('gender').value;
    const textarea = document.getElementById('text-area').value;
    

    if(!firstname) {
        alert('The First Name is required');
        return;
    } else if (!lastname) {
        alert('The Last Name is required');
        return;
    } else if(!address){
        alert('Adress is requied');
        return;
    } else if (address.length>35){
        alert('Only 35 characters');
        return;
    }


    tbodyEl.innerHTML += `
    

    <tr class="table2">

        
        <td>${firstname}</td>
        <td>${lastname}</td>
        <td>${address}</td>
        <td>${birthday}</td>
        <td>${gender}</td>
        <td>${textarea}</td>
        <td><button class="deleteBtn" value="Delete">Delete</button></td>
    </tr>
    
    `;
    
}
    
   
    function onDeleteRow(e) {

        if(!e.target.classList.contains('deleteBtn')) {
            return;
        }
        
        const btn = e.target;
        btn.closest('tr').remove();
    }
    


form.addEventListener('submit', addFunction );
tableEl.addEventListener('click', onDeleteRow );


