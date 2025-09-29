"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"

const studyDays = [
  {
    id: "ter3009",
    label: "Ter, 30/09",
    content: "Concluir Curso 01 (2h 15m)",
    focus: "Começar a jornada com a base de JavaScript.",
  },
  {
    id: "qua0110",
    label: "Qua, 01/10",
    content: "Iniciar Curso 02 (2h 15m)",
    focus: "Avançar no curso completo de JavaScript, do zero ao avançado.",
  },
  {
    id: "qui0210",
    label: "Qui, 02/10",
    content: "Dia Intensivo - 9h",
    focus: "Horário de estudo especial hoje.",
    isIntensive: true,
  },
  {
    id: "sex0310",
    label: "Sex, 03/10",
    content: "Concluir Curso 04 (36m) + Iniciar Curso 05 (1h 39m)",
    focus: "Finalizar a base de React e iniciar o próximo módulo.",
  },
  {
    id: "sab0410",
    label: "Sáb, 04/10",
    content: "Imersão Next.js - 9h",
    focus: "Imersão completa em Next.js",
    isIntensive: true,
  },
  {
    id: "dom0510",
    label: "Dom, 05/10",
    content: "Dia de Concurso!",
    focus: "Pausa nos estudos. Boa sorte na prova e aproveite para descansar!",
    isSpecial: true,
  },
  {
    id: "seg0610",
    label: "Seg, 06/10",
    content: "Avançar Curso 07 (2h 15m)",
    focus: "Continuar o curso avançado de Next.js.",
  },
  {
    id: "ter0710",
    label: "Ter, 07/10",
    content: "Concluir Curso 07 + Iniciar Curso 08",
    focus: "Finalizar Next.js avançado e começar os projetos práticos.",
  },
  {
    id: "qua0810",
    label: "Qua, 08/10",
    content: "Avançar Curso 08 (2h 15m)",
    focus: "Continuar com os projetos práticos do Curso 08.",
  },
  {
    id: "qui0910",
    label: "Qui, 09/10",
    content: "Imersão Projetos - 9h",
    focus: "Foco intensivo nos projetos",
    isIntensive: true,
  },
  {
    id: "sex1010",
    label: "Sex, 10/10",
    content: "Avançar Curso 08 (2h 15m)",
    focus: "Foco no sistema completo com CMS.",
  },
  {
    id: "sab1110",
    label: "Sáb, 11/10",
    content: "Imersão Projetos - 9h",
    focus: "Continuação dos projetos",
    isIntensive: true,
  },
  {
    id: "dom1210",
    label: "Dom, 12/10",
    content: "Imersão Final - 7h",
    focus: "Finalização dos projetos",
    isIntensive: true,
  },
  {
    id: "seg1310",
    label: "Seg, 13/10",
    content: "Avançar Curso 09 (2h 15m)",
    focus: "Aprofundar nos conceitos e tipos do TypeScript.",
  },
  {
    id: "ter1410",
    label: "Ter, 14/10",
    content: "Concluir Curso 09 + Iniciar Curso 10",
    focus: "Finalizar TypeScript e já começar a aplicá-lo com React.",
  },
  {
    id: "qua1510",
    label: "Qua, 15/10",
    content: "Dia de Descanso!",
    focus: "Pausa merecida para comemorar seu aniversário!",
    isBirthday: true,
  },
  {
    id: "qui1610",
    label: "Qui, 16/10",
    content: "Imersão React com TS - 9h",
    focus: "Volta aos estudos com React e TypeScript",
    isIntensive: true,
  },
  {
    id: "sex1710",
    label: "Sex, 17/10",
    content: "Avançar Curso 10 (2h 15m)",
    focus: "Avançar nos projetos práticos de React com TypeScript.",
  },
  {
    id: "sab1810",
    label: "Sáb, 18/10",
    content: "Finalizando React com TS - 9h",
    focus: "Finalização do React com TypeScript",
    isIntensive: true,
  },
  {
    id: "dom1910",
    label: "Dom, 19/10",
    content: "Imersão Tailwind - 7h",
    focus: "Foco no Tailwind CSS",
    isIntensive: true,
  },
  {
    id: "seg2010",
    label: "Seg, 20/10",
    content: "Férias Intensivas - 9h",
    focus: "Modo Férias Ativado! A partir de hoje, o ritmo é intensivo todos os dias.",
    isVacation: true,
  },
  {
    id: "ter2110",
    label: "Ter, 21/10",
    content: "Férias Intensivas - 9h",
    focus: "Continuação do modo férias",
    isVacation: true,
  },
  {
    id: "qua2210",
    label: "Qua, 22/10",
    content: "Férias Intensivas - 9h",
    focus: "Continuação do modo férias",
    isVacation: true,
  },
  {
    id: "qui2310",
    label: "Qui, 23/10",
    content: "Férias Intensivas - 9h",
    focus: "Revisão Geral e Prática Livre",
    isVacation: true,
  },
  {
    id: "sex2410",
    label: "Sex, 24/10",
    content: "JORNADA CONCLUÍDA!",
    focus: "Parabéns pela incrível dedicação e por completar todos os cursos!",
    isCompleted: true,
  },
]

