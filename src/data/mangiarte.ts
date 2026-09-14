// Dados completos e fiéis dos cardápios Mangiarte Cucina Italiana

export interface ExecutivoDay {
  dia: string;
  diaExtenso: string;
  pratos: {
    id: string;
    nome: string;
    acompanhamentos: string;
    preco: string;
    tag?: string;
    imagem?: string;
  }[];
}

export const executivoSemana: ExecutivoDay[] = [
  {
    dia: 'SEG',
    diaExtenso: 'Segunda-feira',
    pratos: [
      {
        id: 'seg-1',
        nome: 'Macarrão à Bolonhesa',
        acompanhamentos: 'Com batatas fritas crocantes',
        preco: '28',
        tag: 'Mais Pedido',
      },
      {
        id: 'seg-2',
        nome: 'Parmegiana de Frango',
        acompanhamentos: 'Com arroz branco e batatas fritas',
        preco: '39',
        imagem: '/pratos/pollo-parmegiano-01.jpg',
      },
    ],
  },
  {
    dia: 'TER',
    diaExtenso: 'Terça-feira',
    pratos: [
      {
        id: 'ter-1',
        nome: 'Contra Filé Acebolado',
        acompanhamentos: 'Com arroz branco e batatas fritas',
        preco: '39',
        imagem: '/pratos/costata-acebolado-02.jpg',
      },
      {
        id: 'ter-2',
        nome: 'Pescada ao Limão Siciliano',
        acompanhamentos: 'Com arroz branco e legumes grelhados',
        preco: '42',
        tag: 'Leve & Fresco',
        imagem: '/pratos/pescada-belle-meuniere.jpg',
      },
    ],
  },
  {
    dia: 'QUA',
    diaExtenso: 'Quarta-feira',
    pratos: [
      {
        id: 'qua-1',
        nome: 'Linguiça Toscana',
        acompanhamentos: 'Com arroz, feijão, farofa da casa, fritas e vinagrete',
        preco: '35',
      },
      {
        id: 'qua-2',
        nome: 'Pescada ao Molho de Camarão',
        acompanhamentos: 'Com arroz branco e batatas fritas',
        preco: '47',
        tag: 'Frutos do Mar',
        imagem: '/risotos/risoto-camarao-02.jpg',
      },
    ],
  },
  {
    dia: 'QUI',
    diaExtenso: 'Quinta-feira',
    pratos: [
      {
        id: 'qui-1',
        nome: 'Sobrecoxa Assada',
        acompanhamentos: 'Com arroz, feijão, farofa, polenta frita e vinagrete',
        preco: '35',
      },
      {
        id: 'qui-2',
        nome: 'Estrogonofe de Camarão',
        acompanhamentos: 'Com arroz branco e batata palha',
        preco: '45',
        tag: 'Especial do Chef',
      },
    ],
  },
  {
    dia: 'SEX',
    diaExtenso: 'Sexta-feira',
    pratos: [
      {
        id: 'sex-1',
        nome: 'Macarrão com Almôndegas',
        acompanhamentos: 'Com batatas fritas douradas',
        preco: '35',
      },
      {
        id: 'sex-2',
        nome: 'Salmão ao Pesto',
        acompanhamentos: 'Com arroz branco, legumes selecionados e fritas',
        preco: '54',
        tag: 'Premium',
        imagem: '/pratos/salmao-mediterraneo-02.jpg',
      },
    ],
  },
];

