import java.util.Scanner;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in); // Criação de uma instância de Scanner para entrada do usuário
        String csv = "C:/Users/47394614808/PycharmProjects/P.I/dados.csv";
        String file = ""; // armazenar cada linha do arquivo
        String separador = ","; // separador dos valores no arquivo CSV

        try (BufferedReader br = new BufferedReader(new FileReader(csv))) { // Abre o arquivo CSV
            while ((file = br.readLine()) != null) {
                String[] data = file.split(separador); // Divide a linha em um array de strings usando o separador
                for (String value : data) {
                    System.out.print(value + " "); // Imprime o valor seguido de um espaço
                }
            }
        } catch (IOException e) { // Captura uma exceção de entrada/saída, caso ocorra
            e.printStackTrace(); // Imprime a pilha de chamadas da exceção
        }
    }
}