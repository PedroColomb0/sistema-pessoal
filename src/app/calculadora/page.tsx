"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Trash2 } from "lucide-react"

interface TimeEntry {
  id: number
  hours: number
  minutes: number
  seconds: number
  totalSeconds: number
}

export default function CalculadoraPage() {
  const [hours, setHours] = useState("")
  const [minutes, setMinutes] = useState("")
  const [seconds, setSeconds] = useState("")
  const [entries, setEntries] = useState<TimeEntry[]>([])
  const [totalSeconds, setTotalSeconds] = useState(0)

  const formatTime = (time: number) => {
    return time < 10 ? "0" + time : time.toString()
  }

  const formatTotalTime = (totalSec: number) => {
    const totalHours = Math.floor(totalSec / 3600)
    const totalMinutes = Math.floor((totalSec % 3600) / 60)
    const remainingSeconds = totalSec % 60
    return `${formatTime(totalHours)}:${formatTime(totalMinutes)}:${formatTime(remainingSeconds)}`
  }

  const addTime = () => {
    const h = Number.parseInt(hours) || 0
    const m = Number.parseInt(minutes) || 0
    const s = Number.parseInt(seconds) || 0

    const addedSeconds = h * 3600 + m * 60 + s

    if (addedSeconds > 0) {
      const newEntry: TimeEntry = {
        id: Date.now(),
        hours: h,
        minutes: m,
        seconds: s,
        totalSeconds: addedSeconds,
      }

      setEntries((prev) => [...prev, newEntry])
      setTotalSeconds((prev) => prev + addedSeconds)

      // Clear inputs
      setHours("")
      setMinutes("")
      setSeconds("")
    }
  }

  const removeTime = (entry: TimeEntry) => {
    setEntries((prev) => prev.filter((e) => e.id !== entry.id))
    setTotalSeconds((prev) => prev - entry.totalSeconds)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addTime()
    }
  }

  // Focus on minutes field after adding time
  useEffect(() => {
    const minutesInput = document.getElementById("minutes")
    if (minutesInput && !hours && !minutes && !seconds) {
      minutesInput.focus()
    }
  }, [entries, hours, minutes, seconds]) // <-- CORRIGIDO

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 md:ml-64 p-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-800 mb-8 text-center">Calculadora de Tempo</h1>

          <div className="bg-white rounded-lg shadow-md p-6">
            {/* Input Fields */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <Label htmlFor="hours">Horas:</Label>
                <Input
                  id="hours"
                  type="number"
                  placeholder="Horas"
                  min="0"
                  value={hours}
                  onChange={(e) => setHours(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="minutes">Minutos:</Label>
                <Input
                  id="minutes"
                  type="number"
                  placeholder="Minutos"
                  min="0"
                  max="59"
                  value={minutes}
                  onChange={(e) => setMinutes(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="seconds">Segundos:</Label>
                <Input
                  id="seconds"
                  type="number"
                  placeholder="Segundos"
                  min="0"
                  max="59"
                  value={seconds}
                  onChange={(e) => setSeconds(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="mt-1"
                />
              </div>
            </div>

            <Button onClick={addTime} className="w-full mb-6 bg-green-500 hover:bg-green-600">
              Adicionar Tempo
            </Button>

            {/* Results */}
            <div className="bg-slate-50 rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">Total:</h2>
              <p className="text-3xl font-mono font-bold text-slate-800 mb-2">{formatTotalTime(totalSeconds)}</p>
              <p className="text-slate-600">
                <strong>Quantidade de Itens Adicionados:</strong> {entries.length}
              </p>
            </div>

            {/* History */}
            {entries.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Histórico de Adições:</h3>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {entries.map((entry) => (
                    <div key={entry.id} className="flex items-center justify-between bg-slate-50 p-3 rounded-lg">
                      <span className="font-mono">
                        {formatTime(entry.hours)}:{formatTime(entry.minutes)}:{formatTime(entry.seconds)}
                      </span>
                      <Button variant="destructive" size="sm" onClick={() => removeTime(entry)} className="ml-2">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}