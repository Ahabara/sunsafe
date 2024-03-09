import sunHatImage from '../assets/react.svg'; // Example image, replace with actual images
import sunscreenImage from '../assets/react.svg'; // Example image, replace with actual images
import sunglassesImage from '../assets/react.svg'; // Example image, replace with actual images

function SunSafetyPage() {
    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-6">Sun Safety in Australia</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Wear Protective Clothing</h2>
                    <p className="text-lg mb-4">Protect your skin by wearing long-sleeved shirts, pants, and
                        wide-brimmed hats. This helps to minimize exposure to harmful UV rays.</p>
                    <img src={sunHatImage} alt="Sun hat" className="w-full rounded-md"/>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Use Sunscreen</h2>
                    <p className="text-lg mb-4">Apply sunscreen with SPF 30 or higher to all exposed skin areas,
                        including your face, neck, ears, and hands. Reapply every two hours.</p>
                    <img src={sunscreenImage} alt="Sunscreen" className="w-full rounded-md"/>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mt-8">
                <h2 className="text-2xl font-bold mb-4">Wear Sunglasses</h2>
                <p className="text-lg mb-4">Protect your eyes from harmful UV rays by wearing sunglasses that offer UV
                    protection. Look for sunglasses labeled with UV400 or 100% UV protection.</p>
                <img src={sunglassesImage} alt="Sunglasses" className="w-full rounded-md"/>
            </div>
        </div>
    );
}

export default SunSafetyPage;
