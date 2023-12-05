<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Database connection information
    $servername = "localhost"; // Change this to your database server hostname
    $username = "Intern123"; // Change this to your database username
    $password = "Kamsoft123"; // Change this to your database password
    $database = "eployee_info"; // Change this to your database name

    // Create a connection to the database
    $conn = new mysqli($servername, $username, $password, $database);

    // Check the connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Retrieve data from the form
    $name = $_POST["name"];
    $empCode = $_POST["empCode"];
    $level = $_POST["level"];

    // Prepare and execute the SQL query to insert data
    $sql = "INSERT INTO employee_details (name, emp_code, level) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $name, $empCode, $level);

    if ($stmt->execute()) {
        echo "Data inserted successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the database connection
    $stmt->close();
    $conn->close();
}
?>

 <!DOCTYPE html>
<html>
<head>
    <title>Employee Information</title>
</head>
<body>
    <h2>Employee Information Form</h2>
    <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
        <label for="name">Name:</label>
        <input type="text" name="name" required><br><br>

        <label for="empCode">Emp Code:</label>
        <input type="text" name="empCode" required><br><br>

        <label for="level">Level:</label>
        <input type="text" name="level" required><br><br>

        <input type="submit" value="Submit">
    </form>
</body>
</html> 
