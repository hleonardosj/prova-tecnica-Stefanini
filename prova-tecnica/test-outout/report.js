$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/CadastrarUsuario.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "Cadastro de Usuario",
  "description": "",
  "id": "cadastro-de-usuario",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@CadastroUsuario"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Realizar Cadastro do Usuario",
  "description": "",
  "id": "cadastro-de-usuario;realizar-cadastro-do-usuario",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 6,
  "name": "Usuario acessar o Sistema de cadastros de usuarios da Stefanini",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "Informar os dados \"\u003cname\u003e\" e \"\u003cemail\u003e\" e \"\u003cpassword\u003e\" e clicar em cadastrar",
  "keyword": "Quando "
});
formatter.step({
  "line": 8,
  "name": "Visualizar os dados \"\u003cid\u003e\" e \"\u003cname\u003e\" e \"\u003cemail\u003e\" gravados",
  "keyword": "Entao "
});
formatter.step({
  "line": 9,
  "name": "Salva a evidencia",
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "exclui o usuario gravado",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "Fecha o navegador",
  "keyword": "E "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "cadastro-de-usuario;realizar-cadastro-do-usuario;",
  "rows": [
    {
      "cells": [
        "id",
        "name",
        "email",
        "password"
      ],
      "line": 16,
      "id": "cadastro-de-usuario;realizar-cadastro-do-usuario;;1"
    },
    {
      "cells": [
        "1",
        "Hugo Boss",
        "hleonardosj@gmail.com",
        "12345678"
      ],
      "line": 17,
      "id": "cadastro-de-usuario;realizar-cadastro-do-usuario;;2"
    },
    {
      "cells": [
        "1",
        "Carlos Son",
        "carlosson@gmail.com",
        "87654321"
      ],
      "line": 18,
      "id": "cadastro-de-usuario;realizar-cadastro-do-usuario;;3"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 17,
  "name": "Realizar Cadastro do Usuario",
  "description": "",
  "id": "cadastro-de-usuario;realizar-cadastro-do-usuario;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@CadastroUsuario"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Usuario acessar o Sistema de cadastros de usuarios da Stefanini",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "Informar os dados \"Hugo Boss\" e \"hleonardosj@gmail.com\" e \"12345678\" e clicar em cadastrar",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 8,
  "name": "Visualizar os dados \"1\" e \"Hugo Boss\" e \"hleonardosj@gmail.com\" gravados",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Entao "
});
formatter.step({
  "line": 9,
  "name": "Salva a evidencia",
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "exclui o usuario gravado",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "Fecha o navegador",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuario.usuario_acessar_o_Sistema_de_cadastros_de_usuarios_da_Stefanini()"
});
formatter.result({
  "duration": 9219412800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hugo Boss",
      "offset": 19
    },
    {
      "val": "hleonardosj@gmail.com",
      "offset": 33
    },
    {
      "val": "12345678",
      "offset": 59
    }
  ],
  "location": "CadastrarUsuario.informar_os_dados_e_e_e_clicar_em_cadastrar(String,String,String)"
});
formatter.result({
  "duration": 328443500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 21
    },
    {
      "val": "Hugo Boss",
      "offset": 27
    },
    {
      "val": "hleonardosj@gmail.com",
      "offset": 41
    }
  ],
  "location": "CadastrarUsuario.visualizar_os_dados_e_e_gravados(String,String,String)"
});
formatter.result({
  "duration": 256307200,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarUsuario.salva_a_evidencia()"
});
formatter.result({
  "duration": 288260900,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarUsuario.exclui_o_usuario_gravado()"
});
formatter.result({
  "duration": 59627800,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarUsuario.fecha_o_navegador()"
});
formatter.result({
  "duration": 722128300,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Realizar Cadastro do Usuario",
  "description": "",
  "id": "cadastro-de-usuario;realizar-cadastro-do-usuario;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@CadastroUsuario"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Usuario acessar o Sistema de cadastros de usuarios da Stefanini",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "Informar os dados \"Carlos Son\" e \"carlosson@gmail.com\" e \"87654321\" e clicar em cadastrar",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 8,
  "name": "Visualizar os dados \"1\" e \"Carlos Son\" e \"carlosson@gmail.com\" gravados",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Entao "
});
formatter.step({
  "line": 9,
  "name": "Salva a evidencia",
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "exclui o usuario gravado",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "Fecha o navegador",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuario.usuario_acessar_o_Sistema_de_cadastros_de_usuarios_da_Stefanini()"
});
formatter.result({
  "duration": 7389908500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Carlos Son",
      "offset": 19
    },
    {
      "val": "carlosson@gmail.com",
      "offset": 34
    },
    {
      "val": "87654321",
      "offset": 58
    }
  ],
  "location": "CadastrarUsuario.informar_os_dados_e_e_e_clicar_em_cadastrar(String,String,String)"
});
formatter.result({
  "duration": 360790900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 21
    },
    {
      "val": "Carlos Son",
      "offset": 27
    },
    {
      "val": "carlosson@gmail.com",
      "offset": 42
    }
  ],
  "location": "CadastrarUsuario.visualizar_os_dados_e_e_gravados(String,String,String)"
});
formatter.result({
  "duration": 237101400,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarUsuario.salva_a_evidencia()"
});
formatter.result({
  "duration": 101980600,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarUsuario.exclui_o_usuario_gravado()"
});
formatter.result({
  "duration": 57802000,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarUsuario.fecha_o_navegador()"
});
formatter.result({
  "duration": 762654600,
  "status": "passed"
});
});