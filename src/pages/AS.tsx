import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Bone, AlertCircle, Activity } from 'lucide-react'

export default function AS() {
  const [selectedCase, setSelectedCase] = useState<number | null>(null)

  const backPainCases = [
    {
      id: 1,
      age: 28,
      gender: 'Male',
      onset: 'Gradual over months',
      pattern: 'Morning stiffness > 1 hour, improves with exercise',
      night: 'Wakes up in second half of night with pain',
      response: 'Improves with NSAIDs',
      classification: 'Inflammatory back pain - suspicious for axial spondyloarthritis',
      reasoning: 'Age < 40, insidious onset, morning stiffness, improves with exercise, responds to NSAIDs'
    },
    {
      id: 2,
      age: 52,
      gender: 'Female',
      onset: 'Sudden after lifting heavy box',
      pattern: 'Worse with activity, better with rest',
      night: 'Can sleep through night if comfortable position found',
      response: 'Minimal improvement with NSAIDs',
      classification: 'Mechanical back pain - likely musculoskeletal strain',
      reasoning: 'Acute onset after specific event, worse with activity, better with rest, older age'
    },
    {
      id: 3,
      age: 24,
      gender: 'Male',
      onset: 'Insidious over 6 months',
      pattern: 'Severe morning stiffness, improves throughout day with movement',
      night: 'Wakes up multiple times to move around',
      response: 'Excellent response to NSAIDs',
      classification: 'Inflammatory back pain - highly suggestive of AS',
      reasoning: 'Young male, chronic inflammatory pattern, alternating buttock pain, excellent NSAID response'
    }
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Bone className="h-8 w-8 text-green-500" />
          <h1 className="text-3xl md:text-4xl font-bold">Ankylosing Spondylitis</h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Inflammatory back pain with sacroiliitis and HLA-B27 association
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
              <li>• Young male (peak onset 20-30 years)</li>
              <li>• Chronic back pain ({'>'} 3 months)</li>
              <li>• Insidious onset</li>
              <li>• Morning stiffness ({'>'} 30 minutes)</li>
              <li>• Improves with exercise, worse with rest</li>
              <li>• Sacroiliac joint pain (buttock pain)</li>
              <li>• Awakens in second half of night</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Epidemiology</h4>
            <ul className="space-y-1 text-sm">
              <li>• Male predominance (3:1)</li>
              <li>• Onset typically before age 45</li>
              <li>• HLA-B27 positive in 90% (but only 5% of HLA-B27+ develop AS)</li>
              <li>• Part of seronegative spondyloarthropathies</li>
              <li>• Strong genetic component</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Inflammatory vs Mechanical Back Pain */}
      <Card className="border-2 border-green-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Inflammatory vs Mechanical Back Pain
          </CardTitle>
          <CardDescription>
            Critical distinction for diagnosis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b">
                <tr>
                  <th className="text-left py-2 pr-4">Feature</th>
                  <th className="text-left py-2 px-4 bg-green-500/10">Inflammatory (AS)</th>
                  <th className="text-left py-2 pl-4 bg-gray-500/10">Mechanical</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-2 pr-4 font-medium">Age of onset</td>
                  <td className="py-2 px-4">Usually {'<'} 40 years</td>
                  <td className="py-2 pl-4">Any age</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Onset</td>
                  <td className="py-2 px-4">Insidious (weeks-months)</td>
                  <td className="py-2 pl-4">Acute (can identify specific event)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Morning stiffness</td>
                  <td className="py-2 px-4">{'>'} 30 minutes (often hours)</td>
                  <td className="py-2 pl-4">{'<'} 30 minutes or absent</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Effect of rest</td>
                  <td className="py-2 px-4">Worse with rest</td>
                  <td className="py-2 pl-4">Better with rest</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Effect of exercise</td>
                  <td className="py-2 px-4">Improves with exercise</td>
                  <td className="py-2 pl-4">Worse with exercise</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Night pain</td>
                  <td className="py-2 px-4">Wakes in 2nd half of night</td>
                  <td className="py-2 pl-4">Rare to wake from sleep</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">NSAID response</td>
                  <td className="py-2 px-4">Excellent improvement</td>
                  <td className="py-2 pl-4">Partial or minimal</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Alternating buttock pain</td>
                  <td className="py-2 px-4">Common (sacroiliitis)</td>
                  <td className="py-2 pl-4">Uncommon</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="clinical">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="clinical">Clinical Features</TabsTrigger>
          <TabsTrigger value="labs">Labs & Imaging</TabsTrigger>
          <TabsTrigger value="treatment">Treatment</TabsTrigger>
          <TabsTrigger value="cases">Case Analyzer</TabsTrigger>
        </TabsList>

        <TabsContent value="clinical" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Clinical Manifestations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Axial Involvement (Spine)</h4>
                <ul className="space-y-1 text-sm">
                  <li>• <strong>Sacroiliitis:</strong> Hallmark finding. Inflammatory pain in SI joints, alternating buttock pain</li>
                  <li>• <strong>Ascending spine involvement:</strong> Progresses from sacroiliac → lumbar → thoracic → cervical</li>
                  <li>• <strong>Reduced spinal mobility:</strong> Loss of lumbar lordosis, decreased chest expansion, limited cervical rotation</li>
                  <li>• <strong>Postural changes:</strong> Thoracic kyphosis, forward stooped posture in advanced disease</li>
                  <li>• <strong>Schober test:</strong> Measures lumbar flexion (reduced in AS)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Peripheral Manifestations</h4>
                <ul className="space-y-1 text-sm">
                  <li>• <strong>Peripheral arthritis:</strong> 30-40% have peripheral joint involvement (hips, shoulders, knees)</li>
                  <li>• <strong>Enthesitis:</strong> Inflammation at tendon/ligament insertion (Achilles tendon, plantar fascia)</li>
                  <li>• <strong>Dactylitis:</strong> "Sausage digits" in some patients</li>
                  <li>• <strong>Hip involvement:</strong> Occurs in 30%, can be severe and require arthroplasty</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Extra-articular Manifestations</h4>
                <ul className="space-y-1 text-sm">
                  <li>• <strong>Acute anterior uveitis:</strong> Most common (25-30%). Painful red eye, photophobia, blurred vision</li>
                  <li>• <strong>Cardiac:</strong> Aortic regurgitation, conduction defects (heart block)</li>
                  <li>• <strong>Pulmonary:</strong> Apical fibrosis (rare), restrictive lung disease (reduced chest expansion)</li>
                  <li>• <strong>Renal:</strong> IgA nephropathy (uncommon)</li>
                  <li>• <strong>GI:</strong> Inflammatory bowel disease association (Crohn's, UC)</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="labs" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Laboratory & Imaging Findings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold">HLA-B27</h4>
                  <div className="text-sm text-muted-foreground mt-1 space-y-1">
                    <p><strong>Positive in:</strong> ~90% of AS patients</p>
                    <p><strong>Specificity:</strong> Low - only 5% of HLA-B27+ people develop AS</p>
                    <p><strong>Clinical use:</strong> Supports diagnosis when clinical suspicion present, NOT a screening test</p>
                    <p className="text-amber-600 dark:text-amber-500">
                      ⚠️ HLA-B27 negative doesn't rule out AS (10% of AS patients are negative)
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold">Inflammatory Markers</h4>
                  <div className="text-sm text-muted-foreground mt-1">
                    <p>• ESR and CRP elevated in 50-70% during active disease</p>
                    <p>• Can be normal even with active disease</p>
                    <p>• Useful for monitoring disease activity and treatment response</p>
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold">Seronegative</h4>
                  <div className="text-sm text-muted-foreground mt-1">
                    <p>• RF negative</p>
                    <p>• Anti-CCP negative</p>
                    <p>• ANA negative</p>
                    <p>• Part of "seronegative spondyloarthropathies"</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h4 className="font-semibold mb-3">Imaging Findings</h4>

                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm mb-1">X-ray (Sacroiliac Joints)</h5>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• <strong>Early:</strong> Blurring of joint margins, pseudo-widening</li>
                      <li>• <strong>Progressive:</strong> Erosions, sclerosis</li>
                      <li>• <strong>Late:</strong> Joint space narrowing, ankylosis (fusion)</li>
                      <li>• Bilateral and symmetric involvement (key feature)</li>
                      <li>• May be normal early in disease</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-sm mb-1">X-ray (Spine)</h5>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• <strong>Syndesmophytes:</strong> Vertical bony bridges between vertebrae</li>
                      <li>• <strong>Bamboo spine:</strong> Complete fusion of spine (advanced disease)</li>
                      <li>• <strong>Squaring of vertebrae:</strong> Loss of normal concavity</li>
                      <li>• <strong>Romanus lesions:</strong> "Shiny corners" - erosions at vertebral edges</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-sm mb-1">MRI</h5>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Can detect sacroiliitis BEFORE X-ray changes</li>
                      <li>• Bone marrow edema indicates active inflammation</li>
                      <li>• STIR sequence most sensitive for early disease</li>
                      <li>• Gold standard for early diagnosis</li>
                    </ul>
                  </div>
                </div>
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
                <h3 className="font-semibold text-lg mb-3">Non-Pharmacologic Therapy</h3>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold">Physical Therapy & Exercise</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    <strong>Essential component of treatment.</strong> Regular exercise and PT are cornerstone of management.
                    <br />• Maintains spinal mobility and posture
                    <br />• Prevents deformity
                    <br />• Improves functional capacity
                    <br />• Swimming is excellent (low-impact, full-body)
                    <br />• Breathing exercises for chest expansion
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h3 className="font-semibold text-lg mb-3">Pharmacologic Therapy</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold">NSAIDs (First-line)</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Continuous NSAID therapy (not just as-needed).
                      <br />• Can reduce inflammation and may slow radiographic progression
                      <br />• Excellent response to NSAIDs supports diagnosis
                      <br />• Long-term use, monitor for GI, renal, CV side effects
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold">TNF Inhibitors (Biologics)</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      For patients with persistent disease despite NSAIDs.
                      <br />• Very effective for axial symptoms
                      <br />• Reduces inflammation, improves function, quality of life
                      <br />• May slow radiographic progression
                      <br />• Screen for TB before starting
                    </p>
                  </div>

                  <div className="border-l-4 border-indigo-500 pl-4">
                    <h4 className="font-semibold">IL-17 Inhibitors</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Alternative biologic therapy for AS.
                      <br />• Effective for axial disease
                      <br />• Option if TNF inhibitors fail or contraindicated
                    </p>
                  </div>

                  <div className="border-l-4 border-gray-500 pl-4">
                    <h4 className="font-semibold">Conventional DMARDs (Limited Role)</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      <strong>NOT effective for axial disease.</strong>
                      <br />• Sulfasalazine may help peripheral arthritis
                      <br />• Methotrexate generally not effective for AS
                    </p>
                  </div>

                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-semibold">Glucocorticoids (Minimal Role)</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Systemic steroids generally not effective for axial disease.
                      <br />• Intra-articular injections for peripheral joints
                      <br />• Local steroid injection for enthesitis
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h3 className="font-semibold mb-2">Monitoring & Complications</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Regular monitoring of disease activity and function</li>
                  <li>• Screen for uveitis (ophthalmology referral for red eye)</li>
                  <li>• Monitor for cardiovascular complications</li>
                  <li>• Bone density monitoring (increased fracture risk)</li>
                  <li>• <strong>Spinal fracture risk:</strong> Even minor trauma can cause fractures in fused spine</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cases" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Back Pain Analyzer</CardTitle>
              <CardDescription>
                Select a case to analyze inflammatory vs mechanical back pain
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-3">
                {backPainCases.map((caseItem) => (
                  <Button
                    key={caseItem.id}
                    variant={selectedCase === caseItem.id ? 'default' : 'outline'}
                    className="justify-start text-left h-auto py-3 px-4"
                    onClick={() => setSelectedCase(caseItem.id)}
                  >
                    <div className="w-full">
                      <div className="font-semibold">Case {caseItem.id}</div>
                      <div className="text-sm opacity-80">
                        {caseItem.age}yo {caseItem.gender} - {caseItem.onset}
                      </div>
                    </div>
                  </Button>
                ))}
              </div>

              {selectedCase && backPainCases.find(c => c.id === selectedCase) && (() => {
                const caseData = backPainCases.find(c => c.id === selectedCase)!
                return (
                  <Card className="border-primary">
                    <CardHeader>
                      <CardTitle className="text-lg">Case {selectedCase} Analysis</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Patient Demographics</h4>
                        <div className="flex gap-2">
                          <Badge variant="outline">{caseData.age} years old</Badge>
                          <Badge variant="outline">{caseData.gender}</Badge>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Clinical Features</h4>
                        <div className="grid gap-2 text-sm">
                          <div><span className="text-muted-foreground">Onset:</span> {caseData.onset}</div>
                          <div><span className="text-muted-foreground">Pattern:</span> {caseData.pattern}</div>
                          <div><span className="text-muted-foreground">Night symptoms:</span> {caseData.night}</div>
                          <div><span className="text-muted-foreground">NSAID response:</span> {caseData.response}</div>
                        </div>
                      </div>

                      <div className="p-4 bg-green-500/10 border-l-4 border-green-500 rounded">
                        <h4 className="font-semibold mb-1">Classification</h4>
                        <p className="text-sm font-medium">{caseData.classification}</p>
                      </div>

                      <div className="p-3 bg-muted rounded">
                        <h4 className="font-semibold text-sm mb-1">Clinical Reasoning</h4>
                        <p className="text-sm">{caseData.reasoning}</p>
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
            <p>• <strong>Age {'<'} 40 with chronic back pain = think inflammatory:</strong> Most mechanical back pain starts later</p>
            <p>• <strong>"Better with exercise, worse with rest" = inflammatory:</strong> Opposite of mechanical back pain</p>
            <p>• <strong>Excellent NSAID response supports diagnosis:</strong> Dramatic improvement suggests inflammatory etiology</p>
            <p>• <strong>HLA-B27 is not diagnostic:</strong> 8% of general population is positive. Only useful with clinical suspicion</p>
            <p>• <strong>Uveitis is ophthalmologic urgency:</strong> Refer immediately for painful red eye. Can cause permanent vision loss</p>
            <p>• <strong>Exercise is treatment, not optional:</strong> Physical therapy is as important as medications</p>
            <p>• <strong>Traditional DMARDs don't work for axial disease:</strong> Unlike RA, methotrexate ineffective for spine involvement</p>
            <p>• <strong>Spinal fusion increases fracture risk:</strong> Low-energy trauma can cause devastating spinal fractures</p>
            <p>• <strong>IBD association:</strong> Up to 10% have inflammatory bowel disease</p>
            <p>• <strong>MRI detects early disease:</strong> X-rays may be normal for years. MRI shows bone marrow edema early</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
