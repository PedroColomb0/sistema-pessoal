// app/dieta/page.tsx

"use client"

import { useState, useEffect } from "react"
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const shoppingItems = [
  { name: "Pão integral", quantity: "1 pacote" },
  { name: "Torrada integral", quantity: "1 caixa" },
  { name: "Ovos de galinha", quantity: "14 unidades" },
  { name: "Maçã", quantity: "4 unidades" },
  { name: "Pera", quantity: "3 unidades" },
  { name: "Kiwi", quantity: "3 unidades" },
  { name: "Batata-doce", quantity: "1,4 kg" },
  { name: "Aveia em flocos", quantity: "1 pacote" },
  { name: "Peito de frango", quantity: "1,5 kg" },
  { name: "Carne bovina magra", quantity: "910 g" },
  { name: "Feijão cru", quantity: "300 g" },
  { name: "Alface", quantity: "2 pés" },
  { name: "Rúcula", quantity: "1 maço" },
  { name: "Agrião", quantity: "1 maço" },
  { name: "Tomate", quantity: "5 unidades" },
  { name: "Pepino", quantity: "2 unidades" },
  { name: "Cenoura", quantity: "3 unidades" },
  { name: "Iogurte desnatado natural", quantity: "7 unidades ou 2 potes grandes" },
  { name: "Creatina", quantity: "1 pote (mínimo 35g)" },
  { name: "Chá verde", quantity: "1 caixa ou pacote a granel" },
  { name: "Chá branco", quantity: "1 caixa ou pacote a granel" },
]

export default function DietaPage() {
  const [activeTab, setActiveTab] = useState("dieta")
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})

  useEffect(() => {
    // Load checked items from localStorage
    const saved = localStorage.getItem("dietaCheckedItems")
    if (saved) {
      setCheckedItems(JSON.parse(saved))
    }
  }, [])

  const toggleItem = (itemName: string) => {
    const newCheckedItems = {
      ...checkedItems,
      [itemName]: !checkedItems[itemName],
    }
    setCheckedItems(newCheckedItems)
    localStorage.setItem("dietaCheckedItems", JSON.stringify(newCheckedItems))
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 md:ml-64 p-8">
        <div className="max-w-4xl mx-auto">
          {/* CORREÇÃO: Adicionadas classes para o modo escuro */}
          <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-8">Meu Plano Alimentar</h1>

          {/* Tabs */}
          <div className="flex border-b border-slate-200 dark:border-slate-700 mb-8 overflow-x-auto">
            <Button
              variant={activeTab === "dieta" ? "default" : "ghost"}
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
              onClick={() => setActiveTab("dieta")}
            >
              Dieta
            </Button>
            <Button
              variant={activeTab === "compras" ? "default" : "ghost"}
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
              onClick={() => setActiveTab("compras")}
            >
              Lista de Compras
            </Button>
          </div>

          {/* Dieta Tab */}
          {activeTab === "dieta" && (
            // CORREÇÃO: Adicionadas classes para o modo escuro
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
              <h2 className="text-2xl font-semibold text-slate-700 dark:text-slate-300 p-6 border-b dark:border-slate-700">
                Plano de Dieta Semanal
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    {/* CORREÇÃO: Adicionadas classes para o modo escuro */}
                    <tr className="bg-slate-100 dark:bg-slate-900">
                      <th className="border border-slate-300 dark:border-slate-600 p-4 text-left font-semibold text-slate-700 dark:text-slate-300">
                        Refeição
                      </th>
                      <th className="border border-slate-300 dark:border-slate-600 p-4 text-left font-semibold text-slate-700 dark:text-slate-300">
                        Alimentos
                      </th>
                    </tr>
                  </thead>
                  {/* CORREÇÃO: Adicionadas classes para o modo escuro */}
                  <tbody className="text-slate-600 dark:text-slate-400">
                    <tr className="bg-blue-50 dark:bg-blue-900/20">
                      <td className="border border-slate-300 dark:border-slate-700 p-4 font-semibold">Café da Manhã</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-4">
                        2 Pães Integral ou 4 Torradas / 2 Ovos de Galinha / 1 Maçã ou Pêra ou Kiwi
                      </td>
                    </tr>
                    <tr className="bg-green-50 dark:bg-green-900/20">
                      <td className="border border-slate-300 dark:border-slate-700 p-4 font-semibold">Almoço</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-4">
                        100g Batata Doce / Frango (150g) ou Carne (130g) / Feijão (80g) / Salada à Vontade
                      </td>
                    </tr>
                    <tr className="bg-yellow-50 dark:bg-yellow-900/20">
                      <td className="border border-slate-300 dark:border-slate-700 p-4 font-semibold">Lanche da Tarde</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-4">
                        1 Iogurte Desnatado + 2 Colheres de Aveia / 1 Maçã ou Pêra ou Kiwi
                      </td>
                    </tr>
                    <tr className="bg-orange-50 dark:bg-orange-900/20">
                      <td className="border border-slate-300 dark:border-slate-700 p-4 font-semibold">Jantar</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-4">
                        Batata Doce (100g) / (130g Peito de Frango ou 120g Carne Bovina) / Salada
                      </td>
                    </tr>
                    <tr className="bg-purple-50 dark:bg-purple-900/20">
                      <td className="border border-slate-300 dark:border-slate-700 p-4 font-semibold">Suplemento</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-4">Creatina (5g)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Lista de Compras Tab */}
          {activeTab === "compras" && (
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
              <h2 className="text-2xl font-semibold text-slate-700 dark:text-slate-300 p-6 border-b dark:border-slate-700">
                Lista Completa de Compras da Semana
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-900">
                      <th className="border border-slate-300 dark:border-slate-600 p-4 text-left font-semibold text-slate-700 dark:text-slate-300">
                        Item
                      </th>
                      <th className="border border-slate-300 dark:border-slate-600 p-4 text-left font-semibold text-slate-700 dark:text-slate-300">
                        Quantidade
                      </th>
                      <th className="border border-slate-300 dark:border-slate-600 p-4 text-center font-semibold text-slate-700 dark:text-slate-300">
                        Comprado
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-600 dark:text-slate-400">
                    {shoppingItems.map((item, index) => (
                      <tr
                        key={index}
                        // CORREÇÃO: Adicionadas classes para o modo escuro
                        className={`${
                          checkedItems[item.name]
                            ? "bg-green-50 dark:bg-green-900/30"
                            : index % 2 === 0
                              ? "bg-slate-50 dark:bg-slate-800/50"
                              : "bg-white dark:bg-slate-800"
                        }`}
                      >
                        <td
                          // CORREÇÃO: Adicionadas classes para o modo escuro
                          className={`border border-slate-300 dark:border-slate-700 p-4 ${
                            checkedItems[item.name] ? "line-through text-slate-500 dark:text-slate-600" : ""
                          }`}
                        >
                          {item.name}
                        </td>
                        <td
                          className={`border border-slate-300 dark:border-slate-700 p-4 ${
                            checkedItems[item.name] ? "line-through text-slate-500 dark:text-slate-600" : ""
                          }`}
                        >
                          {item.quantity}
                        </td>
                        <td className="border border-slate-300 dark:border-slate-700 p-4 text-center">
                          <button
                            onClick={() => toggleItem(item.name)}
                            className={`w-6 h-6 border-2 rounded flex items-center justify-center transition-colors ${
                              checkedItems[item.name]
                                ? "bg-green-500 border-green-500"
                                : "border-slate-300 dark:border-slate-600 hover:border-green-400"
                            }`}
                          >
                            {checkedItems[item.name] && <Check className="w-4 h-4 text-white" />}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}