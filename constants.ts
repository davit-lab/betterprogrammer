
import { Product } from './types';

export const PRODUCTS: Product[] = [
  // Front-end
  {
    id: 'css',
    name: 'CSS',
    category: 'Front-end',
    price: 30,
    originalPrice: 40,
    image: 'https://framerusercontent.com/images/6lGSul6BkAfIZAmHiaxEI1fDY.jpg',
    description: 'სრული კურსი თანამედროვე CSS-ის შესახებ.',
    techStack: ['CSS3', 'Flexbox', 'Responsive Design'],
    features: ['20+ საათი ვიდეო', 'პრაქტიკული დავალებები', 'მუდმივი განახლებები']
  },
  {
    id: 'javascript',
    name: 'JAVASCRIPT',
    category: 'Front-end',
    price: 30,
    originalPrice: 40,
    image: 'https://framerusercontent.com/images/fEwYXWSwdgCsjC0JysDxwZh4.jpg',
    description: 'ისწავლე ყველაზე პოპულარული პროგრამირების ენა.',
    techStack: ['ES6+', 'Async/Await', 'DOM Manipulation'],
    features: ['სრული საფუძვლები', 'რეალური პროექტები', 'PDF ვერსია']
  },
  {
    id: 'html',
    name: 'HTML',
    category: 'Front-end',
    price: 30,
    originalPrice: 40,
    image: 'https://framerusercontent.com/images/qNU7evuPzqGkTxeKMuNBODxGUg.jpg',
    description: 'ვებ-დეველოპმენტის საფუძვლები.',
    techStack: ['HTML5', 'Semantic Web', 'Forms'],
    features: ['საფუძვლიანი ცოდნა', 'SEO ოპტიმიზაცია', 'უფასო რესურსები']
  },
  // Software
  {
    id: 'kali-linux',
    name: 'Kali Linux',
    category: 'Software',
    price: 80,
    originalPrice: 100,
    image: 'https://framerusercontent.com/images/rqcngvdblKHxdi6FeVf6Di7TDnI.png',
    description: 'ეთიკური ჰაკინგი და კიბერუსაფრთხოება.',
    techStack: ['Linux Bash', 'Networking', 'PenTesting Tools'],
    features: ['ეთიკური ჰაკინგი', 'ხელსაწყოების მიმოხილვა', 'უსაფრთხოების აუდიტი']
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    category: 'Software',
    price: 150,
    originalPrice: 220,
    image: 'https://framerusercontent.com/images/KVFN5AVUy9vSYhEbneR59QSvCk.jpg',
    description: 'სისტემების დაცვა და უსაფრთხოების აუდიტი.',
    techStack: ['Network Security', 'Cryptography', 'Risk Management'],
    features: ['დაცვის სტრატეგიები', 'აუდიტის საფუძვლები', 'სერტიფიკატი']
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'Software',
    price: 30,
    originalPrice: 40,
    image: 'https://framerusercontent.com/images/BJs2kh18j04peQlHZxyYVz4e8Is.jpg',
    description: 'დიზაინის შექმნა და პროტოტიპირება.',
    techStack: ['UI Design', 'UX Research', 'Prototyping'],
    features: ['დიზაინ სისტემები', 'ანიმაციები', 'გუნდური მუშაობა']
  },
  // Back-end
  {
    id: 'sql',
    name: 'SQL',
    category: 'Back-end',
    price: 30,
    originalPrice: 40,
    image: 'https://framerusercontent.com/images/kv5ztOEIwe83X8P6gZw4aBDYmU.png',
    description: 'მონაცემთა ბაზების მართვა.',
    techStack: ['PostgreSQL', 'MySQL', 'Database Design'],
    features: ['რთული ქვერები', 'Query Optimization', 'არქიტექტურა']
  },
  {
    id: 'react',
    name: 'REACT',
    category: 'Back-end',
    price: 30,
    originalPrice: 40,
    image: 'https://framerusercontent.com/images/t4ea7OVpToDylWngJF8LVlSpxA.jpg',
    description: 'თანამედროვე UI ბიბლიოთეკა.',
    techStack: ['React Hooks', 'Context API', 'Redux'],
    features: ['სინგლ პეიჯ აპლიკაციები', 'SPA დიზაინი', 'მძლავრი UI']
  },
  {
    id: 'java',
    name: 'JAVA',
    category: 'Back-end',
    price: 30,
    originalPrice: 40,
    image: 'https://framerusercontent.com/images/1w1PNX5skXLfrzhZ4zhsRE79kdo.jpg',
    description: 'სასერვერო პროგრამირება.',
    techStack: ['Spring Boot', 'OOP', 'Microservices'],
    features: ['კორპორატიული აპლიკაციები', 'REST API', 'Backend ლოგიკა']
  }
];

export const CATEGORIES = ['Front-end', 'Software', 'Back-end'] as const;