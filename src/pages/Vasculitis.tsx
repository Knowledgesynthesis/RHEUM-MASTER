import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Droplet, AlertTriangle, Info } from 'lucide-react'

type VasculitisType = 'gca' | 'takayasu' | 'pan' | 'anca'

export default function Vasculitis() {
  const [selectedType, setSelectedType] = useState<VasculitisType>('gca')
  const [ancaCase, setAncaCase] = useState<number | null>(null)

  const vasculitisTypes = {
    gca: {
      name: 'Giant Cell Arteritis (GCA)',
      size: 'Large Vessel',
      color: 'border-red-500',
      age: '> 50 years',
      demographics: 'Older adults, peak 70-80 years. More common in Caucasians, especially Scandinavian descent.',
      presentation: [
        'New-onset temporal headache',
        'Jaw claudication (highly specific)',
        'Visual symptoms (transient or permanent vision loss)',
        'Scalp tenderness',
        'Polymyalgia rheumatica symptoms (50%)',
        'Fever, weight loss, fatigue'
      ],
      labs: [
        'Markedly elevated ESR (often > 50, can be > 100)',
        'Elevated CRP',
        'Normocytic anemia',
        'Thrombocytosis'
      ],
      diagnosis: [
        'Clinical suspicion is key',
        'Temporal artery biopsy (gold standard)',
        'Skip lesions possible (negative biopsy doesn\'t exclude)',
        'Imaging: Temporal artery ultrasound, MRI, PET-CT'
      ],
      emergency: 'Vision loss is an ophthalmologic emergency! Start high-dose steroids immediately if suspected.',
      treatment: 'High-dose glucocorticoids. Do NOT delay treatment for biopsy.'
    },
    takayasu: {
      name: 'Takayasu Arteritis',
      size: 'Large Vessel',
      color: 'border-orange-500',
      age: '< 40 years',
      demographics: 'Young women (F:M = 9:1). More common in Asian populations. "Pulseless disease"',
      presentation: [
        'Limb claudication',
        'Decreased or absent pulses',
        'Blood pressure discrepancies between arms (> 10 mmHg)',
        'Bruits over affected arteries',
        'Hypertension (renal artery stenosis)',
        'Constitutional symptoms (early phase)',
        'Aortic regurgitation'
      ],
      labs: [
        'Elevated ESR and CRP (active inflammation)',
        'No specific autoantibodies',
        'Anemia of chronic disease'
      ],
      diagnosis: [
        'Clinical findings + imaging',
        'Angiography: stenosis, occlusion, aneurysms',
        'CTA or MRA of aorta and branches',
        'PET-CT for disease activity'
      ],
      emergency: 'Can lead to stroke, MI, limb ischemia, renovascular hypertension',
      treatment: 'Glucocorticoids + immunosuppressants (methotrexate, azathioprine). Revascularization if needed.'
    },
    pan: {
      name: 'Polyarteritis Nodosa (PAN)',
      size: 'Medium Vessel',
      color: 'border-yellow-500',
      age: 'Any age',
      demographics: 'Affects medium-sized arteries. Associated with Hepatitis B virus in some cases.',
      presentation: [
        'Renal: hypertension, renal insufficiency (NO glomerulonephritis)',
        'GI: abdominal pain, GI bleeding, bowel perforation',
        'Neurologic: mononeuritis multiplex, CNS involvement',
        'Skin: livedo reticularis, nodules, ulcers',
        'Cardiac: MI, heart failure',
        'Testicular pain',
        'Constitutional symptoms'
      ],
      labs: [
        'ANCA negative (differentiates from ANCA vasculitis)',
        'Elevated ESR and CRP',
        'HBsAg (check for HBV association)',
        'Urinalysis: NO glomerulonephritis (key feature)'
      ],
      diagnosis: [
        'Biopsy of affected organ',
        'Angiography: microaneurysms, stenosis',
        'Rule out ANCA-associated vasculitis (ANCA negative)'
      ],
      emergency: 'Can cause life-threatening GI ischemia, renal failure, stroke',
      treatment: 'Glucocorticoids + cyclophosphamide. Treat HBV if present.'
    },
    anca: {
      name: 'ANCA-Associated Vasculitis',
      size: 'Small Vessel',
      color: 'border-purple-500',
      age: 'Any age',
      demographics: 'Includes GPA (Wegener\'s), MPA, and EGPA (Churg-Strauss)',
      presentation: [
        'Pulmonary: hemoptysis, cavitary lesions, alveolar hemorrhage',
        'Renal: rapidly progressive glomerulonephritis',
        'Upper airway: sinusitis, epistaxis, saddle-nose deformity (GPA)',
        'Pulmonary-renal syndrome',
        'Skin: palpable purpura',
        'Peripheral neuropathy'
      ],
      labs: [
        'c-ANCA (PR3): associated with GPA',
        'p-ANCA (MPO): associated with MPA and EGPA',
        'Urinalysis: hematuria, RBC casts, proteinuria',
        'Elevated creatinine',
        'Eosinophilia (EGPA)'
      ],
      diagnosis: [
        'ANCA serology + clinical features',
        'Tissue biopsy showing necrotizing vasculitis',
        'CXR/CT chest for pulmonary involvement',
        'Urinalysis and renal function'
      ],
      emergency: 'Rapidly progressive glomerulonephritis, pulmonary hemorrhage are life-threatening',
      treatment: 'Induction: cyclophosphamide or rituximab + high-dose steroids. Maintenance: rituximab, azathioprine, or methotrexate'
    }
  }

  const ancaCases = [
    {
      id: 1,
      cAnca: 'positive',
      pAnca: 'negative',
      symptoms: ['chronic sinusitis', 'hemoptysis', 'hematuria'],
      interpretation: 'c-ANCA (PR3) positive pattern suggests Granulomatosis with Polyangiitis (GPA). Classic triad: upper airway + lungs + kidneys.'
    },
    {
      id: 2,
      cAnca: 'negative',
      pAnca: 'positive',
      symptoms: ['alveolar hemorrhage', 'rapidly progressive renal failure'],
      interpretation: 'p-ANCA (MPO) positive suggests Microscopic Polyangiitis (MPA). Presents with pulmonary-renal syndrome without upper airway involvement.'
    },
    {
      id: 3,
      cAnca: 'negative',
      pAnca: 'positive',
      symptoms: ['asthma', 'eosinophilia', 'mononeuritis multiplex'],
      interpretation: 'p-ANCA positive with asthma and eosinophilia suggests Eosinophilic Granulomatosis with Polyangiitis (EGPA/Churg-Strauss).'
    }
  ]

  const currentVasculitis = vasculitisTypes[selectedType]

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Droplet className="h-8 w-8 text-red-500" />
          <h1 className="text-3xl md:text-4xl font-bold">Vasculitides</h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Inflammatory disorders of blood vessels categorized by vessel size
        </p>
      </div>

      {/* Vessel Size Classification */}
      <Card>
        <CardHeader>
          <CardTitle>Classification by Vessel Size</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="p-3 border-l-4 border-red-500">
              <h4 className="font-semibold mb-1">Large Vessel</h4>
              <p className="text-muted-foreground">Aorta and major branches</p>
              <ul className="mt-2 space-y-1">
                <li>• Giant Cell Arteritis</li>
                <li>• Takayasu Arteritis</li>
              </ul>
            </div>
            <div className="p-3 border-l-4 border-yellow-500">
              <h4 className="font-semibold mb-1">Medium Vessel</h4>
              <p className="text-muted-foreground">Main visceral arteries</p>
              <ul className="mt-2 space-y-1">
                <li>• Polyarteritis Nodosa</li>
                <li>• Kawasaki Disease</li>
              </ul>
            </div>
            <div className="p-3 border-l-4 border-purple-500">
              <h4 className="font-semibold mb-1">Small Vessel</h4>
              <p className="text-muted-foreground">Arterioles, capillaries, venules</p>
              <ul className="mt-2 space-y-1">
                <li>• ANCA-associated (GPA, MPA, EGPA)</li>
                <li>• IgA vasculitis (HSP)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Vasculitis Type Selector */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Button
          variant={selectedType === 'gca' ? 'default' : 'outline'}
          className="h-auto py-4"
          onClick={() => setSelectedType('gca')}
        >
          <div className="text-center">
            <div className="font-semibold">GCA</div>
            <div className="text-xs opacity-80">Large Vessel</div>
          </div>
        </Button>
        <Button
          variant={selectedType === 'takayasu' ? 'default' : 'outline'}
          className="h-auto py-4"
          onClick={() => setSelectedType('takayasu')}
        >
          <div className="text-center">
            <div className="font-semibold">Takayasu</div>
            <div className="text-xs opacity-80">Large Vessel</div>
          </div>
        </Button>
        <Button
          variant={selectedType === 'pan' ? 'default' : 'outline'}
          className="h-auto py-4"
          onClick={() => setSelectedType('pan')}
        >
          <div className="text-center">
            <div className="font-semibold">PAN</div>
            <div className="text-xs opacity-80">Medium Vessel</div>
          </div>
        </Button>
        <Button
          variant={selectedType === 'anca' ? 'default' : 'outline'}
          className="h-auto py-4"
          onClick={() => setSelectedType('anca')}
        >
          <div className="text-center">
            <div className="font-semibold">ANCA</div>
            <div className="text-xs opacity-80">Small Vessel</div>
          </div>
        </Button>
      </div>

      {/* Selected Vasculitis Details */}
      <Card className={`border-2 ${currentVasculitis.color}`}>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-2xl">{currentVasculitis.name}</CardTitle>
              <CardDescription className="mt-2">
                <Badge variant="outline" className="mr-2">{currentVasculitis.size}</Badge>
                <Badge variant="outline">Age: {currentVasculitis.age}</Badge>
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Emergency Alert */}
          {currentVasculitis.emergency && (
            <div className="p-4 bg-red-500/10 border-l-4 border-red-500 rounded">
              <div className="flex gap-2">
                <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-red-600 dark:text-red-500 mb-1">Emergency Alert</h4>
                  <p className="text-sm">{currentVasculitis.emergency}</p>
                </div>
              </div>
            </div>
          )}

          {/* Demographics */}
          <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Info className="h-4 w-4" />
              Demographics & Epidemiology
            </h4>
            <p className="text-sm text-muted-foreground">{currentVasculitis.demographics}</p>
          </div>

          {/* Tabs for details */}
          <Tabs defaultValue="presentation">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="presentation">Presentation</TabsTrigger>
              <TabsTrigger value="labs">Labs</TabsTrigger>
              <TabsTrigger value="diagnosis">Diagnosis</TabsTrigger>
              <TabsTrigger value="treatment">Treatment</TabsTrigger>
            </TabsList>

            <TabsContent value="presentation" className="space-y-2">
              <h4 className="font-semibold">Clinical Features</h4>
              <ul className="space-y-1 text-sm">
                {currentVasculitis.presentation.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="labs" className="space-y-2">
              <h4 className="font-semibold">Laboratory Findings</h4>
              <ul className="space-y-1 text-sm">
                {currentVasculitis.labs.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="diagnosis" className="space-y-2">
              <h4 className="font-semibold">Diagnostic Approach</h4>
              <ul className="space-y-1 text-sm">
                {currentVasculitis.diagnosis.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="treatment" className="space-y-2">
              <h4 className="font-semibold">Treatment Overview</h4>
              <p className="text-sm text-muted-foreground">{currentVasculitis.treatment}</p>
              <div className="mt-3 p-3 bg-muted rounded-lg text-xs">
                <strong>Note:</strong> This is educational content only. Treatment must be individualized based on disease severity, organ involvement, and patient factors.
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* ANCA Interpreter */}
      {selectedType === 'anca' && (
        <Card>
          <CardHeader>
            <CardTitle>ANCA Pattern Interpreter</CardTitle>
            <CardDescription>
              Select a case to interpret ANCA patterns and clinical correlation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-3">
              {ancaCases.map((caseItem) => (
                <Button
                  key={caseItem.id}
                  variant={ancaCase === caseItem.id ? 'default' : 'outline'}
                  className="justify-start text-left h-auto py-3 px-4"
                  onClick={() => setAncaCase(caseItem.id)}
                >
                  <div className="w-full">
                    <div className="font-semibold">Case {caseItem.id}</div>
                    <div className="text-sm opacity-80 flex gap-2 flex-wrap mt-1">
                      <Badge variant="secondary" className="text-xs">
                        c-ANCA: {caseItem.cAnca}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        p-ANCA: {caseItem.pAnca}
                      </Badge>
                    </div>
                  </div>
                </Button>
              ))}
            </div>

            {ancaCase && (
              <Card className="border-primary">
                <CardHeader>
                  <CardTitle className="text-lg">Case {ancaCase} Analysis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {ancaCases.find(c => c.id === ancaCase) && (() => {
                    const caseData = ancaCases.find(c => c.id === ancaCase)!
                    return (
                      <>
                        <div>
                          <h4 className="font-semibold mb-2">ANCA Pattern</h4>
                          <div className="flex gap-2">
                            <Badge variant={caseData.cAnca === 'positive' ? 'default' : 'secondary'}>
                              c-ANCA (PR3): {caseData.cAnca}
                            </Badge>
                            <Badge variant={caseData.pAnca === 'positive' ? 'default' : 'secondary'}>
                              p-ANCA (MPO): {caseData.pAnca}
                            </Badge>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Clinical Features</h4>
                          <ul className="space-y-1 text-sm">
                            {caseData.symptoms.map((symptom, idx) => (
                              <li key={idx}>• {symptom}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-4 bg-purple-500/10 border-l-4 border-purple-500 rounded">
                          <h4 className="font-semibold mb-1">Interpretation</h4>
                          <p className="text-sm">{caseData.interpretation}</p>
                        </div>
                      </>
                    )
                  })()}
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
      )}

      {/* Clinical Pearls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Clinical Pearls & Red Flags
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <p>• <strong>GCA vision loss is permanent:</strong> Start steroids immediately on clinical suspicion. Biopsy can be done within 1-2 weeks of starting treatment</p>
            <p>• <strong>Jaw claudication is highly specific for GCA:</strong> Pain with chewing due to masseter ischemia</p>
            <p>• <strong>Takayasu: check all pulses and bilateral BPs:</strong> Asymmetric pulses and BP discrepancies are key findings</p>
            <p>• <strong>PAN spares lungs:</strong> Pulmonary involvement suggests ANCA vasculitis instead</p>
            <p>• <strong>PAN has NO glomerulonephritis:</strong> Renal involvement is ischemic, not inflammatory (unlike ANCA vasculitis)</p>
            <p>• <strong>c-ANCA (PR3) = GPA:</strong> Upper airway + lungs + kidneys. Saddle-nose deformity is classic</p>
            <p>• <strong>p-ANCA (MPO) = MPA:</strong> Pulmonary-renal syndrome without upper airway involvement</p>
            <p>• <strong>EGPA triad:</strong> Asthma + eosinophilia + vasculitis. p-ANCA positive in ~40%</p>
            <p>• <strong>Pulmonary-renal syndrome = medical emergency:</strong> ANCA vasculitis, Goodpasture, or SLE</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
