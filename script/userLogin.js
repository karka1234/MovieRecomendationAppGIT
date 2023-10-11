window.addEventListener("load",()=> {
    const form= document.querySelector("#LoginButton");
    form.addEventListener("click", ()=> {
        const password = document.querySelector("#password").value;
        const email = document.querySelector("#email").value;
        const userList = localStorage.getItem("users") || "[]";
        const users = JSON.parse(userList);
        const existingUser = users.find((user) => user.email === email && user.password === password);
        const Userinfo=JSON.stringify(existingUser.firstName);
        
        if(existingUser)
        {
            
            const userInfo = JSON.stringify(existingUser.firstName);
            const userConfirmed = window.confirm("Welcome " + userInfo + "\nDo you want to go to the user profile page?");
            window.location.href="../pages/UserProfile.html";
            
        }   
    })

    

})