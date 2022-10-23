#include <Adafruit_MPU6050.h>
#include <Adafruit_Sensor.h>
#include <Wire.h>
#define slave_address 85

char readByte;
Adafruit_MPU6050 mpu;
bool ac_state = true;
bool light_state = true;
void setup(void) {
  pinMode(32, OUTPUT);
  pinMode(33, OUTPUT);
  Wire.begin();
  Serial.begin(115200);
  Serial.println("Adafruit MPU6050 test!");
  while (!Serial){
    delay(10); // will pause Zero, Leonardo, etc until serial console opens
    Serial.println("no thing");
  }
  Serial.println("Adafruit MPU6050 test!");

  // Try to initialize!
  if (!mpu.begin()) {
    Serial.println("Failed to find MPU6050 chip");
    while (1) {
      delay(10);
    }
  }
  Serial.println("MPU6050 Found!");

  mpu.setAccelerometerRange(MPU6050_RANGE_8_G);
  Serial.print("Accelerometer range set to: ");
  switch (mpu.getAccelerometerRange()) {
  case MPU6050_RANGE_2_G:
    Serial.println("+-2G");
    break;
  case MPU6050_RANGE_4_G:
    Serial.println("+-4G");
    break;
  case MPU6050_RANGE_8_G:
    Serial.println("+-8G");
    break;
  case MPU6050_RANGE_16_G:
    Serial.println("+-16G");
    break;
  }
  mpu.setGyroRange(MPU6050_RANGE_500_DEG);
  Serial.print("Gyro range set to: ");
  switch (mpu.getGyroRange()) {
  case MPU6050_RANGE_250_DEG:
    Serial.println("+- 250 deg/s");
    break;
  case MPU6050_RANGE_500_DEG:
    Serial.println("+- 500 deg/s");
    break;
  case MPU6050_RANGE_1000_DEG:
    Serial.println("+- 1000 deg/s");
    break;
  case MPU6050_RANGE_2000_DEG:
    Serial.println("+- 2000 deg/s");
    break;
  }

  mpu.setFilterBandwidth(MPU6050_BAND_5_HZ);
  Serial.print("Filter bandwidth set to: ");
  switch (mpu.getFilterBandwidth()) {
  case MPU6050_BAND_260_HZ:
    Serial.println("260 Hz");
    break;
  case MPU6050_BAND_184_HZ:
    Serial.println("184 Hz");
    break;
  case MPU6050_BAND_94_HZ:
    Serial.println("94 Hz");
    break;
  case MPU6050_BAND_44_HZ:
    Serial.println("44 Hz");
    break;
  case MPU6050_BAND_21_HZ:
    Serial.println("21 Hz");
    break;
  case MPU6050_BAND_10_HZ:
    Serial.println("10 Hz");
    break;
  case MPU6050_BAND_5_HZ:
    Serial.println("5 Hz");
    break;
  }

  Serial.println("");
  delay(100);
}

void loop() {
  /* Get new sensor events with the readings */
  sensors_event_t a, g, temp;
  mpu.getEvent(&a, &g, &temp);

  /* Print out the values */
  Serial.print("Acceleration X: ");
  Serial.print(a.acceleration.x);
  Serial.print(", Y: ");
  Serial.print(a.acceleration.y);
  Serial.print(", Z: ");
  Serial.print(a.acceleration.z);
  Serial.println(" m/s^2");

  Serial.print("Rotation X: ");
  Serial.print(g.gyro.x);
  Serial.print(", Y: ");
  Serial.print(g.gyro.y);
  Serial.print(", Z: ");
  Serial.print(g.gyro.z);
  Serial.println(" rad/s");

  //calculate PGA
  float PGA = sqrt(pow(a.acceleration.x*100, 2)+pow(a.acceleration.y*100, 2)+pow((a.acceleration.z-9.8)*100, 2))-65;
  Serial.println(PGA);
  //classification
  int csf;
  if (PGA < 0.8) csf = 0;
  else if (PGA < 2.5) csf = 1;
  else if (PGA < 8) csf = 2;
  else if (PGA < 25)csf = 3;
  else if (PGA < 80)csf = 4;
  else if (PGA < 140) csf = 5;
  else if (PGA < 250) csf = 6;
  else if (PGA < 440) csf = 7;
  else if (PGA < 800) csf = 8;
  else csf = 9;
  Serial.println(csf);
  if(csf > 6)
  {
    ac_state = false;
    light_state = false; 
  }
  else if(csf >= 4)
  {
    ac_state = true;
    light_state = false;
  }
  else
  {
    ac_state = true;
    light_state = true;
  }

  digitalWrite(32, ~ac_state);
  digitalWrite(33, ~light_state);
  
  Serial.println("");
  if (Serial.available()){
    readByte = csf;
    Serial.write(readByte);
    Wire.beginTransmission(slave_address);
    Wire.write(readByte);
    Wire.endTransmission();
  }
  
  delay(500);
}
