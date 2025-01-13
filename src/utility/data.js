// // ...existing code...
// import React, { useState, useEffect, useRef } from 'react';
// import { FaFlask } from 'react-icons/fa';
// import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// import logo from '../assets/logo.png';
// import { Engine, World, Bodies, Body, Mouse, MouseConstraint } from 'matter-js';

// // export const navigationLinks = [
// //     {
// //         id: 'Order',
// //         title: 'Order',
// //         path: '/product'
// //     },
// //     {
// //         id: 'Contact',
// //         title: 'Contact',
// //         path: '/Contact'
// //     }
// // ];

// // export const header = {
// //     title: 'BEYOND',
// //     animationSequence: [
// //         'Task Manager',
// //         1000,
// //         'Project Planner',
// //         1000,
// //         'Team Collaboration',
// //         1000,
// //         'Time Tracker',
// //         1000
// //     ],
// //     sub: 'Generate UNLIMITED AI videos in your own face, voice & gestures.',
// //     button: 'Order Now'
// // };


// // export const trustWords = [
// //     "BEYOND",
// //     "SLIM",
// //     "LINKED",
// //     "LIST",
// //     "QUEUE",
// //     "STACK",
// //     "TREE",
// // ];

// // export const truse = {
// //     title: " Trusted by 13000+ customer"
// // }

// // export const trustColors = [
// //     '#FF6B6B', // coral red
// //     '#4ECDC4', // turquoise
// //     '#45B7D1', // sky blue
// //     '#96CEB4', // sage green
// //     '#FFEEAD', // cream
// //     '#D4A5A5', // dusty rose
// //     '#9A8194'  // mauve
// // ];

// // export const second = {
// //     slide1: 'Clone yourself',
// //     slide2: 'Unlimited HD videos',
// //     slide3: 'Supports multiple languages',
// //     slide4: 'Section 4'
// // }
// // export const review = [
// //     {
// //         quote: "Beyond Slim has given me visible results in just a few weeks. It’s the boost I needed to feel confident again!",
// //         name: "Ram",
// //         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9us0MxB35Wv3z03TJFrxhub-WyxqpBKAsjQ&s",
// //         star: 4.9
// //     },
// //     {
// //         quote: "I was skeptical at first, but Beyond Slim truly delivers. The natural ingredients make it a product I can trust.",
// //         name: "vikram",
// //         image: "https://t3.ftcdn.net/jpg/10/66/68/96/240_F_1066689635_FMCMRi9EVzawgC9ZItv8Lba0HYeTi9GV.jpg",
// //         star: 4.5
// //     },
// //     {
// //         quote: "The best part about Beyond Slim is how gentle yet effective it is. I can see and feel the difference already!",
// //         name: "Aravind",
// //         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxszw7q9S8KrpiZPwaJOPfmQRDrryj3a4dbaqbG6pa1qPHAqTa2cAeF5ZC8RmS6w-QAXg&usqp=CAU",
// //         star: 5.0
// //     },
// //     {
// //         quote: "This product has been a life-changer. Beyond Slim helped me achieve my goals without compromising my health.",
// //         name: "Tawfeeq",
// //         image: "https://t4.ftcdn.net/jpg/02/32/05/69/240_F_232056937_9HLOlD9DcEvEAppLCn908zkeUeMZKnPJ.jpg",
// //         star: 4.1
// //     },
// //     {
// //         quote: "I love how Beyond Slim not only targets fat but also improves skin elasticity. My skin feels so much healthier!",
// //         name: "Harsha",
// //         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzzvbhLn-RYCJZmspW_Q_S5t4EQkb1jDVW1TUa-k7hbR1n_nq7aFmHqUUJiXGdz72Iqhc&usqp=CAU",
// //         star: 3.5
// //     },
// //     {
// //         quote: "I’ve recommended Beyond Slim to all my friends. It’s natural, effective, and has exceeded my expectations.",
// //         name: "Imran",
// //         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ3tm3wzrIkSZBSz6BeTFmPyN4nYE4b54SjNtynrLHo8jTRN2ouciRHjvIWF_5jit1lxU&usqp=CAU",
// //         star: 4.8
// //     },
// //     {
// //         quote: "Beyond Slim is worth every penny. The results are real, and the product is so easy to incorporate into my routine.",
// //         name: "Benjamin Garcia",
// //         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsXwVlyhW80yril13EFEo_qG3xw-pEVw0d2kXm-qlNBwT2MNdufy5jSSdOPkUTffmH_6Q&usqp=CAU",
// //         star: 4.9
// //     },
// //     {
// //         quote: "This is the first product that actually worked for me. Beyond Slim made a noticeable difference in just weeks.",
// //         name: "Mia Taylor",
// //         image: "https://t3.ftcdn.net/jpg/07/66/92/80/240_F_766928095_NOXtogD59gAPM2Y75qWidDvq0IgB2UUr.jpg",
// //         star: 4.7
// //     },
// //     {
// //         quote: "It’s rare to find a product that’s both natural and effective. Beyond Slim checks all the boxes for me!",
// //         name: "Alexander Martinez",
// //         image: "https://t3.ftcdn.net/jpg/04/99/60/42/240_F_499604283_HJTyA6RedE5QZAPghy0cVeapYuWeJ7mE.jpg",
// //         star: 4.6
// //     },
// //     {
// //         quote: "Beyond Slim is a total game-changer. The natural formula is effective and gentle—exactly what I was looking for.",
// //         name: "Shahbaz",
// //         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmvyLcZdrOQdZXQw3qAHcnuLgk87kfgD8WXw&s",
// //         star: 4.9
// //     }
// // ]

