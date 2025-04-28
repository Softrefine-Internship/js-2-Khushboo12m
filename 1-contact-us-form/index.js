function validateField(id, condition, errorMsg) {
  const errorElement = document.getElementById(`${id}-error`);
  if (condition) {
    errorElement.innerText = "";
    return true;
  } else {
    errorElement.innerText = errorMsg;
    return false;
  }
}

function attachInputListeners() {
  document.getElementById("fname").addEventListener("input", () => {
    validateField("fname", document.getElementById("fname").value.trim() !== "", "First name is required.");
  });

  document.getElementById("lname").addEventListener("input", () => {
    validateField("lname", document.getElementById("lname").value.trim() !== "", "Last name is required.");
  });

  document.getElementById("company").addEventListener("input", () => {
    validateField("company", document.getElementById("company").value.trim() !== "", "Company name is required.");
  });

  document.getElementById("email").addEventListener("input", () => {
    validateField("email", document.getElementById("email").value.trim() !== "", "Email is required.");
  });

  document.getElementById("phone").addEventListener("input", () => {
    validateField("phone", document.getElementById("phone").value.trim() !== "", "Phone number is required.");
  });

  document.getElementById("message").addEventListener("input", () => {
    validateField("message", document.getElementById("message").value.trim() !== "", "Message is required.");
  });

  document.getElementById("toggle-switch").addEventListener("change", () => {
    validateField("privacy", document.getElementById("toggle-switch").checked, "You must agree to the privacy policy.");
  });
}

function validateForm() {
  let isValid = true;

  document.querySelectorAll('.error-message').forEach(el => el.innerText = '');

  const fname = document.getElementById("fname").value.trim();
  const lname = document.getElementById("lname").value.trim();
  const company = document.getElementById("company").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();
  const privacy = document.getElementById("toggle-switch").checked;

  if (fname === "") {
    document.getElementById("fname-error").innerText = "First name is required.";
    isValid = false;
  }

  if (lname === "") {
    document.getElementById("lname-error").innerText = "Last name is required.";
    isValid = false;
  }

  if (company === "") {
    document.getElementById("company-error").innerText = "Company name is required.";
    isValid = false;
  }

  if (email === "") {
    document.getElementById("email-error").innerText = "Email is required.";
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    document.getElementById("email-error").innerText = "Invalid email format.";
    isValid = false;
  }

  if (phone === "") {
    document.getElementById("phone-error").innerText = "Phone number is required.";
    isValid = false;
  }

  if (message === "") {
    document.getElementById("message-error").innerText = "Message is required.";
    isValid = false;
  }

  if (!privacy) {
    document.getElementById("privacy-error").innerText = "You must agree to the privacy policy.";
    isValid = false;
  }

  return isValid;
}

document.addEventListener("DOMContentLoaded", attachInputListeners);
