import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { 
  BarChart3, 
  Users, 
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Globe,
  Target,
  Rocket,
  Mail,
  Phone,
  MapPin,
  Code,
  Palette,
  Megaphone,
  Search,
  Share2,
  Camera,
  DollarSign,
  Quote
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollAnimation } from '@/components/scroll-animation';
// App Constants
export const APP_CONFIG = {
  name: 'DIGITAL THRIV',
  dashboardUrl: 'https://dashboard.digitalthriv.com',
  logo: 'https://ik.imagekit.io/digitalthriv/digital-thriv/dt-logo.png',
  description: 'Order Confirmation and Verification Dashboard',
  whatsappNumber: '6390246088',
  contactEmail: 'Support@digitalthriv.com',
  contactPhone: '6390246088',
  contactAddress: 'BANDA, Uttar Pradesh 208025, India',
  whatsappCommunityUrl: 'https://chat.whatsapp.com/HzHEgYFDOFdKOBAfnMribl',
} as const;


export default async function Home() {


  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 scroll-smooth">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Image 
                src={APP_CONFIG.logo} 
                alt="Digital Thriv Logo" 
                width={32} 
                height={32}
                className="h-8 w-8 rounded-full"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                {APP_CONFIG.name}
              </span>
        </div>
            <div className="flex items-center gap-4">
              {/* <ThemeToggle /> */}
          <Link href="/auth/signin">
            <Button size="lg">Sign In</Button>
          </Link>
        </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Web • Branding • Digital Marketing
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Build Your Brand.
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                {' '}Accelerate Growth.
              </span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
              With Digital Thriv — your partner in web, branding & digital marketing solutions that deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="w-full sm:w-auto text-xl px-12 py-6 h-auto shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <a href="https://wa.me/916390246088?text=Hello%2C%20interested%20in%20your%20web%20%26%20marketing%20services" target="_blank" rel="noopener noreferrer">
                  Let&apos;s Talk
                  <ArrowRight className="ml-2 h-6 w-6" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto text-xl px-12 py-6 h-auto shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <a href="https://wa.me/916390246088?text=Hello%2C%20I%27d%20like%20to%20get%20started%20with%20your%20services" target="_blank" rel="noopener noreferrer">
                  Get Started
                  <Rocket className="ml-2 h-6 w-6" />
                </a>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Custom digital strategies. Transparent pricing. Real growth.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Digital Thriv?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We don&apos;t just deliver projects — we build partnerships that drive real business growth.
              </p>
            </div>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation delay={100}>
              <div className="text-center space-y-4 p-6 rounded-lg bg-background border shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Tailored Solutions</h3>
                <p className="text-sm text-muted-foreground">
                  We don&apos;t believe in one-size-fits-all. Every strategy is customized for your business goals.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <div className="text-center space-y-4 p-6 rounded-lg bg-background border shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Performance Focused</h3>
                <p className="text-sm text-muted-foreground">
                  From click to conversion, every campaign is optimized for maximum ROI.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={300}>
              <div className="text-center space-y-4 p-6 rounded-lg bg-background border shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-lg flex items-center justify-center">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">End-to-End Service</h3>
                <p className="text-sm text-muted-foreground">
                  Web ➝ Branding ➝ Marketing — we provide full-stack digital support.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={400}>
              <div className="text-center space-y-4 p-6 rounded-lg bg-background border shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-lg flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Transparent & Affordable</h3>
                <p className="text-sm text-muted-foreground">
                  Clear pricing, no hidden costs, packages starting from INR 5,000.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={500}>
              <div className="text-center space-y-4 p-6 rounded-lg bg-background border shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Data-Driven Decisions</h3>
                <p className="text-sm text-muted-foreground">
                  We rely on analytics and insights, not guesswork.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={600}>
              <div className="text-center space-y-4 p-6 rounded-lg bg-background border shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Long-Term Partnership</h3>
                <p className="text-sm text-muted-foreground">
                  We see ourselves as an extension of your team.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive digital solutions to elevate your brand and drive growth.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Cards */}
            <ScrollAnimation delay={100}>
              <Card className="border-2 hover:border-primary/50 hover:-translate-y-2 transition-all duration-300">
              <CardHeader>
                <Code className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Web Development & Design</CardTitle>
                <CardDescription>
                  Responsive, SEO-optimized websites engineered for performance, speed & usability.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                    Mobile-responsive design
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                    SEO optimization
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                    Fast loading speeds
                  </li>
                </ul>
              </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <Card className="border-2 hover:border-primary/50 hover:-translate-y-2 transition-all duration-300">
                <CardHeader>
                  <Palette className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Brand Strategy & Identity</CardTitle>
                  <CardDescription>
                    Logo design, brand guidelines, positioning, and messaging to create a consistent identity.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      Logo design & branding
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      Brand guidelines
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      Consistent messaging
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <Card className="border-2 hover:border-primary/50 hover:-translate-y-2 transition-all duration-300">
                <CardHeader>
                  <Megaphone className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Digital Marketing & Advertising</CardTitle>
                  <CardDescription>
                    Paid campaigns (SEM, social ads), content marketing, email marketing — designed to convert.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      Paid advertising campaigns
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      Content marketing
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      Email marketing
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={400}>
              <Card className="border-2 hover:border-primary/50 hover:-translate-y-2 transition-all duration-300">
                <CardHeader>
                  <Search className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>SEO & Content Optimization</CardTitle>
                  <CardDescription>
                    Technical SEO, on-page & off-page, content strategy — to boost organic reach.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      Technical SEO
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      Content strategy
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      Organic reach boost
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={500}>
              <Card className="border-2 hover:border-primary/50 hover:-translate-y-2 transition-all duration-300">
                <CardHeader>
                  <Share2 className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Social Media Management</CardTitle>
                  <CardDescription>
                    Strategy, design, posting, engagement — maintain a strong brand presence where your audience is.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      Social media strategy
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      Content creation
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      Community engagement
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={600}>
              <Card className="border-2 hover:border-primary/50 hover:-translate-y-2 transition-all duration-300">
                <CardHeader>
                  <Camera className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Media & Advertising</CardTitle>
                  <CardDescription>
                    Campaign planning, ad creatives, channel mix — for effective brand reach and awareness.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      Campaign planning
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      Ad creatives
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      Channel optimization
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Workflow in 4 Steps
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A proven process that delivers results every time.
              </p>
            </div>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation delay={100}>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl hover:scale-110 transition-transform duration-300">
                  1
                </div>
                <h3 className="font-semibold text-lg">Discovery & Planning</h3>
                <p className="text-sm text-muted-foreground">
                  We begin by understanding your goals, audience, and competitive landscape.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl hover:scale-110 transition-transform duration-300">
                  2
                </div>
                <h3 className="font-semibold text-lg">Design & Strategy</h3>
                <p className="text-sm text-muted-foreground">
                  Branding, wireframes, and campaign strategy take shape.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={300}>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl hover:scale-110 transition-transform duration-300">
                  3
                </div>
                <h3 className="font-semibold text-lg">Build & Execute</h3>
                <p className="text-sm text-muted-foreground">
                  We develop your site, launch campaigns, create content, and optimize.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={400}>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl hover:scale-110 transition-transform duration-300">
                  4
                </div>
                <h3 className="font-semibold text-lg">Monitor & Grow</h3>
                <p className="text-sm text-muted-foreground">
                  Continuous testing, analytics, refinement, reporting, and scaling.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real feedback from businesses we&apos;ve helped grow.
              </p>
            </div>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation delay={100}>
              <Card className="border-2 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-sm text-muted-foreground mb-4">
                  &quot;Working with Digital Thriv transformed our online presence. Their team revamped our website, improved our SEO, and our traffic doubled in just 3 months.&quot;
                </p>
                <div className="font-semibold">Aarav Mehta</div>
                <div className="text-sm text-muted-foreground">Founder of FitFuel India</div>
              </CardContent>
              </Card>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <Card className="border-2 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-sm text-muted-foreground mb-4">
                  &quot;Digital Thriv&apos;s social media strategy helped us go viral. We saw a 300% increase in engagement and conversions from Instagram and Facebook.&quot;
                </p>
                <div className="font-semibold">Sneha Kapoor</div>
                <div className="text-sm text-muted-foreground">CEO of GlowAura Skincare</div>
              </CardContent>
              </Card>
            </ScrollAnimation>
            <ScrollAnimation delay={300}>
              <Card className="border-2 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-sm text-muted-foreground mb-4">
                  &quot;The team at Digital Thriv understands startups. They built us a stunning website, handled our launch campaign, and provided ongoing support that feels like an extension of our own team.&quot;
                </p>
                <div className="font-semibold">Rohit Verma</div>
                <div className="text-sm text-muted-foreground">Co-Founder of LearnLoop EdTech</div>
              </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let&apos;s Get Started
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tell us your vision and we&apos;ll make it real. No fluff, just results.
              </p>
            </div>
          </ScrollAnimation>
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Get in Touch</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <ScrollAnimation delay={200}>
                    <div className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-background border hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                    <Mail className="h-8 w-8 text-primary" />
                    <span className="font-medium">Email</span>
                    <span className="text-sm text-muted-foreground">Sales@digitalthriv.com</span>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation delay={300}>
                    <div className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-background border hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                    <Phone className="h-8 w-8 text-primary" />
                    <span className="font-medium">Whatsapp</span>
                    <span className="text-sm text-muted-foreground">6390246088</span>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation delay={400}>
                    <div className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-background border hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                    <MapPin className="h-8 w-8 text-primary" />
                    <span className="font-medium">Location</span>
                    <span className="text-sm text-muted-foreground">Banda (210001), UP, India</span>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
              <ScrollAnimation delay={500}>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Quick Response</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    We typically respond to all inquiries within 24 hours. For urgent projects, 
                    feel free to call us directly or reach out via WhatsApp.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Digital Presence?
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={100}>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join businesses that trust Digital Thriv for their digital growth
            </p>
          </ScrollAnimation>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ScrollAnimation delay={200}>
              <Button 
                size="lg" 
                variant="secondary" 
                className="w-full sm:w-auto text-xl px-12 py-6 h-auto shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              asChild
            >
              <a href="https://wa.me/919429692670?text=Hello%2C%20I%27d%20like%20to%20start%20my%20project%20with%20Digital%20Thriv" target="_blank" rel="noopener noreferrer">
                Start Your Project
                <Rocket className="ml-2 h-6 w-6" />
              </a>
              </Button>
            </ScrollAnimation>
            <ScrollAnimation delay={300}>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto text-xl px-12 py-6 h-auto shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-transparent text-white border-white hover:bg-white/10"
              asChild
            >
              <a href="https://wa.me/919429692670?text=Hello%2C%20I%27d%20like%20to%20schedule%20a%20call%20to%20discuss%20my%20project" target="_blank" rel="noopener noreferrer">
                Schedule a Call
                <Phone className="ml-2 h-6 w-6" />
              </a>
              </Button>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted/50 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-sm text-muted-foreground">
            <div className="space-y-2">
              <p className="text-base font-semibold text-foreground">Need support?</p>
              <p>
                Email us at{' '}
                <a href={`mailto:${APP_CONFIG.contactEmail}`} className="text-primary underline">
                  {APP_CONFIG.contactEmail}
                </a>{' '}
                or call{' '}
                <a href={`tel:${APP_CONFIG.contactPhone}`} className="text-primary underline">
                  {APP_CONFIG.contactPhone}
                </a>
                .
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-base font-semibold text-foreground">Company</p>
              <ul className="space-y-1">
                <li>
                  <Link href="/privacy-policy" className="hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions" className="hover:text-primary">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/cancellation-and-refund-policy" className="hover:text-primary">
                    Cancellation &amp; Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="text-base font-semibold text-foreground">Visit us</p>
              <p>Banda (210001), UP, India</p>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Digital Thriv. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
