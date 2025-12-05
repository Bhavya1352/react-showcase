import { useState } from "react";
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

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-beige to-background py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading text-3xl lg:text-4xl font-bold text-forest mb-4">
              Find Ayurvedic Doctors & Book Consultations
            </h1>
            <p className="text-muted-foreground mb-8">
              Connect with certified Ayurvedic practitioners for personalized health consultations.
              Get expert guidance from the comfort of your home.
            </p>

            {/* Search */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search doctors by name or specialty..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 py-6"
                />
              </div>
              <Button className="bg-primary hover:bg-primary-dark py-6 px-8">Search</Button>
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
            <p className="text-muted-foreground">Showing {doctors.length} doctors</p>
            <select className="bg-card border border-border rounded-lg px-4 py-2 text-sm">
              <option>Sort by: Recommended</option>
              <option>Rating: High to Low</option>
              <option>Experience: High to Low</option>
              <option>Fee: Low to High</option>
            </select>
          </div>

          <div className="grid gap-6">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-card rounded-xl p-6 border border-border hover:shadow-elegant transition-shadow"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Doctor Image */}
                  <div className="md:w-48 shrink-0">
                    <div className="aspect-square md:aspect-auto md:h-48 rounded-xl overflow-hidden">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Doctor Info */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h3 className="font-heading text-xl font-bold text-forest">
                          {doctor.name}
                        </h3>
                        <p className="text-primary">{doctor.specialty}</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {doctor.experience} experience
                        </p>
                      </div>
                      <div className="flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full">
                        <Star className="w-4 h-4 text-ayurveda-orange fill-ayurveda-orange" />
                        <span className="font-semibold">{doctor.rating}</span>
                        <span className="text-sm text-muted-foreground">
                          ({doctor.reviews} reviews)
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
                    <div className="flex flex-wrap gap-6 mt-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Video className="w-4 h-4" />
                        <span>Video Consultation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>Next: {doctor.nextAvailable}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{doctor.languages.join(", ")}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-4 border-t border-border">
                      <div>
                        <span className="text-2xl font-bold text-brown">
                          ₹{doctor.consultationFee}
                        </span>
                        <span className="text-sm text-muted-foreground"> / consultation</span>
                      </div>
                      <div className="flex gap-3">
                        <Button variant="outline">View Profile</Button>
                        <Button className="bg-primary hover:bg-primary-dark">
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
          <div className="flex items-center justify-center gap-2 mt-8">
            <button className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-muted transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
              1
            </button>
            <button className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-muted transition-colors">
              2
            </button>
            <button className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-muted transition-colors">
              3
            </button>
            <button className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-muted transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
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
