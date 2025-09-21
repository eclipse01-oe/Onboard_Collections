import { MdAddShoppingCart } from 'react-icons/md';
// Price formatter factory
const priceInCurrency = (locale, currency) =>
  new Intl.NumberFormat(locale, { style: "currency", currency })

const randomPrice = () => {
  const value = Math.random() * 10000 + 11000
  return Number(value.toFixed(2))
};

const randomRating = () => {
  const value = Math.random() * 0.5 + 4.5
  return Number(value.toFixed(1))
}


    export const clothes = [
    {
        id: 1, src: 'photos/ankara.jpg',
        price: priceInCurrency('en-NG', 'NGN').format(randomPrice()),
        name: 'Ankara', desc: `A native Nigerian attire originating 
        from the western part of Nigeria`, rating:  randomRating(),
        icon: MdAddShoppingCart
    },

    {
        id: 2, src: 'photos/suit.webp',
        price: priceInCurrency('en-NG', 'NGN').format(randomPrice()),
        name: 'Suit', desc: `A well tailored suite for men with great 
        fashion sense `, rating:  randomRating(),
        icon: MdAddShoppingCart
    },

    {
        id: 3, src: 'photos/whitesuit.webp',
        price: priceInCurrency('en-NG', 'NGN').format(randomPrice()),
        name: 'White Suit', desc: `White fashionable suite made for men `,
        rating:  randomRating(),
        icon: MdAddShoppingCart
    },

    {
        id: 4, src: 'photos/hoodie.jpg',
        price: priceInCurrency('en-NG', 'NGN').format(randomPrice()),
        name: 'Hoodie', desc: `Flex the hoodie for the hood, with good 
        posture and texture, confy hoodie`, rating:  randomRating(),
        icon: MdAddShoppingCart
    },

    {
        id: 5, src: 'photos/whitehoodie.jpg',
        price: priceInCurrency('en-NG', 'NGN').format(randomPrice()),
        name: 'White Hoodie', desc: `White hoodie with comfortable feel and 
        light on the body`, rating:  randomRating(),
        icon: MdAddShoppingCart
    },

    {
        id: 6, src: 'photos/sweatshirt.jpg',
        price: priceInCurrency('en-NG', 'NGN').format(randomPrice()),
        name: 'Sweat Shirt', desc: `Nice confy sweatshirt for the cold, 
        enjoy a warm day while it is cold`, rating:  randomRating(),
        icon: MdAddShoppingCart
    },

]

export const shoes = [
    {
        id: 7, src: 'photos/canvas.webp',
        price: priceInCurrency('en-NG', 'NGN').format(randomPrice()),
        name: 'Canvas', desc: `cool canvas for all to wear`, rating:  randomRating(),
        icon: MdAddShoppingCart
        
    },

    {
        id: 8, src: 'photos/easefoot.webp',
        price: priceInCurrency('en-NG', 'NGN').format(randomPrice()),
        name: 'Ease Foot', desc: `Easy foot wear for aall outdoors 
        movment`, rating:  randomRating(),
        icon: MdAddShoppingCart
    },

    {
        id: 9, src: 'photos/moccasin.webp',
        price: priceInCurrency('en-NG', 'NGN').format(randomPrice()),
        name: 'Moccasin', desc: `Fashonable men's foot wear and shoe for`, rating:  randomRating(),
        icon: MdAddShoppingCart
    },

    {
        id: 10, src: 'photos/timber.webp',
        price: priceInCurrency('en-NG', 'NGN').format(randomPrice()),
        name: 'Timber Land', desc: `Strong timber land shoes, made from 
        timber strong and long lasting`, rating:  randomRating(),
        icon: MdAddShoppingCart
    },

    {
        id: 11, src: 'photos/woodland_outdoor.webp',
        price: priceInCurrency('en-NG', 'NGN').format(randomPrice()),
        name: 'Woodland', desc: `Strong, long lasting, fashionable men's 
        shoes for all out doors activities`, rating:  randomRating(),
        icon: MdAddShoppingCart
    },

    {
        id: 12, src: 'photos/womenshoes.webp',
        price: priceInCurrency('en-NG', 'NGN').format(randomPrice()),
        name: 'slick shoe', desc: `Easy foot wear and shoe for women `, rating:  randomRating(),
        icon: MdAddShoppingCart
    },

]

export const phones = [
    {
        id: 13, src: 'photos/google_pixel_5.webp',
        price: priceInCurrency('en-NG', 'NGN').format(randomPrice()),
        name: 'Google pixel 5', desc: `Google developed phone`, rating:  randomRating(),
        icon: MdAddShoppingCart
    },

    {
        id: 14, src: 'photos/google_pixel_8.webp',
        price: priceInCurrency('en-NG', 'NGN').format(randomPrice()),
        name: 'Google pixel 8', desc: `Google developed phone`, rating:  randomRating(),
        icon: MdAddShoppingCart
    },

    {
        id: 15, src: 'photos/iphone13.webp',
        price: priceInCurrency('en-NG', 'NGN').format(randomPrice()),
        name: 'Iphone 13', desc: `Apple developed phone`, rating:  randomRating(),
        icon: MdAddShoppingCart
    },

    {
        id: 16, src: 'photos/iphone15.webp',
        price: priceInCurrency('en-NG', 'NGN').format(randomPrice()),
        name: 'Iphone 15', desc: `Apple developed phone`, rating:  randomRating(),
        icon: MdAddShoppingCart
    },

    {
        id: 17, src: 'photos/samsung_galaxy_s20_ultra.webp',
        price: priceInCurrency('en-NG', 'NGN').format(randomPrice()),
        name: 'samsung galaxy s20 ultra', desc: `Samsung galaxies phones`, rating:  randomRating(),
        icon: MdAddShoppingCart
    },

    {
        id: 18, src: 'photos/samsung_galaxy_s6.webp',
        price: priceInCurrency('en-NG', 'NGN').format(randomPrice()),
        name: 'samsung galaxy s6', desc: `Samsung galaxies phones`, rating:  randomRating(),
        icon: MdAddShoppingCart
    },

]