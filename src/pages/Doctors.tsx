import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Star, Video, MapPin, Clock, Filter, ChevronLeft, ChevronRight } from "lucide-react";

const doctors = [
  {
    id: 1,
    name: "Dr. Mahima Sharma",
    specialty: "Ayurvedic Physician",
    experience: "15 years",
    rating: 4.9,
    reviews: 342,
    languages: ["Hindi", "English"],
    nextAvailable: "Today, 4:00 PM",
    consultationFee: 500,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300",
    expertise: ["Skin Disorders", "Hair Care", "Women's Health"],
  },
  {
    id: 2,
    name: "Dr. Rajesh Gupta",
    specialty: "Panchakarma Specialist",
    experience: "20 years",
    rating: 4.8,
    reviews: 287,
    languages: ["Hindi", "English", "Sanskrit"],
    nextAvailable: "Tomorrow, 10:00 AM",
    consultationFee: 700,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300",
    expertise: ["Detoxification", "Digestive Health", "Joint Pain"],
  },
  {
    id: 3,
    name: "Dr. Priya Nair",
    specialty: "Ayurvedic Dermatologist",
    experience: "12 years",
    rating: 4.7,
    reviews: 198,
    languages: ["Hindi", "English", "Malayalam"],
    nextAvailable: "Today, 6:30 PM",
    consultationFee: 450,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300",
    expertise: ["Acne", "Pigmentation", "Anti-aging"],
  },
  {
    id: 4,
    name: "Dr. Arun Sharma",
    specialty: "Ayurvedic Psychiatrist",
    experience: "18 years",
    rating: 4.9,
    reviews: 256,
    languages: ["Hindi", "English"],
    nextAvailable: "Today, 8:00 PM",
    consultationFee: 600,
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300",
    expertise: ["Anxiety", "Depression", "Sleep Disorders"],
  },
];

const specialties = [
  "All Specialties",
  "General Ayurveda",
  "Panchakarma",
  "Dermatology",
  "Psychiatry",
  "Gynecology",
  "Pediatrics",
];

export default function Doctors() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All Specialties");
  const [currentPage, setCurrentPage] = useState(1);
  const doctorsPerPage = 2;

  // Filter doctors based on search and specialty
  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialty = selectedSpecialty === "All Specialties" ||
                            doctor.specialty.toLowerCase().includes(selectedSpecialty.toLowerCase());
    return matchesSearch && matchesSpecialty;
  });

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedSpecialty]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredDoctors.length / doctorsPerPage);
  const startIndex = (currentPage - 1) * doctorsPerPage;
  const endIndex = startIndex + doctorsPerPage;
  const currentDoctors = filteredDoctors.slice(startIndex, endIndex);

  // Navigation functions
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-beige to-background py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-forest mb-3 sm:mb-4">
              Find Ayurvedic Doctors & Book Consultations
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8">
              Connect with certified Ayurvedic practitioners for personalized health consultations.
              Get expert guidance from the comfort of your home.
            </p>

            {/* Search */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search doctors by name or specialty..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 sm:pl-12 py-4 sm:py-6 text-sm sm:text-base"
                />
              </div>
              <Button className="bg-primary hover:bg-primary-dark py-4 sm:py-6 px-6 sm:px-8 text-sm sm:text-base">Search</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-background py-6 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Filter className="w-4 h-4" />
              Filters:
            </div>
            <div className="flex flex-wrap gap-2">
              {specialties.map((specialty) => (
                <button
                  key={specialty}
                  onClick={() => setSelectedSpecialty(specialty)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    selectedSpecialty === specialty
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  {specialty}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Doctors List */}
      <section className="bg-background py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              Showing {startIndex + 1}-{Math.min(endIndex, filteredDoctors.length)} of {filteredDoctors.length} doctors
            </p>
            <select className="bg-card border border-border rounded-lg px-4 py-2 text-sm">
              <option>Sort by: Recommended</option>
              <option>Rating: High to Low</option>
              <option>Experience: High to Low</option>
              <option>Fee: Low to High</option>
            </select>
          </div>

          <div className="grid gap-6">
            {currentDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-card rounded-xl p-6 border border-border hover:shadow-elegant transition-shadow"
              >
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  {/* Doctor Image */}
                  <div className="sm:w-32 md:w-48 shrink-0">
                    <div className="aspect-square rounded-xl overflow-hidden">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Doctor Info */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
                      <div className="flex-1">
                        <h3 className="font-heading text-lg sm:text-xl font-bold text-forest">
                          {doctor.name}
                        </h3>
                        <p className="text-primary text-sm sm:text-base">{doctor.specialty}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                          {doctor.experience} experience
                        </p>
                      </div>
                      <div className="flex items-center gap-1 bg-primary/10 px-2 sm:px-3 py-1 rounded-full self-start">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-ayurveda-orange fill-ayurveda-orange" />
                        <span className="font-semibold text-sm">{doctor.rating}</span>
                        <span className="text-xs sm:text-sm text-muted-foreground">
                          ({doctor.reviews})
                        </span>
                      </div>
                    </div>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {doctor.expertise.map((exp) => (
                        <span
                          key={exp}
                          className="text-xs bg-muted px-3 py-1 rounded-full"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>

                    {/* Details */}
                    <div className="flex flex-wrap gap-4 sm:gap-6 mt-4 text-xs sm:text-sm text-muted-foreground">
                      <div className="flex items-center gap-1 sm:gap-2">
                        <Video className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>Video Consultation</span>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>Next: {doctor.nextAvailable}</span>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{doctor.languages.join(", ")}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-border">
                      <div>
                        <span className="text-xl sm:text-2xl font-bold text-brown">
                          ₹{doctor.consultationFee}
                        </span>
                        <span className="text-xs sm:text-sm text-muted-foreground"> / consultation</span>
                      </div>
                      <div className="flex gap-2 sm:gap-3">
                        <Button variant="outline" size="sm" className="text-xs sm:text-sm">View Profile</Button>
                        <Button className="bg-primary hover:bg-primary-dark text-xs sm:text-sm" size="sm">
                          Book Appointment
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-8">
              <button
                onClick={goToPrevPage}
                disabled={currentPage === 1}
                className={`w-10 h-10 rounded-lg border border-border flex items-center justify-center transition-colors ${
                  currentPage === 1
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-muted'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                    currentPage === page
                      ? 'bg-primary text-primary-foreground'
                      : 'border border-border hover:bg-muted'
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className={`w-10 h-10 rounded-lg border border-border flex items-center justify-center transition-colors ${
                  currentPage === totalPages
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-muted'
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-beige py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl font-bold text-forest mb-4">
            Are you an Ayurvedic Practitioner?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            Join our network of certified practitioners and help thousands of people on their
            wellness journey.
          </p>
          <Button variant="outline" className="px-8">
            Register as a Doctor
          </Button>
        </div>
      </section>
    </Layout>
  );
}
