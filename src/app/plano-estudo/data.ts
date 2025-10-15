// src/app/plano-estudo/data.ts

// --- INTERFACES (Definições de Tipo) ---
export interface Module {
  id: string;
  name: string;
  time: string;
}

export interface Course {
  id: string;
  title: string;
  url: string;
  modules: Module[];
}

// --- DADOS DOS CURSOS ---
export const courses: Course[] = [
  {
    id: "course01",
    title: "Curso 01 - JavaScript (Iniciante)",
    url: "https://www.youtube.com/playlist?list=PLm-VCNNTu3LlXF_xsvl6fzf9KBFb3jHN-",
    modules: [
        { id: "js1", name: "Map, Filter & Reduce", time: "11m29s" },
        { id: "js2", name: "Objects", time: "9m56s" },
        { id: "js3", name: "Json", time: "3m22s" },
        { id: "js4", name: "Truthy & False Concept", time: "4m59s" },
        { id: "js5", name: "Functions & Arrow Functions", time: "4m38s" },
        { id: "js6", name: "Programacao Orientada a Objetos", time: "9m25s" },
        { id: "js7", name: "Selecting Dom Elements", time: "7m32s" },
        { id: "js8", name: "Manipulando Elementos do DOM", time: "6m35s" },
        { id: "js9", name: "Events", time: "11m14s" },
        { id: "js10", name: "Creating e Validating a Form", time: "9m06s" },
    ],
  },
  {
    id: "course02",
    title: "Curso 02 - React para Completos Iniciantes [2024]",
    url: "https://www.youtube.com/watch?v=2RWsLmu8yVc&t=263s",
    modules: [{ id: "react_b1", name: "Aula Completa", time: "2h25min22s" }],
  },
  {
    id: "course03",
    title: "Curso 03 - TypeScript para Completos Iniciantes",
    url: "https://www.youtube.com/watch?v=ppDsxbUNtNQ&t=11s&pp=ygUtQ3Vyc28gZGUgVHlwZVNjcmlwdCBwYXJhIENvbXBsZXRvcyBJbmljaWFudGVz",
    modules: [{ id: "ts_b1", name: "Aula Completa", time: "1h22min38s" }],
  },
  {
    id: "course04",
    title: "Curso 04 - Como Usar TypeScript no React",
    url: "https://www.youtube.com/watch?v=2-I3x3voXL8&t=659s",
    modules: [{ id: "ts_react", name: "Guia Completo", time: "28min38s" }],
  },
  {
    id: "course05",
    title: "Curso 05 - Dominando Next JS completo do zero",
    url: "https://www.youtube.com/watch?v=e6FigV2fLC8&t=2756s&pp=ygUnRG9taW5hbmRvIE5leHQgSlMgY29tcGxldG8gZG8gemVybyDwn5Sl",
    modules: [{ id: "next_b1", name: "Aula Completa", time: "1h20m34s" }], // Atualizado com o total de horas
  },
  {
    id: "course06",
    title: "Curso 06 - CURSO COMPLETO DE NEXT.JS",
    url: "https://www.youtube.com/watch?v=xqICXyJ8jzc",
    modules: [{ id: "next_b2", name: "Aula Completa", time: "3h19min46s" }],
  },
  {
    id: "course07",
    title: "Curso 07 - React Completo do Basico ao Avançado",
    url: "https://www.udemy.com/course/react-completo-do-basico-ao-avancado/?couponCode=MT250915G3",
    modules: [
      { id: "ud_r1", name: "Apresentação", time: "3m" },
      { id: "ud_r2", name: "Introdução e Preparação do Ambiente", time: "57m" },
      { id: "ud_r3", name: "Revisão de JavaScript moderno (opcional)", time: "39m" },
      { id: "ud_r4", name: "Conceitos Básicos e Sintaxe", time: "1h40m" },
      { id: "ud_r5", name: "Usando React com requisições HTTP / Ajax", time: "1h3m" },
      { id: "ud_r6", name: "React Hooks", time: "25m" },
      { id: "ud_r7", name: "Usando Rotas", time: "42m" },
      { id: "ud_r8", name: "Redux", time: "1h3m" },
      { id: "ud_r9", name: "Validações de formulário", time: "46m" },
      { id: "ud_r10", name: "Deploy", time: "16m" },
    ],
  },
  {
    id: "course08",
    title: "Curso 08 - Next.js do Zero ao Avançado com Projetos",
    url: "https://www.udemy.com/course/nextjs-do-zero-ao-avancado-com-projetos/",
    modules: [
        {id: 'ud_n1', name: 'Introdução', time: '53m'},
        {id: 'ud_n2', name: 'Páginas e Navegação', time: '1h11m'},
        {id: 'ud_n3', name: 'Estilização', time: '35m'},
        {id: 'ud_n4', name: 'Fetch e Server Actions', time: '1h26m'},
        {id: 'ud_n5', name: 'Cache', time: '39m'},
        {id: 'ud_n6', name: 'Autenticação com Next Auth', time: '1h15m'},
        {id: 'ud_n7', name: 'NextGram', time: '2h48m'},
        {id: 'ud_n8', name: 'Conclusão', time: '2m'},
        {id: 'ud_n9', name: 'Bonus 1: Curso de Introdução ao React', time: '1h31m'},
    ]
  },
  {
    id: "course09",
    title: "Curso 09 - TypeScript do zero ao avançado na pratica",
    url: "https://www.udemy.com/course/typescript-completo/",
    modules: [
        {id: 'ud_ts1', name: 'Introdução', time: '7min'},
        {id: 'ud_ts2', name: 'Configuração Ambiente', time: '47min'},
        {id: 'ud_ts3', name: 'Trabalhando com Tipos', time: '1h19min'},
        {id: 'ud_ts4', name: 'Funções no Typescript', time: '36min'},
        {id: 'ud_ts5', name: 'Interfaces', time: '53min'},
        {id: 'ud_ts6', name: 'Type Alias', time: '26min'},
        {id: 'ud_ts7', name: 'POO - Classes', time: '1h33min'},
        {id: 'ud_ts8', name: 'Módulos', time: '14min'},
        {id: 'ud_ts9', name: 'Generics', time: '24min'},
        {id: 'ud_ts10', name: 'Decorators no Typescript', time: '52min'},
        {id: 'ud_ts11', name: 'Praticando', time: '27min'},
        {id: 'ud_ts12', name: 'Projeto lista de tarefas', time: '41min'},
    ]
  },
  {
    id: "course10",
    title: "Curso 10 - React Js com TypeScript do zero ao avançado na pratica",
    url: "https://www.udemy.com/course/react-js-typescript/",
    modules: [
        {id: 'ud_rts1', name: 'Començando sua jornada', time: '11min'},
        {id: 'ud_rts2', name: 'Começando com React JS', time: '3h23min'},
        {id: 'ud_rts3', name: 'Roteamento de páginas com react', time: '34min'},
        {id: 'ud_rts4', name: 'Projeto criptomoedas', time: '1h53min'},
        {id: 'ud_rts5', name: 'Projeto Linktree + firebase', time: '3h11min'},
        {id: 'ud_rts6', name: 'Deploy do projeto', time: '8min'},
        {id: 'ud_rts7', name: 'Context Api', time: '35min'},
        {id: 'ud_rts8', name: 'Projeto carrinho e-commerce', time: '1h56min'},
        {id: 'ud_rts9', name: 'Projeto plataforma venda e compra carros', time: '4h39min'},
        {id: 'ud_rts10', name: 'Hooks com React 19', time: '55min'},
    ]
  },
  {
    id: "course11",
    title: "Curso 11 - Projeto FullStack SaaS - Next JS, TypeScript, Stripe, Prisma",
    url: "https://www.udemy.com/course/fullstack-saas/",
    modules: [
        {id: 'ud_saas1', name: 'Começando sua jornada', time: '13min'},
        {id: 'ud_saas2', name: 'Começando SaaS completo para clinicas', time: '1h35min'},
        {id: 'ud_saas3', name: 'Criando painel administrativo', time: '4h28min'},
        {id: 'ud_saas4', name: 'Serviços da clinica', time: '2h17min'},
        {id: 'ud_saas5', name: 'Evoluindo SaaS', time: '3h40min'},
        {id: 'ud_saas6', name: 'Criando dashboard de agendamento', time: '4h55min'},
        {id: 'ud_saas7', name: 'Sistema de assinaturas e pagamento', time: '5h38min'},
        {id: 'ud_saas8', name: 'Finalizando e realizando deploy de projeto', time: '1h45min'},
    ]
  },
];
