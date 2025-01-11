import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import data from '../utils/data';

const SHIPPING_CHARGE = 10.89;

const COUNTRIES = [
    { code: "AF", name: "Afghanistan" },
    { code: "AL", name: "Albania" },
    { code: "DZ", name: "Algeria" },
    { code: "AS", name: "American Samoa" },
    { code: "AD", name: "Andorra" },
    { code: "AO", name: "Angola" },
    { code: "AI", name: "Anguilla" },
    { code: "AQ", name: "Antarctica" },
    { code: "AG", name: "Antigua and Barbuda" },
    { code: "AR", name: "Argentina" },
    { code: "AM", name: "Armenia" },
    { code: "AW", name: "Aruba" },
    { code: "AU", name: "Australia" },
    { code: "AT", name: "Austria" },
    { code: "AZ", name: "Azerbaijan" },
    { code: "BS", name: "Bahamas" },
    { code: "BH", name: "Bahrain" },
    { code: "BD", name: "Bangladesh" },
    { code: "BB", name: "Barbados" },
    { code: "BY", name: "Belarus" },
    { code: "BE", name: "Belgium" },
    { code: "BZ", name: "Belize" },
    { code: "BJ", name: "Benin" },
    { code: "BM", name: "Bermuda" },
    { code: "BT", name: "Bhutan" },
    { code: "BO", name: "Bolivia" },
    { code: "BA", name: "Bosnia and Herzegovina" },
    { code: "BW", name: "Botswana" },
    { code: "BV", name: "Bouvet Island" },
    { code: "BR", name: "Brazil" },
    { code: "IO", name: "British Indian Ocean Territory" },
    { code: "BN", name: "Brunei Darussalam" },
    { code: "BG", name: "Bulgaria" },
    { code: "BF", name: "Burkina Faso" },
    { code: "BI", name: "Burundi" },
    { code: "KH", name: "Cambodia" },
    { code: "CM", name: "Cameroon" },
    { code: "CA", name: "Canada" },
    { code: "CV", name: "Cape Verde" },
    { code: "KY", name: "Cayman Islands" },
    { code: "CF", name: "Central African Republic" },
    { code: "TD", name: "Chad" },
    { code: "CL", name: "Chile" },
    { code: "CN", name: "China" },
    { code: "CX", name: "Christmas Island" },
    { code: "CC", name: "Cocos (Keeling) Islands" },
    { code: "CO", name: "Colombia" },
    { code: "KM", name: "Comoros" },
    { code: "CG", name: "Congo" },
    { code: "CD", name: "Congo, Democratic Republic of the" },
    { code: "CK", name: "Cook Islands" },
    { code: "CR", name: "Costa Rica" },
    { code: "CI", name: "Cote D'Ivoire" },
    { code: "HR", name: "Croatia" },
    { code: "CU", name: "Cuba" },
    { code: "CY", name: "Cyprus" },
    { code: "CZ", name: "Czech Republic" },
    { code: "DK", name: "Denmark" },
    { code: "DJ", name: "Djibouti" },
    { code: "DM", name: "Dominica" },
    { code: "DO", name: "Dominican Republic" },
    { code: "EC", name: "Ecuador" },
    { code: "EG", name: "Egypt" },
    { code: "SV", name: "El Salvador" },
    { code: "GQ", name: "Equatorial Guinea" },
    { code: "ER", name: "Eritrea" },
    { code: "EE", name: "Estonia" },
    { code: "ET", name: "Ethiopia" },
    { code: "FK", name: "Falkland Islands (Malvinas)" },
    { code: "FO", name: "Faroe Islands" },
    { code: "FJ", name: "Fiji" },
    { code: "FI", name: "Finland" },
    { code: "FR", name: "France" },
    { code: "GF", name: "French Guiana" },
    { code: "PF", name: "French Polynesia" },
    { code: "TF", name: "French Southern Territories" },
    { code: "GA", name: "Gabon" },
    { code: "GM", name: "Gambia" },
    { code: "GE", name: "Georgia" },
    { code: "DE", name: "Germany" },
    { code: "GH", name: "Ghana" },
    { code: "GI", name: "Gibraltar" },
    { code: "GR", name: "Greece" },
    { code: "GL", name: "Greenland" },
    { code: "GD", name: "Grenada" },
    { code: "GP", name: "Guadeloupe" },
    { code: "GU", name: "Guam" },
    { code: "GT", name: "Guatemala" },
    { code: "GN", name: "Guinea" },
    { code: "GW", name: "Guinea-Bissau" },
    { code: "GY", name: "Guyana" },
    { code: "HT", name: "Haiti" },
    { code: "HM", name: "Heard Island and Mcdonald Islands" },
    { code: "VA", name: "Holy See (Vatican City State)" },
    { code: "HN", name: "Honduras" },
    { code: "HK", name: "Hong Kong" },
    { code: "HU", name: "Hungary" },
    { code: "IS", name: "Iceland" },
    { code: "IN", name: "India" },
    { code: "ID", name: "Indonesia" },
    { code: "IR", name: "Iran" },
    { code: "IQ", name: "Iraq" },
    { code: "IE", name: "Ireland" },
    { code: "IL", name: "Israel" },
    { code: "IT", name: "Italy" },
    { code: "JM", name: "Jamaica" },
    { code: "JP", name: "Japan" },
    { code: "JO", name: "Jordan" },
    { code: "KZ", name: "Kazakhstan" },
    { code: "KE", name: "Kenya" },
    { code: "KI", name: "Kiribati" },
    { code: "KP", name: "Korea, Democratic People's Republic of" },
    { code: "KR", name: "Korea, Republic of" },
    { code: "KW", name: "Kuwait" },
    { code: "KG", name: "Kyrgyzstan" },
    { code: "LA", name: "Lao People's Democratic Republic" },
    { code: "LV", name: "Latvia" },
    { code: "LB", name: "Lebanon" },
    { code: "LS", name: "Lesotho" },
    { code: "LR", name: "Liberia" },
    { code: "LY", name: "Libyan Arab Jamahiriya" },
    { code: "LI", name: "Liechtenstein" },
    { code: "LT", name: "Lithuania" },
    { code: "LU", name: "Luxembourg" },
    { code: "MO", name: "Macao" },
    { code: "MK", name: "Macedonia" },
    { code: "MG", name: "Madagascar" },
    { code: "MW", name: "Malawi" },
    { code: "MY", name: "Malaysia" },
    { code: "MV", name: "Maldives" },
    { code: "ML", name: "Mali" },
    { code: "MT", name: "Malta" },
    { code: "MH", name: "Marshall Islands" },
    { code: "MQ", name: "Martinique" },
    { code: "MR", name: "Mauritania" },
    { code: "MU", name: "Mauritius" },
    { code: "YT", name: "Mayotte" },
    { code: "MX", name: "Mexico" },
    { code: "FM", name: "Micronesia, Federated States of" },
    { code: "MD", name: "Moldova, Republic of" },
    { code: "MC", name: "Monaco" },
    { code: "MN", name: "Mongolia" },
    { code: "MS", name: "Montserrat" },
    { code: "MA", name: "Morocco" },
    { code: "MZ", name: "Mozambique" },
    { code: "MM", name: "Myanmar" },
    { code: "NA", name: "Namibia" },
    { code: "NR", name: "Nauru" },
    { code: "NP", name: "Nepal" },
    { code: "NL", name: "Netherlands" },
    { code: "NC", name: "New Caledonia" },
    { code: "NZ", name: "New Zealand" },
    { code: "NI", name: "Nicaragua" },
    { code: "NE", name: "Niger" },
    { code: "NG", name: "Nigeria" },
    { code: "NU", name: "Niue" },
    { code: "NF", name: "Norfolk Island" },
    { code: "MP", name: "Northern Mariana Islands" },
    { code: "NO", name: "Norway" },
    { code: "OM", name: "Oman" },
    { code: "PK", name: "Pakistan" },
    { code: "PW", name: "Palau" },
    { code: "PS", name: "Palestinian Territory, Occupied" },
    { code: "PA", name: "Panama" },
    { code: "PG", name: "Papua New Guinea" },
    { code: "PY", name: "Paraguay" },
    { code: "PE", name: "Peru" },
    { code: "PH", name: "Philippines" },
    { code: "PN", name: "Pitcairn" },
    { code: "PL", name: "Poland" },
    { code: "PT", name: "Portugal" },
    { code: "PR", name: "Puerto Rico" },
    { code: "QA", name: "Qatar" },
    { code: "RE", name: "Reunion" },
    { code: "RO", name: "Romania" },
    { code: "RU", name: "Russian Federation" },
    { code: "RW", name: "Rwanda" },
    { code: "SH", name: "Saint Helena" },
    { code: "KN", name: "Saint Kitts and Nevis" },
    { code: "LC", name: "Saint Lucia" },
    { code: "PM", name: "Saint Pierre and Miquelon" },
    { code: "VC", name: "Saint Vincent and the Grenadines" },
    { code: "WS", name: "Samoa" },
    { code: "SM", name: "San Marino" },
    { code: "ST", name: "Sao Tome and Principe" },
    { code: "SA", name: "Saudi Arabia" },
    { code: "SN", name: "Senegal" },
    { code: "CS", name: "Serbia and Montenegro" },
    { code: "SC", name: "Seychelles" },
    { code: "SL", name: "Sierra Leone" },
    { code: "SG", name: "Singapore" },
    { code: "SK", name: "Slovakia" },
    { code: "SI", name: "Slovenia" },
    { code: "SB", name: "Solomon Islands" },
    { code: "SO", name: "Somalia" },
    { code: "ZA", name: "South Africa" },
    { code: "GS", name: "South Georgia and the South Sandwich Islands" },
    { code: "ES", name: "Spain" },
    { code: "LK", name: "Sri Lanka" },
    { code: "SD", name: "Sudan" },
    { code: "SR", name: "Suriname" },
    { code: "SJ", name: "Svalbard and Jan Mayen" },
    { code: "SZ", name: "Swaziland" },
    { code: "SE", name: "Sweden" },
    { code: "CH", name: "Switzerland" },
    { code: "SY", name: "Syrian Arab Republic" },
    { code: "TW", name: "Taiwan" },
    { code: "TJ", name: "Tajikistan" },
    { code: "TZ", name: "Tanzania, United Republic of" },
    { code: "TH", name: "Thailand" },
    { code: "TL", name: "Timor-Leste" },
    { code: "TG", name: "Togo" },
    { code: "TK", name: "Tokelau" },
    { code: "TO", name: "Tonga" },
    { code: "TT", name: "Trinidad and Tobago" },
    { code: "TN", name: "Tunisia" },
    { code: "TR", name: "Turkey" },
    { code: "TM", name: "Turkmenistan" },
    { code: "TC", name: "Turks and Caicos Islands" },
    { code: "TV", name: "Tuvalu" },
    { code: "UG", name: "Uganda" },
    { code: "UA", name: "Ukraine" },
    { code: "AE", name: "United Arab Emirates" },
    { code: "GB", name: "United Kingdom" },
    { code: "US", name: "United States" },
    { code: "UM", name: "United States Minor Outlying Islands" },
    { code: "UY", name: "Uruguay" },
    { code: "UZ", name: "Uzbekistan" },
    { code: "VU", name: "Vanuatu" },
    { code: "VE", name: "Venezuela" },
    { code: "VN", name: "Viet Nam" },
    { code: "VG", name: "Virgin Islands, British" },
    { code: "VI", name: "Virgin Islands, U.S." },
    { code: "WF", name: "Wallis and Futuna" },
    { code: "EH", name: "Western Sahara" },
    { code: "YE", name: "Yemen" },
    { code: "ZM", name: "Zambia" },
    { code: "ZW", name: "Zimbabwe" }
];

