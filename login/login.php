<?php
header('Content-Type: application/json');

// This is a simple, non-secure example.
// In a real-world application, you would:
// 1. Connect to a database.
// 2. Retrieve user data based on the email.
// 3. Use a function like password_verify() to securely check the password hash.
// 4. Implement a session management system.

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Dummy credentials for demonstration
    $correct_email = "test@example.com";
    $correct_password = "password123";

    if ($email === $correct_email && $password === $correct_password) {
        // Successful login
        // In a real app, you would start a session here.
        echo json_encode(["success" => true, "message" => "Login successful!"]);
        http_response_code(200); // OK
    } else {
        // Failed login
        echo json_encode(["success" => false, "message" => "Invalid email or password."]);
        http_response_code(401); // Unauthorized
    }
} else {
    // If someone tries to access this page directly without submitting the form
    echo json_encode(["success" => false, "message" => "Invalid request method."]);
    http_response_code(405); // Method Not Allowed
}
?>