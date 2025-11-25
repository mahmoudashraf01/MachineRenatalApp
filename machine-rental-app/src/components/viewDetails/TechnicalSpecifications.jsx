import { memo } from "react";

const TechnicalSpecifications = () => {
    return (
        <div className="w-full flex flex-col gap-6 animate-fade-in-delay-2">

            {/* Title Section */}
            <div>
                <h2 className="text-xl md:text-2xl font-semibold text-navColor">
                    Technical Specifications
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                    Detailed technical information about this machine
                </p>
            </div>

            {/* Table Section */}
            <div className="border border-gray-300 rounded-md overflow-hidden">
                <SpecificationRow label="Specification Notes" value="121 kW (162 hp)" />
                <SpecificationRow label="Operating Weight" value="20,300 kg (44,753 lb)" />
                <SpecificationRow label="Bucket Capacity" value="0.9 m³ (1.18 yd³)" />
                <SpecificationRow label="Max Digging Depth" value="6.6 m (21.7 ft)" />
                <SpecificationRow label="Max Reach" value="9.9 m (32.5 ft)" />
                <SpecificationRow label="Fuel Tank Capacity" value="410 L (108 gal)" />
                <SpecificationRow label="Hydraulic System" value="Advanced Variable Flow" />
                <SpecificationRow label="Cab Type" value="Enclosed with AC" />
                <SpecificationRow label="Year" value="2021" />
            </div>

            {/* Notes Box */}
            <div className="border border-gray-300 rounded-md p-6 bg-white shadow-sm">
                <h3 className="font-semibold text-navColor mb-2">Specification Notes</h3>
                <p className="text-sm text-gray-600">
                    All specifications are provided by the equipment owner and have been
                    verified by our team. Actual performance may vary based on operating
                    conditions, maintenance history, and operator skill. For specific
                    questions about these specifications, please contact the equipment
                    owner directly.
                </p>
            </div>
        </div>
    );
};

// Reusable Row Component
const SpecificationRow = ({ label, value }) => (
    <div className="grid grid-cols-2 bg-[#0A254014] even:bg-white border-b border-gray-300 last:border-b-0 px-4 py-3 text-sm">
        <span className="font-medium text-navColor">{label}</span>
        <span className="text-gray-600">{value}</span>
    </div>
);

export default memo(TechnicalSpecifications);
