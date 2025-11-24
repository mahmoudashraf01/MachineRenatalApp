import { memo } from 'react';
import React, { useState } from "react";
import Pickup from '../../assets/pikcup.svg';
import Delivery from '../../assets/delivery.svg';

const MachinesFilter = () => {
    const [price, setPrice] = useState(5000);
    const [delivery, setDelivery] = useState("pickup");
    const [availableOnly, setAvailableOnly] = useState(false);

    return (
        <div className="w-full lg:max-w-xs md:max-w-xs bg-white rounded-xl shadow p-6 space-y-6">
            {/* Title */}
            <h2 className="text-xl font-bold text-gray-900">FILTERS</h2>

            {/* Price Range */}
            <div className="space-y-3">
                <p className="font-semibold text-gray-800">Price Range (per day)</p>
                <input
                    type="range"
                    min="0"
                    max="10000"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full accent-navColor "
                />
                <div className="flex justify-between text-sm text-gray-600">
                    <span>$0</span>
                    <span>$10000</span>
                </div>
            </div>

            {/* Delivery Option */}
            <div className="space-y-3 border-t pt-4">
                <p className="font-semibold text-gray-800">Delivery Option</p>

                <div className="space-y-2">
                    {/* Pick up */}
                    <label className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                        <div className="flex items-center space-x-2">
                            <input
                                type="radio"
                                name="delivery"
                                value="pickup"
                                checked={delivery === "pickup"}
                                onChange={() => setDelivery("pickup")}
                                className="accent-navColor"
                            />
                            <img src={Pickup} alt="pickup" className="w-4 h-4" />
                            <span className="text-gray-700">Pick up</span>
                        </div>
                        <span className="text-gray-800 font-semibold">Free</span>
                    </label>

                    {/* Delivery */}
                    <label className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                        <div className="flex items-center space-x-2">
                            <input
                                type="radio"
                                name="delivery"
                                value="delivery"
                                checked={delivery === "delivery"}
                                onChange={() => setDelivery("delivery")}
                                className="accent-navColor"
                            />
                            <img src={Delivery} alt="delivery" className="w-4 h-4" />
                            <span className="text-gray-700">Delivery</span>
                        </div>
                        <span className="text-gray-800 font-semibold">$</span>
                    </label>
                </div>
            </div>

            {/* Availability */}
            <div className="space-y-3 border-t pt-4">
                <p className="font-semibold text-gray-800">AVAILABILITY</p>

                <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-gray-700">Show available only</span>
                    <input
                        type="checkbox"
                        checked={availableOnly}
                        onChange={() => setAvailableOnly(!availableOnly)}
                        className="toggle-checkbox accent-navColor"
                    />
                </label>
            </div>

            {/* Buttons */}
            <div className="flex items-center space-x-3 pt-4">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                    Apply
                </button>
                <button className="flex-1 border py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition">
                    Reset
                </button>
            </div>
        </div>
    );
};

export default memo(MachinesFilter);
