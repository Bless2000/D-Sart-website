import React, { useState } from 'react';
import { Heart, Waves, Users, Target, Phone, Mail, MapPin, Menu, X, Facebook, Twitter, Instagram, Linkedin, ChevronRight, Globe, Leaf, Shield, Award, Banknote, Map, TreePine } from 'lucide-react';
import ThrivingMangroveVideo from './assets/videos/VideoOfMangrove2.mp4';
import ClimateChangeVideo from './assets/videos/FishesDeadOnTheSurface.mp4';
import ProjectImpactVideo from './assets/videos/Video OfMangrove1.mp4';
import NurseryPreparationVideo from './assets/videos/Mangrove Farmers putting the Mangrove sticks in soil to start planting.mp4';
import PlantingSiteVideo from './assets/videos/Mangroves being planted.mp4';
import SkillsTrainingImage from './assets/SkillsTrainingForFishFarming.jpg';
import FirewoodImage from './assets/Firewood.jpg';
import TunuWorkersImage from './assets/TunuWorkers.jpg';
import MangroveFarmersImage from './assets/icture of mangrove farmers.jpg';
import UrbanizationVideo from './assets/videos/DestroyedMangroves.mp4';
import AgnesTsikataImage from './assets/team/Chairperson, CEO Agnes Tsikata.jpg';
import WisdomYaoExeImage from './assets/team/Wisdom Yao Exe.jpg';
import DennisAmoakoImage from './assets/team/Dennis Amoako.jpg';
import RosemaryGyasiImage from './assets/team/Rosemary Gyasi, Secretary.jpg';
import JasperDunyaImage from './assets/team/asper Dunya, environmental, officer..jpg';
import EbenWestiImage from './assets/team/Eben Westi.jpg';
import AloryitoHunorImage from './assets/team/Aloryito Hunor..jpg';
import NyaledzigborLumorImage from './assets/team/Nyaledzigbor Lumor:planer , reforestation worker..jpg';
import Mangrove1 from './assets/Mangrove1.jpg';
import Mongrove2 from './assets/Mongrove2.jpg';
import Destroy2 from './assets/videos/Destroy2.mp4';
import AkplorwotorDzitaAgbledomeImage from './assets/team/Akplorwotor Dzita Agbledome.jpg';


