package StepDefinitions;

import Helper.StefaniniHelper;
import cucumber.api.java.gl.E;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

public class CadastrarUsuario extends StefaniniHelper{
	
	@Dado("^Usuario acessar o Sistema de cadastros de usuarios da Stefanini$")
	public void usuario_acessar_o_Sistema_de_cadastros_de_usuarios_da_Stefanini(){
	    iniciarAplicacaoProvaStefanini();
	}

	@Quando("^Informar os dados \"([^\"]*)\" e \"([^\"]*)\" e \"([^\"]*)\" e clicar em cadastrar$")
	public void informar_os_dados_e_e_e_clicar_em_cadastrar(String name, String email, String password){
		informarDadosUsuario(name,email,password);
	}

	@Entao("^Visualizar os dados \"([^\"]*)\" e \"([^\"]*)\" e \"([^\"]*)\" gravados$")
	public void visualizar_os_dados_e_e_gravados(String id, String name, String email){
		validaDados(id,name,email);
	}

	@E("^Salva a evidencia$")
	public void salva_a_evidencia(){
		salvarEvidencias();
	}

	@E("^exclui o usuario gravado$")
	public void exclui_o_usuario_gravado(){
	    excluirDados();
	}

	@E("^Fecha o navegador$")
	public void fecha_o_navegador(){
	    fecharNavegador();
	}
		

	}