export const cardapioGeral = {
  sugestoesChef: {
    frango: [
      {
        id: 'chef-gnocchi',
        nome: 'Gnocchi Supremo',
        descricao: 'Gnocchi recheado com queijo ao molho funghi, filé de frango grelhado e batatas rústicas.',
        preco: '44',
        imagem: '/pratos/gnocchi-supremo-01.jpg',
      },
      {
        id: 'chef-risoto-verano',
        nome: 'Risoto Verano',
        descricao: 'Risoto de frango servido com polenta frita dourada e salada italiana fresca.',
        preco: '39',
        imagem: '/pratos/risoto-verano-01.jpg',
      },
      {
        id: 'chef-pollo-parmegiano',
        nome: 'Pollo Parmegiano',
        descricao: 'Frango empanado crocante ao molho pomodoro e 4 queijos gratinados, acompanhado por fettuccine na manteiga.',
        preco: '42',
        imagem: '/pratos/pollo-parmegiano-01.jpg',
      },
      {
        id: 'chef-carbonara-crocante',
        nome: 'Carbonara Crocante',
        descricao: 'Fettuccine ao clássico molho carbonara cremoso, servido com frango empanado e polenta frita.',
        preco: '42',
        imagem: '/pratos/carbonara-crocante.jpg',
      },
    ],
    bovino: [
      {
        id: 'chef-escalope-alho',
        nome: 'Escalope ao Alho',
        descricao: 'Escalope de filé mignon aglio i olio servido com fettuccine ao molho carbonara e polenta frita.',
        preco: '53',
        imagem: '/pratos/escalope-aglio-i-olio.jpg',
      },
      {
        id: 'chef-polpetone',
        nome: 'Polpetone Formaggio',
        descricao: 'Polpetone recheado com queijo, molho pomodoro rústico, queijo gratinado e penne ao molho 4 queijos.',
        preco: '42',
        imagem: '/pratos/polpetone-formaggio-01.jpg',
      },
      {
        id: 'chef-costata',
        nome: 'Costata Acebolado',
        descricao: 'Contra filé bovino grelhado e acebolado suculento, acompanha risoto de parmesão e batatas fritas.',
        preco: '47',
        imagem: '/pratos/costata-acebolado-01.jpg',
      },
      {
        id: 'chef-escalope-4formagio',
        nome: 'Escalope 4 Formagio',
        descricao: 'Mignon ao blend quatro queijos acompanhado por fettuccine aglio e olio e legumes salteados.',
        preco: '54',
        imagem: '/pratos/escalope-4-formaggio-01.jpg',
      },
    ],
    delMare: [
      {
        id: 'chef-salmao-mediterraneo',
        nome: 'Salmão Mediterrâneo',
        descricao: 'Salmão grelhado ao pesto de manjericão fresco, servido com fettuccine ao molho Alfredo e legumes salteados.',
        preco: '52',
        imagem: '/pratos/salmao-mediterraneo-01.jpg',
      },
      {
        id: 'chef-pescada-belle',
        nome: 'Pescada Belle Meunière',
        descricao: 'Filé de peixe grelhado servido com risoto de limão siciliano e legumes grelhados.',
        preco: '42',
        imagem: '/pratos/pescada-belle-meuniere.jpg',
      },
      {
        id: 'chef-camarao-provencal',
        nome: 'Camarão Provençal',
        descricao: 'Camarão à provençal com penne ao molho de parmesão e alho gratinado com mussarela, acompanha batata chips.',
        preco: '59',
        imagem: '/promocionais/camarao-provencal-arte-horizontal.jpg',
      },
    ],
  },
  risotos: [
    { nome: 'Risoto de Camarão', descricao: 'Camarões selecionados, arroz arbóreo e toque de ervas', preco: '45', imagem: '/risotos/risoto-camarao-01.jpg' },
    { nome: 'Risoto de Salmão', descricao: 'Lascas de salmão fresco e finalização aromática', preco: '44', imagem: '/risotos/risoto-salmao.jpg' },
    { nome: 'Risoto de Funghi', descricao: 'Cogumelos hidratados em caldo aromático reduzido', preco: '40', imagem: '/risotos/risoto-funghi.jpg' },
    { nome: 'Risoto de Frango', descricao: 'Peito de frango desfiado suculento ao caldo de legumes', preco: '36', imagem: '/risotos/risoto-frango.jpg' },
    { nome: 'Risoto de Tomate Seco', descricao: 'Tomates secos selecionados com manjericão fresco', preco: '36', imagem: '/risotos/risoto-tomate-seco.jpg' },
    { nome: 'Risoto de Parmesão', descricao: 'Parmesão de cura especial, manteiga e vinho branco', preco: '34', imagem: '/risotos/risoto-parmesao.jpg' },
    { nome: 'Risoto de Limão Siciliano', descricao: 'Acidez refrescante e cremosa típica da costa italiana', preco: '34', imagem: '/risotos/risoto-limao-siciliano.jpg' },
  ],
  monteSuaMassa: {
    precoBase: '33',
    massas: ['Penne', 'Fetuccine', 'Gnocchi'],
    massasRecheadas: [{ nome: 'Gnocchi com Queijo', extra: '+4,90' }, { nome: 'Ravioli de Carne', extra: '+4,90' }],
    molhos: ['Pomodoro', 'Bolonhesa', 'Branco', 'Alfredo', 'Aglio i Olio', 'Pesto'],
    molhosEspeciais: [{ nome: '4 Queijos', extra: '+4,90' }, { nome: 'Funghi', extra: '+4,90' }, { nome: 'Carbonara', extra: '+4,90' }],
    adicionais3: ['Bacon', 'Cebola', 'Alho Frito', 'Tomate', 'Ervilha', 'Brócolis', 'Rúcula', 'Mussarela', 'Tomate Seco'],
    extrasApenas7: ['Polenta Frita', 'Batata Frita', 'Legumes Grelhados', 'Salada Italiana', 'Arancini'],
    proteinas: [
      { nome: 'Frango Grelhado', preco: '+10' },
      { nome: 'Frango Empanado', preco: '+12' },
      { nome: 'Polpeta da Casa', preco: '+15' },
      { nome: 'Contra Filé', preco: '+18' },
      { nome: 'Mignon Grelhado', preco: '+22' },
      { nome: 'Camarão Salteado', preco: '+22' },
      { nome: 'Camarão Empanado', preco: '+25' },
      { nome: 'Salmão Grelhado', preco: '+22' },
      { nome: 'Pescada Grelhada', preco: '+15' },
    ],
  },
  paninisEToasts: {
    paninis: [
      { nome: 'Mignon Formagio', descricao: 'Mignon em cubos ao blend 4 queijos, tomate picado e rúcula', preco: '29', imagem: '/paninis/panini-mignon-formaggio-01.jpg' },
      { nome: 'Zucchini (Vegetariano)', descricao: 'Abobrinha gratinada ao molho pesto, tomate seco e queijo derretido', preco: '24', imagem: '/paninis/panini-zucchini-pao-fermentacao.jpg' },
      { nome: 'Pollo Panini', descricao: 'Cream cheese, frango desfiado, cenoura, tomate e rúcula', preco: '24' },
      { nome: 'Napolitano', descricao: 'Queijo derretido, tomate fresco e molho pesto', preco: '24', imagem: '/paninis/panini-zucchini-croissant.jpg' },
      { nome: 'Choco Cream', descricao: 'Croissant recheado com creme à base de chocolate e cream cheese', preco: '22' },
      { nome: 'Pistacchio', descricao: 'Croissant recheado com creme de pistache', preco: '22' },
    ],
    toasts: [
      { nome: 'Toast Napolitano', descricao: 'Queijo derretido, tomate cereja e molho pesto', preco: '22' },
      { nome: 'Toast Pesto e Frango', descricao: 'Cream cheese, frango desfiado, pesto, parmesão, rúcula e cenoura', preco: '22' },
      { nome: 'Toast Zucchini', descricao: 'Tomate seco, abobrinha gratinada ao molho pesto e queijo derretido', preco: '23' },
    ],
    calzones: [
      { nome: 'Calzone Tradicional', descricao: 'Opções de recheio: Carne, Napolitano ou Frango com Requeijão', preco: '15' },
    ],
  },
  porcoes: [
    { nome: 'Batata Frita', peso: '500g', preco: '25' },
    { nome: 'Polenta Frita Crocante', peso: '500g', preco: '25' },
    { nome: 'Arancini Clássico', peso: '6 unidades', preco: '25', imagem: '/porcoes/arancini.jpg' },
  ],
  sobremesasEBebidas: {
    sobremesas: [
      { nome: 'Petit Gateau', descricao: 'Bolo quente com recheio cremoso e sorvete', preco: '25' },
      { nome: 'Strudel de Maçã', descricao: 'Com calda de chocolate quente', preco: '15' },
      { nome: 'Palha Italiana', descricao: 'Tradicional doce à base de brigadeiro e biscoito', preco: '10' },
      { nome: 'Cannoli Siciliano', descricao: 'Opções: Chocolate, Pistache ou Brigadeiro', preco: '10' },
    ],
    bebidas: [
      { nome: 'Soda Italiana', detalhe: 'Maçã Verde, Limão Siciliano ou Frutas Vermelhas', preco: '12' },
      { nome: 'Suco Natural 300ml', detalhe: 'Frutas da estação', preco: '12' },
      { nome: 'Refrigerante Lata', detalhe: 'Coca-Cola, Guaraná e variedades', preco: '8,90' },
      { nome: 'Água Mineral', detalhe: 'Com ou sem gás', preco: '6,50' },
      { nome: 'Vinho em Garrafa (280ml)', detalhe: 'Rótulo selecionado da casa', preco: '20' },
      { nome: 'Taça de Vinho (200ml)', detalhe: 'Tinto ou Branco da casa', preco: '15' },
      { nome: 'Café Espresso', detalhe: 'Grãos selecionados', preco: '8' },
      { nome: 'Capuccino Italiano', detalhe: 'Cremoso com canela e cacau', preco: '14' },
    ],
  },
};

