import { Link } from 'react-router-dom'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import {
  Activity,
  Heart,
  Droplet,
  Bone,
  Sparkles,
  Stethoscope,
  ClipboardList,
  ArrowRight
} from 'lucide-react'

const modules = [
  {
    title: 'Rheumatoid Arthritis',
    path: '/ra',
    icon: Activity,
    description: 'Symmetric polyarthritis, RF/anti-CCP, erosive changes',
    color: 'text-blue-500'
  },
  {
    title: 'Systemic Lupus Erythematosus',
    path: '/sle',
    icon: Heart,
    description: 'Multi-system autoimmune, ANA subtypes, complement levels',
    color: 'text-purple-500'
  },
  {
    title: 'Vasculitides',
    path: '/vasculitis',
    icon: Droplet,
    description: 'GCA, Takayasu, PAN, ANCA-associated vasculitis',
    color: 'text-red-500'
  },
  {
    title: 'Gout',
    path: '/gout',
    icon: Sparkles,
    description: 'Podagra, needle-shaped crystals, negative birefringence',
    color: 'text-yellow-500'
  },
  {
    title: 'Pseudogout',
    path: '/pseudogout',
    icon: Sparkles,
    description: 'Rhomboid crystals, positive birefringence, CPPD',
    color: 'text-amber-500'
  },
  {
    title: 'Ankylosing Spondylitis',
    path: '/as',
    icon: Bone,
    description: 'Inflammatory back pain, sacroiliitis, HLA-B27',
    color: 'text-green-500'
  },
  {
    title: 'Assessment',
    path: '/assessment',
    icon: ClipboardList,
    description: 'Test your knowledge with MCQs and case-based questions',
    color: 'text-indigo-500'
  }
]

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4 py-8">
        <div className="flex items-center justify-center mb-4">
          <Stethoscope size={48} className="text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Rheum Master
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Master rheumatologic and autoimmune diseases through pattern recognition,
          serology interpretation, and clinical reasoning
        </p>
      </div>

      {/* Modules Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((module) => {
          const Icon = module.icon
          return (
            <Link key={module.path} to={module.path}>
              <Card className="h-full transition-all hover:shadow-lg hover:scale-105 cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Icon className={`h-8 w-8 ${module.color}`} />
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-xl mt-4">{module.title}</CardTitle>
                  <CardDescription className="mt-2">
                    {module.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          )
        })}
      </div>

      {/* Quick Info Section */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Clinical Reasoning Framework</CardTitle>
          <CardDescription>Universal approach to rheumatologic diagnosis</CardDescription>
        </CardHeader>
        <CardContent>
          <ol className="space-y-3 list-decimal list-inside text-sm">
            <li>Identify <strong>pattern of joint involvement</strong> (mono/oligo/poly; symmetric/asymmetric)</li>
            <li>Determine <strong>inflammatory vs mechanical</strong> characteristics</li>
            <li>Screen for <strong>systemic features</strong> (rash, fever, neuropathy, renal dysfunction)</li>
            <li>Order targeted <strong>serologies</strong> (RF, anti-CCP, ANA, ANCA, complements)</li>
            <li>Evaluate <strong>organ involvement</strong> (renal, pulmonary, neuro, skin)</li>
            <li>Apply high-yield <strong>diagnostic criteria</strong> conceptually</li>
            <li>Choose conceptual <strong>treatment strategy</strong> tier (NSAIDs → DMARDs → biologics)</li>
            <li>Monitor <strong>progression & complications</strong></li>
          </ol>
        </CardContent>
      </Card>
    </div>
  )
}
