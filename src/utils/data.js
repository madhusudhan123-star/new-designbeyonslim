import visa from '../assets/visa.png';
import logo from '../assets/logo.png';
import paypal from '../assets/paypal.png';
import head from '../assets/header_first_img.png';
import product1 from '../assets/design_one.png';
import sci from '../assets/healone.webp';
// import ab1 from '../assets/about_icone.png';
// import ab2 from '../assets/about_ictwo.png';
// import ab3 from '../assets/about_icthree.png';
import product from '../assets/about_product.png';
import natural from '../assets/natural.png';
import product2 from '../assets/img4.jpg';
import faq from '../assets/faq.jpg';
import heroVideo from '../assets/video2.mp4';
import heroVideo2 from '../assets/video1.mp4';
import one from '../assets/t_one.svg';
import two from '../assets/t_two.svg';
import three from '../assets/t_three.svg';
import four from '../assets/t_four.png';
import five from '../assets/hala.png';
import bottle from '../assets/product_bot.png';
import img1 from '../assets/img3.png'
import img2 from '../assets/img5.png'
import img3 from '../assets/img6.png'
import img4 from '../assets/img7.png'
import img5 from '../assets/img8.jpeg'
import img6 from '../assets/img9.png'
import img7 from '../assets/gmp.png'
import img8 from '../assets/img11.png'
import img9 from '../assets/img12.png'
import { Target, Droplets, Clock, Shield } from 'lucide-react';

