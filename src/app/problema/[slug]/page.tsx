"use client";

import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Clock, Wrench, AlertTriangle, Lightbulb, CheckCircle, ExternalLink, Video } from "lucide-react";
import { getProblemBySlug } from "@/lib/problems-data";
import { DifficultyBadge } from "@/components/custom/DifficultyBadge";

export default function ProblemDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  
  const problem = getProblemBySlug(slug);

  if (!problem) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Problema não encontrado</h1>
          <button
            onClick={() => router.push("/")}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Voltar para Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-blue-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar para problemas</span>
          </button>
          
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-3">{problem.title}</h1>
              <p className="text-blue-100 text-lg">{problem.description}</p>
            </div>
            <DifficultyBadge level={problem.difficulty} />
          </div>
          
          <div className="flex flex-wrap gap-6 mt-6 text-blue-100">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">{problem.estimatedTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Wrench className="w-5 h-5" />
              <span className="font-semibold">{problem.tools.length} ferramentas necessárias</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">{problem.steps.length} passos</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Tools Section */}
        <section className="bg-white rounded-2xl p-8 shadow-lg mb-8 border-2 border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <Wrench className="w-7 h-7 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-800">Ferramentas Necessárias</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {problem.tools.map((tool, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                <span className="font-medium text-gray-800">{tool.name}</span>
                {tool.buyLink && (
                  <a
                    href={tool.buyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 flex items-center gap-1 text-sm"
                  >
                    <span>Comprar</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Video Section (if available) */}
        {problem.videoUrl && (
          <section className="bg-white rounded-2xl p-8 shadow-lg mb-8 border-2 border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <Video className="w-7 h-7 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-800">Vídeo Tutorial</h2>
            </div>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Vídeo tutorial em breve</p>
            </div>
          </section>
        )}

        {/* Steps Section */}
        <section className="bg-white rounded-2xl p-8 shadow-lg mb-8 border-2 border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle className="w-7 h-7 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-800">Passo a Passo</h2>
          </div>
          <div className="space-y-4">
            {problem.steps.map((step, index) => (
              <div key={index} className="flex gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-800 flex-1 pt-2">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tips Section */}
        {problem.tips.length > 0 && (
          <section className="bg-white rounded-2xl p-8 shadow-lg mb-8 border-2 border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-7 h-7 text-yellow-600" />
              <h2 className="text-2xl font-bold text-gray-800">Dicas Importantes</h2>
            </div>
            <div className="space-y-3">
              {problem.tips.map((tip, index) => (
                <div key={index} className="flex gap-3 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <Lightbulb className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-800">{tip}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Warnings Section */}
        {problem.warnings.length > 0 && (
          <section className="bg-white rounded-2xl p-8 shadow-lg mb-8 border-2 border-red-200">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-7 h-7 text-red-600" />
              <h2 className="text-2xl font-bold text-gray-800">Avisos de Segurança</h2>
            </div>
            <div className="space-y-3">
              {problem.warnings.map((warning, index) => (
                <div key={index} className="flex gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-800 font-medium">{warning}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Precisa de ajuda?</h3>
          <p className="text-blue-100 mb-6">
            Junte-se à nossa comunidade e tire suas dúvidas com outros usuários e mecânicos profissionais
          </p>
          <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105">
            Acessar Comunidade
          </button>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 px-4 mt-12">
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
