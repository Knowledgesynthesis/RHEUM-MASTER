import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Sparkles, AlertCircle, Microscope, Info } from 'lucide-react'

export default function Pseudogout() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Sparkles className="h-8 w-8 text-amber-500" />
          <h1 className="text-3xl md:text-4xl font-bold">Pseudogout (CPPD)</h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Calcium pyrophosphate deposition disease causing acute inflammatory arthritis
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
              <li>• <strong>Knee most common joint</strong> (50% of attacks)</li>
              <li>• Acute onset similar to gout</li>
              <li>• Wrist, shoulder, ankle also affected</li>
              <li>• Self-limited attacks (days to weeks)</li>
              <li>• Can mimic septic arthritis</li>
              <li>• May follow surgery, illness, trauma</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Epidemiology & Risk Factors</h4>
            <ul className="space-y-1 text-sm">
              <li>• More common in elderly (age {'>'} 65)</li>
              <li>• Equal male:female ratio</li>
              <li>• Associated with aging and OA</li>
              <li>• Metabolic associations: hemochromatosis, hyperparathyroidism, hypomagnesemia</li>
              <li>• Genetic forms (rare, younger patients)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Comparison with Gout */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            Pseudogout vs Gout: Key Differences
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b">
                <tr>
                  <th className="text-left py-2 pr-4">Feature</th>
                  <th className="text-left py-2 px-4 bg-yellow-500/10">Gout</th>
                  <th className="text-left py-2 pl-4 bg-amber-500/10">Pseudogout</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-2 pr-4 font-medium">Crystal type</td>
                  <td className="py-2 px-4">Monosodium urate</td>
                  <td className="py-2 pl-4">Calcium pyrophosphate</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Crystal shape</td>
                  <td className="py-2 px-4">Needle-shaped</td>
                  <td className="py-2 pl-4">Rhomboid/rectangular</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Birefringence</td>
                  <td className="py-2 px-4">Negative (yellow when parallel)</td>
                  <td className="py-2 pl-4">Positive (blue when parallel)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Most common joint</td>
                  <td className="py-2 px-4">1st MTP (podagra)</td>
                  <td className="py-2 pl-4">Knee</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Age group</td>
                  <td className="py-2 px-4">Middle-aged adults</td>
                  <td className="py-2 pl-4">Elderly ({'>'} 65)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Serum marker</td>
                  <td className="py-2 px-4">Uric acid (often elevated)</td>
                  <td className="py-2 pl-4">None reliable</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">X-ray finding</td>
                  <td className="py-2 px-4">Punched-out erosions</td>
                  <td className="py-2 pl-4">Chondrocalcinosis</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Urate-lowering therapy</td>
                  <td className="py-2 px-4">Yes (allopurinol, etc.)</td>
                  <td className="py-2 pl-4">No equivalent</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="crystal">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="crystal">Crystal ID</TabsTrigger>
          <TabsTrigger value="imaging">Imaging</TabsTrigger>
          <TabsTrigger value="treatment">Treatment</TabsTrigger>
        </TabsList>

        <TabsContent value="crystal" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Microscope className="h-5 w-5" />
                Crystal Identification
              </CardTitle>
              <CardDescription>
                Definitive diagnosis requires synovial fluid analysis
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-amber-500/10 border-2 border-amber-500 rounded-lg">
                <h4 className="font-semibold mb-3">Calcium Pyrophosphate Dihydrate Crystals</h4>
                <div className="space-y-2 text-sm">
                  <p><strong>Shape:</strong> Rhomboid or rectangular (brick-shaped)</p>
                  <p><strong>Birefringence:</strong> Weakly positive birefringence</p>
                  <p><strong>Polarized microscopy:</strong> Blue when parallel to compensator axis, yellow when perpendicular</p>
                  <p><strong>Location:</strong> Intracellular or extracellular</p>
                  <p><strong>Appearance:</strong> Often fewer and harder to see than urate crystals</p>
                  <p className="mt-3 pt-3 border-t border-amber-500/30">
                    💡 <strong>Memory aid:</strong> "<span className="font-semibold">P</span>seudogout is <span className="font-semibold">p</span>ositive" (blue = parallel)
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Synovial Fluid Characteristics</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Inflammatory fluid (WBC 2,000-100,000)</li>
                  <li>• Predominantly neutrophils</li>
                  <li>• May be cloudy or yellow</li>
                  <li>• Crystals may be sparse and difficult to identify</li>
                  <li>• Send for culture (exclude septic arthritis)</li>
                </ul>
              </div>

              <div className="p-3 bg-muted rounded-lg">
                <p className="text-sm">
                  <strong>Clinical tip:</strong> CPPD crystals are weaker birefringent and often fewer than urate crystals. Experienced examiner needed. Negative crystal search doesn't rule out pseudogout if clinical picture and imaging fit.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="imaging" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Imaging Findings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-l-4 border-amber-500 pl-4">
                <h4 className="font-semibold">Chondrocalcinosis</h4>
                <div className="text-sm text-muted-foreground mt-1 space-y-1">
                  <p><strong>Definition:</strong> Calcification of cartilage visible on X-ray</p>
                  <p><strong>Appearance:</strong> Linear or punctate densities in cartilage</p>
                  <p><strong>Common locations:</strong></p>
                  <ul className="ml-4 mt-1">
                    <li>• Knee: menisci (most common site)</li>
                    <li>• Wrist: triangular fibrocartilage</li>
                    <li>• Pubic symphysis</li>
                    <li>• Shoulder</li>
                  </ul>
                  <p className="text-amber-600 dark:text-amber-500 mt-2">
                    ⚠️ <strong>Important:</strong> Chondrocalcinosis is a radiographic finding, not a diagnosis. Many elderly people have it asymptomatically.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Associated Findings</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Degenerative changes (CPPD associated with OA)</li>
                  <li>• Joint space narrowing</li>
                  <li>• Osteophytes</li>
                  <li>• Subchondral cysts</li>
                  <li>• May involve joints not typically affected by OA alone (wrist, MCP, shoulder)</li>
                </ul>
              </div>

              <div className="p-3 bg-muted rounded-lg">
                <h4 className="font-semibold text-sm mb-1">Clinical Correlation</h4>
                <p className="text-sm">
                  Chondrocalcinosis without symptoms = asymptomatic CPPD (no treatment needed).
                  Chondrocalcinosis with acute arthritis = pseudogout (treat acute inflammation).
                  Chondrocalcinosis with chronic arthritis = chronic CPP crystal arthropathy.
                </p>
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
              <div className="p-3 bg-blue-500/10 border-l-4 border-blue-500 rounded mb-4">
                <p className="text-sm">
                  <strong>Key principle:</strong> Unlike gout, there is NO effective disease-modifying therapy to prevent CPPD crystal formation or deposition. Treatment is symptomatic.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">Acute Attack Management</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold">NSAIDs</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      First-line for acute attacks if no contraindications.
                      Use caution in elderly (common target population for pseudogout) due to GI, renal, cardiovascular risks.
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold">Colchicine</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Can be used for acute attacks, similar to gout. Less evidence than for gout.
                      Dose adjustment needed in renal insufficiency (common in elderly).
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold">Glucocorticoids</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      <strong>Intra-articular:</strong> Excellent option for monoarticular involvement, especially knee.
                      Avoid repeated injections in same joint.
                      <br />
                      <strong>Systemic:</strong> Oral or parenteral steroids for polyarticular or severe attacks, especially when NSAIDs contraindicated.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h3 className="font-semibold text-lg mb-3">Chronic Management</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-gray-500 pl-4">
                    <h4 className="font-semibold">Prophylactic Therapy</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      For frequent attacks (several per year), consider:
                      <br />• Low-dose colchicine (some evidence)
                      <br />• Low-dose NSAIDs (with GI protection)
                      <br />• Methotrexate or hydroxychloroquine (limited evidence, refractory cases)
                    </p>
                  </div>

                  <div className="border-l-4 border-teal-500 pl-4">
                    <h4 className="font-semibold">Manage Underlying Conditions</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Screen for and treat associated metabolic conditions:
                      <br />• Hemochromatosis (check iron studies, ferritin)
                      <br />• Hyperparathyroidism (check calcium, PTH)
                      <br />• Hypomagnesemia (check and replace magnesium)
                      <br />• Hypothyroidism
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h3 className="font-semibold mb-2">What Doesn't Work</h3>
                <ul className="space-y-1 text-sm">
                  <li>• No equivalent to urate-lowering therapy (allopurinol doesn't help CPPD)</li>
                  <li>• No proven way to remove CPP crystals or prevent deposition</li>
                  <li>• Dietary modifications have no role</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Clinical Presentations */}
      <Card>
        <CardHeader>
          <CardTitle>Clinical Phenotypes of CPPD</CardTitle>
          <CardDescription>
            CPPD can present in various patterns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="p-3 border rounded-lg">
              <h4 className="font-semibold mb-2">Acute CPP Crystal Arthritis (Pseudogout)</h4>
              <p className="text-muted-foreground">
                Sudden onset monoarthritis, mimics gout or septic arthritis. Self-limited.
              </p>
            </div>
            <div className="p-3 border rounded-lg">
              <h4 className="font-semibold mb-2">Chronic CPP Crystal Arthropathy</h4>
              <p className="text-muted-foreground">
                Progressive degenerative arthritis with CPPD. Mimics osteoarthritis but involves atypical joints (wrist, MCP, shoulder).
              </p>
            </div>
            <div className="p-3 border rounded-lg">
              <h4 className="font-semibold mb-2">Pseudo-RA</h4>
              <p className="text-muted-foreground">
                Polyarticular symmetric arthritis resembling RA. May have morning stiffness. RF negative.
              </p>
            </div>
            <div className="p-3 border rounded-lg">
              <h4 className="font-semibold mb-2">Asymptomatic (Lanthanic)</h4>
              <p className="text-muted-foreground">
                Chondrocalcinosis on imaging without symptoms. Common in elderly. No treatment needed.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

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
            <p>• <strong>Think pseudogout in elderly with acute monoarthritis:</strong> Especially knee, wrist, or shoulder</p>
            <p>• <strong>Chondrocalcinosis is common in elderly:</strong> Finding it doesn't diagnose acute pseudogout (need clinical correlation)</p>
            <p>• <strong>Can follow medical stress:</strong> Surgery, illness, hospitalization often precipitate attacks</p>
            <p>• <strong>No preventive therapy like gout:</strong> Unlike gout, no equivalent to allopurinol for pseudogout</p>
            <p>• <strong>Screen for metabolic diseases:</strong> Especially hemochromatosis and hyperparathyroidism in younger patients</p>
            <p>• <strong>Gout and pseudogout can coexist:</strong> Both crystals can be present in same joint</p>
            <p>• <strong>Always exclude septic arthritis:</strong> Send synovial fluid for culture even if crystals identified</p>
            <p>• <strong>Involves joints unusual for typical OA:</strong> CPPD affecting wrist, MCP, or shoulder suggests pseudo-OA</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
