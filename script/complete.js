function getTextValue(id) {
  const taskNum = document.getElementById(id).innerText;
  const convtertedTaskNum = parseInt(taskNum);
  return convtertedTaskNum;
}
function innerValue(id, value) {
  document.getElementById(id).innerText = value;
}
function disableBtn(id) {
  document.getElementById(id).disabled = true;
}
function historyText(id) {
  const newDiv = document.getElementById(id);
  return newDiv;
}
function createText(id, id1) {
  const time = new Date();
  const newtime = time.toLocaleTimeString();
  const title = document.getElementById(id).innerText;
  const p = document.createElement("p");
  p.innerHTML = ` <p class="bg-body-primary rounded-xl p-2">You have Complete The Task ${title} at ${newtime}
  `;
  const newDiv = historyText(id1);
  newDiv.appendChild(p);
}
document.getElementById("complete-2").addEventListener("click", function () {
  const taskCount = getTextValue("task-count");
  const newTask = taskCount - 1;
  const firstCount = getTextValue("first-count");
  const newFirstCount = firstCount + 1;
  if (taskCount === 1) {
    alert("Board Updated Successfully");
    disableBtn("complete-2");
    innerValue("task-count", newTask);
    innerValue("first-count", newFirstCount);
    alert("Congrates!!! You have completed all the current task");
    createText("task-2", "history");
  } else {
    if (taskCount <= 0) {
      return;
    } else {
      alert("Board Updated Successfully");
      innerValue("task-count", newTask);
      innerValue("first-count", newFirstCount);
      disableBtn("complete-2");
      createText("task-2", "history");
    }
  }
});
document.getElementById("complete-1").addEventListener("click", function () {
  const taskCount = getTextValue("task-count");
  const newTask = taskCount - 1;
  const firstCount = getTextValue("first-count");
  const newFirstCount = firstCount + 1;
  if (taskCount === 1) {
    alert("Board Updated Successfully");
    disableBtn("complete-1");
    innerValue("task-count", newTask);
    innerValue("first-count", newFirstCount);
    alert("Congrates!!! You have completed all the current task");
    createText("task-1", "history");
  } else {
    if (taskCount <= 0) {
      return;
    } else {
      alert("Board Updated Successfully");
      innerValue("task-count", newTask);
      innerValue("first-count", newFirstCount);
      disableBtn("complete-1");
      createText("task-1", "history");
    }
  }
});
document.getElementById("complete-3").addEventListener("click", function () {
  const taskCount = getTextValue("task-count");
  const newTask = taskCount - 1;
  const firstCount = getTextValue("first-count");
  const newFirstCount = firstCount + 1;
  if (taskCount === 1) {
    alert("Board Updated Successfully");
    disableBtn("complete-3");
    innerValue("task-count", newTask);
    innerValue("first-count", newFirstCount);
    alert("Congrates!!! You have completed all the current task");
    createText("task-3", "history");
  } else {
    if (taskCount <= 0) {
      return;
    } else {
      alert("Board Updated Successfully");
      innerValue("task-count", newTask);
      innerValue("first-count", newFirstCount);
      disableBtn("complete-3");
      createText("task-3", "history");
    }
  }
});
document.getElementById("complete-4").addEventListener("click", function () {
  const taskCount = getTextValue("task-count");
  const newTask = taskCount - 1;
  const firstCount = getTextValue("first-count");
  const newFirstCount = firstCount + 1;
  if (taskCount === 1) {
    alert("Board Updated Successfully");
    disableBtn("complete-4");
    innerValue("task-count", newTask);
    innerValue("first-count", newFirstCount);
    alert("Congrates!!! You have completed all the current task");
    createText("task-4", "history");
  } else {
    if (taskCount <= 0) {
      return;
    } else {
      alert("Board Updated Successfully");
      innerValue("task-count", newTask);
      innerValue("first-count", newFirstCount);
      disableBtn("complete-4");
      createText("task-4", "history");
    }
  }
});
document.getElementById("complete-5").addEventListener("click", function () {
  const taskCount = getTextValue("task-count");
  const newTask = taskCount - 1;
  const firstCount = getTextValue("first-count");
  const newFirstCount = firstCount + 1;
  if (taskCount === 1) {
    alert("Board Updated Successfully");
    disableBtn("complete-5");
    innerValue("task-count", newTask);
    innerValue("first-count", newFirstCount);
    alert("Congrates!!! You have completed all the current task");
    createText("task-5", "history");
  } else {
    if (taskCount <= 0) {
      return;
    } else {
      alert("Board Updated Successfully");
      innerValue("task-count", newTask);
      innerValue("first-count", newFirstCount);
      disableBtn("complete-5");
      createText("task-5", "history");
    }
  }
});
document.getElementById("complete-6").addEventListener("click", function () {
  const taskCount = getTextValue("task-count");
  const newTask = taskCount - 1;
  const firstCount = getTextValue("first-count");
  const newFirstCount = firstCount + 1;
  if (taskCount === 1) {
    alert("Board Updated Successfully");
    disableBtn("complete-6");
    innerValue("task-count", newTask);
    innerValue("first-count", newFirstCount);
    alert("Congrates!!! You have completed all the current task");
    createText("task-6", "history");
  } else {
    if (taskCount <= 0) {
      return;
    } else {
      alert("Board Updated Successfully");
      innerValue("task-count", newTask);
      innerValue("first-count", newFirstCount);
      disableBtn("complete-6");
      createText("task-6", "history");
    }
  }
});
