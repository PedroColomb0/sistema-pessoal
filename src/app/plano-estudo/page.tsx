// src/app/plano-estudo/page.tsx ou onde seu componente estiver localizado

"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar" // Verifique se o caminho está correto
import { Button } from "@/components/ui/button" // Verifique se o caminho está correto

// Interface para garantir que todos os objetos de dia de estudo tenham o mesmo formato.
// Isso ajuda a evitar erros e melhora a organização do código.
interface StudyDay {
  id: string
  label: string
  content: string
  focus: string
  isIntensive?: boolean // Para dias de estudo com mais de 8 horas
  isSpecial?: boolean   // Para eventos únicos, como o dia do concurso
  isBirthday?: boolean  // Para o seu dia de descanso de aniversário
  isCompleted?: boolean // Para o dia final da jornada
  isVacation?: boolean  // Para os dias do período de férias
}

// Array com o novo plano de estudos, recalculado com base nas suas regras.
const studyDays: StudyDay[] = [
    {
        id: "ter3009",
        label: "Ter, 30/09",
        content: "Curso 01 (2h15m)",
        focus: "Iniciando a jornada! Foco total para construir uma base sólida em JavaScript.",
    },
    {
        id: "qua0110",
        label: "Qua, 01/10",
        content: "Curso 02 (2h15m)",
        focus: "Avançando no JavaScript, explorando funções, arrays e os fundamentos do ES6+.",
    },
    {
        id: "qui0210",
        label: "Qui, 02/10",
        content: "Dia Intensivo - Feriado (9h)",
        focus: "Aproveitando o feriado para acelerar! Imersão em ES6+, requisições HTTP e WebStorage.",
        isIntensive: true,
    },
    {
        id: "sex0310",
        label: "Sex, 03/10",
        content: "Curso 03 (1h25m) + Início Curso 04 (50m)",
        focus: "Revisão pré-React e primeiros passos no framework mais popular do mercado.",
    },
    {
        id: "sab0410",
        label: "Sáb, 04/10",
        content: "Imersão React - Sábado (11h)",
        focus: "Dia de imersão total! Aprofundando em conceitos básicos, hooks, rotas e Redux.",
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
        content: "Curso 04 (2h15m)",
        focus: "Retomando o React com foco em validações de formulário e preparação para deploy.",
    },
    {
        id: "ter0710",
        label: "Ter, 07/10",
        content: "Curso 05 (2h15m)",
        focus: "Reforçando a base de React com um novo curso para iniciantes. Repetir é aprender.",
    },
    {
        id: "qua0810",
        label: "Qua, 08/10",
        content: "Curso 06 (1h20m) + Início Curso 07 (55m)",
        focus: "Transição para o Next.js! Dominando o básico e entendendo a estrutura de páginas.",
    },
    {
        id: "qui0910",
        label: "Qui, 09/10",
        content: "Curso 07 (2h15m)",
        focus: "Aprofundando em Next.js: navegação, estilização e estratégias de fetch.",
    },
    {
        id: "sex1010",
        label: "Sex, 10/10",
        content: "Curso 07 (2h15m)",
        focus: "Continuando com Next.js, explorando Server Actions, cache e autenticação.",
    },
    {
        id: "sab1110",
        label: "Sáb, 11/10",
        content: "Imersão Next.js - Sábado (11h)",
        focus: "Foco total no projeto NextGram e na conclusão dos módulos avançados do Next.js.",
        isIntensive: true,
    },
    {
        id: "dom1210",
        label: "Dom, 12/10",
        content: "Revisão e Prática - Domingo (6h30m)",
        focus: "Revisando os conceitos de React e Next.js aprendidos e iniciando o Curso 08.",
    },
    {
        id: "seg1310",
        label: "Seg, 13/10",
        content: "Curso 08 (2h15m)",
        focus: "Colocando a mão na massa com o primeiro projeto prático em Next.js.",
    },
    {
        id: "ter1410",
        label: "Ter, 14/10",
        content: "Curso 08 (2h15m)",
        focus: "Avançando no projeto de tarefas e entendendo a evolução para o diretório 'app'.",
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
        content: "Curso 08 (2h15m)",
        focus: "Retornando aos estudos com o projeto 'dalygames' e o sistema completo com CMS.",
    },
    {
        id: "sex1710",
        label: "Sex, 17/10",
        content: "Curso 08 (2h15m)",
        focus: "Continuando o desenvolvimento do sistema completo, focando na integração.",
    },
    {
        id: "sab1810",
        label: "Sáb, 18/10",
        content: "Imersão Projeto Final - Sábado (11h)",
        focus: "Dia de acelerar no projeto DevControle, um sistema completo do zero ao deploy.",
        isIntensive: true,
    },
    {
        id: "dom1910",
        label: "Dom, 19/10",
        content: "Conclusão e Preparação - Domingo (6h30m)",
        focus: "Finalizando o último projeto de Next.js e se preparando para a fase de TypeScript.",
    },
    {
        id: "seg2010",
        label: "Seg, 20/10",
        content: "Férias Intensivas - TypeScript (11h)",
        focus: "Começam as férias! Imersão total para dominar o TypeScript do zero ao avançado.",
        isVacation: true,
        isIntensive: true,
    },
    {
        id: "ter2110",
        label: "Ter, 21/10",
        content: "Férias Intensivas - React com TS (11h)",
        focus: "Aplicando o poder do TypeScript em projetos React. Foco na tipagem de componentes.",
        isVacation: true,
        isIntensive: true,
    },
    {
        id: "qua2210",
        label: "Qua, 22/10",
        content: "Férias Intensivas - React com TS (11h)",
        focus: "Avançando no curso prático de React com TypeScript, construindo aplicações robustas.",
        isVacation: true,
        isIntensive: true,
    },
    {
        id: "qui2310",
        label: "Qui, 23/10",
        content: "Férias Intensivas - Tailwind CSS (11h)",
        focus: "Dominando o Tailwind CSS! Aprendendo a estilizar de forma rápida e eficiente.",
        isVacation: true,
        isIntensive: true,
    },
    {
        id: "sex2410",
        label: "Sex, 24/10",
        content: "Férias Intensivas - Tailwind e Projetos (11h)",
        focus: "Finalizando o Tailwind e iniciando o grande projeto FullStack SaaS.",
        isVacation: true,
        isIntensive: true,
    },
    {
        id: "sab2510",
        label: "Sáb, 25/10",
        content: "Férias Intensivas - Projeto SaaS (11h)",
        focus: "Imersão no projeto SaaS com Next.js, TypeScript, Stripe e Prisma.",
        isVacation: true,
        isIntensive: true,
    },
    {
        id: "dom2610",
        label: "Dom, 26/10",
        content: "Férias Intensivas - Projeto SaaS (11h)",
        focus: "Continuando o desenvolvimento do SaaS. Foco na integração do backend com o frontend.",
        isVacation: true,
        isIntensive: true,
    },
    // ... Continuação do período de férias ...
    // Adicionei mais dias aqui para refletir o ritmo intensivo até 09/11
    {
        id: "seg2710",
        label: "Seg, 27/10",
        content: "Férias Intensivas - Testes e APIs (11h)",
        focus: "Aprendendo a testar aplicações React com Jest & Testing Library e explorando APIs REST/GraphQL.",
        isVacation: true,
        isIntensive: true,
    },
    {
        id: "ter2810",
        label: "Ter, 28/10",
        content: "Férias Intensivas - Roblox Studio (11h)",
        focus: "Hora de diversificar! Primeiros passos no Roblox Studio, entendendo a interface e programação básica.",
        isVacation: true,
        isIntensive: true,
    },
    {
        id: "qua2910",
        label: "Qua, 29/10",
        content: "Férias Intensivas - Roblox Studio (11h)",
        focus: "Avançando no Roblox: UI, Animação, Modelagem e salvando dados com DataStore.",
        isVacation: true,
        isIntensive: true,
    },
    {
        id: "qui3010",
        label: "Qui, 30/10",
        content: "Férias Intensivas - Roblox Studio (11h)",
        focus: "Criando jogos completos no Roblox, aplicando todo o conhecimento adquirido.",
        isVacation: true,
        isIntensive: true,
    },
    // Restante dos dias até o fim.
    {
        id: "sex3110",
        label: "Sex, 31/10",
        content: "Férias Intensivas - Reta Final Roblox (11h)",
        focus: "Praticando programação e monetização de jogos. Últimos dias de imersão total!",
        isVacation: true,
        isIntensive: true,
    },
    {
        id: "sab0111",
        label: "Sáb, 01/11",
        content: "Férias Intensivas - Revisão Geral (11h)",
        focus: "Dia de revisar os pontos mais importantes de toda a jornada e praticar livremente.",
        isVacation: true,
        isIntensive: true,
    },
    {
        id: "dom0211",
        label: "Dom, 02/11",
        content: "Férias Intensivas - Desafios (11h)",
        focus: "Resolvendo desafios de código para solidificar o conhecimento em JS, React e Next.",
        isVacation: true,
        isIntensive: true,
    },
    // Adicionei mais alguns dias para preencher o período de férias até 09/11 e finalizar
    {
        id: "seg0311",
        label: "Seg, 03/11",
        content: "JORNADA CONCLUÍDA!",
        focus: "Parabéns! Você completou todos os cursos com uma dedicação incrível. Missão cumprida!",
        isCompleted: true,
    },
];


