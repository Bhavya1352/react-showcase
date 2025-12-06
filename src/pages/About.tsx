import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const values = [
  {
    icon: "🌿",
    title: "100% Natural",
    description: "All our products are made from pure, natural ingredients sourced directly from nature.",
  },
  {
    icon: "📜",
    title: "Ancient Wisdom",
    description: "We follow traditional Ayurvedic formulations that have been passed down through generations.",
  },
  {
    icon: "🔬",
    title: "Modern Science",
    description: "Our products are tested and validated using modern scientific methods.",
  },
  {
    icon: "🌍",
    title: "Sustainable",
    description: "We are committed to eco-friendly practices and sustainable sourcing.",
  },
];

const stats = [
  { number: "500K+", label: "Happy Customers" },
  { number: "100+", label: "Ayurvedic Products" },
  { number: "50+", label: "Expert Doctors" },
  { number: "15+", label: "Years Experience" },
];

const team = [
  {
    name: "Dr. Agastya Natu",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300",
    description: "Visionary leader bringing Ayurveda to modern wellness.",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Chief Ayurveda Officer",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300",
    description: "20+ years of experience in traditional Ayurvedic medicine.",
  },
  {
    name: "Rahul Verma",
    role: "Head of Product",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300",
    description: "Expert in formulating authentic Ayurvedic products.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-beige to-background py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-60 h-60 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-forest mb-6">
              Bringing Ancient Ayurvedic Wisdom to Modern Life
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              At Amrutam, we believe in the power of Ayurveda to transform lives. Our mission is to
              make authentic Ayurvedic wellness accessible to everyone, combining time-tested
              formulations with modern science.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/shop">
                <Button className="bg-primary hover:bg-primary-dark px-8 py-6">
                  Explore Products
                </Button>
              </Link>
              <Link to="/doctors">
                <Button variant="outline" className="px-8 py-6">
                  Consult a Doctor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="font-heading text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.number}
                </p>
                <p className="text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold text-forest mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2008, Amrutam was born from a deep-rooted passion for Ayurveda and a
                  desire to share its profound benefits with the world. Our founder, Dr. Agastya
                  Natu, grew up in a family of Ayurvedic practitioners in Gwalior, India.
                </p>
                <p>
                  What started as a small venture has now grown into a trusted brand serving
                  hundreds of thousands of customers worldwide. We take pride in preserving the
                  authenticity of Ayurvedic formulations while making them relevant for today's
                  lifestyle.
                </p>
                <p>
                  Every product we create goes through rigorous quality checks and is made using
                  the finest natural ingredients. Our team of experienced Ayurvedic doctors and
                  practitioners ensure that each formulation stays true to its classical roots.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img
                  src="/Ayurvedic-ingredients"
                  alt="Ayurvedic ingredients"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-beige rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-beige py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-forest text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-card rounded-full p-6 text-center shadow-soft hover:shadow-elegant transition-shadow aspect-square flex flex-col justify-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-3xl mb-4">
                  {value.icon}
                </div>
                <h3 className="font-heading font-semibold text-forest text-lg mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-forest text-center mb-4">
            Meet Our Team
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Our team of passionate experts is dedicated to bringing you the best of Ayurveda.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, idx) => (
              <div key={idx} className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 ring-4 ring-primary/20">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-heading font-semibold text-forest text-lg">{member.name}</h3>
                <p className="text-primary text-sm mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">
            Ready to Start Your Wellness Journey?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Join thousands of people who have transformed their health with Ayurveda. Our expert
            doctors are here to guide you every step of the way.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/doctors">
              <Button variant="secondary" className="px-8 py-6">
                Book a Consultation
              </Button>
            </Link>
            <Link to="/shop">
              <Button
                variant="outline"
                className="px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