// // export const faqData = [
// //     {
// //         question: "How does Beyond's AI video generation work?",
// //         answer: "Beyond uses advanced AI technology to analyze your face, voice, and gestures from a short training video. It then creates personalized videos that match your appearance and speaking style."
// //     },
// //     {
// //         question: "How long does it take to generate a video?",
// //         answer: "The AI video generation process typically takes 5-10 minutes, depending on the video length and complexity. The initial training process takes about 4 minutes."
// //     },
// //     {
// //         question: "Can I customize the generated videos?",
// //         answer: "Yes, you can customize various aspects including the script, background, gestures, and voice tone. Our platform offers extensive customization options."
// //     },
// //     {
// //         question: "What languages are supported?",
// //         answer: "Beyond currently supports multiple languages including English, Spanish, French, German, and Chinese. We're constantly adding support for more languages."
// //     },
// //     {
// //         question: "Is my data secure?",
// //         answer: "Yes, we take data security seriously. All your videos and personal information are encrypted and stored securely. We never share your data with third parties."
// //     }
// // ];

// // export const footerData = {
// //     columns: [
// //         {
// //             title: "Company",
// //             links: [
// //                 { text: "Home", href: "/" },
// //                 { text: "Product", href: "/product" },
// //                 { text: "Contact", href: "/contact" },
// //                 { text: "Blog", href: "/blog" }
// //             ]
// //         },
// //         {
// //             title: "Legal",
// //             links: [
// //                 { text: "Privacy Policy", href: "/privacy" },
// //                 { text: "Terms of Service", href: "/terms" },
// //                 { text: "Cookie Policy", href: "/cookies" },
// //                 { text: "GDPR", href: "/gdpr" }
// //             ]
// //         }
// //     ]
// // };

// export const navigationLinks = [
//     {
//         id: 'Order',
//         title: 'Order Now',
//         path: '/product'
//     },
//     {
//         id: 'Contact',
//         title: 'Get in Touch',
//         path: '/contact'
//     }
// ];

// export const header = {
//     title: 'BEYOND SLIM',
//     animationSequence: [
//         'Effortless Slimming',
//         1000,
//         'Visible Results Fast',
//         1000,
//         'Natural Ingredients',
//         1000,
//         'Feel Confident Again',
//         1000
//     ],
//     sub: 'Transform your body naturally with Beyond Slim’s cutting-edge formula. Visible results, 100% satisfaction.',
//     button: 'Shop Now'
// };