export interface PromocionalItem {
  id: string;
  titulo: string;
  subtitulo: string;
  descricao: string;
  imagem: string;
  tag: string;
  destaque?: boolean;
}

export const promocoesData: PromocionalItem[] = [
  {
    id: 'promo-camarao',
    titulo: 'Camarão Provençal',
    subtitulo: 'Acompanha penne ao parmesão gratinado e batata chips',
    descricao: 'Camarões suculentos selados no azeite com alho e ervas finas, guarnecidos com penne cremoso e batatas crocantes.',
    imagem: '/promocionais/camarao-provencal-arte-horizontal.jpg',
    tag: 'Destaque Del Mare',
    destaque: true,
  },
  {
    id: 'promo-escalope',
    titulo: 'Escalope Aglio i Olio',
    subtitulo: 'Com fettuccine à carbonara e polenta frita dourada',
    descricao: 'Filé mignon de corte alto e macio, perfumado com alho laminado dourado e acompanhado pelo tradicional molho carbonara.',
    imagem: '/promocionais/escalope-aglio-i-olio-arte.jpg',
    tag: 'Especial da Casa',
    destaque: true,
  },
];

export const destaquesData = promocoesData;

export interface CarouselDish {
  imagem: string;
  titulo: string;
  categoria: string;
  descricao: string;
  preco?: string;
}