export default function PlanoEstudoPage() {
  const [activeTab, setActiveTab] = useState("ter3009")

  // Função para aplicar estilos diferentes aos botões (abas) com base no tipo de dia.
  // Isso deixa a interface mais informativa e agradável.
  const getTabStyle = (day: StudyDay) => {
    if (day.isBirthday) return "bg-pink-100 border-pink-300 text-pink-700"
    if (day.isCompleted) return "bg-green-100 border-green-300 text-green-700"
    if (day.isVacation) return "bg-blue-100 border-blue-300 text-blue-700"
    if (day.isIntensive) return "bg-orange-100 border-orange-300 text-orange-700"
    if (day.isSpecial) return "bg-purple-100 border-purple-300 text-purple-700"
    return "bg-slate-100 border-slate-300 text-slate-700"
  }

  // Função similar à anterior, mas para o painel de conteúdo.
  const getContentStyle = (day: StudyDay) => {
    if (day.isBirthday) return "bg-pink-50 border-l-pink-500"
    if (day.isCompleted) return "bg-green-50 border-l-green-500"
    if (day.isVacation) return "bg-blue-50 border-l-blue-500"
    if (day.isIntensive) return "bg-orange-50 border-l-orange-500"
    if (day.isSpecial) return "bg-purple-50 border-l-purple-500"
    return "bg-slate-50 border-l-slate-500"
  }

  // Encontra o objeto do dia ativo para exibir seu conteúdo.
  const activeDay = studyDays.find((day) => day.id === activeTab)

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 md:ml-64 p-4 sm:p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">
            Plano de Estudos - Jornada Full-Stack (v12 - Início 30/09)
          </h1>
          <p className="text-slate-600 mb-8">
            Seu cronograma recalculado, com o novo início em <strong>30 de Setembro de 2025</strong> e o período de férias
            intensivo.
          </p>

          {/* Abas com os dias de estudo */}
          <div className="flex flex-wrap border-b border-slate-200 mb-8 overflow-x-auto gap-1">
            {studyDays.map((day) => (
              <Button
                key={day.id}
                variant="ghost"
                size="sm"
                className={`rounded-t-md border-b-2 border-transparent whitespace-nowrap text-xs px-3 py-2 h-auto ${
                  activeTab === day.id ? `font-bold border-blue-500 ${getTabStyle(day)}` : "hover:bg-slate-100"
                }`}
                onClick={() => setActiveTab(day.id)}
              >
                {day.label}
              </Button>
            ))}
          </div>

          {/* Conteúdo do dia selecionado */}
          {activeDay && (
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300">
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-slate-800 mb-4">{activeDay.label}</h2>

                <div className="bg-slate-50 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-slate-700 mb-2">🗓️ Conteúdo do Dia</h3>
                  <p className="text-slate-600">{activeDay.content}</p>
                </div>

                <div className={`p-4 rounded-lg border-l-4 ${getContentStyle(activeDay)}`}>
                  <h4 className="font-semibold text-slate-700 mb-2">🎯 Foco:</h4>
                  <p className="text-slate-600">{activeDay.focus}</p>
                </div>

                {/* Mensagens dinâmicas baseadas no tipo de dia */}
                {activeDay.isIntensive && !activeDay.isVacation && (
                  <div className="mt-4 bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <p className="text-orange-700 text-sm font-medium">
                      🚀 Ritmo Intensivo: Dia de estudo estendido. Mantenha a hidratação e faça pausas regulares.
                    </p>
                  </div>
                )}
                
                {activeDay.isVacation && (
                  <div className="mt-4 bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <p className="text-blue-700 text-sm font-medium">
                      ✈️ Modo Férias Ativado! Ritmo super intensivo. Aproveite ao máximo cada hora de estudo!
                    </p>
                  </div>
                )}

                {!activeDay.isIntensive && !activeDay.isSpecial && !activeDay.isBirthday && !activeDay.isCompleted && !activeDay.isVacation && (
                  <div className="mt-4 bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <p className="text-slate-600 text-sm font-medium">🕒 Ritmo Normal: Foco de 2h 15m com consistência.</p>
                  </div>
                )}

                {activeDay.isBirthday && (
                  <div className="mt-4 bg-pink-50 p-4 rounded-lg border border-pink-200">
                    <p className="text-pink-700 text-sm font-medium">🎉 Feliz Aniversário! Aproveite muito o seu dia.</p>
                  </div>
                )}
                
                {activeDay.isSpecial && (
                  <div className="mt-4 bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <p className="text-purple-700 text-sm font-medium">⭐ Evento Especial: Um dia diferente na sua jornada. Boa sorte!</p>
                  </div>
                )}

                {activeDay.isCompleted && (
                  <div className="mt-4 bg-green-50 p-4 rounded-lg border border-green-200">
                    <p className="text-green-700 text-sm font-medium">
                      🏆 Parabéns pela incrível dedicação! É hora de celebrar e planejar seus próximos passos como dev! Você conseguiu!
                    </p>
                  </div>
                )}

              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}