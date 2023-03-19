import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

function getProduct() {
  return [
    {
      id: 'fd77c655-f154-4163-b18b-324e78100a01',
      name: 'Love',
      category: 'Basic',
      information: 'Love is a basic thing that can feed you.',
      price: 5,
      oldPrice: 7,
      image: 'love.jpg',
    },
    {
      id: 'fd77c655-f154-4163-b18b-324e78100a02',
      name: 'Smile',
      category: 'Basic',
      information: `Smile in everyday life is like salt for cooking. You don\'t notice it until it's missing.`,
      price: 2,
      oldPrice: 0,
      image: 'smile.jpg',
    },

    {
      id: 'fd77c655-f154-4163-b18b-324e78100a03',
      name: 'Hugging',
      category: 'Basic',
      information:
        'Some sources say you need 10 hugs per day to be able to develop.',
      price: 10,
      oldPrice: 12,
      image: 'hugging.jpg',
    },
    {
      id: 'fd77c655-f154-4163-b18b-324e78100a04',
      name: 'Coffee',
      category: 'Extended',
      information:
        'Take your time. Prepare coffee. Dring it mindfully. And read a good story to a coffee ;) ',
      price: 15,
      oldPrice: 20,
      image: 'coffee.jpg',
    },
    {
      id: 'fd77c655-f154-4163-b18b-324e78100a05',
      name: 'Peace',
      category: 'Basic',
      information:
        'Internal peace is what helps us carry on even on difficult days.',
      price: 30,
      oldPrice: 0,
      image: 'peace.jpg',
    },
    {
      id: 'fd77c655-f154-4163-b18b-324e78100a06',
      name: 'Kindness',
      category: 'Extended',
      information:
        'Kidnness helps in everyday contacts, and makes people more open towards each other.',
      price: 10,
      oldPrice: 0,
      image: 'kindness.jpg',
    },
    {
      id: 'fd77c655-f154-4163-b18b-324e78100a07',
      name: 'Happiness',
      category: 'Extended',
      information: `We perceive happiness as a feeling, but it\'s rather a state of mind. To feel happiness you need to practice it!`,
      price: 20,
      oldPrice: 0,
      image: 'happiness.jpg',
    },
    {
      id: 'fd77c655-f154-4163-b18b-324e78100a08',
      name: 'Gratitude',
      category: 'Extended',
      information:
        'Gratitude helps keeping positive attitude in everyday life. Writing what are you grateful for strenghtens your ability to find more things you can be grateful for.',
      price: 17,
      oldPrice: 0,
      image: 'gratitude.jpg',
    },
  ];
}

function getImages() {
  return [
    {
      image: 'love2.jpg',
      productId: 'fd77c655-f154-4163-b18b-324e78100a01',
    },
    {
      image: 'smile2.jpg',
      productId: 'fd77c655-f154-4163-b18b-324e78100a02',
    },
    {
      image: 'smile3.jpg',
      productId: 'fd77c655-f154-4163-b18b-324e78100a02',
    },
    {
      image: 'hugging2.jpg',
      productId: 'fd77c655-f154-4163-b18b-324e78100a03',
    },
    {
      image: 'coffee2.jpg',
      productId: 'fd77c655-f154-4163-b18b-324e78100a04',
    },
    {
      image: 'coffee3.jpg',
      productId: 'fd77c655-f154-4163-b18b-324e78100a04',
    },
    {
      image: 'peace2.jpg',
      productId: 'fd77c655-f154-4163-b18b-324e78100a05',
    },
    {
      image: 'peace3.jpg',
      productId: 'fd77c655-f154-4163-b18b-324e78100a05',
    },
    {
      image: 'kindness2.jpg',
      productId: 'fd77c655-f154-4163-b18b-324e78100a06',
    },
    {
      image: 'happiness2.jpg',
      productId: 'fd77c655-f154-4163-b18b-324e78100a07',
    },
    {
      image: 'happiness3.jpg',
      productId: 'fd77c655-f154-4163-b18b-324e78100a07',
    },
    {
      image: 'gratitude2.jpg',
      productId: 'fd77c655-f154-4163-b18b-324e78100a08',
    },
  ];
}

async function seed_products() {
  await Promise.all(
    getProduct().map((product) => {
      return db.product.create({ data: product });
    }),
  );
}
async function seed_images() {
  await Promise.all(
    getImages().map((image) => {
      return db.images.create({ data: image });
    }),
  );
}

seed_products();
seed_images();