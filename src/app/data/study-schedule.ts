// Interface para garantir que todos os objetos de dia de estudo tenham o mesmo formato.
export interface StudyDay {
    id: string;
    label: string;
    content: string;
    focus: string;
    isIntensive?: boolean; // Para dias de estudo com mais de 5 horas
    isBirthday?: boolean;  // Para o seu dia de descanso
    isCompleted?: boolean; // Para o dia final da jornada
    isVacation?: boolean;  // Para os dias do período de férias
}

// Array com o plano de estudos detalhado (Início em 16/10).
export const studyDays: StudyDay[] = [
    {
        id: "qui1610",
        label: "Qui, 16/10",
        content: "Concluir C.02 (2h25m) + Iniciar C.03 (5m)",
        focus: "🚀 Início da Jornada! Concluindo React para Iniciantes (C.02) e iniciando TypeScript (C.03).",
    },
    {
        id: "sex1710",
        label: "Sex, 17/10",
        content: "Concluir C.03 (1h18m) + Concluir C.04 (29m) + Iniciar C.05 (43m)",
        focus: "Finalizando TypeScript (C.03), TypeScript com React (C.04) e já começando Next.js (C.05).",
    },
    {
        id: "sab1810",
        label: "Sáb, 18/10",
        content: "Concluir C.05 (38m) + Concluir C.06 (3h20m) + Iniciar C.07 (5h02m)",
        focus: "⚡ Sábado de Imersão! Finalizando Next.js (C.05 e C.06) e mergulhando em React Completo (C.07).",
        isIntensive: true,
    },
    {
        id: "dom1910",
        label: "Dom, 19/10",
        content: "Concluir C.07 (2h34m) + Iniciar C.08 (6h26m)",
        focus: "⚡ Domingo Produtivo! Finalizando React Completo (C.07) e começando o gigante C.08 (Next.js com Projetos).",
        isIntensive: true,
    },
    {
        id: "seg2010",
        label: "Seg, 20/10",
        content: "Concluir C.08 (3h38m) + Iniciar C.09 (5h22m)",
        focus: "🏖️ Férias Modo Turbo! Finalizando Next.js com Projetos (C.08) e mergulhando em TypeScript Avançado (C.09).",
        isIntensive: true,
        isVacation: true,
    },
    {
        id: "ter2110",
        label: "Ter, 21/10",
        content: "Concluir C.09 (2h47m) + Iniciar C.10 (6h13m)",
        focus: "Foco total! Concluindo TypeScript Avançado (C.09) e mergulhando fundo em React com TypeScript (C.10).",
        isIntensive: true,
        isVacation: true,
    },
    {
        id: "qua2210",
        label: "Qua, 22/10",
        content: "Avançar C.10 (9h00m)",
        focus: "Avançando firme em React com TypeScript (C.10). Construindo projetos práticos, do zero ao avançado.",
        isIntensive: true,
        isVacation: true,
    },
    {
        id: "qui2310",
        label: "Qui, 23/10",
        content: "Concluir C.10 (2h13m) + Iniciar C.11 (6h47m)",
        focus: "🏁 Reta final do C.10! Concluindo React com TS e iniciando o massivo projeto SaaS FullStack (C.11).",
        isIntensive: true,
        isVacation: true,
    },
    {
        id: "sex2410",
        label: "Sex, 24/10",
        content: "Avançar C.11 (9h00m)",
        focus: "Imersão no SaaS (C.11). Foco na arquitetura com Next.js, Stripe e Prisma. O projeto ganha forma!",
        isIntensive: true,
        isVacation: true,
    },
    {
        id: "sab2510",
        label: "Sáb, 25/10",
        content: "Concluir C.11 (8h42m) + Iniciar C.12 (18m)",
        focus: "Contagem regressiva! Finalizando o incrível projeto SaaS (C.11) e começando o último módulo de APIs (C.12).",
        isIntensive: true,
        isVacation: true,
    },
    {
        id: "dom2610",
        label: "Dom, 26/10",
        content: "Concluir C.12 (42m) + Revisão e Prática (8h18m)",
        focus: "🏆 JORNADA CONCLUÍDA! Parabéns! Você completou todos os cursos. Missão cumprida! Hora de celebrar!",
        isIntensive: true,
        isVacation: true,
        isCompleted: true,
    },
];