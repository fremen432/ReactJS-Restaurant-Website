const menu = [
    {
        name: 'House Egg Rolls (2)',
        description: 'Crispy fried Vietnamese egg rolls with marinated ground pork and veggies, served with fresh lettuce and homemade fish sauce.',
        category:'Appetizers',
        price: '4.75',
        extra_description: '',
        id: 1
    },
    {
        name: 'House Spring Rolls (2)',
        description: 'Vermicelli and lettuce wrapped in rice paper, served with homemade peanut sauce. Your choice of shrimp, grilled pork, grilled chicken, or fried tofu.',
        category:'Appetizers',
        price: '4.75',
        extra_description: '',
        id: 2
    },
    {
        name: 'Pot Stickers (6)',
        description: 'Pork dumpling served with savory dipping sauce. ',
        category:'Appetizers',
        price: '5.50',
        extra_description: '',
        id: 3
    },
    {
        name: 'Fresh Brewed Jasmine Iced Tea',
        description: '',
        category:'Beverages',
        price: '1.00',
        extra_description: '',
        id: 4

    },
    {
        name: 'Soft Drink',
        description: 'Coke, Diet Coke, DrPepper, Sprite, Root Beer, Lemonade Minutemade, Barq’s Rootbeer',
        category:'Beverages',
        price: '2.00',
        extra_description: '',
        id: 5

    },
    {
        name: 'Beer, Wine, and Sake Available on Location!',
        description: '',
        category:'Beverages',
        price: '',
        extra_description: '',
        id: 6
    },
    {
        name: 'Chicken Fried Rice (Gluten Free)',
        description: 'Fried rice with chicken',
        category:'Fried Rice',
        price: '12.00',
        extra_description: '',
        id: 7
    },
    {
        name: 'Veggie Fried Rice (Gluten Free)',
        description: 'Fried rice with broccoli, bell peppers, mushroom, whole green peas, baby bok choy, and sliced carrot',
        category:'Fried Rice',
        price: '12.00',
        extra_description: '',
        id: 8
    },
    {
        name: 'Tofu Fried Rice (Gluten Free)',
        description: 'Fried rice with fresh deep fried tofu',
        category:'Fried Rice',
        price: '12.00',
        extra_description: '',
        id: 9
    },
    {
        name: 'Beef Fried Rice (Gluten Free)',
        description: 'Fried rice with seasoned beef slices',
        category:'Fried Rice',
        price: '14.00',
        extra_description: '',
        id: 10
    },
    {
        name: 'Pho Combination',
        description: 'Beef Noodle Soup with Lean Brisket, sliced raw Rib Eye Steak & Pork Meatballs',
        category:'Noodle Soup – Pho',
        price: '12.00',
        // price_small: '12.00',
        // price_large: '13.00',
        extra_description: '',
        id: 11
    },
    {
        name: 'Pho Rib Eyes (Gluten Free)',
        description: 'Beef Noodle Soup with sliced raw Rib Eye Steak',
        category:'Noodle Soup – Pho',
        price: '12.00',
        // price_small: '12.00',
        // price_large: '13.00',
        extra_description: '',
        id: 12
    },
    {
        name: 'Pho Brisket (Gluten Free)',
        description: 'Beef Noodle Soup with sliced Lean Briskets',
        category:'Noodle Soup – Pho',
        price: '11.50',
        // price_small: '11.50',
        // price_large: '12.50',
        extra_description: '',
        id: 13
    },
    {
        name: 'Kung Pao Chicken, Beef or Shrimp  – Mild',
        description: 'A spicy stir-fried dish made with breaded chicken or seasoned beef, celery, bell peppers, roasted peanut, carrot, and dried chili. It’s one of the classic dish of Szechuan. Served with jasmine white rice.',
        category:'Pho House Specials',
        price: '14.00',
        extra_description: '(Add $2 for beef & $3 for shrimp option)',
        id: 14
    },
    {
        name: 'Orange Chicken',
        description: 'White meat breaded chicken breast pieces coated in a orange sweet sauce. Served with white rice.',
        category:'Pho House Specials',
        price: '14.00',
        extra_description: '',
        id: 15
    },
    {
        name: 'Sesame Chicken',
        description: 'Traditional Chinese stir-fried white meat breaded chicken breast pieces with sesame seed and broccoli. Served with jasmine white rice.',
        category:'Pho House Specials',
        price: '14.00',
        extra_description: '',
        id: 16
    },
]

const locations = [
    {
        name: 'Belterra',
        phone: '555-555-5550',
        address: '164 Belterra Village Way Austin, Texas 78737',
        email: 'simplyPho@exampleEmail.com'
    },
    {
        name: 'Bee Cave',
        phone: '555-555-5551',
        address: '12913 Galleria Cir Ste. 101, Austin, TX 78738',
        email: 'simplyPho@exampleEmail.com'
    },
    {
        name: 'Marble Falls',
        phone: '555-555-5552',
        address: '101 US-281, Marble Falls, TX 78654',
        email: 'simplyPho@exampleEmail.com'
    },
]

const hours = [
    {
        day: 'Monday',
        opening: '11:00 am',
        closing: '8:45 pm'
    },
    {
        day: 'Tuesday',
        opening: '11:00 am',
        closing: '8:45 pm'
    },
    {
        day: 'Wednesday',
        opening: '11:00 am',
        closing: '8:45 pm'
    },
    {
        day: 'Thursday',
        opening: '11:00 am',
        closing: '8:45 pm'
    },
    {
        day: 'Friday',
        opening: '11:00 am',
        closing: '9:45 pm'
    },
    {
        day: 'Saturday',
        opening: '11:00 am',
        closing: '9:45 pm'
    },
    {
        day: 'Sunday',
        opening: '12:00 am',
        closing: '8:45 pm'
    },
]

const sortMenu = arr => {
    let apps = []
    let drinks = []
    let friedRice =[]
    let pho = []
    let specials = []

    arr.forEach(el => {
        el.category == 'Appetizers' && apps.push(el)
        el.category == 'Beverages' && drinks.push(el)
        el.category == 'Fried Rice' && friedRice.push(el)
        el.category == 'Noodle Soup – Pho' && pho.push(el)
        el.category == 'Pho House Specials' && specials.push(el)
    });

    return [apps, drinks, friedRice, pho, specials]
}
const sortedMenu = sortMenu(menu);

export { menu, locations, hours, sortedMenu }