
let arrayOfUsers = []


const getUser = () => {

    fetch('https://randomuser.me/api/?results=4')

    .then(res => res.json())

    .then(data => {

        console.log(data.results)

        arrayOfUsers = data.results

        

        
    // consoleUsers();

    displayUser();

    })


    }

const consoleUsers = () => {

    console.log('arrayOfUsers', arrayOfUsers)

}



const displayUser = () => {

    

    const allUsers = document.getElementById('all-users')

    arrayOfUsers.map((user, index) => {

      const li = document.createElement('li')



        // Change to proper document command.
      const name = `${user.name.title} ${user.name.first} ${user.name.last}`;

      const dob = `${user.dob.date} ${user.dob.age}`;

      const address =`${user.location.street.number} ${user.location.street.name} ${user.location.city}`

      const text = document.createTextNode(`#${index}`)
      

      
    //   const image = document.createElement(`${user.picture.thumbnail}`)  

    //   const image = document.createElement(`${results}`)  

      
    //   Potential line for grabbing image.
    //   image.src = `${result.picture.large}`

      li.appendChild(text)
      


      allUsers.append(address)
      allUsers.append(name)
      allUsers.append(dob)

    //   li.appendChild(image)

      allUsers.append(li)

    })

  }



//   Getting a tutor to go over this with me and clean it up.
