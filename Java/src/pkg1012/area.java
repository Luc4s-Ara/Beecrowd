package pkg1012;

import java.util.Locale;
import java.util.Scanner;

public class area {
    public static void main(String[] args) {

        double pi = 3.14159;
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        double A = sc.nextDouble();
        double B = sc.nextDouble();
        double C = sc.nextDouble();

        double trianguloRetangulo = A * C / 2;
        double circulo = pi * C * C;
        double trapezio = (A + B) * C / 2;
        double quadrado = B * B;
        double retangulo = A * B;

        System.out.println(String.format("TRIANGULO: %.3f", trianguloRetangulo));
        System.out.println(String.format("CIRCULO: %.3f", circulo));
        System.out.println(String.format("TRAPEZIO: %.3f", trapezio));
        System.out.println(String.format("QUADRADO: %.3f", quadrado));
        System.out.println(String.format("RETANGULO: %.3f", retangulo));

        sc.close();
    }
}
