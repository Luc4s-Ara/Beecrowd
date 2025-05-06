package pkg1009;

import java.util.Locale;
import java.util.Scanner;

public class salarioComBonus {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        String nome = sc.nextLine();
        double salario = sc.nextDouble();
        double vendas = sc.nextDouble();
        double SalarioMaisBonus = (vendas * 15 / 100) + salario;

        System.out.println(String.format("TOTAL = R$ %.2f", SalarioMaisBonus));

        sc.close();
    }
}
