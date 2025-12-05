import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/ui/ProductCard";
import { ChevronDown } from "lucide-react";

const benefits = [
  { icon: "🩺", title: "Lowers Blood Sugar", description: "Helps regulate glucose levels naturally" },
  { icon: "🍽️", title: "Boosts Digestion", description: "Aids in breaking down food efficiently and enhances metabolism" },
  { icon: "😌", title: "Reduces Anxiety", description: "Calms the nervous system and promotes relaxation" },
  { icon: "🌱", title: "Wound Healing", description: "Supports skin regeneration with antioxidants" },
];

const doshaImpact = [
  { name: "Vata Balance", percentage: 85, color: "bg-blue-500" },
  { name: "Kapha Balance", percentage: 90, color: "bg-orange-500" },
  { name: "Pitta Balance", percentage: 70, color: "bg-green-500" },
];

const properties = [
  { icon: "🔥", label: "Rasa", value: "Pungent, Bitter" },
  { icon: "💧", label: "Guna", value: "Light, Dry, Sharp" },
  { icon: "🌡️", label: "Virya", value: "Hot" },
  { icon: "✨", label: "Vipaka", value: "Pungent" },
];

const therapeuticUses = [
  { icon: "💪", label: "Digestive Health" },
  { icon: "🧘", label: "Metabolic Support" },
  { icon: "🏃", label: "Weight Management" },
  { icon: "🌿", label: "Detoxification" },
  { icon: "❤️", label: "Heart Health" },
];

const relatedProducts = [
  {
    id: "1",
    name: "Amrutam Kuntal Care Hair Spa",
    description: "Ayurvedic hair spa treatment",
    price: 649,
    rating: 4.5,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400",
  },
  {
    id: "2",
    name: "Amrutam Digestive Churna",
    description: "Traditional digestive aid",
    price: 299,
    rating: 4.4,
    reviews: 245,
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=400",
  },
  {
    id: "3",
    name: "Amrutam Golden Glow Face Pack",
    description: "Herbal face pack",
    price: 549,
    rating: 4.7,
    reviews: 178,
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400",
  },
];

export default function HerbDetail() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-beige to-background py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Herb Image */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=600"
                  alt="Chitrak Herb"
                  className="w-full h-full object-cover rounded-3xl shadow-elegant"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            </div>

            {/* Herb Info */}
            <div className="space-y-6">
              <div>
                <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Ayurvedic Herb
                </span>
                <h1 className="font-heading text-3xl lg:text-4xl font-bold text-forest mb-2">
                  Chitrak - Plumbago zeylancia
                </h1>
                <p className="text-xl text-muted-foreground">(Sanskrit - चित्रक)</p>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Chitrak, also known as Ceylon Leadwort or Doctorbush, is a powerful Ayurvedic herb
                valued for its ability to improve digestion, reduce inflammation, and detoxify the
                body. It is great for boosting metabolism, enhancing skin health, and easing joint
                pain.
              </p>

              <div className="space-y-4">
                <h3 className="font-heading font-semibold text-forest text-xl">Why Chitrak?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">✓</span>
                    <span>Enhances digestive fire and helps in the treatment of digestive disorders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">✓</span>
                    <span>Acts as a powerful detoxifier, supporting natural body cleansing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">✓</span>
                    <span>Contains properties that help in treating skin disorders</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tridosha Impact */}
      <section className="bg-background py-12">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl font-bold text-forest text-center mb-8">
            Tridosha Impact
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {doshaImpact.map((dosha) => (
              <div key={dosha.name} className="text-center">
                <div className="relative w-28 h-28 mx-auto mb-4">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="56"
                      cy="56"
                      r="50"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-muted"
                    />
                    <circle
                      cx="56"
                      cy="56"
                      r="50"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${(dosha.percentage / 100) * 314} 314`}
                      className={dosha.name.includes("Vata") ? "text-blue-500" : dosha.name.includes("Kapha") ? "text-orange-500" : "text-primary"}
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-lg font-bold">
                    {dosha.percentage}%
                  </span>
                </div>
                <p className="font-medium text-forest">{dosha.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-beige py-12">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl font-bold text-forest text-center mb-8">Benefits</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-card rounded-xl p-6 shadow-soft hover:shadow-elegant transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-2xl mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-heading font-semibold text-forest mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ayurvedic Properties */}
      <section className="bg-background py-12">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl font-bold text-forest text-center mb-8">
            Ayurvedic Properties
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {properties.map((prop, idx) => (
              <div
                key={idx}
                className="bg-card rounded-xl p-4 text-center border border-border"
              >
                <div className="text-2xl mb-2">{prop.icon}</div>
                <p className="text-sm text-muted-foreground">{prop.label}</p>
                <p className="font-medium text-forest">{prop.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Formulations */}
      <section className="bg-beige py-12">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl font-bold text-forest text-center mb-8">
            Important Formulations
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-xl p-6 shadow-soft">
              <p className="text-muted-foreground mb-4">
                Chitrak is used in various classical Ayurvedic formulations including:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span>Chitrakadi Vati - For digestive disorders</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span>Agnitundi Vati - For enhancing digestive fire</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span>Chitrak Haritaki - For respiratory health</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Therapeutic Uses */}
      <section className="bg-background py-12">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl font-bold text-forest text-center mb-8">
            Therapeutic Uses
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {therapeuticUses.map((use, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-card px-6 py-3 rounded-full border border-border"
              >
                <span className="text-xl">{use.icon}</span>
                <span className="font-medium">{use.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plant Parts & Sources */}
      <section className="bg-beige py-12">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl font-bold text-forest text-center mb-8">
            Plant Parts and Its Sources
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-card rounded-xl p-6 text-center shadow-soft">
              <div className="text-3xl mb-3">🌱</div>
              <h3 className="font-semibold text-forest mb-2">Roots</h3>
              <p className="text-sm text-muted-foreground">Most commonly used part</p>
            </div>
            <div className="bg-card rounded-xl p-6 text-center shadow-soft">
              <div className="text-3xl mb-3">🍃</div>
              <h3 className="font-semibold text-forest mb-2">Aerial Parts</h3>
              <p className="text-sm text-muted-foreground">Used in some formulations</p>
            </div>
            <div className="bg-card rounded-xl p-6 text-center shadow-soft">
              <div className="text-3xl mb-3">🏔️</div>
              <h3 className="font-semibold text-forest mb-2">Location</h3>
              <p className="text-sm text-muted-foreground">Found in tropical regions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contraindications */}
      <section className="bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-accent/10 border border-accent/30 rounded-xl p-6">
              <h2 className="font-heading text-xl font-bold text-accent-dark mb-4">
                ⚠️ Contraindications
              </h2>
              <p className="text-muted-foreground">
                Do not use Chitrak preparations if you are pregnant, lactating, or have any active
                gastric ulcers. Consult an Ayurvedic practitioner before use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="bg-beige py-12">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl font-bold text-forest text-center mb-8">
            Products with "Chitrak" as Primary Ingredient
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
