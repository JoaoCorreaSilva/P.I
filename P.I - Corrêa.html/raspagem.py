from openpyxl import Workbook
from selenium import webdriver
from selenium.webdriver.common.by import By
import time
import pandas as pd

class Santos:
    def __init__(self):
        self.SITE_LINK = "file:///C:/Users/47190845836/Desktop/projetoIntegradorSenai-main/index.html"
        self.driver = webdriver.Chrome()
        self.driver.maximize_window()
        self.abrir_site()

    def abrir_site(self):
        time.sleep(1)
        self.driver.get(self.SITE_LINK)
        self.driver.find_element(By.XPATH, "/html/body/header/div/nav/ul/li[2]/a").click()
        self.camisas()

    def camisas(self):
        time.sleep(1)
        lista_camisas_nome = []
        lista_camisas_valor = []
        for i in range(1, 9):
            camisas_nome = self.driver.find_element(By.XPATH, f"/html/body/div/div[{i}]/h3").text
            camisas_valor = self.driver.find_element(By.XPATH, f"/html/body/div/div[{i}]/p[1]").text
            lista_camisas_nome.append(camisas_nome)
            lista_camisas_valor.append(camisas_valor)

        df = pd.DataFrame({'Camisas': lista_camisas_nome, 'Valor': lista_camisas_valor})
        df.to_excel('dados.xlsx', index=False)
        print(df)


t = Santos()