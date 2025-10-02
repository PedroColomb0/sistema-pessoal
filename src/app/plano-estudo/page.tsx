// src/app/plano-estudo/page.tsx

"use client"

import { useState } from "react"
// 💡 Garanta que os caminhos para 'Sidebar' e 'Button' estão corretos
import { Sidebar } from "@/components/sidebar" 
import { Button } from "@/components/ui/button" 

// 🎯 Importando a interface e os dados do arquivo dedicado
import { studyDays, StudyDay } from "@/data/study-schedule" 


export default function PlanoEstudoPage() {
    // Definindo o estado inicial para a primeira aba do array de estudos.
    const [activeTab, setActiveTab] = useState(studyDays[0].id) 

    // Função para aplicar estilos de botão com base no tipo de dia.
    const getTabStyle = (day: StudyDay) => {
        if (day.isBirthday) return "bg-pink-100 border-pink-300 text-pink-700"
        if (day.isCompleted) return "bg-green-100 border-green-300 text-green-700"
        if (day.isVacation) return "bg-blue-100 border-blue-300 text-blue-700"
        if (day.isIntensive) return "bg-orange-100 border-orange-300 text-orange-700"
        if (day.isSpecial) return "bg-purple-100 border-purple-300 text-purple-700"
        return "bg-slate-100 border-slate-300 text-slate-700"
    }

    // Função para aplicar estilos de fundo e barra lateral ao painel de conteúdo.
    const getContentStyle = (day: StudyDay) => {
        if (day.isBirthday) return "bg-pink-50 border-l-pink-500"
        if (day.isCompleted) return "bg-green-50 border-l-green-500"
        if (day.isVacation) return "bg-blue-50 border-l-blue-500"
        if (day.isIntensive) return "bg-orange-50 border-l-orange-500"
        if (day.isSpecial) return "bg-purple-50 border-l-purple-500"
        return "bg-slate-50 border-l-slate-500"
    }

    // Encontra o objeto do dia ativo (o dia selecionado) para exibir seu conteúdo.
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
                                onClick={() => setActiveTab(day.id)}
                                // Estilos dinâmicos para a aba ativa e os tipos de dia
                                className={`rounded-t-md border-b-2 border-transparent whitespace-nowrap text-xs px-3 py-2 h-auto transition-all duration-150 ${
                                    activeTab === day.id 
                                        ? `font-bold border-blue-500 ${getTabStyle(day)}` 
                                        : "hover:bg-slate-100 bg-slate-50 text-slate-600"
                                }`}
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

                                {/* Mensagens dinâmicas baseadas no tipo de dia (intensivo, férias, etc.) */}
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