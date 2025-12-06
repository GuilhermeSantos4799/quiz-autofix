"use client";

import { useState } from "react";
import { ChevronRight, ChevronLeft, Loader2, CheckCircle, Mail } from "lucide-react";
import Link from "next/link";

type QuizStep = {
  id: number;
  type: "welcome" | "question" | "education" | "loading" | "result" | "offer";
  title: string;
  subtitle?: string;
  question?: string;
  options?: string[];
  multipleChoice?: boolean;
  openEnded?: boolean;
  content?: string;
};

const quizSteps: QuizStep[] = [
  {
    id: 0,
    type: "welcome",
    title: "Descubra se seu carro precisa de um cuidado especial!",
    subtitle: "Leva menos de 3 minutos para saber tudo sobre a saúde do seu veículo…",
  },
  {
    id: 1,
    type: "question",
    title: "Qual é a idade do seu carro?",
    options: ["Menos de 2 anos", "2 a 5 anos", "6 a 10 anos", "Mais de 10 anos"],
  },
  {
    id: 2,
    type: "question",
    title: "Com que frequência você realiza manutenção no seu veículo?",
    options: ["Mensalmente", "A cada 6 meses", "Anualmente", "Nunca"],
  },
  {
    id: 3,
    type: "question",
    title: "Você já enfrentou problemas mecânicos com seu carro?",
    options: ["Sim", "Não"],
  },
  {
    id: 4,
    type: "education",
    title: "Você sabia?",
    content: "Manter o carro em boas condições é vital para a segurança e economia. Uma simples verificação pode evitar grandes problemas no futuro!",
  },
  {
    id: 5,
    type: "question",
    title: "Você percebeu algum barulho estranho no motor?",
    options: ["Sim", "Não"],
  },
  {
    id: 6,
    type: "question",
    title: "Como está a performance do seu carro? Ele acelera como deveria?",
    options: ["Ótima", "Regular", "Fraca"],
  },
  {
    id: 7,
    type: "question",
    title: "Você já teve que parar na estrada por problemas mecânicos?",
    options: ["Sim", "Não"],
  },
  {
    id: 8,
    type: "question",
    title: "Quais dos seguintes itens você já verificou no último mês?",
    options: ["Óleo do motor", "Freios", "Pneus", "Luzes"],
    multipleChoice: true,
  },
  {
    id: 9,
    type: "question",
    title: "Você percebe algum líquido no chão após estacionar?",
    options: ["Sim", "Não"],
  },
  {
    id: 10,
    type: "education",
    title: "Dica de Especialista",
    content: "O funcionamento adequado de um veículo depende de várias partes do motor e sistemas. Especialistas garantem: cuidados regulares fazem toda a diferença!",
  },
  {
    id: 11,
    type: "question",
    title: "O que você mais valoriza em um carro?",
    openEnded: true,
  },
  {
    id: 12,
    type: "question",
    title: "Como você se sentiria se seu carro deixasse você na mão em uma situação urgente?",
    openEnded: true,
  },
  {
    id: 13,
    type: "question",
    title: "Você já teve experiências negativas devido a falhas mecânicas?",
    openEnded: true,
  },
  {
    id: 14,
    type: "question",
    title: "O que você esperaria de um serviço de manutenção?",
    openEnded: true,
  },
  {
    id: 15,
    type: "question",
    title: "Qual é seu principal objetivo com a manutenção do carro?",
    openEnded: true,
  },
  {
    id: 16,
    type: "question",
    title: "Quantas vezes por mês você utiliza seu carro?",
    options: ["1-5 vezes", "6-10 vezes", "11-20 vezes", "Mais de 20 vezes"],
  },
  {
    id: 17,
    type: "education",
    title: "Prova Social",
    content: "Nossos clientes frequentemente relatam que, após utilizar o Autofix, conseguiram prolongar a vida do carro e economizar em consertos caros.",
  },
  {
    id: 18,
    type: "question",
    title: "Receba um diagnóstico completo e gratuito sobre a saúde do seu carro!",
    subtitle: "Deixe seu e-mail abaixo:",
    openEnded: true,
  },
  {
    id: 19,
    type: "loading",
    title: "Analisando suas respostas...",
    content: "Estamos processando os dados do seu veículo",
  },
  {
    id: 20,
    type: "result",
    title: "Seu Diagnóstico Personalizado",
    content: "Seu carro está na faixa de risco média! É hora de considerar uma manutenção preventiva.",
  },
  {
    id: 21,
    type: "education",
    title: "Benefícios do AutoFix",
    content: "Com o Autofix, você terá um suporte contínuo para garantir que seu carro esteja sempre em ótimo estado, evitando surpresas e gastos desnecessários.",
  },
  {
    id: 22,
    type: "education",
    title: "Taxa de Sucesso",
    content: "75% dos nossos usuários conseguiram aumentar a durabilidade do seu veículo e reduzir os custos com manutenção!",
  },
  {
    id: 23,
    type: "offer",
    title: "Garanta o seu plano Autofix!",
    subtitle: "Mantenha seu carro saudável por muito mais tempo",
  },
];

