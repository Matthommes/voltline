import AboutSection from "@/components/about";
import CallToAction from "@/components/callToAction";
import FeaturedProducts from "@/components/featured";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import ProductCategories from "@/components/productcategories";
// import ProductCategories from "@/components/productCategories";
import Testimonials from "@/components/testimonials";
import WhyChooseUs from "@/components/whyChooseUs";


export default function Landing(){
    return (
        <main>
            <Header />
            <Hero />
            <ProductCategories />
        <AboutSection />
        <FeaturedProducts />
        <WhyChooseUs />
        <Testimonials />
        <CallToAction />
        <Footer />
        </main>
    )
}