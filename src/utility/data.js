// ...existing code...
import React, { useState, useEffect, useRef } from 'react';
import { FaFlask } from 'react-icons/fa';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../assets/logo.png';
import { Engine, World, Bodies, Body, Mouse, MouseConstraint } from 'matter-js';

// export const navigationLinks = [
//     {
//         id: 'Order',
//         title: 'Order',
//         path: '/product'
//     },
//     {
//         id: 'Contact',
//         title: 'Contact',
//         path: '/Contact'
//     }
// ];

// export const header = {
//     title: 'BEYOND',
//     animationSequence: [
//         'Task Manager',
//         1000,
//         'Project Planner',
//         1000,
//         'Team Collaboration',
//         1000,
//         'Time Tracker',
//         1000
//     ],
//     sub: 'Generate UNLIMITED AI videos in your own face, voice & gestures.',
//     button: 'Order Now'
// };


// export const trustWords = [
//     "BEYOND",
//     "SLIM",
//     "LINKED",
//     "LIST",
//     "QUEUE",
//     "STACK",
//     "TREE",
// ];

// export const truse = {
//     title: " Trusted by 13000+ customer"
// }

// export const trustColors = [
//     '#FF6B6B', // coral red
//     '#4ECDC4', // turquoise
//     '#45B7D1', // sky blue
//     '#96CEB4', // sage green
//     '#FFEEAD', // cream
//     '#D4A5A5', // dusty rose
//     '#9A8194'  // mauve
// ];

// export const second = {
//     slide1: 'Clone yourself',
//     slide2: 'Unlimited HD videos',
//     slide3: 'Supports multiple languages',
//     slide4: 'Section 4'
// }
// export const review = [
//     {
//         quote: "Beyond Slim has given me visible results in just a few weeks. It’s the boost I needed to feel confident again!",
//         name: "Ram",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9us0MxB35Wv3z03TJFrxhub-WyxqpBKAsjQ&s",
//         star: 4.9
//     },
//     {
//         quote: "I was skeptical at first, but Beyond Slim truly delivers. The natural ingredients make it a product I can trust.",
//         name: "vikram",
//         image: "https://t3.ftcdn.net/jpg/10/66/68/96/240_F_1066689635_FMCMRi9EVzawgC9ZItv8Lba0HYeTi9GV.jpg",
//         star: 4.5
//     },
//     {
//         quote: "The best part about Beyond Slim is how gentle yet effective it is. I can see and feel the difference already!",
//         name: "Aravind",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxszw7q9S8KrpiZPwaJOPfmQRDrryj3a4dbaqbG6pa1qPHAqTa2cAeF5ZC8RmS6w-QAXg&usqp=CAU",
//         star: 5.0
//     },
//     {
//         quote: "This product has been a life-changer. Beyond Slim helped me achieve my goals without compromising my health.",
//         name: "Tawfeeq",
//         image: "https://t4.ftcdn.net/jpg/02/32/05/69/240_F_232056937_9HLOlD9DcEvEAppLCn908zkeUeMZKnPJ.jpg",
//         star: 4.1
//     },
//     {
//         quote: "I love how Beyond Slim not only targets fat but also improves skin elasticity. My skin feels so much healthier!",
//         name: "Harsha",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzzvbhLn-RYCJZmspW_Q_S5t4EQkb1jDVW1TUa-k7hbR1n_nq7aFmHqUUJiXGdz72Iqhc&usqp=CAU",
//         star: 3.5
//     },
//     {
//         quote: "I’ve recommended Beyond Slim to all my friends. It’s natural, effective, and has exceeded my expectations.",
//         name: "Imran",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ3tm3wzrIkSZBSz6BeTFmPyN4nYE4b54SjNtynrLHo8jTRN2ouciRHjvIWF_5jit1lxU&usqp=CAU",
//         star: 4.8
//     },
//     {
//         quote: "Beyond Slim is worth every penny. The results are real, and the product is so easy to incorporate into my routine.",
//         name: "Benjamin Garcia",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsXwVlyhW80yril13EFEo_qG3xw-pEVw0d2kXm-qlNBwT2MNdufy5jSSdOPkUTffmH_6Q&usqp=CAU",
//         star: 4.9
//     },
//     {
//         quote: "This is the first product that actually worked for me. Beyond Slim made a noticeable difference in just weeks.",
//         name: "Mia Taylor",
//         image: "https://t3.ftcdn.net/jpg/07/66/92/80/240_F_766928095_NOXtogD59gAPM2Y75qWidDvq0IgB2UUr.jpg",
//         star: 4.7
//     },
//     {
//         quote: "It’s rare to find a product that’s both natural and effective. Beyond Slim checks all the boxes for me!",
//         name: "Alexander Martinez",
//         image: "https://t3.ftcdn.net/jpg/04/99/60/42/240_F_499604283_HJTyA6RedE5QZAPghy0cVeapYuWeJ7mE.jpg",
//         star: 4.6
//     },
//     {
//         quote: "Beyond Slim is a total game-changer. The natural formula is effective and gentle—exactly what I was looking for.",
//         name: "Shahbaz",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmvyLcZdrOQdZXQw3qAHcnuLgk87kfgD8WXw&s",
//         star: 4.9
//     }
// ]

