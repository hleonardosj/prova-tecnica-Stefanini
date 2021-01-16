# language: pt
@CadastroUsuario
Funcionalidade: Cadastro de Usuario

Esquema do Cenario: Realizar Cadastro do Usuario
Dado Usuario acessar o Sistema de cadastros de usuarios da Stefanini
Quando Informar os dados "<name>" e "<email>" e "<password>" e clicar em cadastrar
Entao Visualizar os dados "<id>" e "<name>" e "<email>" gravados
E Salva a evidencia
E exclui o usuario gravado
E Fecha o navegador

Exemplos:
    |id | 	name 		      |        email   		  	| password |
    | 1 |   Hugo Boss     | hleonardosj@gmail.com | 12345678 |
    | 1 |   Carllos Son   | carllosson@gmail.com  | 87654321 |


Esquema do Cenario: Visualizar o cadastro
Dado Usuario acessar o Sistema de cadastros de usuarios da Stefanini
Quando Informar os dados "<name>" e "<email>" e "<password>" e clicar em cadastrar
Entao Visualizar os dados "<id>" e "<name>" e "<email>" gravados
E Fecha o navegador

Exemplos:
    |id | 	name 		      |        email   		  	| password |
    | 1 |   Hugo Boss     | hleonardosj@gmail.com | 12345678 |
    | 1 |   Carllos Son   | carllosson@gmail.com  | 87654321 |


Esquema do Cenario: Salvar evidencia
Dado Usuario acessar o Sistema de cadastros de usuarios da Stefanini
Quando Informar os dados "<name>" e "<email>" e "<password>" e clicar em cadastrar
Entao Visualizar os dados "<id>" e "<name>" e "<email>" gravados
E Salva a evidencia
E Fecha o navegador

Exemplos:
    |id | 	name 		      |        email   		  	| password |
    | 1 |   Hugo Boss     | hleonardosj@gmail.com | 12345678 |
    | 1 |   Carllos Son   | carllosson@gmail.com  | 87654321 |

Esquema do Cenario: Apagar o cadastro
Dado Usuario acessar o Sistema de cadastros de usuarios da Stefanini
Quando Informar os dados "<name>" e "<email>" e "<password>" e clicar em cadastrar
Entao Visualizar os dados "<id>" e "<name>" e "<email>" gravados
E exclui o usuario gravado
E Fecha o navegador


Exemplos:
    |id | 	name 		      |        email   		  	| password |
    | 1 |   Hugo Boss     | hleonardosj@gmail.com | 12345678 |
    | 1 |   Carllos Son   | carllosson@gmail.com  | 87654321 |



   