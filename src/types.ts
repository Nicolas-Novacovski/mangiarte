export interface ExecutiveDish {
  id: string;
  name: string;
  accompaniments: string;
  price: number;
  badge?: string;
  image?: string;
}

export interface ExecutiveDay {
  dayKey: 'seg' | 'ter' | 'qua' | 'qui' | 'sex';
  shortDay: string;
  fullDay: string;
  dishes: ExecutiveDish[];
}

export interface MenuItem {
  id: string;
  name: string;
  italianName?: string;
  description: string;
  price: number;
  category: 'executivo' | 'pratos' | 'massas' | 'sobremesas' | 'bebidas';
  image: string;
  badge?: string;
  isVegetarian?: boolean;
  isChefSpecial?: boolean;
}

export interface MenuCategory {
  id: 'executivo' | 'pratos' | 'massas' | 'sobremesas' | 'bebidas';
  label: string;
  subtitle: string;
}
