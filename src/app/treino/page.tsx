"use client"

import { useState, useEffect } from "react"
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Check, Droplets } from "lucide-react"

const waterTips = [
  { time: "04:30 - 06:30", volume: 600, label: "600ML" },
  { time: "07:30 - 11:00", volume: 600, label: "600ML" },
  { time: "12:00 - 13:00", volume: 600, label: "600ML" },
  { time: "14:00 - 15:00", volume: 600, label: "600ML" },
  { time: "15:00 - 18:00", volume: 600, label: "600ML" },
  { time: "18:00 - 20:00", volume: 1200, label: "1200ML" },
  { time: "SOMA", volume: 4200, label: "4.200ML" },
]

export default function TreinoPage() {
  const [activeTab, setActiveTab] = useState("seg")
  const [waterProgress, setWaterProgress] = useState<Record<number, boolean>>({})

  useEffect(() => {
    const saved = localStorage.getItem("waterProgress")
    if (saved) {
      setWaterProgress(JSON.parse(saved))
    }
  }, [])

  const toggleWaterTip = (index: number) => {
    const newProgress = {
      ...waterProgress,
      [index]: !waterProgress[index],
    }
    setWaterProgress(newProgress)
    localStorage.setItem("waterProgress", JSON.stringify(newProgress))
  }

  const getTotalWaterConsumed = () => {
    return waterTips.reduce((total, tip, index) => {
      return total + (waterProgress[index] ? tip.volume : 0)
    }, 0)
  }

  const getWaterProgressPercent = () => {
    return Math.min((getTotalWaterConsumed() / 3900) * 100, 100)
  }

  const tabs = [
    { id: "seg", label: "SEGUNDA" },
    { id: "ter", label: "TERÇA" },
    { id: "qua", label: "QUARTA" },
    { id: "qui", label: "QUINTA" },
    { id: "sex", label: "SEXTA" },
    { id: "sab", label: "SÁBADO" },
    { id: "bike", label: "TREINO BIKE" },
  ]

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 md:ml-64 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-red-500 mb-8 text-center">Planejamento de Treino Semanal</h1>

          {/* Tabs */}
          <div className="flex flex-wrap border-b border-slate-200 mb-8 overflow-x-auto">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                className={`rounded-none border-b-2 border-transparent whitespace-nowrap ${
                  activeTab === tab.id ? "bg-red-500 text-white border-red-500" : "hover:bg-slate-100"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </Button>
            ))}
          </div>

          {/* Segunda */}
          {activeTab === "seg" && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-lg text-slate-600 mb-6 pb-2 border-b border-dashed border-slate-300">
                Peito + Tríceps + Core
              </div>

              <div className="space-y-6">
                <div className="border-b border-slate-100 pb-4">
                  <div className="font-bold text-slate-800 text-lg mb-2">Bicicleta Ergométrica (Sentado)</div>
                  <div className="grid grid-cols-3 gap-4 text-sm text-slate-600 mb-2">
                    <span>1x</span>
                    <span>10-15 min</span>
                    <span>Leve</span>
                  </div>
                  <div className="text-sm text-slate-500 italic pl-3 border-l-3 border-slate-200">
                    Aquecimento de baixo impacto para preparar o corpo.
                  </div>
                </div>

                <div className="border-b border-slate-100 pb-4">
                  <div className="font-bold text-slate-800 text-lg mb-2">Supino Reto com Halteres</div>
                  <div className="grid grid-cols-3 gap-4 text-sm text-slate-600 mb-2">
                    <span>3x</span>
                    <span>12</span>
                    <span>-</span>
                  </div>
                  <div className="text-sm text-slate-500 italic pl-3 border-l-3 border-slate-200">
                    Movimento controlado, sem sobrecarregar a lombar ao deitar/levantar do banco.
                  </div>
                </div>

                <div className="border-b border-slate-100 pb-4">
                  <div className="font-bold text-slate-800 text-lg mb-2">Peck Deck (Voador)</div>
                  <div className="grid grid-cols-3 gap-4 text-sm text-slate-600 mb-2">
                    <span>4x</span>
                    <span>12</span>
                    <span>-</span>
                  </div>
                  <div className="text-sm text-slate-500 italic pl-3 border-l-3 border-slate-200">
                    Mantenha os ombros para trás e foque na contração do peitoral.
                  </div>
                </div>

                <div className="border-b border-slate-100 pb-4">
                  <div className="font-bold text-slate-800 text-lg mb-2">Tríceps Pulley (com corda)</div>
                  <div className="grid grid-cols-3 gap-4 text-sm text-slate-600 mb-2">
                    <span>3x</span>
                    <span>15</span>
                    <span>-</span>
                  </div>
                  <div className="text-sm text-slate-500 italic pl-3 border-l-3 border-slate-200">
                    Mantenha os cotovelos fixos ao lado do corpo.
                  </div>
                </div>

                <div className="border-b border-slate-100 pb-4">
                  <div className="font-bold text-slate-800 text-lg mb-2">Prancha Frontal</div>
                  <div className="grid grid-cols-3 gap-4 text-sm text-slate-600 mb-2">
                    <span>3x</span>
                    <span>45 seg</span>
                    <span>Corpo</span>
                  </div>
                  <div className="text-sm text-slate-500 italic pl-3 border-l-3 border-slate-200">
                    Contraia o abdômen e os glúteos. Não deixe o quadril cair.
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <div className="text-red-700 text-sm">
                  Foco: Fortalecimento de superiores com estabilização do core.
                </div>
              </div>
            </div>
          )}

          {/* Terça */}
          {activeTab === "ter" && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-lg text-slate-600 mb-6 pb-2 border-b border-dashed border-slate-300">
                Pernas (Ênfase: Posterior e Glúteo) + Cardio
              </div>

              <div className="space-y-6">
                <div className="border-b border-slate-100 pb-4">
                  <div className="font-bold text-slate-800 text-lg mb-2">Cadeira Flexora</div>
                  <div className="grid grid-cols-3 gap-4 text-sm text-slate-600 mb-2">
                    <span>4x</span>
                    <span>12</span>
                    <span>-</span>
                  </div>
                  <div className="text-sm text-slate-500 italic pl-3 border-l-3 border-slate-200">
                    Concentre-se em "puxar" com o posterior da coxa, movimento lento.
                  </div>
                </div>

                <div className="border-b border-slate-100 pb-4">
                  <div className="font-bold text-slate-800 text-lg mb-2">Leg Press 45°</div>
                  <div className="grid grid-cols-3 gap-4 text-sm text-slate-600 mb-2">
                    <span>4x</span>
                    <span>12</span>
                    <span>-</span>
                  </div>
                  <div className="text-sm text-slate-500 italic pl-3 border-l-3 border-slate-200">
                    Pés posicionados mais altos na plataforma para focar em glúteos e posteriores. Não desça demais para
                    não curvar a lombar.
                  </div>
                </div>

                <div className="border-b border-slate-100 pb-4">
                  <div className="font-bold text-slate-800 text-lg mb-2">Elevação Pélvica</div>
                  <div className="grid grid-cols-3 gap-4 text-sm text-slate-600 mb-2">
                    <span>4x</span>
                    <span>15</span>
                    <span>-</span>
                  </div>
                  <div className="text-sm text-slate-500 italic pl-3 border-l-3 border-slate-200">
                    Pode ser feita no chão ou com as costas apoiadas num banco. Contraia bem os glúteos no topo.
                  </div>
                </div>

                <div className="border-b border-slate-100 pb-4">
                  <div className="font-bold text-slate-800 text-lg mb-2">Cadeira Abdutora</div>
                  <div className="grid grid-cols-3 gap-4 text-sm text-slate-600 mb-2">
                    <span>3x</span>
                    <span>15</span>
                    <span>-</span>
                  </div>
                  <div className="text-sm text-slate-500 italic pl-3 border-l-3 border-slate-200">
                    Incline o tronco ligeiramente para a frente para ativar mais o glúteo.
                  </div>
                </div>

                <div className="border-b border-slate-100 pb-4">
                  <div className="font-bold text-slate-800 text-lg mb-2">Bicicleta Ergométrica (Sentado)</div>
                  <div className="grid grid-cols-3 gap-4 text-sm text-slate-600 mb-2">
                    <span>1x</span>
                    <span>20 min</span>
                    <span>Leve</span>
                  </div>
                  <div className="text-sm text-slate-500 italic pl-3 border-l-3 border-slate-200">
                    Cardio de baixo impacto para finalizar.
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <div className="text-red-700 text-sm">
                  Foco: Glúteos e posteriores para aliviar a sobrecarga na lombar.
                </div>
              </div>
            </div>
          )}

          {/* Continue with other days... */}
          {activeTab === "bike" && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-lg text-slate-600 mb-6 pb-2 border-b border-dashed border-slate-300">
                Cardio Intervalado (HIIT) na Bicicleta
              </div>

              <div className="space-y-6">
                <div className="border-b border-slate-100 pb-4">
                  <div className="font-bold text-slate-800 text-lg mb-2">1. Aquecimento</div>
                  <div className="grid grid-cols-3 gap-4 text-sm text-slate-600 mb-2">
                    <span>1x</span>
                    <span>5 min</span>
                    <span>Leve</span>
                  </div>
                  <div className="text-sm text-slate-500 italic pl-3 border-l-3 border-slate-200">
                    Comece girando em um ritmo bem leve e constante, apenas para aquecer os músculos e articulações.
                  </div>
                </div>

                <div className="border-b border-slate-100 pb-4">
                  <div className="font-bold text-slate-800 text-lg mb-2">2. Parte Principal: Intervalos</div>
                  <div className="grid grid-cols-3 gap-4 text-sm text-slate-600 mb-2">
                    <span>6 a 8x</span>
                    <span>2 min</span>
                    <span>Variado</span>
                  </div>
                  <div className="text-sm text-slate-500 italic pl-3 border-l-3 border-slate-200">
                    Repita o ciclo abaixo de 6 a 8 vezes:
                    <br />
                    <strong>- 30 segundos:</strong> Ritmo FORTE. Aumente a carga/velocidade para um nível desafiador,
                    onde você fica bem ofegante.
                    <br />
                    <strong>- 1 minuto e 30 segundos:</strong> Ritmo LEVE. Reduza a carga/velocidade para se recuperar
                    para o próximo tiro.
                  </div>
                </div>

                <div className="border-b border-slate-100 pb-4">
                  <div className="font-bold text-slate-800 text-lg mb-2">3. Desaquecimento</div>
                  <div className="grid grid-cols-3 gap-4 text-sm text-slate-600 mb-2">
                    <span>1x</span>
                    <span>5 min</span>
                    <span>Leve</span>
                  </div>
                  <div className="text-sm text-slate-500 italic pl-3 border-l-3 border-slate-200">
                    Após o último ciclo, continue girando em um ritmo bem leve para baixar a frequência cardíaca aos
                    poucos e ajudar na recuperação.
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <div className="text-red-700 text-sm">
                  <strong>Foco do Treino:</strong> Aumentar o condicionamento cardiovascular (fôlego) e a queima de
                  calorias de forma eficiente.
                  <br />
                  <br />
                  <strong>Importante:</strong> Mantenha sempre a postura correta, com a coluna reta e bem apoiada no
                  banco. Comece com 6 repetições e, conforme for ficando mais fácil, aumente para 7, depois 8, ou
                  aumente um pouco a intensidade dos tiros. Ouça seu corpo!
                </div>
              </div>
            </div>
          )}

          {/* Water Tracker */}
          <div className="mt-12 bg-blue-50 rounded-lg p-6">
            <div className="flex items-center gap-2 text-blue-700 font-bold mb-4 text-lg">
              <Droplets className="w-5 h-5" />
              Hidratação Diária
            </div>

            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm">Meta: 6 garrafas (3,9L)</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm">Progresso:</span>
              <div className="flex-1 h-6 bg-blue-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 transition-all duration-500"
                  style={{ width: `${getWaterProgressPercent()}%` }}
                />
              </div>
              <span className="text-sm font-medium">{(getTotalWaterConsumed() / 1000).toFixed(1)}L / 3,9L</span>
            </div>

            <div className="space-y-2">
              {waterTips.map((tip, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 text-sm ${
                    waterProgress[index] ? "line-through text-slate-500" : ""
                  }`}
                >
                  <button
                    onClick={() => toggleWaterTip(index)}
                    className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-colors ${
                      waterProgress[index] ? "bg-blue-500 border-blue-500" : "border-slate-300 hover:border-blue-400"
                    }`}
                  >
                    {waterProgress[index] && <Check className="w-3 h-3 text-white" />}
                  </button>
                  <strong>
                    {tip.time} | {tip.label}
                  </strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
