document.addEventListener("DOMContentLoaded", function () {
  // Check if 'attendance' key exists in local storage
  if (!localStorage.getItem("attendance")) {
    // If not, create an empty array and store it in local storage
    localStorage.setItem("attendance", JSON.stringify([]));
  }

  displayAttendanceList();
});

function markAttendance() {
  // Get values from the form
  const studentName = document.getElementById("studentName").value;
  const course = document.getElementById("course").value;

  // Get the current attendance list from local storage
  const attendanceList = JSON.parse(localStorage.getItem("attendance"));

  // Add new attendance record
  attendanceList.push({
    studentName: studentName,
    course: course,
    date: new Date().toLocaleDateString(),
  });

  // Update the local storage
  localStorage.setItem("attendance", JSON.stringify(attendanceList));

  // Display the updated attendance list
  displayAttendanceList();

  // Clear the form
  document.getElementById("studentName").value = "";
  document.getElementById("course").value = "";
}

function displayAttendanceList() {
  // Get the attendance list from local storage
  const attendanceList = JSON.parse(localStorage.getItem("attendance"));

  // Get the list element
  const listElement = document.getElementById("list");

  // Clear the existing list items
  listElement.innerHTML = "";

  // Display each attendance record in the list
  attendanceList.forEach(function (attendance) {
    const listItem = document.createElement("li");
    listItem.textContent = `${attendance.studentName} - ${attendance.course} - ${attendance.date}`;
    listElement.appendChild(listItem);
  });
}
