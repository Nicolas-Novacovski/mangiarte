import { MenuItem, MenuCategory, ExecutiveDay } from '../types';

export const EXECUTIVE_WEEKLY_MENU: ExecutiveDay[] = [
  {
    dayKey: 'seg',
    shortDay: 'SEG',
    fullDay: 'Segunda-feira',
    dishes: [
      {
        id: 'exec-seg-1',
        name: 'Macarrão à Bolonhesa',
        accompaniments: 'Acompanha batatas fritas crocantes',
        price: 28.00,
        badge: 'Mais Popular',
        image: 'https://images.unsplash.com/photo-1622973536968-3ead9e780960?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'exec-seg-2',
        name: 'Parmegiana de Frango',
        accompaniments: 'Acompanha arroz branco e fritas crocantes',
        price: 39.00,
        badge: 'Clássico',
        image: 'https://images.unsplash.com/photo-1632778149955-f81f64483ae8?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  {
    dayKey: 'ter',
    shortDay: 'TER',
    fullDay: 'Terça-feira',
    dishes: [
      {
        id: 'exec-ter-1',
        name: 'Contra Filé Acebolado',
        accompaniments: 'Acompanha arroz branco e batatas fritas',
        price: 39.00,
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'exec-ter-2',
        name: 'Pescada ao Limão Siciliano',
        accompaniments: 'Acompanha arroz branco e legumes frescos salteados',
        price: 42.00,
        badge: 'Leve & Saudável',
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  {
    dayKey: 'qua',
    shortDay: 'QUA',
    fullDay: 'Quarta-feira',
    dishes: [
      {
        id: 'exec-qua-1',
        name: 'Linguiça Toscana Grelhada',
        accompaniments: 'Acompanha arroz, feijão, farofa da casa, fritas e vinagrete',
        price: 35.00,
        badge: 'Completo',
        image: 'https://images.unsplash.com/photo-1599920194483-36c117d91cb6?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'exec-qua-2',
        name: 'Pescada ao Molho de Camarão',
        accompaniments: 'Acompanha arroz branco e fritas crocantes',
        price: 47.00,
        badge: 'Especial',
        image: 'https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  {
    dayKey: 'qui',
    shortDay: 'QUI',
    fullDay: 'Quinta-feira',
    dishes: [
      {
        id: 'exec-qui-1',
        name: 'Sobrecoxa Assada',
        accompaniments: 'Acompanha arroz, feijão, farofa, polenta frita e vinagrete',
        price: 35.00,
        badge: 'Tradicional',
        image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'exec-qui-2',
        name: 'Estrogonofe de Camarão',
        accompaniments: 'Acompanha arroz branco soltinho e batata palha',
        price: 45.00,
        image: 'https://images.unsplash.com/photo-1601314169368-809f61b783f9?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  {
    dayKey: 'sex',
    shortDay: 'SEX',
    fullDay: 'Sexta-feira',
    dishes: [
      {
        id: 'exec-sex-1',
        name: 'Macarrão com Almôndegas',
        accompaniments: 'Acompanha batatas fritas crocantes',
        price: 35.00,
        badge: 'Italianíssimo',
        image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'exec-sex-2',
        name: 'Salmão ao Pesto',
        accompaniments: 'Acompanha arroz branco, legumes e batatas fritas',
        price: 54.00,
        badge: 'Premium',
        image: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
];

export const CHEF_FEATURED_DISH: MenuItem = {
  id: 'destaque-camarao-provencal',
  name: 'Camarão Provençal',
  italianName: 'Penne al Parmigiano e Gamberi alla Provenzale',
  description: 'Penne ao molho cremoso de parmesão com alho gratinado com queijo, coberto com camarões à provençal. Acompanha batatas chips artesanais crocantes.',
  price: 59.00,
  category: 'pratos',
  image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=1200&q=85',
  badge: 'Sugestão Especial do Chef',
  isChefSpecial: true,
};

export const MENU_CATEGORIES: MenuCategory[] = [
  { id: 'executivo', label: 'Menu Executivo', subtitle: 'Servido de segunda a sexta das 11h às 15h' },
  { id: 'pratos', label: 'Especiais & Carnes', subtitle: 'Pratos especiais e receitas exclusivas' },
  { id: 'massas', label: 'Massas Italianas', subtitle: 'Massas selecionadas com molhos artesanais' },
  { id: 'sobremesas', label: 'Sobremesas', subtitle: 'Doces artesanais para finalizar' },
  { id: 'bebidas', label: 'Bebidas & Vinhos', subtitle: 'Vinhos, sucos e refrigerantes' },
];

export const INITIAL_MENU_ITEMS: MenuItem[] = [
  // Pratos e Especiais
  CHEF_FEATURED_DISH,
  {
    id: 'prato-parmegiana-mignon',
    name: 'Parmegiana de Filé Mignon',
    italianName: 'Filetto di Manzo alla Parmigiana',
    description: 'Filé mignon selecionado empanado crocante, coberto com molho de pomodoro artesanal e queijo muçarela gratinado. Acompanha arroz e fritas.',
    price: 64.00,
    category: 'pratos',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    badge: 'Favorito',
  },
  {
    id: 'prato-salmao-grelhado',
    name: 'Salmão Grelhado com Legumes',
    italianName: 'Salmone Grigliato con Verdure',
    description: 'Posta de salmão fresco grelhada na chapa com azeite extravirgem e ervas finas, servida com arroz branco e seleção de legumes da estação.',
    price: 58.00,
    category: 'pratos',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80',
  },

  // Massas
  {
    id: 'massa-tagliatelle-ragu',
    name: 'Tagliatelle ao Ragù Bolonhesa',
    italianName: 'Tagliatelle al Ragù Bolognese',
    description: 'Massa com autêntico ragù de carne lentamente cozido por horas com vinho e tomate italiano, finalizado com parmesão ralado na hora.',
    price: 46.00,
    category: 'massas',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'massa-penne-quatro-queijos',
    name: 'Penne Quatro Queijos Gratinado',
    italianName: 'Penne ai Quattro Formaggi',
    description: 'Penne al dente envolvido em molho cremoso de gorgonzola, parmesão, provolone e muçarela, gratinado ao forno até dourar.',
    price: 44.00,
    category: 'massas',
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281691?auto=format&fit=crop&w=800&q=80',
    isVegetarian: true,
  },
  {
    id: 'massa-spaghetti-carbonara',
    name: 'Spaghetti à Carbonara',
    italianName: 'Spaghetti alla Carbonara Tradizionale',
    description: 'Espaguete al dente com bacon dourado crocante, gemas de ovos frescos, queijo pecorino e parmesão, finalizado com pimenta-do-reino moída.',
    price: 48.00,
    category: 'massas',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=80',
  },

  // Sobremesas
  {
    id: 'doce-tiramisu',
    name: 'Tiramisù Clássico',
    italianName: 'Tiramisù Tradizionale al Mascarpone',
    description: 'Sobremesa clássica italiana com biscoitos savoiardi embebidos em café espresso, creme suave de queijo mascarpone e cacau em pó 100%.',
    price: 24.00,
    category: 'sobremesas',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80',
    isVegetarian: true,
    badge: 'Imperdível',
  },
  {
    id: 'doce-panna-cotta',
    name: 'Panna Cotta com Frutas Vermelhas',
    italianName: 'Panna Cotta ai Frutti di Bosco',
    description: 'Creme de leite fresco com fava de baunilha, textura aveludada, coberta com calda artesanal fresca de morango, amora e mirtilo.',
    price: 22.00,
    category: 'sobremesas',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80',
    isVegetarian: true,
  },

  // Bebidas
  {
    id: 'beb-suco-natural',
    name: 'Sucos Naturais da Fruta',
    italianName: 'Spremuta di Frutta Fresca',
    description: 'Laranja, Limão Siciliano, Maracujá ou Abacaxi com hortelã fresca (400ml).',
    price: 12.00,
    category: 'bebidas',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'beb-taca-vinho',
    name: 'Taça de Vinho Tinto / Branco',
    italianName: 'Calice di Vino Italiano',
    description: 'Vinho tinto selecionado da casa, harmoniza perfeitamente com massas e carnes (150ml).',
    price: 22.00,
    category: 'bebidas',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'beb-refrigerante',
    name: 'Refrigerantes & Água Mineral',
    italianName: 'Bibite e Acqua Minerale',
    description: 'Coca-Cola, Guaraná Antarctica, Água com ou sem gás.',
    price: 7.50,
    category: 'bebidas',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80',
  },
];