// export const trustWords = [
//     "EFFECTIVE",
//     "NATURAL",
//     "PROVEN",
//     "SAFE",
//     "TRUSTED",
//     "RELIABLE",
//     "LIFE-CHANGING",
// ];

// export const truse = {
//     title: "Trusted by Over 13,000 Happy Customers Worldwide"
// };

// export const trustColors = [
//     '#FF5733', // vibrant orange-red
//     '#28B463', // emerald green
//     '#3498DB', // deep sky blue
//     '#F1C40F', // sunflower yellow
//     '#E74C3C', // bold red
//     '#8E44AD', // rich purple
//     '#2ECC71'  // bright green
// ];

// export const second = {
//     slide1: 'Transform Yourself Naturally',
//     slide2: 'Guaranteed Results You Can See',
//     slide3: 'Supports Over 10 Languages',
//     slide4: 'Unleash Your Best Self'
// };

// export const review = [
//     {
//         quote: "Beyond Slim has transformed my confidence. The results are incredible, and the natural ingredients give me peace of mind.",
//         name: "Ram",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9us0MxB35Wv3z03TJFrxhub-WyxqpBKAsjQ&s",
//         star: 4.9
//     },
//     {
//         quote: "A product that truly delivers! Beyond Slim helped me achieve my goals effortlessly. Highly recommend!",
//         name: "Vikram",
//         image: "https://t3.ftcdn.net/jpg/10/66/68/96/240_F_1066689635_FMCMRi9EVzawgC9ZItv8Lba0HYeTi9GV.jpg",
//         star: 4.8
//     },
//     {
//         quote: "Gentle, effective, and life-changing. Beyond Slim made a visible difference to my overall health.",
//         name: "Aravind",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxszw7q9S8KrpiZPwaJOPfmQRDrryj3a4dbaqbG6pa1qPHAqTa2cAeF5ZC8RmS6w-QAXg&usqp=CAU",
//         star: 5.0
//     },
//     {
//         quote: "This product exceeded my expectations! Beyond Slim targets fat effectively while boosting my skin’s glow.",
//         name: "Harsha",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzzvbhLn-RYCJZmspW_Q_S5t4EQkb1jDVW1TUa-k7hbR1n_nq7aFmHqUUJiXGdz72Iqhc&usqp=CAU",
//         star: 4.7
//     },
//     {
//         quote: "Beyond Slim has become a staple in my daily routine. It’s natural, effective, and incredibly easy to use.",
//         name: "Imran",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ3tm3wzrIkSZBSz6BeTFmPyN4nYE4b54SjNtynrLHo8jTRN2ouciRHjvIWF_5jit1lxU&usqp=CAU",
//         star: 4.9
//     }
// ];

// export const faqData = [
//     {
//         question: "How does Beyond Slim work?",
//         answer: "Beyond Slim uses a unique blend of natural ingredients to target fat cells, improve metabolism, and enhance skin elasticity. It’s gentle yet highly effective."
//     },
//     {
//         question: "How soon will I see results?",
//         answer: "Many users start seeing noticeable results within 2-3 weeks. Results may vary depending on individual body types and lifestyle."
//     },
//     {
//         question: "Is Beyond Slim safe?",
//         answer: "Absolutely! Beyond Slim is made with 100% natural ingredients and has been rigorously tested for safety and efficacy."
//     },
//     {
//         question: "Can I use Beyond Slim with other products?",
//         answer: "Yes, Beyond Slim is designed to complement your existing skincare and health routines. Always consult a specialist if you’re unsure."
//     },
//     {
//         question: "What if I’m not satisfied with the product?",
//         answer: "We offer a 30-day money-back guarantee. Your satisfaction is our priority, and we’re confident you’ll love Beyond Slim."
//     }
// ];

