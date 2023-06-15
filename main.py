from openpyxl import Workbook  # Importa a classe Workbook do módulo openpyxl
from selenium import webdriver  # Importa o módulo webdriver do pacote selenium
from selenium.webdriver.common.by import By  # Importa a classe By do pacote selenium.webdriver.common
import time  # Importa o módulo time
import pandas as pd  # Importa o pacote pandas com o alias pd

class Babys:
    def __init__(self):
        self.link = "file:///C:/Users/47394614808/Desktop/P.I%20-%20Corr%C3%AAa.html/produtos.html"
        # URL do arquivo HTML local a ser aberto
        self.driver = webdriver.Chrome()  # Cria uma instância do driver Chrome do Selenium
        self.driver.maximize_window()  # Maximiza a janela do navegador
        self.abrir_site()

    def abrir_site(self):
        time.sleep(10)  # Aguarda 10 segundos (tempo para carregar a página)
        self.driver.get(self.link)  # Abre a URL no navegador
        self.body()

    def body(self):
        time.sleep(10)  # Aguarda 10 segundos (tempo para carregar os elementos na página)
        lista_body_nome = []  # Lista para armazenar os nomes dos elementos
        lista_body_valor = []  # Lista para armazenar os valores dos elementos
        for i in range(1, 7):
            # Obtém o nome e o valor dos elementos com base no índice
            body_nome = self.driver.find_element(By.XPATH, f"/html/body/section[2]/div/div[{i}]/h3").text
            body_valor = self.driver.find_element(By.XPATH, f"/html/body/section[2]/div/div[{i}]/p").text
            lista_body_nome.append(body_nome)  # Adiciona o nome à lista
            lista_body_valor.append(body_valor)  # Adiciona o valor à lista

        # Cria um DataFrame pandas com as listas de nomes e valores
        df = pd.DataFrame({'Bodys': lista_body_nome, 'Valor': lista_body_valor})
        df.to_excel('dados.xlsx', index=False)  # Salva o DataFrame como um arquivo Excel
        print(df)  # Imprime o DataFrame

t = Babys()  # Cria uma instância da classe Babys
