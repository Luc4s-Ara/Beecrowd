package pkg1008;

import java.util.Locale;
import java.util.Scanner;

public class salario {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        int funcionario = sc.nextInt();
        int horasTrabalhada = sc.nextInt();
        double valorHora = sc.nextDouble();

        double salario = horasTrabalhada * valorHora;

        System.out.println("NUMBER = " + funcionario);
        System.out.println(String.format("SALARY = U$ %.2f", salario));


        sc.close();
    }
}
