import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Heart, AlertCircle, Microscope, Activity } from 'lucide-react'

export default function SLE() {
  const [selectedOrgan, setSelectedOrgan] = useState<string>('renal')

  const organManifestations = {
    renal: {
      name: 'Lupus Nephritis',
      features: [
        'Proteinuria, hematuria, cellular casts',
        'Classes I-VI based on biopsy',
        'Class III/IV (proliferative) most severe',
        'Associated with anti-dsDNA and low complement',
        'Can progress to ESRD if untreated'
      ],
      monitoring: 'Urinalysis, urine protein:creatinine ratio, serum creatinine'
    },
    skin: {
      name: 'Mucocutaneous',
      features: [
        'Malar (butterfly) rash - spares nasolabial folds',
        'Discoid lesions - scarring, hypopigmentation',
        'Photosensitivity',
        'Oral/nasal ulcers (usually painless)',
        'Alopecia (non-scarring or scarring)',
        'Raynaud phenomenon'
      ],
      monitoring: 'Clinical examination, avoid UV exposure'
    },
    cardiac: {
      name: 'Cardiac & Pulmonary',
      features: [
        'Pericarditis (most common cardiac manifestation)',
        'Myocarditis',
        'Libman-Sacks endocarditis (non-bacterial)',
        'Pleuritis and pleural effusions',
        'Accelerated atherosclerosis',
        'Pulmonary hypertension (rare but severe)'
      ],
      monitoring: 'Echocardiogram, chest imaging, cardiovascular risk assessment'
    },
    neuro: {
      name: 'Neuropsychiatric',
      features: [
        'Seizures',
        'Psychosis',
        'Cognitive dysfunction',
        'Headaches (including aseptic meningitis)',
        'Cerebrovascular events',
        'Peripheral neuropathy'
      ],
      monitoring: 'Neurological exam, consider CSF analysis, brain imaging'
    },
    heme: {
      name: 'Hematologic',
      features: [
        'Autoimmune hemolytic anemia (Coombs positive)',
        'Leukopenia (lymphopenia common)',
        'Thrombocytopenia',
        'Antiphospholipid antibodies → thrombosis',
        'Increased risk of infections'
      ],
      monitoring: 'CBC, Coombs test, antiphospholipid antibodies'
    },
    msk: {
      name: 'Musculoskeletal',
      features: [
        'Inflammatory arthritis (non-erosive)',
        'Arthralgias and myalgias',
        'Jaccoud arthropathy (reducible deformities)',
        'Myositis (overlap syndrome)',
        'Avascular necrosis (especially with steroid use)'
      ],
      monitoring: 'Joint examination, imaging if needed'
    }
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Heart className="h-8 w-8 text-purple-500" />
          <h1 className="text-3xl md:text-4xl font-bold">Systemic Lupus Erythematosus</h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Multi-system autoimmune disease with ANA positivity and diverse organ involvement
        </p>
      </div>

      {/* Quick Facts */}
      <Card>
        <CardHeader>
          <CardTitle>Core Diagnostic Features</CardTitle>
          <CardDescription>
            Diagnosis requires clinical + laboratory criteria
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Classic Triad</h4>
              <div className="space-y-1 text-sm">
                <p>1. <strong>Constitutional symptoms</strong> (fever, fatigue, weight loss)</p>
                <p>2. <strong>Organ involvement</strong> (renal, skin, joints, serositis)</p>
                <p>3. <strong>Autoantibodies</strong> (ANA, anti-dsDNA, anti-Smith)</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Demographics</h4>
              <ul className="space-y-1 text-sm">
                <li>• Predominantly affects women (9:1 ratio)</li>
                <li>• Peak onset: childbearing years (15-45)</li>
                <li>• More common and severe in African Americans, Hispanics, Asians</li>
                <li>• Environmental triggers: UV light, infections, medications</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="serology">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="serology">Serology</TabsTrigger>
          <TabsTrigger value="organs">Organ Systems</TabsTrigger>
          <TabsTrigger value="treatment">Treatment</TabsTrigger>
        </TabsList>

        <TabsContent value="serology" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Microscope className="h-5 w-5" />
                Autoantibody Profile
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold">ANA (Antinuclear Antibody)</h4>
                  <div className="text-sm text-muted-foreground mt-1 space-y-1">
                    <p><strong>Sensitivity:</strong> {'>'} 95% (almost all SLE patients are ANA+)</p>
                    <p><strong>Specificity:</strong> Low - can be positive in healthy individuals, other autoimmune diseases</p>
                    <p><strong>Patterns:</strong> Homogeneous and peripheral patterns most common in SLE</p>
                    <p className="text-yellow-600 dark:text-yellow-500">⚠️ Negative ANA makes SLE very unlikely</p>
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold">Anti-dsDNA (Anti-double stranded DNA)</h4>
                  <div className="text-sm text-muted-foreground mt-1 space-y-1">
                    <p><strong>Specificity:</strong> Very high for SLE (95-98%)</p>
                    <p><strong>Sensitivity:</strong> ~60-70%</p>
                    <p><strong>Clinical correlation:</strong> High titers associated with lupus nephritis</p>
                    <p><strong>Monitoring:</strong> Levels fluctuate with disease activity</p>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold">Anti-Smith (Anti-Sm)</h4>
                  <div className="text-sm text-muted-foreground mt-1 space-y-1">
                    <p><strong>Specificity:</strong> Highest for SLE (99%)</p>
                    <p><strong>Sensitivity:</strong> Low (~30%)</p>
                    <p><strong>Clinical use:</strong> Highly specific marker when positive</p>
                    <p><strong>Limitation:</strong> Does not correlate with disease activity</p>
                  </div>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold">Complement Levels (C3, C4)</h4>
                  <div className="text-sm text-muted-foreground mt-1 space-y-1">
                    <p><strong>Pattern:</strong> Low C3 and C4 in active SLE (consumption)</p>
                    <p><strong>Monitoring:</strong> Useful for tracking disease activity</p>
                    <p><strong>Association:</strong> Low complements with active nephritis and high anti-dsDNA</p>
                  </div>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold">Other Antibodies</h4>
                  <div className="text-sm text-muted-foreground mt-1">
                    <p><strong>Anti-SSA/Ro:</strong> Neonatal lupus, photosensitivity, heart block in newborns</p>
                    <p><strong>Anti-SSB/La:</strong> Often with anti-SSA</p>
                    <p><strong>Antiphospholipid antibodies:</strong> Thrombosis, pregnancy loss (antiphospholipid syndrome)</p>
                    <p><strong>Anti-histone:</strong> Drug-induced lupus</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="organs" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Organ System Involvement
              </CardTitle>
              <CardDescription>
                Select an organ system to view manifestations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {Object.entries(organManifestations).map(([key, organ]) => (
                  <Button
                    key={key}
                    variant={selectedOrgan === key ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedOrgan(key)}
                  >
                    {organ.name}
                  </Button>
                ))}
              </div>

              <Card className="border-primary">
                <CardHeader>
                  <CardTitle className="text-lg">
                    {organManifestations[selectedOrgan as keyof typeof organManifestations].name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Features</h4>
                    <ul className="space-y-1 text-sm">
                      {organManifestations[selectedOrgan as keyof typeof organManifestations].features.map((feature, idx) => (
                        <li key={idx}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <h4 className="font-semibold text-sm mb-1">Monitoring</h4>
                    <p className="text-sm">
                      {organManifestations[selectedOrgan as keyof typeof organManifestations].monitoring}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="treatment" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Treatment Framework (Conceptual)</CardTitle>
              <CardDescription>
                Educational overview - not for clinical decision-making
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold">Mild Disease</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    <strong>Features:</strong> Arthritis, rash, fatigue
                    <br />
                    <strong>Treatment:</strong> NSAIDs, hydroxychloroquine, low-dose steroids
                    <br />
                    <strong>Note:</strong> Hydroxychloroquine recommended for all SLE patients (reduces flares, improves survival)
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold">Moderate Disease</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    <strong>Features:</strong> Serositis, significant arthritis
                    <br />
                    <strong>Treatment:</strong> Moderate-dose steroids, hydroxychloroquine, consider immunosuppressants
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold">Severe/Organ-Threatening Disease</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    <strong>Features:</strong> Lupus nephritis, CNS lupus, severe hemolytic anemia, thrombocytopenia
                    <br />
                    <strong>Treatment:</strong> High-dose steroids, cyclophosphamide or mycophenolate, rituximab, belimumab
                    <br />
                    <strong>Goal:</strong> Induce remission, then maintain with less toxic agents
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold">Supportive Care</h4>
                  <div className="text-sm text-muted-foreground mt-1">
                    <p>• Sun protection (sunscreen, protective clothing)</p>
                    <p>• Cardiovascular risk reduction (statins, BP control)</p>
                    <p>• Osteoporosis prevention (calcium, vitamin D, bisphosphonates)</p>
                    <p>• Infection prevention (vaccinations, but avoid live vaccines on immunosuppression)</p>
                    <p>• Contraception counseling (avoid estrogen-containing in high-risk patients)</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Clinical Pearls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5" />
            Clinical Pearls & Pitfalls
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <p>• <strong>ANA alone is not diagnostic:</strong> 5-15% of healthy people are ANA positive</p>
            <p>• <strong>Malar rash spares nasolabial folds:</strong> Key distinguishing feature from other facial rashes</p>
            <p>• <strong>Anti-dsDNA correlates with nephritis:</strong> Rising titers may herald renal flare</p>
            <p>• <strong>Drug-induced lupus:</strong> Hydralazine, procainamide, isoniazid. Anti-histone positive. Resolves with drug cessation</p>
            <p>• <strong>Lupus arthritis is non-erosive:</strong> Unlike RA, joint deformities are reducible (Jaccoud arthropathy)</p>
            <p>• <strong>Pregnancy in SLE:</strong> Higher risk of flares, preeclampsia, fetal loss. Plan pregnancies during remission</p>
            <p>• <strong>Infection vs flare:</strong> Can be difficult to distinguish; both can cause fever, elevated ESR (but not CRP in flare)</p>
            <p>• <strong>Hydroxychloroquine for all:</strong> Improves survival, reduces flares, protects against organ damage</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
