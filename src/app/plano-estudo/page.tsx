// src/app/plano-estudo/page.tsx ou onde seu componente estiver localizado

"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar" // Verifique se o caminho está correto
import { Button } from "@/components/ui/button" // Verifique se o caminho está correto

// Interface para garantir que todos os objetos de dia de estudo tenham o mesmo formato.
interface StudyDay {
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

// Array com o novo plano de estudos, recalculado com o progresso detalhado dos cursos.
const studyDays: StudyDay[] = [
    {
        id: "qui0210",
        label: "Qui, 02/10",
        content: "Concluir Curso 02 (35m) + Curso 03 (1h25m) + Avançar Curso 04 (7h)",
        focus: "Aproveitando o feriado para acelerar nos horários das 9h às 12h e 14h às 20h! Finalizando JS, revisão pré-React e uma imersão profunda no Curso 04.",
        isIntensive: true,
    },
    {
        id: "sex0310",
        label: "Sex, 03/10",
        content: "Avançar Curso 04 (4h55m)",
        focus: "Dando continuidade aos estudos de React, focando nos conceitos de componentes e estado, nos horários das 04:15 às 06:10 e das 20:00 às 23:00.",
    },
    {
        id: "sab0410",
        label: "Sáb, 04/10",
        content: "Concluir C.04 (36m) + C.05 (2h25m) + C.06 (1h20m) + Avançar C.07 (6h39m)",
        focus: "Dia de maratona! Finalizando vários cursos e mergulhando de cabeça no Next.js.",
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


export default function PlanoEstudoPage() {
  const [activeTab, setActiveTab] = useState("qui0210")

  // Função para aplicar estilos diferentes aos botões (abas) com base no tipo de dia.
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
            Plano de Estudos - Jornada Full-Stack (v13 - Detalhado)
          </h1>
          <p className="text-slate-600 mb-8">
            Seu cronograma recalculado, com o novo início em <strong>02 de Outubro de 2025</strong> e o progresso detalhado dos cursos.
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