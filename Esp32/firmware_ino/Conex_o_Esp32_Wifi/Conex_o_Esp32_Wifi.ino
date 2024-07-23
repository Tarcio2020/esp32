/*

#include <WiFiManager.h> // Inclua a biblioteca WiFiManager
#include <WiFi.h>        // Inclua a biblioteca WiFi

void setup() {
  Serial.begin(115200);

  // Crie uma instância do WiFiManager
  WiFiManager wifiManager;

  // Tente conectar à rede WiFi armazenada ou comece o modo de configuração
  if (!wifiManager.autoConnect("AutoConnectAP")) {
    Serial.println("Falha ao conectar e timeout.");
    // Reinicie ou entre em um estado de erro
    ESP.restart();
  }

  // Se o código chegar aqui, significa que a conexão WiFi foi estabelecida
  Serial.println("Conectado à rede WiFi com sucesso!");
  Serial.print("Endereço IP: ");
  Serial.println(WiFi.localIP());
}

void loop() {
  // Seu código aqui
}

*/