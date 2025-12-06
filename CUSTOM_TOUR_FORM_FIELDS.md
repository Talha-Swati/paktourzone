# 📋 Enhanced Custom Tour Builder - Complete Form Fields

## 🎯 Overview
Comprehensive custom tour booking form with **professional-grade data collection** for tour operators to provide personalized experiences.

---

## 📝 Form Fields by Category

### **Step 1: Destination & Trip Details**

#### Destination Selection
- **Field**: Destination *
- **Type**: Visual Card Grid (8 options)
- **Options**: Hunza Valley, Swat Valley, Skardu, Naran Kaghan, K2 Base Camp, Fairy Meadows, Chitral, Gilgit
- **Icons**: Emoji-based visual indicators
- **Purpose**: Primary destination selection

#### Trip Duration
- **Field**: Duration *
- **Type**: Dropdown Select
- **Options**: 3/5/7/9/12/14 days
- **Default**: 7 days
- **Purpose**: Trip length planning

#### Start Date
- **Field**: Preferred Start Date
- **Type**: Date Picker (Calendar)
- **Features**:
  - ✅ Native browser calendar
  - ✅ Min date: Today (prevents past dates)
  - ✅ Dark mode support with `[color-scheme:dark]`
  - ✅ Visual calendar popup
- **Purpose**: Trip timing coordination

#### Group Size
- **Field**: Number of Travelers *
- **Type**: Button Grid (1-10 people)
- **Options**: 1, 2, 3, 4, 5, 6, 8, 10
- **Features**:
  - ✅ Group discount alerts (4+ people: 10%, 8+ people: 15%)
  - ✅ Visual selection with scale effect
- **Purpose**: Pricing calculation & logistics

---

### **Step 2: Customization**

#### Accommodation Level
- **Field**: Accommodation *
- **Type**: Card Selection (4 tiers)
- **Options**:
  - Budget: Guesthouses (0.7x multiplier)
  - Standard: 2-3 star hotels (1.0x)
  - Comfort: 3-4 star hotels (1.5x)
  - Luxury: 5-star resorts (2.5x)
- **Purpose**: Quality preference & pricing

#### Transportation
- **Field**: Transportation *
- **Type**: Card Selection (3 options)
- **Options**:
  - Shared: Group van (0.8x multiplier)
  - Private SUV: Comfortable (1.2x)
  - Premium 4x4: Land Cruiser (1.5x)
- **Purpose**: Comfort & mobility preferences

#### Meal Plan
- **Field**: Meals *
- **Type**: Card Selection (3 options)
- **Options**:
  - Breakfast Only (0.7x multiplier)
  - Half Board: B+D (0.85x)
  - Full Board: All meals (1.0x)
- **Purpose**: Dietary planning & budgeting

#### Activities
- **Field**: Activities (Multi-select)
- **Type**: Checkbox Grid (9 activities)
- **Options**: Trekking, Photography, Camping, Mountaineering, Rafting, Skiing, Cycling, Fishing, Cultural Tour
- **Icons**: React Icons (FaHiking, FaCamera, etc.)
- **Add-on**: $50 per activity
- **Purpose**: Experience customization

---

### **Step 3: Contact & Personal Information**

#### **Personal Information Section**

1. **Full Name** *
   - Type: Text Input
   - Validation: Required
   - Example: "John Doe"
   - Purpose: Identification

2. **Email Address** *
   - Type: Email Input
   - Validation: Required, email format
   - Example: "john@example.com"
   - Purpose: Primary communication

3. **Phone Number** *
   - Type: Tel Input
   - Validation: Required
   - Example: "+1 234 567 8900"
   - Purpose: Direct contact

4. **Age** * 🆕
   - Type: Number Input
   - Validation: Required, min=1, max=120
   - Example: "25"
   - Purpose: Age-appropriate activity planning

5. **Country of Residence** * 🆕
   - Type: Text Input
   - Validation: Required
   - Example: "United States"
   - Purpose: Visa requirements, travel regulations

6. **Nationality** * 🆕
   - Type: Text Input
   - Validation: Required
   - Example: "American"
   - Purpose: Passport verification, visa processing

---

#### **Travel Information Section** 🆕

