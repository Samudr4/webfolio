import { ContactForm } from "@/components/contact-form";
import { Mail, Phone, MapPin, MessageSquareHeart, MessageCircle } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Me',
  description: 'Get in touch with me for project collaborations, inquiries, or just to say hello.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 animate-fadeIn">
      <header className="mb-16 text-center">
        <MessageSquareHeart className="h-16 w-16 text-primary mx-auto mb-6 animate-fadeIn [animation-delay:0.1s]" />
        <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl animate-fadeIn [animation-delay:0.2s]">
          Get In <span className="text-primary">Touch</span>
        </h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto animate-fadeIn [animation-delay:0.3s]">
          I'm always excited to discuss new projects, innovative ideas, or opportunities to collaborate on something amazing.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-2 space-y-10 animate-fadeIn [animation-delay:0.4s]">
          <div>
            <h2 className="text-3xl font-semibold text-foreground mb-4">Contact Information</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
            Your thoughts and questions are always welcome! Feel free to share them through the form or the contact details below. I'll make sure a response reaches you soon !
            </p>
          </div>
          <div className="space-y-6">
            {[
              { icon: <Mail className="h-7 w-7 text-primary" />, title: "Email", content: <a href="mailto:hello@webfolio.com" className="text-muted-foreground hover:text-primary transition-colors text-lg">samudraksaikia@gmail.com</a> },
              { icon: <Phone className="h-7 w-7 text-primary" />, title: "Phone", content: <p className="text-muted-foreground text-lg">+91 7002197726  </p> },
              { icon: <MessageCircle className="h-7 w-7 text-primary" />, title: "WhatsApp", content: <a href="https://wa.me/917002197726" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-lg">Chat on WhatsApp</a> },
              { icon: <MapPin className="h-7 w-7 text-primary" />, title: "Location", content: <p className="text-muted-foreground text-lg">Guwahati, Assam</p> },
            ].map(item => (
              <div key={item.title} className="flex items-start space-x-4 p-4 bg-card/50 dark:bg-card/20 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 mt-1 bg-primary/10 p-3 rounded-full">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-foreground">{item.title}</h3>
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-3 animate-fadeIn [animation-delay:0.5s]">
          <h2 className="text-3xl font-semibold text-foreground mb-8 text-center md:text-left">Send Me a Message</h2>
          <div className="p-10 bg-card/80 dark:bg-card/30 backdrop-blur-sm rounded-xl shadow-xl creative-card-hover">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
