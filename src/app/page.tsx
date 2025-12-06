"use client";

import { useState } from "react";
import { Search, Wrench, BookOpen, Users, Video, Filter, ClipboardCheck } from "lucide-react";
import { problems, categories, DifficultyLevel } from "@/lib/problems-data";
import { ProblemCard } from "@/components/custom/ProblemCard";
import Link from "next/link";

export default function AutoFixHome() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel | "Todos">("Todos");

  const filteredProblems = problems.filter((problem) => {
    const matchesSearch = problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         problem.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || problem.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === "Todos" || problem.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Wrench className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">AutoFix</h1>
          </div>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            Seu Guia Completo de Mecânica Automotiva
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar problemas, guias, tutoriais..."
              className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </header>

      {/* Quiz CTA Banner */}
      <section className="py-8 px-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <ClipboardCheck className="w-12 h-12 text-white" />
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Descubra se seu carro precisa de cuidados!
                </h2>
                <p className="text-white text-lg">
                  Faça nosso quiz rápido de 3 minutos e receba um diagnóstico personalizado
                </p>
              </div>
            </div>
            <Link
              href="/quiz"
              className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-all duration-300 hover:scale-105 shadow-2xl whitespace-nowrap"
            >
              Fazer Quiz Grátis
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<BookOpen className="w-8 h-8 text-blue-600" />}
              title="Guias Passo a Passo"
              description="Instruções detalhadas e fáceis de seguir"
            />
            <FeatureCard
              icon={<Wrench className="w-8 h-8 text-blue-600" />}
              title="Lista de Ferramentas"
              description="Saiba exatamente o que você precisa"
            />
            <FeatureCard
              icon={<Video className="w-8 h-8 text-blue-600" />}
              title="Vídeos Tutoriais"
              description="Aprenda visualmente com especialistas"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8 text-blue-600" />}
              title="Comunidade Ativa"
              description="Tire dúvidas com outros usuários"
            />
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-800">Filtrar por:</h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4">
            {/* Category Filter */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Categoria</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none"
              >
                <option value="Todos">Todas as categorias</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Difficulty Filter */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Dificuldade</label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value as DifficultyLevel | "Todos")}
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none"
              >
                <option value="Todos">Todas as dificuldades</option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Problemas Comuns ({filteredProblems.length})
          </h2>
          
          {filteredProblems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">Nenhum problema encontrado com os filtros selecionados.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProblems.map((problem) => (
                <ProblemCard key={problem.id} problem={problem} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para cuidar do seu carro?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Junte-se a milhares de usuários que já aprenderam a fazer manutenção automotiva
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quiz"
              className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              Fazer Diagnóstico Grátis
            </Link>
            <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-2xl">
              Explorar Guias
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Wrench className="w-6 h-6" />
            <span className="text-xl font-bold text-white">AutoFix</span>
          </div>
          <p className="text-sm">
            © 2024 AutoFix. Transformando a mecânica automotiva em uma tarefa viável para todos.
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
