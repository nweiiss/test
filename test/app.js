document.addEventListener("DOMContentLoaded", async () => {
    const refreshButton = document.getElementById("refreshButton");
    const sortNameButton = document.getElementById("sortNameButton")
  
    refreshButton.addEventListener("click", async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const data = await response.json();
    
        const cards = document.querySelector("#cards");
        cards.innerHTML = '';
    
        data.forEach((post) => {
          const card = document.createElement("div");
          card.classList.add("card");
    
          const name = document.createElement("h2");
          name.classList.add("text-name");
          name.textContent = `Имя: ${post.name}`;
  
          const email = document.createElement("p");
          email.textContent = `Email: ${post.email}`;
  
          const phone = document.createElement("p");
          phone.textContent = `Телефон: ${post.phone}`;
    
          card.appendChild(name);
          card.appendChild(email);
          card.appendChild(phone);
          cards.appendChild(card);
        });
      } catch (error) {
        console.log(error, "ERROR!");
      }
    });
  
    refreshButton.click();

    sortNameButton.addEventListener("click", () => {
        const cards = document.querySelectorAll(".card");
        const sortedCards = Array.from(cards).sort((a, b) => {
          const nameA = a.querySelector(".text-name").textContent.split(': ')[1];
          const nameB = b.querySelector(".text-name").textContent.split(': ')[1];
          return nameA.localeCompare(nameB);
        });
        const userList = document.getElementById("cards");
        userList.innerHTML = "";
        sortedCards.forEach(card => {
          userList.appendChild(card);
        });
      });
  });
  
  