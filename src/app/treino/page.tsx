"use client"

import { useState, useEffect } from "react"
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Check, Droplets, Play } from "lucide-react"
import { VideoModal } from "@/components/video-modal"

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
  const [videoModal, setVideoModal] = useState<{ isOpen: boolean; exerciseName: string }>({
    isOpen: false,
    exerciseName: "",
  })

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

  const openVideoModal = (exerciseName: string) => {
    setVideoModal({ isOpen: true, exerciseName })
  }

  const closeVideoModal = () => {
    setVideoModal({ isOpen: false, exerciseName: "" })
  }

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 md:ml-72 p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-red-500 mb-8 text-center">Planejamento de Treino Semanal</h1>

          {/* Tabs */}
          <div className="flex flex-wrap border-b border-border mb-8 overflow-x-auto bg-card rounded-t-lg">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                className={`rounded-none border-b-2 border-transparent whitespace-nowrap transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-red-500 text-white border-red-500 shadow-sm"
                    : "hover:bg-muted text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </Button>
            ))}
          </div>

          {/* Segunda */}
          {activeTab === "seg" && (
            <div className="bg-card rounded-lg shadow-lg border border-border p-6">
              <div className="text-lg text-muted-foreground mb-6 pb-2 border-b border-dashed border-border">
                Peito + Tríceps + Core
              </div>

              <div className="space-y-6">
                <div className="border-b border-border/50 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold text-foreground text-lg">Bicicleta Ergométrica (Sentado)</div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openVideoModal("Bicicleta Ergométrica (Sentado)")}
                      className="flex items-center gap-2 hover:bg-red-50 hover:border-red-200 hover:text-red-600 dark:hover:bg-red-950 dark:hover:border-red-800"
                    >
                      <Play className="h-3 w-3" />
                      Ver Vídeo
                    </Button>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground mb-2">
                    <span className="font-medium">1x</span>
                    <span className="font-medium">10-15 min</span>
                    <span className="font-medium">Leve</span>
                  </div>
                  <div className="text-sm text-muted-foreground italic pl-3 border-l-4 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 p-2 rounded-r">
                    Aquecimento de baixo impacto para preparar o corpo.
                  </div>
                </div>

                <div className="border-b border-border/50 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold text-foreground text-lg">Supino Reto com Halteres</div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openVideoModal("Supino Reto com Halteres")}
                      className="flex items-center gap-2 hover:bg-red-50 hover:border-red-200 hover:text-red-600 dark:hover:bg-red-950 dark:hover:border-red-800"
                    >
                      <Play className="h-3 w-3" />
                      Ver Vídeo
                    </Button>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground mb-2">
                    <span className="font-medium">3x</span>
                    <span className="font-medium">12</span>
                    <span className="font-medium">-</span>
                  </div>
                  <div className="text-sm text-muted-foreground italic pl-3 border-l-4 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 p-2 rounded-r">
                    Movimento controlado, sem sobrecarregar a lombar ao deitar/levantar do banco.
                  </div>
                </div>

                <div className="border-b border-border/50 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold text-foreground text-lg">Peck Deck (Voador)</div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openVideoModal("Peck Deck (Voador)")}
                      className="flex items-center gap-2 hover:bg-red-50 hover:border-red-200 hover:text-red-600 dark:hover:bg-red-950 dark:hover:border-red-800"
                    >
                      <Play className="h-3 w-3" />
                      Ver Vídeo
                    </Button>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground mb-2">
                    <span className="font-medium">4x</span>
                    <span className="font-medium">12</span>
                    <span className="font-medium">-</span>
                  </div>
                  <div className="text-sm text-muted-foreground italic pl-3 border-l-4 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 p-2 rounded-r">
                    Mantenha os ombros para trás e foque na contração do peitoral.
                  </div>
                </div>

                <div className="border-b border-border/50 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold text-foreground text-lg">Tríceps Pulley (com corda)</div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openVideoModal("Tríceps Pulley (com corda)")}
                      className="flex items-center gap-2 hover:bg-red-50 hover:border-red-200 hover:text-red-600 dark:hover:bg-red-950 dark:hover:border-red-800"
                    >
                      <Play className="h-3 w-3" />
                      Ver Vídeo
                    </Button>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground mb-2">
                    <span className="font-medium">3x</span>
                    <span className="font-medium">15</span>
                    <span className="font-medium">-</span>
                  </div>
                  <div className="text-sm text-muted-foreground italic pl-3 border-l-4 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 p-2 rounded-r">
                    Mantenha os cotovelos fixos ao lado do corpo.
                  </div>
                </div>

                <div className="border-b border-border/50 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold text-foreground text-lg">Prancha Frontal</div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openVideoModal("Prancha Frontal")}
                      className="flex items-center gap-2 hover:bg-red-50 hover:border-red-200 hover:text-red-600 dark:hover:bg-red-950 dark:hover:border-red-800"
                    >
                      <Play className="h-3 w-3" />
                      Ver Vídeo
                    </Button>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground mb-2">
                    <span className="font-medium">3x</span>
                    <span className="font-medium">45 seg</span>
                    <span className="font-medium">Corpo</span>
                  </div>
                  <div className="text-sm text-muted-foreground italic pl-3 border-l-4 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 p-2 rounded-r">
                    Contraia o abdômen e os glúteos. Não deixe o quadril cair.
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border-l-4 border-red-500">
                <div className="text-red-700 dark:text-red-300 text-sm font-medium">
                  Foco: Fortalecimento de superiores com estabilização do core.
                </div>
              </div>
            </div>
          )}

          {/* Terça */}
          {activeTab === "ter" && (
            <div className="bg-card rounded-lg shadow-lg border border-border p-6">
              <div className="text-lg text-muted-foreground mb-6 pb-2 border-b border-dashed border-border">
                Pernas (Ênfase: Posterior e Glúteo) + Cardio
              </div>

              <div className="space-y-6">
                <div className="border-b border-border/50 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold text-foreground text-lg">Cadeira Flexora</div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openVideoModal("Cadeira Flexora")}
                      className="flex items-center gap-2 hover:bg-red-50 hover:border-red-200 hover:text-red-600 dark:hover:bg-red-950 dark:hover:border-red-800"
                    >
                      <Play className="h-3 w-3" />
                      Ver Vídeo
                    </Button>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground mb-2">
                    <span className="font-medium">4x</span>
                    <span className="font-medium">12</span>
                    <span className="font-medium">-</span>
                  </div>
                  <div className="text-sm text-muted-foreground italic pl-3 border-l-4 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 p-2 rounded-r">
                    {/* CORRIGIDO */}
                    Concentre-se em &quot;puxar&quot; com o posterior da coxa, movimento lento.
                  </div>
                </div>

                <div className="border-b border-border/50 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold text-foreground text-lg">Leg Press 45°</div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openVideoModal("Leg Press 45°")}
                      className="flex items-center gap-2 hover:bg-red-50 hover:border-red-200 hover:text-red-600 dark:hover:bg-red-950 dark:hover:border-red-800"
                    >
                      <Play className="h-3 w-3" />
                      Ver Vídeo
                    </Button>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground mb-2">
                    <span className="font-medium">4x</span>
                    <span className="font-medium">12</span>
                    <span className="font-medium">-</span>
                  </div>
                  <div className="text-sm text-muted-foreground italic pl-3 border-l-4 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 p-2 rounded-r">
                    Pés posicionados mais altos na plataforma para focar em glúteos e posteriores. Não desça demais para
                    não curvar a lombar.
                  </div>
                </div>

                <div className="border-b border-border/50 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold text-foreground text-lg">Elevação Pélvica</div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openVideoModal("Elevação Pélvica")}
                      className="flex items-center gap-2 hover:bg-red-50 hover:border-red-200 hover:text-red-600 dark:hover:bg-red-950 dark:hover:border-red-800"
                    >
                      <Play className="h-3 w-3" />
                      Ver Vídeo
                    </Button>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground mb-2">
                    <span className="font-medium">4x</span>
                    <span className="font-medium">15</span>
                    <span className="font-medium">-</span>
                  </div>
                  <div className="text-sm text-muted-foreground italic pl-3 border-l-4 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 p-2 rounded-r">
                    Pode ser feita no chão ou com as costas apoiadas num banco. Contraia bem os glúteos no topo.
                  </div>
                </div>

                <div className="border-b border-border/50 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold text-foreground text-lg">Cadeira Abdutora</div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openVideoModal("Cadeira Abdutora")}
                      className="flex items-center gap-2 hover:bg-red-50 hover:border-red-200 hover:text-red-600 dark:hover:bg-red-950 dark:hover:border-red-800"
                    >
                      <Play className="h-3 w-3" />
                      Ver Vídeo
                    </Button>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground mb-2">
                    <span className="font-medium">3x</span>
                    <span className="font-medium">15</span>
                    <span className="font-medium">-</span>
                  </div>
                  <div className="text-sm text-muted-foreground italic pl-3 border-l-4 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 p-2 rounded-r">
                    Incline o tronco ligeiramente para a frente para ativar mais o glúteo.
                  </div>
                </div>

                <div className="border-b border-border/50 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold text-foreground text-lg">Bicicleta Ergométrica (Sentado)</div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openVideoModal("Bicicleta Ergométrica (Sentado)")}
                      className="flex items-center gap-2 hover:bg-red-50 hover:border-red-200 hover:text-red-600 dark:hover:bg-red-950 dark:hover:border-red-800"
                    >
                      <Play className="h-3 w-3" />
                      Ver Vídeo
                    </Button>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground mb-2">
                    <span className="font-medium">1x</span>
                    <span className="font-medium">20 min</span>
                    <span className="font-medium">Leve</span>
                  </div>
                  <div className="text-sm text-muted-foreground italic pl-3 border-l-4 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 p-2 rounded-r">
                    Cardio de baixo impacto para finalizar.
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border-l-4 border-red-500">
                <div className="text-red-700 dark:text-red-300 text-sm font-medium">
                  Foco: Glúteos e posteriores para aliviar a sobrecarga na lombar.
                </div>
              </div>
            </div>
          )}

          {/* Continue with other days... */}
          {activeTab === "bike" && (
            <div className="bg-card rounded-lg shadow-lg border border-border p-6">
              <div className="text-lg text-muted-foreground mb-6 pb-2 border-b border-dashed border-border">
                Cardio Intervalado (HIIT) na Bicicleta
              </div>

              <div className="space-y-6">
                <div className="border-b border-border/50 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold text-foreground text-lg">1. Aquecimento</div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openVideoModal("1. Aquecimento")}
                      className="flex items-center gap-2 hover:bg-red-50 hover:border-red-200 hover:text-red-600 dark:hover:bg-red-950 dark:hover:border-red-800"
                    >
                      <Play className="h-3 w-3" />
                      Ver Vídeo
                    </Button>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground mb-2">
                    <span className="font-medium">1x</span>
                    <span className="font-medium">5 min</span>
                    <span className="font-medium">Leve</span>
                  </div>
                  <div className="text-sm text-muted-foreground italic pl-3 border-l-4 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 p-2 rounded-r">
                    Comece girando em um ritmo bem leve e constante, apenas para aquecer os músculos e articulações.
                  </div>
                </div>

                <div className="border-b border-border/50 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold text-foreground text-lg">2. Parte Principal: Intervalos</div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openVideoModal("2. Parte Principal: Intervalos")}
                      className="flex items-center gap-2 hover:bg-red-50 hover:border-red-200 hover:text-red-600 dark:hover:bg-red-950 dark:hover:border-red-800"
                    >
                      <Play className="h-3 w-3" />
                      Ver Vídeo
                    </Button>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground mb-2">
                    <span className="font-medium">6 a 8x</span>
                    <span className="font-medium">2 min</span>
                    <span className="font-medium">Variado</span>
                  </div>
                  <div className="text-sm text-muted-foreground italic pl-3 border-l-4 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 p-2 rounded-r">
                    Repita o ciclo abaixo de 6 a 8 vezes:
                    <br />
                    <strong>- 30 segundos:</strong> Ritmo FORTE. Aumente a carga/velocidade para um nível desafiador,
                    onde você fica bem ofegante.
                    <br />
                    <strong>- 1 minuto e 30 segundos:</strong> Ritmo LEVE. Reduza a carga/velocidade para se recuperar
                    para o próximo tiro.
                  </div>
                </div>

                <div className="border-b border-border/50 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold text-foreground text-lg">3. Desaquecimento</div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openVideoModal("3. Desaquecimento")}
                      className="flex items-center gap-2 hover:bg-red-50 hover:border-red-200 hover:text-red-600 dark:hover:bg-red-950 dark:hover:border-red-800"
                    >
                      <Play className="h-3 w-3" />
                      Ver Vídeo
                    </Button>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground mb-2">
                    <span className="font-medium">1x</span>
                    <span className="font-medium">5 min</span>
                    <span className="font-medium">Leve</span>
                  </div>
                  <div className="text-sm text-muted-foreground italic pl-3 border-l-4 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 p-2 rounded-r">
                    Após o último ciclo, continue girando em um ritmo bem leve para baixar a frequência cardíaca aos
                    poucos e ajudar na recuperação.
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border-l-4 border-red-500">
                <div className="text-red-700 dark:text-red-300 text-sm font-medium">
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
          <div className="mt-12 bg-blue-50 dark:bg-blue-950/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300 font-bold mb-4 text-lg">
              <Droplets className="w-5 h-5" />
              Hidratação Diária
            </div>

            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm text-blue-600 dark:text-blue-400">Meta: 6 garrafas (3,9L)</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm text-blue-600 dark:text-blue-400">Progresso:</span>
              <div className="flex-1 h-6 bg-blue-200 dark:bg-blue-900 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 transition-all duration-500"
                  style={{ width: `${getWaterProgressPercent()}%` }}
                />
              </div>
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                {(getTotalWaterConsumed() / 1000).toFixed(1)}L / 3,9L
              </span>
            </div>

            <div className="space-y-2">
              {waterTips.map((tip, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 text-sm transition-all duration-200 ${
                    waterProgress[index] ? "line-through text-muted-foreground" : "text-blue-700 dark:text-blue-300"
                  }`}
                >
                  <button
                    onClick={() => toggleWaterTip(index)}
                    className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-all duration-200 hover:scale-110 ${
                      waterProgress[index]
                        ? "bg-blue-500 border-blue-500 shadow-sm"
                        : "border-blue-300 dark:border-blue-600 hover:border-blue-400 dark:hover:border-blue-500"
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

      {/* Video Modal */}
      <VideoModal isOpen={videoModal.isOpen} onClose={closeVideoModal} exerciseName={videoModal.exerciseName} />
    </div>
  )
}