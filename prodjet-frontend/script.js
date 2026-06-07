let userType = "";

function selectType(type) {
  userType = type;

  document.getElementById("step1").style.display = "none";
  document.getElementById("step2").style.display = "block";

  document.getElementById("selectedType").innerText =
    type + " Details";

  const dynamicFields =
    document.getElementById("dynamicFields");

  dynamicFields.innerHTML = "";

  if (type === "Student") {
    dynamicFields.innerHTML = `
      <input type="text" id="collegeName" placeholder="College Name">

      <input type="text" id="course" placeholder="Course / Degree">

      <input type="text" id="graduationYear" placeholder="Graduation Year">

      <input type="text" id="city" placeholder="City">
    `;
  }

  if (type === "Brand") {
    dynamicFields.innerHTML = `
      <input type="text" id="brandName" placeholder="Brand Name">

      <input type="text" id="industry" placeholder="Industry">

      <input type="text" id="companySize" placeholder="Company Size">

      <input type="text" id="website" placeholder="Website">

      <input type="text" id="contactPerson" placeholder="Contact Person Name">
    `;
  }

  if (type === "College") {
    dynamicFields.innerHTML = `
      <input type="text" id="collegeName" placeholder="College Name">

      <input type="text" id="designation" placeholder="Designation">

      <input type="text" id="numberOfStudents" placeholder="Number Of Students">

      <input type="text" id="city" placeholder="City">

      <input type="email" id="officialEmail" placeholder="Official Email">
    `;
  }
}

document
  .getElementById("waitlistForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const fullName =
      document.getElementById("fullName").value.trim();

    const email =
      document.getElementById("email").value.trim();

    const phone =
      document.getElementById("phone").value.trim();

    if (!fullName) {
      alert("Full Name is required");
      return;
    }

    if (!email) {
      alert("Email is required");
      return;
    }

    if (!phone) {
      alert("Phone Number is required");
      return;
    }

    if (userType === "Student") {
      if (
        !document.getElementById("collegeName").value ||
        !document.getElementById("course").value ||
        !document.getElementById("graduationYear").value ||
        !document.getElementById("city").value
      ) {
        alert("Please fill all Student fields");
        return;
      }
    }

    if (userType === "Brand") {
      if (
        !document.getElementById("brandName").value ||
        !document.getElementById("industry").value ||
        !document.getElementById("companySize").value ||
        !document.getElementById("website").value ||
        !document.getElementById("contactPerson").value
      ) {
        alert("Please fill all Brand fields");
        return;
      }
    }

    if (userType === "College") {
      if (
        !document.getElementById("collegeName").value ||
        !document.getElementById("designation").value ||
        !document.getElementById("numberOfStudents").value ||
        !document.getElementById("city").value ||
        !document.getElementById("officialEmail").value
      ) {
        alert("Please fill all College fields");
        return;
      }
    }

    document.getElementById("step2").style.display = "none";
    document.getElementById("success").style.display = "block";
  });