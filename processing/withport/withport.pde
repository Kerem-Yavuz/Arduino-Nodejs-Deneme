import processing.serial.*;
import processing.net.*; // Import the net library for HTTP

Server server; // Create a server object
Serial myPort; // Create a Serial object
int onoff = 0; // Variable to track LED state

void setup() {
  size(200, 200);

  // List available serial ports
  String[] ports = Serial.list();
  if (ports.length == 0) {
    println("No serial ports found. Please check your Arduino connection.");
    exit(); // Exit the sketch if no ports are found
  }

  for (int i = 0; i < ports.length; i++) {
    println(i + ": " + ports[i]); // Print available ports
  }

  // Use the appropriate index for your Arduino
  myPort = new Serial(this, ports[0], 9600); // Adjust the index for the correct port
  server = new Server(this, 3000); // Start server on port 3000
}

void draw() {
  // Process incoming client requests
  Client client = server.available();
  if (client != null) {
    String request = client.readStringUntil('\n');

    if (request != null) { // Check if the request is not null
      println(request); // Print the request for debugging

        myPort.write("LED_OFF\n"); // Send command to turn LED off
        
    }
  }
}
