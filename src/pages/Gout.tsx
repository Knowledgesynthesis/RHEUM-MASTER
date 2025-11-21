import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Sparkles, AlertCircle, Microscope } from 'lucide-react'

export default function Gout() {
  const [selectedCase, setSelectedCase] = useState<number | null>(null)

  const crystalCases = [
    {
      id: 1,
      joint: 'First MTP (great toe)',
      presentation: 'Acute onset overnight, exquisite pain, red, swollen, warm',
      crystal: 'Needle-shaped, strong negative birefringence (yellow under parallel light)',
      diagnosis: 'Acute gouty arthritis (podagra)',
      triggers: 'Recent alcohol consumption, dehydration'
    },
    {
      id: 2,
      joint: 'Ankle',
      presentation: 'Acute monoarthritis, severe pain, unable to bear weight',
      crystal: 'Needle-shaped, negative birefringence',
      diagnosis: 'Acute gout',
      triggers: 'Started diuretic therapy one week ago'
    },
    {
      id: 3,
      joint: 'Elbow with visible tophi',
      presentation: 'Chronic recurrent attacks, firm nodules on extensor surfaces',
      crystal: 'Needle-shaped, negative birefringence from tophus',
      diagnosis: 'Chronic tophaceous gout',
      triggers: 'Long-standing untreated hyperuricemia'
    }
  ]

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Sparkles className="h-8 w-8 text-yellow-500" />
          <h1 className="text-3xl md:text-4xl font-bold">Gout</h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Monosodium urate crystal deposition disease causing acute inflammatory arthritis
        </p>
      </div>

      {/* Quick Facts */}
      <Card>
        <CardHeader>
          <CardTitle>Key Features</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2">Classic Presentation</h4>
            <ul className="space-y-1 text-sm">
              <li>• <strong>Podagra:</strong> First MTP joint (hallmark)</li>
              <li>• Sudden onset, often overnight</li>
              <li>• Exquisitely painful, "worst pain ever"</li>
              <li>• Joint appears red, swollen, warm</li>
              <li>• Peak pain within 12-24 hours</li>
              <li>• Self-limited if untreated (days to weeks)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Epidemiology & Risk Factors</h4>
            <ul className="space-y-1 text-sm">
              <li>• More common in men, postmenopausal women</li>
              <li>• Associated with metabolic syndrome</li>
              <li>• Diet: red meat, seafood, alcohol (esp. beer)</li>
              <li>• Medications: diuretics, aspirin (low-dose)</li>
              <li>• Chronic kidney disease</li>
              <li>• Dehydration precipitates attacks</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="crystal">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="crystal">Crystal ID</TabsTrigger>
          <TabsTrigger value="labs">Labs</TabsTrigger>
          <TabsTrigger value="treatment">Treatment</TabsTrigger>
          <TabsTrigger value="cases">Cases</TabsTrigger>
        </TabsList>

        <TabsContent value="crystal" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Microscope className="h-5 w-5" />
                Crystal Identification
              </CardTitle>
              <CardDescription>
                Gold standard for diagnosis: synovial fluid analysis
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-yellow-500/10 border-2 border-yellow-500 rounded-lg">
                <h4 className="font-semibold mb-3">Monosodium Urate Crystals</h4>
                <div className="space-y-2 text-sm">
                  <p><strong>Shape:</strong> Needle-shaped or rod-like</p>
                  <p><strong>Birefringence:</strong> Strong negative birefringence</p>
                  <p><strong>Polarized microscopy:</strong> Yellow when parallel to compensator axis, blue when perpendicular</p>
                  <p><strong>Location:</strong> Intracellular (in neutrophils) or extracellular</p>
                  <p className="mt-3 pt-3 border-t border-yellow-500/30">
                    💡 <strong>Memory aid:</strong> "Gout is <span className="font-semibold">n</span>egative" (yellow = parallel)
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Synovial Fluid Characteristics</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Inflammatory fluid (WBC 2,000-100,000, typically {'>'} 50,000)</li>
                  <li>• Predominantly neutrophils ({'>'} 85%)</li>
                  <li>• May be yellow or cloudy</li>
                  <li>• Gram stain negative (to rule out septic arthritis)</li>
                  <li>• Send for culture even if crystals seen (can coexist with infection)</li>
                </ul>
              </div>

              <div className="p-3 bg-muted rounded-lg">
                <p className="text-sm">
                  <strong>Important:</strong> Crystals can be present during intercritical periods (between attacks) and may be absent during acute attacks. Negative aspiration doesn't rule out gout.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="labs" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Laboratory Findings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold">Serum Uric Acid</h4>
                  <div className="text-sm text-muted-foreground mt-1 space-y-1">
                    <p><strong>Normal range:</strong> {'<'} 7.0 mg/dL (men), {'<'} 6.0 mg/dL (women)</p>
                    <p><strong>Hyperuricemia:</strong> {'>'} 7.0 mg/dL</p>
                    <p className="text-amber-600 dark:text-amber-500">
                      ⚠️ <strong>Critical pearl:</strong> Uric acid may be NORMAL during acute attack (25-40% of cases)
                    </p>
                    <p>• Level can drop during acute inflammation</p>
                    <p>• Hyperuricemia alone doesn't diagnose gout (many people with high uric acid never develop gout)</p>
                    <p>• Best measured 2-4 weeks after acute attack for baseline</p>
                  </div>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold">Inflammatory Markers</h4>
                  <div className="text-sm text-muted-foreground mt-1">
                    <p>• ESR and CRP elevated during acute attack</p>
                    <p>• WBC may be elevated (leukocytosis)</p>
                    <p>• Non-specific findings</p>
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold">24-Hour Urine Uric Acid</h4>
                  <div className="text-sm text-muted-foreground mt-1">
                    <p>• Helps classify as underexcretor vs overproducer</p>
                    <p>• {'<'} 800 mg/day = underexcretion (90% of cases)</p>
                    <p>• {'>'} 800 mg/day = overproduction</p>
                    <p>• Guides therapy choice and assesses kidney stone risk</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Imaging</h4>
                <ul className="space-y-1 text-sm">
                  <li>• <strong>X-ray (chronic gout):</strong> Punched-out erosions with overhanging edges, preserved joint space initially</li>
                  <li>• <strong>Ultrasound:</strong> Double contour sign (urate on cartilage), tophi</li>
                  <li>• <strong>Dual-energy CT:</strong> Can detect urate crystals, useful when diagnosis uncertain</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="treatment" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Treatment Framework</CardTitle>
              <CardDescription>
                Educational overview - not for clinical decision-making
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-3">Acute Attack Management</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold">NSAIDs (First-line)</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Indomethacin traditionally used. Any NSAID at anti-inflammatory dose.
                      Contraindications: CKD, PUD, cardiovascular disease.
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold">Colchicine</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Most effective if started within 24 hours. Lower doses preferred (GI side effects dose-related).
                      Reduce dose in renal insufficiency.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold">Glucocorticoids</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Oral, intra-articular, or systemic. Good option when NSAIDs/colchicine contraindicated.
                      Intra-articular injection for monoarticular involvement.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h3 className="font-semibold text-lg mb-3">Urate-Lowering Therapy (ULT)</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-muted rounded-lg mb-3">
                    <p className="text-sm">
                      <strong>Indications for ULT:</strong> ≥ 2 attacks per year, tophi, erosions on imaging, or urolithiasis
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold">Xanthine Oxidase Inhibitors (First-line ULT)</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Allopurinol (most common) or febuxostat. Start low, titrate to uric acid target {'<'} 6.0 mg/dL.
                      Don't start during acute attack (can worsen it).
                    </p>
                  </div>

                  <div className="border-l-4 border-teal-500 pl-4">
                    <h4 className="font-semibold">Uricosuric Agents</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Probenecid (increases uric acid excretion). Contraindicated in kidney stones and CKD.
                      Use in underexcretors with normal renal function.
                    </p>
                  </div>

                  <div className="border-l-4 border-indigo-500 pl-4">
                    <h4 className="font-semibold">Prophylaxis During ULT Initiation</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Low-dose colchicine or NSAID for first 3-6 months of ULT.
                      Starting ULT can precipitate acute attacks (mobilization of urate deposits).
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h3 className="font-semibold mb-2">Lifestyle Modifications</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Limit purine-rich foods (red meat, organ meats, certain seafood)</li>
                  <li>• Reduce alcohol (especially beer and spirits)</li>
                  <li>• Maintain hydration</li>
                  <li>• Weight loss if obese</li>
                  <li>• Limit high-fructose corn syrup</li>
                  <li>• Consider vitamin C supplementation</li>
                  <li>• Low-fat dairy may be protective</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cases" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Crystal Case Interpreter</CardTitle>
              <CardDescription>
                Select a case to review crystal characteristics and diagnosis
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-3">
                {crystalCases.map((caseItem) => (
                  <Button
                    key={caseItem.id}
                    variant={selectedCase === caseItem.id ? 'default' : 'outline'}
                    className="justify-start text-left h-auto py-3 px-4"
                    onClick={() => setSelectedCase(caseItem.id)}
                  >
                    <div className="w-full">
                      <div className="font-semibold">Case {caseItem.id}</div>
                      <div className="text-sm opacity-80">
                        Joint: {caseItem.joint}
                      </div>
                    </div>
                  </Button>
                ))}
              </div>

              {selectedCase && crystalCases.find(c => c.id === selectedCase) && (() => {
                const caseData = crystalCases.find(c => c.id === selectedCase)!
                return (
                  <Card className="border-primary">
                    <CardHeader>
                      <CardTitle className="text-lg">Case {selectedCase} Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Presentation</h4>
                        <p className="text-sm">{caseData.presentation}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Joint Involved</h4>
                        <Badge>{caseData.joint}</Badge>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Crystal Analysis</h4>
                        <div className="p-3 bg-yellow-500/10 border-l-4 border-yellow-500 rounded">
                          <p className="text-sm">{caseData.crystal}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Precipitating Factors</h4>
                        <p className="text-sm text-muted-foreground">{caseData.triggers}</p>
                      </div>

                      <div className="p-4 bg-blue-500/10 border-l-4 border-blue-500 rounded">
                        <h4 className="font-semibold mb-1">Diagnosis</h4>
                        <p className="text-sm">{caseData.diagnosis}</p>
                      </div>
                    </CardContent>
                  </Card>
                )
              })()}
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
            <p>• <strong>Normal uric acid doesn't rule out gout:</strong> Can be normal during acute attack</p>
            <p>• <strong>Hyperuricemia doesn't diagnose gout:</strong> Many people with high uric acid never develop gout</p>
            <p>• <strong>Don't start ULT during acute attack:</strong> Wait until attack resolves, then start with prophylaxis</p>
            <p>• <strong>Lower extremity preference:</strong> Gout favors cooler, more peripheral joints (big toe, ankle, knee)</p>
            <p>• <strong>Septic arthritis can coexist:</strong> Always send synovial fluid for culture even if crystals present</p>
            <p>• <strong>Tophi indicate chronic disease:</strong> Firm, white/yellow subcutaneous nodules. Often on ears, fingers, elbows</p>
            <p>• <strong>Diuretics are common triggers:</strong> Especially thiazides and loop diuretics</p>
            <p>• <strong>Target uric acid {'<'} 6.0 mg/dL:</strong> Below saturation point to dissolve existing crystals</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
