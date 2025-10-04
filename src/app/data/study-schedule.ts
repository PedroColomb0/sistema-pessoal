// Interface para garantir que todos os objetos de dia de estudo tenham o mesmo formato.
export interface StudyDay {
    id: string
    label: string
    content: string
    focus: string
    isIntensive?: boolean // Para dias de estudo com mais de 6 horas
    isSpecial?: boolean   // Para eventos únicos, como o dia do concurso
    isBirthday?: boolean  // Para o seu dia de descanso de aniversário
    isCompleted?: boolean // Para o dia final da jornada
    isVacation?: boolean  // Para os dias do período de férias
}

// Array com o plano de estudos detalhado.
export const studyDays: StudyDay[] = [
    {
        id: "sab0410",
        label: "Sáb, 04/10",
        // 🚀 Início da Jornada (14h às 23h - 9h00m no total)
        // C.03 (1h25m) + C.05 (2h25m) + C.06 (1h20m) = 5h10m. Restante: 3h50m para C.04.
        content: "Concluir C.03 (1h25m) + Concluir C.05 (2h25m) + Concluir C.06 (1h20m) + Avançar C.04 (3h50m)",
        focus: "Maratona de Sábado (14h às 23h)! **Foco total em finalizar a base (Cursos 03, 05 e 06)**, e mergulhar em React (C.04).",
        isIntensive: true,
    },
    {
        id: "dom0510",
        label: "Dom, 05/10",
        content: "Dia de Concurso!",
        focus: "Pausa estratégica nos estudos. Boa sorte na prova! Descanse e volte com tudo.",
        isSpecial: true,
    },
    {
        id: "seg0610",
        label: "Seg, 06/10",
        // C.04 restante: 3h46m. Estudo: 2h15m.
        content: "Avançar C.04 (2h15m)",
        focus: "Retomando os estudos de React (C.04), focando nos conceitos de Hooks, Rotas e Redux.",
    },
    {
        id: "ter0710",
        label: "Ter, 07/10",
        // C.04 restante: 1h31m. Tempo restante do dia: 44m para C.07.
        content: "Concluir C.04 (1h31m) + Iniciar C.07 (44m)",
        focus: "Finalizando React Completo (C.04) e começando a imersão em Next.js (C.07) com Introdução e Páginas.",
    },
    {
        id: "qua0810",
        label: "Qua, 08/10",
        // C.07 restante: 9h20m. Estudo: 2h15m.
        content: "Avançar Curso 07 (2h15m)",
        focus: "Aprofundando em Next.js (C.07), focando em Estilização, Fetch e Server Actions.",
    },
    {
        id: "qui0910",
        label: "Qui, 09/10",
        // C.07 restante: 7h05m. Estudo: 2h15m.
        content: "Avançar Curso 07 (2h15m)",
        focus: "Continuando em Next.js (C.07), explorando Cache e Autenticação com Next Auth.",
    },
    {
        id: "sex1010",
        label: "Sex, 10/10",
        // C.07 restante: 4h50m. Estudo: 2h15m.
        content: "Avançar Curso 07 (2h15m)",
        focus: "Foco no projeto prático NextGram do Curso 07.",
    },
    {
        id: "sab1110",
        label: "Sáb, 11/10",
        // C.07 restante: 2h35m. Tempo restante do dia (11h): 8h25m para C.08.
        content: "Concluir C.07 (2h35m) + Avançar C.08 (8h25m)",
        focus: "Maratona! Finalizando Next.js Avançado (C.07) e iniciando o mega-curso prático de Next.js (C.08) com Projetos e Começando com ReactJS.",
        isIntensive: true,
    },
    {
        id: "dom1210",
        label: "Dom, 12/10",
        // C.08 restante: 17h09m. Estudo: 6h30m (mantendo o ritmo intensivo do final de semana original).
        content: "Avançar Curso 08 (6h30m)",
        focus: "Dia de maratona focada no Primeiro Projeto e Board Tarefas do Curso 08.",
        isIntensive: true,
    },
    {
        id: "seg1310",
        label: "Seg, 13/10",
        // C.08 restante: 10h39m. Estudo: 2h15m.
        content: "Avançar Curso 08 (2h15m)",
        focus: "Mergulhando no diretório 'app' e começando o projeto 'dalygames' do C.08.",
    },
    {
        id: "ter1410",
        label: "Ter, 14/10",
        // C.08 restante: 8h24m. Estudo: 2h15m.
        content: "Avançar Curso 08 (2h15m)",
        focus: "Continuando com o sistema completo + CMS no Curso 08.",
    },
    {
        id: "qua1510",
        label: "Qua, 15/10",
        content: "Dia de Descanso!",
        focus: "Pausa merecida pós-aniversário! Recarregue as energias para a reta final.",
        isBirthday: true,
    },
    {
        id: "qui1610",
        label: "Qui, 16/10",
        // C.08 restante: 6h09m. Estudo: 2h15m.
        content: "Avançar Curso 08 (2h15m)",
        focus: "Foco no Projeto DevControle (Sistema Completo) do Curso 08.",
    },
    {
        id: "sex1710",
        label: "Sex, 17/10",
        // C.08 restante: 3h54m. Estudo: 2h15m.
        content: "Avançar Curso 08 (2h15m)",
        focus: "Continuando com a construção e refino do Projeto DevControle.",
    },
    {
        id: "sab1810",
        label: "Sáb, 18/10",
        // C.08 restante: 1h39m. C.09: 8h09m. Tempo restante do dia (11h): 1h12m para C.10.
        content: "Concluir C.08 (1h39m) + Concluir C.09 (8h09m) + Iniciar C.10 (1h12m)",
        focus: "Dia de virada! **Concluindo Next.js (C.08) e TypeScript (C.09)**, e abrindo as portas para React com TypeScript (C.10).",
        isIntensive: true,
    },
    {
        id: "dom1910",
        label: "Dom, 19/10",
        // C.10 restante: 16h14m. Estudo: 6h30m (mantendo o ritmo intensivo do final de semana original).
        content: "Avançar Curso 10 (6h30m)",
        focus: "Aprofundando no desenvolvimento de projetos com React e TypeScript.",
        isIntensive: true,
    },
    {
        id: "seg2010",
        label: "Seg, 20/10",
        // C.10 restante: 9h44m. Tempo restante do dia (11h): 1h16m para C.11.
        content: "Concluir C.10 (9h44m) + Iniciar C.11 (1h16m)",
        focus: "✈️ Férias Modo Turbo! Finalizando React+TS (C.10) e começando o domínio do Tailwind CSS (C.11).",
        isVacation: true,
        isIntensive: true,
    },
    {
        id: "ter2110",
        label: "Ter, 21/10",
        // C.11 restante: 10h22m. Tempo restante do dia (11h): 38m para C.12.
        content: "Concluir C.11 (10h22m) + Iniciar C.12 (38m)",
        focus: "Finalizando o estilo com Tailwind (C.11) e dando o primeiro passo no **Projeto FullStack SaaS (C.12)**.",
        isVacation: true,
        isIntensive: true,
    },
    {
        id: "qua2210",
        label: "Qua, 22/10",
        // C.12 restante: 23h49m. Estudo: 11h00m.
        content: "Avançar Curso 12 (11h00m)",
        focus: "Foco total no projeto SaaS com Next.js, TypeScript, Stripe e Prisma. Mantenha a concentração!",
        isVacation: true,
        isIntensive: true,
    },
    {
        id: "qui2310",
        label: "Qui, 23/10",
        // C.12 restante: 12h49m. Estudo: 11h00m.
        content: "Avançar Curso 12 (11h00m)",
        focus: "Evoluindo a arquitetura do projeto SaaS e implementando recursos avançados de Next.js.",
        isVacation: true,
        isIntensive: true,
    },
    {
        id: "sex2410",
        label: "Sex, 24/10",
        // C.12 restante: 1h49m. C.13: 1h12m. Tempo restante do dia (11h): 7h59m para C.14.
        content: "Concluir C.12 (1h49m) + Concluir C.13 (1h12m) + Avançar C.14 - Roblox (7h59m)",
        focus: "Tríplice conclusão! Finalizando Projeto SaaS (C.12), Testes (C.13) e **começando a Imersão Roblox Studio (C.14)**.",
        isVacation: true,
        isIntensive: true,
    },
    {
        id: "sab2510",
        label: "Sáb, 25/10",
        // C.14 restante: 22h55m. Estudo: 11h00m.
        content: "Avançar Curso 14 - Roblox (11h00m)",
        focus: "Imersão em Roblox Studio! Programação, UI, Animação e DataStore.",
        isVacation: true,
        isIntensive: true,
    },
    {
        id: "dom2610",
        label: "Dom, 26/10",
        // C.14 restante: 11h55m. Estudo: 11h55m (Dia de Conclusão da matéria).
        content: "Concluir Curso 14 - Roblox (11h55m)",
        focus: "Maratona final para concluir o último curso e a jornada! Foco em criar, publicar e monetizar jogos!",
        isVacation: true,
        isIntensive: true,
    },
    {
        id: "seg2710",
        label: "Seg, 27/10",
        content: "JORNADA CONCLUÍDA!",
        focus: "🏆 Parabéns! Você completou todos os cursos com uma dedicação incrível. Missão cumprida! É hora de celebrar e planejar seus próximos passos como dev!",
        isCompleted: true,
    },
];
