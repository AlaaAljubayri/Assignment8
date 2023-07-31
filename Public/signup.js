//Get Reference for both the Forms
const SignUpForm = document.getElementById('SignUpForm');
const LoginForm = document .getElementById('LoginForm');
//Event Listener for SignUp
SignUpForm.addEventListener('submit',(e)=>{e.preventDefault();
    const UserName1 = document.getElementById('SignUpUserName').value;
    const Password1 = document.getElementById('SignUpPassword').value;
//Store the Information in IndexedDB
SaveDataToIndexedDB(UserName1, Password1);
});

//Function to Store Data in IndexedDB
function SaveDataToIndexedDB(UserName, Password)
{   const User = {username: UserName, password: Password};
    const request = window.indexedDB.open('UserDB',1);
    request.onerror = (event)=>
    {console.error('Sorry. Error Creating IndexedDB Database');};
    request.onsuccess = (event)=>
    {   const db = event.target.result;
        const transaction = db.transaction(['Users'],'readwrite');
        const objectstore = transaction.objectStore('Users');
        const addUserRequest = objectstore.add(User);
        addUserRequest.onsuccess = ()=>
        {console.log('User Data Saved Successfully!');};
        transaction.onsuccess = ()=>{db.close();};
    };
    request.onupgradeneeded=(event)=>
    {   const db = event.target.result;
        db.createObjectStore('Users',{keyPath:'username'});
    };
}

