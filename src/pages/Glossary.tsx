import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Search } from 'lucide-react'

interface GlossaryTerm {
  term: string
  definition: string
  category: string
  relatedTerms?: string[]
}

const glossaryTerms: GlossaryTerm[] = [
  {
    term: "ANA (Antinuclear Antibody)",
    definition: "Autoantibodies directed against nuclear components. Highly sensitive for SLE (>95%) but not specific. Can be positive in other autoimmune diseases and healthy individuals.",
    category: "Serology"
  },
  {
    term: "ANCA (Anti-Neutrophil Cytoplasmic Antibody)",
    definition: "Autoantibodies against neutrophil cytoplasmic antigens. c-ANCA (PR3) associated with GPA; p-ANCA (MPO) associated with MPA and EGPA.",
    category: "Serology"
  },
  {
    term: "Anti-CCP (Anti-Cyclic Citrullinated Peptide)",
    definition: "Highly specific antibody for rheumatoid arthritis (95-98% specificity). Can be positive years before symptom onset and predicts erosive disease.",
    category: "Serology"
  },
  {
    term: "Anti-dsDNA",
    definition: "Antibody against double-stranded DNA. Highly specific for SLE. Levels correlate with disease activity, especially lupus nephritis.",
    category: "Serology"
  },
  {
    term: "Arthralgia",
    definition: "Joint pain without objective signs of inflammation (no swelling, warmth, or effusion).",
    category: "Clinical"
  },
  {
    term: "Arthritis",
    definition: "Joint inflammation characterized by swelling, warmth, pain, and/or restricted motion. Can be inflammatory or non-inflammatory.",
    category: "Clinical"
  },
  {
    term: "Bamboo Spine",
    definition: "Radiographic appearance of complete spinal fusion in advanced ankylosing spondylitis, resembling bamboo stalks.",
    category: "Imaging"
  },
  {
    term: "Birefringence",
    definition: "Optical property of crystals under polarized light. Negative birefringence (gout) appears yellow when parallel; positive birefringence (pseudogout) appears blue when parallel.",
    category: "Laboratory"
  },
  {
    term: "Boutonnière Deformity",
    definition: "Finger deformity with PIP joint flexion and DIP joint hyperextension. Seen in rheumatoid arthritis.",
    category: "Clinical"
  },
  {
    term: "Chondrocalcinosis",
    definition: "Radiographic finding of calcium deposition in cartilage. Associated with CPPD disease (pseudogout) but can be asymptomatic.",
    category: "Imaging"
  },
  {
    term: "Complement (C3, C4)",
    definition: "Proteins involved in immune response. Low levels in SLE indicate consumption during active disease, especially with nephritis.",
    category: "Laboratory"
  },
  {
    term: "CPPD (Calcium Pyrophosphate Deposition Disease)",
    definition: "Crystal arthropathy caused by calcium pyrophosphate dihydrate crystals. Can present as pseudogout (acute), chronic arthropathy, or asymptomatic chondrocalcinosis.",
    category: "Disease"
  },
  {
    term: "CRP (C-Reactive Protein)",
    definition: "Acute phase reactant that rises rapidly with inflammation. Used to monitor disease activity in inflammatory arthritis.",
    category: "Laboratory"
  },
  {
    term: "Dactylitis",
    definition: "'Sausage digit' - diffuse swelling of entire finger or toe. Seen in spondyloarthropathies and psoriatic arthritis.",
    category: "Clinical"
  },
  {
    term: "DIP (Distal Interphalangeal)",
    definition: "Joint closest to fingertip. Commonly affected by osteoarthritis (Heberden's nodes) and psoriatic arthritis. Spared in RA.",
    category: "Anatomy"
  },
  {
    term: "DMARD (Disease-Modifying Antirheumatic Drug)",
    definition: "Medications that slow disease progression and prevent joint damage. Examples: methotrexate, hydroxychloroquine, sulfasalazine.",
    category: "Treatment"
  },
  {
    term: "Enthesitis",
    definition: "Inflammation at tendon or ligament insertion into bone. Hallmark of spondyloarthropathies. Common sites: Achilles tendon, plantar fascia.",
    category: "Clinical"
  },
  {
    term: "Erosion",
    definition: "Bone destruction at joint margins visible on imaging. Characteristic of rheumatoid arthritis and indicates irreversible damage.",
    category: "Imaging"
  },
  {
    term: "ESR (Erythrocyte Sedimentation Rate)",
    definition: "Measure of systemic inflammation. Elevated in many rheumatologic conditions. Very high ESR (>100) suggestive of GCA, malignancy, or infection.",
    category: "Laboratory"
  },
  {
    term: "Felty Syndrome",
    definition: "Triad of rheumatoid arthritis, splenomegaly, and neutropenia. Associated with severe, long-standing RA.",
    category: "Disease"
  },
  {
    term: "HLA-B27",
    definition: "Human leukocyte antigen strongly associated with ankylosing spondylitis (90% positive) and other spondyloarthropathies. Present in 8% of general population.",
    category: "Genetics"
  },
  {
    term: "Jaccoud Arthropathy",
    definition: "Reducible joint deformities without erosive changes. Seen in SLE. Unlike RA, deformities can be passively corrected.",
    category: "Clinical"
  },
  {
    term: "Jaw Claudication",
    definition: "Pain in jaw muscles with chewing due to ischemia. Highly specific for giant cell arteritis.",
    category: "Clinical"
  },
  {
    term: "Malar Rash",
    definition: "Butterfly-shaped rash across cheeks and nose, sparing nasolabial folds. Classic finding in SLE. Photosensitive.",
    category: "Clinical"
  },
  {
    term: "MCP (Metacarpophalangeal)",
    definition: "Knuckle joints at base of fingers. Commonly affected in rheumatoid arthritis. Squeezing MCPs elicits pain in active synovitis (squeeze test).",
    category: "Anatomy"
  },
  {
    term: "Monoarthritis",
    definition: "Inflammation of a single joint. Differential includes septic arthritis, gout, pseudogout, trauma.",
    category: "Clinical"
  },
  {
    term: "MTP (Metatarsophalangeal)",
    definition: "Joints at base of toes. First MTP (podagra) is classic site for acute gout.",
    category: "Anatomy"
  },
  {
    term: "Oligoarthritis",
    definition: "Inflammation of 2-4 joints. Seen in spondyloarthropathies, reactive arthritis.",
    category: "Clinical"
  },
  {
    term: "Pannus",
    definition: "Inflammatory synovial tissue that forms in rheumatoid arthritis. Invades and destroys cartilage and bone.",
    category: "Pathology"
  },
  {
    term: "PIP (Proximal Interphalangeal)",
    definition: "Middle finger joint. Affected in RA along with MCPs. Bouchard's nodes (OA) form here.",
    category: "Anatomy"
  },
  {
    term: "Podagra",
    definition: "Acute gouty arthritis of the first metatarsophalangeal joint (big toe). Hallmark presentation of gout.",
    category: "Clinical"
  },
  {
    term: "Polyarthritis",
    definition: "Inflammation of ≥5 joints. Seen in RA, SLE, viral arthritis.",
    category: "Clinical"
  },
  {
    term: "Pulmonary-Renal Syndrome",
    definition: "Simultaneous pulmonary hemorrhage and glomerulonephritis. Medical emergency. Causes include ANCA vasculitis, Goodpasture, SLE.",
    category: "Clinical"
  },
  {
    term: "Raynaud Phenomenon",
    definition: "Vasospasm causing color changes in fingers/toes (white → blue → red) with cold or stress. Primary (idiopathic) or secondary (associated with autoimmune disease).",
    category: "Clinical"
  },
  {
    term: "RF (Rheumatoid Factor)",
    definition: "Autoantibody against Fc portion of IgG. Positive in 70-80% of RA patients but not specific (can be positive in other conditions and healthy elderly).",
    category: "Serology"
  },
  {
    term: "Sacroiliitis",
    definition: "Inflammation of sacroiliac joints. Hallmark of ankylosing spondylitis. Causes buttock pain alternating sides.",
    category: "Clinical"
  },
  {
    term: "Schober Test",
    definition: "Physical exam test measuring lumbar spine flexion. Reduced in ankylosing spondylitis due to decreased spinal mobility.",
    category: "Examination"
  },
  {
    term: "Seronegative Spondyloarthropathy",
    definition: "Family of inflammatory arthritis conditions negative for RF and anti-CCP. Includes AS, psoriatic arthritis, reactive arthritis, IBD-associated arthritis. Often HLA-B27 positive.",
    category: "Disease"
  },
  {
    term: "Serositis",
    definition: "Inflammation of serous membranes (pleura, pericardium, peritoneum). Common in SLE. Presents as pleuritis, pericarditis, or peritonitis.",
    category: "Clinical"
  },
  {
    term: "Swan-Neck Deformity",
    definition: "Finger deformity with PIP joint hyperextension and DIP joint flexion. Seen in rheumatoid arthritis.",
    category: "Clinical"
  },
  {
    term: "Syndesmophyte",
    definition: "Vertical bony bridge between vertebrae in ankylosing spondylitis. Differs from osteophyte (horizontal, seen in degenerative disease).",
    category: "Imaging"
  },
  {
    term: "Synovitis",
    definition: "Inflammation of synovial membrane lining joints. Causes joint swelling, warmth, pain, and effusion.",
    category: "Pathology"
  },
  {
    term: "Tophi (singular: Tophus)",
    definition: "Deposits of monosodium urate crystals in soft tissue, visible as firm subcutaneous nodules. Indicate chronic gout. Common sites: ears, fingers, elbows, Achilles tendon.",
    category: "Clinical"
  },
  {
    term: "Ulnar Deviation",
    definition: "Fingers deviate toward ulnar side (pinky) at MCP joints. Classic deformity in advanced rheumatoid arthritis.",
    category: "Clinical"
  },
  {
    term: "Uveitis",
    definition: "Inflammation of uveal tract of eye. Acute anterior uveitis (painful red eye, photophobia) is most common extra-articular manifestation of AS. Requires urgent ophthalmology referral.",
    category: "Clinical"
  },
  {
    term: "Vasculitis",
    definition: "Inflammation of blood vessels. Classified by vessel size: large (GCA, Takayasu), medium (PAN), small (ANCA-associated).",
    category: "Disease"
  }
]