export default function PlanoEstudoPage() {
  const [activeTab, setActiveTab] = useState("ter3009")

  const getTabStyle = (day: any) => {
    if (day.isBirthday) return "bg-pink-100 border-pink-300 text-pink-700"
    if (day.isCompleted) return "bg-green-100 border-green-300 text-green-700"
    if (day.isVacation) return "bg-blue-100 border-blue-300 text-blue-700"
    if (day.isIntensive) return "bg-orange-100 border-orange-300 text-orange-700"
    if (day.isSpecial) return "bg-purple-100 border-purple-300 text-purple-700"
    return "bg-slate-100 border-slate-300 text-slate-700"
  }

  const getContentStyle = (day: any) => {
    if (day.isBirthday) return "bg-pink-50 border-l-pink-500"
    if (day.isCompleted) return "bg-green-50 border-l-green-500"
    if (day.isVacation) return "bg-blue-50 border-l-blue-500"
    if (day.isIntensive) return "bg-orange-50 border-l-orange-500"
    if (day.isSpecial) return "bg-purple-50 border-l-purple-500"
    return "bg-slate-50 border-l-slate-500"
  }

  const activeDay = studyDays.find((day) => day.id === activeTab)

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 md:ml-64 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">
            Plano de Estudos - Jornada Full-Stack (v11 - Início 30/09)
          </h1>
          <p className="text-slate-600 mb-8">
            Seu cronograma recalculado, com o novo início em <strong>30 de Setembro de 2025</strong> e período de férias
            intensivo.
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap border-b border-slate-200 mb-8 overflow-x-auto gap-1">
            {studyDays.map((day) => (
              <Button
                key={day.id}
                variant="ghost"
                size="sm"
                className={`rounded-none border-b-2 border-transparent whitespace-nowrap text-xs px-2 py-1 ${
                  activeTab === day.id ? `border-blue-500 ${getTabStyle(day)}` : "hover:bg-slate-100"
                }`}
                onClick={() => setActiveTab(day.id)}
              >
                {day.label}
              </Button>
            ))}
          </div>

          {/* Content */}
          {activeDay && (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-slate-800 mb-4">{activeDay.label}</h2>

                <div className="bg-slate-50 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-slate-700 mb-2">Conteúdo do Dia</h3>
                  <p className="text-slate-600">{activeDay.content}</p>
                </div>

                <div className={`p-4 rounded-lg border-l-4 ${getContentStyle(activeDay)}`}>
                  <h4 className="font-semibold text-slate-700 mb-2">Foco:</h4>
                  <p className="text-slate-600">{activeDay.focus}</p>
                </div>

                {activeDay.isIntensive && (
                  <div className="mt-4 bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <p className="text-orange-700 text-sm font-medium">
                      Ritmo: Ciclos de 50min de Foco + 10min de Pausa.
                    </p>
                  </div>
                )}

                {!activeDay.isIntensive && !activeDay.isSpecial && !activeDay.isBirthday && !activeDay.isCompleted && (
                  <div className="mt-4 bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <p className="text-slate-600 text-sm font-medium">Ritmo: Foco de 2h 15m com pequenas pausas.</p>
                  </div>
                )}

                {activeDay.isBirthday && (
                  <div className="mt-4 bg-pink-50 p-4 rounded-lg border border-pink-200">
                    <p className="text-pink-700 text-sm font-medium">Feliz Aniversário! Aproveite o seu dia.</p>
                  </div>
                )}

                {activeDay.isCompleted && (
                  <div className="mt-4 bg-green-50 p-4 rounded-lg border border-green-200">
                    <p className="text-green-700 text-sm font-medium">
                      Parabéns pela incrível dedicação e por completar todos os cursos. É hora de celebrar e planejar
                      seus próximos passos como dev! Você conseguiu!
                    </p>
                  </div>
                )}

                {activeDay.isVacation && (
                  <div className="mt-4 bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <p className="text-blue-700 text-sm font-medium">
                      Modo Férias Ativado! Ritmo intensivo de estudos.
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
