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
    url: "https://www.youtube.com/watch?v=ppDsxbUNtNQ&t=11s",
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
    url: "https://www.youtube.com/watch?v=e6FigV2fLC8&t=2756s",
    modules: [{ id: "next_b1", name: "Aula Completa", time: "1h20m34s" }],
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
    url: "https://www.udemy.com/course/react-completo-do-basico-ao-avancado/",
    modules: [
      { id: "ud_r1", name: "Apresentação e Introdução", time: "1h" },
      { id: "ud_r2", name: "Revisão de JavaScript", time: "39m" },
      { id: "ud_r3", name: "Conceitos Básicos e Sintaxe", time: "1h40m" },
      { id: "ud_r4", name: "Requisições HTTP / Ajax", time: "1h3m" },
      { id: "ud_r5", name: "React Hooks", time: "25m" },
      { id: "ud_r6", name: "Rotas e Redux", time: "1h45m" },
      { id: "ud_r7", name: "Validações e Deploy", time: "1h2m" },
    ],
  },
  {
    id: "course08",
    title: "Curso 08 - Next.js do Zero ao Avançado",
    url: "https://www.udemy.com/course/nextjs-do-zero-ao-avancado-com-projetos/",
    modules: [
        {id: 'ud_n1', name: 'Introdução, Páginas e Navegação', time: '2h4m'},
        {id: 'ud_n2', name: 'Estilização e Fetch', time: '2h1m'},
        {id: 'ud_n3', name: 'Cache e Autenticação', time: '1h54m'},
        {id: 'ud_n4', name: 'Projeto NextGram', time: '2h48m'},
        {id: 'ud_n5', name: 'Bônus React e Conclusão', time: '1h33m'},
    ]
  },
  {
    id: "course09",
    title: "Curso 09 - TypeScript do zero ao avançado",
    url: "https://www.udemy.com/course/typescript-completo/",
    modules: [
        {id: 'ud_ts1', name: 'Introdução e Configuração', time: '54m'},
        {id: 'ud_ts2', name: 'Tipos, Funções e Interfaces', time: '2h38m'},
        {id: 'ud_ts3', name: 'Type Alias e POO', time: '1h59m'},
        {id: 'ud_ts4', name: 'Módulos, Generics e Decorators', time: '1h30m'},
        {id: 'ud_ts5', name: 'Prática e Projeto Final', time: '1h8m'},
    ]
  },
  {
    id: "course10",
    title: "Curso 10 - React Js com TypeScript do zero ao avançado",
    url: "https://www.udemy.com/course/react-js-typescript/",
    modules: [
        {id: 'ud_rts1', name: 'Introdução ao React com JS', time: '3h34m'},
        {id: 'ud_rts2', name: 'Roteamento e Projeto Cripto', time: '2h27m'},
        {id: 'ud_rts3', name: 'Projeto Linktree com Firebase', time: '3h19m'},
        {id: 'ud_rts4', name: 'Context API e Projeto E-commerce', time: '2h31m'},
        {id: 'ud_rts5', name: 'Projeto Plataforma de Carros', time: '4h39m'},
        {id: 'ud_rts6', name: 'Hooks React 19', time: '55m'},
    ]
  },
  {
    id: "course11",
    title: "Curso 11 - Projeto FullStack SaaS",
    url: "https://www.udemy.com/course/fullstack-saas/",
    modules: [
        {id: 'ud_saas1', name: 'Começando o SaaS', time: '1h48m'},
        {id: 'ud_saas2', name: 'Painel Administrativo e Serviços', time: '6h45m'},
        {id: 'ud_saas3', name: 'Evoluindo SaaS e Dashboard', time: '8h35m'},
        {id: 'ud_saas4', name: 'Assinaturas e Deploy', time: '7h23m'},
    ]
  },
];