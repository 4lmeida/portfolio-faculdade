import { hoverChangeDegree } from "./hoverChangeDegree.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { toggleMenu } from "./toggleMenu.js";

hoverChangeDescription(
  ".java",
  "Java é uma linguagem de programação originalmente orientada ao objeto que evoluiu para multi-paradigma. Ela é segura e confiável para codificar tudo, desde aplicações móveis, software empresarial e tecnologias do servidor."
);

hoverChangeDescription(
  ".spring",
  "O Spring é uma das framework mais popular do mundo quando falamos de Java. Ela otimiza o trabalho de desenvolvimento tornando a  programação java mais rápida, fácil e segura."
);

hoverChangeDescription(
  ".postgresql",
  "O PostgreSQL é um sistema gerenciador de banco de dados objeto relacional e hoje ele é um dos SGBDs de código aberto mais avançados."
);

hoverChangeDescription(
  ".html",
  "HTML é uma linguagem de marcação, onde marcamos os elementos para definir quais informações a página vai exibir."
);

hoverChangeDescription(
  ".css",
  "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas."
);

hoverChangeDescription(
  ".js",
  "JavaScript é uma linguagem de programação de alto nível, criada para ser executada em navegadores e manipular comportamentos de páginas web."
);

hoverChangeDescription(
  ".react",
  "O React é um biblioteca JavaScript que fornece uma estrutura de trabalho para criar interfaces para usuários."
);

hoverChangeDescription(
  ".ts",
  "O TypeScript é um superconjunto do JavaScript que adiciona alguns recursos à linguagem do JavaScript, como tipagem estática, classes e interfaces."
);

hoverChangeDescription(
  ".junit",
  "O JUnit é a principal biblioteca do Java, ela facilita a  criação e manutenção do código para automação de testes de unidade."
);

hoverChangeDescription(
  ".git",
  "O Git é o principal sistema de controle de versões distribuído, sendo possível viajar entre as versões de maneira simples e rápido, podendo também criar e compartilhar repositórios."
);

hoverChangeDescription(
  ".docker",
  "Docker é uma plataforma que facilita a criação e administração de ambientes isolados. Ele possibilita empacotar uma aplicação ou ambiente dentro de um container."
);

hoverChangeDescription(
  ".mockito",
  "O Mockito é uma Framework que simula comportamentos de outra classe para que realize testes de métodos e suas dependências."
);

hoverChangeDegree(
  ".uninter",
  `A graduação de análise e desenvolvimento de sistemas na UNINTER cobre diversos módulos importantes e fundamentas para um profissional da área. Alguns dos módulos aprendidos ao longo do curso: Fundamentos computacionais, infraestrutura, analise de sistemas, desenvolvimento de sistemas e gestão de TI.`,
  "UNINTER",
  "Análise e Desenvolvimento de Sistema",
  "Jun 2023 - Dez 2025 (2145 horas)"
);

hoverChangeDegree(
  ".OracleNextEducation",
  `O programa ONE é uma formação com hard e soft skills, visando a capacitação completa com teoria e prática aplicadas ao mercado. Algumas formações adquiridas ao longo do programa: Iniciante em Programação, Desenvolvimento Pessoal,
    Business Agility, Java e Orientação a Objetos, Java e Spring Boot, e Empreendedorismo.`,
  "Oracle Next Education",
  "Back-End",
  "Nov 2022 - Jun 2023 (338 horas)"
);

hoverChangeDegree(
  ".devsuperiorspring",
  `Durante o treinamento foram entregue e validados projetos com as tecnologias java e spring, implementando alguns módulos do próprio spring com a parte de segurança, validação, testes automatizados e persistência de dados. Portanto 
    desenvolvendo aplicações web completas e robustas.`,
  "DevSuperior",
  "Bootcamp Spring",
  "Nov 2022 - Abr 2023 (160 horas)"
);

hoverChangeDegree(
  ".devsuperiorfmd",
  `Curso profissionalizante focado nos fundamentos da programação e na criação prática de aplicações Web completas, do back-end ao front-end. Ao longo da formação  obtive as seguintes competências: Lógica de programação,
     Git e Github, HTML e CSS, Programação Moderna(POO), Banco de Dados, Análise de Sistemas, Ambiente de Desenvolvimento, Back-end(Spring), JavaScript e Front-end(React).`,
  "DevSuperior",
  "Formação Desenvolvedor Moderno",
  "Jan 2022 - Dez 2022 (650 horas)"
);

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio real do formulário
    alert("Formulário enviado com sucesso!");
  });

toggleMenu();