'use client';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { ArrowRight, X, MapPin, BedIcon as Bed, Bath, Square, Star, Heart, Phone, Edit, Trash2, Upload, Save, Plus, Settings } from 'lucide-react';

interface Property {
    id: number;
    title: string;
    location: string;
    price: string;
    bedrooms: number;
    bathrooms: number;
    area: string;
    images: string[];
    description: string;
    type: 'sale' | 'rent';
    featured?: boolean;
    rating?: number;
    amenities: string[];
}

interface PropertyDetailProps {
    property: Property;
    onClose: () => void;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
                onClick={onClose}
            />
            <div className="relative bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto m-4 transform transition-all duration-300 ease-in-out">
                <div className="sticky top-0 bg-white/90 backdrop-blur-sm p-6 border-b z-10">
                    <div className="flex justify-between items-center">
                        <h2 className="text-3xl font-bold text-gray-900">{property.title}</h2>
                        <button
                            onClick={onClose}
                            className="text-gray-600 hover:text-gray-800 transition-colors p-2 hover:bg-gray-100 rounded-full"
                        >
                            <X size={24} />
                        </button>
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-gray-600">
                        <MapPin size={16} />
                        <span>{property.location}</span>
                        {property.rating && (
                            <div className="flex items-center ml-4">
                                <Star size={16} className="text-yellow-500 fill-current" />
                                <span className="ml-1">{property.rating}</span>
                            </div>
                        )}
                    </div>
                </div>
                
                <div className="p-6">
                    {/* Image Gallery */}
                    <div className="mb-6">
                        <div className="aspect-video overflow-hidden rounded-lg mb-4">
                            <Image
                                src={property.images[currentImageIndex]}
                                alt={property.title}
                                width={800}
                                height={450}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex gap-2 overflow-x-auto">
                            {property.images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                                        index === currentImageIndex ? 'border-blue-500' : 'border-gray-200'
                                    }`}
                                >
                                    <Image
                                        src={image}
                                        alt={`${property.title} ${index + 1}`}
                                        width={80}
                                        height={80}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Property Details</h3>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Bed size={20} />
                                    <span>{property.bedrooms} Bedrooms</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Bath size={20} />
                                    <span>{property.bathrooms} Bathrooms</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Square size={20} />
                                    <span>{property.area}</span>
                                </div>
                                <div className="text-gray-600">
                                    <span className="capitalize">{property.type}</span>
                                </div>
                            </div>

                            <h4 className="font-semibold mb-2">Description</h4>
                            <p className="text-gray-600 mb-4">{property.description}</p>

                            <h4 className="font-semibold mb-2">Amenities</h4>
                            <div className="flex flex-wrap gap-2">
                                {property.amenities.map((amenity, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                                    >
                                        {amenity}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <div className="text-3xl font-bold text-blue-600 mb-4">{property.price}</div>
                                
                                <div className="space-y-3">
                                    <a
                                        href="tel:+254768042550"
                                        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <Phone size={20} />
                                        Call Agent
                                    </a>
                                    
                                    <button
                                        onClick={() => {
                                            const meetingTitle = `Property Viewing - ${property.title}`;
                                            const meetingDetails = `Property Viewing Discussion for:\n\n${property.title}\nLocation: ${property.location}\nPrice: ${property.price}\n\nProperty Details:\n${property.description}\n\nContact: Kirui - Licensed Real Estate Agent\nPhone: +254 768 042550\nEmail: kirui.miriam@realestate.com`;

                                            // Create Google Calendar event with Google Meet
                                            const startDate = new Date();
                                            startDate.setDate(startDate.getDate() + 1); // Tomorrow
                                            startDate.setHours(10, 0, 0, 0); // 10 AM

                                            const endDate = new Date(startDate);
                                            endDate.setHours(11, 0, 0, 0); // 11 AM (1 hour meeting)

                                            const formatDate = (date: Date) => {
                                                return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
                                            };

                                            const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(meetingTitle)}&dates=${formatDate(startDate)}/${formatDate(endDate)}&details=${encodeURIComponent(meetingDetails)}&add_guests=true&sf=true&output=xml`;

