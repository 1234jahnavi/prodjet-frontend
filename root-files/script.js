function showFields() {

    const type = document.getElementById("userType").value;

    const dynamicFields =
        document.getElementById("dynamicFields");

    dynamicFields.innerHTML = "";

    if(type === "Student"){

        dynamicFields.innerHTML = `
            <input type="text" id="collegeName" placeholder="College Name">

            <input type="text" id="course" placeholder="Course / Degree">

            <input type="text" id="graduationYear" placeholder="Graduation Year">

            <input type="text" id="city" placeholder="City">
        `;
    }

    if(type === "Brand"){

        dynamicFields.innerHTML = `
            <input type="text" id="brandName" placeholder="Brand Name">

            <input type="text" id="industry" placeholder="Industry">

            <input type="text" id="companySize" placeholder="Company Size">

            <input type="text" id="website" placeholder="Website">

            <input type="text" id="contactPerson" placeholder="Contact Person Name">
        `;
    }

    if(type === "College"){

        dynamicFields.innerHTML = `
            <input type="text" id="collegeName" placeholder="College Name">

            <input type="text" id="designation" placeholder="Designation">

            <input type="text" id="students" placeholder="Number of Students">

            <input type="text" id="city" placeholder="City">

            <input type="email" id="officialEmail" placeholder="Official Email">
        `;
    }
}

document.getElementById("waitlistForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const fullName =
        document.getElementById("fullName").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    if(!fullName){
        alert("Full Name should not be empty");
        return;
    }

    if(!email){
        alert("Email should not be empty");
        return;
    }

    if(!phone){
        alert("Phone Number should not be empty");
        return;
    }

    const type =
        document.getElementById("userType").value;

    if(type === ""){
        alert("Please select a User Type");
        return;
    }

    const dynamicInputs =
        document.querySelectorAll("#dynamicFields input");

    for(let input of dynamicInputs){

        if(input.value.trim() === ""){
            alert("Selected user type fields should not be empty");
            return;
        }
    }

    document.querySelector(".container").style.display =
        "none";

    document.getElementById("successScreen").style.display =
        "block";
});