// export const faqData = [
//     {
//         question: "How does Beyond's AI video generation work?",
//         answer: "Beyond uses advanced AI technology to analyze your face, voice, and gestures from a short training video. It then creates personalized videos that match your appearance and speaking style."
//     },
//     {
//         question: "How long does it take to generate a video?",
//         answer: "The AI video generation process typically takes 5-10 minutes, depending on the video length and complexity. The initial training process takes about 4 minutes."
//     },
//     {
//         question: "Can I customize the generated videos?",
//         answer: "Yes, you can customize various aspects including the script, background, gestures, and voice tone. Our platform offers extensive customization options."
//     },
//     {
//         question: "What languages are supported?",
//         answer: "Beyond currently supports multiple languages including English, Spanish, French, German, and Chinese. We're constantly adding support for more languages."
//     },
//     {
//         question: "Is my data secure?",
//         answer: "Yes, we take data security seriously. All your videos and personal information are encrypted and stored securely. We never share your data with third parties."
//     }
// ];

// export const footerData = {
//     columns: [
//         {
//             title: "Company",
//             links: [
//                 { text: "Home", href: "/" },
//                 { text: "Product", href: "/product" },
//                 { text: "Contact", href: "/contact" },
//                 { text: "Blog", href: "/blog" }
//             ]
//         },
//         {
//             title: "Legal",
//             links: [
//                 { text: "Privacy Policy", href: "/privacy" },
//                 { text: "Terms of Service", href: "/terms" },
//                 { text: "Cookie Policy", href: "/cookies" },
//                 { text: "GDPR", href: "/gdpr" }
//             ]
//         }
//     ]
// };

export const navigationLinks = [
    {
        id: 'Order',
        title: 'Order Now',
        path: '/product'
    },
    {
        id: 'Contact',
        title: 'Get in Touch',
        path: '/contact'
    }
];

export const header = {
    title: 'BEYOND SLIM',
    animationSequence: [
        'Effortless Slimming',
        1000,
        'Visible Results Fast',
        1000,
        'Natural Ingredients',
        1000,
        'Feel Confident Again',
        1000
    ],
    sub: 'Transform your body naturally with Beyond Slim’s cutting-edge formula. Visible results, 100% satisfaction.',
    button: 'Shop Now'
};

export const trustWords = [
    "EFFECTIVE",
    "NATURAL",
    "PROVEN",
    "SAFE",
    "TRUSTED",
    "RELIABLE",
    "LIFE-CHANGING",
];

