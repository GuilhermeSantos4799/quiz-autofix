export type DifficultyLevel = "Iniciante" | "Intermediário" | "Avançado";

export interface Tool {
  name: string;
  buyLink?: string;
}

export interface Problem {
  id: string;
  slug: string;
  title: string;
  category: string;
  difficulty: DifficultyLevel;
  estimatedTime: string;
  description: string;
  tools: Tool[];
  steps: string[];
  videoUrl?: string;
  tips: string[];
  warnings: string[];
}

export const problems: Problem[] = [
  // PROBLEMAS INICIANTES
  {
    id: "1",
    slug: "troca-oleo-motor",
    title: "Troca de Óleo do Motor",
    category: "Motor",
    difficulty: "Iniciante",
    estimatedTime: "20 minutos",
    description: "A troca regular de óleo é fundamental para manter o motor funcionando perfeitamente. Aprenda o passo a passo completo.",
    tools: [
      { name: "Chave para filtro de óleo", buyLink: "#" },
      { name: "Bandeja coletora", buyLink: "#" },
      { name: "Funil", buyLink: "#" },
      { name: "Óleo de motor novo", buyLink: "#" },
      { name: "Filtro de óleo novo", buyLink: "#" }
    ],
    steps: [
      "Aqueça o motor por 2-3 minutos para facilitar a drenagem",
      "Levante o carro com segurança",
      "Localize o bujão de drenagem sob o motor",
      "Coloque a bandeja coletora embaixo e remova o bujão",
      "Aguarde o óleo drenar completamente",
      "Remova o filtro de óleo antigo",
      "Instale o novo filtro com um pouco de óleo novo na borracha",
      "Recoloque o bujão de drenagem",
      "Adicione o óleo novo pelo bocal superior",
      "Verifique o nível com a vareta"
    ],
    tips: [
      "Troque o óleo a cada 5.000-10.000 km conforme manual",
      "Use sempre óleo da viscosidade recomendada",
      "Aproveite para verificar outros fluidos"
    ],
    warnings: [
      "Óleo quente pode causar queimaduras",
      "Descarte o óleo usado em local apropriado",
      "Não aperte demais o filtro de óleo"
    ]
  },
  {
    id: "2",
    slug: "troca-bateria",
    title: "Troca de Bateria",
    category: "Sistema Elétrico",
    difficulty: "Iniciante",
    estimatedTime: "15 minutos",
    description: "Bateria descarregada ou com defeito? Aprenda a trocar de forma segura e rápida.",
    tools: [
      { name: "Chave 10mm ou 13mm", buyLink: "#" },
      { name: "Luvas de proteção", buyLink: "#" },
      { name: "Bateria nova", buyLink: "#" },
      { name: "Graxa para terminais", buyLink: "#" }
    ],
    steps: [
      "Desligue o motor e todos os acessórios",
      "Localize a bateria no compartimento do motor",
      "Desconecte primeiro o cabo NEGATIVO (-)",
      "Depois desconecte o cabo POSITIVO (+)",
      "Remova a presilha de fixação da bateria",
      "Retire a bateria antiga com cuidado",
      "Limpe os terminais dos cabos",
      "Instale a bateria nova",
      "Conecte primeiro o cabo POSITIVO (+)",
      "Depois conecte o cabo NEGATIVO (-)",
      "Aplique graxa nos terminais"
    ],
    tips: [
      "Baterias duram em média 2-4 anos",
      "Mantenha os terminais limpos e sem oxidação",
      "Verifique a data de fabricação ao comprar"
    ],
    warnings: [
      "Nunca inverta a polaridade dos cabos",
      "Baterias contêm ácido corrosivo",
      "Descarte a bateria velha em local apropriado"
    ]
  },
  {
    id: "3",
    slug: "troca-filtro-ar",
    title: "Troca de Filtro de Ar",
    category: "Motor",
    difficulty: "Iniciante",
    estimatedTime: "10 minutos",
    description: "Filtro de ar sujo reduz a performance do motor. Uma das manutenções mais simples que você pode fazer.",
    tools: [
      { name: "Chave de fenda (se necessário)", buyLink: "#" },
      { name: "Filtro de ar novo", buyLink: "#" }
    ],
    steps: [
      "Localize a caixa do filtro de ar no motor",
      "Abra as travas ou remova os parafusos da tampa",
      "Retire a tampa da caixa",
      "Remova o filtro antigo",
      "Limpe o interior da caixa com pano seco",
      "Instale o filtro novo na posição correta",
      "Feche a tampa e trave novamente"
    ],
    tips: [
      "Troque a cada 15.000-20.000 km ou anualmente",
      "Verifique o filtro a cada revisão",
      "Em áreas com muita poeira, troque mais frequentemente"
    ],
    warnings: [
      "Certifique-se de que o filtro está bem encaixado",
      "Não dirija sem o filtro de ar",
      "Use filtro de qualidade para proteger o motor"
    ]
  },
  {
    id: "4",
    slug: "troca-lampadas-farol",
    title: "Troca de Lâmpadas do Farol",
    category: "Sistema Elétrico",
    difficulty: "Iniciante",
    estimatedTime: "15 minutos",
    description: "Farol queimado compromete a segurança. Aprenda a trocar as lâmpadas rapidamente.",
    tools: [
      { name: "Lâmpadas novas", buyLink: "#" },
      { name: "Luvas de algodão", buyLink: "#" },
      { name: "Chave de fenda (alguns modelos)", buyLink: "#" }
    ],
    steps: [
      "Desligue o motor e as luzes",
      "Abra o capô e localize a parte traseira do farol",
      "Desconecte o conector elétrico",
      "Remova a tampa de proteção",
      "Solte a presilha de fixação da lâmpada",
      "Retire a lâmpada antiga sem tocar no vidro",
      "Instale a lâmpada nova usando luvas",
      "Recoloque a presilha de fixação",
      "Reinstale a tampa de proteção",
      "Reconecte o conector elétrico",
      "Teste o funcionamento"
    ],
    tips: [
      "Use luvas para não tocar no vidro da lâmpada",
      "Troque sempre as duas lâmpadas ao mesmo tempo",
      "Verifique a voltagem correta (H1, H4, H7, etc.)"
    ],
    warnings: [
      "Não toque no vidro da lâmpada com as mãos",
      "Aguarde o farol esfriar antes de trocar",
      "Verifique se a lâmpada é compatível com seu veículo"
    ]
  },
  {
    id: "5",
    slug: "calibragem-pneus",
    title: "Calibragem e Verificação de Pneus",
    category: "Pneus e Suspensão",
    difficulty: "Iniciante",
    estimatedTime: "10 minutos",
    description: "Pneus mal calibrados aumentam o consumo e desgaste. Aprenda a calibrar corretamente.",
    tools: [
      { name: "Calibrador de pneus", buyLink: "#" },
      { name: "Compressor de ar", buyLink: "#" },
      { name: "Medidor de profundidade", buyLink: "#" }
    ],
    steps: [
      "Verifique a pressão recomendada no manual ou adesivo da porta",
      "Remova a tampa da válvula do pneu",
      "Conecte o calibrador na válvula",
      "Leia a pressão atual",
      "Adicione ou remova ar conforme necessário",
      "Verifique novamente a pressão",
      "Recoloque a tampa da válvula",
      "Repita em todos os pneus incluindo o estepe",
      "Verifique o desgaste da banda de rodagem",
      "Procure por cortes, bolhas ou danos"
    ],
    tips: [
      "Calibre com os pneus frios",
      "Verifique a pressão mensalmente",
      "Não esqueça do pneu estepe"
    ],
    warnings: [
      "Pneus muito cheios ou vazios são perigosos",
      "Substitua pneus com desgaste irregular",
      "Verifique a validade dos pneus (máx 5 anos)"
    ]
  },

  // PROBLEMAS INTERMEDIÁRIOS
  {
    id: "6",
    slug: "troca-fluido-freio",
    title: "Troca do Fluido de Freio",
    category: "Sistema de Freios",
    difficulty: "Intermediário",
    estimatedTime: "30 minutos",
    description: "Aprenda a trocar o fluido de freio do seu veículo de forma segura e eficiente. O fluido de freio é essencial para o funcionamento adequado do sistema de frenagem.",
    tools: [
      { name: "Chave de fenda", buyLink: "#" },
      { name: "Chave inglesa", buyLink: "#" },
      { name: "Recipiente para fluido usado", buyLink: "#" },
      { name: "Fluido de freio novo", buyLink: "#" },
      { name: "Mangueira de sangria", buyLink: "#" }
    ],
    steps: [
      "Levante o carro e coloque-o em suportes seguros",
      "Localize o reservatório de fluido de freio no compartimento do motor",
      "Retire a tampa do reservatório com cuidado",
      "Drene o fluido antigo usando a mangueira de sangria na válvula de freio",
      "Substitua pelo fluido novo, seguindo as indicações do fabricante",
      "Recoloque todas as tampas e verifique se não há vazamentos",
      "Teste os freios em local seguro antes de usar o veículo"
    ],
    tips: [
      "Use sempre fluido de freio recomendado pelo fabricante",
      "Nunca misture tipos diferentes de fluido de freio",
      "Verifique o nível do fluido regularmente"
    ],
    warnings: [
      "O fluido de freio é corrosivo - use luvas de proteção",
      "Não deixe o fluido entrar em contato com a pintura do carro",
      "Descarte o fluido usado de forma adequada"
    ]
  },
  {
    id: "7",
    slug: "troca-pastilhas-freio",
    title: "Troca de Pastilhas de Freio",
    category: "Sistema de Freios",
    difficulty: "Intermediário",
    estimatedTime: "45 minutos",
    description: "Pastilhas de freio desgastadas comprometem a segurança. Aprenda a identificar e trocar as pastilhas corretamente.",
    tools: [
      { name: "Chave de roda", buyLink: "#" },
      { name: "Macaco hidráulico", buyLink: "#" },
      { name: "Chave Allen ou Torx", buyLink: "#" },
      { name: "Pastilhas de freio novas", buyLink: "#" },
      { name: "Graxa para freios", buyLink: "#" }
    ],
    steps: [
      "Levante o veículo e remova a roda",
      "Localize a pinça de freio",
      "Remova os parafusos da pinça",
      "Retire a pinça cuidadosamente",
      "Remova as pastilhas antigas",
      "Empurre o pistão da pinça para dentro",
      "Instale as pastilhas novas",
      "Recoloque a pinça e aperte os parafusos",
      "Reinstale a roda",
      "Teste os freios antes de dirigir"
    ],
    tips: [
      "Troque sempre as pastilhas dos dois lados do eixo",
      "Verifique o estado dos discos de freio",
      "Faça alguns testes de frenagem em local seguro"
    ],
    warnings: [
      "Nunca dirija com pastilhas muito desgastadas",
      "Use equipamentos de proteção individual",
      "Certifique-se de que o veículo está bem apoiado"
    ]
  },
  {
    id: "8",
    slug: "troca-velas-ignicao",
    title: "Troca de Velas de Ignição",
    category: "Motor",
    difficulty: "Intermediário",
    estimatedTime: "40 minutos",
    description: "Velas desgastadas causam falhas no motor e aumento no consumo. Aprenda a trocar corretamente.",
    tools: [
      { name: "Chave de vela", buyLink: "#" },
      { name: "Calibrador de velas", buyLink: "#" },
      { name: "Velas novas", buyLink: "#" },
      { name: "Soprador de ar", buyLink: "#" }
    ],
    steps: [
      "Aguarde o motor esfriar completamente",
      "Localize as velas de ignição",
      "Remova os cabos das velas (um de cada vez)",
      "Limpe ao redor da vela com ar comprimido",
      "Use a chave de vela para remover",
      "Verifique a folga da vela nova com calibrador",
      "Instale a vela nova manualmente primeiro",
      "Aperte com a chave sem forçar demais",
      "Reconecte o cabo da vela",
      "Repita para todas as velas"
    ],
    tips: [
      "Troque as velas a cada 30.000-50.000 km",
      "Use sempre velas recomendadas pelo fabricante",
      "Não aperte demais para não danificar a rosca"
    ],
    warnings: [
      "Motor deve estar frio antes de começar",
      "Não force a remoção se a vela estiver presa",
      "Cuidado para não quebrar a porcelana da vela"
    ]
  },
  {
    id: "9",
    slug: "troca-filtro-combustivel",
    title: "Troca de Filtro de Combustível",
    category: "Sistema de Combustível",
    difficulty: "Intermediário",
    estimatedTime: "35 minutos",
    description: "Filtro entupido causa perda de potência e falhas. Aprenda a trocar com segurança.",
    tools: [
      { name: "Chaves combinadas", buyLink: "#" },
      { name: "Recipiente para combustível", buyLink: "#" },
      { name: "Filtro novo", buyLink: "#" },
      { name: "Panos limpos", buyLink: "#" },
      { name: "Óculos de proteção", buyLink: "#" }
    ],
    steps: [
      "Alivie a pressão do sistema de combustível",
      "Localize o filtro (geralmente sob o veículo)",
      "Coloque o recipiente embaixo do filtro",
      "Desconecte as mangueiras de entrada e saída",
      "Remova o filtro antigo",
      "Limpe as conexões",
      "Instale o filtro novo observando a seta de direção",
      "Reconecte as mangueiras firmemente",
      "Verifique vazamentos",
      "Dê partida e observe o funcionamento"
    ],
    tips: [
      "Troque a cada 40.000-60.000 km",
      "Observe a seta de direção do fluxo",
      "Use filtros de qualidade"
    ],
    warnings: [
      "Trabalhe em área ventilada",
      "Não fume ou use chamas próximas",
      "Combustível é altamente inflamável"
    ]
  },
  {
    id: "10",
    slug: "troca-amortecedores",
    title: "Troca de Amortecedores",
    category: "Pneus e Suspensão",
    difficulty: "Intermediário",
    estimatedTime: "90 minutos",
    description: "Amortecedores desgastados comprometem estabilidade e conforto. Aprenda a substituir.",
    tools: [
      { name: "Macaco hidráulico", buyLink: "#" },
      { name: "Cavaletes", buyLink: "#" },
      { name: "Jogo de chaves", buyLink: "#" },
      { name: "Chave de impacto", buyLink: "#" },
      { name: "Amortecedores novos", buyLink: "#" }
    ],
    steps: [
      "Levante o veículo com segurança",
      "Remova a roda",
      "Localize os pontos de fixação do amortecedor",
      "Remova o parafuso inferior",
      "Remova o parafuso superior no cofre",
      "Retire o amortecedor antigo",
      "Compare com o novo",
      "Instale o amortecedor novo",
      "Aperte os parafusos no torque especificado",
      "Reinstale a roda",
      "Repita do outro lado"
    ],
    tips: [
      "Troque sempre em pares (ambos do eixo)",
      "Verifique também as molas e batentes",
      "Faça alinhamento após a troca"
    ],
    warnings: [
      "Use cavaletes, nunca confie apenas no macaco",
      "Cuidado com molas comprimidas",
      "Aperte no torque correto"
    ]
  },

  // PROBLEMAS AVANÇADOS
  {
    id: "11",
    slug: "sangria-freios",
    title: "Sangria do Sistema de Freios",
    category: "Sistema de Freios",
    difficulty: "Avançado",
    estimatedTime: "60 minutos",
    description: "Remova o ar do sistema de freios para garantir frenagem eficiente e segura.",
    tools: [
      { name: "Chave para sangria", buyLink: "#" },
      { name: "Mangueira transparente", buyLink: "#" },
      { name: "Recipiente para fluido", buyLink: "#" },
      { name: "Fluido de freio novo", buyLink: "#" },
      { name: "Ajudante (recomendado)", buyLink: "#" }
    ],
    steps: [
      "Verifique o nível do reservatório de fluido",
      "Comece pela roda mais distante do cilindro mestre",
      "Conecte a mangueira na válvula de sangria",
      "Peça ao ajudante para bombear o pedal 3-4 vezes",
      "Com o pedal pressionado, abra a válvula de sangria",
      "Observe o fluido saindo pela mangueira",
      "Feche a válvula antes que o ajudante solte o pedal",
      "Repita até não sair mais bolhas de ar",
      "Complete o nível do reservatório",
      "Repita o processo em todas as rodas"
    ],
    tips: [
      "Mantenha o reservatório sempre cheio durante o processo",
      "Siga a ordem: traseira direita, traseira esquerda, dianteira direita, dianteira esquerda",
      "Teste os freios após concluir"
    ],
    warnings: [
      "Nunca deixe o reservatório esvaziar",
      "Use apenas fluido de freio novo",
      "Descarte o fluido usado adequadamente"
    ]
  },
  {
    id: "12",
    slug: "troca-correia-dentada",
    title: "Troca de Correia Dentada",
    category: "Motor",
    difficulty: "Avançado",
    estimatedTime: "120 minutos",
    description: "Manutenção crítica que previne danos graves ao motor. Requer conhecimento técnico avançado.",
    tools: [
      { name: "Jogo de chaves", buyLink: "#" },
      { name: "Trava de polia", buyLink: "#" },
      { name: "Correia dentada nova", buyLink: "#" },
      { name: "Tensor novo", buyLink: "#" },
      { name: "Manual do veículo", buyLink: "#" }
    ],
    steps: [
      "Consulte o manual para intervalos de troca",
      "Desconecte a bateria",
      "Remova as tampas e proteções do motor",
      "Marque a posição das polias",
      "Remova a correia auxiliar",
      "Trave as polias na posição correta",
      "Remova o tensor antigo",
      "Retire a correia dentada antiga",
      "Instale o tensor novo",
      "Instale a correia nova seguindo as marcações",
      "Verifique o alinhamento",
      "Reinstale todos os componentes"
    ],
    tips: [
      "Troque a cada 60.000-100.000 km conforme manual",
      "Substitua também o tensor e a bomba d'água",
      "Não force a correia durante a instalação"
    ],
    warnings: [
      "Erro na instalação pode destruir o motor",
      "Se não tiver experiência, procure um profissional",
      "Nunca gire o motor sem a correia instalada corretamente"
    ]
  },
  {
    id: "13",
    slug: "troca-junta-cabecote",
    title: "Troca de Junta do Cabeçote",
    category: "Motor",
    difficulty: "Avançado",
    estimatedTime: "240 minutos",
    description: "Reparo complexo que exige precisão. Junta queimada causa superaquecimento e perda de compressão.",
    tools: [
      { name: "Jogo completo de ferramentas", buyLink: "#" },
      { name: "Torquímetro", buyLink: "#" },
      { name: "Junta nova do cabeçote", buyLink: "#" },
      { name: "Raspador de juntas", buyLink: "#" },
      { name: "Líquido de arrefecimento", buyLink: "#" },
      { name: "Óleo de motor", buyLink: "#" }
    ],
    steps: [
      "Drene o líquido de arrefecimento e óleo",
      "Remova o cabeçote seguindo sequência do manual",
      "Desconecte todas as mangueiras e cabos",
      "Remova o coletor de admissão e escape",
      "Solte os parafusos do cabeçote na ordem inversa",
      "Retire o cabeçote cuidadosamente",
      "Limpe completamente as superfícies",
      "Verifique se o cabeçote está empenado",
      "Instale a junta nova",
      "Recoloque o cabeçote",
      "Aperte os parafusos na sequência e torque corretos",
      "Reconecte todos os componentes",
      "Complete fluidos e teste"
    ],
    tips: [
      "Use sempre torquímetro para apertar",
      "Siga rigorosamente a sequência de aperto",
      "Verifique se o cabeçote precisa retífica"
    ],
    warnings: [
      "Trabalho extremamente complexo",
      "Erro pode causar danos permanentes ao motor",
      "Considere seriamente contratar um profissional"
    ]
  },
  {
    id: "14",
    slug: "substituicao-embreagem",
    title: "Substituição de Embreagem Completa",
    category: "Transmissão",
    difficulty: "Avançado",
    estimatedTime: "180 minutos",
    description: "Troca completa do kit de embreagem. Trabalho que exige remoção da transmissão.",
    tools: [
      { name: "Macaco de transmissão", buyLink: "#" },
      { name: "Jogo de ferramentas completo", buyLink: "#" },
      { name: "Kit de embreagem novo", buyLink: "#" },
      { name: "Centralizador de disco", buyLink: "#" },
      { name: "Torquímetro", buyLink: "#" }
    ],
    steps: [
      "Levante o veículo com segurança",
      "Desconecte a bateria",
      "Remova o câmbio/transmissão",
      "Marque a posição do platô",
      "Remova os parafusos do platô gradualmente",
      "Retire o conjunto antigo",
      "Limpe o volante do motor",
      "Verifique o estado do volante",
      "Instale o disco novo usando centralizador",
      "Instale o platô novo",
      "Aperte os parafusos em cruz no torque correto",
      "Reinstale a transmissão",
      "Ajuste o pedal da embreagem"
    ],
    tips: [
      "Substitua sempre o kit completo",
      "Verifique o rolamento piloto",
      "Use centralizador para alinhar o disco"
    ],
    warnings: [
      "Transmissão é muito pesada - use equipamento adequado",
      "Não contamine o disco com óleo ou graxa",
      "Aperte no torque exato especificado"
    ]
  },
  {
    id: "15",
    slug: "retifica-motor",
    title: "Retífica Completa do Motor",
    category: "Motor",
    difficulty: "Avançado",
    estimatedTime: "480 minutos",
    description: "Reconstrução completa do motor. Trabalho para mecânicos experientes ou oficinas especializadas.",
    tools: [
      { name: "Ferramentas completas de mecânica", buyLink: "#" },
      { name: "Torquímetro de precisão", buyLink: "#" },
      { name: "Micrômetro", buyLink: "#" },
      { name: "Kit de retífica completo", buyLink: "#" },
      { name: "Suporte para motor", buyLink: "#" }
    ],
    steps: [
      "Remova o motor do veículo",
      "Desmonte completamente o motor",
      "Limpe todas as peças",
      "Meça todas as folgas e tolerâncias",
      "Envie bloco e cabeçote para retífica",
      "Substitua pistões, anéis e bronzinas",
      "Monte o motor com peças novas",
      "Aperte todos os parafusos no torque correto",
      "Instale juntas e vedações novas",
      "Reinstale o motor no veículo",
      "Complete todos os fluidos",
      "Faça o amaciamento correto"
    ],
    tips: [
      "Documente todo o processo com fotos",
      "Use sempre peças originais ou de qualidade",
      "Siga rigorosamente os torques especificados"
    ],
    warnings: [
      "Trabalho extremamente complexo",
      "Requer conhecimento técnico avançado",
      "Fortemente recomendado contratar profissional especializado"
    ]
  },
  {
    id: "16",
    slug: "reparo-sistema-ar-condicionado",
    title: "Reparo do Sistema de Ar Condicionado",
    category: "Sistema de Climatização",
    difficulty: "Avançado",
    estimatedTime: "150 minutos",
    description: "Diagnóstico e reparo do sistema de A/C. Requer equipamentos especiais e certificação.",
    tools: [
      { name: "Manifold de pressão", buyLink: "#" },
      { name: "Máquina de recuperação de gás", buyLink: "#" },
      { name: "Detector de vazamentos", buyLink: "#" },
      { name: "Vacuômetro", buyLink: "#" },
      { name: "Gás refrigerante", buyLink: "#" },
      { name: "Óleo para compressor", buyLink: "#" }
    ],
    steps: [
      "Conecte o manifold nas válvulas de serviço",
      "Verifique as pressões do sistema",
      "Recupere o gás refrigerante antigo",
      "Faça vácuo no sistema por 30 minutos",
      "Teste vazamentos com detector",
      "Repare vazamentos se encontrados",
      "Adicione óleo novo ao compressor",
      "Recarregue com gás refrigerante",
      "Verifique as pressões de trabalho",
      "Teste o funcionamento completo"
    ],
    tips: [
      "Nunca libere gás refrigerante na atmosfera",
      "Use sempre equipamento de recuperação",
      "Verifique a quantidade exata de gás"
    ],
    warnings: [
      "Requer certificação para manusear refrigerante",
      "Gás sob alta pressão - risco de explosão",
      "Use óculos e luvas de proteção"
    ]
  },
  {
    id: "17",
    slug: "alinhamento-geometria",
    title: "Alinhamento e Geometria Completa",
    category: "Pneus e Suspensão",
    difficulty: "Avançado",
    estimatedTime: "90 minutos",
    description: "Ajuste preciso de ângulos de suspensão. Requer equipamento especializado.",
    tools: [
      { name: "Alinhador computadorizado", buyLink: "#" },
      { name: "Chaves de regulagem", buyLink: "#" },
      { name: "Nível digital", buyLink: "#" },
      { name: "Torquímetro", buyLink: "#" }
    ],
    steps: [
      "Verifique a pressão dos pneus",
      "Inspecione componentes da suspensão",
      "Posicione o veículo no alinhador",
      "Instale os sensores nas rodas",
      "Faça a leitura inicial dos ângulos",
      "Ajuste o cambagem (camber)",
      "Ajuste a cáster",
      "Ajuste a convergência (toe)",
      "Verifique os valores finais",
      "Faça teste de direção"
    ],
    tips: [
      "Faça após trocar componentes da suspensão",
      "Verifique a cada 10.000 km",
      "Observe desgaste irregular dos pneus"
    ],
    warnings: [
      "Requer equipamento profissional",
      "Ajustes incorretos causam desgaste de pneus",
      "Pode afetar a dirigibilidade"
    ]
  },
  {
    id: "18",
    slug: "reprogramacao-ecu",
    title: "Reprogramação da ECU/Injeção Eletrônica",
    category: "Sistema Elétrico",
    difficulty: "Avançado",
    estimatedTime: "120 minutos",
    description: "Diagnóstico e reprogramação do módulo de injeção. Requer scanner profissional.",
    tools: [
      { name: "Scanner automotivo profissional", buyLink: "#" },
      { name: "Laptop com software específico", buyLink: "#" },
      { name: "Cabo de interface OBD2", buyLink: "#" },
      { name: "Carregador de bateria", buyLink: "#" }
    ],
    steps: [
      "Conecte o carregador na bateria",
      "Conecte o scanner na porta OBD2",
      "Leia os códigos de falha armazenados",
      "Faça backup da programação atual",
      "Verifique atualizações disponíveis",
      "Carregue a nova programação",
      "Aguarde o processo completar",
      "Apague códigos de falha",
      "Faça teste de direção",
      "Verifique se não há novos códigos"
    ],
    tips: [
      "Nunca desligue durante a programação",
      "Mantenha bateria carregada",
      "Faça backup antes de qualquer alteração"
    ],
    warnings: [
      "Programação incorreta pode danificar a ECU",
      "Não interrompa o processo",
      "Use apenas software confiável"
    ]
  }
];

export function getProblemBySlug(slug: string): Problem | undefined {
  return problems.find(p => p.slug === slug);
}

export function getProblemsByDifficulty(difficulty: DifficultyLevel): Problem[] {
  return problems.filter(p => p.difficulty === difficulty);
}

export function getProblemsByCategory(category: string): Problem[] {
  return problems.filter(p => p.category === category);
}

export const categories = Array.from(new Set(problems.map(p => p.category)));
