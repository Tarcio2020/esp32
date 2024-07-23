# App de Automação com ESP32

## Descrição

O "App de Automação com ESP32" é um projeto desenvolvido utilizando o microcontrolador ESP32, com foco em automação e controle de dispositivos. O projeto utiliza um display OLED para exibir informações e sensores para medições e controle.

## Componentes

- **ESP32**: Microcontrolador de baixo custo e alto desempenho.
- **Display OLED 0.96 I2C SSD1306**: Para exibição de informações.
- **Sensor Ultrassônico HC-SR04**: Para medições de distância.
- **LEDs**: Para indicação visual das condições de medição.

## Diagrama de Conexão

Aqui está a imagem do ESP32 utilizado no projeto:

![ESP32](https://clubedomaker.com/wp-content/uploads/2024/02/esp32pinout.png)

![ESP32](https://ae01.alicdn.com/kf/H8992e0d7782a430a811d31a2e2f731c6M.jpg_640x640Q90.jpg_.webp)
## Esquema de Ligação

- **Display OLED**:
  - VCC -> 3.3V no ESP32
  - GND -> GND no ESP32
  - SCL -> Pino 21 no ESP32
  - SDA -> Pino 22 no ESP32

- **Sensor Ultrassônico HC-SR04**:
  - VCC -> 5V no ESP32
  - GND -> GND no ESP32
  - TRIG -> Pino 19 no ESP32
  - ECHO -> Pino 18 no ESP32

- **LEDs**:
  - LED de medição: conectado ao pino GPIO 23
  - LED de alarme: conectado ao pino GPIO 24

## Instruções de Uso

1. **Configuração do Ambiente**:
   - Instale a IDE do Arduino e adicione o suporte ao ESP32.
   - Configure as bibliotecas necessárias para o display OLED e sensor ultrassônico.

2. **Carregar o Código**:
   - Conecte o ESP32 ao computador via USB.
   - Abra o código do projeto na IDE do Arduino.
   - Compile e faça o upload do código para o ESP32.

3. **Execução**:
   - Após o upload, o ESP32 começará a medir a distância e exibirá as informações no display OLED.
   - Os LEDs indicarão a condição da medição conforme especificado no código.

## Contribuições

Contribuições são bem-vindas! Se você deseja contribuir para o projeto, por favor, siga estas etapas:

1. Faça um fork do repositório.
2. Crie uma branch para a sua alteração.
3. Faça commit das suas mudanças.
4. Envie um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato:

- **Email**: tarcioapps7@gmail.com
- **Telefone**: (11) 93205-6012
