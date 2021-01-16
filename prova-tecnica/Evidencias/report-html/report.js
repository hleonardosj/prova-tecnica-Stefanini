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
  "line": 13,
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
      "line": 14,
      "id": "cadastro-de-usuario;realizar-cadastro-do-usuario;;1"
    },
    {
      "cells": [
        "1",
        "Hugo Boss",
        "hleonardosj@gmail.com",
        "12345678"
      ],
      "line": 15,
      "id": "cadastro-de-usuario;realizar-cadastro-do-usuario;;2"
    },
    {
      "cells": [
        "1",
        "Carllos Son",
        "carllosson@gmail.com",
        "87654321"
      ],
      "line": 16,
      "id": "cadastro-de-usuario;realizar-cadastro-do-usuario;;3"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 15,
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
  "duration": 7936015200,
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
  "duration": 506295600,
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
  "duration": 159544600,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarUsuario.salva_a_evidencia()"
});
formatter.result({
  "duration": 327295100,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarUsuario.exclui_o_usuario_gravado()"
});
formatter.result({
  "duration": 63015100,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarUsuario.fecha_o_navegador()"
});
formatter.result({
  "duration": 706170900,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
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
  "name": "Informar os dados \"Carllos Son\" e \"carllosson@gmail.com\" e \"87654321\" e clicar em cadastrar",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 8,
  "name": "Visualizar os dados \"1\" e \"Carllos Son\" e \"carllosson@gmail.com\" gravados",
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
  "duration": 8388944500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Carllos Son",
      "offset": 19
    },
    {
      "val": "carllosson@gmail.com",
      "offset": 35
    },
    {
      "val": "87654321",
      "offset": 60
    }
  ],
  "location": "CadastrarUsuario.informar_os_dados_e_e_e_clicar_em_cadastrar(String,String,String)"
});
formatter.result({
  "duration": 350343200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 21
    },
    {
      "val": "Carllos Son",
      "offset": 27
    },
    {
      "val": "carllosson@gmail.com",
      "offset": 43
    }
  ],
  "location": "CadastrarUsuario.visualizar_os_dados_e_e_gravados(String,String,String)"
});
formatter.result({
  "duration": 279118300,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarUsuario.salva_a_evidencia()"
});
formatter.result({
  "duration": 92099900,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarUsuario.exclui_o_usuario_gravado()"
});
formatter.result({
  "duration": 50421000,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarUsuario.fecha_o_navegador()"
});
formatter.result({
  "duration": 706083200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Visualizar o cadastro",
  "description": "",
  "id": "cadastro-de-usuario;visualizar-o-cadastro",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 20,
  "name": "Usuario acessar o Sistema de cadastros de usuarios da Stefanini",
  "keyword": "Dado "
});
formatter.step({
  "line": 21,
  "name": "Informar os dados \"\u003cname\u003e\" e \"\u003cemail\u003e\" e \"\u003cpassword\u003e\" e clicar em cadastrar",
  "keyword": "Quando "
});
formatter.step({
  "line": 22,
  "name": "Visualizar os dados \"\u003cid\u003e\" e \"\u003cname\u003e\" e \"\u003cemail\u003e\" gravados",
  "keyword": "Entao "
});
formatter.step({
  "line": 23,
  "name": "Fecha o navegador",
  "keyword": "E "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "cadastro-de-usuario;visualizar-o-cadastro;",
  "rows": [
    {
      "cells": [
        "id",
        "name",
        "email",
        "password"
      ],
      "line": 26,
      "id": "cadastro-de-usuario;visualizar-o-cadastro;;1"
    },
    {
      "cells": [
        "1",
        "Hugo Boss",
        "hleonardosj@gmail.com",
        "12345678"
      ],
      "line": 27,
      "id": "cadastro-de-usuario;visualizar-o-cadastro;;2"
    },
    {
      "cells": [
        "1",
        "Carllos Son",
        "carllosson@gmail.com",
        "87654321"
      ],
      "line": 28,
      "id": "cadastro-de-usuario;visualizar-o-cadastro;;3"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 27,
  "name": "Visualizar o cadastro",
  "description": "",
  "id": "cadastro-de-usuario;visualizar-o-cadastro;;2",
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
  "line": 20,
  "name": "Usuario acessar o Sistema de cadastros de usuarios da Stefanini",
  "keyword": "Dado "
});
formatter.step({
  "line": 21,
  "name": "Informar os dados \"Hugo Boss\" e \"hleonardosj@gmail.com\" e \"12345678\" e clicar em cadastrar",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 22,
  "name": "Visualizar os dados \"1\" e \"Hugo Boss\" e \"hleonardosj@gmail.com\" gravados",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Entao "
});
formatter.step({
  "line": 23,
  "name": "Fecha o navegador",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuario.usuario_acessar_o_Sistema_de_cadastros_de_usuarios_da_Stefanini()"
});
formatter.result({
  "duration": 6827675600,
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
  "duration": 362968900,
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
  "duration": 224003900,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarUsuario.fecha_o_navegador()"
});
formatter.result({
  "duration": 1394337100,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Visualizar o cadastro",
  "description": "",
  "id": "cadastro-de-usuario;visualizar-o-cadastro;;3",
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
  "line": 20,
  "name": "Usuario acessar o Sistema de cadastros de usuarios da Stefanini",
  "keyword": "Dado "
});
formatter.step({
  "line": 21,
  "name": "Informar os dados \"Carllos Son\" e \"carllosson@gmail.com\" e \"87654321\" e clicar em cadastrar",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 22,
  "name": "Visualizar os dados \"1\" e \"Carllos Son\" e \"carllosson@gmail.com\" gravados",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Entao "
});
formatter.step({
  "line": 23,
  "name": "Fecha o navegador",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuario.usuario_acessar_o_Sistema_de_cadastros_de_usuarios_da_Stefanini()"
});
formatter.result({
  "duration": 6726017900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Carllos Son",
      "offset": 19
    },
    {
      "val": "carllosson@gmail.com",
      "offset": 35
    },
    {
      "val": "87654321",
      "offset": 60
    }
  ],
  "location": "CadastrarUsuario.informar_os_dados_e_e_e_clicar_em_cadastrar(String,String,String)"
});
formatter.result({
  "duration": 337977600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 21
    },
    {
      "val": "Carllos Son",
      "offset": 27
    },
    {
      "val": "carllosson@gmail.com",
      "offset": 43
    }
  ],
  "location": "CadastrarUsuario.visualizar_os_dados_e_e_gravados(String,String,String)"
});
formatter.result({
  "duration": 235401900,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarUsuario.fecha_o_navegador()"
});
formatter.result({
  "duration": 673899100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "Salvar evidencia",
  "description": "",
  "id": "cadastro-de-usuario;salvar-evidencia",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 32,
  "name": "Usuario acessar o Sistema de cadastros de usuarios da Stefanini",
  "keyword": "Dado "
});
formatter.step({
  "line": 33,
  "name": "Informar os dados \"\u003cname\u003e\" e \"\u003cemail\u003e\" e \"\u003cpassword\u003e\" e clicar em cadastrar",
  "keyword": "Quando "
});
formatter.step({
  "line": 34,
  "name": "Visualizar os dados \"\u003cid\u003e\" e \"\u003cname\u003e\" e \"\u003cemail\u003e\" gravados",
  "keyword": "Entao "
});
formatter.step({
  "line": 35,
  "name": "Salva a evidencia",
  "keyword": "E "
});
formatter.step({
  "line": 36,
  "name": "Fecha o navegador",
  "keyword": "E "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "cadastro-de-usuario;salvar-evidencia;",
  "rows": [
    {
      "cells": [
        "id",
        "name",
        "email",
        "password"
      ],
      "line": 39,
      "id": "cadastro-de-usuario;salvar-evidencia;;1"
    },
    {
      "cells": [
        "1",
        "Hugo Boss",
        "hleonardosj@gmail.com",
        "12345678"
      ],
      "line": 40,
      "id": "cadastro-de-usuario;salvar-evidencia;;2"
    },
    {
      "cells": [
        "1",
        "Carllos Son",
        "carllosson@gmail.com",
        "87654321"
      ],
      "line": 41,
      "id": "cadastro-de-usuario;salvar-evidencia;;3"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 40,
  "name": "Salvar evidencia",
  "description": "",
  "id": "cadastro-de-usuario;salvar-evidencia;;2",
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
  "line": 32,
  "name": "Usuario acessar o Sistema de cadastros de usuarios da Stefanini",
  "keyword": "Dado "
});
formatter.step({
  "line": 33,
  "name": "Informar os dados \"Hugo Boss\" e \"hleonardosj@gmail.com\" e \"12345678\" e clicar em cadastrar",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 34,
  "name": "Visualizar os dados \"1\" e \"Hugo Boss\" e \"hleonardosj@gmail.com\" gravados",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Entao "
});
formatter.step({
  "line": 35,
  "name": "Salva a evidencia",
  "keyword": "E "
});
formatter.step({
  "line": 36,
  "name": "Fecha o navegador",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuario.usuario_acessar_o_Sistema_de_cadastros_de_usuarios_da_Stefanini()"
});
formatter.result({
  "duration": 8357783600,
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
  "duration": 328750500,
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
  "duration": 257050400,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarUsuario.salva_a_evidencia()"
});
formatter.result({
  "duration": 102792500,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarUsuario.fecha_o_navegador()"
});
formatter.result({
  "duration": 688777400,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Salvar evidencia",
  "description": "",
  "id": "cadastro-de-usuario;salvar-evidencia;;3",
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
  "line": 32,
  "name": "Usuario acessar o Sistema de cadastros de usuarios da Stefanini",
  "keyword": "Dado "
});
formatter.step({
  "line": 33,
  "name": "Informar os dados \"Carllos Son\" e \"carllosson@gmail.com\" e \"87654321\" e clicar em cadastrar",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 34,
  "name": "Visualizar os dados \"1\" e \"Carllos Son\" e \"carllosson@gmail.com\" gravados",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Entao "
});
formatter.step({
  "line": 35,
  "name": "Salva a evidencia",
  "keyword": "E "
});
formatter.step({
  "line": 36,
  "name": "Fecha o navegador",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuario.usuario_acessar_o_Sistema_de_cadastros_de_usuarios_da_Stefanini()"
});
formatter.result({
  "duration": 8352383900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Carllos Son",
      "offset": 19
    },
    {
      "val": "carllosson@gmail.com",
      "offset": 35
    },
    {
      "val": "87654321",
      "offset": 60
    }
  ],
  "location": "CadastrarUsuario.informar_os_dados_e_e_e_clicar_em_cadastrar(String,String,String)"
});
formatter.result({
  "duration": 383076200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 21
    },
    {
      "val": "Carllos Son",
      "offset": 27
    },
    {
      "val": "carllosson@gmail.com",
      "offset": 43
    }
  ],
  "location": "CadastrarUsuario.visualizar_os_dados_e_e_gravados(String,String,String)"
});
formatter.result({
  "duration": 249544500,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarUsuario.salva_a_evidencia()"
});
formatter.result({
  "duration": 92678400,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarUsuario.fecha_o_navegador()"
});
formatter.result({
  "duration": 729315800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 43,
  "name": "Apagar o cadastro",
  "description": "",
  "id": "cadastro-de-usuario;apagar-o-cadastro",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 44,
  "name": "Usuario acessar o Sistema de cadastros de usuarios da Stefanini",
  "keyword": "Dado "
});
formatter.step({
  "line": 45,
  "name": "Informar os dados \"\u003cname\u003e\" e \"\u003cemail\u003e\" e \"\u003cpassword\u003e\" e clicar em cadastrar",
  "keyword": "Quando "
});
formatter.step({
  "line": 46,
  "name": "Visualizar os dados \"\u003cid\u003e\" e \"\u003cname\u003e\" e \"\u003cemail\u003e\" gravados",
  "keyword": "Entao "
});
formatter.step({
  "line": 47,
  "name": "exclui o usuario gravado",
  "keyword": "E "
});
formatter.step({
  "line": 48,
  "name": "Fecha o navegador",
  "keyword": "E "
});
formatter.examples({
  "line": 51,
  "name": "",
  "description": "",
  "id": "cadastro-de-usuario;apagar-o-cadastro;",
  "rows": [
    {
      "cells": [
        "id",
        "name",
        "email",
        "password"
      ],
      "line": 52,
      "id": "cadastro-de-usuario;apagar-o-cadastro;;1"
    },
    {
      "cells": [
        "1",
        "Hugo Boss",
        "hleonardosj@gmail.com",
        "12345678"
      ],
      "line": 53,
      "id": "cadastro-de-usuario;apagar-o-cadastro;;2"
    },
    {
      "cells": [
        "1",
        "Carllos Son",
        "carllosson@gmail.com",
        "87654321"
      ],
      "line": 54,
      "id": "cadastro-de-usuario;apagar-o-cadastro;;3"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 53,
  "name": "Apagar o cadastro",
  "description": "",
  "id": "cadastro-de-usuario;apagar-o-cadastro;;2",
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
  "line": 44,
  "name": "Usuario acessar o Sistema de cadastros de usuarios da Stefanini",
  "keyword": "Dado "
});
formatter.step({
  "line": 45,
  "name": "Informar os dados \"Hugo Boss\" e \"hleonardosj@gmail.com\" e \"12345678\" e clicar em cadastrar",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 46,
  "name": "Visualizar os dados \"1\" e \"Hugo Boss\" e \"hleonardosj@gmail.com\" gravados",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Entao "
});
formatter.step({
  "line": 47,
  "name": "exclui o usuario gravado",
  "keyword": "E "
});
formatter.step({
  "line": 48,
  "name": "Fecha o navegador",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuario.usuario_acessar_o_Sistema_de_cadastros_de_usuarios_da_Stefanini()"
});
formatter.result({
  "duration": 8263538500,
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
  "duration": 336228200,
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
  "duration": 256848600,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarUsuario.exclui_o_usuario_gravado()"
});
formatter.result({
  "duration": 66432100,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarUsuario.fecha_o_navegador()"
});
formatter.result({
  "duration": 672028900,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Apagar o cadastro",
  "description": "",
  "id": "cadastro-de-usuario;apagar-o-cadastro;;3",
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
  "line": 44,
  "name": "Usuario acessar o Sistema de cadastros de usuarios da Stefanini",
  "keyword": "Dado "
});
formatter.step({
  "line": 45,
  "name": "Informar os dados \"Carllos Son\" e \"carllosson@gmail.com\" e \"87654321\" e clicar em cadastrar",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 46,
  "name": "Visualizar os dados \"1\" e \"Carllos Son\" e \"carllosson@gmail.com\" gravados",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Entao "
});
formatter.step({
  "line": 47,
  "name": "exclui o usuario gravado",
  "keyword": "E "
});
formatter.step({
  "line": 48,
  "name": "Fecha o navegador",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuario.usuario_acessar_o_Sistema_de_cadastros_de_usuarios_da_Stefanini()"
});
formatter.result({
  "duration": 6781102300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Carllos Son",
      "offset": 19
    },
    {
      "val": "carllosson@gmail.com",
      "offset": 35
    },
    {
      "val": "87654321",
      "offset": 60
    }
  ],
  "location": "CadastrarUsuario.informar_os_dados_e_e_e_clicar_em_cadastrar(String,String,String)"
});
formatter.result({
  "duration": 502094100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 21
    },
    {
      "val": "Carllos Son",
      "offset": 27
    },
    {
      "val": "carllosson@gmail.com",
      "offset": 43
    }
  ],
  "location": "CadastrarUsuario.visualizar_os_dados_e_e_gravados(String,String,String)"
});
formatter.result({
  "duration": 159018800,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarUsuario.exclui_o_usuario_gravado()"
});
formatter.result({
  "duration": 63572500,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarUsuario.fecha_o_navegador()"
});
formatter.result({
  "duration": 722909100,
  "status": "passed"
});
});