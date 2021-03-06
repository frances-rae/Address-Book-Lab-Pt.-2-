"use strict";
{

      class AddressBook {
        constructor() {
            this.contacts = [];
             
        }


        add() {
            const addedContact = new Contact(name.value, email.value, phone.value, relation.value);
            this.contacts.push(addedContact);
        }

        display () {
        // this is the section we are targetting  
        // The dot notation creates/mimics the path of what info you want to retrieve
        let contact_section = document.getElementById("contact_section");

        // Setting up variables for creating elements 
        let div = document.createElement("div");  
        let info = document.createElement("p");
        let icon = document.createElement("i");

        // Adding CSS classes to created elements
        div.classList.add("contact_container"); 
        icon.classList.add("material-icons"); 
        icon.classList.add("delete"); 

        //Adding text 
        icon.innerText ="delete"; // innerText defines the HTML content 
        info.innerText = `Name: ${name.value}
        Email: ${email.value}
        Phone: ${phone.value}
        Relation: ${relation.value}`; 

        //Appending info to div,and div to contact section 
        div.appendChild(info); 
        div.appendChild(icon); 
        contact_section.appendChild(div); 
        icon.addEventListener("click", () => {
            div.remove(); 
        })

    } 


    }
    //This allows adding of contact infomation 
    class Contact {
        constructor(name, email, phone, relation) {
            this.name = name;
            this.email = email;
            this.phone = phone;
            this.relation = relation;
        }

    }

    let name = document.querySelector("#name"); 
    let email = document.querySelector("#email"); 
    let number = document.querySelector("#phone"); 
    let relation = document.querySelector("#relation"); 
    let button = document.querySelector("#button"); 
 
    let myAddressBook = new AddressBook;
    
    button.addEventListener("click", () => {
        myAddressBook.add();
        myAddressBook.display();
        name.value = "";
        email.value = "";
        number.value = "";
        relation.value = "";
      }); 

}



