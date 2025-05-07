package pkg1010;

import java.util.Locale;
import java.util.Scanner;

public class calculoSimples {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        // Produto 1
        int id1 = sc.nextInt();
        int quantidade1 = sc.nextInt();
        double valor1 = sc.nextDouble();
        // Produto 2
        int id2 = sc.nextInt();
        int quantidade2 = sc.nextInt();
        double valor2 = sc.nextDouble();

        double total = quantidade1 * valor1 + quantidade2 * valor2;

        System.out.println(String.format("VALOR A PAGAR: R$ %.2f", total));
        sc.close();
    }
}
