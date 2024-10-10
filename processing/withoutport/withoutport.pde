import processing.net.*; // Import the net library for HTTP

Server server; // Create a server object


void setup() {
  size(200, 200);
  server = new Server(this, 3000); // Start server on port 8000
  
}

void draw() {
  // Process incoming client requests
  Client client = server.available();
  if (client != null) {
    String request = client.readStringUntil('\n');
    println(request); // Print the request for debugging
    client.stop(); // Close the client connection
  }
}