// Add styles for the modal
const modalStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
    },
    content: {
        background: '#fff',
        padding: '20px',
        borderRadius: '8px',
        maxWidth: '500px',
        width: '100%',
        textAlign: 'center',
    },
};

const Checkout = () => {
    const paypalRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();
    const { language } = useLanguage();
    const checkoutData = data[language].checkout;
    const orderDetails = location.state;
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [formComplete, setFormComplete] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        country: 'India',
    });

    const [formErrors, setFormErrors] = useState({});

    const sendOrderConfirmationEmail = async (paymentDetails) => {
        try {
            const response = await fetch('https://formsubmit.co/ajax/israelitesshopping171@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    _subject: `Order Confirmation - ${orderDetails.productName}`,
                    _template: 'table',
                    _captcha: 'false',
                    message: `
                        Order Details:
                        Product: ${orderDetails.productName}
                        Quantity: ${orderDetails.quantity}
                        Total: $${orderDetails.totalAmount + SHIPPING_CHARGE}
                        
                        Customer Information:
                        Name: ${formData.firstName} ${formData.lastName}
                        Email: ${formData.email}
                        Phone: ${formData.phone}
                        Address: ${formData.address}
                        City: ${formData.city}
                        Country: ${formData.country}
                        
                        Payment Information:
                        Transaction ID: ${paymentDetails.id}
                        Status: ${paymentDetails.status}
                        Time: ${new Date().toISOString()}
                    `
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            return result.success;
        } catch (error) {
            console.error('Email sending error:', error);
            return false;
        }
    };

    useEffect(() => {
        if (!orderDetails) {
            navigate('/product');
            return;
        }

        if (formComplete) {
            const addPayPalScript = async () => {
                if (window.paypal) {
                    if (paypalRef.current) {
                        renderPayPalButtons();
                    }
                    return;
                }

                // Use the direct client ID instead of environment variable
                const script = document.createElement('script');
                script.src = "https://www.paypal.com/sdk/js?client-id=AVkWz96gFAr2EU8qwxGitK97bxWbgueLg4te5vaWonFy94OdXgw-cYPnJu7d4sZ5ogH_xhtbz7l_R2gh&currency=USD";
                script.async = true;
                
                script.onload = () => {
                    if (paypalRef.current) {
                        renderPayPalButtons();
                    }
                };
                
                script.onerror = () => {
                    console.error('PayPal script failed to load');
                    setFormErrors(prev => ({
                        ...prev,
                        submit: "Payment system unavailable. Please try again later."
                    }));
                };

                document.body.appendChild(script);
                
                return () => {
                    if (document.body.contains(script)) {
                        document.body.removeChild(script);
                    }
                };
            };

            const renderPayPalButtons = () => {
                const totalInUSD = orderDetails.totalAmount + SHIPPING_CHARGE;

                window.paypal.Buttons({
                    createOrder: (data, actions) => {
                        return actions.order.create({
                            purchase_units: [{
                                amount: {
                                    currency_code: "USD",
                                    value: totalInUSD.toString(),
                                    breakdown: {
                                        item_total: {
                                            currency_code: "USD",
                                            value: orderDetails.totalAmount.toString()
                                        },
                                        shipping: {
                                            currency_code: "USD",
                                            value: SHIPPING_CHARGE.toString()
                                        }
                                    }
                                },
                                description: `${orderDetails.productName} x ${orderDetails.quantity}`
                            }]
                        });
                    },
                    onApprove: async (data, actions) => {
                        try {
                            const order = await actions.order.capture();
                            setPaymentSuccess(true);
                            await sendOrderConfirmationEmail(order);
                            console.log('Payment successful:', order);
                        } catch (error) {
                            console.error('Payment process error:', error);
                            setFormErrors(prev => ({
                                ...prev,
                                submit: "Payment completed but there was an error. Please save your confirmation number."
                            }));
                        }
                    },
                    onError: (err) => {
                        console.error('PayPal error:', err);
                        setFormErrors(prev => ({
                            ...prev,
                            submit: "There was an error processing your payment. Please try again."
                        }));
                    }
                }).render(paypalRef.current);
            };

            addPayPalScript();
        }
    }, [orderDetails, navigate, formComplete]);

    // Redirect if no order details
    if (!orderDetails) {
        navigate('/product');
        return null;
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Special handling for phone input
        if (name === 'phone') {
            // Remove any non-digit characters
            const phoneValue = value.replace(/\D/g, '');
            // Limit to 10 digits
            const truncatedPhone = phoneValue.slice(0, 10);
            setFormData(prev => ({
                ...prev,
                [name]: truncatedPhone
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }

        // Clear error when user starts typing
        if (formErrors[name]) {
            setFormErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const errors = {};

        // Existing validations
        if (!formData.firstName) errors.firstName = 'First name is required';
        if (!formData.lastName) errors.lastName = 'Last name is required';
        if (!formData.email) errors.email = 'Email is required';
        if (!formData.address) errors.address = 'Address is required';
        if (!formData.city) errors.city = 'City is required';

        // Enhanced phone validation
        if (!formData.phone) {
            errors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phone)) {
            errors.phone = 'Phone number must be exactly 10 digits';
        }

        // Email validation
        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Please enter a valid email address';
        }

        // Update formComplete state based on validation
        setFormComplete(Object.keys(errors).length === 0);
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validateForm();
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            setIsSubmitting(true);
            try {
                // Simply set form as complete without making the initial form submission
                setFormComplete(true);
                setIsSubmitting(false);
            } catch (error) {
                console.error('Form submission error:', error);
                setFormErrors(prev => ({
                    ...prev,
                    submit: "Error validating form. Please try again."
                }));
                setIsSubmitting(false);
            }
        }
    };

    const renderOrderSummary = () => (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {checkoutData.title}
            </h2>
            <div className="space-y-4">
                {/* Product Details */}
                <div className="flex justify-between py-2">
                    <span className="text-gray-700">
                        {orderDetails?.productName} x {orderDetails?.quantity}
                    </span>
                    <span className="text-gray-700">
                        $ {orderDetails?.totalAmount}
                    </span>
                </div>

                {/* Subtotal */}
                <div className="flex justify-between py-2 border-t border-gray-200">
                    <span className="font-medium text-gray-700">
                        {checkoutData.orderSummary.subtotal}
                    </span>
                    <span className="text-gray-700">
                        $ {orderDetails?.totalAmount}
                    </span>
                </div>

                {/* Shipping */}
                <div className="flex justify-between py-2 border-t border-gray-200">
                    <span className="font-medium text-gray-700">
                        {checkoutData.orderSummary.shipping}
                    </span>
                    <div className="text-sm text-gray-500 mt-1 flex flex-col items-end gap-2">
                        <span className="text-gray-700">$ {SHIPPING_CHARGE}</span>
                        <span>(Delivery within 5-7 business days)</span>
                    </div>
                </div>

                {/* Total */}
                <div className="flex justify-between py-4 border-t border-gray-200">
                    <span className="text-lg font-bold text-gray-800">
                        {checkoutData.orderSummary.total}
                    </span>
                    <span className="text-lg font-bold text-gray-800">
                        $ {orderDetails?.totalAmount + SHIPPING_CHARGE}
                    </span>
                </div>
            </div>
        </div>
    );

    return (
        <div className="pt-20 min-h-screen bg-blue-300">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Order Summary */}
                    <div>
                        {renderOrderSummary()}
                    </div>

                    {/* Checkout Form */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-6">{checkoutData.shippingTitle}</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        {checkoutData.formFields.firstName.label}
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        placeholder={checkoutData.formFields.firstName.placeholder}
                                        className={`mt-1 block w-full rounded-md border ${formErrors.firstName ? 'border-red-500' : 'border-gray-300'
                                            } p-2`}
                                    />
                                    {formErrors.firstName && (
                                        <p className="text-red-500 text-sm">
                                            {checkoutData.formFields.firstName.error}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        {checkoutData.formFields.lastName.label}
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        placeholder={checkoutData.formFields.lastName.placeholder}
                                        className={`mt-1 block w-full rounded-md border ${formErrors.lastName ? 'border-red-500' : 'border-gray-300'
                                            } p-2`}
                                    />
                                    {formErrors.lastName && (
                                        <p className="text-red-500 text-sm">
                                            {checkoutData.formFields.lastName.error}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    {checkoutData.formFields.email.label}
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder={checkoutData.formFields.email.placeholder}
                                    className={`mt-1 block w-full rounded-md border ${formErrors.email ? 'border-red-500' : 'border-gray-300'
                                        } p-2`}
                                />
                                {formErrors.email && (
                                    <p className="text-red-500 text-sm">
                                        {checkoutData.formFields.email.error}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    {checkoutData.formFields.phone.label}
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder={checkoutData.formFields.phone.placeholder}
                                    maxLength="10"
                                    className={`mt-1 block w-full rounded-md border ${formErrors.phone ? 'border-red-500' : 'border-gray-300'
                                        } p-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                />
                                {formErrors.phone && (
                                    <p className="text-red-500 text-sm">
                                        {checkoutData.formFields.phone.error}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    {checkoutData.formFields.address.label}
                                </label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    placeholder={checkoutData.formFields.address.placeholder}
                                    className={`mt-1 block w-full rounded-md border ${formErrors.address ? 'border-red-500' : 'border-gray-300'
                                        } p-2`}
                                />
                                {formErrors.address && (
                                    <p className="text-red-500 text-sm">
                                        {checkoutData.formFields.address.error}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    {checkoutData.formFields.city.label}
                                </label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    placeholder={checkoutData.formFields.city.placeholder}
                                    className={`mt-1 block w-full rounded-md border ${formErrors.city ? 'border-red-500' : 'border-gray-300'
                                        } p-2`}
                                />
                                {formErrors.city && (
                                    <p className="text-red-500 text-sm">
                                        {checkoutData.formFields.city.error}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    {checkoutData.formFields.country.label}
                                </label>
                                <select
                                    name="country"
                                    value={formData.country}
                                    onChange={handleInputChange}
                                    className={`mt-1 block w-full rounded-md border ${formErrors.country ? 'border-red-500' : 'border-gray-300'
                                        } p-2`}
                                >
                                    <option value="">Select a country</option>
                                    {COUNTRIES.map((country) => (
                                        <option key={country.code} value={country.name}>
                                            {country.name}
                                        </option>
                                    ))}
                                </select>
                                {formErrors.country && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {checkoutData.formFields.country.error}
                                    </p>
                                )}
                            </div>

                            <div className="mt-6">
                                {!formComplete ? (
                                    <button
                                        type="submit"
                                        onClick={handleSubmit}
                                        disabled={isSubmitting}
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg
                                            transition-all duration-200 transform hover:scale-105
                                            disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 mb-4"
                                    >
                                        {isSubmitting ? (
                                            <div className="flex items-center justify-center">
                                                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                Processing...
                                            </div>
                                        ) : (
                                            'Validate Information'
                                        )}
                                    </button>
                                ) : (
                                    <>
                                        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                                            <p className="text-green-600 text-center">
                                                Information validated! Please proceed with payment.
                                            </p>
                                        </div>
                                        <div ref={paypalRef}></div>
                                    </>
                                )}

                                {formErrors.submit && (
                                    <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-lg text-center">
                                        {formErrors.submit}
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Success Message Modal */}
            {paymentSuccess && (
                <div style={modalStyles.overlay}>
                    <div style={modalStyles.content}>
                        <h2 className="text-3xl font-bold text-green-600 mb-4">
                            {checkoutData.successMessage.title}
                        </h2>
                        <p className="text-gray-600 mb-6">
                            {checkoutData.successMessage.description}
                        </p>
                        <button
                            onClick={() => navigate('/')}
                            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                        >
                            {checkoutData.successMessage.buttonText}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Checkout;