export const truse = {
    title: "Trusted by Over 13,000 Happy Customers Worldwide"
};

export const trustColors = [
    '#FF5733', // vibrant orange-red
    '#28B463', // emerald green
    '#3498DB', // deep sky blue
    '#F1C40F', // sunflower yellow
    '#E74C3C', // bold red
    '#8E44AD', // rich purple
    '#2ECC71'  // bright green
];

export const second = {
    slide1: 'Transform Yourself Naturally',
    slide2: 'Guaranteed Results You Can See',
    slide3: 'Supports Over 10 Languages',
    slide4: 'Unleash Your Best Self'
};

export const review = [
    {
        quote: "Beyond Slim has transformed my confidence. The results are incredible, and the natural ingredients give me peace of mind.",
        name: "Ram",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9us0MxB35Wv3z03TJFrxhub-WyxqpBKAsjQ&s",
        star: 4.9
    },
    {
        quote: "A product that truly delivers! Beyond Slim helped me achieve my goals effortlessly. Highly recommend!",
        name: "Vikram",
        image: "https://t3.ftcdn.net/jpg/10/66/68/96/240_F_1066689635_FMCMRi9EVzawgC9ZItv8Lba0HYeTi9GV.jpg",
        star: 4.8
    },
    {
        quote: "Gentle, effective, and life-changing. Beyond Slim made a visible difference to my overall health.",
        name: "Aravind",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxszw7q9S8KrpiZPwaJOPfmQRDrryj3a4dbaqbG6pa1qPHAqTa2cAeF5ZC8RmS6w-QAXg&usqp=CAU",
        star: 5.0
    },
    {
        quote: "This product exceeded my expectations! Beyond Slim targets fat effectively while boosting my skin’s glow.",
        name: "Harsha",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzzvbhLn-RYCJZmspW_Q_S5t4EQkb1jDVW1TUa-k7hbR1n_nq7aFmHqUUJiXGdz72Iqhc&usqp=CAU",
        star: 4.7
    },
    {
        quote: "Beyond Slim has become a staple in my daily routine. It’s natural, effective, and incredibly easy to use.",
        name: "Imran",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ3tm3wzrIkSZBSz6BeTFmPyN4nYE4b54SjNtynrLHo8jTRN2ouciRHjvIWF_5jit1lxU&usqp=CAU",
        star: 4.9
    }
];

export const faqData = [
    {
        question: "How does Beyond Slim work?",
        answer: "Beyond Slim uses a unique blend of natural ingredients to target fat cells, improve metabolism, and enhance skin elasticity. It’s gentle yet highly effective."
    },
    {
        question: "How soon will I see results?",
        answer: "Many users start seeing noticeable results within 2-3 weeks. Results may vary depending on individual body types and lifestyle."
    },
    {
        question: "Is Beyond Slim safe?",
        answer: "Absolutely! Beyond Slim is made with 100% natural ingredients and has been rigorously tested for safety and efficacy."
    },
    {
        question: "Can I use Beyond Slim with other products?",
        answer: "Yes, Beyond Slim is designed to complement your existing skincare and health routines. Always consult a specialist if you’re unsure."
    },
    {
        question: "What if I’m not satisfied with the product?",
        answer: "We offer a 30-day money-back guarantee. Your satisfaction is our priority, and we’re confident you’ll love Beyond Slim."
    }
];

export const footerData = {
    columns: [
        {
            title: "Explore",
            links: [
                { text: "Home", href: "/" },
                { text: "Product", href: "/product" },
                { text: "Contact Us", href: "/contact" },
                { text: "Blog", href: "/blog" }
            ]
        },
        {
            title: "Policies",
            links: [
                { text: "Privacy Policy", href: "/privacy" },
                { text: "Terms of Service", href: "/terms" },
                { text: "Refund Policy", href: "/refund" },
                { text: "GDPR Compliance", href: "/gdpr" }
            ]
        }
    ]
};
