/*
#include <WiFi.h>
#include <WebServer.h>

const char* ssid = "PR";
const char* password = "36031418";

WebServer server(80);

void setup() {
  Serial.begin(115200);
  
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  
  Serial.println("");
  Serial.print("ESP32 conectado no IP: ");
  Serial.println(WiFi.localIP());
  Serial.println("Conexão efetuada com sucesso!!!");

  server.begin();
  Serial.println("Webserver inicializado");
  delay(500);
  Serial.println("Acesse o endereço pelo: ");
  Serial.println(WiFi.localIP());

  server.on("/", []() {
    server.send(200, "text/plain", "BEM VINDO AO SERVIDOR DO ESP32");
  });

  server.on("/teste", []() {
    server.send(200, "text/plain", "BEM VINDO A PAGINA TESTE");
  });
}

void loop() {
  server.handleClient();
}
*/