export const carouselDishes: CarouselDish[] = [
  {
    imagem: '/pratos/gnocchi-supremo-01.jpg',
    titulo: 'Gnocchi Supremo',
    categoria: 'Gnocchi Especial',
    descricao: 'Gnocchi recheado com queijo ao molho funghi e filé de frango grelhado',
    preco: 'R$ 44',
  },
  {
    imagem: '/risotos/risoto-camarao-01.jpg',
    titulo: 'Risoto de Camarão',
    categoria: 'Risoto Especial',
    descricao: 'Arroz arbóreo cremoso com camarões selecionados e perfume de ervas',
    preco: 'R$ 45',
  },
  {
    imagem: '/pratos/costata-acebolado-01.jpg',
    titulo: 'Costata Acebolado',
    categoria: 'Corte Bovino',
    descricao: 'Contra filé grelhado suculento com risoto de parmesão e fritas crocantes',
    preco: 'R$ 47',
  },
  {
    imagem: '/pratos/salmao-mediterraneo-01.jpg',
    titulo: 'Salmão Mediterrâneo',
    categoria: 'Del Mare',
    descricao: 'Salmão grelhado ao pesto com fettuccine Alfredo e legumes salteados',
    preco: 'R$ 52',
  },
  {
    imagem: '/pratos/carbonara-crocante.jpg',
    titulo: 'Carbonara Crocante',
    categoria: 'Sugestão do Chef',
    descricao: 'Fettuccine carbonara cremoso servido com frango crocante e polenta',
    preco: 'R$ 42',
  },
  {
    imagem: '/pratos/polpetone-formaggio-01.jpg',
    titulo: 'Polpetone Formaggio',
    categoria: 'Clássico Italiano',
    descricao: 'Polpetone recheado com queijo, molho pomodoro e penne aos 4 queijos',
    preco: 'R$ 42',
  },
  {
    imagem: '/pratos/escalope-4-formaggio-01.jpg',
    titulo: 'Escalope 4 Formaggio',
    categoria: 'Corte Nobre',
    descricao: 'Mignon ao blend quatro queijos com fettuccine aglio e olio e legumes',
    preco: 'R$ 54',
  },
  {
    imagem: '/paninis/panini-mignon-formaggio-01.jpg',
    titulo: 'Panini Mignon Formaggio',
    categoria: 'Paninis & Toasts',
    descricao: 'Mignon em cubos aos 4 queijos, tomate fresco e rúcula na massa rústica',
    preco: 'R$ 29',
  },
  {
    imagem: '/porcoes/arancini.jpg',
    titulo: 'Arancini Clássico',
    categoria: 'Antipasti & Porções',
    descricao: 'Bolinhos de risoto crocantes e dourados com recheio de queijo derretido',
    preco: 'R$ 25',
  },
  {
    imagem: '/WhatsApp Image 2026-09-14 at 14.42.26.jpeg',
    titulo: 'Atmosfera Mangiarte',
    categoria: 'Nosso Espaço',
    descricao: 'Ambiente intimista e acolhedor no Shopping Água Verde',
  },
];

export const galleryImages = [
  '/WhatsApp Image 2026-09-14 at 14.42.26.jpeg', 
  '/WhatsApp Image 2026-09-14 at 14.42.27.jpeg',
  '/WhatsApp Image 2026-09-14 at 14.42.25 (1).jpeg',
  '/WhatsApp Image 2026-09-14 at 14.42.28.jpeg', 
];
