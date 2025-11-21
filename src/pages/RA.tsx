import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Activity, AlertCircle, FileText, Microscope, Image, Pill } from 'lucide-react'

export default function RA() {
  const [selectedCase, setSelectedCase] = useState<number | null>(null)

  const cases = [
    {
      id: 1,
      joints: ['MCP', 'PIP'],
      duration: '3 months',
      morningStiffness: '2 hours',
      labs: { rf: 'positive', antiCCP: 'positive', esr: 'elevated', crp: 'elevated' },
      interpretation: 'Classic rheumatoid arthritis pattern with high specificity markers'
    },
    {
      id: 2,
      joints: ['Wrists', 'MCP', 'Knees'],
      duration: '6 months',
      morningStiffness: '90 minutes',
      labs: { rf: 'negative', antiCCP: 'positive', esr: 'elevated', crp: 'elevated' },
      interpretation: 'Seronegative RA (RF-negative but anti-CCP positive)'
    },
    {
      id: 3,
      joints: ['MCP', 'PIP', 'MTP'],
      duration: '4 months',
      morningStiffness: '3 hours',
      labs: { rf: 'positive', antiCCP: 'positive', esr: 'high', crp: 'high' },
      interpretation: 'Aggressive RA with involvement of hands and feet'
    }
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Activity className="h-8 w-8 text-blue-500" />
          <h1 className="text-3xl md:text-4xl font-bold">Rheumatoid Arthritis</h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Symmetric small-joint inflammatory arthritis with positive RF/anti-CCP
        </p>
      </div>

      {/* Quick Facts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Key Features
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Clinical Presentation</h4>
              <ul className="space-y-1 text-sm">
                <li>• Morning stiffness {'>'} 1 hour</li>
                <li>• Symmetric polyarthritis</li>
                <li>• Small joints affected first (MCP, PIP)</li>
                <li>• Spares DIP joints</li>
                <li>• Insidious onset over weeks-months</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Extra-articular Manifestations</h4>
              <ul className="space-y-1 text-sm">
                <li>• Rheumatoid nodules</li>
                <li>• Interstitial lung disease</li>
                <li>• Pericarditis</li>
                <li>• Scleritis/episcleritis</li>
                <li>• Felty syndrome (RA + splenomegaly + neutropenia)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs for different sections */}
      <Tabs defaultValue="labs">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="labs">Labs</TabsTrigger>
          <TabsTrigger value="imaging">Imaging</TabsTrigger>
          <TabsTrigger value="treatment">Treatment</TabsTrigger>
          <TabsTrigger value="interactive">Interactive</TabsTrigger>
        </TabsList>

        <TabsContent value="labs" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Microscope className="h-5 w-5" />
                Serology & Laboratory Findings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold">Rheumatoid Factor (RF)</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Positive in ~70-80% of RA patients. Not specific (can be positive in other conditions).
                    Higher titers correlate with more severe disease.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold">Anti-CCP (Anti-Cyclic Citrullinated Peptide)</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    More specific than RF (95-98% specificity). Positive in ~60-70% of RA patients.
                    Can be positive years before symptom onset. Predicts erosive disease.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold">Inflammatory Markers</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    ESR and CRP elevated during active disease. Used to monitor disease activity and treatment response.
                  </p>
                </div>

                <div className="border-l-4 border-gray-500 pl-4">
                  <h4 className="font-semibold">Seronegative RA</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    RF and anti-CCP negative in ~20-30% of RA patients. Diagnosis based on clinical criteria.
                    Generally milder disease course.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="imaging" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Image className="h-5 w-5" />
                Imaging Findings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-2">Early Findings (X-ray)</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Soft tissue swelling</li>
                    <li>• Periarticular osteopenia</li>
                    <li>• Joint space narrowing</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Late Findings (X-ray)</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Marginal erosions</li>
                    <li>• Severe joint space loss</li>
                    <li>• Subluxations and deformities</li>
                    <li>• Ulnar deviation of fingers</li>
                    <li>• Swan-neck and boutonnière deformities</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">MRI/Ultrasound</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Can detect erosions earlier than X-ray</li>
                    <li>• Visualize synovitis and tenosynovitis</li>
                    <li>• Useful for monitoring disease activity</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="treatment" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Pill className="h-5 w-5" />
                Treatment Framework (Conceptual)
              </CardTitle>
              <CardDescription>
                Educational overview - not for clinical decision-making
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold">First-line: DMARDs</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Methotrexate is typically the anchor DMARD. Slows disease progression and prevents joint damage.
                    Started early in disease course.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold">Biologic DMARDs</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    TNF inhibitors, IL-6 inhibitors, T-cell costimulation blockers, B-cell depletion agents.
                    Used when conventional DMARDs inadequate.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold">JAK Inhibitors</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Oral targeted synthetic DMARDs. Alternative to biologics for refractory disease.
                  </p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold">Glucocorticoids</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Used for rapid symptom control and bridging therapy. Lowest effective dose for shortest duration.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold">NSAIDs</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Symptomatic relief only. Do not prevent disease progression or joint damage.
                  </p>
                </div>
              </div>

              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="text-sm">
                  <strong>Treatment Goal:</strong> Achieve remission or low disease activity.
                  Tight control strategy with frequent monitoring and adjustment.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="interactive" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>RA Case Interpreter</CardTitle>
              <CardDescription>
                Select a case to see the serology interpretation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-3">
                {cases.map((caseItem) => (
                  <Button
                    key={caseItem.id}
                    variant={selectedCase === caseItem.id ? "default" : "outline"}
                    className="justify-start text-left h-auto py-3 px-4"
                    onClick={() => setSelectedCase(caseItem.id)}
                  >
                    <div className="w-full">
                      <div className="font-semibold">Case {caseItem.id}</div>
                      <div className="text-sm opacity-80">
                        Joints: {caseItem.joints.join(', ')} | Duration: {caseItem.duration}
                      </div>
                    </div>
                  </Button>
                ))}
              </div>

              {selectedCase && (
                <Card className="mt-4 border-primary">
                  <CardHeader>
                    <CardTitle className="text-lg">Case {selectedCase} Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {cases.find(c => c.id === selectedCase) && (() => {
                      const caseData = cases.find(c => c.id === selectedCase)!
                      return (
                        <>
                          <div>
                            <h4 className="font-semibold mb-2">Clinical Features</h4>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <div>
                                <span className="text-muted-foreground">Joints:</span>{' '}
                                {caseData.joints.join(', ')}
                              </div>
                              <div>
                                <span className="text-muted-foreground">Duration:</span>{' '}
                                {caseData.duration}
                              </div>
                              <div className="col-span-2">
                                <span className="text-muted-foreground">Morning stiffness:</span>{' '}
                                {caseData.morningStiffness}
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2">Laboratory Results</h4>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant={caseData.labs.rf === 'positive' ? 'default' : 'secondary'}>
                                RF: {caseData.labs.rf}
                              </Badge>
                              <Badge variant={caseData.labs.antiCCP === 'positive' ? 'default' : 'secondary'}>
                                Anti-CCP: {caseData.labs.antiCCP}
                              </Badge>
                              <Badge variant="outline">ESR: {caseData.labs.esr}</Badge>
                              <Badge variant="outline">CRP: {caseData.labs.crp}</Badge>
                            </div>
                          </div>

                          <div className="p-4 bg-blue-500/10 border-l-4 border-blue-500 rounded">
                            <div className="flex gap-2">
                              <AlertCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                              <div>
                                <h4 className="font-semibold mb-1">Interpretation</h4>
                                <p className="text-sm">{caseData.interpretation}</p>
                              </div>
                            </div>
                          </div>
                        </>
                      )
                    })()}
                  </CardContent>
                </Card>
              )}
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
            <p>• <strong>Early diagnosis is critical:</strong> Erosions can occur within months of symptom onset</p>
            <p>• <strong>RF is not diagnostic:</strong> Can be positive in healthy individuals and other conditions (HCV, cryoglobulinemia, SLE)</p>
            <p>• <strong>Anti-CCP has high specificity:</strong> More useful for confirming RA diagnosis</p>
            <p>• <strong>DIP joints are spared:</strong> DIP involvement suggests osteoarthritis or psoriatic arthritis instead</p>
            <p>• <strong>Monitor for complications:</strong> Atlantoaxial subluxation, RA-ILD, cardiovascular disease</p>
            <p>• <strong>Seronegative RA exists:</strong> Don't rule out RA based on negative RF/anti-CCP if clinical picture fits</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