export default function QuizPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string | string[]>>({});
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [textAnswer, setTextAnswer] = useState("");

  const step = quizSteps[currentStep];
  const progress = ((currentStep + 1) / quizSteps.length) * 100;

  const handleNext = () => {
    if (step.type === "question") {
      if (step.multipleChoice) {
        setAnswers({ ...answers, [step.id]: selectedOptions });
        setSelectedOptions([]);
      } else if (step.openEnded) {
        setAnswers({ ...answers, [step.id]: textAnswer });
        setTextAnswer("");
      }
    }

    if (step.type === "loading") {
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 2000);
      return;
    }

    if (currentStep < quizSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleOptionClick = (option: string) => {
    if (step.multipleChoice) {
      if (selectedOptions.includes(option)) {
        setSelectedOptions(selectedOptions.filter((o) => o !== option));
      } else {
        setSelectedOptions([...selectedOptions, option]);
      }
    } else {
      setAnswers({ ...answers, [step.id]: option });
      setTimeout(() => handleNext(), 300);
    }
  };

  const canProceed = () => {
    if (step.type === "question") {
      if (step.multipleChoice) return selectedOptions.length > 0;
      if (step.openEnded) return textAnswer.trim().length > 0;
      return answers[step.id] !== undefined;
    }
    return true;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex flex-col">
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 h-2">
        <div
          className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="max-w-3xl w-full">
          {/* Welcome Screen */}
          {step.type === "welcome" && (
            <div className="text-center space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                {step.title}
              </h1>
              <p className="text-xl text-gray-600">{step.subtitle}</p>
              <button
                onClick={handleNext}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
              >
                Clique para começar
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Question Screen */}
          {step.type === "question" && (
            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6 animate-fade-in">
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  {step.title}
                </h2>
                {step.subtitle && (
                  <p className="text-gray-600">{step.subtitle}</p>
                )}
              </div>

              {step.openEnded ? (
                <div className="space-y-4">
                  {step.id === 18 ? (
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        placeholder="seu@email.com"
                        value={textAnswer}
                        onChange={(e) => setTextAnswer(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-lg"
                      />
                    </div>
                  ) : (
                    <textarea
                      placeholder="Digite sua resposta aqui..."
                      value={textAnswer}
                      onChange={(e) => setTextAnswer(e.target.value)}
                      rows={4}
                      className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none resize-none text-lg"
                    />
                  )}
                </div>
              ) : (
                <div className="space-y-3">
                  {step.options?.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleOptionClick(option)}
                      className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left font-medium ${
                        step.multipleChoice
                          ? selectedOptions.includes(option)
                            ? "border-blue-600 bg-blue-50 text-blue-700"
                            : "border-gray-200 hover:border-blue-300 text-gray-700"
                          : answers[step.id] === option
                          ? "border-blue-600 bg-blue-50 text-blue-700"
                          : "border-gray-200 hover:border-blue-300 text-gray-700"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            (step.multipleChoice && selectedOptions.includes(option)) ||
                            answers[step.id] === option
                              ? "border-blue-600 bg-blue-600"
                              : "border-gray-300"
                          }`}
                        >
                          {((step.multipleChoice && selectedOptions.includes(option)) ||
                            answers[step.id] === option) && (
                            <CheckCircle className="w-4 h-4 text-white" />
                          )}
                        </div>
                        <span>{option}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {(step.multipleChoice || step.openEnded) && (
                <button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  Continuar
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
            </div>
          )}

          {/* Education Screen */}
          {step.type === "education" && (
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl shadow-xl p-8 space-y-6 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold">{step.title}</h2>
              <p className="text-xl text-blue-100 leading-relaxed">{step.content}</p>
              <button
                onClick={handleNext}
                className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 inline-flex items-center gap-2"
              >
                Continuar
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Loading Screen */}
          {step.type === "loading" && (
            <div className="text-center space-y-6 animate-fade-in">
              <Loader2 className="w-16 h-16 text-blue-600 animate-spin mx-auto" />
              <h2 className="text-3xl font-bold text-gray-800">{step.title}</h2>
              <p className="text-xl text-gray-600">{step.content}</p>
            </div>
          )}

          {/* Result Screen */}
          {step.type === "result" && (
            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6 animate-fade-in">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto flex items-center justify-center">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">{step.title}</h2>
                <p className="text-xl text-gray-600">{step.content}</p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
                <h3 className="font-bold text-lg text-gray-800 mb-3">Áreas que precisam de atenção:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600">⚠️</span>
                    <span>Sistema de freios - recomendamos verificação</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600">⚠️</span>
                    <span>Fluidos do motor - possível necessidade de troca</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600">⚠️</span>
                    <span>Pneus - verificar pressão e desgaste</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={handleNext}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                Ver Benefícios
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Offer Screen */}
          {step.type === "offer" && (
            <div className="space-y-8 animate-fade-in">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{step.title}</h2>
                <p className="text-xl text-gray-600">{step.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Plano Básico */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-200 hover:border-blue-500 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Básico</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-4">
                    €29<span className="text-lg text-gray-600">/mês</span>
                  </div>
                  <ul className="space-y-3 mb-6 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Diagnósticos mensais</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Guias de manutenção</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Suporte por email</span>
                    </li>
                  </ul>
                  <button className="w-full bg-gray-200 text-gray-800 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-all duration-300">
                    Escolher Plano
                  </button>
                </div>

                {/* Plano Premium */}
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-2xl p-6 border-2 border-blue-600 transform scale-105 relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                    MAIS POPULAR
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Premium</h3>
                  <div className="text-4xl font-bold text-white mb-4">
                    €59<span className="text-lg text-blue-200">/mês</span>
                  </div>
                  <ul className="space-y-3 mb-6 text-white">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span>Tudo do Básico</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span>Diagnósticos semanais</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span>Vídeos tutoriais exclusivos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span>Suporte prioritário 24/7</span>
                    </li>
                  </ul>
                  <button className="w-full bg-white text-blue-700 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300">
                    Escolher Plano
                  </button>
                </div>

                {/* Plano Pro */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-200 hover:border-blue-500 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Pro</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-4">
                    €99<span className="text-lg text-gray-600">/mês</span>
                  </div>
                  <ul className="space-y-3 mb-6 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Tudo do Premium</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Consultas com mecânicos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Descontos em oficinas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Relatórios personalizados</span>
                    </li>
                  </ul>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300">
                    Escolher Plano
                  </button>
                </div>
              </div>

              <div className="text-center">
                <Link
                  href="/"
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2"
                >
                  Voltar para a página inicial
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      {step.type !== "welcome" && step.type !== "loading" && step.type !== "offer" && (
        <div className="bg-white border-t border-gray-200 px-4 py-4">
          <div className="max-w-3xl mx-auto flex justify-between items-center">
            <button
              onClick={handleBack}
              disabled={currentStep === 0}
              className="text-gray-600 hover:text-gray-800 font-semibold inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
              Voltar
            </button>
            <span className="text-sm text-gray-600">
              Etapa {currentStep + 1} de {quizSteps.length}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
