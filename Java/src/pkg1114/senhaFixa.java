package pkg1114;
import java.util.Scanner;

public class senhaFixa{
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int senha;
        do {
            senha = scanner.nextInt();
            if (senha != 2002){
                System.out.println("Senha Invalida");
            }
            else{
                System.out.println("Acesso Permitido");
            }

        } while(senha != 2002);

    }
}