1. **Arrival City in Pakistan** *
   - Type: Dropdown Select
   - Options: Islamabad, Lahore, Karachi, Peshawar, Multan, Faisalabad
   - Purpose: Airport pickup coordination

2. **Have you visited Pakistan before?** *
   - Type: Dropdown Select
   - Options:
     - No, First Time
     - Yes, Previously Visited
   - Purpose: Experience level assessment, orientation needs

3. **Do you have Travel Insurance?** *
   - Type: Dropdown Select
   - Options:
     - No
     - Yes
     - Planning to Purchase
   - Purpose: Risk management, recommendations

---

#### **Emergency Contact Information** 🆕

1. **Emergency Contact Name** *
   - Type: Text Input
   - Validation: Required
   - Example: "Jane Doe"
   - Purpose: Emergency situations

2. **Emergency Contact Phone** *
   - Type: Tel Input
   - Validation: Required
   - Example: "+1 234 567 8900"
   - Purpose: Emergency communication

---

#### **Health & Dietary Information** 🆕

1. **Dietary Restrictions**
   - Type: Text Input
   - Validation: Optional
   - Examples: "Vegetarian, Vegan, Halal, Gluten-free, Kosher, Lactose intolerant"
   - Purpose: Meal planning, restaurant selection

2. **Medical Conditions or Allergies**
   - Type: Text Input
   - Validation: Optional
   - Examples: "Diabetes, Heart condition, Peanut allergy, Asthma"
   - Purpose: Safety planning, first aid preparation

---

#### **Additional Information**

**Special Requests or Additional Information**
- Type: Textarea (5 rows)
- Validation: Optional
- Examples:
  - Accessibility needs (wheelchair, mobility issues)
  - Special occasions (honeymoon, anniversary, birthday)
  - Specific interests (bird watching, archaeology)
  - Language preferences
  - Photography equipment needs
  - Cultural sensitivity requirements
- Purpose: Personalization, special arrangements

---

## 💰 Price Estimate Display

**Dynamic Real-time Calculation**
- Shows: Total price for entire group
- Formula breakdown:
  - Base: $500/person/day
  - × Duration
  - × Accommodation multiplier
  - × Transportation multiplier
  - × Meals multiplier
  - + Activities ($50 each)
  - - Group discount (if applicable)
- Updates: Instantly on any field change
- Display: Large price with group size breakdown

---

## 🎨 UI/UX Features

### Date Picker Enhancements
✅ **Calendar Icon** - Visual indicator with FaCalendar
✅ **Min Date** - Prevents past date selection
✅ **Dark Mode Support** - `[color-scheme:dark]` for native calendar
✅ **Native Calendar Popup** - Browser's built-in date picker
✅ **Format Support** - YYYY-MM-DD ISO format

### Form Validation
✅ **Required Fields** - Marked with asterisk (*)
✅ **Real-time Validation** - Immediate feedback
✅ **Type Validation** - Email, Tel, Number formats
✅ **Disabled Submit** - Until required fields filled
✅ **Visual Feedback** - Error states, success states

### Responsive Design
✅ **Mobile Optimized** - Single column on mobile
✅ **Desktop Grid** - 2-column layout on desktop
✅ **Touch-friendly** - Large tap targets
✅ **Keyboard Navigation** - Full accessibility

---

## 📊 Data Collection Benefits

### For Tour Operators:
1. ✅ **Complete Customer Profile** - All necessary information in one place
2. ✅ **Risk Assessment** - Insurance, medical conditions, age
3. ✅ **Logistics Planning** - Arrival city, group size, dates
4. ✅ **Personalization** - Dietary, medical, special requests
5. ✅ **Emergency Preparedness** - Emergency contacts readily available
6. ✅ **Regulatory Compliance** - Nationality, visa requirements
7. ✅ **Quality Service** - Tailored experiences based on preferences

### For Customers:
1. ✅ **Transparency** - Clear pricing breakdown
2. ✅ **Safety** - Emergency contact collection
3. ✅ **Customization** - Extensive personalization options
4. ✅ **Convenience** - All information in one form
5. ✅ **Trust** - Professional data collection process
6. ✅ **Peace of Mind** - Dietary/medical needs addressed upfront

---

## 🔐 Data Fields for Backend Integration

