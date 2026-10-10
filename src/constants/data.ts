import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '₱3,200',
    tags: 'AU | Bote',
  },
  {
    title: 'Catena Malbec',
    price: '₱3,400',
    tags: 'AU | Bote',
  },
  {
    title: 'La Vieille Rose',
    price: '₱2,500',
    tags: 'PR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '₱1,800',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '₱1,500',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Spritz',
    price: '₱1,200',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '₱950',
    tags: 'Dark rum | Ginger beer | Hiwa ng dayap',
  },
  {
    title: 'Daiquiri',
    price: '₱600',
    tags: 'Rum | Katas ng dayap | Asukal',
  },
  {
    title: 'Old Fashioned',
    price: '₱1,800',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '₱1,500',
    tags: 'Gin | Sweet Vermouth | Campari | Palamuti ng dalandan',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmand',
    subtitle: 'Kinikilala sa buong mundo dahil sa pambihirang lasa.',
  },
  {
    imgUrl: images.award01,
    title: 'Sumisikat na Bituin',
    subtitle: 'Binibigyang-pugay ang makabagong diskarte sa lutuin.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Sertipiko ng kahusayan sa serbisyo at karanasan.',
  },
  {
    imgUrl: images.award03,
    title: 'Pambihirang Chef',
    subtitle: 'Parangal sa husay at dedikasyon sa sining ng pagluluto.',
  },
];

export default { wines, cocktails, awards };