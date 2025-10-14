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

// Array com o plano de estudos detalhado (v17 - Início em 14/10).
export const studyDays: StudyDay[] = [
    {
        id: "ter1410",
        label: "Ter, 14/10",
        // Cursos: JS (2h15m). Estudo: 2h30m. Restam 15m.
        content: "Concluir C.01 (2h15m) + Iniciar C.02 (15m)",
        focus: "🚀 Início da Jornada! Finalizando a base de JavaScript (C.01) e já mergulhando em React para Iniciantes (C.02).",
    },
    {
        id: "qua1510",
        label: "Qua, 15/10",
        // C.02 restante: 2h10m. Estudo: 2h30m. Restam 20m.
        content: "Concluir C.02 (2h10m) + Iniciar C.03 (20m)",
        focus: "Concluindo o básico de React (C.02) e começando a entender o poder do TypeScript (C.03).",
    },
    {
        id: "qui1610",
        label: "Qui, 16/10",
        // C.03(1h03m) + C.04(29m) + C.05(1h18m). Total: 2h50m. Estudo: 2h30m.
        content: "Concluir C.03 (1h03m) + Concluir C.04 (29m) + Iniciar C.05 (1h)",
        focus: "Dia de finalizações! Concluindo TypeScript (C.03), TypeScript com React (C.04) e iniciando Next.js (C.05).",
    },
    {
        id: "sex1710",
        label: "Sex, 17/10",
        // C.05 restante: 21m. C.06: 3h20m. Estudo: 2h30m.
        content: "Concluir C.05 (21m) + Iniciar C.06 (2h09m)",
        focus: "Dominando o Next.js! Finalizando a introdução (C.05) e partindo para o curso completo (C.06).",
    },
    {
        id: "sab1810",
        label: "Sáb, 18/10",
        // C.06(1h11m) + C.07(7h36m). Estudo: 10h. Restam 1h13m.
        content: "Concluir C.06 (1h11m) + Concluir C.07 (7h36m) + Iniciar C.08 (1h13m)",
        focus: "⚡ Sábado de Imersão! Finalizando Next.js (C.06), React Completo (C.07) e iniciando Next.js com Projetos (C.08).",
        isIntensive: true,
    },
    {
        id: "dom1910",
        label: "Dom, 19/10",
        // C.08 restante: 8h51m. Estudo: 10h. Restam 1h09m.
        content: "Concluir C.08 (8h51m) + Iniciar C.09 (1h09m)",
        focus: "⚡ Domingo Produtivo! Finalizando o gigante C.08 (Next.js com Projetos) e já começando TypeScript Avançado (C.09).",
        isIntensive: true,
    },
    {
        id: "seg2010",
        label: "Seg, 20/10",
        // C.09 restante: 7h. Estudo: 10h. Restam 3h.
        content: "Concluir C.09 (7h00m) + Iniciar C.10 (3h00m)",
        focus: "🏖️ Férias Modo Turbo! Finalizando TypeScript Avançado (C.09) e mergulhando em React com TypeScript (C.10).",
        isIntensive: true,
        isVacation: true,
    },
    {
        id: "ter2110",
        label: "Ter, 21/10",
        // C.10 restante: 14h26m. Estudo: 10h.
        content: "Avançar C.10 (10h00m)",
        focus: "Foco total no C.10! Construindo projetos práticos com React e TypeScript, do zero ao avançado.",
        isIntensive: true,
        isVacation: true,
    },
    {
        id: "qua2210",
        label: "Qua, 22/10",
        // C.10 restante: 4h26m. Estudo: 10h. Restam 5h34m.
        content: "Concluir C.10 (4h26m) + Iniciar C.11 (5h34m)",
        focus: "🏁 Reta final do C.10! Concluindo React com TS e iniciando o massivo projeto SaaS FullStack (C.11).",
        isIntensive: true,
        isVacation: true,
    },
    {
        id: "qui2310",
        label: "Qui, 23/10",
        // C.11 restante: 18h55m. Estudo: 10h.
        content: "Avançar C.11 (10h00m)",
        focus: "Imersão no SaaS (C.11). Foco na arquitetura com Next.js, Stripe e Prisma. O projeto ganha forma!",
        isIntensive: true,
        isVacation: true,
    },
    {
        id: "sex2410",
        label: "Sex, 24/10",
        // C.11 restante: 8h55m. Estudo: 10h. Restam 1h05m.
        content: "Concluir C.11 (8h55m) + Concluir C.12 (1h00m) + Revisão (5m)",
        focus: "ÚLTIMO DIA DE ESTUDO! Finalizando o projeto SaaS (C.11) e o módulo de APIs (C.12).",
        isIntensive: true,
        isVacation: true,
    },
    {
        id: "sab2510",
        label: "Sáb, 25/10",
        content: "JORNADA CONCLUÍDA!",
        focus: "🏆 Parabéns! Você completou todos os cursos com uma dedicação incrível. Missão cumprida! É hora de celebrar e planejar seus próximos passos como dev!",
        isCompleted: true,
    },
];