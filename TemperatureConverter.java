import java.util.Scanner;

/*
Escreva um programa que, com base em uma temperatura em graus celsius, a converta e exiba em
Kelvin (K), Réaumur (Re), Rankine (Ra), Fahrenheit (F) seguindo as fórmulas:
F = (C * 1.8) + 32
K = C + 273.15
Re = C * 0.8
Ra = (C * 1.8) + 491

Considere a conversão de 18 ºC e a precisão de duas casas decimais
*/

public class TemperatureConverter{
  public static void main(String[] args){
    private float tempC;
    private String scale;

    //Receber TEMPERATURA EM CELSIUS
    public String getTempC(){
      return tempC;
    }
    public void setTempC(float tempC){
      this.tempC = tempC;
    }

    //Receber ESCALA DE TEMPERATURA
    public String getScale(){
      return scale;
    }
    public void setScale (String scale){
      this.scale = scale;
    }

    //Método para converter temperaturas
	  public void converter(){
		  float tempC;
      String scale;
      scale = getScale;
		
      if(scale == "Kelvin"){
        
      }else if(scale == "Réaumur"){
        
      }else if(scale == "Rankine"){

      }else if(scale == "Fahrenheit"){

      }else{
        System.out.println("Inválido! A informação sobre a temperatura está errada!");
      }
	  }
  }
}
