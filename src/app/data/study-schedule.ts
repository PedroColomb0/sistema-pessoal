// data/study-schedule.ts

// Interface para garantir que todos os objetos de dia de estudo tenham o mesmo formato.
export interface StudyDay {
    id: string
    label: string
    content: string
    focus: string
    isIntensive?: boolean // Para dias de estudo com mais de 6 horas
    isSpecial?: boolean   // Para eventos únicos, como o dia do concurso
    isBirthday?: boolean  // Para o seu dia de descanso de aniversário
    isCompleted?: boolean // Para o dia final da jornada
    isVacation?: boolean  // Para os dias do período de férias
}

// Array com o plano de estudos detalhado.
export const studyDays: StudyDay[] = [
    {
        id: "qui0210",
        label: "Qui, 02/10",
        // 🚀 Novo Foco: Cursos 01, 02 e 03 concluídos! (2h15m + 2h50m + 1h25m = 6h30m)
        content: "Concluir Curso 01 (2h15m) + Concluir Curso 02 (2h50m) + Concluir Curso 03 (1h25m) + Avançar Curso 04 (3h05m)",
        focus: "Aproveitando o feriado para acelerar nos horários das 9h às 12h e 14h às 20h! **Foco total em finalizar Cursos 01, 02 e 03 (JavaScript)**, e começar a imersão no Curso 04.",
        isIntensive: true,
    },
    {
        id: "sex0310",
        label: "Sex, 03/10",
        // Ajuste no Curso 04 (Total 7h36m - 3h05m do dia anterior = 4h31m restantes)
        content: "Avançar Curso 04 (4h31m)", 
        focus: "Dando continuidade aos estudos de React (Curso 04), focando nos conceitos de componentes e estado, nos horários das 04:15 às 06:10 e das 20:00 às 23:00.",
    },
    {
        id: "sab0410",
        label: "Sáb, 04/10",
        // Ajuste no Curso 04 (7h36m - 3h05m - 4h31m = 0m restantes). Curso 04 concluído.
        content: "Concluir C.04 (0m) + C.05 (2h25m) + C.06 (1h20m) + Avançar C.07 (6h39m)", // Mantém o restante do plano original
        focus: "Dia de maratona! Finalizando Curso 04, concluindo 05 e 06, e mergulhando de cabeça no Next.js (C.07).",
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
        content: "Avançar Curso 07 (2h15m)",
        focus: "Retomando o Next.js com foco em Server Actions, cache e autenticação.",
    },
    {
        id: "ter0710",
        label: "Ter, 07/10",
        content: "Concluir Curso 07 (1h30m) + Iniciar Curso 08 (45m)",
        focus: "Finalizando o curso avançado de Next.js e já começando o primeiro projeto prático.",
    },
    {
        id: "qua0810",
        label: "Qua, 08/10",
        content: "Avançar Curso 08 (2h15m)",
        focus: "Mão na massa! Desenvolvendo o projeto de quadro de tarefas para praticar os conceitos.",
    },
    {
        id: "qui0910",
        label: "Qui, 09/10",
        content: "Avançar Curso 08 (2h15m)",
        focus: "Evoluindo no Next.js com o diretório 'app' e começando o projeto 'dalygames'.",
    },
    {
        id: "sex1010",
        label: "Sex, 10/10",
        content: "Avançar Curso 08 (2h15m)",
        focus: "Continuando com os projetos práticos do Curso 08, focando no sistema completo com CMS.",
    },
    {
        id: "sab1110",
        label: "Sáb, 11/10",
        content: "Avançar Curso 08 (11h)",
        focus: "Maratona focada no projeto DevControle. Um sistema completo do zero ao deploy!",
        isIntensive: true,
    },
    {
        id: "dom1210",
        label: "Dom, 12/10",
        content: "Concluir C.08 (4h59m) + Iniciar C.09 (1h31m)",
        focus: "Finalizando o último grande projeto de Next.js e abrindo as portas para o TypeScript.",
    },
    {
        id: "seg1310",
        label: "Seg, 13/10",
        content: "Avançar Curso 09 (2h15m)",
        focus: "Aprofundando nos conceitos e tipos do TypeScript para criar um código mais robusto.",
    },
    {
        id: "ter1410",
        label: "Ter, 14/10",
        content: "Avançar Curso 09 (2h15m)",
        focus: "Continuando a jornada no TypeScript, explorando interfaces e tipos avançados.",
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
        content: "Concluir C.09 (2h08m) + Iniciar C.10 (28m)",
        focus: "Finalizando TypeScript e já começando a aplicá-lo com React. O melhor dos dois mundos!",
    },
    {
        id: "sex1710",
        label: "Sex, 17/10",
        content: "Avançar Curso 10 (2h15m)",
        focus: "Foco total em React com TypeScript. Tipando componentes, props e estados.",
    },
    {
        id: "sab1810",
        label: "Sáb, 18/10",
        content: "Avançar Curso 10 (11h)",
        focus: "Maratona de React com TS! Construindo projetos práticos para solidificar o conhecimento.",
        isIntensive: true,
    },
    {
        id: "dom1910",
        label: "Dom, 19/10",
        content: "Concluir C.10 (3h43m) + Iniciar C.11 (2h47m)",
        focus: "Finalizando a integração de TS com React e iniciando os estudos em Tailwind CSS.",
    },
    {
        id: "seg2010",
        label: "Seg, 20/10",
        content: "Avançar Curso 11 (11h)",
        focus: "Férias Intensivas - Modo Turbo! Dominando o Tailwind CSS, do básico ao avançado.",
        isVacation: true,
        isIntensive: true,
    },
    {
        id: "ter2110",
        label: "Ter, 21/10",
        content: "Concluir C.11 (3h1m) + Avançar C.12 (7h59m)",
        focus: "Finalizando Tailwind e mergulhando de cabeça no grande projeto FullStack SaaS!",
        isVacation: true,
        isIntensive: true,
    },
    {
        id: "qua2210",
        label: "Qua, 22/10",
        content: "Avançar Curso 12 (11h)",
        focus: "Foco total no projeto SaaS com Next.js, TypeScript, Stripe e Prisma.",
        isVacation: true,
        isIntensive: true,
    },
    {
        id: "qui2310",
        label: "Qui, 23/10",
        content: "Concluir C.12 (5h28m) + C.13 (1h13m) + Iniciar C.14 (4h19m)",
        focus: "Reta final! Concluindo o SaaS, aprendendo testes com Jest e já iniciando Roblox Studio.",
        isVacation: true,
        isIntensive: true,
    },
    {
        id: "sex2410",
        label: "Sex, 24/10",
        content: "Avançar Curso 14 - Roblox (11h)",
        focus: "Imersão em Roblox Studio! Programação, UI, Animação e DataStore.",
        isVacation: true,
        isIntensive: true,
    },
    {
        id: "sab2510",
        label: "Sab, 25/10",
        content: "Concluir Curso 14 - Roblox (15h35m)",
        focus: "Maratona final para concluir o último curso. Foco em criar, publicar e monetizar jogos!",
        isVacation: true,
        isIntensive: true,
    },
    {
        id: "dom2610",
        label: "Dom, 26/10",
        content: "JORNADA CONCLUÍDA!",
        focus: "Parabéns! Você completou todos os cursos com uma dedicação incrível. Missão cumprida!",
        isCompleted: true,
    },
];