// export const footerData = {
//     columns: [
//         {
//             title: "Explore",
//             links: [
//                 { text: "Home", href: "/" },
//                 { text: "Product", href: "/product" },
//                 { text: "Contact Us", href: "/contact" },
//                 { text: "Blog", href: "/blog" }
//             ]
//         },
//         {
//             title: "Policies",
//             links: [
//                 { text: "Privacy Policy", href: "/privacy" },
//                 { text: "Terms of Service", href: "/terms" },
//                 { text: "Refund Policy", href: "/refund" },
//                 { text: "GDPR Compliance", href: "/gdpr" }
//             ]
//         }
//     ]
// };


// export const work = {
//     title1: "Transform with Confidence: Choose Beyond Slim",
//     title2: "Experience the Beyond Slim Difference",
// }



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
    sub: `Transform your body naturally with Beyond Slim's cutting- edge formula.Visible results, 100 % satisfaction.`,
    button: 'Shop Now',
};

export const trustWords = [
    "effective",
    "natural",
    "proven",
    "safe",
    "trusted",
    "reliable",
    "life-changing",
    "powerful",
    "secure",
    "resilient",
    "efficient",
    "practical",
    "consistent",
    "sustainable",
    "beneficial",
    "truthful",
    "user-friendly",
    "valuable",
];

export const truse = {
    title: "Trusted by Over 13,000 Happy Customers Worldwide"
};

export const trustColors = [
    'rgba(255, 215, 0, 0.9)',   // Gold
    'rgba(153, 50, 204, 0.9)',  // Purple
    'rgba(50, 205, 50, 0.9)',   // Lime
    'rgba(0, 191, 255, 0.9)',   // Deep Sky Blue
    'rgba(255, 69, 0, 0.9)',    // Orange Red
    'rgba(127, 255, 0, 0.9)'    // Chartreuse
];

export const second = {
    slide1: 'Transform Yourself Naturally',
    slide2: 'You Can See Guaranteed Results',
    slide3: 'Ayurvedic herbs, specifically improve the body’s ability to burn thigh & belly fat.',
    slide4: 'Controls your appetite by helping avoid junk cravings.'
};

export const review = [
    {
        quote: "Beyond Slim has given me visible results in just a few weeks. It’s the boost I needed to feel confident again!",
        name: "Ram",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9us0MxB35Wv3z03TJFrxhub-WyxqpBKAsjQ&s",
        star: 4.9
    },
    {
        quote: "I was skeptical at first, but Beyond Slim truly delivers. The natural ingredients make it a product I can trust.",
        name: "vikram",
        image: "https://t3.ftcdn.net/jpg/10/66/68/96/240_F_1066689635_FMCMRi9EVzawgC9ZItv8Lba0HYeTi9GV.jpg",
        star: 4.5
    },
    {
        quote: "The best part about Beyond Slim is how gentle yet effective it is. I can see and feel the difference already!",
        name: "Aravind",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxszw7q9S8KrpiZPwaJOPfmQRDrryj3a4dbaqbG6pa1qPHAqTa2cAeF5ZC8RmS6w-QAXg&usqp=CAU",
        star: 5.0
    },
    {
        quote: "This product has been a life-changer. Beyond Slim helped me achieve my goals without compromising my health.",
        name: "Tawfeeq",
        image: "https://t4.ftcdn.net/jpg/02/32/05/69/240_F_232056937_9HLOlD9DcEvEAppLCn908zkeUeMZKnPJ.jpg",
        star: 4.1
    },
    {
        quote: "I love how Beyond Slim not only targets fat but also improves skin elasticity. My skin feels so much healthier!",
        name: "Harsha",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzzvbhLn-RYCJZmspW_Q_S5t4EQkb1jDVW1TUa-k7hbR1n_nq7aFmHqUUJiXGdz72Iqhc&usqp=CAU",
        star: 3.5
    },
    {
        quote: "I’ve recommended Beyond Slim to all my friends. It’s natural, effective, and has exceeded my expectations.",
        name: "Imran",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ3tm3wzrIkSZBSz6BeTFmPyN4nYE4b54SjNtynrLHo8jTRN2ouciRHjvIWF_5jit1lxU&usqp=CAU",
        star: 4.8
    },
    {
        quote: "Beyond Slim is worth every penny. The results are real, and the product is so easy to incorporate into my routine.",
        name: "Benjamin Garcia",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsXwVlyhW80yril13EFEo_qG3xw-pEVw0d2kXm-qlNBwT2MNdufy5jSSdOPkUTffmH_6Q&usqp=CAU",
        star: 4.9
    },
    {
        quote: "This is the first product that actually worked for me. Beyond Slim made a noticeable difference in just weeks.",
        name: "Mia Taylor",
        image: "https://t3.ftcdn.net/jpg/07/66/92/80/240_F_766928095_NOXtogD59gAPM2Y75qWidDvq0IgB2UUr.jpg",
        star: 4.7
    },
    {
        quote: "It’s rare to find a product that’s both natural and effective. Beyond Slim checks all the boxes for me!",
        name: "Alexander Martinez",
        image: "https://t3.ftcdn.net/jpg/04/99/60/42/240_F_499604283_HJTyA6RedE5QZAPghy0cVeapYuWeJ7mE.jpg",
        star: 4.6
    },
    {
        quote: "Beyond Slim is a total game-changer. The natural formula is effective and gentle—exactly what I was looking for.",
        name: "Shahbaz",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmvyLcZdrOQdZXQw3qAHcnuLgk87kfgD8WXw&s",
        star: 4.9
    }
    // ...rest of the review items...
];

