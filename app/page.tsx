'use client';

import {useState, useEffect} from "react";

interface Currency {
    code: string;
    name: string;
}

interface Currency {
    code: string;
    name: string;
}

export default function Home() {
    const [currencies, setCurrencies] = useState<Currency[]>([]);
    const [fromCurrency, setFromCurrency] = useState<string>("");
    const [toCurrency, setToCurrency] = useState<string>("");
    const [amount, setAmount] = useState<number | undefined>(undefined);
    const [conversionRate, setConversionRate] = useState<number | undefined>(undefined);
    const [convertedAmount, setConvertedAmount] = useState<number | undefined>(undefined);

    useEffect(() => {
      const apiURL = `https://api.currencyapi.com/v3/currencies?apikey=${process.env.NEXT_PUBLIC_API_KEY}`;
        fetch(apiURL)
            .then((response) => response.json())
            .then((data) => {
                const currencyData = data?.data;
                if (currencyData) {
                    const currencyArray = Object.keys(currencyData).map((key) => ({
                        code: key,
                        name: currencyData[key].name,
                    }));
                    setCurrencies(currencyArray);
                }
            })
            .catch((error) => console.error("Erreur lors de la récupération des devises:", error));
    }, []);

    const handleConvert = () => {
        if (fromCurrency && toCurrency && amount) {
            const apiUrl = `https://api.currencyapi.com/v3/latest?base_currency=${fromCurrency}&currencies[]=${toCurrency}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`;
            fetch(apiUrl)
                .then((response) => response.json())
                .then((data) => {
                    const rate = data?.data?.[toCurrency]?.value;
                    setConversionRate(rate);
                    if (rate) {
                        const converted = amount * rate;
                        setConvertedAmount(converted);
                    }
                })
                .catch((error) => console.error("Erreur lors de la récupération du taux de change:", error));
        }
    };

    return (
        <div className="text-center flex-grow mt-40">
            <div className="flex flex-col justify-center">
                <h2>Convertisseur de devises</h2>
                <div className="flex flex-col items-center justify-center">
                    <div className="mb-4">
                        <label htmlFor="fromCurrency">De :</label>
                        <select
                            id="fromCurrency"
                            value={fromCurrency}
                            onChange={(e) => setFromCurrency(e.target.value)}
                            className="text-[#020617] border border-gray-300 rounded-md px-2 py-1 mx-2"
                        >
                            <option value="">Sélectionner une devise</option>
                            {currencies.map((currency) => (
                                <option key={currency.code} value={currency.code}>
                                    {currency.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="toCurrency">À :</label>
                        <select
                            id="toCurrency"
                            value={toCurrency}
                            onChange={(e) => setToCurrency(e.target.value)}
                            className="text-[#020617] border border-gray-300 rounded-md px-2 py-1 mx-2"
                        >
                            <option value="">Sélectionner une devise</option>
                            {currencies.map((currency) => (
                                <option key={currency.code} value={currency.code}>
                                    {currency.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="amount">Montant à convertir :</label>
                        <input
                            id="amount"
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(parseFloat(e.target.value))}
                            className="text-[#020617] border border-gray-300 rounded-md px-2 py-1 mx-2"
                        />
                    </div>
                    <button onClick={handleConvert}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Convertir
                    </button>
                    {conversionRate && (
                        <div className="mt-4">
                            <p>Résultat de la conversion : {convertedAmount}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
