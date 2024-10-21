const int ledPin = 13; // Use built-in LED (usually on pin 13 for most Arduino boards)
String inputString = ""; // String to hold incoming data

void setup() {
  pinMode(ledPin, OUTPUT); // Set LED pin as an output
  digitalWrite(ledPin, LOW); // Turn the LED off initially
  Serial.begin(9600); // Start serial communication at 9600 baud rate
  inputString.reserve(10); // Reserve memory for the input string
}

void loop() {
  // Check if data is available on the serial port
  if (Serial.available() > 0) {
    char inChar = (char)Serial.read(); // Read the incoming byte

    // If the incoming byte is a newline, process the full string
    if (inChar == '\n') {
      processCommand(inputString); // Process the command
      inputString = ""; // Clear the string for the next input
    } else {
      inputString += inChar; // Add the byte to the string
    }
  }
}

void processCommand(String command) {
  // Check if the command is to turn the LED on or off
   digitalWrite(ledPin, HIGH); // Turn the LED on
   delay(5000/3);
   digitalWrite(ledPin, LOW); // Turn the LED off
 
}
