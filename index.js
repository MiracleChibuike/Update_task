const create_Task = document.querySelector(".task_add");
const inputCreate = document.getElementById("note_Input");
const input_Container = document.querySelector(".input_Add");
let task_Container = document.querySelector(".task_Body");
console.log(task_Container);

const insert_task = document.getElementById("addTask_btn");

// Show the input Element
const show_Input = () => {
   
   try {
     if ((input_Container.style.contentVisibility = "hidden")) {
      input_Container.style.contentVisibility = "visible"
    // input_Container.classList.toggle("activate");
     }
   } catch (error) {
   }
};

create_Task.addEventListener("click", show_Input);

// Function to add Task

const add_Task = () => {
   try {
     const input_value = inputCreate.value.trim();
     const store_task = localStorage.setItem("task", input_value)
     if (!input_value === "" || input_value.length <= 10) {
          alert(`Error creating task: Empty input or input length is less than 10. 
Your input contains ${input_value.length} characters.`);
inputCreate.style.border = "2px solid red";
inputCreate.style.boxShadow = "0 0 10px #200505";
return;
     } else {
       task_Container.innerHTML += `
         <div class="test">
                <div class="task_Content">
                  <p>
                   ${input_value}
                  </p>
                </div>
                <div class="delete">
                    <button class="del_btn">Delete</button>
                </div>
            </div>
        `;
        inputCreate.style.border = "1px solid #000";
        inputCreate.style.boxShadow = "0 0 10px #020202";
        console.log(localStorage.getItem("task"))
     };
     inputCreate.value = "";
   } catch (error) {
    console.error(error)
   }
   
};

const store_In_Local_Storage = () => {
    const get_task_Storage = localStorage.getItem("task");
    if (get_task_Storage) {
      task_Container.innerHTML += `
       <div class="test">
                <div class="task_Content">
                  <p>
                   ${get_task_Storage}
                  </p>
                </div>
                <div class="delete">
                    <button class="del_btn">Delete</button>
                </div>
            </div>
      `;
    }
}

insert_task.addEventListener("click", add_Task);

task_Container.addEventListener("click", (event) => {
    if (event.target.classList.contains("del_btn")) {
        const task_Element = event.target.closest(".test");
        const task_Text = task_Element
          .querySelector(".task_Content p")
          .innerText.trim();

          alert(`Task: (${task_Text}) \n was succesfully deleted`)
        task_Element.remove();

        const stored_task = localStorage.getItem("task");

        if (stored_task === task_Text) {
            localStorage.removeItem("task");
            console.log(`Item removed is: ${task_Text}`)
        }
    }
});

window.addEventListener("DOMContentLoaded", store_In_Local_Storage)

// inputCreate.addEventListener("keydown", (e) => {

//     if (inputCreate.value >= 10) {
//         alert("yes")
//     }
// })

