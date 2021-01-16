package Helper;

import static org.junit.Assert.assertEquals;


import java.util.concurrent.TimeUnit;

import javax.imageio.ImageIO;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.awt.AWTException;
import java.awt.Rectangle;
import java.awt.Robot;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

public class StefaniniHelper {
	WebDriver driver;
	
	/**
	 * Iniciando aplicação Prova Stefanini
	 */
	
	protected void iniciarAplicacaoProvaStefanini(){
		System.setProperty("webdriver.chrome.driver", "C:\\DriverSelenium\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://prova.stefanini-jgr.com.br/teste/qa/");
		//Esperar carregar os elementos na pagina
        driver.manage().timeouts().implicitlyWait(7, TimeUnit.SECONDS);
	}
	
	/**
	* Escrevendo nome e email do Usuário e clicando no botão Cadastrar
	*/
		protected void informarDadosUsuario(String name, String email, String password){
		driver.findElement(By.id("name")).sendKeys(name);
		driver.findElement(By.id("email")).sendKeys(email);
		driver.findElement(By.id("password")).sendKeys(password);
		driver.findElement(By.id("register")).click();
	}
	/**
	*Validando a mensagem de sucesso
	*/
	protected void validaDados(String id, String name, String email){
    WebElement mensagemOk = driver.findElement(By.className("table-title"));
    String mensagem = mensagemOk.getAttribute("innerText");
    assertEquals("Usuários cadastrados", mensagem);
 
    /**
    *Validando os dados gravados
    */ 
    WebElement chaveCriada = driver.findElement(By.id("tdUserId1"));
    String gravadoNoCampoId = chaveCriada.getText();
    assertEquals(id, gravadoNoCampoId);
    
    WebElement nomeGravado = driver.findElement(By.id("tdUserName1"));
    String gravadoNoCampoNome = nomeGravado.getText();
    assertEquals(name, gravadoNoCampoNome);
    
    WebElement emailGravado = driver.findElement(By.id("tdUserEmail1"));
    String gravadoNoCampoEmail = emailGravado.getText();
    assertEquals(email, gravadoNoCampoEmail);
	}

	/**
	*Salvando a evidência do teste
	*/
	
	protected void salvarEvidencias() {
        
        try {
            
            Robot robot = new Robot();
            // Captura o screen shot da área definida pelo retângulo
            BufferedImage bi=robot.createScreenCapture(new Rectangle(1910,1090));
            ImageIO.write(bi, "jpg", new File("C:/TestePratico/Evidencia.jpg"));
            
        } catch (AWTException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
	/**
	*Excluindo dados que foram gravados
	*/
	protected void excluirDados() {
	WebElement botaoExcluir = driver.findElement(By.id("removeUser1"));
	botaoExcluir.click();
		
	}
	/**
	*Fechando o navegador
	*/
	
	protected void fecharNavegador() {
    driver.quit();
	}
}
