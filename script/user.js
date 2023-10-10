window.addEventListener("load",()=> {
    const form= document.querySelector("form")
    form.addEventListener("submit", ()=>{
        const firstName =document.querySelector("#fname").value;
        const lastName =document.querySelector("#lname").value;
        const email = document.querySelector("#email").value;

        const storedUsers = localStorage.getItem("users") || "[]";
        const users = JSON.parse(storedUsers);

    
    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      movieList:[],
    }
    users.push(user);
    const updatedUsersJSON = JSON.stringify(users);
    localStorage.setItem("users", updatedUsersJSON);
    })


})