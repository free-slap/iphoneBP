function checkIMEI() {
    const imei = document.getElementById("imeiInput").value.trim();
    const resultDiv = document.getElementById("result");

    if (!imei || imei.length < 15 || isNaN(imei)) {
        resultDiv.innerHTML = "Please enter a valid 15-digit IMEI number.";
        return;
    }

    // Mock data (in real use, you'd query an API here)
    const mockDatabase = {
        "356789012345678": {
            model: "iPhone 12 Pro",
            status: "Blacklisted",
            message: "This device has been reported as lost/stolen."
        },
        "353456789012345": {
            model: "iPhone XR",
            status: "Clean",
            message: "This device is clean and not reported as stolen."
        }
    };

    if (mockDatabase[imei]) {
        const data = mockDatabase[imei];
        resultDiv.innerHTML = `
            <strong>Model:</strong> ${data.model}<br>
            <strong>Status:</strong> ${data.status}<br>
            <p>${data.message}</p>
        `;
    } else {
        resultDiv.innerHTML = `
            <strong>Status:</strong> Not Found<br>
            <p>This IMEI is not in our database. May not be reported yet.</p>
        `;
    }
}