export const faqData = [
    {
        question: "What is Beyond Slim?",
        answer: "Beyond Slim is a revolutionary natural slimming oil formulated to help reduce body fat, tone the skin, and enhance overall skin health and beauty. It’s your perfect companion for a healthier, more confident you."
    },
    {
        question: "How do I use Beyond Slim slimming oil?",
        answer: "Apply a small amount of Beyond Slim oil to the targeted area and massage in circular motions until fully absorbed. For best results, use twice daily, preferably after a shower and before bedtime."
    },
    {
        question: "Are the ingredients in Beyond Slim safe?",
        answer: "Yes, Beyond Slim is made with 100% natural, safe, and skin-friendly ingredients. It is free from harmful chemicals, making it suitable for daily use on all skin types."
    },
    {
        question: "How long does it take to see results?",
        answer: "Results may vary depending on your body type and lifestyle. However, most users report visible improvements within 2-4 weeks of consistent use, combined with a healthy diet and exercise."
    },
    {
        question: "Can Beyond Slim be used on all body types?",
        answer: "Yes, Beyond Slim is designed for all body types and skin types. Its gentle formula ensures that everyone can benefit from its fat-reducing and skin-enhancing properties."
    },
    // ...rest of the FAQ items...
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
                { text: "Privacy Policy", href: "/privacy-policy" },
                { text: "Terms of Service", href: "/terms" },
                { text: "Refund Policy", href: "/return-policy" },
                { text: "Shipping Policy", href: "/shipping" },
                { text: "Cancel Policy", href: "/cancel" }
            ]
        }
    ]
};

export const work = {
    title1: "Transform with Confidence: Choose Beyond Slim",
    title2: "Experience the Beyond Slim Difference",
};