### Required for Booking:
```javascript
{
  // Trip Details
  destination: String,
  duration: Number,
  startDate: Date,
  groupSize: Number,
  
  // Customization
  accommodation: String,
  transportation: String,
  meals: String,
  activities: Array<String>,
  
  // Personal Info
  name: String,
  email: String,
  phone: String,
  age: Number,
  country: String,
  nationality: String,
  
  // Travel Info
  arrivalCity: String,
  previousVisitToPakistan: Boolean,
  travelInsurance: String,
  
  // Emergency
  emergencyContact: String,
  emergencyPhone: String,
  
  // Health
  dietaryRestrictions: String,
  medicalConditions: String,
  
  // Additional
  specialRequests: String,
  
  // Calculated
  estimatedPrice: Number,
  submittedAt: Timestamp
}
```

---

## 📋 Form Completion Checklist

### Step 1 (Required):
- ✅ Destination selected
- ✅ Duration chosen
- ✅ Group size selected

### Step 2 (Required):
- ✅ Accommodation level chosen
- ✅ Transportation type selected
- ✅ Meal plan selected

### Step 3 (Required):
- ✅ Full name entered
- ✅ Email address entered
- ✅ Phone number entered
- ✅ Age entered
- ✅ Country of residence entered
- ✅ Nationality entered
- ✅ Arrival city selected
- ✅ Previous visit status selected
- ✅ Travel insurance status selected
- ✅ Emergency contact name entered
- ✅ Emergency contact phone entered

### Step 3 (Optional but Recommended):
- ⚡ Dietary restrictions (if applicable)
- ⚡ Medical conditions (if applicable)
- ⚡ Special requests (for personalization)

---

## 🎯 Why These Fields?

### **Country of Residence** & **Nationality**
- **Visa Requirements**: Different countries have different visa rules for Pakistan
- **Travel Advisories**: Country-specific warnings and recommendations
- **Insurance Coverage**: Geographic coverage verification
- **Cultural Preparation**: Tailored briefing materials

### **Age**
- **Activity Suitability**: Age-appropriate trek difficulty
- **Insurance Premium**: Age affects travel insurance
- **Special Care**: Senior travelers may need different arrangements
- **Group Composition**: Better group matching

### **Arrival City**
- **Logistics**: Airport pickup coordination
- **Route Planning**: Optimal starting point for tour
- **Accommodation**: First night booking
- **Domestic Flights**: Internal flight arrangements

### **Previous Visit**
- **Orientation Needs**: First-timers need more guidance
- **Expectations Management**: Returning visitors have different needs
- **Itinerary Customization**: Avoid repeating experiences

### **Travel Insurance**
- **Risk Management**: Ensures customer protection
- **Recommendations**: Offer insurance if not purchased
- **Claims Support**: Better assistance if needed

### **Emergency Contact**
- **Safety Protocol**: Required for all adventure tours
- **Medical Emergencies**: Quick contact in crisis
- **Standard Practice**: Industry best practice

### **Dietary Restrictions**
- **Meal Planning**: Restaurant selection, food preparation
- **Allergies**: Life-saving information
- **Religious Requirements**: Halal, Kosher compliance
- **Special Diets**: Vegan, vegetarian options

### **Medical Conditions**
- **First Aid Preparation**: Appropriate medical supplies
- **Activity Modifications**: Safe participation
- **Emergency Protocols**: Pre-planned response
- **Staff Briefing**: Guide awareness

---

## 🚀 Next Steps for Implementation

### Backend Integration:
1. ✅ Create API endpoint: `POST /api/custom-tour-requests`
2. ✅ Email notifications to admin
3. ✅ Auto-response to customer email
4. ✅ CRM integration
5. ✅ Database storage

### Future Enhancements:
- 🔄 Passport upload field
- 🔄 Profile photo upload
- 🔄 Multi-traveler forms (group bookings)
- 🔄 Payment integration
- 🔄 Real-time availability checking
- 🔄 Instant quote generation PDF

---

## ✅ Summary

**Total Fields**: 23 comprehensive data points
**Required Fields**: 16 essential fields
**Optional Fields**: 7 enhancement fields
**Categories**: 5 organized sections
**User Experience**: Professional, intuitive, mobile-friendly
**Data Quality**: High-quality, actionable information

This form provides **everything needed** for professional tour operations while maintaining excellent user experience! 🎉
