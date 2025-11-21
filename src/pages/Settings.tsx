import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/contexts/ThemeContext'
import { Settings as SettingsIcon, Sun, Moon, Info, Shield, Heart } from 'lucide-react'

export default function Settings() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <SettingsIcon className="h-8 w-8 text-blue-500" />
          <h1 className="text-3xl md:text-4xl font-bold">Settings</h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Customize your experience
        </p>
      </div>

      {/* Theme Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {theme === 'dark' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            Appearance
          </CardTitle>
          <CardDescription>
            Choose between dark and light mode
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Theme</p>
              <p className="text-sm text-muted-foreground">
                Current theme: <span className="capitalize">{theme}</span>
              </p>
            </div>
            <Button onClick={toggleTheme} variant="outline" size="lg">
              {theme === 'dark' ? (
                <>
                  <Sun className="h-4 w-4 mr-2" />
                  Switch to Light Mode
                </>
              ) : (
                <>
                  <Moon className="h-4 w-4 mr-2" />
                  Switch to Dark Mode
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* About */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            About Rheum Master
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Mission</h3>
            <p className="text-sm text-muted-foreground">
              Rheum Master is a comprehensive educational platform designed to help medical students,
              residents, and healthcare professionals master rheumatologic and autoimmune diseases through
              pattern recognition, serology interpretation, and clinical reasoning.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Features</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Comprehensive modules on RA, SLE, vasculitides, gout, pseudogout, and AS</li>
              <li>• Interactive case-based learning tools</li>
              <li>• Serology and crystal interpretation engines</li>
              <li>• Assessment questions with detailed explanations</li>
              <li>• Comprehensive glossary of rheumatologic terms</li>
              <li>• Mobile-first, offline-capable design</li>
              <li>• Dark mode for comfortable studying</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Content Coverage</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="p-2 border rounded">
                <p className="font-medium">Rheumatoid Arthritis</p>
                <p className="text-xs text-muted-foreground">Symmetric polyarthritis, RF/anti-CCP</p>
              </div>
              <div className="p-2 border rounded">
                <p className="font-medium">SLE</p>
                <p className="text-xs text-muted-foreground">Multi-system autoimmune disease</p>
              </div>
              <div className="p-2 border rounded">
                <p className="font-medium">Vasculitides</p>
                <p className="text-xs text-muted-foreground">GCA, Takayasu, PAN, ANCA</p>
              </div>
              <div className="p-2 border rounded">
                <p className="font-medium">Crystal Arthropathies</p>
                <p className="text-xs text-muted-foreground">Gout and pseudogout</p>
              </div>
              <div className="p-2 border rounded">
                <p className="font-medium">Ankylosing Spondylitis</p>
                <p className="text-xs text-muted-foreground">Inflammatory back pain, HLA-B27</p>
              </div>
              <div className="p-2 border rounded">
                <p className="font-medium">Assessment</p>
                <p className="text-xs text-muted-foreground">15+ MCQs with explanations</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Version</h3>
            <p className="text-sm text-muted-foreground">
              Rheum Master v1.0.0
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Medical Disclaimer */}
      <Card className="border-amber-500/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-amber-600 dark:text-amber-500">
            <Shield className="h-5 w-5" />
            Medical Disclaimer
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p className="font-semibold">
            IMPORTANT: This application is for educational purposes only.
          </p>

          <div className="space-y-2 text-muted-foreground">
            <p>
              <strong>Not for Clinical Use:</strong> The information provided in Rheum Master is intended
              solely for educational and informational purposes. It is NOT intended to be a substitute for
              professional medical advice, diagnosis, or treatment.
            </p>

            <p>
              <strong>Consult Healthcare Professionals:</strong> Always seek the advice of qualified healthcare
              providers with any questions regarding medical conditions, diagnoses, or treatment options.
              Never disregard professional medical advice or delay seeking it because of information presented
              in this application.
            </p>

            <p>
              <strong>No Patient Care Decisions:</strong> The clinical scenarios, cases, serologies, and treatment
              frameworks presented are conceptual and synthetic. They should not be used to make patient care decisions.
            </p>

            <p>
              <strong>No Treatment Recommendations:</strong> While this application discusses treatment concepts,
              these are educational overviews only. Actual treatment must be individualized based on patient-specific
              factors, current evidence, and clinical judgment.
            </p>

            <p>
              <strong>Synthetic Data Only:</strong> All laboratory values, imaging descriptions, and case scenarios
              are synthetic and created for educational purposes. They do not represent real patients.
            </p>

            <p>
              <strong>Medical Emergency:</strong> If you are experiencing a medical emergency, call your local
              emergency number immediately. Do not rely on this application for emergency medical guidance.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Educational Use Disclaimer */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            Educational Use Statement
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          <p>
            This application is designed as a learning tool for medical students, residents, fellows, and
            healthcare professionals studying rheumatology and internal medicine.
          </p>

          <p>
            <strong>Learning Objectives:</strong>
          </p>
          <ul className="space-y-1 ml-4">
            <li>• Recognize patterns of autoimmune and rheumatologic diseases</li>
            <li>• Interpret serologies and laboratory findings in clinical context</li>
            <li>• Differentiate between similar-presenting conditions</li>
            <li>• Understand diagnostic approaches and clinical reasoning</li>
            <li>• Learn high-yield features for board examinations</li>
          </ul>

          <p>
            <strong>Assessment Feature:</strong> The assessment questions are designed to reinforce learning
            and test knowledge retention. They are not scored or tracked, allowing learners to focus on
            understanding concepts rather than performance metrics.
          </p>

          <p>
            <strong>Continuous Learning:</strong> Rheumatology is an evolving field. Guidelines, treatments,
            and best practices change over time. This application represents educational concepts at the time
            of creation and should be supplemented with current medical literature and clinical guidelines.
          </p>
        </CardContent>
      </Card>

      {/* Privacy Notice */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Privacy & Data
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-2">
          <p>
            <strong>No Personal Data Collection:</strong> Rheum Master does not collect, store, or transmit
            any personal information.
          </p>

          <p>
            <strong>No Tracking:</strong> Your progress, quiz answers, and usage patterns are not tracked or
            recorded. Each session is independent.
          </p>

          <p>
            <strong>Local Storage Only:</strong> The only data stored locally on your device is your theme
            preference (dark or light mode). This is stored in your browser's local storage and is not
            transmitted anywhere.
          </p>

          <p>
            <strong>Offline Capability:</strong> This application works offline using service workers. No internet
            connection is required after initial load.
          </p>
        </CardContent>
      </Card>

      {/* Credits */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5" />
            Acknowledgments
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          <p>
            Developed with dedication to medical education and the advancement of rheumatology knowledge.
            Built using modern web technologies including React, TypeScript, and Tailwind CSS.
          </p>
          <p className="mt-3">
            Special thanks to the medical education community for inspiration and to all learners
            dedicated to mastering rheumatologic diseases.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
