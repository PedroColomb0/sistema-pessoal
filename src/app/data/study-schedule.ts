// Interface para garantir que todos os objetos de dia de estudo tenham o mesmo formato.
export interface StudyDay {
    id: string
    label: string
    content: string
    focus: string
    isIntensive?: boolean // Para dias de estudo com mais de 5 horas
    isBirthday?: boolean  // Para o seu dia de descanso
    isCompleted?: boolean // Para o dia final da jornada
    isVacation?: boolean  // Para os dias do período de férias
}

// Array com o plano de estudos detalhado (v16 - Início em 10/10).
export const studyDays: StudyDay[] = [
    {
        id: "sex1010",
        label: "Sex, 10/10",
        // C.03 (2h25m). Estudo: 2h30m. Restam 5m.
        content: "Concluir C.03 (2h25m) + Iniciar C.04 (5m)",
        focus: "🚀 Início da Jornada! Finalizando o C.03 de React para Iniciantes e já começando o C.04 sobre Next.js.",
    },
    {
        id: "sab1110",
        label: "Sáb, 11/10",
        // C.04 restante: 1h15m. Estudo: 2h30m. Restam 1h15m.
        content: "Concluir C.04 (1h15m) + Iniciar C.05 (1h15m)",
        focus: "Dominando o Next.js (C.04) e mergulhando de cabeça no React Completo (C.05), começando pela base.",
    },
    {
        id: "dom1210",
        label: "Dom, 12/10",
        // C.05 restante: 6h21m. Estudo: 2h30m.
        content: "Avançar C.05 (2h30m)",
        focus: "Foco total no C.05! Aprofundando em conceitos como Hooks, Requisições HTTP e a sintaxe do React.",
    },
    {
        id: "seg1310",
        label: "Seg, 13/10",
        // C.05 restante: 3h51m. Estudo: 2h30m.
        content: "Avançar C.05 (2h30m)",
        focus: "Continuando a imersão no React Avançado (C.05), explorando Rotas e Redux.",
    },
    {
        id: "ter1410",
        label: "Ter, 14/10",
        // C.05 restante: 1h21m. Estudo: 2h30m. Restam 1h09m.
        content: "Concluir C.05 (1h21m) + Iniciar C.06 (1h09m)",
        focus: "Finalizando o React Completo (C.05) e começando a desbravar o Next.js com Projetos (C.06).",
    },
    {
        id: "qua1510",
        label: "Qua, 15/10",
        // C.06 restante: 8h55m. Estudo: 9h. Restam 5m.
        content: "Concluir C.06 (8h55m) + Iniciar C.07 (5m)",
        focus: "⚡ Maratona de Quarta! Finalizando o C.06 de Next.js e dando os primeiros passos em TypeScript (C.07).",
        isIntensive: true,
    },
    {
        id: "qui1610",
        label: "Qui, 16/10",
        // C.07 restante: 8h04m. Estudo: 9h. Restam 56m.
        content: "Concluir C.07 (8h04m) + Iniciar C.08 (56m)",
        focus: "⚡ Quinta Especial! Finalizando TypeScript (C.07) e começando a jornada de React com TypeScript (C.08).",
        isIntensive: true,
    },
    {
        id: "sex1710",
        label: "Sex, 17/10",
        // C.08 restante: 16h30m. Estudo: 2h30m.
        content: "Avançar C.08 (2h30m)",
        focus: "Unindo os poderes! Aplicando TypeScript em projetos práticos com React (C.08).",
    },
    {
        id: "sab1810",
        label: "Sáb, 18/10",
        // C.08 restante: 14h00m. Estudo: 2h30m.
        content: "Avançar C.08 (2h30m)",
        focus: "Construindo projetos robustos no C.08, focando no projeto de criptomoedas e no Linktree com Firebase.",
    },
    {
        id: "dom1910",
        label: "Dom, 19/10",
        content: "Dia de Descanso!",
        focus: "🎂 Pausa merecida! Recarregue as energias para continuar a jornada com força total.",
        isBirthday: true,
    },
    {
        id: "seg2010",
        label: "Seg, 20/10",
        // C.08 restante: 11h30m. Estudo: 2h30m.
        content: "Avançar C.08 (2h30m)",
        focus: "Retomando com força total! Foco na Context API e no projeto de e-commerce do C.08.",
    },
    {
        id: "ter2110",
        label: "Ter, 21/10",
        // C.08 restante: 9h00m. Estudo: 2h30m.
        content: "Avançar C.08 (2h30m)",
        focus: "Avançando no projeto de plataforma de carros do C.08. A complexidade está aumentando!",
    },
    {
        id: "qua2210",
        label: "Qua, 22/10",
        // C.08 restante: 6h30m. Estudo: 9h. Restam 2h30m.
        content: "Avançar C.08 (6h30m) + Iniciar C.09 (2h30m)",
        focus: "⚡ Quarta de Progresso! Dando um grande avanço no C.08 e começando a dominar o Tailwind CSS (C.09).",
        isIntensive: true,
    },
    {
        id: "qui2310",
        label: "Qui, 23/10",
        // C.08 restante: 4h00m. Estudo: 6h. Restam 2h.
        content: "Concluir C.08 (4h00m) + Avançar C.09 (2h00m)",
        focus: "🏁 Finalizando o gigante C.08 (React+TS) e acelerando no design com Tailwind CSS (C.09).",
        isIntensive: true,
    },
    {
        id: "sex2410",
        label: "Sex, 24/10",
        // C.09 restante: 1h35m. Estudo: 9h. Restam 7h25m.
        content: "Concluir C.09 (1h35m) + Iniciar C.10 (7h25m)",
        focus: "🏖️ Férias Modo Turbo! Finalizando Tailwind (C.09) e mergulhando no gigante Projeto SaaS FullStack (C.10).",
        isVacation: true,
        isIntensive: true,
    },
    {
        id: "sab2510",
        label: "Sáb, 25/10",
        // C.10 restante: 17h04m. Estudo: 9h.
        content: "Avançar C.10 (9h00m)",
        focus: "Imersão total no Projeto SaaS (C.10). Foco na arquitetura com Next.js, TypeScript, Stripe e Prisma.",
        isVacation: true,
        isIntensive: true,
    },
    {
        id: "dom2610",
        label: "Dom, 26/10",
        // C.10 restante: 8h04m. Estudo: 9h. Restam 56m.
        content: "Avançar C.10 (8h04m) + Concluir C.11 (56m)",
        focus: "Quase lá! Deixando o Projeto SaaS (C.10) pronto e já começando a parte de Testes com Jest (C.11).",
        isVacation: true,
        isIntensive: true,
    },
    {
        id: "seg2710",
        label: "Seg, 27/10",
        // C.11 restante: 17m. C.12 (1h). Total: 1h17m.
        content: "Concluir C.11 (17m) + Concluir C.12 (1h00m)",
        focus: "ÚLTIMO DIA! Finalizando Testes (C.11) e APIs (C.12). A jornada está prestes a ser completada!",
        isVacation: true,
        isIntensive: true,
    },
    {
        id: "ter2810",
        label: "Ter, 28/10",
        content: "JORNADA CONCLUÍDA!",
        focus: "🏆 Parabéns! Você completou todos os cursos com uma dedicação incrível. Missão cumprida! É hora de celebrar e planejar seus próximos passos como dev!",
        isCompleted: true,
    },
];