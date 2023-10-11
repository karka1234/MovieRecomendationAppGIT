window.addEventListener("load",()=> {
    const form= document.querySelector("form");
    form.addEventListener("submit", ()=> {
        const password = document.querySelector("#password").value;
        const email = document.querySelector("#email").value;
        const userList = localStorage.getItem("users") || "[]";
        const users = JSON.parse(userList);
        const existingUser = users.find((user) => user.email === email && user.password === password);
        const Userinfo=JSON.stringify(existingUser.firstName);
        
        if(existingUser)
        
        alert("Welcome "+ Userinfo)
    })

    

})