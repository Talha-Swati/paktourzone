import { useState, useEffect, Fragment } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { 
  FaMapMarkerAlt, FaCalendar, FaUsers, FaHotel, FaCar, 
  FaUtensils
} from 'react-icons/fa';
import PageLayout from '../components/layout/PageLayout';
import { customTourActivities, customTourDestinations } from '../data/customTourData';

const CustomTourBuilder = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get pre-filled data from location state (if coming from destination page)
  const preFilledData = location.state?.preFilledData || {};
  
  // Form State
  const [formData, setFormData] = useState({
    destination: preFilledData.destination || '',
    duration: preFilledData.duration || '7',
    startDate: '',
    groupSize: '2',
    accommodation: 'standard',
    transportation: 'private-suv',
    meals: 'full-board',
    activities: preFilledData.activities || [],
    budget: 'medium',
    specialRequests: '',
    name: '',
    email: '',
    phone: '',
    country: '',
    nationality: '',
    age: '',
    emergencyContact: '',
    emergencyPhone: '',
    dietaryRestrictions: '',
    medicalConditions: '',
    travelInsurance: 'no',
    previousVisitToPakistan: 'no',
    arrivalCity: '',
    preferences: {
      adventureLevel: 'moderate',
      culturalExperience: true,
      photography: false,
      wildlifeWatching: false,
    }
  });

  const [step, setStep] = useState(1); // Multi-step form
  const [estimatedPrice, setEstimatedPrice] = useState(0);

  // Calculate estimated price based on selections
  useEffect(() => {
    let basePrice = 500; // Base price per person per day
    
    // Duration multiplier
    basePrice *= parseInt(formData.duration);
    
    // Accommodation multiplier
    const accommodationMultiplier = {
      'budget': 0.7,
      'standard': 1,
      'comfort': 1.5,
      'luxury': 2.5
    };
    basePrice *= accommodationMultiplier[formData.accommodation] || 1;
    
    // Transportation multiplier
    const transportMultiplier = {
      'shared': 0.8,
      'private-suv': 1.2,
      'private-4x4': 1.5
    };
    basePrice *= transportMultiplier[formData.transportation] || 1;
    
    // Meals multiplier
    const mealsMultiplier = {
      'breakfast-only': 0.7,
      'half-board': 0.85,
      'full-board': 1
    };
    basePrice *= mealsMultiplier[formData.meals] || 1;
    
    // Activities add-on
    basePrice += formData.activities.length * 50;
    
    // Group size discount
    const groupSize = parseInt(formData.groupSize);
    if (groupSize >= 4) basePrice *= 0.9;
    if (groupSize >= 8) basePrice *= 0.85;
    
    setEstimatedPrice(Math.round(basePrice * groupSize));
  }, [formData]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleActivity = (activity) => {
    setFormData(prev => ({
      ...prev,
      activities: prev.activities.includes(activity)
        ? prev.activities.filter(a => a !== activity)
        : [...prev.activities, activity]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send to backend/API
    console.log('Custom Tour Request:', formData);
    alert('Custom tour request submitted! We will contact you soon.');
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
        Step 1, Choose Destination and Dates
      </h2>

      {/* Destination Selection */}
      <div>
        <label className={`mb-3 block text-sm font-semibold ${
          isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'
        }`}>
          <FaMapMarkerAlt className="mr-2 inline text-[#22D3EE]" />
          Select Destination *
        </label>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {customTourDestinations.map(dest => (
            <button
              key={dest.value}
              type="button"
              onClick={() => handleInputChange('destination', dest.value)}
              className={`rounded-lg p-4 text-center transition-all ${
                formData.destination === dest.value
                  ? 'bg-[#22D3EE] text-white shadow-lg scale-105'
                  : isDarkMode
                    ? 'bg-[#0B0C0E] text-[#C9D6DF] hover:bg-gray-800'
                    : 'bg-[#F8FAFC] text-[#475569] hover:bg-[#E2E8F0]'
              }`}
            >
              <div className="mb-2 text-2xl">{dest.icon}</div>
              <div className="text-sm font-semibold">{dest.label}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Duration */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className={`mb-3 block text-sm font-semibold ${
            isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'
          }`}>
            <FaCalendar className="mr-2 inline text-[#22D3EE]" />
            Trip Duration *
          </label>
          <select
            value={formData.duration}
            onChange={(e) => handleInputChange('duration', e.target.value)}
            className={`w-full rounded-lg border px-4 py-3 ${
              isDarkMode
                ? 'bg-[#0B0C0E] border-gray-700 text-[#E0E7EE]'
                : 'bg-white border-[#CBD5E1] text-[#0F172A]'
            }`}
          >
            <option value="3">3 Days / 2 Nights</option>
            <option value="5">5 Days / 4 Nights</option>
            <option value="7">7 Days / 6 Nights</option>
            <option value="9">9 Days / 8 Nights</option>
            <option value="12">12 Days / 11 Nights</option>
            <option value="14">14 Days / 13 Nights</option>
          </select>
        </div>

        <div>
          <label className={`mb-3 block text-sm font-semibold ${
            isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'
          }`}>
            <FaCalendar className="mr-2 inline text-[#22D3EE]" />
            Preferred Start Date
          </label>
          <input
            type="date"
            value={formData.startDate}
            onChange={(e) => handleInputChange('startDate', e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            className={`w-full rounded-lg border px-4 py-3 ${
              isDarkMode
                ? 'bg-[#0B0C0E] border-gray-700 text-[#E0E7EE] scheme-dark'
                : 'bg-white border-[#CBD5E1] text-[#0F172A]'
            }`}
          />
        </div>
      </div>

      {/* Group Size */}
      <div>
        <label className={`mb-3 block text-sm font-semibold ${
          isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'
        }`}>
          <FaUsers className="mr-2 inline text-[#22D3EE]" />
          Number of Travelers *
        </label>
        <div className="grid grid-cols-4 gap-3 md:grid-cols-8">
          {[1, 2, 3, 4, 5, 6, 8, 10].map(size => (
            <button
              key={size}
              type="button"
              onClick={() => handleInputChange('groupSize', size.toString())}
              className={`rounded-lg p-3 font-semibold transition-all ${
                formData.groupSize === size.toString()
                  ? 'bg-[#22D3EE] text-white scale-110'
                  : isDarkMode
                    ? 'bg-[#0B0C0E] text-[#C9D6DF] hover:bg-gray-800'
                    : 'bg-[#F8FAFC] text-[#475569] hover:bg-[#E2E8F0]'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
        {parseInt(formData.groupSize) >= 4 && (
          <p className="mt-2 text-sm text-green-500">
            Group discount applied. Save up to 15 percent
          </p>
        )}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
        Step 2, Customize Your Pakistan Tour
      </h2>

      {/* Accommodation */}
      <div>
        <label className={`mb-3 block text-sm font-semibold ${
          isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'
        }`}>
          <FaHotel className="mr-2 inline text-[#22D3EE]" />
          Accommodation Level *
        </label>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
          {[
            { value: 'budget', label: 'Budget', desc: 'Guesthouses & Hostels' },
            { value: 'standard', label: 'Standard', desc: '2 to 3 Star Hotels' },
            { value: 'comfort', label: 'Comfort', desc: '3 to 4 Star Hotels' },
            { value: 'luxury', label: 'Luxury', desc: '5 Star Resorts' }
          ].map(option => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleInputChange('accommodation', option.value)}
              className={`rounded-lg p-4 text-left transition-all ${
                formData.accommodation === option.value
                  ? 'bg-[#22D3EE] text-white shadow-lg'
                  : isDarkMode
                    ? 'bg-[#0B0C0E] text-[#C9D6DF] hover:bg-gray-800 border border-gray-700'
                    : 'bg-white text-[#475569] hover:bg-[#F8FAFC] border border-[#E2E8F0]'
              }`}
            >
              <div className="font-bold">{option.label}</div>
              <div className="text-xs opacity-80">{option.desc}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Transportation */}
      <div>
        <label className={`mb-3 block text-sm font-semibold ${
          isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'
        }`}>
          <FaCar className="mr-2 inline text-[#22D3EE]" />
          Transportation *
        </label>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {[
            { value: 'shared', label: 'Shared Transport', desc: 'Group van/bus' },
            { value: 'private-suv', label: 'Private SUV', desc: 'Comfortable 4x4' },
            { value: 'private-4x4', label: 'Premium 4x4', desc: 'Luxury Land Cruiser' }
          ].map(option => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleInputChange('transportation', option.value)}
              className={`rounded-lg p-4 text-left transition-all ${
                formData.transportation === option.value
                  ? 'bg-[#22D3EE] text-white shadow-lg'
                  : isDarkMode
                    ? 'bg-[#0B0C0E] text-[#C9D6DF] hover:bg-gray-800 border border-gray-700'
                    : 'bg-white text-[#475569] hover:bg-[#F8FAFC] border border-[#E2E8F0]'
              }`}
            >
              <div className="font-bold">{option.label}</div>
              <div className="text-xs opacity-80">{option.desc}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Meals */}
      <div>
        <label className={`mb-3 block text-sm font-semibold ${
          isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'
        }`}>
          <FaUtensils className="mr-2 inline text-[#22D3EE]" />
          Meal Plan *
        </label>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {[
            { value: 'breakfast-only', label: 'Breakfast Only', desc: 'Flexibility for lunch/dinner' },
            { value: 'half-board', label: 'Half Board', desc: 'Breakfast + Dinner' },
            { value: 'full-board', label: 'Full Board', desc: 'All meals included' }
          ].map(option => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleInputChange('meals', option.value)}
              className={`rounded-lg p-4 text-left transition-all ${
                formData.meals === option.value
                  ? 'bg-[#22D3EE] text-white shadow-lg'
                  : isDarkMode
                    ? 'bg-[#0B0C0E] text-[#C9D6DF] hover:bg-gray-800 border border-gray-700'
                    : 'bg-white text-[#475569] hover:bg-[#F8FAFC] border border-[#E2E8F0]'
              }`}
            >
              <div className="font-bold">{option.label}</div>
              <div className="text-xs opacity-80">{option.desc}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Activities */}
      <div>
        <label className={`mb-3 block text-sm font-semibold ${
          isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'
        }`}>
          Select Activities (Optional)
        </label>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {customTourActivities.map(activity => (
            <button
              key={activity.value}
              type="button"
              onClick={() => toggleActivity(activity.value)}
              className={`rounded-lg p-4 text-center transition-all ${
                formData.activities.includes(activity.value)
                  ? 'bg-[#22D3EE] text-white shadow-lg scale-105'
                  : isDarkMode
                    ? 'bg-[#0B0C0E] text-[#C9D6DF] hover:bg-gray-800 border border-gray-700'
                    : 'bg-white text-[#475569] hover:bg-[#F8FAFC] border border-[#E2E8F0]'
              }`}
            >
              <div className="mb-2 text-2xl">
                {activity.icon && <activity.icon />}
              </div>
              <div className="text-sm font-semibold">{activity.label}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
        Step 3, Contact and Preferences
      </h2>

      {/* Personal Information */}
      <div>
        <h4 className={`mb-4 text-lg font-bold ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
          Personal Information
        </h4>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className={`mb-2 block text-sm font-semibold ${
              isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'
            }`}>
              Full Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="John Doe"
              required
              className={`w-full rounded-lg border px-4 py-3 ${
                isDarkMode
                  ? 'bg-[#0B0C0E] border-gray-700 text-[#E0E7EE]'
                  : 'bg-white border-[#CBD5E1] text-[#0F172A]'
              }`}
            />
          </div>

          <div>
            <label className={`mb-2 block text-sm font-semibold ${
              isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'
            }`}>
              Email Address *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="john@example.com"
              required
              className={`w-full rounded-lg border px-4 py-3 ${
                isDarkMode
                  ? 'bg-[#0B0C0E] border-gray-700 text-[#E0E7EE]'
                  : 'bg-white border-[#CBD5E1] text-[#0F172A]'
              }`}
            />
          </div>

          <div>
            <label className={`mb-2 block text-sm font-semibold ${
              isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'
            }`}>
              Phone Number *
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="+1 234 567 8900"
              required
              className={`w-full rounded-lg border px-4 py-3 ${
                isDarkMode
                  ? 'bg-[#0B0C0E] border-gray-700 text-[#E0E7EE]'
                  : 'bg-white border-[#CBD5E1] text-[#0F172A]'
              }`}
            />
          </div>

          <div>
            <label className={`mb-2 block text-sm font-semibold ${
              isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'
            }`}>
              Age *
            </label>
            <input
              type="number"
              value={formData.age}
              onChange={(e) => handleInputChange('age', e.target.value)}
              placeholder="25"
              min="1"
              max="120"
              required
              className={`w-full rounded-lg border px-4 py-3 ${
                isDarkMode
                  ? 'bg-[#0B0C0E] border-gray-700 text-[#E0E7EE]'
                  : 'bg-white border-[#CBD5E1] text-[#0F172A]'
              }`}
            />
          </div>

          <div>
            <label className={`mb-2 block text-sm font-semibold ${
              isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'
            }`}>
              Country of Residence *
            </label>
            <input
              type="text"
              value={formData.country}
              onChange={(e) => handleInputChange('country', e.target.value)}
              placeholder="United States"
              required
              className={`w-full rounded-lg border px-4 py-3 ${
                isDarkMode
                  ? 'bg-[#0B0C0E] border-gray-700 text-[#E0E7EE]'
                  : 'bg-white border-[#CBD5E1] text-[#0F172A]'
              }`}
            />
          </div>

          <div>
            <label className={`mb-2 block text-sm font-semibold ${
              isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'
            }`}>
              Nationality *
            </label>
            <input
              type="text"
              value={formData.nationality}
              onChange={(e) => handleInputChange('nationality', e.target.value)}
              placeholder="American"
              required
              className={`w-full rounded-lg border px-4 py-3 ${
                isDarkMode
                  ? 'bg-[#0B0C0E] border-gray-700 text-[#E0E7EE]'
                  : 'bg-white border-[#CBD5E1] text-[#0F172A]'
              }`}
            />
          </div>
        </div>
      </div>

      {/* Travel Information */}
      <div>
        <h4 className={`mb-4 text-lg font-bold ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
          Travel Information
        </h4>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className={`mb-2 block text-sm font-semibold ${
              isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'
            }`}>
              Arrival City in Pakistan *
            </label>
            <select
              value={formData.arrivalCity}
              onChange={(e) => handleInputChange('arrivalCity', e.target.value)}
              required
              className={`w-full rounded-lg border px-4 py-3 ${
                isDarkMode
                  ? 'bg-[#0B0C0E] border-gray-700 text-[#E0E7EE]'
                  : 'bg-white border-[#CBD5E1] text-[#0F172A]'
              }`}
            >
              <option value="">Select arrival city</option>
              <option value="islamabad">Islamabad</option>
              <option value="lahore">Lahore</option>
              <option value="karachi">Karachi</option>
              <option value="peshawar">Peshawar</option>
              <option value="multan">Multan</option>
              <option value="faisalabad">Faisalabad</option>
            </select>
          </div>

          <div>
            <label className={`mb-2 block text-sm font-semibold ${
              isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'
            }`}>
              Have you visited Pakistan before? *
            </label>
            <select
              value={formData.previousVisitToPakistan}
              onChange={(e) => handleInputChange('previousVisitToPakistan', e.target.value)}
              required
              className={`w-full rounded-lg border px-4 py-3 ${
                isDarkMode
                  ? 'bg-[#0B0C0E] border-gray-700 text-[#E0E7EE]'
                  : 'bg-white border-[#CBD5E1] text-[#0F172A]'
              }`}
            >
              <option value="no">No, First Time</option>
              <option value="yes">Yes, Previously Visited</option>
            </select>
          </div>

          <div>
            <label className={`mb-2 block text-sm font-semibold ${
              isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'
            }`}>
              Do you have Travel Insurance? *
            </label>
            <select
              value={formData.travelInsurance}
              onChange={(e) => handleInputChange('travelInsurance', e.target.value)}
              required
              className={`w-full rounded-lg border px-4 py-3 ${
                isDarkMode
                  ? 'bg-[#0B0C0E] border-gray-700 text-[#E0E7EE]'
                  : 'bg-white border-[#CBD5E1] text-[#0F172A]'
              }`}
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
              <option value="planning">Planning to Purchase</option>
            </select>
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <div>
        <h4 className={`mb-4 text-lg font-bold ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
          Emergency Contact Information
        </h4>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className={`mb-2 block text-sm font-semibold ${
              isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'
            }`}>
              Emergency Contact Name *
            </label>
            <input
              type="text"
              value={formData.emergencyContact}
              onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
              placeholder="Jane Doe"
              required
              className={`w-full rounded-lg border px-4 py-3 ${
                isDarkMode
                  ? 'bg-[#0B0C0E] border-gray-700 text-[#E0E7EE]'
                  : 'bg-white border-[#CBD5E1] text-[#0F172A]'
              }`}
            />
          </div>

          <div>
            <label className={`mb-2 block text-sm font-semibold ${
              isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'
            }`}>
              Emergency Contact Phone *
            </label>
            <input
              type="tel"
              value={formData.emergencyPhone}
              onChange={(e) => handleInputChange('emergencyPhone', e.target.value)}
              placeholder="+1 234 567 8900"
              required
              className={`w-full rounded-lg border px-4 py-3 ${
                isDarkMode
                  ? 'bg-[#0B0C0E] border-gray-700 text-[#E0E7EE]'
                  : 'bg-white border-[#CBD5E1] text-[#0F172A]'
              }`}
            />
          </div>
        </div>
      </div>

      {/* Health & Dietary */}
      <div>
        <h4 className={`mb-4 text-lg font-bold ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
          Health & Dietary Information
        </h4>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className={`mb-2 block text-sm font-semibold ${
              isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'
            }`}>
              Dietary Restrictions
            </label>
            <input
              type="text"
              value={formData.dietaryRestrictions}
              onChange={(e) => handleInputChange('dietaryRestrictions', e.target.value)}
              placeholder="Vegetarian, Vegan, Halal, Gluten-free, etc."
              className={`w-full rounded-lg border px-4 py-3 ${
                isDarkMode
                  ? 'bg-[#0B0C0E] border-gray-700 text-[#E0E7EE]'
                  : 'bg-white border-[#CBD5E1] text-[#0F172A]'
              }`}
            />
          </div>

          <div>
            <label className={`mb-2 block text-sm font-semibold ${
              isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'
            }`}>
              Medical Conditions or Allergies
            </label>
            <input
              type="text"
              value={formData.medicalConditions}
              onChange={(e) => handleInputChange('medicalConditions', e.target.value)}
              placeholder="Any conditions we should be aware of"
              className={`w-full rounded-lg border px-4 py-3 ${
                isDarkMode
                  ? 'bg-[#0B0C0E] border-gray-700 text-[#E0E7EE]'
                  : 'bg-white border-[#CBD5E1] text-[#0F172A]'
              }`}
            />
          </div>
        </div>
      </div>

      {/* Additional Requests */}
      <div>
        <label className={`mb-2 block text-sm font-semibold ${
          isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'
        }`}>
          Special Requests or Additional Information
        </label>
        <textarea
          value={formData.specialRequests}
          onChange={(e) => handleInputChange('specialRequests', e.target.value)}
          placeholder="Tell us about any accessibility needs, special occasions (honeymoon, anniversary, birthday), specific interests, language preferences, or any other information that will help us plan your perfect trip..."
          rows={5}
          className={`w-full rounded-lg border px-4 py-3 ${
            isDarkMode
              ? 'bg-[#0B0C0E] border-gray-700 text-[#E0E7EE]'
              : 'bg-white border-[#CBD5E1] text-[#0F172A]'
          }`}
        />
      </div>

      {/* Price Estimate */}
      <div className={`rounded-xl p-6 ${
        isDarkMode 
          ? 'bg-linear-to-r from-[#0A3A67] to-[#22D3EE]/20' 
          : 'bg-linear-to-r from-blue-50 to-cyan-50'
      }`}>
        <h3 className={`mb-2 text-xl font-bold ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
          Estimated Total Price
        </h3>
        <div className="mb-2">
          <span className="text-4xl font-bold text-[#22D3EE]">
            ${estimatedPrice.toLocaleString()}
          </span>
          <span className={`ml-2 text-sm ${isDarkMode ? 'text-[#C9D6DF]' : 'text-[#64748B]'}`}>
            for {formData.groupSize} {parseInt(formData.groupSize) > 1 ? 'people' : 'person'}
          </span>
        </div>
        <p className={`text-sm ${isDarkMode ? 'text-[#C9D6DF]' : 'text-[#64748B]'}`}>
          * This is an estimated price. Final price will be confirmed after reviewing your requirements.
        </p>
      </div>
    </div>
  );

  return (
    <PageLayout
      seo={{
        title: 'Custom Pakistan Tour Builder | PakTourZone',
        description: 'Build a tailor-made Northern Pakistan itinerary with dates, budget, and activities. Perfect for international travelers who want a personalized journey.',
        keywords: 'custom Pakistan tour, tailor-made itinerary, Northern Pakistan travel planner, bespoke tour',
        url: '/custom-tour'
      }}
      className={`min-h-screen ${isDarkMode ? 'bg-[#0B0C0E]' : 'bg-[#F8FAFC]'}`}
    >

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className={`mb-4 text-4xl font-bold ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
            Build Your Custom Tour
          </h1>
          <p className={`text-lg ${isDarkMode ? 'text-[#C9D6DF]' : 'text-[#64748B]'}`}>
            Design your perfect adventure tailored to your preferences
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mx-auto mb-12 max-w-3xl">
          <div className="flex items-center justify-between">
            {[1, 2, 3].map((stepNum) => (
              <Fragment key={stepNum}>
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full font-bold transition-all ${
                      step >= stepNum
                        ? 'bg-[#22D3EE] text-white shadow-lg'
                        : isDarkMode
                          ? 'bg-[#0B0C0E] text-[#C9D6DF] border border-gray-700'
                          : 'bg-[#F8FAFC] text-[#64748B]'
                    }`}
                  >
                    {stepNum}
                  </div>
                  <span className={`mt-2 text-sm font-semibold ${
                    step >= stepNum
                      ? 'text-[#22D3EE]'
                      : isDarkMode
                        ? 'text-[#C9D6DF]'
                        : 'text-[#64748B]'
                  }`}>
                    {stepNum === 1 ? 'Destination' : stepNum === 2 ? 'Customize' : 'Contact'}
                  </span>
                </div>
                {stepNum < 3 && (
                  <div className={`h-1 flex-1 mx-4 ${
                    step > stepNum ? 'bg-[#22D3EE]' : isDarkMode ? 'bg-gray-700' : 'bg-[#E2E8F0]'
                  }`} />
                )}
              </Fragment>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mx-auto max-w-5xl">
          <div className={`rounded-2xl p-8 shadow-xl ${
            isDarkMode ? 'bg-[#0F1419]' : 'bg-white'
          }`}>
            {step === 1 && renderStep1()}
            {step === 2 && renderStep2()}
            {step === 3 && renderStep3()}

            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-between">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className={`rounded-lg px-6 py-3 font-semibold transition-all ${
                    isDarkMode
                      ? 'bg-[#0B0C0E] text-[#E0E7EE] hover:bg-gray-800 border border-gray-700'
                      : 'bg-[#F8FAFC] text-[#0F172A] hover:bg-[#E2E8F0]'
                  }`}
                >
                  Previous
                </button>
              )}
              
              <div className="ml-auto">
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    disabled={!formData.destination || !formData.groupSize}
                    className="rounded-lg bg-[#22D3EE] px-8 py-3 font-semibold text-white transition-all hover:bg-[#4DBBFF] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!formData.name || !formData.email || !formData.phone}
                    className="rounded-lg bg-[#22D3EE] px-8 py-3 font-semibold text-white transition-all hover:bg-[#4DBBFF] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Submit Request
                  </button>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>

    </PageLayout>
  );
};

export default CustomTourBuilder;
