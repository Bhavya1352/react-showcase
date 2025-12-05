import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Visit Us",
    details: [
      "Amrutam Pharmaceuticals Pvt Ltd",
      "Chitragupta Ganj, Nai Sadak",
      "Lashkar, Gwalior - 474001",
    ],
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Call Us",
    details: ["+91-9713171999", "+91-751-2345678"],
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Us",
    details: ["support.amrutam@gmail.com", "info@amrutam.co.in"],
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Working Hours",
    details: ["Monday - Saturday: 9:00 AM - 6:00 PM", "Sunday: Closed"],
  },
];

const faqs = [
  {
    question: "What is Ayurveda?",
    answer:
      "Ayurveda is a 5,000-year-old system of natural healing that originated in India. It emphasizes balance in bodily systems and uses diet, herbal treatment, and yogic breathing.",
  },
  {
    question: "Are your products safe?",
    answer:
      "Yes, all our products are made from 100% natural ingredients and are tested for quality and safety. They follow traditional Ayurvedic formulations.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to most countries worldwide. International shipping typically takes 7-14 business days depending on the destination.",
  },
  {
    question: "Can I consult with an Ayurvedic doctor online?",
    answer:
      "Absolutely! We offer online consultations with certified Ayurvedic practitioners. You can book an appointment through our Find Doctors page.",
  },
];

export default function Contact() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-beige to-background py-12 lg:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-3xl lg:text-4xl font-bold text-forest mb-4">
            Get in Touch
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions about our products or services? We're here to help. Reach out to us and
            we'll respond as soon as we can.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, idx) => (
              <div
                key={idx}
                className="bg-card rounded-xl p-6 border border-border hover:shadow-elegant transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                  {info.icon}
                </div>
                <h3 className="font-heading font-semibold text-forest mb-3">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-sm text-muted-foreground">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="bg-beige py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h2 className="font-heading text-2xl font-bold text-forest mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="Enter your email" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone (Optional)</label>
                  <Input type="tel" placeholder="+91 XXXXX XXXXX" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <select className="w-full rounded-lg border border-border bg-background px-4 py-2">
                    <option>Product Inquiry</option>
                    <option>Order Status</option>
                    <option>Consultation</option>
                    <option>Feedback</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea placeholder="Write your message here..." rows={5} />
                </div>
                <Button className="w-full bg-primary hover:bg-primary-dark py-6">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map */}
            <div className="space-y-6">
              <div className="bg-card rounded-2xl overflow-hidden h-80 lg:h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.064947277285!2d78.1797!3d26.2183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDEzJzA1LjkiTiA3OMKwMTAnNDcuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Amrutam Location"
                />
              </div>

              {/* Quick Contact */}
              <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">
                      Need Quick Assistance?
                    </h3>
                    <p className="text-primary-foreground/80 text-sm mb-4">
                      Chat with our support team for instant help with your queries.
                    </p>
                    <Button variant="secondary" size="sm">
                      Start Live Chat
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-background py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl font-bold text-forest text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-heading font-semibold text-forest mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
