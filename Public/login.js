
//Event Listener for Login
LoginForm.addEventListener('submit',(e) =>{e.preventDefault();
    const UserName2 = document.getElementById('LoginUserName').value;
    const Password2 = document.getElementById('LoginPassword').value;
    //Read the Information from IndexedDB
CheckDataInIndexedDB(UserName2,Password2);
});


//Function to Checking User Data in the IndexedDB
function CheckDataInIndexedDB(UserName, Password)
{   const request = window.indexedDB.open('UserDB',1);
    request.onerror = (event)=>{console.error('Error while Reading!');};
    request.onsuccess = (event)=>
    {   const db = event.target.result;
        const transaction = db.transaction(['Users'],'readonly');
        const objectstore = transaction.objectStore('Users');
        const getUserRequest = objectstore.get(UserName);
        getUserRequest.onsuccess = () =>
        {   const User = getUserRequest.result;
            if(User && User.password === Password)
            {window.location.href = "home.html"}
            else {console.log('UserName or Password Incorrect');}
        };
        transaction.oncomplete= ()=>{db.close();};
    };
    request.onupgradeneeded=(event)=>
    {   const db=event.target.result;
        db.createObjectStore('Users',{keyPath:'UserName'});
    };
}