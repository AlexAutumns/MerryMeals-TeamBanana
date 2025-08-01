import React, { useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function Donation() {
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        anonymous: false,
        phone: "",
        amount: "",
        card: "",
        expiry: "",
        cvc: "",

        streetAddress: "",
        city: "",
        stateProvinceRegion: "",
        postalCode: "",
        country: "",
    });
    const [paymentMethod, setPaymentMethod] = useState("card");
    const [showMore, setShowMore] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target;
        let checked = false;
        if (type === "checkbox") {
            checked = (e.target as HTMLInputElement).checked;
        }
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess(false);

        // Validate name (letters and spaces only)
        if (!/^[A-Za-z ]+$/.test(form.fullName)) {
            setError("Name must contain only letters and spaces.");
            return;
        }
        // Validate email (must be a valid @gmail.com address)
        if (
            !form.anonymous &&
            !/^([a-zA-Z0-9_.+-]+)@gmail\.com$/.test(form.email)
        ) {
            setError("Email must be a valid @gmail.com address.");
            return;
        }
        // Validate phone (numbers only)
        if (!/^\d+$/.test(form.phone)) {
            setError("Phone number must contain only numbers.");
            return;
        }

        setSubmitting(true);
        try {
            // If anonymous, set email to anonymous@gmail.com
            const payload = {
                amount: parseFloat(form.amount) || 0,
                method: "CREDIT_CARD",
                fullName: form.fullName,
                email: form.email,
                phone: form.phone,
                address: `${form.streetAddress}, ${form.city}, ${form.stateProvinceRegion}, ${form.postalCode}, ${form.country}`,
                anonymous: form.anonymous,
            };
            const response = await fetch("/api/donations", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            if (!response.ok) throw new Error("Failed to submit donation");
            setSuccess(true);
            setForm({
                fullName: "",
                email: "",
                anonymous: false,
                phone: "",
                amount: "",
                card: "",
                expiry: "",
                cvc: "",

                streetAddress: "",
                city: "",
                stateProvinceRegion: "",
                postalCode: "",
                country: "",
            });
        } catch (err: any) {
            setError(err.message || "Something went wrong");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#f4f8ff] flex flex-col items-center p-0 relative">
            {/* Top gradient shapes */}
            <div className="absolute left-0 top-0 w-48 h-48 bg-gradient-to-br from-blue-100 via-white to-purple-100 rounded-full opacity-70 blur-2xl -z-10" />
            <div className="absolute right-0 top-0 w-48 h-48 bg-gradient-to-br from-blue-100 via-white to-purple-100 rounded-full opacity-70 blur-2xl -z-10" />
            <h1
                className="text-5xl md:text-6xl font-extrabold text-center mt-12 mb-12 w-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 bg-clip-text text-transparent"
                style={{ letterSpacing: "-1px" }}
            >
                Donate with care.
            </h1>
            {success && (
                <div className="w-full max-w-2xl mx-auto bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl mb-4 text-center">
                    Thank you for your donation!
                </div>
            )}
            {error && (
                <div className="w-full max-w-2xl mx-auto bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl mb-4 text-center">
                    {error}
                </div>
            )}
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl px-8 py-10 flex flex-col gap-6 z-10"
            >
                <div>
                    <label className="block text-gray-700 font-semibold mb-1">
                        Enter Full Name
                    </label>
                    <input
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        required
                        placeholder="Full Name *"
                        className="border border-gray-300 rounded-xl px-5 py-4 w-full text-lg"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-semibold mb-1">
                        Enter Email Address
                    </label>
                    <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="Email Address *"
                        className="border border-gray-300 rounded-xl px-5 py-4 w-full text-lg"
                    />
                </div>
                <div className="flex items-center gap-3">
                    <input
                        type="checkbox"
                        name="anonymous"
                        checked={form.anonymous}
                        onChange={handleChange}
                        className="accent-blue-500 h-5 w-5 rounded"
                    />
                    <span className="text-blue-600 font-semibold text-lg">
                        Make donation anonymous
                    </span>
                </div>
                <div>
                    <label className="block text-gray-700 font-semibold mb-1">
                        Phone Number
                    </label>
                    <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className="border border-gray-300 rounded-xl px-5 py-4 w-full text-lg"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-semibold mb-1">
                        How much you want to donate?
                    </label>
                    <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-gray-400 font-bold">
                            $
                        </span>
                        <input
                            name="amount"
                            value={form.amount}
                            onChange={handleChange}
                            required
                            type="number"
                            min="1"
                            step="any"
                            placeholder="Donation Amount"
                            className="border border-gray-300 rounded-xl pl-10 pr-4 py-4 w-full text-lg"
                        />
                    </div>
                </div>
                {/* Card Payment Section */}
                <div className="mt-2 bg-blue-50 rounded-3xl px-6 py-8 relative">
                    <div className="flex gap-4 mb-6">
                        <button
                            type="button"
                            className={`flex-1 flex flex-col items-center justify-center py-3 rounded-xl border-2 font-bold shadow-sm transition-all ${
                                paymentMethod === "card"
                                    ? "border-blue-500 bg-white text-blue-700"
                                    : "border-gray-200 bg-white text-gray-400"
                            }`}
                            onClick={() => setPaymentMethod("card")}
                        >
                            <svg
                                className={`h-6 w-6 mb-1 ${
                                    paymentMethod === "card"
                                        ? "text-blue-500"
                                        : "text-gray-400"
                                }`}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                            >
                                <rect
                                    x="3"
                                    y="7"
                                    width="18"
                                    height="10"
                                    rx="2"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                />
                                <rect
                                    x="7"
                                    y="11"
                                    width="2"
                                    height="2"
                                    rx="1"
                                    fill="currentColor"
                                />
                                <rect
                                    x="11"
                                    y="11"
                                    width="2"
                                    height="2"
                                    rx="1"
                                    fill="currentColor"
                                />
                                <rect
                                    x="15"
                                    y="11"
                                    width="2"
                                    height="2"
                                    rx="1"
                                    fill="currentColor"
                                />
                            </svg>
                            <span className="text-base font-bold">Card</span>
                        </button>
                        <button
                            type="button"
                            className={`flex-1 flex flex-col items-center justify-center py-3 rounded-xl border-2 font-bold shadow-sm transition-all ${
                                paymentMethod === "eps"
                                    ? "border-blue-500 bg-white text-blue-700"
                                    : "border-gray-200 bg-white text-gray-400"
                            }`}
                            onClick={() => setPaymentMethod("eps")}
                        >
                            <span className="text-base font-bold">EPS</span>
                        </button>
                        <button
                            type="button"
                            className={`flex-1 flex flex-col items-center justify-center py-3 rounded-xl border-2 font-bold shadow-sm transition-all ${
                                paymentMethod === "giropay"
                                    ? "border-blue-500 bg-white text-blue-700"
                                    : "border-gray-200 bg-white text-gray-400"
                            }`}
                            onClick={() => setPaymentMethod("giropay")}
                        >
                            <span className="text-base font-bold">Giropay</span>
                        </button>
                        <button
                            type="button"
                            className={`flex flex-col items-center justify-center px-4 py-3 rounded-xl border-2 font-bold shadow-sm transition-all ${
                                paymentMethod === "more"
                                    ? "border-blue-500 bg-white text-blue-700"
                                    : "border-gray-200 bg-white text-gray-400"
                            }`}
                            onClick={() => {
                                setPaymentMethod("more");
                                setShowMore((v) => !v);
                            }}
                            tabIndex={0}
                        >
                            <span className="text-2xl">...</span>
                        </button>
                    </div>
                    <div className="mb-4">
                        {paymentMethod === "card" && (
                            <>
                                <label className="block text-gray-700 font-semibold mb-1">
                                    Card number
                                </label>
                                <div className="relative">
                                    <input
                                        name="card"
                                        value={form.card}
                                        onChange={handleChange}
                                        required
                                        placeholder="1234 1234 1234 1234"
                                        className="border border-gray-300 rounded-xl px-5 py-4 w-full pr-28 text-lg tracking-widest font-mono shadow-sm"
                                        maxLength={19}
                                    />
                                    {/* Card icons - small, all visible, compact */}
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1 items-center">
                                        {/* Visa */}
                                        <span className="flex items-center justify-center h-6 w-8 bg-white border border-gray-200 rounded-md shadow-sm p-0">
                                            <img
                                                src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                                                alt="Visa"
                                                className="h-4 w-7 object-contain"
                                            />
                                        </span>
                                        {/* Mastercard */}
                                        <span className="flex items-center justify-center h-6 w-8 bg-[#232323] border border-gray-200 rounded-md shadow-sm p-0">
                                            <img
                                                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                                                alt="Mastercard"
                                                className="h-4 w-7 object-contain"
                                            />
                                        </span>
                                        {/* Amex */}
                                        <span className="flex items-center justify-center h-6 w-8 bg-white border border-gray-200 rounded-md shadow-sm p-0">
                                            <svg
                                                width="24"
                                                height="17"
                                                viewBox="0 0 24 17"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-8"
                                            >
                                                <g clipPath="url(#clip0_2147_301)">
                                                    <path
                                                        d="M22 0.5H2C0.89543 0.5 0 1.39543 0 2.5V14.5C0 15.6046 0.89543 16.5 2 16.5H22C23.1046 16.5 24 15.6046 24 14.5V2.5C24 1.39543 23.1046 0.5 22 0.5Z"
                                                        fill="#016FD0"
                                                    />
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M13.7642 13.8939V8.1925L23.9117 8.20161V9.77651L22.7388 11.0299L23.9117 12.2948V13.9031H22.0391L21.0439 12.8049L20.0558 13.9072L13.7642 13.8939Z"
                                                        fill="#FFFFFE"
                                                    />
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M14.4419 13.2688V8.81995H18.2142V9.84483H15.6633V10.5405H18.1534V11.5483H15.6633V12.2317H18.2142V13.2688H14.4419Z"
                                                        fill="#016FD0"
                                                    />
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M18.1952 13.2687L20.2825 11.0417L18.1951 8.81995H19.8107L21.0862 10.23L22.3653 8.81995H23.9115V8.85495L21.8686 11.0417L23.9115 13.2056V13.2687H22.3498L21.0516 11.8446L19.7669 13.2687H18.1952Z"
                                                        fill="#016FD0"
                                                    />
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M14.2374 3.13196H16.6834L17.5426 5.08281V3.13196H20.5624L21.0832 4.59353L21.6057 3.13196H23.9116V8.83335H11.7251L14.2374 3.13196Z"
                                                        fill="#FFFFFE"
                                                    />
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M14.7006 3.75134L12.7266 8.19651H14.0805L14.4529 7.30635H16.4708L16.843 8.19651H18.2306L16.2648 3.75134H14.7006ZM14.8702 6.30878L15.4622 4.89371L16.0538 6.30878H14.8702Z"
                                                        fill="#016FD0"
                                                    />
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M18.2122 8.19569V3.75061L20.1153 3.75715L21.0945 6.48988L22.0802 3.75061H23.9118V8.19569L22.7332 8.20612V5.15278L21.6206 8.19569H20.5448L19.4092 5.14235V8.19569H18.2122Z"
                                                        fill="#016FD0"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_2147_301">
                                                        <rect
                                                            width="24"
                                                            height="16"
                                                            fill="white"
                                                            transform="translate(0 0.5)"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                        {/* Discover */}
                                        <span className="flex items-center justify-center h-6 w-8 bg-white border border-gray-200 rounded-md shadow-sm p-0">
                                            <svg
                                                width="24"
                                                height="17"
                                                viewBox="0 0 24 17"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-8"
                                            >
                                                <g clipPath="url(#clip0_2147_311)">
                                                    <path
                                                        d="M21.9972 16.2499L21.9994 16.2499C22.9545 16.2581 23.7381 15.4773 23.75 14.5042L23.75 2.5063C23.7462 2.03569 23.5589 1.58617 23.2297 1.2568C22.9014 0.928269 22.4589 0.746149 21.9972 0.750071L2.00064 0.750062C1.54109 0.746149 1.09858 0.928269 0.770279 1.2568C0.441145 1.58617 0.253838 2.03569 0.250008 2.50426L0.25 14.4937C0.253838 14.9643 0.441145 15.4138 0.770279 15.7432C1.09858 16.0717 1.54109 16.2538 2.00277 16.2499H21.9972ZM21.9962 16.7499C21.9958 16.7499 21.9955 16.7499 21.9951 16.7499L21.9972 16.7499H21.9962Z"
                                                        fill="white"
                                                        stroke="black"
                                                        strokeOpacity="0.2"
                                                        strokeWidth="0.5"
                                                    />
                                                    <path
                                                        d="M12.6123 16.4999H21.9971C22.5239 16.5043 23.0309 16.2993 23.4065 15.9299C23.7821 15.5605 23.9955 15.057 23.9999 14.5303V12.1716C20.4561 14.2059 16.6127 15.6668 12.6123 16.4999Z"
                                                        fill="#F27712"
                                                    />
                                                    <path
                                                        d="M23.1725 9.79643H22.32L21.3601 8.53023H21.269V9.79643H20.5738V6.65161H21.6C22.4028 6.65161 22.8663 6.98264 22.8663 7.5785C22.8663 8.06678 22.5766 8.38126 22.0552 8.48057L23.1725 9.79643ZM22.1463 7.60333C22.1463 7.29712 21.9145 7.13988 21.4842 7.13988H21.269V8.09161H21.4676C21.9145 8.09161 22.1463 7.92609 22.1463 7.60333ZM18.1407 6.65161H20.1104V7.18126H18.8359V7.88471H20.0607V8.42264H18.8359V9.27505H20.1104V9.80471H18.1407V6.65161ZM15.9063 9.87919L14.4001 6.64333H15.1614L16.1132 8.76195L17.0732 6.64333H17.818L16.2952 9.87919H15.9228H15.9063ZM9.60833 9.87092C8.54902 9.87092 7.72143 9.15092 7.72143 8.21574C7.72143 7.3054 8.56557 6.56885 9.62488 6.56885C9.92281 6.56885 10.1711 6.62678 10.4773 6.75919V7.48747C10.2454 7.25965 9.9334 7.13187 9.60833 7.13161C8.94626 7.13161 8.44143 7.61161 8.44143 8.21574C8.44143 8.85299 8.93798 9.30816 9.64143 9.30816C9.95591 9.30816 10.1959 9.20885 10.4773 8.96057V9.68885C10.1628 9.82126 9.89798 9.87092 9.60833 9.87092ZM7.50626 8.83643C7.50626 9.44885 7.00143 9.87092 6.27315 9.87092C5.7435 9.87092 5.36281 9.68885 5.04005 9.27505L5.49522 8.88609C5.65246 9.16747 5.91729 9.30816 6.24833 9.30816C6.56281 9.30816 6.78626 9.11781 6.78626 8.86954C6.78626 8.72885 6.72005 8.62126 6.57936 8.5385C6.4251 8.46365 6.26446 8.40271 6.09936 8.35643C5.44557 8.14954 5.22212 7.92609 5.22212 7.48747C5.22212 6.97436 5.70212 6.5854 6.33109 6.5854C6.72833 6.5854 7.08419 6.70954 7.38212 6.94126L7.01798 7.35505C6.87366 7.19683 6.66938 7.10671 6.45522 7.10678C6.15729 7.10678 5.94212 7.25574 5.94212 7.45436C5.94212 7.61988 6.06626 7.71092 6.48005 7.85161C7.27453 8.09988 7.50626 8.33161 7.50626 8.84471V8.83643ZM4.08833 6.65161H4.7835V9.80471H4.08833V6.65161ZM1.85384 9.80471H0.827637V6.65161H1.85384C2.97936 6.65161 3.75729 7.29712 3.75729 8.22402C3.75729 8.69574 3.52557 9.14264 3.12005 9.44057C2.77246 9.68885 2.3835 9.80471 1.84557 9.80471H1.85384ZM2.66488 7.43781C2.43315 7.25574 2.16833 7.18954 1.71315 7.18954H1.52281V9.27505H1.71315C2.16005 9.27505 2.44143 9.1923 2.66488 9.02678C2.90488 8.82816 3.04557 8.53023 3.04557 8.22402C3.04557 7.91781 2.90488 7.62816 2.66488 7.43781Z"
                                                        fill="black"
                                                    />
                                                    <path
                                                        d="M12.4137 6.56885C11.5034 6.56885 10.7585 7.29712 10.7585 8.19919C10.7585 9.15919 11.4703 9.87919 12.4137 9.87919C13.3406 9.87919 14.0689 9.15092 14.0689 8.22402C14.0689 7.29712 13.3489 6.56885 12.4137 6.56885Z"
                                                        fill="#F27712"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_2147_311">
                                                        <rect
                                                            width="24"
                                                            height="16"
                                                            fill="white"
                                                            transform="translate(0 0.5)"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </>
                        )}
                        {paymentMethod === "eps" && (
                            <div className="flex flex-col items-center justify-center py-8">
                                <span className="text-lg text-gray-500">
                                    EPS payment is not yet available in this
                                    demo.
                                </span>
                            </div>
                        )}
                        {paymentMethod === "giropay" && (
                            <div className="flex flex-col items-center justify-center py-8">
                                <span className="text-lg text-gray-500">
                                    Giropay payment is not yet available in this
                                    demo.
                                </span>
                            </div>
                        )}
                        {paymentMethod === "more" && showMore && (
                            <div className="flex flex-col items-center justify-center py-8">
                                <span className="text-lg text-gray-500">
                                    More payment methods coming soon.
                                </span>
                            </div>
                        )}
                    </div>
                    <div className="flex gap-4 mb-4">
                        <div className="flex-1">
                            <label className="block text-gray-700 font-semibold mb-1">
                                Expiry
                            </label>
                            <input
                                name="expiry"
                                value={form.expiry}
                                onChange={handleChange}
                                required
                                placeholder="MM / YY"
                                className="border border-gray-300 rounded-xl px-5 py-4 w-full text-lg shadow-sm"
                                maxLength={5}
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-gray-700 font-semibold mb-1">
                                CVC
                            </label>
                            <input
                                name="cvc"
                                value={form.cvc}
                                onChange={handleChange}
                                required
                                placeholder="CVC"
                                className="border border-gray-300 rounded-xl px-5 py-4 w-full text-lg shadow-sm"
                                maxLength={4}
                            />
                        </div>
                    </div>
                    <div className="grid-cols-2 gap-4">
                        <div className="flex-1 mt-4">
                            <label class="block text-gray-700 font-semibold mb-1">
                                Street Address
                            </label>
                            <input
                                type="text"
                                name="streetAddress"
                                value={form.streetAddress}
                                onChange={handleChange}
                                class="border border-gray-300 rounded-xl px-5 py-4 w-full text-lg shadow-sm hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Street address, apartment, suite, etc."
                            />
                        </div>

                        <div class="flex-1 mt-4">
                            <label className="block text-gray-700 font-semibold mb-1">
                                City
                            </label>
                            <input
                                type="text"
                                name="city"
                                value={form.city}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-xl px-5 py-4 w-full text-lg shadow-sm hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="City"
                            />
                        </div>

                        <div className="flex-1 mt-4">
                            <label className="block text-gray-700 font-semibold mb-1">
                                State/Province/Region
                            </label>
                            <input
                                type="text"
                                name="stateProvinceRegion"
                                value={form.stateProvinceRegion}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-xl px-5 py-4 w-full text-lg shadow-sm hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="State, Province, or Region"
                            />
                        </div>

                        <div className="flex-1 mt-4">
                            <label className="block text-gray-700 font-semibold mb-1">
                                Postal Code
                            </label>
                            <input
                                type="text"
                                name="postalCode"
                                value={form.postalCode}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-xl px-5 py-4 w-full text-lg shadow-sm hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Postal Code"
                            />
                        </div>

                        <div className="flex-1 mt-4">
                            <label className="block text-gray-700 font-semibold mb-1">
                                Country
                            </label>
                            <input
                                type="text"
                                name="country"
                                value={form.country}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-xl px-5 py-4 w-full text-lg shadow-sm hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your country"
                            />
                        </div>
                    </div>
                </div>
                <button
                    type="submit"
                    className="mt-8 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 text-white text-3xl font-extrabold py-5 rounded-full shadow-xl hover:scale-105 transition-all w-full disabled:opacity-60"
                    disabled={submitting}
                >
                    {submitting ? "Processing..." : "Donate now."}
                </button>
            </form>
            {/* Bottom gradient shape */}
            <div className="absolute left-0 bottom-0 w-64 h-64 bg-gradient-to-br from-blue-100 via-white to-purple-100 rounded-full opacity-70 blur-2xl -z-10" />
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-br from-blue-100 via-white to-purple-100 rounded-full opacity-70 blur-2xl -z-10" />
        </div>
    );
}