export const ENGLISH = {
    checkout: {
        title: "Order Summary",
        shippingTitle: "Shipping Information",
        orderSummary: {
            subtotal: "Subtotal",
            shipping: "Shipping",
            total: "Total"
        },
        formFields: {
            firstName: {
                label: "First Name",
                placeholder: "Enter your first name",
                error: "First name is required"
            },
            lastName: {
                label: "Last Name",
                placeholder: "Enter your last name",
                error: "Last name is required"
            },
            email: {
                label: "Email",
                placeholder: "Enter your email",
                error: "Please enter a valid email"
            },
            phone: {
                label: "Phone",
                placeholder: "Enter your phone number",
                error: "Please enter a valid 10-digit phone number"
            },
            address: {
                label: "Address",
                placeholder: "Enter your address",
                error: "Address is required"
            },
            city: {
                label: "City",
                placeholder: "Enter your city",
                error: "City is required"
            },
            country: {
                label: "Country",
                placeholder: "Select your country",
                error: "Country is required"
            }
        },
        successMessage: {
            title: "Payment Successful!",
            description: "Thank you for your purchase. Your order has been confirmed.",
            buttonText: "Return to Home"
        }
    },
    cancel: {
        title: "Cancellation Policy",
        lastUpdated: "Last Updated: December 2024",
        sections: [
            {
                title: "1. Cancellation Period",
                points: [
                    "Orders can be canceled within 24 hours of placing the order.",
                    "After 24 hours, we begin processing and shipping your order, and cancellations will not be possible."
                ]
            },
            {
                title: "2. How to Cancel Your Order",
                description: "To cancel your order, please follow these steps:",
                points: [
                    "Contact Us Immediately: Reach out to our customer support team at +91990-852-6444 within 24 hours of your order.",
                    "Provide Order Details: Include your order number and reason for cancellation in your message to help us process your request faster."
                ]
            },
            {
                title: "3. Cancellations Post-Shipping",
                points: [
                    "If your order has already been shipped, we will not be able to cancel it. In this case, you may return the product after receiving it.",
                    "To initiate a return, please refer to our Return Policy for further instructions."
                ]
            },
            {
                title: "4. Refund Process",
                points: [
                    "Full Refunds: If your cancellation request is processed before the product is shipped, you will receive a full refund.",
                    "Partial Refunds: If you cancel the order after the product has been shipped, the cost of the product will be refunded with less shipping charges, once we receive the returned item in its original condition."
                ]
            },
            {
                title: "5. Non-Cancellable Conditions",
                points: [
                    "Opened/Used Products: Once the product has been opened or used, cancellations will not be accepted. Please check the product carefully upon delivery.",
                    "Special Promotions or Offers: Orders placed under special promotions or discounts may be subject to different cancellation terms, which will be specified during the purchase process."
                ]
            }
        ],
        footer: {
            message: "We aim to provide a seamless experience, and our customer service team is here to assist you with any issues you may encounter.",
            thankYou: "Thank you for choosing Beyond Slim. We appreciate your understanding and support!"
        }
    },
    shipping: {
        title: "Shipping Policy",
        lastUpdated: "Last Updated: December 2024",
        sections: [
            {
                title: "1. Shipping Coverage",
                content: [
                    {
                        subtitle: "Domestic Shipping",
                        text: "We deliver to all major cities and towns across India. Pin code verification is available at checkout. Remote locations may require additional delivery time. Certain restricted areas may not be serviceable."
                    },
                    {
                        subtitle: "International Shipping",
                        text: "We are happy to offer international shipping to customers worldwide. Our goal is to deliver your order as quickly and efficiently as possible, no matter where you are."
                    }
                ]
            },
            {
                title: "2. Shipping Methods",
                content: [
                    {
                        subtitle: "Standard Delivery",
                        text: "Delivery within 5–7 business days. Available across all serviceable locations."
                    }
                ]
            },
            {
                title: "3. Shipping Partners",
                text: "We work with reputed courier partners, including:",
                list: ["Aramex", "DHL", "Blue Dart", "DTDC"]
            },
            {
                title: "4. Order Processing",
                content: [
                    {
                        subtitle: "Processing Time",
                        text: "Orders are processed within 24 hours of placement. Order confirmation is sent via email. Bulk orders may require additional processing time."
                    },
                    {
                        subtitle: "Order Tracking",
                        text: "A tracking number is provided via email. Customer service assistance is available for tracking queries."
                    }
                ]
            },
            // ... continue with other sections
            {
                title: "12. Customer Support",
                content: [
                    {
                        subtitle: "Email",
                        text: "israelitesshopping171@gmail.com"
                    },
                    {
                        subtitle: "Phone",
                        text: "990-852-6444"
                    },
                    {
                        subtitle: "Response time",
                        text: "Within 4 business hours during operational hours."
                    }
                ]
            },
            {
                title: "13. Policy Updates",
                text: "This policy is subject to change. Updates will be posted on our website. Customers will be notified via email for significant changes at least 7 days in advance. Continued use of our services implies acceptance of the updated policy."
            }
        ],
        footer: {
            text: "For more information, contact us atisraelitesshopping171@gmail.com"
        }
    },
    return: {
        title: "Return Policy",
        lastUpdated: "Last Updated: December 2024",
        sections: [
            {
                title: "Return Eligibility",
                content: "Your purchase is eligible for a return if it meets the following criteria: the product must be returned in its original packaging (used or unused), reach the specified address listed on our website, and arrive within 15 days of the purchase date. Damaged products will not be accepted."
            },
            {
                title: "Refund Process",
                content: "To process a refund, customers must initiate the return process and send the product to the specified address. Once the product is received and inspected, refunds will be credited to the original payment method within 10 business days, excluding shipping costs."
            },
            {
                title: "Shipping Responsibility",
                content: "The return process is customer-initiated, and customers are responsible for ensuring the product is shipped to the specified address. Return shipping costs are not covered unless the return is due to a manufacturing defect or error."
            }
        ],
        footer: {
            contact: "For any return inquiries, please contact us at israelitesshopping171@gmail.com"
        }
    },
    terms: {
        title: "Terms and Conditions",
        lastUpdated: "Last Updated: December 2024",
        sections: [
            {
                title: "Acceptance of Terms",
                content: "By downloading, installing, or using the Genius-Baby ('the App'), you agree to be bound by these Terms and Conditions ('Terms'). If you do not agree to these Terms, do not use the App."
            },
            {
                title: "License",
                content: "Genius-Baby grants you a limited, non-exclusive, non-transferable, and revocable license to use the App for personal, non-commercial purposes, subject to these Terms."
            },
            {
                title: "User Obligations",
                content: "You must be at least 18 years old to use the App. You agree to use the App only for lawful purposes and in accordance with these Terms. You must not attempt to interfere with the App's operation or security."
            },
            {
                title: "Intellectual Property",
                content: "All content, features, and functionality (including but not limited to text, graphics, logos, and software) are owned by Genius-Baby or its licensors and are protected by copyright and other laws. You agree not to reproduce, duplicate, copy, sell, resell, or exploit any part of the App without our express written permission."
            },
            {
                title: "User-Generated Content",
                content: "You may be able to submit, upload, or otherwise make available content (such as playlists or reviews) through the App. By doing so, you grant Genius-Baby a worldwide, royalty-free, perpetual, irrevocable, non-exclusive, and sublicensable right to use, modify, distribute, and display such content in connection with the App."
            },
            {
                title: "Privacy",
                content: "Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information."
            },
            {
                title: "Termination",
                content: "We reserve the right to terminate or suspend your access to the App at any time, with or without notice, for any reason, including if you breach these Terms."
            },
            {
                title: "Limitation of Liability",
                content: "To the fullest extent permitted by law, Genius-Baby App and its affiliates, officers, directors, employees, agents, and licensors shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:- Your use or inability to use the App;- Any unauthorized access to or use of our servers and/or any personal information stored therein;- Any bugs, viruses, or the like that may be transmitted to or through the App by any third party;- Any errors or omissions in any content."
            },
            {
                title: "Changes to Terms",
                content: "We may modify these Terms from time to time. We will notify you of any changes by posting the new Terms on the App. Your continued use of the App after the changes are made will constitute your acceptance of the new Terms."
            },
            {
                title: "Governing Law",
                content: "These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions."
            },
            {
                title: "Contact Information",
                content: "If you have any questions about these Terms, please contact us at srilogishyd@gmail.com."
            }
        ],
        footer: {
            message: "We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of any changes.",
            contact: "For any questions regarding our terms, please contact israelitesshopping171@gmail.com."
        }
    },
    privacy: {
        title: "Privacy Policy",
        lastUpdated: "Last Updated: December 2024",
        sections: [
            {
                title: "Information Collection",
                content: "We collect personal information that you provide directly to us, such as your name, billing address, shipping address, email address, and phone number. You provide this information when you contact us through a form on the Site. We also collect non-personal information, including browser type, operating system, IP address, browsing activity, and demographic details, automatically when you use the Site."
            },
            {
                title: "Use of Information",
                content: "We use personal information to respond to your inquiries and requests. Non-personal information is used to enhance the Site, improve user experience, and support internal marketing efforts. We will not share your personal information with third parties without your consent, except as required by law."
            },
            {
                title: "Cookies and Tracking",
                content: "We use cookies and similar tracking technologies to collect non-personal information about your usage of the Site. Cookies help us remember your preferences and improve your browsing experience. Login cookies last for two days, screen options cookies last for a year, and additional cookies used during article editing expire after one day. Selecting \"Remember Me\" will extend login persistence to two weeks. Logging out will remove login cookies."
            },
            {
                title: "Third-Party Services",
                content: "We may use third-party service providers to operate the Site and deliver our services. These providers may have access to non-personal information. Personal information will not be shared with third parties for their marketing purposes without your consent."
            },
            {
                title: "Security",
                content: "We take reasonable steps to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no internet transmission or website is completely secure. We encourage users to take precautions when sharing personal data online."
            },
            {
                title: "Children's Privacy",
                content: "The Site is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe your child has provided us with personal information, please contact us to remove it."
            },
            {
                title: "Policy Updates",
                content: "This Privacy Policy may be updated periodically. Changes will be posted on the Site, and we encourage you to review this policy regularly to stay informed about our practices."
            }
        ],
        footer: {
            contact: "If you have any questions about our privacy practices, please contact us at israelitesshopping171@gmail.com."
        }
    }
};

