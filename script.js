// Fake login
if (document.getElementById("loginForm")) {
    document.getElementById("loginForm").addEventListener("submit", function (e) {
      e.preventDefault();
      const user = document.getElementById("username").value;
      const pass = document.getElementById("password").value;
  
      if (user === "admin" && pass === "123") {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "tasks.html";
      } else {
        document.getElementById("error").textContent = "Usuário ou senha inválidos.";
      }
    });
  }
  
  // Lista de tarefas
  if (document.getElementById("taskForm")) {
    if (localStorage.getItem("loggedIn") !== "true") {
      window.location.href = "index.html";
    }
  
    const taskForm = document.getElementById("taskForm");
    const taskList = document.getElementById("taskList");
  
    taskForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const taskText = document.getElementById("newTask").value;
      const li = document.createElement("li");
      li.innerHTML = `
      <label>
        <input type="checkbox" onchange="toggleDone(this)">
        <span>${taskText}</span>
      </label>
      <button onclick="removeTask(this)">Remover</button>
    `;
      taskList.appendChild(li);
      taskForm.reset();
    });
  
    document.getElementById("logout").addEventListener("click", () => {
      localStorage.removeItem("loggedIn");
      window.location.href = "index.html";
    });
  }
  
  function removeTask(button) {
    button.parentElement.remove();
  }
  
  function toggleDone(checkbox) {
    const span = checkbox.nextElementSibling;
    if (checkbox.checked) {
      span.style.textDecoration = "line-through";
      span.style.color = "#888";
    } else {
      span.style.textDecoration = "none";
      span.style.color = "#000";
    }
  }
  