                                            window.open(calendarUrl, '_blank');
                                        }}
                                        className="w-full border border-blue-600 text-blue-600 py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors"
                                    >
                                        Schedule Viewing
                                    </button>
                                    
                                    <button className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                                        <Heart size={20} />
                                        Save Property
                                    </button>
                                </div>

                                <div className="mt-6 pt-6 border-t border-gray-200">
                                    <h5 className="font-semibold mb-3">Contact Agent</h5>
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                                            KM
                                        </div>
                                        <div>
                                            <div className="font-medium">Kirui </div>
                                            <div className="text-sm text-gray-600">Licensed Real Estate Agent</div>
                                        </div>
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        Phone: +254 748 225 118<br />
                                        Email: kirui.miriam@realestate.com
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const PropertyCard: React.FC<{
    property: Property;
    onViewDetails: (property: Property) => void;
    isAdminMode: boolean;
    onEdit: (property: Property) => void;
    onDelete: (id: number) => void;
}> = ({ property, onViewDetails, isAdminMode, onEdit, onDelete }) => {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
            {property.featured && (
                <div className="absolute top-4 left-4 z-10 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  
                </div>
            )}
            
            
            <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                    src={property.images[0]}
                    alt={property.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-medium capitalize">{property.type}</span>
                </div>
            </div>
            
            <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {property.title}
                    </h3>
                    {property.rating && (
                        <div className="flex items-center gap-1">
                            <Star size={16} className="text-yellow-500 fill-current" />
                            <span className="text-sm text-gray-600">{property.rating}</span>
                        </div>
                    )}
                </div>
                
                <div className="flex items-center gap-1 text-gray-600 mb-3">
                    <MapPin size={16} />
                    <span className="text-sm">{property.location}</span>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                        <Bed size={16} />
                        <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Bath size={16} />
                        <span>{property.bathrooms}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Square size={16} />
                        <span>{property.area}</span>
                    </div>
                </div>
                
                <div className="space-y-4">
                    <div className="text-2xl font-bold text-blue-600 text-center">{property.price}</div>
                    <div className="flex gap-2 justify-center">
                        <button
                            onClick={() => onViewDetails(property)}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                        >
                            View Details
                            <ArrowRight size={16} />
                        </button>
                        <button
                            onClick={() => onEdit(property)}
                            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                            title="Edit Property"
                        >
                            <Edit size={16} />
                            Edit
                        </button>
                        <button
                            onClick={() => onDelete(property.id)}
                            className="bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-1"
                            title="Delete Property"
                        >
                            <Trash2 size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const EditModal: React.FC<{
    property: Property | null;
    isOpen: boolean;
    onClose: () => void;
    onSave: (property: Property) => void;
}> = ({ property, isOpen, onClose, onSave }) => {
    const [editingProperty, setEditingProperty] = useState<Property | null>(property);
    const [newAmenity, setNewAmenity] = useState('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        setEditingProperty(property);
    }, [property]);

    if (!isOpen || !editingProperty) return null;

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files || !editingProperty) return;

        Array.from(files).forEach(file => {
            const reader = new FileReader();
            reader.onload = (event) => {
                const imageUrl = event.target?.result as string;
                setEditingProperty(prev => prev ? {
                    ...prev,
                    images: [...prev.images, imageUrl]
                } : null);
            };
            reader.readAsDataURL(file);
        });
    };

    const handleRemoveImage = (index: number) => {
        if (!editingProperty) return;
        setEditingProperty(prev => prev ? {
            ...prev,
            images: prev.images.filter((_, i) => i !== index)
        } : null);
    };

    const handleAddAmenity = (amenity: string) => {
        if (!editingProperty || !amenity.trim()) return;
        setEditingProperty(prev => prev ? {
            ...prev,
            amenities: [...prev.amenities, amenity.trim()]
        } : null);
    };

    const handleRemoveAmenity = (index: number) => {
        if (!editingProperty) return;
        setEditingProperty(prev => prev ? {
            ...prev,
            amenities: prev.amenities.filter((_, i) => i !== index)
        } : null);
    };

    const handleSave = () => {
        if (editingProperty) {
            onSave(editingProperty);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
            <div className="relative bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto m-4">
                <div className="sticky top-0 bg-white/90 backdrop-blur-sm p-6 border-b z-10">
                    <div className="flex justify-between items-center">
                        <h2 className="text-3xl font-bold text-gray-900">Edit Property</h2>
                        <button
                            onClick={onClose}
                            className="text-gray-600 hover:text-gray-800 transition-colors p-2 hover:bg-gray-100 rounded-full"
                        >
                            <X size={24} />
                        </button>
                    </div>
                </div>
                
                <div className="p-6 space-y-6">
                    {/* Basic Info */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                            <input
                                type="text"
                                value={editingProperty.title}
                                onChange={(e) => setEditingProperty(prev => prev ? {...prev, title: e.target.value} : null)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                            <input
                                type="text"
                                value={editingProperty.location}
                                onChange={(e) => setEditingProperty(prev => prev ? {...prev, location: e.target.value} : null)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                            <input
                                type="text"
                                value={editingProperty.price}
                                onChange={(e) => setEditingProperty(prev => prev ? {...prev, price: e.target.value} : null)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Area</label>
                            <input
                                type="text"
                                value={editingProperty.area}
                                onChange={(e) => setEditingProperty(prev => prev ? {...prev, area: e.target.value} : null)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
                            <input
                                type="number"
                                value={editingProperty.bedrooms}
                                onChange={(e) => setEditingProperty(prev => prev ? {...prev, bedrooms: parseInt(e.target.value)} : null)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Bathrooms</label>
                            <input
                                type="number"
                                value={editingProperty.bathrooms}
                                onChange={(e) => setEditingProperty(prev => prev ? {...prev, bathrooms: parseInt(e.target.value)} : null)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                            <select
                                value={editingProperty.type}
                                onChange={(e) => setEditingProperty(prev => prev ? {...prev, type: e.target.value as 'sale' | 'rent'} : null)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                <option value="sale">For Sale</option>
                                <option value="rent">For Rent</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                            <input
                                type="number"
                                step="0.1"
                                min="0"
                                max="5"
                                value={editingProperty.rating || ''}
                                onChange={(e) => setEditingProperty(prev => prev ? {...prev, rating: parseFloat(e.target.value) || undefined} : null)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                        <textarea
                            value={editingProperty.description}
                            onChange={(e) => setEditingProperty(prev => prev ? {...prev, description: e.target.value} : null)}
                            rows={4}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    {/* Images */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Images</label>
                        <div className="grid grid-cols-3 gap-4 mb-4">
                            {editingProperty.images.map((image, index) => (
                                <div key={index} className="relative group">
                                    <Image
                                        src={image}
                                        alt={`Property ${index + 1}`}
                                        width={150}
                                        height={100}
                                        className="w-full h-24 object-cover rounded-lg"
                                    />
                                    <button
                                        onClick={() => handleRemoveImage(index)}
                                        className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <X size={16} />
                                    </button>
                                </div>
                            ))}
                        </div>
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleImageUpload}
                            multiple
                            accept="image/*"
                            className="hidden"
                        />
                        <button
                            onClick={() => fileInputRef.current?.click()}
                            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            <Upload size={20} />
                            Upload Images
                        </button>
                    </div>

                    {/* Amenities */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Amenities</label>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {editingProperty.amenities.map((amenity, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm flex items-center gap-2"
                                >
                                    {amenity}
                                    <button
                                        onClick={() => handleRemoveAmenity(index)}
                                        className="text-blue-600 hover:text-blue-800"
                                    >
                                        <X size={12} />
                                    </button>
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={newAmenity}
                                onChange={(e) => setNewAmenity(e.target.value)}
                                placeholder="Add amenity"
                                className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        handleAddAmenity(newAmenity);
                                        setNewAmenity('');
                                    }
                                }}
                            />
                            <button
                                onClick={() => {
                                    handleAddAmenity(newAmenity);
                                    setNewAmenity('');
                                }}
                                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                            >
                                <Plus size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Featured */}
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="featured"
                            checked={editingProperty.featured || false}
                            onChange={(e) => setEditingProperty(prev => prev ? {...prev, featured: e.target.checked} : null)}
                            className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="featured" className="text-sm font-medium text-gray-700">Featured Property</label>
                    </div>

                    {/* Save Button */}
                    <div className="flex justify-end gap-3 pt-4 border-t">
                        <button
                            onClick={onClose}
                            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSave}
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                        >
                            <Save size={16} />
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const PropertiesSection: React.FC = () => {
    const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
    const [filter, setFilter] = useState<'all' | 'sale' | 'rent'>('all');
    const [isAdminMode, setIsAdminMode] = useState(false);
    const [editingProperty, setEditingProperty] = useState<Property | null>(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [properties, setProperties] = useState<Property[]>([
        {
            id: 1,
            title: 'Plot for Sale - Quarter Acre',
            location: 'Infinity Area, Eastern Bypass',
            price: 'KE 9,000,000',
            bedrooms: 0,
            bathrooms: 0,
            area: '1/4 acre',
            images: [
                '/images/houseone.png.jpg',
                '/images/housetwo.png.jpg',
                '/images/housethree.png.jpg'
            ],
            description: 'Plot for sale 1/4 (quarter of an acre) Infinity Area, Eastern Bypass 9m Suitable for high-rise development',
            type: 'sale',
            featured: true,
            rating: 4.9,
            amenities: ['High-rise Development Suitable', 'Eastern Bypass Location', 'Commercial Potential', 'Easy Access', 'Development Ready', 'Prime Location']
        },
        {
            id: 2,
            title: 'Quarter Acre Plot - Kerarapon',
            location: 'Kerarapon Suburb',
            price: 'KE 17,000,000',
            bedrooms: 0,
            bathrooms: 0,
            area: '0.1 Ha',
            images: [
                '/images/landsix.png.jpg',
                '/images/landseven.png.jpg'
            ],
            description: '0.1 Ha (quarter an acre) for sale in suburb area of Kerarapon Red soils, gentle gradient perfect for drainage Developed and safe neighbourhood 17m',
            type: 'sale',
            rating: 4.7,
            amenities: ['Red Soils', 'Gentle Gradient', 'Perfect Drainage', 'Safe Neighbourhood', 'Developed Area', 'Suburban Location']
        },
        {
            id: 3,
            title: 'One and Eighth Acre Plot',
            location: 'Eastern Bypass Frontage',
            price: 'KE 230,000,000',
            bedrooms: 0,
            bathrooms: 0,
            area: '0.4592 Ha',
            images: [
                '/images/housethree.png.jpg',
                '/images/houseone.png.jpg',
                '/images/housetwo.png.jpg'
            ],
            description: '0.4592 Ha (One and eighth acre) 230m Fronting Eastern bypass Perimeter wall Borehole',
            type: 'sale',
            rating: 4.8,
            amenities: ['Eastern Bypass Frontage', 'Perimeter Wall', 'Borehole', 'Large Plot', 'Commercial Potential', 'Water Available']
        },
        {
            id: 4,
            title: '5 Bedroom Bungalow with SQ',
            location: 'Near Moi Forces Lanet',
            price: 'KE 12,000,000',
            bedrooms: 5,
            bathrooms: 4,
            area: '3,500 sq ft',
            images: [
                '/images/landeight.png.jpg',
                '/images/landseven.png.jpg'
            ],
            description: '5 Bedroom Bungalow with Detached SQ + garage 2 KMs from Moi Forces Lanet & 3 KMs from Nairobi Highway 12m',
            type: 'sale',
            amenities: ['Detached SQ', 'Garage', 'Near Moi Forces', 'Highway Access', 'Spacious Bedrooms', 'Family Home']
        },
        {
            id: 5,
            title: 'Coastal Beachfront Property',
            location: 'Diani Beach, Kenya',
            price: 'KE 35,000,000',
            bedrooms: 3,
            bathrooms: 2,
            area: '2,800 sq ft',
            images: [
                '/images/housetwo.png.jpg',
                '/images/houseone.png.jpg'
            ],
            description: 'Exclusive beachfront property with direct beach access. Perfect for vacation home or investment.',
            type: 'sale',
            featured: true,
            rating: 4.9,
            amenities: ['Beach Access', 'Swimming Pool', 'Bar Area', 'Terrace', 'Security', 'Parking']
        },
        {
            id: 6,
            title: 'Student Accommodation',
            location: 'Near University of Nairobi',
            price: 'KE 25,000/month',
            bedrooms: 1,
            bathrooms: 1,
            area: '500 sq ft',
            images: [
                '/images/landsix.png.jpg'
            ],
            description: 'Affordable and convenient accommodation for students. Close to university and public transport.',
            type: 'rent',
            rating: 4.3,
            amenities: ['Study Desk', 'Wi-Fi', 'Shared Kitchen', 'Security', 'Laundry', 'Transport Access']
        }
    ]);

    // Property management functions
    const handleEditProperty = (property: Property) => {
        setEditingProperty(property);
        setShowEditModal(true);
    };

    const handleDeleteProperty = (id: number) => {
        if (confirm('Are you sure you want to delete this property?')) {
            setProperties(prev => prev.filter(p => p.id !== id));
        }
    };

    const handleSaveProperty = (updatedProperty: Property) => {
        setProperties(prev => 
            prev.map(p => p.id === updatedProperty.id ? updatedProperty : p)
        );
        setShowEditModal(false);
        setEditingProperty(null);
    };

    const filteredProperties = filter === 'all' 
        ? properties 
        : properties.filter(property => property.type === filter);

    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="flex justify-between items-center mb-8">
                        <div className="flex-1">
                            <h1 className="text-5xl font-bold mb-4 text-gray-900">Featured Properties</h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Discover our handpicked selection of premium properties across Kenya. 
                                From luxury villas to modern apartments, find your perfect space.
                            </p>
                        </div>
                        
                        {/* Admin Toggle */}
                        <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-md">
                            <label className="text-sm font-medium text-gray-700">Admin Mode</label>
                            <button
                                onClick={() => setIsAdminMode(!isAdminMode)}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                    isAdminMode ? 'bg-blue-600' : 'bg-gray-200'
                                }`}
                            >
                                <span
                                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                        isAdminMode ? 'translate-x-6' : 'translate-x-1'
                                    }`}
                                />
                            </button>
                            {isAdminMode && (
                                <Settings size={20} className="text-blue-600" />
                            )}
                        </div>
                    </div>
                </div>

                {/* Filter Buttons */}
                <div className="flex justify-center mb-8">
                    <div className="bg-white rounded-lg p-1 shadow-md">
                        {[
                            { key: 'all', label: 'All Properties' },
                            { key: 'sale', label: 'For Sale' },
                            { key: 'rent', label: 'For Rent' }
                        ].map((filterOption) => (
                            <button
                                key={filterOption.key}
                                onClick={() => setFilter(filterOption.key as 'all' | 'sale' | 'rent')}
                                className={`px-6 py-2 rounded-md transition-colors ${
                                    filter === filterOption.key
                                        ? 'bg-blue-600 text-white'
                                        : 'text-gray-600 hover:text-blue-600'
                                }`}
                            >
                                {filterOption.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Admin Message */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8 max-w-4xl mx-auto">
                    
                </div>

                {/* Properties Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {filteredProperties.map((property) => (
                        <PropertyCard
                            key={property.id}
                            property={property}
                            onViewDetails={setSelectedProperty}
                            isAdminMode={isAdminMode}
                            onEdit={handleEditProperty}
                            onDelete={handleDeleteProperty}
                        />
                    ))}
                </div>

                {filteredProperties.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-xl text-gray-600">No properties found for the selected filter.</p>
                    </div>
                )}
            </div>

            {/* Property Detail Modal */}
            {selectedProperty && (
                <PropertyDetail
                    property={selectedProperty}
                    onClose={() => setSelectedProperty(null)}
                />
            )}

            {/* Edit Modal */}
            <EditModal
                property={editingProperty}
                isOpen={showEditModal}
                onClose={() => {
                    setShowEditModal(false);
                    setEditingProperty(null);
                }}
                onSave={handleSaveProperty}
            />
        </div>
    );
};

export default PropertiesSection;
