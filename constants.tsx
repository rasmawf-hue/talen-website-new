import { NavItem, Product, Service, SlideData, StatData } from './types';
import { Shield, PenTool, Wrench, Home, Briefcase, Phone, Image as ImageIcon, Layers } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'الرئيسية', path: '/' },
  { id: 'products', label: 'منتجاتنا', path: '/products' },
  { id: 'services', label: 'خدماتنا', path: '/services' },
  { id: 'about', label: 'من نحن', path: '/about' },
  { id: 'gallery', label: 'معرض الصور', path: '/gallery' },
  { id: 'contact', label: 'تواصل معنا', path: '/contact' },
];

export const SLIDES: SlideData[] = [
  {
    id: 1,
    image: 'https://lh3.googleusercontent.com/d/1N6FjlVKv7mEDTMWn2gk0AuRCOzl5hT8y',
    title: 'جودة لا تضاهى في عالم الألمونيوم',
    description: 'نوافذ وأبواب مصممة لتدوم طويلاً بأعلى معايير العزل والأمان',
    ctaText: 'اكتشف منتجاتنا',
    ctaLink: '/products'
  },
  {
    id: 2,
    image: 'https://lh3.googleusercontent.com/d/1bWJPRyYVChK4IWjoGpKzJxHO5QCFYM4u',
    title: 'واجهات زجاجية عصرية',
    description: 'أضف لمسة من الفخامة لمبناك مع أنظمة الستراكشرال والكيرتن وول',
    ctaText: 'شاهد أعمالنا',
    ctaLink: '/gallery'
  },
  {
    id: 3,
    image: 'https://lh3.googleusercontent.com/d/1xFy79pd5UHZsYOVq2fYBh4Jnd3lmF5kt',
    title: 'حلول متكاملة للمشاريع',
    description: 'من التصميم إلى التنفيذ، نحن شركاؤك في النجاح',
    ctaText: 'تواصل معنا الآن',
    ctaLink: '/contact'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'نوافذ عازلة',
    description: 'توفر هدوءاً تاماً وعزلاً حرارياً يوفر الطاقة',
    image: 'https://lh3.googleusercontent.com/d/1LOP5NyGHksRWd8fWEPx2ydRL0DXAQ_mP'
  },
  {
    id: 2,
    title: 'أبواب',
    description: 'تصاميم قوية وأقفال متعددة النقاط لحماية قصوى',
    image: 'https://lh3.googleusercontent.com/d/1Zakl1oePhj2bL2TN_IRqtpWud3W8OA1h'
  },
  {
    id: 3,
    title: 'واجهات بانوراما',
    description: 'إطلالة واسعة بدون عوائق بصرية',
    image: 'https://lh3.googleusercontent.com/d/1pkjoaf_ezKMI7WKBV1FZCl4m6TwZzTKt'
  },
  {
    id: 4,
    title: 'درابزين زجاجي',
    description: 'تصاميم عصرية للسلالم والبلكونات',
    image: 'https://lh3.googleusercontent.com/d/1xFy79pd5UHZsYOVq2fYBh4Jnd3lmF5kt'
  },
  {
    id: 5,
    title: 'بلكونات ألمونيوم',
    description: 'حلول ذكية لإغلاق البلكونات والاستفادة من المساحة',
    image: 'https://lh3.googleusercontent.com/d/1bWJPRyYVChK4IWjoGpKzJxHO5QCFYM4u'
  },
  {
    id: 6,
    title: 'تصاميم خاصة',
    description: 'تنفيذ حسب الطلب للمشاريع المعمارية الفريدة',
    image: 'https://lh3.googleusercontent.com/d/1-Z649Lhy6ph-ucZCkmpvthH_lLBmpyIq'
  }
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'استشارات فنية',
    description: 'نساعدك في اختيار الأنسب لمشروعك بناءً على دراسات هندسية',
    icon: Layers
  },
  {
    id: 2,
    title: 'تصميم وتنفيذ',
    description: 'فريق هندسي متكامل لتحويل الأفكار إلى واقع ملموس',
    icon: PenTool
  },
  {
    id: 3,
    title: 'صيانة وضمان',
    description: 'خدمات ما بعد البيع متميزة لضمان راحة بالك',
    icon: Wrench
  }
];

export const GALLERY_IMAGES = [
  'https://lh3.googleusercontent.com/d/18QD4DYNdMtZeJZbpHowz5KWJgConmPjw',
  'https://lh3.googleusercontent.com/d/1qpRnvW7dGT-KvylqiMGcvuuUvPF2QXiA',
  'https://lh3.googleusercontent.com/d/1re-QQgFXsvt85YrKdI34n2S4D7SXE57V',
  'https://lh3.googleusercontent.com/d/1s3IOlrzhtCSBeEjtNM6g1e2VXBG0J6oG',
  'https://lh3.googleusercontent.com/d/15Kf5GncY7UncRbMpgaNU7kvGzOK7glaZ',
];

export const COMPANY_STATS: StatData[] = [
  { name: '2015', value: 50 },
  { name: '2017', value: 120 },
  { name: '2019', value: 250 },
  { name: '2021', value: 380 },
  { name: '2023', value: 450 },
  { name: '2025', value: 500 },
];