export default { ENGLISH };


// ...existing code...

// export const productPage = {
//     title: "Premium Product",
//     description: "Experience the ultimate in quality and design with our premium product line.",
//     price: 76.23,
//     features: {
//         title: "Product Features",
//         items: [
//             {
//                 title: "Feature 1",
//                 description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
//             },
//             {
//                 title: "Feature 2",
//                 description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
//             },
//             {
//                 title: "Feature 3",
//                 description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
//             }
//         ]
//     },
//     buttons: {
//         addToCart: "Add to Cart"
//     },
//     animation: {
//         boxColors: ['#3B82F6', '#60A5FA', '#93C5FD', '#2563EB', '#1D4ED8']
//     }
// };

export const productPage = {
    title: "Beyond Slim: Redefining Beauty and Health",
    description: "Experience the ultimate transformation with Beyond Slim, a revolutionary formula designed to target stubborn fat areas, improve skin elasticity, and enhance your overall beauty and health naturally.",
    price: 76.23,
    features: {
        title: "Product Benefits",
        items: [
            {
                title: "Targets Stubborn Fat",
                description: "Specially formulated with natural ingredients to focus on those hard-to-lose areas, helping you achieve a slimmer, more toned look."
            },
            {
                title: "Enhances Skin Elasticity",
                description: "Promotes improved skin elasticity, giving you a youthful and radiant appearance from within."
            },
            {
                title: "Boosts Overall Health",
                description: "Packed with essential nutrients to support your beauty and health, making you feel as good as you look."
            },
            {
                title: "100% Natural Ingredients",
                description: "Made with carefully selected natural ingredients to ensure safety, effectiveness, and holistic wellness."
            }
        ]
    },
    buttons: {
        addToCart: "Add to Cart"
    },
    animation: {
        boxColors: ['#FFB6C1', '#FF69B4', '#FFC0CB', '#F08080', '#FA8072']
    }
};
