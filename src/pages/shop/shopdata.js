const SHOP_DATA = [
    {
      'id': 1,
      title: 'Hats',
      routeName: 'hats',
      items: [
        {
          id: 1,
          name: 'Brown Brim',
          imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        //   imageUrl: "/images/shop-img/hats/brown-brim.png",
          price: 25,
          wishlist:true,
          size:['xs','s','m','xl','l','xxl'],
          description:{
            availability: "in stock",
            brand: "Tailspin",
           color: ['Blue','red','green'],
            condition: "new",
            description: "Charming sundress perfect for lunch out on the town.",
            id: "1",
          }
        },
        {
          id: 2,
          name: 'Blue Beanie',
          imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
        //   imageUrl: "/images/shop-img/hats/blue-beanie.png",
          price: 18,
          wishlist:false,
          size:['xs','s','m','xl','xxl','l'],
          description:{
            availability: "in stock",
            brand: "Tailspin",
           color: ['Blue','red','green'],
            condition: "new",
            description: "Charming sundress perfect for lunch out on the town.",
            id: "2",
          }
        },
        {
          id: 3,
          name: 'Brown Cowboy',
          wishlist:false,
          size:['m','xl','xxl'],
          imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
        //   imageUrl: "/images/shop-img/hats/brown-cowboy.png",
          price: 35,
          description:{
            availability: "in stock",
            brand: "Tailspin",
           color: ['Blue','red','green'],
            condition: "new",
            description: "Charming sundress perfect for lunch out on the town.",
            id: "3",
          }
        },
        {
          id: 4,
          name: 'Grey Brim',
          wishlist:false,
          imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
        //   imageUrl: "/images/shop-img/hats/grey-brim.png",
          price: 25,
          size:['xs','s','l','xxl'],
          description:{
            availability: "in stock",
            brand: "Tailspin",
           color: ['Blue','red','green'],
            condition: "new",
            description: "Charming sundress perfect for lunch out on the town.",
            id: "4",
          }
        },
        {
          id: 5,
          name: 'Green Beanie',
          imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
          // imageUrl: "/images/shop-img/hats/green-beanie.png",
          size:['s'],
          price: 18,
          description:{
            availability: "in stock",
            brand: "Tailspin",
           color: ['Blue','red','green'],
            condition: "new",
            description: "Charming sundress perfect for lunch out on the town.",
            id: "5",
          }
        },
        {
          id: 6,
          name: 'Palm Tree Cap',
          imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
          // imageUrl: "/images/shop-img/hats/palm-tree-cap.png",
          size:['m','xl','xxl','l'],
          price: 14,
          description:{
            availability: "in stock",
            brand: "Tailspin",
           color: ['Blue','red','green'],
            condition: "new",
            description: "Charming sundress perfect for lunch out on the town.",
            id: "6",
          }
        },
        {
          id: 7,
          name: 'Red Beanie',
          imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
          // imageUrl: "/images/shop-img/hats/red-beanie.png",
          price: 18,
          size:['xxl'],
          description:{
            availability: "in stock",
            brand: "Tailspin",
           color: ['Blue','red','green'],
            condition: "new",
            description: "Charming sundress perfect for lunch out on the town.",
            id: "7",
          }
        },
        {
          id: 8,
          name: 'Wolf Cap',
          imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
          // imageUrl: "/images/shop-img/hats/wolf-cap.png",
          size:['xl'],
          price: 14
        },
        {
          id: 9,
          name: 'Blue Snapback',
          size:['xs','s','m','xl','xxl','l'],
          imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
          // imageUrl: "/images/shop-img/hats/blue-snapback.png",
          price: 16
        }
      ]
    },
    {
      id: 2,
      title: 'Sneakers',
      routeName: 'sneakers',
      items: [
        {
          id: 10,
          name: 'Adidas NMD',
          imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
          // imageUrl: "/images/shop-img/sneakers/adidas-nmd.png", 
        size:['xs','s','m','xl','xxl','l'],
          price: 220,
          wishlist:false,
          description:{
            availability: "in stock",
            brand: "Tailspin",
           color: ['Blue','red','green'],
            condition: "new",
            description: "Charming sundress perfect for lunch out on the town.",
            id: "1",
          }
        },
        {
          id: 11,
          name: 'Adidas Yeezy',
          imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
        //   imageUrl: "/images/shop-img/sneakers/yeezy.png",
          size:['xs','s','m','xl','xxl'],
          price: 280,
          wishlist:false,
          description:{
            availability: "in stock",
            brand: "Tailspin",
           color: ['Blue','red','green'],
            condition: "new",
            description: "Charming sundress perfect for lunch out on the town.",
            id: "2",
          }
        },
        {
          id: 12,
          size:['s'],
          name: 'Black Converse',
          wishlist:false,
          imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
        //   imageUrl: "/images/shop-img/sneakers/black-converse.png",
          price: 110,
          description:{
            availability: "in stock",
            brand: "Tailspin",
           color: ['Blue','red','green'],
            condition: "new",
            description: "Charming sundress perfect for lunch out on the town.",
            id: "3",
          }
        },
        {
          id: 13,
          size:['m','xl','xxl','l'],
          name: 'Nike White AirForce',
          wishlist:false,
          imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        //   imageUrl: "/images/shop-img/sneakers/white-nike-high-tops.png",
          price: 160,
          description:{
            availability: "in stock",
            brand: "Tailspin",
           color: ['Blue','red','green'],
            condition: "new",
            description: "Charming sundress perfect for lunch out on the town.",
            id: "4",
          }
        },
        {
          id: 14,
          size:['m','xl','xxl'],
          name: 'Nike Red High Tops',
          wishlist:false,
          imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
        //   imageUrl: "/images/shop-img/sneakers/nikes-red.png",
          price: 160
        },
        {
          id: 15,
          size:['xs','s','m','xl','xxl'],
          name: 'Nike Brown High Tops',
          imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
          // imageUrl: "/images/shop-img/sneakers/nike-brown.png",
          price: 160
        },
        {
          id: 16,
          name: 'Air Jordan Limited',
          imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
          // imageUrl: "/images/shop-img/sneakers/nike-funky.png",
          size:['xs','s','m','xl','xxl','l'],
          price: 190
        },
        {
          id: 17,
          name: 'Timberlands',
          imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
          size:['xs','s','m','xl','xxl'],

          // imageUrl: "/images/shop-img/sneakers/timberlands.png",
          price: 200
        }
      ]
    },
    {
      id: 3,
      title: 'Jackets',
      routeName: 'jackets',
      items: [
        {
          id: 18,
          name: 'Black Jean Shearling',
          wishlist:false,
          size:['xs','s','m','xl','xxl'],
          imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
          // imageUrl: "/images/shop-img/jackets/black-shearling.png",
          price: 125,
          description:{
            availability: "in stock",
            brand: "Tailspin",
           color: ['Blue','red','green'],
            condition: "new",
            description: "Charming sundress perfect for lunch out on the town.",
            id: "1",
          }
        },
        {
          id: 19,
          size:['xs','xxl','l'],
          name: 'Blue Jean Jacket',
          imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
          wishlist:false,
          // imageUrl: "/images/shop-img/jackets/blue-jean-jacket.png",
          price: 90,
          description:{
            availability: "in stock",
            brand: "Tailspin",
           color: ['Blue','red','green'],
            condition: "new",
            description: "Charming sundress perfect for lunch out on the town.",
            id: "2",
          }
        },
        {
          id: 20,
          size:['m','xl','xxl'],
          name: 'Grey Jean Jacket',
          imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
          wishlist:false,
          // imageUrl: "/images/shop-img/jackets/grey-jean-jacket.png",
          price: 90,
          description:{
            availability: "in stock",
            brand: "Tailspin",
           color: ['Blue','red','green'],
            condition: "new",
            description: "Charming sundress perfect for lunch out on the town.",
            id: "3",
          }
        },
        {
          id: 21,
          name: 'Brown Shearling',
          size:['xxl'],
          imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
          wishlist:false,
          // imageUrl: "/images/shop-img/jackets/brown-shearling.png",
          price: 165,
          description:{
            availability: "in stock",
            brand: "Tailspin",
           color: ['Blue','red','green'],
            condition: "new",
            description: "Charming sundress perfect for lunch out on the town.",
            id: "4",
          }
        },
        {
          id: 22,
          name: 'Tan Trench',
          imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
          size:['xs','s','m','xl','xxl','l'],
          // imageUrl: "/images/shop-img/jackets/brown-trench.png",
          price: 185
        }
      ]
    },
    {
      id: 4,
      title: 'Womens',
      routeName: 'womens',
      items: [
        {
          id: 23,
          size:['m','xl','xxl'],
          name: 'Blue Tanktop',
          imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
          // imageUrl: "/images/shop-img/womens/blue-tank.png",
          price: 25,
          description:{
            availability: "in stock",
            brand: "Tailspin",
           color: ['Blue','red','green'],
            condition: "new",
            description: "Charming sundress perfect for lunch out on the town.",
            id: "1",
          }
        },
        {
          id: 24,
          size:['m','xl','xxl'],
          name: 'Floral Blouse',
          imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
          // imageUrl: "/images/shop-img/womens/floral-blouse.png",
          price: 20,
          description:{
            availability: "in stock",
            brand: "Tailspin",
            color: ['Blue','red','green'],
            condition: "new",
            description: "Charming sundress perfect for lunch out on the town.",
            id: "2",
          }
        },
        {
          id: 25,
          size:['m','l'],
          name: 'Floral Dress',
          imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
          // imageUrl: "/images/shop-img/womens/floral-skirt.png",
          price: 80,
          description:{
            availability: "in stock",
            brand: "Tailspin",
           color: ['Blue','red','green'],
            condition: "new",
            description: "Charming sundress perfect for lunch out on the town.",
            id: "3",
          }
        },
        {
          id: 26,
          size:['xs','s','m'],
          name: 'Red Dots Dress',
          imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
          // imageUrl: "/images/shop-img/womens/red-polka-dot-dress.png",
          price: 80,
          description:{
            availability: "in stock",
            brand: "Tailspin",
           color: ['Blue','red','green'],
            condition: "new",
            description: "Charming sundress perfect for lunch out on the town.",
            id: "4",
          }
        },
        {
          id: 27,
          name: 'Striped Sweater',
          size:['xs','s','m','xl','xxl','l'],
          imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
          // imageUrl: "/images/shop-img/womens/striped-sweater.png",
          price: 45
        },
        {
          id: 28,
          size:['xs','s','m','xl','xxl'],
          name: 'Yellow Track Suit',
          imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
          // imageUrl: "/images/shop-img/womens/yellow-track-suit.png",
          price: 135
        },
        {
          id: 29,
          size:['xl','xxl','l'],
          name: 'White Blouse',
          imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
          // imageUrl: "/images/shop-img/womens/white-vest.png",
          price: 20
        }
      ]
    },
    {
      id: 5,
      title: 'Mens',
      routeName: 'mens',
      items: [
        {
          id: 30,
          size:['xs','s','m','xl','xxl','l'],
          name: 'Camo Down Vest',
          imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
          // imageUrl: "/images/shop-img/mens/camo-vest.png",
          price: 325,
          wishlist:false,
          description:{
            availability: "in stock",
            brand: "Tailspin",
           color: ['Blue','red','green'],
            condition: "new",
            description: "Charming sundress perfect for lunch out on the town.",
            id: "1",
          }
        },
        {
          id: 31,
          size:['xl','xxl','l'],
          name: 'Floral T-shirt',
          imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
          // imageUrl: "/images/shop-img/mens/floral-shirt.png",
          price: 20,
          wishlist:false,
          description:{
            availability: "in stock",
            brand: "Tailspin",
           color: ['Blue','red','green'],
            condition: "new",
            description: "Charming sundress perfect for lunch out on the town.",
            id: "2",
          }
        },
        {
          id: 32,
          size:['xs','s','m','xl','xxl','l'],
          name: 'Black & White Longsleeve',
          wishlist:false,
          imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
          // imageUrl: "/images/shop-img/mens/long-sleeve.png",
          price: 25,
          description:{
            availability: "in stock",
            brand: "Tailspin",
           color: ['Blue','red','green'],
            condition: "new",
            description: "Charming sundress perfect for lunch out on the town.",
            id: "3",
          }
        },
        {
          id: 33,
          name: 'Pink T-shirt',
          size:['xs','s','m','xl','xxl'],
          wishlist:false,
          imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
          // imageUrl: "/images/shop-img/mens/pink-shirt.png",
          price: 25,
          description:{
            availability: "in stock",
            brand: "Tailspin",
           color: ['Blue','red','green'],
            condition: "new",
            description: "Charming sundress perfect for lunch out on the town.",
            id: "4",
          }
        },
        {
          id: 34,
          size:['m','xl','xxl','l'],
          name: 'Jean Long Sleeve',
          imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
          // imageUrl: "/images/shop-img/mens/roll-up-jean-shirt.png",
          price: 40
        },
        {
          id: 35,
          size:['xs','s','m','xl','xxl'],
          name: 'Burgundy T-shirt',
          imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
          // imageUrl: "/images/shop-img/mens/polka-dot-shirt.png",
          price: 25
        }
      ]
    }
  ];
  
  export default  SHOP_DATA;