const data = {
    ENGLISH: {
        direction: 'ltr',
        navbar: {
            links: [
                { title: "Home", path: "/" },
                { title: "Products", path: "/products" },
                { title: "Contact", path: "/contact" }
            ]
        },
        home: {
            hero: {
                natural: natural,
                img: head,
                title: `<span style="color: #ff1f24;">Beyond Slim</span> The Secret to Your Healthy Body`, // Inline style for color change
                description: "Enhance Your Health and Confidence with Beyond Slim's Natural Slimming Oil.",
                features: [
                    "A revolutionary slimming oil for effective fat reduction and enhanced body health."
                ],
                buttonText: "Shop Now",
                img1: product1,
                video: heroVideo,
                video2: heroVideo2,
            },
            about: {
                img: sci,
                img1: img1,
                img3: img3,
                img4: img7,
                additionalContent: {
                    title: `<span style="color: #ff1f24; ">Beyond Slim</span> Your Key to a Healthier You`,
                    sectitle: "Transform with Confidence: Choose Beyond Slim",
                    description: ``
                },
                // 🌱 Purely Natural, Truly Effective Beyond Slim is crafted with carefully selected natural ingredients, ensuring a gentle yet effective way to support your body’s transformation
                product: product
            },
            faq: [ // Updated FAQ data
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
            ],
            specialist: {
                title: "No.1 Slimming Specialist",
                description: "Discover why Beyond Slim is the top choice for achieving your ideal body and enhancing overall wellness.",
                rating: "4.9/5",
                reviews: "848",
                videoUrl: "https://www.youtube.com/embed/AxYbPlLk79M?autoplay=1&loop=1&playlist=AxYbPlLk79M&rel=0"
            },
            testimonials: {
                title: "What People Say",
                subtitle: "Real stories from our satisfied customers who have experienced amazing results.",
                items: [
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
                ]

            },
            product: {
                one: "Beyond Slim: 🌟 A natural solution to target stubborn fat, improve skin elasticity, and support holistic wellness. Feel confident, look radiant, and embrace your healthiest self! 💪✨",
                two: "Experience the magic of Beyond Slim! 🌿 Target stubborn fat, boost skin elasticity, and enhance overall beauty and health with 100% natural ingredients. Transform your wellness journey today! ✨🔥",
                three: "Experience the power of 100% natural ingredients with Beyond Slim, your ultimate partner in wellness and beauty. Carefully crafted to target stubborn fat areas, this clinically proven formula works wonders in enhancing skin elasticity, leaving your skin firmer, smoother, and radiant. Beyond Slim isn’t just about looking great—it’s about feeling amazing, too. Eco-friendly and cruelty-free, this non-greasy, easy-to-use solution supports your journey to holistic health while caring for the planet. Embrace the transformation and let Beyond Slim redefine your self-care routine."
            },
            benefitss: {
                title: "Why Choose BeyondSlim ?",
                sub: "Our revolutionary formula combines science and nature to deliver exceptional results",
                benefits: [
                    {
                        icon: <Target className="h-8 w-8 text-blue-600" />,
                        title: "Targeted Fat Reduction",
                        description: "Precisely targets stubborn fat deposits through advanced body-mapping technology"
                    },
                    {
                        icon: <Droplets className="h-8 w-8 text-blue-600" />,
                        title: "Natural Ingredients",
                        description: "100% natural botanical extracts that work in harmony with your body"
                    },
                    {
                        icon: <Clock className="h-8 w-8 text-blue-600" />,
                        title: "Fast Acting Formula",
                        description: "See visible results in as little as 4 weeks with consistent use"
                    },
                    {
                        icon: <Shield className="h-8 w-8 text-blue-600" />,
                        title: "Clinically Tested",
                        description: "Dermatologically tested and proven safe for all skin types"
                    }
                ],
            },
            howItWorks: {
                title: "How BeyondSlim Works",
                subtitle: "Our unique three-step process helps you achieve your body goals naturally",
                steps: [
                    {
                        step: "1",
                        title: "Apply",
                        description: "Gently massage the oil onto target areas using circular motions",
                        image: img4
                    },
                    {
                        step: "2",
                        title: "Absorb",
                        description: "Allow the oil to fully absorb into your skin for maximum effectiveness",
                        image: img5
                    },
                    {
                        step: "3",
                        title: "Transform",
                        description: "Experience the transformation as the natural ingredients work their magic",
                        image: img6
                    }
                ]
            },
            product_content: {
                img1: img8,
                img2: img9,
                title1: "Are you ready to take control of your health and achieve the best version of yourself? With Beyond Slim, it’s not just about losing weight—it’s about embracing a lifestyle that promotes overall wellness, vitality, and confidence. Say goodbye to crash diets and hello to sustainable, life-changing results!",
                title2: "It’s time to go beyond slim—to a healthier, happier, more fulfilled YOU. Don’t just dream about change; take the first step today. Join Beyond Slim and transform your health journey for life!",
            }
        },
        footer: {
            logo: logo,
            paypal: paypal,
            visa: visa,
            description: "Achieve your body goals with Beyond Slim's innovative slimming oil. Experience the perfect blend of health and beauty in every drop.",
            contactInfo: {
                title: "Contact Us",
                address: "6th floor, Tirumala Heights, Begumpet, Hyderabad, Telangana 500016",
                phone: "990-852-6444",
                email: "israelitesshopping171@gmail.com"
            },
            usefulLinks: {
                title: "Quick Links",
            },
            copyright: "Copyright © Beyond Slim 2024. All rights reserved.",
            bottomLinks: {
                terms: "Terms and Conditions",
                privacy: "Privacy Policy"
            }
        },
        products: [
            {
                id: 1,
                name: "Beyond Slim",
                description: "Beyond Slim is formulated with natural ingredients to target stubborn fat areas, improve skin elasticity, and enhance overall beauty and health.",
                price: 76.23,
                oldPrice: 100.99,
                image: product2,
                reviews: 848,
                rating: 5
            },
            // ... more products
        ],
        contact: {
            title: "Contact Us",
            subtitle: "Get in touch with us for any questions or concerns",
            phone: {
                title: "Phone",
                content: "990-852-6444"
            },
            email: {
                title: "Email",
                content: "israelitesshopping171@gmail.com"
            },
            address: {
                title: "Address",
                content: "6th floor, Tirumala Heights, Begumpet, Hyderabad, Telangana 500016"
            },
            hours: {
                title: "Business Hours",
                content: "Mon - Fri: 9:00 AM - 6:00 PM"
            },
            form: {
                title: "Send us a Message",
                name: "Your Name",
                email: "Your Email",
                phone: "Your Phone",
                subject: "Subject",
                message: "Your Message",
                submit: "Send Message",
                success: "Message sent successfully!",
                error: "Error sending message. Please try again."
            }
        },
        checkout: {
            title: "Order Summary",
            shippingTitle: "Shipping Information",
            orderSummary: {
                quantity: "Quantity",
                price: "Price",
                subtotal: "Subtotal",
                shipping: "Shipping",
                total: "Total"
            },
            formFields: {
                firstName: {
                    label: "First Name",
                    placeholder: "Enter first name",
                    error: "First name is required"
                },
                lastName: {
                    label: "Last Name",
                    placeholder: "Enter last name",
                    error: "Last name is required"
                },
                email: {
                    label: "Email",
                    placeholder: "Enter email address",
                    error: "Email is required",
                    invalidError: "Please enter a valid email address"
                },
                phone: {
                    label: "Phone Number",
                    placeholder: "Enter 10 digit phone number",
                    error: "Phone number is required",
                    invalidError: "Phone number must be exactly 10 digits"
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
                title: "Order Placed Successfully!",
                description: "Thank you for your purchase. We'll send you an email confirmation shortly.",
                buttonText: "Continue Shopping"
            },
            submitError: "Error submitting form. Please try again.",
            paymentError: "Payment failed. Please try again.",
            submitButton: "Place Order"
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
    },
    HI: {
        direction: 'ltr',
        navbar: {
            links: [
                { title: "होम", path: "/" },
                { title: "उत्पाद", path: "/products" },
                { title: "संपर्क करें", path: "/contact" }
            ]
        },
        home: {
            hero: {
                natural: natural,
                img: head,
                title: `<span style="color: #ff1f24;">बियॉन्ड स्लिम</span> आपके स्वस्थ शरीर का रहस्य`, // रंग बदलने के लिए इनलाइन स्टाइल
                description: "बियॉन्ड स्लिम के प्राकृतिक स्लिमिंग तेल से अपने स्वास्थ्य और आत्मविश्वास को बढ़ाएँ।",
                features: [
                    "प्रभावी वसा घटाने और बेहतर शरीर के स्वास्थ्य के लिए एक क्रांतिकारी स्लिमिंग तेल।"
                ],
                buttonText: "अभी खरीदें",
                img1: product1,
                video: heroVideo,
                video2: heroVideo2,
            },
            about: {
                img: sci,
                img1: img1,
                img2: img2,
                img3: img3,
                img4: img7,
                additionalContent: {
                    title: `<span style="color: #ff1f24;">बियॉन्ड स्लिम</span> एक स्वस्थ जीवन के लिए आपकी कुंजी`,
                    sectitle: "आत्मविश्वास के साथ बदलाव करें: बियॉन्ड स्लिम चुनें",
                    description: ``
                },
                // 🌱 शुद्ध रूप से प्राकृतिक, वास्तव में प्रभावी। बियॉन्ड स्लिम को सावधानीपूर्वक चुने गए प्राकृतिक अवयवों के साथ तैयार किया गया है, जो आपके शरीर के बदलाव में मदद करने का एक कोमल लेकिन प्रभावी तरीका सुनिश्चित करता है।
                product: product
            },
            faq: [ // अपडेटेड FAQ डेटा
                {
                    question: "बियॉन्ड स्लिम क्या है?",
                    answer: "बियॉन्ड स्लिम एक क्रांतिकारी प्राकृतिक स्लिमिंग तेल है, जिसे शरीर की चर्बी कम करने, त्वचा को टोन करने, और समग्र त्वचा स्वास्थ्य और सुंदरता को बढ़ाने के लिए तैयार किया गया है। यह एक स्वस्थ और अधिक आत्मविश्वास से भरे जीवन का आपका सही साथी है।"
                },
                {
                    question: "बियॉन्ड स्लिम स्लिमिंग तेल का उपयोग कैसे करें?",
                    answer: "बियॉन्ड स्लिम तेल को लक्षित क्षेत्र पर लगाएँ और इसे गोलाकार गति में तब तक मालिश करें जब तक यह पूरी तरह से अवशोषित न हो जाए। सर्वोत्तम परिणामों के लिए, इसे दिन में दो बार, स्नान के बाद और सोने से पहले उपयोग करें।"
                },
                {
                    question: "क्या बियॉन्ड स्लिम के अवयव सुरक्षित हैं?",
                    answer: "हाँ, बियॉन्ड स्लिम 100% प्राकृतिक, सुरक्षित, और त्वचा के अनुकूल अवयवों से बना है। यह हानिकारक रसायनों से मुक्त है, जिससे यह सभी प्रकार की त्वचा पर दैनिक उपयोग के लिए उपयुक्त बनता है।"
                },
                {
                    question: "परिणाम देखने में कितना समय लगेगा?",
                    answer: "परिणाम आपके शरीर के प्रकार और जीवनशैली पर निर्भर हो सकते हैं। हालांकि, अधिकांश उपयोगकर्ता नियमित उपयोग, स्वस्थ आहार, और व्यायाम के साथ 2-4 सप्ताह में दिखाई देने वाले सुधार की रिपोर्ट करते हैं।"
                },
                {
                    question: "क्या बियॉन्ड स्लिम सभी प्रकार के शरीर पर उपयोग किया जा सकता है?",
                    answer: "हाँ, बियॉन्ड स्लिम सभी प्रकार के शरीर और त्वचा के लिए डिज़ाइन किया गया है। इसका कोमल फॉर्मूला सुनिश्चित करता है कि हर कोई इसके वसा घटाने और त्वचा बढ़ाने वाले गुणों से लाभ उठा सकता है।"
                },
            ],
            specialist: {
                title: "नंबर 1 स्लिमिंग विशेषज्ञ",
                description: "जानिए क्यों बियॉन्ड स्लिम आपका आदर्श शरीर पाने और समग्र स्वास्थ्य को बढ़ाने के लिए शीर्ष पसंद है।",
                rating: "4.9/5",
                reviews: "848",
                videoUrl: "https://www.youtube.com/embed/AxYbPlLk79M?autoplay=1&loop=1&playlist=AxYbPlLk79M&rel=0"
            },
            trending: {
                subtitle: "ट्रेंडिंग उत्पाद",
                title: "शीर्ष बिकने वाले उत्पाद",
                product: {
                    badge: "100% प्राकृतिक उत्पाद",
                    name: "बियॉन्ड स्लिम",
                    rating: 5,
                    oldPrice: "30.00",
                    price: "66.00",
                    taxInfo: "कर शामिल।",
                    offerText: "सीमित समय की पेशकश:",
                    buttonText: "अभी खरीदें"
                }
            },
            testimonials: {
                title: "लोग क्या कहते हैं",
                subtitle: "हमारे संतुष्ट ग्राहकों की वास्तविक कहानियां जिन्होंने अद्भुत परिणाम देखे।",
                items: [
                    {
                        quote: "बियॉन्ड स्लिम ने मुझे कुछ ही हफ्तों में दिखाई देने वाले परिणाम दिए। यह आत्मविश्वास पाने के लिए मेरी जरूरत का सहारा था!",
                        name: "राम",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9us0MxB35Wv3z03TJFrxhub-WyxqpBKAsjQ&s",
                        star: 4.9
                    },
                    {
                        quote: "पहले मैं संदेह में था, लेकिन बियॉन्ड स्लिम वास्तव में प्रभावी है। प्राकृतिक सामग्री इसे भरोसेमंद बनाती है।",
                        name: "विक्रम",
                        image: "https://t3.ftcdn.net/jpg/10/66/68/96/240_F_1066689635_FMCMRi9EVzawgC9ZItv8Lba0HYeTi9GV.jpg",
                        star: 4.5
                    },
                    {
                        quote: "बियॉन्ड स्लिम का सबसे अच्छा हिस्सा यह है कि यह कोमल और प्रभावी दोनों है। मैं पहले से ही फर्क देख और महसूस कर सकता हूं!",
                        name: "अरविंद",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxszw7q9S8KrpiZPwaJOPfmQRDrryj3a4dbaqbG6pa1qPHAqTa2cAeF5ZC8RmS6w-QAXg&usqp=CAU",
                        star: 5.0
                    },
                    {
                        quote: "यह उत्पाद मेरे जीवन को बदलने वाला साबित हुआ है। बियॉन्ड स्लिम ने मुझे मेरे लक्ष्यों को बिना किसी स्वास्थ्य समझौते के प्राप्त करने में मदद की।",
                        name: "तौफीक",
                        image: "https://t4.ftcdn.net/jpg/02/32/05/69/240_F_232056937_9HLOlD9DcEvEAppLCn908zkeUeMZKnPJ.jpg",
                        star: 4.1
                    },
                    {
                        quote: "मुझे यह पसंद है कि बियॉन्ड स्लिम न केवल वसा को कम करता है बल्कि त्वचा की लोच को भी बढ़ाता है। मेरी त्वचा बहुत स्वस्थ महसूस करती है!",
                        name: "हर्ष",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzzvbhLn-RYCJZmspW_Q_S5t4EQkb1jDVW1TUa-k7hbR1n_nq7aFmHqUUJiXGdz72Iqhc&usqp=CAU",
                        star: 3.5
                    },
                    {
                        quote: "मैंने बियॉन्ड स्लिम को अपने सभी दोस्तों को सिफारिश की है। यह प्राकृतिक, प्रभावी है और मेरी उम्मीदों से आगे बढ़ गया है।",
                        name: "इमरान",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ3tm3wzrIkSZBSz6BeTFmPyN4nYE4b54SjNtynrLHo8jTRN2ouciRHjvIWF_5jit1lxU&usqp=CAU",
                        star: 4.8
                    },
                    {
                        quote: "बियॉन्ड स्लिम हर पैसे के लायक है। परिणाम असली हैं और इसे अपनी दिनचर्या में शामिल करना बहुत आसान है।",
                        name: "बेंजामिन गार्सिया",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsXwVlyhW80yril13EFEo_qG3xw-pEVw0d2kXm-qlNBwT2MNdufy5jSSdOPkUTffmH_6Q&usqp=CAU",
                        star: 4.9
                    },
                    {
                        quote: "यह पहला उत्पाद है जो वास्तव में मेरे लिए काम करता है। बियॉन्ड स्लिम ने कुछ ही हफ्तों में ध्यान देने योग्य बदलाव किया।",
                        name: "मिया टेलर",
                        image: "https://t3.ftcdn.net/jpg/07/66/92/80/240_F_766928095_NOXtogD59gAPM2Y75qWidDvq0IgB2UUr.jpg",
                        star: 4.7
                    },
                    {
                        quote: "ऐसे उत्पाद का मिलना दुर्लभ है जो प्राकृतिक और प्रभावी दोनों हो। बियॉन्ड स्लिम मेरे लिए सभी बॉक्स पर खरा उतरता है!",
                        name: "एलेक्जेंडर मार्टिनेज",
                        image: "https://t3.ftcdn.net/jpg/04/99/60/42/240_F_499604283_HJTyA6RedE5QZAPghy0cVeapYuWeJ7mE.jpg",
                        star: 4.6
                    },
                    {
                        quote: "बियॉन्ड स्लिम पूरी तरह से गेम-चेंजर है। प्राकृतिक फॉर्मूला प्रभावी और कोमल है—ठीक वही जो मैं ढूंढ रहा था।",
                        name: "शाहबाज़",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmvyLcZdrOQdZXQw3qAHcnuLgk87kfgD8WXw&s",
                        star: 4.9
                    }
                ]
            },
            product: {
                one: "बियॉन्ड स्लिम: 🌟 जिद्दी चर्बी को टारगेट करने, त्वचा की लोच सुधारने और समग्र स्वास्थ्य को समर्थन देने का एक प्राकृतिक समाधान। आत्मविश्वास महसूस करें, चमकदार दिखें और अपने सबसे स्वस्थ स्वरूप को अपनाएं! 💪✨",
                two: "बियॉन्ड स्लिम का जादू अनुभव करें! 🌿 जिद्दी चर्बी को टारगेट करें, त्वचा की लोच बढ़ाएं और 100% प्राकृतिक सामग्री के साथ समग्र सौंदर्य और स्वास्थ्य को सुधारें। आज ही अपने स्वास्थ्य यात्रा को बदलें! ✨🔥",
                three: "बियॉन्ड स्लिम के साथ 100% प्राकृतिक सामग्री की शक्ति का अनुभव करें, जो आपके स्वास्थ्य और सौंदर्य का अंतिम साथी है। जिद्दी चर्बी वाले क्षेत्रों को टारगेट करने के लिए सावधानीपूर्वक तैयार किया गया, यह क्लिनिकली प्रमाणित फॉर्मूला त्वचा की लोच को बढ़ाने में चमत्कार करता है, जिससे आपकी त्वचा टाइट, स्मूथ और चमकदार बनती है। बियॉन्ड स्लिम केवल अच्छा दिखने के बारे में नहीं है—यह अद्भुत महसूस करने के बारे में भी है। पर्यावरण के अनुकूल और क्रूरता-मुक्त, यह नॉन-ग्रीसी और उपयोग में आसान समाधान आपके समग्र स्वास्थ्य की यात्रा का समर्थन करता है और साथ ही पर्यावरण का भी ध्यान रखता है। परिवर्तन को अपनाएं और बियॉन्ड स्लिम को अपनी सेल्फ-केयर रूटीन को फिर से परिभाषित करने दें।"
            },
            benefitss: {
                title: "बियॉन्डस्लिम क्यों चुनें?",
                sub: "हमारा क्रांतिकारी फॉर्मूला विज्ञान और प्रकृति को मिलाकर असाधारण परिणाम प्रदान करता है",
                benefits: [
                    {
                        icon: <Target className="h-8 w-8 text-blue-600" />,
                        title: "लक्षित वसा कमी",
                        description: "उन्नत बॉडी-मैपिंग तकनीक के माध्यम से जिद्दी वसा जमाओं को सटीकता से लक्षित करता है"
                    },
                    {
                        icon: <Droplets className="h-8 w-8 text-blue-600" />,
                        title: "प्राकृतिक सामग्री",
                        description: "100% प्राकृतिक वनस्पति अर्क जो आपके शरीर के साथ समरसता में काम करते हैं"
                    },
                    {
                        icon: <Clock className="h-8 w-8 text-blue-600" />,
                        title: "तेजी से कार्य करने वाला फॉर्मूला",
                        description: "नियमित उपयोग के साथ केवल 4 हफ्तों में दिखाई देने वाले परिणाम देखें"
                    },
                    {
                        icon: <Shield className="h-8 w-8 text-blue-600" />,
                        title: "क्लिनिकली टेस्टेड",
                        description: "सभी त्वचा प्रकारों के लिए सुरक्षित और डर्माटोलॉजिकली परीक्षण किया गया"
                    }
                ],
            },
            howItWorks: {
                title: "बियॉन्ड स्लिम कैसे काम करता है",
                subtitle: "हमारी अनूठी तीन-चरणीय प्रक्रिया आपको प्राकृतिक तरीके से अपने शरीर के लक्ष्य प्राप्त करने में मदद करती है",
                steps: [
                    {
                        step: "1",
                        title: "लागू करें",
                        description: "गोलाकार गति का उपयोग करके लक्षित क्षेत्रों पर तेल को धीरे से मालिश करें",
                        image: img4
                    },
                    {
                        step: "2",
                        title: "अवशोषित करें",
                        description: "तेल को अधिकतम प्रभावशीलता के लिए आपकी त्वचा में पूरी तरह से अवशोषित होने दें",
                        image: img5
                    },
                    {
                        step: "3",
                        title: "परिवर्तन करें",
                        description: "परिवर्तन का अनुभव करें क्योंकि प्राकृतिक सामग्री अपना जादू करती है",
                        image: img6
                    }
                ]
            },
            product_content: {
                img1: img8,
                img2: img9,
                title1: "क्या आप अपने स्वास्थ्य पर नियंत्रण पाने और खुद का सबसे अच्छा संस्करण प्राप्त करने के लिए तैयार हैं? बियॉन्ड स्लिम के साथ, यह केवल वजन कम करने के बारे में नहीं है—यह समग्र स्वास्थ्य, जीवंतता और आत्मविश्वास को बढ़ावा देने वाली जीवनशैली को अपनाने के बारे में है। क्रैश डाइट को अलविदा कहें और स्थायी, जीवन-परिवर्तनकारी परिणामों को हां कहें!",
                title2: "यह समय है पतलेपन से परे जाने का—एक स्वस्थ, खुशहाल, और अधिक संतुष्ट YOU की ओर। केवल बदलाव का सपना न देखें; आज पहला कदम उठाएं। बियॉन्ड स्लिम से जुड़ें और अपने स्वास्थ्य यात्रा को जीवन के लिए बदल दें!"
            }

        },
        footer: {
            logo: logo,
            paypal: paypal,
            visa: visa,
            description: "बियॉन्ड स्लिम के अभिनव स्लिमिंग ऑयल के साथ अपने शरीर के लक्ष्यों को प्राप्त करें। हर बूंद में स्वास्थ्य और सुंदरता का सही मिश्रण अनुभव करें।",
            contactInfo: {
                title: "संपर्क करें",
                address: "6वां फ्लोर, तिरुमाला हाइट्स, बेगमपेट, हैदराबाद, तेलंगाना 500016",
                phone: "990-852-6444",
                email: "israelitesshopping171@gmail.com"
            },
            usefulLinks: {
                title: "त्वरित लिंक",
            },
            copyright: "कॉपीराइट © बियॉन्ड स्लिम 2024. सभी अधिकार सुरक्षित हैं.",
            bottomLinks: {
                terms: "नियम और शर्तें",
                privacy: "गोपनीयता नीति"
            }
        },
        products: [
            {
                id: 1,
                name: "बियॉन्ड स्लिम",
                description: "बियॉन्ड स्लिम प्राकृतिक अवयवों से तैयार किया गया है जो जिद्दी फैट को लक्षित करता है, त्वचा की लोच को सुधारता है, और समग्र सुंदरता और स्वास्थ्य को बढ़ाता है।",
                price: 76.23,
                oldPrice: 100.99,
                image: product2,
                reviews: 848,
                rating: 5
            },
            // ... अधिक उत्पाद
        ],
        contact: {
            title: "संपर्क करें",
            subtitle: "किसी भी सवाल या चिंता के लिए हमसे संपर्क करें",
            phone: {
                title: "फ़ोन",
                content: "990-852-6444"
            },
            email: {
                title: "ईमेल",
                content: "israelitesshopping171@gmail.com"
            },
            address: {
                title: "पता",
                content: "6वां फ्लोर, तिरुमाला हाइट्स, बेगमपेट, हैदराबाद, तेलंगाना 500016"
            },
            hours: {
                title: "कार्य घंटे",
                content: "सोमवार - शुक्रवार: 9:00 AM - 6:00 PM"
            },
            form: {
                title: "हमें एक संदेश भेजें",
                name: "आपका नाम",
                email: "आपका ईमेल",
                phone: "आपका फोन",
                subject: "विषय",
                message: "आपका संदेश",
                submit: "संदेश भेजें",
                success: "संदेश सफलतापूर्वक भेजा गया!",
                error: "संदेश भेजने में त्रुटि। कृपया पुनः प्रयास करें।"
            }
        },
        checkout: {
            title: "ऑर्डर सारांश",
            shippingTitle: "शिपिंग जानकारी",
            orderSummary: {
                quantity: "मात्रा",
                price: "मूल्य",
                subtotal: "उपकुल",
                shipping: "शिपिंग",
                total: "कुल"
            },
            formFields: {
                firstName: {
                    label: "पहला नाम",
                    placeholder: "पहला नाम दर्ज करें",
                    error: "पहला नाम आवश्यक है"
                },
                lastName: {
                    label: "अंतिम नाम",
                    placeholder: "अंतिम नाम दर्ज करें",
                    error: "अंतिम नाम आवश्यक है"
                },
                email: {
                    label: "ईमेल",
                    placeholder: "ईमेल पता दर्ज करें",
                    error: "ईमेल आवश्यक है",
                    invalidError: "कृपया एक वैध ईमेल पता दर्ज करें"
                },
                phone: {
                    label: "फोन नंबर",
                    placeholder: "10 अंकों का फोन नंबर दर्ज करें",
                    error: "फोन नंबर आवश्यक है",
                    invalidError: "फोन नंबर ठीक 10 अंकों का होना चाहिए"
                },
                address: {
                    label: "पता",
                    placeholder: "अपना पता दर्ज करें",
                    error: "पता आवश्यक है"
                },
                city: {
                    label: "शहर",
                    placeholder: "अपना शहर दर्ज करें",
                    error: "शहर आवश्यक है"
                },
                country: {
                    label: "देश",
                    placeholder: "अपने देश का चयन करें",
                    error: "देश आवश्यक है"
                }
            },
            successMessage: {
                title: "ऑर्डर सफलतापूर्वक किया गया!",
                description: "खरीदारी के लिए धन्यवाद। हम आपको जल्द ही एक ईमेल पुष्टि भेजेंगे।",
                buttonText: "खरीदारी जारी रखें"
            },
            submitError: "फॉर्म सबमिट करते समय त्रुटि। कृपया पुनः प्रयास करें।",
            paymentError: "भुगतान विफल। कृपया पुनः प्रयास करें।",
            submitButton: "ऑर्डर दें"
        },
        cancel: {
            title: "रद्दीकरण नीति",
            lastUpdated: "अंतिम अपडेट: अक्टूबर 2023",
            sections: [
                {
                    title: "1. रद्दीकरण अवधि",
                    points: [
                        "ऑर्डर करने के 24 घंटे के भीतर ऑर्डर रद्द किया जा सकता है।",
                        "24 घंटे के बाद, हम आपके ऑर्डर को प्रोसेस और शिप करना शुरू कर देते हैं, और रद्दीकरण संभव नहीं होगा।"
                    ]
                },
                {
                    title: "2. अपना ऑर्डर कैसे रद्द करें",
                    description: "अपना ऑर्डर रद्द करने के लिए, कृपया इन चरणों का पालन करें:",
                    points: [
                        "तुरंत संपर्क करें: अपने ऑर्डर के 24 घंटे के भीतर हमारी ग्राहक सहायता टीम से +91990-852-6444 पर संपर्क करें।",
                        "ऑर्डर विवरण प्रदान करें: अपने संदेश में ऑर्डर नंबर और रद्दीकरण का कारण शामिल करें ताकि हम आपके अनुरोध को तेजी से प्रोसेस कर सकें।"
                    ]
                },
                {
                    title: "3. शिपिंग के बाद रद्दीकरण",
                    points: [
                        "यदि आपका ऑर्डर पहले ही शिप कर दिया गया है, तो हम इसे रद्द नहीं कर सकेंगे। इस स्थिति में, आप प्रोडक्ट प्राप्त करने के बाद इसे वापस कर सकते हैं।",
                        "रिटर्न शुरू करने के लिए, कृपया आगे के निर्देशों के लिए हमारी रिटर्न पॉलिसी देखें।"
                    ]
                },
                {
                    title: "4. रिफंड प्रक्रिया",
                    points: [
                        "पूर्ण रिफंड: यदि आपका रद्दीकरण अनुरोध प्रोडक्ट शिप होने से पहले प्रोसेस हो जाता है, तो आपको पूर्ण रिफंड मिलेगा।",
                        "आंशिक रिफंड: यदि आप प्रोडक्ट शिप होने के बाद ऑर्डर रद्द करते हैं, तो प्रोडक्ट की लागत शिपिंग चार्ज घटाकर रिफंड की जाएगी, जब हमें वापस किया गया आइटम मूल स्थिति में प्राप्त होगा।"
                    ]
                },
                {
                    title: "5. गैर-रद्दीकरण स्थितियां",
                    points: [
                        "खोले/इस्तेमाल किए गए प्रोडक्ट: एक बार प्रोडक्ट खोले या इस्तेमाल किए जाने के बाद, रद्दीकरण स्वीकार नहीं किए जाएंगे। कृपया डिलीवरी पर प्रोडक्ट को ध्यान से जांचें।",
                        "विशेष प्रमोशन या ऑफर: विशेष प्रमोशन या छूट के तहत किए गए ऑर्डर अलग रद्दीकरण शर्तों के अधीन हो सकते हैं, जो खरीद प्रक्रिया के दौरान निर्दिष्ट किए जाएंगे।"
                    ]
                }
            ],
            footer: {
                message: "हम एक सहज अनुभव प्रदान करने का प्रयास करते हैं, और हमारी ग्राहक सेवा टीम आपको किसी भी समस्या में सहायता करने के लिए उपलब्ध है।",
                thankYou: "बियॉन्ड स्लिम चुनने के लिए धन्यवाद। हम आपकी समझ और समर्थन की सराहना करते हैं!"
            }
        },
        shipping: {
            "title": "शिपिंग नीति",
            "lastUpdated": "अंतिम अपडेट: दिसंबर 2024",
            "sections": [
                {
                    "title": "1. शिपिंग कवरेज",
                    "content": [
                        {
                            "subtitle": "घरेलू शिपिंग",
                            "text": "हम भारत के सभी प्रमुख शहरों और कस्बों में डिलीवरी करते हैं। पिन कोड सत्यापन चेकआउट पर उपलब्ध है। दूरस्थ स्थानों में अतिरिक्त डिलीवरी समय लग सकता है। कुछ प्रतिबंधित क्षेत्रों में सेवा उपलब्ध नहीं हो सकती।"
                        },
                        {
                            "subtitle": "अंतर्राष्ट्रीय शिपिंग",
                            "text": "हम दुनिया भर के ग्राहकों को अंतर्राष्ट्रीय शिपिंग प्रदान करने के लिए उत्सुक हैं। हमारा लक्ष्य आपके ऑर्डर को शीघ्रता और कुशलता से वितरित करना है, चाहे आप कहीं भी हों।"
                        }
                    ]
                },
                {
                    "title": "2. शिपिंग विधियाँ",
                    "content": [
                        {
                            "subtitle": "मानक डिलीवरी",
                            "text": "डिलीवरी 5-7 कार्यदिवसों के भीतर। सभी सेवा क्षेत्रों में उपलब्ध।"
                        }
                    ]
                },
                {
                    "title": "3. शिपिंग पार्टनर्स",
                    "text": "हम निम्नलिखित प्रतिष्ठित कुरियर पार्टनर्स के साथ काम करते हैं:",
                    "list": ["अरामेक्स", "डीएचएल", "ब्लू डार्ट", "डीटीडीसी"]
                },
                {
                    "title": "4. ऑर्डर प्रोसेसिंग",
                    "content": [
                        {
                            "subtitle": "प्रोसेसिंग समय",
                            "text": "ऑर्डर प्लेसमेंट के 24 घंटे के भीतर प्रोसेस किए जाते हैं। ऑर्डर कन्फर्मेशन ईमेल द्वारा भेजा जाता है। बल्क ऑर्डर्स में अतिरिक्त प्रोसेसिंग समय लग सकता है।"
                        },
                        {
                            "subtitle": "ऑर्डर ट्रैकिंग",
                            "text": "ट्रैकिंग नंबर ईमेल के माध्यम से प्रदान किया जाता है। ट्रैकिंग प्रश्नों के लिए ग्राहक सेवा सहायता उपलब्ध है।"
                        }
                    ]
                },
                {
                    "title": "12. ग्राहक सहायता",
                    "content": [
                        {
                            "subtitle": "ईमेल",
                            "text": "israelitesshopping171@gmail.com"
                        },
                        {
                            "subtitle": "फ़ोन",
                            "text": "990-852-6444"
                        },
                        {
                            "subtitle": "प्रतिक्रिया समय",
                            "text": "ऑपरेशनल घंटों के दौरान 4 कार्य घंटों के भीतर।"
                        }
                    ]
                },
                {
                    "title": "13. नीति अपडेट",
                    "text": "यह नीति परिवर्तन के अधीन है। अपडेट हमारी वेबसाइट पर पोस्ट किए जाएंगे। महत्वपूर्ण परिवर्तनों के लिए ग्राहकों को ईमेल द्वारा कम से कम 7 दिन पहले सूचित किया जाएगा। हमारी सेवाओं का निरंतर उपयोग अपडेटेड नीति की स्वीकृति को दर्शाता है।"
                }
            ],
            "footer": {
                "text": "अधिक जानकारी के लिए, हमसे संपर्क करें: israelitesshopping171@gmail.com"
            }
        },
        return: {
            "title": "वापसी नीति",
            "lastUpdated": "अंतिम अपडेट: दिसंबर 2024",
            "sections": [
                {
                    "title": "वापसी की पात्रता",
                    "content": "आपकी खरीदारी तभी वापसी योग्य है यदि यह निम्नलिखित मानदंडों को पूरा करती है: उत्पाद को इसकी मूल पैकेजिंग में लौटाया जाना चाहिए (उपयोग किया हुआ या अनुपयोगी), हमारी वेबसाइट पर सूचीबद्ध पते पर पहुंचना चाहिए, और खरीदारी की तारीख के 15 दिनों के भीतर आना चाहिए। क्षतिग्रस्त उत्पाद स्वीकार नहीं किए जाएंगे।"
                },
                {
                    "title": "रिफंड प्रक्रिया",
                    "content": "रिफंड प्रक्रिया शुरू करने के लिए ग्राहक को उत्पाद को निर्दिष्ट पते पर भेजना होगा। उत्पाद प्राप्त और निरीक्षण किए जाने के बाद, रिफंड मूल भुगतान विधि में 10 कार्यदिवसों के भीतर श्रेय किया जाएगा, जिसमें शिपिंग लागत शामिल नहीं है।"
                },
                {
                    "title": "शिपिंग जिम्मेदारी",
                    "content": "वापसी प्रक्रिया ग्राहक द्वारा शुरू की जाती है, और ग्राहक यह सुनिश्चित करने के लिए जिम्मेदार हैं कि उत्पाद निर्दिष्ट पते पर भेजा गया है। यदि वापसी निर्माण दोष या त्रुटि के कारण होती है, तो रिटर्न शिपिंग लागत कवर की जाएगी।"
                }
            ],
            "footer": {
                "contact": "किसी भी वापसी के प्रश्न के लिए, कृपया हमसे संपर्क करें: israelitesshopping171@gmail.com"
            }
        },
        terms: {
            "title": "नियम और शर्तें",
            "lastUpdated": "अंतिम अपडेट: दिसंबर 2024",
            "sections": [
                {
                    "title": "नियमों की स्वीकृति",
                    "content": "Genius-Baby ('ऐप') को डाउनलोड, इंस्टॉल, या उपयोग करके, आप इन नियमों और शर्तों ('नियम') का पालन करने के लिए सहमत होते हैं। यदि आप इन नियमों से सहमत नहीं हैं, तो ऐप का उपयोग न करें।"
                },
                {
                    "title": "लाइसेंस",
                    "content": "Genius-Baby आपको ऐप को व्यक्तिगत, गैर-व्यावसायिक उद्देश्यों के लिए उपयोग करने का सीमित, गैर-अनन्य, गैर-हस्तांतरणीय, और रद्द करने योग्य लाइसेंस प्रदान करता है, जो इन नियमों के अधीन है।"
                },
                {
                    "title": "उपयोगकर्ता की जिम्मेदारियाँ",
                    "content": "आपको ऐप का उपयोग करने के लिए कम से कम 18 वर्ष का होना चाहिए। आप ऐप का उपयोग केवल कानूनी उद्देश्यों के लिए और इन नियमों के अनुसार करने के लिए सहमत हैं। आप ऐप के संचालन या सुरक्षा में हस्तक्षेप करने का प्रयास नहीं करेंगे।"
                },
                {
                    "title": "बौद्धिक संपत्ति",
                    "content": "सभी सामग्री, विशेषताएं, और कार्यक्षमता (जैसे पाठ, ग्राफिक्स, लोगो, और सॉफ़्टवेयर) Genius-Baby या इसके लाइसेंसधारकों की संपत्ति हैं और कॉपीराइट और अन्य कानूनों द्वारा संरक्षित हैं। आप हमारी स्पष्ट लिखित अनुमति के बिना ऐप के किसी भी भाग को पुन: उत्पादित, डुप्लिकेट, कॉपी, बेचना, पुनः बेचना, या उपयोग करने का प्रयास नहीं करेंगे।"
                },
                {
                    "title": "उपयोगकर्ता द्वारा बनाई गई सामग्री",
                    "content": "आप ऐप के माध्यम से सामग्री (जैसे प्लेलिस्ट या समीक्षाएं) जमा, अपलोड, या अन्यथा उपलब्ध करा सकते हैं। ऐसा करके, आप Genius-Baby को ऐप के संबंध में ऐसी सामग्री का उपयोग, संशोधन, वितरण, और प्रदर्शन करने के लिए एक विश्वव्यापी, रॉयल्टी-मुक्त, स्थायी, अपरिवर्तनीय, गैर-अनन्य, और सब-लाइसेंस देने योग्य अधिकार प्रदान करते हैं।"
                },
                {
                    "title": "गोपनीयता",
                    "content": "आपकी गोपनीयता हमारे लिए महत्वपूर्ण है। कृपया यह समझने के लिए हमारी गोपनीयता नीति की समीक्षा करें कि हम आपकी जानकारी कैसे एकत्र करते हैं, उपयोग करते हैं, और सुरक्षित रखते हैं।"
                },
                {
                    "title": "समाप्ति",
                    "content": "हम किसी भी समय, बिना किसी सूचना के, किसी भी कारण से, जिसमें आप इन नियमों का उल्लंघन करते हैं, के लिए ऐप तक आपकी पहुंच को समाप्त करने या निलंबित करने का अधिकार सुरक्षित रखते हैं।"
                },
                {
                    "title": "देयता की सीमा",
                    "content": "कानून द्वारा अनुमत अधिकतम सीमा तक, Genius-Baby ऐप और इसके सहयोगी, अधिकारी, निदेशक, कर्मचारी, एजेंट, और लाइसेंसधारक किसी भी अप्रत्यक्ष, आकस्मिक, विशेष, परिणामी, या दंडात्मक हानि, या किसी भी लाभ या राजस्व के नुकसान के लिए उत्तरदायी नहीं होंगे। इसमें शामिल हैं: - आपके ऐप का उपयोग करने या उपयोग करने में असमर्थता; - हमारे सर्वरों तक किसी भी अनधिकृत पहुंच और/या वहां संग्रहीत व्यक्तिगत जानकारी; - किसी भी बग, वायरस, या ऐसी अन्य चीजें जो किसी तृतीय पक्ष द्वारा ऐप के माध्यम से प्रसारित हो सकती हैं; - किसी भी सामग्री में त्रुटियां या चूक।"
                },
                {
                    "title": "नियमों में परिवर्तन",
                    "content": "हम समय-समय पर इन नियमों को संशोधित कर सकते हैं। हम नए नियम ऐप पर पोस्ट करके आपको सूचित करेंगे। ऐप का आपका निरंतर उपयोग परिवर्तन के बाद नए नियमों की आपकी स्वीकृति माना जाएगा।"
                },
                {
                    "title": "गवर्निंग कानून",
                    "content": "ये नियम भारत के कानूनों द्वारा शासित और व्याख्या किए जाएंगे, कानूनों के संघर्ष के प्रावधानों की परवाह किए बिना।"
                },
                {
                    "title": "संपर्क जानकारी",
                    "content": "यदि आपके पास इन नियमों के बारे में कोई प्रश्न हैं, तो कृपया हमसे srilogishyd@gmail.com पर संपर्क करें।"
                }
            ],
            "footer": {
                "message": "हम किसी भी समय इन नियमों को संशोधित करने का अधिकार सुरक्षित रखते हैं। हमारी सेवाओं का निरंतर उपयोग किसी भी परिवर्तन की स्वीकृति माना जाएगा।",
                "contact": "हमारे नियमों के संबंध में किसी भी प्रश्न के लिए, कृपया israelitesshopping171@gmail.com पर संपर्क करें।"
            }
        },
        privacy: {
            "title": "गोपनीयता नीति",
            "lastUpdated": "अंतिम अपडेट: दिसंबर 2024",
            "sections": [
                {
                    "title": "जानकारी संग्रह",
                    "content": "हम व्यक्तिगत जानकारी एकत्र करते हैं जो आप हमें सीधे प्रदान करते हैं, जैसे आपका नाम, बिलिंग पता, शिपिंग पता, ईमेल पता, और फोन नंबर। आप यह जानकारी साइट पर एक फॉर्म के माध्यम से संपर्क करते समय प्रदान करते हैं। हम गैर-व्यक्तिगत जानकारी भी एकत्र करते हैं, जैसे ब्राउज़र प्रकार, ऑपरेटिंग सिस्टम, आईपी पता, ब्राउज़िंग गतिविधि, और जनसांख्यिकीय विवरण, जो स्वचालित रूप से साइट का उपयोग करते समय एकत्र होते हैं।"
                },
                {
                    "title": "जानकारी का उपयोग",
                    "content": "हम व्यक्तिगत जानकारी का उपयोग आपकी पूछताछ और अनुरोधों का उत्तर देने के लिए करते हैं। गैर-व्यक्तिगत जानकारी का उपयोग साइट को बेहतर बनाने, उपयोगकर्ता अनुभव को सुधारने, और आंतरिक विपणन प्रयासों का समर्थन करने के लिए किया जाता है। हम आपकी व्यक्तिगत जानकारी को आपकी सहमति के बिना तृतीय पक्षों के साथ साझा नहीं करेंगे, सिवाय कानूनी आवश्यकता के।"
                },
                {
                    "title": "कुकीज़ और ट्रैकिंग",
                    "content": "हम साइट के आपके उपयोग के बारे में गैर-व्यक्तिगत जानकारी एकत्र करने के लिए कुकीज़ और समान ट्रैकिंग तकनीकों का उपयोग करते हैं। कुकीज़ हमारी प्राथमिकताओं को याद रखने और आपकी ब्राउज़िंग अनुभव को बेहतर बनाने में मदद करते हैं। लॉगिन कुकीज़ दो दिनों तक रहती हैं, स्क्रीन विकल्प कुकीज़ एक साल तक, और लेख संपादन के दौरान उपयोग की गई अतिरिक्त कुकीज़ एक दिन बाद समाप्त हो जाती हैं। 'मुझे याद रखें' का चयन करने पर लॉगिन अवधि दो सप्ताह तक बढ़ जाती है। लॉगआउट करने से लॉगिन कुकीज़ हटा दी जाएंगी।"
                },
                {
                    "title": "तृतीय-पक्ष सेवाएं",
                    "content": "हम साइट को संचालित करने और अपनी सेवाएं प्रदान करने के लिए तृतीय-पक्ष सेवा प्रदाताओं का उपयोग कर सकते हैं। इन प्रदाताओं को गैर-व्यक्तिगत जानकारी तक पहुंच हो सकती है। आपकी व्यक्तिगत जानकारी तृतीय पक्षों के साथ उनकी विपणन उद्देश्यों के लिए आपकी सहमति के बिना साझा नहीं की जाएगी।"
                },
                {
                    "title": "सुरक्षा",
                    "content": "हम आपकी जानकारी को अनधिकृत पहुंच, प्रकटीकरण, परिवर्तन, या विनाश से बचाने के लिए उचित कदम उठाते हैं। हालांकि, कोई भी इंटरनेट ट्रांसमिशन या वेबसाइट पूरी तरह से सुरक्षित नहीं है। हम उपयोगकर्ताओं को ऑनलाइन व्यक्तिगत डेटा साझा करते समय सावधानी बरतने के लिए प्रोत्साहित करते हैं।"
                },
                {
                    "title": "बच्चों की गोपनीयता",
                    "content": "साइट 13 वर्ष से कम आयु के बच्चों के लिए अभिप्रेत नहीं है। हम जानबूझकर 13 वर्ष से कम आयु के बच्चों से व्यक्तिगत जानकारी एकत्र नहीं करते हैं। यदि आपको विश्वास है कि आपके बच्चे ने हमें व्यक्तिगत जानकारी प्रदान की है, तो कृपया इसे हटाने के लिए हमसे संपर्क करें।"
                },
                {
                    "title": "नीति अपडेट",
                    "content": "यह गोपनीयता नीति समय-समय पर अपडेट की जा सकती है। परिवर्तन साइट पर पोस्ट किए जाएंगे, और हम आपको नियमित रूप से इस नीति की समीक्षा करने के लिए प्रोत्साहित करते हैं ताकि हमारी प्रथाओं के बारे में जानकारी बनी रहे।"
                }
            ],
            "footer": {
                "contact": "यदि आपके पास हमारी गोपनीयता प्रथाओं के बारे में कोई प्रश्न हैं, तो कृपया israelitesshopping171@gmail.com पर संपर्क करें।"
            }
        }
    },
    AR: {
        direction: 'rtl',
        navbar: {
            links: [
                { title: "الصفحة الرئيسية", path: "/" },
                { title: "المنتجات", path: "/products" },
                { title: "اتصل بنا", path: "/contact" }
            ]
        },
        home: {
            hero: {
                natural: natural,
                img: head,
                title: `<span style="color: #ff1f24;">بيوند سليم</span> السر لجسم صحي`, // Inline style for color change

                description: "عزز صحتك وثقتك بنفسك مع زيت التنحيف الطبيعي من بيوند سليم.",
                features: [
                    "زيت تنحيف ثوري لتقليل الدهون بفعالية وتحسين صحة الجسم."
                ],
                buttonText: "تسوق الآن",
                img1: product1,
                video: heroVideo,
                video2: heroVideo2,
            },
            about: {
                img: sci,
                img1: img1,
                img2: img2,
                img3: img3,
                img4: img7,
                additionalContent: {
                    title: `<span style="color: #ff1f24;">بيوند سليم</span> مفتاحك لحياة صحية`,
                    sectitle: "تحول بثقة: اختر بيوند سليم",
                    description: ``
                },
                // 🌱 طبيعي بالكامل، فعال حقًا. تم تطوير بيوند سليم بمكونات طبيعية مختارة بعناية لضمان دعم لطيف وفعّال لتحول جسمك.
                product: product
            },
            faq: [ // Updated FAQ data
                {
                    question: "ما هو بيوند سليم؟",
                    answer: "بيوند سليم هو زيت تنحيف طبيعي ثوري مصمم لتقليل الدهون في الجسم، وشد البشرة، وتحسين صحتها وجمالها بشكل عام. إنه رفيقك المثالي لجسم صحي وثقة أكبر بنفسك."
                },
                {
                    question: "كيف أستخدم زيت التنحيف بيوند سليم؟",
                    answer: "ضع كمية صغيرة من زيت بيوند سليم على المنطقة المستهدفة ودلكها بحركات دائرية حتى يتم امتصاصها بالكامل. للحصول على أفضل النتائج، استخدمه مرتين يوميًا، ويفضل بعد الاستحمام وقبل النوم."
                },
                {
                    question: "هل مكونات بيوند سليم آمنة؟",
                    answer: "نعم، يتم تصنيع بيوند سليم باستخدام مكونات طبيعية 100% وآمنة وصديقة للبشرة. إنه خالٍ من المواد الكيميائية الضارة، مما يجعله مناسبًا للاستخدام اليومي على جميع أنواع البشرة."
                },
                {
                    question: "كم من الوقت يستغرق لرؤية النتائج؟",
                    answer: "قد تختلف النتائج بناءً على نوع جسمك ونمط حياتك. ومع ذلك، يبلغ معظم المستخدمين عن تحسينات ملحوظة خلال 2-4 أسابيع من الاستخدام المنتظم مع نظام غذائي صحي وممارسة الرياضة."
                },
                {
                    question: "هل يمكن استخدام بيوند سليم لجميع أنواع الأجسام؟",
                    answer: "نعم، تم تصميم بيوند سليم لجميع أنواع الأجسام والبشرة. تضمن تركيبته اللطيفة أن يستفيد الجميع من خصائصه لتقليل الدهون وتحسين البشرة."
                },
            ],
            specialist: {
                title: "المتخصص رقم 1 في التنحيف",
                description: "اكتشف لماذا يُعد بيوند سليم الخيار الأفضل لتحقيق الجسم المثالي وتعزيز الصحة العامة.",
                rating: "4.9/5",
                reviews: "848",
                videoUrl: "https://www.youtube.com/embed/AxYbPlLk79M?autoplay=1&loop=1&playlist=AxYbPlLk79M&rel=0"
            },
            trending: {
                subtitle: "المنتجات الرائجة",
                title: "المنتجات الأكثر مبيعًا",
                product: {
                    badge: "منتجات طبيعية 100%",
                    name: "Beyond Slim",
                    rating: 5,
                    oldPrice: "30.00",
                    price: "66.00",
                    taxInfo: "الضرائب مشمولة.",
                    offerText: "عرض لفترة محدودة:",
                    buttonText: "اشترِ الآن"
                }
            },
            testimonials: {
                title: "آراء العملاء",
                subtitle: "قصص حقيقية من عملائنا الراضين الذين حققوا نتائج مذهلة.",
                items: [
                    {
                        quote: "بيوند سليم أعطاني نتائج مرئية في غضون أسابيع قليلة. إنه الدافع الذي كنت بحاجة إليه لاستعادة ثقتي بنفسي!",
                        name: "رام",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9us0MxB35Wv3z03TJFrxhub-WyxqpBKAsjQ&s",
                        star: 4.9
                    },
                    {
                        quote: "كنت متشككًا في البداية، لكن بيوند سليم أثبت فعاليته. المكونات الطبيعية تجعلني أثق بالمنتج.",
                        name: "فيكرام",
                        image: "https://t3.ftcdn.net/jpg/10/66/68/96/240_F_1066689635_FMCMRi9EVzawgC9ZItv8Lba0HYeTi9GV.jpg",
                        star: 4.5
                    },
                    {
                        quote: "أفضل ما في بيوند سليم هو مدى لطفه وفعاليته في الوقت نفسه. أستطيع أن أرى وأشعر بالفرق بالفعل!",
                        name: "أرفيند",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxszw7q9S8KrpiZPwaJOPfmQRDrryj3a4dbaqbG6pa1qPHAqTa2cAeF5ZC8RmS6w-QAXg&usqp=CAU",
                        star: 5.0
                    },
                    {
                        quote: "هذا المنتج غيّر حياتي. ساعدني بيوند سليم على تحقيق أهدافي دون الإضرار بصحتي.",
                        name: "توفيق",
                        image: "https://t4.ftcdn.net/jpg/02/32/05/69/240_F_232056937_9HLOlD9DcEvEAppLCn908zkeUeMZKnPJ.jpg",
                        star: 4.1
                    },
                    {
                        quote: "أحب كيف يستهدف بيوند سليم الدهون ويحسن أيضًا مرونة البشرة. بشرتي تبدو أكثر صحة!",
                        name: "هارشا",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzzvbhLn-RYCJZmspW_Q_S5t4EQkb1jDVW1TUa-k7hbR1n_nq7aFmHqUUJiXGdz72Iqhc&usqp=CAU",
                        star: 3.5
                    },
                    {
                        quote: "لقد أوصيت بيوند سليم لجميع أصدقائي. إنه طبيعي وفعال وقد فاق توقعاتي.",
                        name: "عمران",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ3tm3wzrIkSZBSz6BeTFmPyN4nYE4b54SjNtynrLHo8jTRN2ouciRHjvIWF_5jit1lxU&usqp=CAU",
                        star: 4.8
                    },
                    {
                        quote: "بيوند سليم يستحق كل قرش. النتائج حقيقية وسهل الاستخدام في روتيني اليومي.",
                        name: "بنيامين غارسيا",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsXwVlyhW80yril13EFEo_qG3xw-pEVw0d2kXm-qlNBwT2MNdufy5jSSdOPkUTffmH_6Q&usqp=CAU",
                        star: 4.9
                    },
                    {
                        quote: "هذا هو أول منتج يعمل لي. بيوند سليم أحدث فرقًا ملحوظًا في غضون أسابيع.",
                        name: "ميا تايلور",
                        image: "https://t3.ftcdn.net/jpg/07/66/92/80/240_F_766928095_NOXtogD59gAPM2Y75qWidDvq0IgB2UUr.jpg",
                        star: 4.7
                    },
                    {
                        quote: "من النادر العثور على منتج طبيعي وفعال في الوقت نفسه. بيوند سليم يفي بكل التوقعات!",
                        name: "ألكساندر مارتينيز",
                        image: "https://t3.ftcdn.net/jpg/04/99/60/42/240_F_499604283_HJTyA6RedE5QZAPghy0cVeapYuWeJ7mE.jpg",
                        star: 4.6
                    },
                    {
                        quote: "بيوند سليم هو تغيير كامل للعبة. التركيبة الطبيعية فعالة ولطيفة - تمامًا ما كنت أبحث عنه.",
                        name: "شهبار",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmvyLcZdrOQdZXQw3qAHcnuLgk87kfgD8WXw&s",
                        star: 4.9
                    }
                ]
            },
            product: {
                one: "بيوند سليم: 🌟 حل طبيعي لاستهداف الدهون العنيدة، تحسين مرونة البشرة، ودعم الصحة الشاملة. اشعر بالثقة، وكن متألقًا، واحتضن أفضل نسخة من نفسك! 💪✨",
                two: "اختبر سحر بيوند سليم! 🌿 استهدف الدهون العنيدة، عزز مرونة البشرة، وحسن جمالك وصحتك بشكل عام مع مكونات طبيعية 100%. ابدأ رحلتك الصحية الآن! ✨🔥",
                three: "جرب قوة المكونات الطبيعية 100% مع بيوند سليم، شريكك المثالي للصحة والجمال. مصمم بعناية لاستهداف مناطق الدهون العنيدة، هذه التركيبة المثبتة سريريًا تعمل على تعزيز مرونة البشرة، مما يجعل بشرتك أكثر تماسكا ونعومة وتألقًا. بيوند سليم ليس فقط لتحسين المظهر، بل لتحسين الشعور أيضًا. صديق للبيئة ولم يتم اختباره على الحيوانات، هذا الحل السهل الاستخدام يدعم رحلتك الصحية بينما يعتني بالكوكب. احتضن التحول ودع بيوند سليم يعيد تعريف روتين العناية الذاتية الخاص بك."
            },
            benefitss: {
                title: "لماذا تختار بيوندسليم؟",
                sub: "تركيبتنا الثورية تجمع بين العلم والطبيعة لتقديم نتائج استثنائية",
                benefits: [
                    {
                        icon: <Target className="h-8 w-8 text-blue-600" />,
                        title: "تقليل الدهون المستهدفة",
                        description: "يستهدف بدقة ترسبات الدهون العنيدة من خلال تقنية تخطيط الجسم المتقدمة"
                    },
                    {
                        icon: <Droplets className="h-8 w-8 text-blue-600" />,
                        title: "مكونات طبيعية",
                        description: "مستخلصات نباتية طبيعية 100% تعمل بتناغم مع جسمك"
                    },
                    {
                        icon: <Clock className="h-8 w-8 text-blue-600" />,
                        title: "تركيبة سريعة المفعول",
                        description: "شاهد نتائج واضحة في غضون 4 أسابيع فقط مع الاستخدام المنتظم"
                    },
                    {
                        icon: <Shield className="h-8 w-8 text-blue-600" />,
                        title: "مختبر سريرياً",
                        description: "تم اختباره جلدياً ومثبت أنه آمن لجميع أنواع البشرة"
                    }
                ],
            },
            howItWorks: {
                title: "كيف يعمل بيوند سليم",
                subtitle: "عمليتنا المكونة من ثلاث خطوات الفريدة تساعدك على تحقيق أهداف جسمك بشكل طبيعي",
                steps: [
                    {
                        step: "1",
                        title: "التطبيق",
                        description: "دلك الزيت بلطف على المناطق المستهدفة بحركات دائرية",
                        image: img4
                    },
                    {
                        step: "2",
                        title: "الامتصاص",
                        description: "دع الزيت يتم امتصاصه بالكامل في بشرتك للحصول على أفضل فعالية",
                        image: img5
                    },
                    {
                        step: "3",
                        title: "التحول",
                        description: "اختبر التحول بينما تعمل المكونات الطبيعية بسحرها",
                        image: img6
                    }
                ]
            },
            product_content: {
                img1: img8,
                img2: img9,
                title1: "هل أنت مستعد للسيطرة على صحتك وتحقيق أفضل نسخة من نفسك؟ مع بيوند سليم، الأمر لا يتعلق فقط بفقدان الوزن - إنه يتعلق باحتضان أسلوب حياة يعزز الصحة العامة والحيوية والثقة. ودع الحميات القاسية ومرحبًا بالنتائج المستدامة التي تغير الحياة!",
                title2: "حان الوقت لتتخطى الرشاقة - إلى نسخة أكثر صحة وسعادة ورضا من نفسك. لا تكتفي بحلم التغيير؛ خذ الخطوة الأولى اليوم. انضم إلى بيوند سليم وحول رحلتك الصحية إلى الأبد!"
            }

        },
        footer: {
            logo: logo,
            paypal: paypal,
            visa: visa,
            description: "حقق أهداف جسمك مع زيت التنحيف المبتكر من بيوند سليم. جرب المزيج المثالي من الصحة والجمال في كل قطرة.",
            contactInfo: {
                title: "اتصل بنا",
                address: "الطابق السادس، تيرومالا هايتس، بيجومبت، حيدراباد، تيلانغانا 500016",
                phone: "990-852-6444",
                email: "israelitesshopping171@gmail.com"
            },
            usefulLinks: {
                title: "روابط سريعة",
            },
            copyright: "حقوق النشر © بيوند سليم 2024. جميع الحقوق محفوظة.",
            bottomLinks: {
                terms: "الشروط والأحكام",
                privacy: "سياسة الخصوصية"
            }
        },
        products: [
            {
                id: 1,
                name: "بيوند سليم",
                description: "تم تحضير بيوند سليم باستخدام مكونات طبيعية لاستهداف مناطق الدهون العنيدة، وتحسين مرونة البشرة، وتعزيز الجمال والصحة العامة.",
                price: 76.23,
                oldPrice: 100.99,
                image: product2,
                reviews: 848,
                rating: 5
            },
            // ... المزيد من المنتجات
        ],
        contact: {
            title: "اتصل بنا",
            subtitle: "تواصل معنا لأي استفسارات أو مخاوف",
            phone: {
                title: "الهاتف",
                content: "990-852-6444"
            },
            email: {
                title: "البريد الإلكتروني",
                content: "israelitesshopping171@gmail.com"
            },
            address: {
                title: "العنوان",
                content: "الطابق السادس، تيرومالا هايتس، بيجومبت، حيدراباد، تيلانغانا 500016"
            },
            hours: {
                title: "ساعات العمل",
                content: "الاثنين - الجمعة: 9:00 صباحًا - 6:00 مساءً"
            },
            form: {
                title: "أرسل لنا رسالة",
                name: "اسمك",
                email: "بريدك الإلكتروني",
                phone: "هاتفك",
                subject: "الموضوع",
                message: "رسالتك",
                submit: "إرسال الرسالة",
                success: "تم إرسال الرسالة بنجاح!",
                error: "حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى."
            }
        },
        checkout: {
            title: "ملخص الطلب",
            shippingTitle: "معلومات الشحن",
            orderSummary: {
                quantity: "الكمية",
                price: "السعر",
                subtotal: "المجموع الفرعي",
                shipping: "الشحن",
                total: "الإجمالي"
            },
            formFields: {
                firstName: {
                    label: "الاسم الأول",
                    placeholder: "أدخل الاسم الأول",
                    error: "الاسم الأول مطلوب"
                },
                lastName: {
                    label: "الاسم الأخير",
                    placeholder: "أدخل الاسم الأخير",
                    error: "الاسم الأخير مطلوب"
                },
                email: {
                    label: "البريد الإلكتروني",
                    placeholder: "أدخل عنوان البريد الإلكتروني",
                    error: "البريد الإلكتروني مطلوب",
                    invalidError: "يرجى إدخال عنوان بريد إلكتروني صالح"
                },
                phone: {
                    label: "رقم الهاتف",
                    placeholder: "أدخل رقم الهاتف المكون من 10 أرقام",
                    error: "رقم الهاتف مطلوب",
                    invalidError: "يجب أن يتكون رقم الهاتف من 10 أرقام بالضبط"
                },
                address: {
                    label: "العنوان",
                    placeholder: "أدخل عنوانك",
                    error: "العنوان مطلوب"
                },
                city: {
                    label: "المدينة",
                    placeholder: "أدخل مدينتك",
                    error: "المدينة مطلوبة"
                },
                country: {
                    label: "البلد",
                    placeholder: "اختر بلدك",
                    error: "البلد مطلوب"
                }
            },
            successMessage: {
                title: "تم تقديم الطلب بنجاح!",
                description: "شكرًا لشرائك. سنرسل لك تأكيدًا عبر البريد الإلكتروني قريبًا.",
                buttonText: "مواصلة التسوق"
            },
            submitError: "حدث خطأ أثناء إرسال النموذج. يرجى المحاولة مرة أخرى.",
            paymentError: "فشل الدفع. يرجى المحاولة مرة أخرى.",
            submitButton: "تقديم الطلب"
        },
        terms: {
            title: "الشروط والأحكام",
            lastUpdated: "آخر تحديث: ديسمبر 2024",
            sections: [
                {
                    title: "قبول الشروط",
                    content: "من خلال تحميل أو تثبيت أو استخدام تطبيق جينيوس-بيبي ('التطبيق')، فإنك توافق على الالتزام بهذه الشروط والأحكام ('الشروط'). إذا لم توافق على هذه الشروط، فلا تستخدم التطبيق."
                },
                {
                    title: "الرخصة",
                    content: "يمنحك جينيوس-بيبي رخصة محدودة، غير حصرية، غير قابلة للتحويل، وقابلة للإلغاء لاستخدام التطبيق لأغراض شخصية وغير تجارية، وفقًا لهذه الشروط."
                },
                {
                    title: "التزامات المستخدم",
                    content: "يجب أن يكون عمرك 18 عامًا أو أكثر لاستخدام التطبيق. توافق على استخدام التطبيق فقط لأغراض قانونية ووفقًا لهذه الشروط. يجب عليك عدم محاولة التدخل في تشغيل التطبيق أو أمانه."
                },
                {
                    title: "الملكية الفكرية",
                    content: "جميع المحتويات والميزات والوظائف (بما في ذلك على سبيل المثال لا الحصر النصوص، الرسومات، الشعارات، والبرمجيات) هي ملك لجينيوس-بيبي أو المرخصين لها وهي محمية بموجب حقوق الطبع والنشر والقوانين الأخرى. توافق على عدم إعادة إنتاج أو نسخ أو بيع أو إعادة بيع أو استغلال أي جزء من التطبيق دون إذن كتابي صريح منا."
                },
                {
                    title: "المحتوى الذي ينشئه المستخدم",
                    content: "قد تتمكن من تقديم أو تحميل أو إتاحة محتوى (مثل قوائم التشغيل أو المراجعات) من خلال التطبيق. من خلال القيام بذلك، تمنح جينيوس-بيبي حقًا عالميًا، خاليًا من حقوق الملكية، دائمًا، لا يمكن إلغاؤه، غير حصري، وقابلًا للتوزيع لاستخدام وتعديل وتوزيع وعرض هذا المحتوى فيما يتعلق بالتطبيق."
                },
                {
                    title: "الخصوصية",
                    content: "خصوصيتك مهمة بالنسبة لنا. يرجى مراجعة سياسة الخصوصية لدينا لفهم كيفية جمعنا واستخدامنا وحماية معلوماتك."
                },
                {
                    title: "الإيقاف",
                    content: "نحتفظ بالحق في إنهاء أو تعليق وصولك إلى التطبيق في أي وقت، مع أو بدون إشعار، لأي سبب من الأسباب، بما في ذلك إذا خالفت هذه الشروط."
                },
                {
                    title: "تحديد المسؤولية",
                    content: "إلى أقصى حد يسمح به القانون، فإن تطبيق جينيوس-بيبي والشركات التابعة لها والمسؤولين والمديرين والموظفين والوكلاء والمرخصين لها لن يكونوا مسؤولين عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية أو عقابية، أو أي خسارة في الأرباح أو الإيرادات، سواء كانت مباشرة أو غير مباشرة، أو أي خسارة في البيانات أو الاستخدام أو السمعة أو الخسائر غير الملموسة الأخرى الناتجة عن: - استخدامك أو عدم قدرتك على استخدام التطبيق؛ - أي وصول غير مصرح به إلى أو استخدام لخوادمنا و/أو أي معلومات شخصية مخزنة فيها؛ - أي أخطاء أو فيروسات أو غيرها من المكونات التي قد يتم نقلها إلى التطبيق أو من خلاله بواسطة أي طرف ثالث؛ - أي أخطاء أو سهو في أي محتوى."
                },
                {
                    title: "التغييرات في الشروط",
                    content: "قد نقوم بتعديل هذه الشروط من وقت لآخر. سنخطرك بأي تغييرات من خلال نشر الشروط الجديدة على التطبيق. إن استمرارك في استخدام التطبيق بعد إجراء التغييرات سيشكل قبولك للشروط الجديدة."
                },
                {
                    title: "القانون المعمول به",
                    content: "تخضع هذه الشروط وتُفسر وفقًا لقوانين الهند، دون النظر إلى أحكام تنازع القوانين."
                },
                {
                    title: "معلومات الاتصال",
                    content: "إذا كانت لديك أي أسئلة حول هذه الشروط، يرجى الاتصال بنا على srilogishyd@gmail.com."
                }
            ],
            footer: {
                message: "نحتفظ بالحق في تعديل هذه الشروط في أي وقت. إن الاستمرار في استخدام خدماتنا يشكل قبولًا بأي تغييرات.",
                contact: "لأي أسئلة تتعلق بشروطنا، يرجى الاتصال بـ israelitesshopping171@gmail.com."
            }
        },
        privacy: {
            title: "سياسة الخصوصية",
            lastUpdated: "آخر تحديث: ديسمبر 2024",
            sections: [
                {
                    title: "جمع المعلومات",
                    content: "نقوم بجمع المعلومات الشخصية التي تقدمها لنا مباشرة، مثل اسمك، عنوان الفوترة، عنوان الشحن، عنوان البريد الإلكتروني، ورقم الهاتف. تقدم هذه المعلومات عند الاتصال بنا من خلال نموذج على الموقع. كما نقوم بجمع معلومات غير شخصية، بما في ذلك نوع المتصفح، نظام التشغيل، عنوان IP، نشاط التصفح، والتفاصيل الديموغرافية تلقائيًا عند استخدامك للموقع."
                },
                {
                    title: "استخدام المعلومات",
                    content: "نستخدم المعلومات الشخصية للرد على استفساراتك وطلباتك. يتم استخدام المعلومات غير الشخصية لتحسين الموقع وتعزيز تجربة المستخدم ودعم الجهود التسويقية الداخلية. لن نشارك معلوماتك الشخصية مع أطراف ثالثة لأغراض التسويق دون موافقتك، إلا إذا كان ذلك مطلوبًا بموجب القانون."
                },
                {
                    title: "ملفات تعريف الارتباط والتتبع",
                    content: "نستخدم ملفات تعريف الارتباط والتقنيات المشابهة لجمع معلومات غير شخصية حول استخدامك للموقع. تساعدنا ملفات تعريف الارتباط في تذكر تفضيلاتك وتحسين تجربتك في التصفح. تبقى ملفات تعريف الارتباط الخاصة بتسجيل الدخول لمدة يومين، وتبقى ملفات تعريف الارتباط الخاصة بالخيارات لمدة عام، وتنتهي صلاحية ملفات تعريف الارتباط الأخرى المستخدمة أثناء تحرير المقالات بعد يوم واحد. عند تحديد 'تذكرني' سيتم تمديد مدة تسجيل الدخول لمدة أسبوعين. سيؤدي تسجيل الخروج إلى إزالة ملفات تعريف الارتباط الخاصة بتسجيل الدخول."
                },
                {
                    title: "خدمات الأطراف الثالثة",
                    content: "قد نستخدم مقدمي خدمات من أطراف ثالثة لتشغيل الموقع وتقديم خدماتنا. قد يكون لهؤلاء المزودين الوصول إلى معلومات غير شخصية. لن يتم مشاركة المعلومات الشخصية مع أطراف ثالثة لأغراض تسويقية بدون موافقتك."
                },
                {
                    title: "الأمان",
                    content: "نتخذ خطوات معقولة لحماية معلوماتك من الوصول غير المصرح به أو الكشف عنها أو تغييرها أو تدميرها. ومع ذلك، لا توجد أي عملية نقل عبر الإنترنت أو موقع ويب آمن تمامًا. نشجع المستخدمين على اتخاذ الاحتياطات عند مشاركة البيانات الشخصية عبر الإنترنت."
                },
                {
                    title: "خصوصية الأطفال",
                    content: "الموقع ليس موجهًا للأطفال دون سن 13 عامًا. نحن لا نجمع معلومات شخصية من الأطفال دون سن 13 عامًا عن عمد. إذا كنت تعتقد أن طفلك قد قدم لنا معلومات شخصية، يرجى الاتصال بنا لإزالتها."
                },
                {
                    title: "تحديثات السياسة",
                    content: "قد يتم تحديث سياسة الخصوصية هذه من وقت لآخر. سيتم نشر التغييرات على الموقع، ونحن نشجعك على مراجعة هذه السياسة بانتظام للبقاء على اطلاع على ممارساتنا."
                }
            ],
            footer: {
                contact: "إذا كانت لديك أي أسئلة حول ممارساتنا في الخصوصية، يرجى الاتصال بنا على israelitesshopping171@gmail.com."
            }
        },
        cancel: {
            title: "سياسة الإلغاء",
            lastUpdated: "آخر تحديث: أكتوبر 2023",
            sections: [
                {
                    title: "1. فترة الإلغاء",
                    points: [
                        "يمكن إلغاء الطلب خلال 24 ساعة من تقديمه.",
                        "بعد 24 ساعة، نبدأ في معالجة وشحن طلبك، ولن يكون الإلغاء ممكنًا."
                    ]
                },
                {
                    title: "2. كيفية إلغاء طلبك",
                    description: "لإلغاء طلبك، يرجى اتباع الخطوات التالية:",
                    points: [
                        "اتصل فورًا: تواصل مع فريق دعم العملاء لدينا على الرقم +91990-852-6444 خلال 24 ساعة من تقديم الطلب.",
                        "قدم تفاصيل الطلب: ضمن رسالتك، اذكر رقم الطلب وسبب الإلغاء لكي نتمكن من معالجة طلبك بسرعة."
                    ]
                },
                {
                    title: "3. الإلغاء بعد الشحن",
                    points: [
                        "إذا تم شحن طلبك بالفعل، فلن نتمكن من إلغائه. في هذه الحالة، يمكنك إرجاع المنتج بعد استلامه.",
                        "لبدء عملية الإرجاع، يرجى مراجعة سياسة الإرجاع الخاصة بنا للحصول على مزيد من التعليمات."
                    ]
                },
                {
                    title: "4. عملية الاسترداد",
                    points: [
                        "استرداد كامل: إذا تم معالجة طلب الإلغاء قبل شحن المنتج، فسيتم استرداد المبلغ بالكامل.",
                        "استرداد جزئي: إذا قمت بإلغاء الطلب بعد شحن المنتج، سيتم استرداد تكلفة المنتج بعد خصم رسوم الشحن، عندما يتم استلام العنصر المرتجع في حالته الأصلية."
                    ]
                },
                {
                    title: "5. الحالات غير القابلة للإلغاء",
                    points: [
                        "المنتجات المفتوحة/المستخدمة: بعد فتح المنتج أو استخدامه، لا يتم قبول الإلغاء. يرجى فحص المنتج بعناية عند استلامه.",
                        "العروض الترويجية الخاصة: قد تكون الطلبات التي تتم تحت العروض الترويجية الخاصة أو الخصومات خاضعة لشروط إلغاء مختلفة، والتي سيتم تحديدها أثناء عملية الشراء."
                    ]
                }
            ],
            footer: {
                message: "نحن نسعى لتوفير تجربة سلسة، وفريق خدمة العملاء لدينا متاح لمساعدتك في أي مشكلة.",
                thankYou: "شكرًا لاختيارك بّيوند سليم. نقدر تفهمك ودعمك!"
            }
        },
        shipping: {
            "title": "سياسة الشحن",
            "lastUpdated": "آخر تحديث: ديسمبر 2024",
            "sections": [
                {
                    "title": "1. تغطية الشحن",
                    "content": [
                        {
                            "subtitle": "الشحن المحلي",
                            "text": "نقوم بتوصيل الطلبات إلى جميع المدن والبلدات الرئيسية في الهند. تحقق من رمز PIN أثناء عملية الدفع. قد يستغرق الشحن إلى المناطق البعيدة وقتًا إضافيًا. قد لا تتوفر الخدمة في بعض المناطق المحظورة."
                        },
                        {
                            "subtitle": "الشحن الدولي",
                            "text": "نحن حريصون على تقديم خدمات الشحن الدولي للعملاء في جميع أنحاء العالم. هدفنا هو تسليم طلبك بسرعة وكفاءة، بغض النظر عن مكانك."
                        }
                    ]
                },
                {
                    "title": "2. طرق الشحن",
                    "content": [
                        {
                            "subtitle": "التوصيل القياسي",
                            "text": "التوصيل خلال 5-7 أيام عمل. متوفر في جميع مناطق الخدمة."
                        }
                    ]
                },
                {
                    "title": "3. شركاء الشحن",
                    "text": "نحن نتعاون مع شركاء الشحن المرموقين التاليين:",
                    "list": ["أرامكس", "دي إتش إل", "بلو دارت", "دي تي دي سي"]
                },
                {
                    "title": "4. معالجة الطلبات",
                    "content": [
                        {
                            "subtitle": "وقت المعالجة",
                            "text": "يتم معالجة الطلبات في غضون 24 ساعة من تقديمها. يتم إرسال تأكيد الطلب عبر البريد الإلكتروني. قد يتطلب الطلبات الكبيرة وقت معالجة إضافي."
                        },
                        {
                            "subtitle": "تتبع الطلب",
                            "text": "يتم توفير رقم التتبع عبر البريد الإلكتروني. دعم خدمة العملاء متاح للاستفسارات المتعلقة بالتتبع."
                        }
                    ]
                },
                {
                    "title": "12. دعم العملاء",
                    "content": [
                        {
                            "subtitle": "البريد الإلكتروني",
                            "text": "israelitesshopping171@gmail.com"
                        },
                        {
                            "subtitle": "الهاتف",
                            "text": "990-852-6444"
                        },
                        {
                            "subtitle": "وقت الاستجابة",
                            "text": "خلال 4 ساعات عمل في ساعات العمل."
                        }
                    ]
                },
                {
                    "title": "13. تحديث السياسة",
                    "text": "تخضع هذه السياسة للتغييرات. سيتم نشر التحديثات على موقعنا الإلكتروني. سيتم إعلام العملاء بالتغييرات الهامة عبر البريد الإلكتروني قبل 7 أيام على الأقل. يشير استمرار استخدام خدماتنا إلى قبول السياسة المحدثة."
                }
            ],
            "footer": {
                "text": "لمزيد من المعلومات، يرجى الاتصال بنا: israelitesshopping171@gmail.com"
            }
        },
        return: {
            "title": "سياسة الإرجاع",
            "lastUpdated": "آخر تحديث: ديسمبر 2024",
            "sections": [
                {
                    "title": "أهلية الإرجاع",
                    "content": "يمكن إرجاع مشترياتك فقط إذا كانت تستوفي المعايير التالية: يجب أن يتم إرجاع المنتج في عبواته الأصلية (غير مستخدم أو غير صالح للاستخدام)، يجب أن يصل إلى العنوان المدرج في موقعنا، ويجب أن يصل في غضون 15 يومًا من تاريخ الشراء. لا نقبل المنتجات التالفة."
                },
                {
                    "title": "عملية الاسترداد",
                    "content": "للبدء في عملية الاسترداد، يجب على العميل إرسال المنتج إلى العنوان المحدد. بعد استلام المنتج وفحصه، سيتم استرداد المبلغ إلى طريقة الدفع الأصلية في غضون 10 أيام عمل، باستثناء تكاليف الشحن."
                },
                {
                    "title": "مسؤولية الشحن",
                    "content": "تبدأ عملية الإرجاع من العميل، ويكون العميل مسؤولاً عن ضمان إرسال المنتج إلى العنوان المحدد. إذا كان الإرجاع بسبب عيوب في التصنيع أو خطأ من جانبنا، فسيتم تغطية تكلفة الشحن المرتجعة."
                }
            ],
            "footer": {
                "contact": "لأي استفسارات حول الإرجاع، يرجى الاتصال بنا على: israelitesshopping171@gmail.com"
            }
        }
    }
};

export default data;