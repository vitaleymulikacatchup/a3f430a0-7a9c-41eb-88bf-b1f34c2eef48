"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import AboutPhoneTimeline from '@/components/sections/about/AboutPhoneTimeline';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import FeatureCardFour from '@/components/sections/feature/FeatureCardFour';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Leaf, Flame, Users, Home, Instagram, Facebook, Twitter } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
      contentWidth="small"
      sizing="medium"
      background="radialGradient"
      cardStyle="gradient-bordered"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="solid"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Brew Haven"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Reserve Now", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Brew Haven"
          description="Discover the perfect blend. Premium coffee crafted with passion and served with care."
          tag="Specialty Coffee"
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764675483271-taj0uokk.jpg",
              imageAlt: "Espresso with latte art"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764675485043-yx06mfzm.jpg",
              imageAlt: "Cappuccino with foam art"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764675486443-6a60ec92.jpg",
              imageAlt: "Cold brew iced coffee"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764675487722-f4kuz5yq.jpg",
              imageAlt: "Modern coffee shop interior"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764675489880-59lrfdhk.jpg",
              imageAlt: "Premium coffee beans"
            }
          ]}
          buttons={[
            { text: "View Menu", href: "menu" },
            { text: "Reserve Table", href: "contact" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutPhoneTimeline
          tag="Our Story"
          title="Crafted With Passion"
          description="Since 2015, Brew Haven has been dedicated to sourcing the finest coffee beans from ethical producers around the world. We believe in quality, sustainability, and creating a welcoming space where coffee lovers can connect."
          phoneOne={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764675506442-atd963cn.jpg",
            imageAlt: "Cozy modern coffee shop interior"
          }}
          phoneTwo={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764675507772-mb6atgjz.jpg",
            imageAlt: "Professional coffee grinding and preparation"
          }}
          buttons={[
            { text: "Learn More", href: "#" }
          ]}
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardThree
          title="Featured Menu"
          description="Explore our signature drinks and specialty offerings"
          tag="Menu"
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          products={[
            {
              id: "1",
              name: "Signature Espresso",
              price: "$3.50",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764675496085-3sgul34c.jpg",
              imageAlt: "Signature Espresso"
            },
            {
              id: "2",
              name: "Creamy Cappuccino",
              price: "$4.50",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764675497347-i9wzcgbr.jpg",
              imageAlt: "Creamy Cappuccino"
            },
            {
              id: "3",
              name: "Smooth Latte",
              price: "$4.75",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764675498833-tugy8vfv.jpg",
              imageAlt: "Smooth Latte"
            },
            {
              id: "4",
              name: "Bold Macchiato",
              price: "$4.25",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764675500205-tfkrim1g.jpg",
              imageAlt: "Bold Macchiato"
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardFour
          title="Why Choose Brew Haven"
          description="We stand out through quality, care, and community"
          tag="Our Values"
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {
              title: "Ethically Sourced",
              description: "We partner directly with coffee farmers to ensure fair trade and sustainable practices.",
              icon: Leaf
            },
            {
              title: "Expert Roasting",
              description: "Each batch is carefully roasted in-house to bring out unique flavors and aromas.",
              icon: Flame
            },
            {
              title: "Skilled Baristas",
              description: "Our team of certified baristas craft each cup with precision and passion.",
              icon: Users
            },
            {
              title: "Cozy Atmosphere",
              description: "A welcoming space designed for connection, work, and relaxation.",
              icon: Home
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="Loved by Our Community"
          description="Hear from our loyal coffee enthusiasts"
          tag="Testimonials"
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah",
              handle: "@sarahcoffee",
              testimonial: "The best coffee I've had in years. The baristas really know their craft!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764675501435-h8ub02km.jpg",
              imageAlt: "Sarah - Coffee enthusiast"
            },
            {
              id: "2",
              name: "Marcus",
              handle: "@marcus_loves_brew",
              testimonial: "Perfect place to work or meet friends. Amazing atmosphere and even better coffee.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764675502743-zlolxvnd.jpg",
              imageAlt: "Marcus - Regular customer"
            },
            {
              id: "3",
              name: "Elena",
              handle: "@elena_espresso",
              testimonial: "The sourcing transparency is refreshing. You can taste the quality in every cup.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764675504048-fshid6oz.jpg",
              imageAlt: "Elena - Quality appreciator"
            },
            {
              id: "4",
              name: "James",
              handle: "@james_coffeelover",
              testimonial: "A true gem in the neighborhood. Been coming here for 3 years and never disappointed.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764675505181-63ewuqll.jpg",
              imageAlt: "James - Loyal customer"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Stay Updated"
          title="Join Our Coffee Community"
          description="Subscribe to get exclusive brewing tips, new menu items, and special offers delivered to your inbox."
          inputPlaceholder="Your email address"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Brew Haven"
          copyrightText="© Brew Haven Coffee, 2025. All rights reserved."
          columns={[
            {
              title: "Cafe",
              items: [
                { label: "Hours", href: "#" },
                { label: "Location", href: "#" },
                { label: "Menu", href: "menu" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Values", href: "#" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Contact", href: "contact" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com",
              ariaLabel: "Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com",
              ariaLabel: "Facebook"
            },
            {
              icon: Twitter,
              href: "https://twitter.com",
              ariaLabel: "Twitter"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}