export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ src: '', type: '' });

  const openModal = (src, type) => {
    setModalContent({ src, type });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent({ src: '', type: '' });
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const teamMembers = [
    { name: "Agnes Tsikata", role: "CEO & Chairperson", contact: "0574860230", image: AgnesTsikataImage },
    { name: "Mr. Wisdom Yao Exe", role: "Director, Project Resource Consultant", contact: "0245964448", image: WisdomYaoExeImage },
    { name: "Dennis Amoako", role: "Management Committee Member/Finance", contact: "0209279897", image: DennisAmoakoImage },
    { name: "Rosemary Gyasi", role: "Secretary", contact: "", image: RosemaryGyasiImage },
    { name: "Jasper Dunya", role: "Environmental Officer", contact: "", image: JasperDunyaImage },
    { name: "Eben Westi", role: "Project Manager", contact: "", image: EbenWestiImage },
    { name: "Aloryito Hunor", role: "Project Director", contact: "", image: AloryitoHunorImage },
    { name: "Nyaledzigbor Lumor", role: "Restoration Worker", contact: "", image: NyaledzigborLumorImage },
    { name: "Akplorwotor Dzita Agbledome", role: "Community Site Engineer/Media", contact: "", image: AkplorwotorDzitaAgbledomeImage }
  ];

  const sponsorshipTiers = [
    {
      name: "Platinum Sponsor",
      amount: "GH₵50,000+",
      benefits: [
        "Naming rights on flagship program (e.g., Mangrove Nursery powered by [Company Name])",
        "Prominent logo placement on all campaigns, reports, and community events",
        "Feature in press releases, newsletters, and social media shout-outs",
        "Complimentary ESG/biodiversity consulting session with our experts"
      ]
    },
    {
      name: "Gold Sponsor",
      amount: "GH₵25,000 - GH₵49,999",
      benefits: [
        "Logo placement on major campaigns and annual reports",
        "Recognition in community events and media coverage",
        "Quarterly impact reports on your contribution",
        "Certificate of partnership and recognition"
      ]
    },
    {
      name: "Silver Sponsor",
      amount: "GH₵10,000 - GH₵24,999",
      benefits: [
        "Logo on website and event materials",
        "Social media recognition",
        "Annual impact report",
        "Certificate of appreciation"
      ]
    }
  ];

  const heroStyle = {
    backgroundImage: `url(${Mongrove2})`
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <Waves className="h-10 w-10 text-emerald-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">D-SART</h1>
                <p className="text-xs text-gray-600">Wildlife Aquatic Conservation</p>
              </div>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'mission', 'gallery', 'team', 'partner', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === section ? 'text-emerald-600' : 'text-gray-700 hover:text-emerald-600'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('donate')}
                className="bg-emerald-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl"
              >
                Donate Now
              </button>
            </div>

            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              {['home', 'about', 'mission', 'gallery', 'team', 'partner', 'contact', 'donate'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-emerald-50 rounded-lg"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

     {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 to-teal-900/70 z-10"></div>
        <div className="absolute inset-0">
          <img src={Mongrove2} alt="Mangrove Forest" className="w-full h-full object-cover object-center" />
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto animate-fadeIn pt-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Mangrove Restoration
          </h1>
          <p className="text-2xl md:text-3xl text-green-200 mb-4 font-light">
            Saving Coasts, Saving Lives
          </p>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Since 1860, preserving Ghana's coastal heritage through community-driven conservation and sustainable restoration
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('donate')}
              className="bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-500 transition-all shadow-2xl hover:shadow-emerald-500/50 flex items-center justify-center gap-2"
            >
              <Heart className="h-5 w-5" />
              Support Our Cause
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all border-2 border-white/30 flex items-center justify-center gap-2"
            >
              Learn More
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Heritage</h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A living legacy of environmental stewardship spanning over 160 years
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-3xl font-bold text-emerald-900 mb-6">Since 1860: A Legacy of Conservation</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  The inherited mangrove dates back to 1860, when the forefathers of the present custodians first settled along the coastal wetlands and began nurturing the mangrove ecosystem. Passed down through generations, this mangrove heritage has remained under the care of the same local family and community, who have preserved it as both a natural shield and a source of livelihood.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Over the decades, the true owners have continued planting, protecting, and restoring the mangrove to sustain fish habitats, prevent erosion, and support biodiversity. Despite modern challenges, their commitment to conservation has never wavered.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Today, the descendants proudly uphold the legacy, integrating traditional knowledge with modern practices to ensure that the mangrove thrives for future generations. This living heritage stands as a symbol of resilience, stewardship, and environmental continuity.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-emerald-900 text-white rounded-2xl shadow-xl p-8 mb-6">
                <h4 className="text-2xl font-bold mb-4">Our Legacy from 1721</h4>
                <p className="text-emerald-100 mb-4">
                  Rooted in the southern part of the Volta Region across historic communities:
                </p>
                <p className="text-emerald-50 leading-relaxed">
                  Agbatsivi, Agortoe, Salo Akpashiafe, Agbledomi, Akplorwotokor, Dzita, Anyanui, Tunu, Bomego, Gamenu, Vededeanu
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <Globe className="h-10 w-10 text-emerald-600 mx-auto mb-2" />
                  <h5 className="font-bold text-2xl text-gray-900">200+</h5>
                  <p className="text-sm text-gray-600">Years Legacy</p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <Leaf className="h-10 w-10 text-emerald-600 mx-auto mb-2" />
                  <h5 className="font-bold text-2xl text-gray-900">2,500+</h5>
                  <p className="text-sm text-gray-600">Seedlings Planted</p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <Users className="h-10 w-10 text-emerald-600 mx-auto mb-2" />
                  <h5 className="font-bold text-2xl text-gray-900">300+</h5>
                  <p className="text-sm text-gray-600">Families Supported</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Impact Section */}
      <section id="mission" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-linear-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Shield className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Coastal Protection</h3>
              <p className="text-gray-700">
                Restoring degraded ecosystems to protect coastlines from erosion, large waves, and climate change impacts while reviving marine biodiversity.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Empowerment</h3>
              <p className="text-gray-700">
                Resettling 300 displaced families with housing, water, and livelihood support while creating 1,200 sustainable jobs in green enterprises.
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Leaf className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Climate Action</h3>
              <p className="text-gray-700">
                Absorbing carbon, reducing greenhouse gas emissions, and aligning with UN Sustainable Development Goals 13, 14, and 15 for global impact.
              </p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Project Impact Video */}
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              <video controls className="w-full aspect-video">
                <source src={ProjectImpactVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-4 bg-gray-800 text-white">
                <p className="text-xl font-semibold mb-2">Thriving Mangrove Forest: A testament to nature's resilience</p>
                <p className="text-gray-400">Witness the lush, restored ecosystem in full bloom, protecting our coasts and nurturing life.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Work in Action</h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Witness the transformation from destruction to restoration</p>
          </div>

          <div className="space-y-8">
            <div className="max-w-2xl mx-auto">

            {/* Mangrove Image */}
              <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl">
                    <img src={Mangrove1} alt="Thriving Mangrove Ecosystem" className="w-full h-auto object-cover" />
                  </div>
              
              {/* Thriving Mangrove Video */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                <video controls className="w-full aspect-video cursor-pointer" onClick={() => openModal(ThrivingMangroveVideo, 'video')}>
                  <source src={ThrivingMangroveVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Image Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <video controls className="w-full h-48 object-cover aspect-video cursor-pointer" onClick={() => openModal(NurseryPreparationVideo, 'video')}>
                  <source src={NurseryPreparationVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Nursery Preparation</h4>
                  <p className="text-sm text-gray-600">Workers filling black soil in nursery polythene bags for seedling cultivation</p>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <video controls className="w-full h-48 object-cover aspect-video cursor-pointer" onClick={() => openModal(PlantingSiteVideo, 'video')}>
                  <source src={PlantingSiteVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Planting Site at Tunu</h4>
                  <p className="text-sm text-gray-600">Community members planting mangrove seedlings in designated restoration areas</p>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <img src={MangroveFarmersImage} alt="Restoration Team" className="w-full h-48 object-cover cursor-pointer" onClick={() => openModal(MangroveFarmersImage, 'image')}/>
                <div className="p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Restoration Team</h4>
                  <p className="text-sm text-gray-600">Dedicated workers committed to mangrove conservation and ecosystem restoration</p>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <img src={SkillsTrainingImage} alt="Training" className="w-full h-48 object-cover cursor-pointer" onClick={() => openModal(SkillsTrainingImage, 'image')}/>
                <div className="p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Skills Training Program</h4>
                  <p className="text-sm text-gray-600">Community members receiving training in sustainable fish farming techniques</p>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <img src={TunuWorkersImage} alt="Tunu community workers in action" className="w-full h-48 object-cover cursor-pointer" onClick={() => openModal(TunuWorkersImage, 'image')}/>
                <div className="p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Community Engagement</h4>
                  <p className="text-sm text-gray-600">Tunu community workers in action, dedicated to conservation</p>
                </div>
              </div>

              <div className="bg-red-50 rounded-xl overflow-hidden shadow-lg border-2 border-red-200">
                <img src={FirewoodImage} alt="Mangroves used for firewood" className="w-full h-48 object-cover cursor-pointer" onClick={() => openModal(FirewoodImage, 'image')}/>
                <div className="p-4 bg-white">
                  <h4 className="font-bold text-red-900 mb-2">The Challenge We Face</h4>
                  <p className="text-sm text-gray-600">Mangroves being used for firewood in a bad way</p>
                </div>
              </div>
            </div>

            {/* Additional Destruction Videos */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 rounded-xl overflow-hidden shadow-lg border-2 border-red-200">
                <video controls className="w-full aspect-video cursor-pointer" onClick={() => openModal(Destroy2, 'video')}>
                  <source src={Destroy2} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="p-4 bg-white">
                  <h4 className="font-bold text-red-900 mb-2">Urbanization Pressure</h4>
                  <p className="text-sm text-gray-600">Video: Devastating land conversion leading to mangrove destruction</p>
                </div>
              </div>
              <div className="max-w-2xl mx-auto bg-red-50 rounded-xl overflow-hidden shadow-lg border-2 border-red-200">
                <video controls className="w-full aspect-video">
                  <source src={ClimateChangeVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="p-4 bg-white">
                  <h4 className="font-bold text-red-900 mb-2">The Challenge We Face</h4>
                  <p className="text-sm text-gray-600">Video of fishes dead on the sea due to bad actions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <Heart className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Make a Difference Today</h2>
            <p className="text-xl text-emerald-50 max-w-2xl mx-auto">
              Your donation directly supports mangrove restoration, community empowerment, and climate action
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Support Our Cause</h3>
            
            {/*
            <div className="mb-8">
              <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 px-8 rounded-xl text-lg font-bold hover:from-emerald-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl mb-4 flex items-center justify-center gap-3">
                <Heart className="h-6 w-6" />
                Donate Securely with Paystack
              </button>
              <p className="text-center text-gray-600 text-sm">
                Accepts Credit Cards, Bank Transfers & Mobile Money • Instant Receipt • Secure & Trusted
              </p>
            </div>
            */}

            <div className="border-t border-gray-200 pt-8 mt-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Other Ways to Give</h4>
              
              <div className="space-y-4">
                <div className="bg-emerald-50 rounded-xl p-6">
                  <h5 className="font-bold text-gray-900 mb-3">Bank Transfer (Ghana)</h5>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Bank:</strong> Ecobank Lapaz</p>
                    <p><strong>Account Name:</strong> D-SART Wildlife Aquatic Conservation</p>
                    <p><strong>Account Number:</strong> 1441003928958</p>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6">
                  <h5 className="font-bold text-gray-900 mb-3">For International Donors</h5>
                  <p className="text-gray-700 mb-3">
                    Large institutional donors and partnership inquiries, please contact us directly:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href="tel:0574860230" className="flex items-center justify-center gap-2 bg-white px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                      <Phone className="h-4 w-4" />
                      0574860230
                    </a>
                    <a href="tel:0245964448" className="flex items-center justify-center gap-2 bg-white px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                      <Phone className="h-4 w-4" />
                      0245964448
                    </a>
                    <a href="tel:0209279897" className="flex items-center justify-center gap-2 bg-white px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                      <Phone className="h-4 w-4" />
                      0209279897
                    </a>
                    <a href="mailto:info@dsartwildlife.org" className="flex items-center justify-center gap-2 bg-white px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                      <Mail className="h-4 w-4" />
                      Contact via Email
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border-2 border-amber-200">
              <div className="flex items-start gap-4">
                <Award className="h-8 w-8 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h5 className="font-bold text-gray-900 mb-2">Your Impact</h5>
                  <p className="text-gray-700 text-sm">
                    Every donation helps restore coastal ecosystems, provides livelihoods for displaced families, and creates sustainable jobs. You'll receive impact reports showing exactly how your contribution makes a difference.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Dedicated leaders driving environmental conservation and community empowerment</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group">
                <div className="aspect-square bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center overflow-hidden">
                   <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform cursor-pointer" onClick={() => openModal(member.image, 'image')}/>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                  {member.contact && (
                    <div className="flex items-center text-gray-600 text-sm">
                      <Phone className="h-4 w-4 mr-2" />
                      {member.contact}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section id="partner" className="py-20 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Partner With Us</h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join forward-thinking organizations in this transformative mission to restore ecosystems and empower communities
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Partner With D-SART?</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-emerald-600" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Demonstrate Sustainability Leadership</h4>
                  <p className="text-gray-600">Strengthen your corporate reputation and ESG commitments</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Featured Partnership Recognition</h4>
                  <p className="text-gray-600">Be featured as a key partner in biodiversity restoration across media, events, and reports</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <Target className="h-6 w-6 text-teal-600" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Align With Global Goals</h4>
                  <p className="text-gray-600">Support UN SDGs on climate resilience and community empowerment</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Leave a Visible Legacy</h4>
                  <p className="text-gray-600">Create lasting hope, change, and environmental impact for future generations</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {sponsorshipTiers.map((tier, index) => (
              <div key={index} className={`rounded-2xl shadow-xl overflow-hidden ${index === 0 ? 'ring-4 ring-emerald-500 transform md:scale-105' : ''}`}>
                <div className={`p-8 ${index === 0 ? 'bg-gradient-to-br from-emerald-600 to-teal-600' : index === 1 ? 'bg-gradient-to-br from-amber-500 to-orange-500' : 'bg-gradient-to-br from-gray-400 to-gray-500'}`}>
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-3xl font-bold text-white">{tier.amount}</p>
                </div>
                <div className="p-8 bg-white">
                  <ul className="space-y-4">
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-gray-50 p-8 rounded-2xl shadow-xl">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-emerald-800">Contact Information</h3>
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-emerald-600 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-700">info@dsart.org (placeholder)</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-emerald-600 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Primary Contact (CEO)</p>
                  <p className="text-gray-700">+233 57 486 0230 (Agnes Tsikata)</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-emerald-600 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Primary Contact (Director, Project Resource Consultant)</p>
                  <p className="text-gray-700">+233 24 596 4448 (Mr. Wisdom Yao Exe)</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-emerald-600 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Primary Contact (Management Committee Member/Finance)</p>
                  <p className="text-gray-700">+233 20 927 9897 (Dennis Amoako)</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-emerald-600 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Office Location</p>
                  <p className="text-gray-700">Volta Region, Ghana (Administrative Base)</p>
                </div>
              </div>
            </div>
            
            {/* Contact Form Placeholder */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Send a Message</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500" required />
                <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500" required />
                <textarea placeholder="Your Message or Inquiry" rows="4" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500" required></textarea>
                <button type="submit" className="w-full py-3 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition-colors">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Mission */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Waves className="h-8 w-8 text-emerald-400" />
              <h5 className="text-xl font-bold text-white">D-SART</h5>
            </div>
            <p className="text-sm text-gray-400">
              Wildlife Aquatic Conservation. Dedicated to restoring the inherited mangrove legacy since 1860 in the Volta Region.
            </p>
            <div className="flex space-x-3 pt-2">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-emerald-500 cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-emerald-500 cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-emerald-500 cursor-pointer" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-emerald-500 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-semibold text-lg mb-4 text-emerald-400">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              {['About', 'Mission', 'Gallery', 'Team', 'Donate'].map((link) => (
                <li key={link}>
                  <button onClick={() => scrollToSection(link.toLowerCase())} className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h5 className="font-semibold text-lg mb-4 text-emerald-400">Contact</h5>
            <p className="text-sm text-gray-400 flex items-center mb-2">
              <Phone className="h-4 w-4 mr-2" /> +233 57 486 0230
            </p>
            <p className="text-sm text-gray-400 flex items-center mb-2">
              <Phone className="h-4 w-4 mr-2" /> +233 24 596 4448
            </p>
            <p className="text-sm text-gray-400 flex items-center mb-2">
              <Phone className="h-4 w-4 mr-2" /> +233 20 927 9897
            </p>
            <p className="text-sm text-gray-400 flex items-center mb-2">
              <Mail className="h-4 w-4 mr-2" /> info@dsart.org
            </p>
          </div>

          {/* Bank Info */}
          <div>
            <h5 className="font-semibold text-lg mb-4 text-emerald-400">Bank Details</h5>
            <p className="text-sm text-gray-400">Bank: Ecobank Lapaz</p>
            <p className="text-sm text-gray-400">Account: 1441003928958</p>
            <p className="text-xs mt-4 text-gray-500">Secure transfers supporting community livelihoods.</p>
          </div>
        </div>
        
        <div className="text-center py-4 text-xs text-gray-500 border-t border-gray-800">
          © {new Date().getFullYear()} D- Sart Wildlife Aquatic Conservation. All Rights Reserved.
        </div>
      </footer>

      {modalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div 
            className="relative bg-white p-4 rounded-lg max-w-4xl max-h-screen"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeModal} 
              className="absolute -top-4 -right-4 bg-white text-black rounded-full p-2"
            >
              <X className="h-6 w-6" />
            </button>
            {modalContent.type === 'image' ? (
              <img src={modalContent.src} alt="Enlarged content" className="max-w-full max-h-[90vh]"/>
            ) : (
              <video controls autoPlay className="max-w-full max-h-[90vh]">
                <source src={modalContent.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      )}
    </div>
  );
}