export default function Glossary() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const categories = ['All', ...Array.from(new Set(glossaryTerms.map(t => t.category)))]

  const filteredTerms = glossaryTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || term.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <BookOpen className="h-8 w-8 text-blue-500" />
          <h1 className="text-3xl md:text-4xl font-bold">Glossary</h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Essential rheumatology terms and definitions
        </p>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search terms or definitions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <Badge
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Results Count */}
      {searchTerm && (
        <div className="text-sm text-muted-foreground">
          Found {filteredTerms.length} term{filteredTerms.length !== 1 ? 's' : ''}
        </div>
      )}

      {/* Glossary Terms */}
      <div className="space-y-4">
        {filteredTerms.length === 0 ? (
          <Card>
            <CardContent className="pt-6 text-center text-muted-foreground">
              No terms found matching your search.
            </CardContent>
          </Card>
        ) : (
          filteredTerms.map((term, idx) => (
            <Card key={idx}>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <CardTitle className="text-lg">{term.term}</CardTitle>
                  <Badge variant="secondary">{term.category}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">{term.definition}</p>
                {term.relatedTerms && term.relatedTerms.length > 0 && (
                  <div className="mt-3 pt-3 border-t">
                    <p className="text-xs text-muted-foreground mb-2">Related terms:</p>
                    <div className="flex flex-wrap gap-1">
                      {term.relatedTerms.map((related, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {related}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Footer */}
      <Card>
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground text-center">
            Total of {glossaryTerms.length} terms in the glossary.
            <br />
            Use the search and category filters to find specific terms.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
