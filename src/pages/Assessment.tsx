import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ClipboardList, CheckCircle2, XCircle } from 'lucide-react'

interface Question {
  id: number
  question: string
  options: string[]
  correct: number
  explanation: string
  category: string
}

const questions: Question[] = [
  {
    id: 1,
    question: "A 32-year-old woman presents with symmetric swelling of her MCP and PIP joints bilaterally for 3 months. She reports 2 hours of morning stiffness. Labs show positive RF and anti-CCP. Which finding on X-ray would you MOST expect?",
    options: [
      "Chondrocalcinosis",
      "Marginal erosions",
      "Syndesmophytes",
      "Punched-out lesions with overhanging edges"
    ],
    correct: 1,
    explanation: "Rheumatoid arthritis characteristically shows marginal erosions on X-ray. Chondrocalcinosis is seen in CPPD, syndesmophytes in AS, and punched-out lesions with overhanging edges in chronic gout.",
    category: "RA"
  },
  {
    id: 2,
    question: "A 28-year-old woman with malar rash presents with new-onset hematuria and proteinuria. Which antibody is MOST specific for lupus nephritis?",
    options: [
      "ANA",
      "Anti-Smith",
      "Anti-dsDNA",
      "Anti-histone"
    ],
    correct: 2,
    explanation: "Anti-dsDNA antibodies are highly specific for SLE and correlate with disease activity, especially lupus nephritis. ANA is sensitive but not specific. Anti-Smith is specific for SLE but doesn't correlate with nephritis. Anti-histone suggests drug-induced lupus.",
    category: "SLE"
  },
  {
    id: 3,
    question: "A 72-year-old woman presents with sudden-onset severe headache, jaw claudication, and elevated ESR of 95. What is the MOST appropriate next step?",
    options: [
      "Order temporal artery biopsy and wait for results before treatment",
      "Start high-dose glucocorticoids immediately",
      "Start low-dose aspirin and schedule follow-up",
      "Obtain MRI brain before any intervention"
    ],
    correct: 1,
    explanation: "This is classic giant cell arteritis. Vision loss is a medical emergency. Start high-dose steroids immediately on clinical suspicion. Temporal artery biopsy can be performed within 1-2 weeks of starting steroids without affecting yield.",
    category: "Vasculitis"
  },
  {
    id: 4,
    question: "Which crystal finding would you expect in acute gouty arthritis?",
    options: [
      "Rhomboid crystals with positive birefringence",
      "Needle-shaped crystals with positive birefringence",
      "Rhomboid crystals with negative birefringence",
      "Needle-shaped crystals with negative birefringence"
    ],
    correct: 3,
    explanation: "Gout shows needle-shaped monosodium urate crystals with strong negative birefringence (yellow when parallel to polarizer). Pseudogout shows rhomboid calcium pyrophosphate crystals with weak positive birefringence.",
    category: "Gout"
  },
  {
    id: 5,
    question: "A 25-year-old man with chronic back pain reports morning stiffness lasting 2 hours that improves with exercise. X-ray shows bilateral sacroiliitis. Which lab finding would you MOST expect?",
    options: [
      "Positive RF",
      "Positive anti-CCP",
      "Positive HLA-B27",
      "Elevated anti-dsDNA"
    ],
    correct: 2,
    explanation: "This presentation is classic for ankylosing spondylitis. HLA-B27 is positive in ~90% of AS patients. RF and anti-CCP are associated with RA. Anti-dsDNA is seen in SLE.",
    category: "AS"
  },
  {
    id: 6,
    question: "A 45-year-old woman presents with acute monoarthritis of the knee. Synovial fluid analysis shows 60,000 WBCs with rhomboid-shaped crystals showing weak positive birefringence. What is the diagnosis?",
    options: [
      "Gout",
      "Pseudogout (CPPD)",
      "Septic arthritis",
      "Rheumatoid arthritis"
    ],
    correct: 1,
    explanation: "Rhomboid crystals with positive birefringence are pathognomonic for calcium pyrophosphate deposition disease (pseudogout). Gout shows needle-shaped crystals with negative birefringence.",
    category: "Pseudogout"
  },
  {
    id: 7,
    question: "Which of the following is TRUE regarding serum uric acid in acute gout?",
    options: [
      "Always elevated during acute attack",
      "Normal level rules out gout",
      "May be normal in 25-40% of acute attacks",
      "Should be checked only after starting urate-lowering therapy"
    ],
    correct: 2,
    explanation: "Critical pearl: Serum uric acid can be normal during acute gout attack in 25-40% of cases due to acute phase response. Elevated uric acid alone doesn't diagnose gout, and normal level doesn't rule it out during acute attack.",
    category: "Gout"
  },
  {
    id: 8,
    question: "A patient presents with c-ANCA (PR3) positive vasculitis, chronic sinusitis, and pulmonary nodules. Urinalysis shows hematuria and RBC casts. What is the MOST likely diagnosis?",
    options: [
      "Polyarteritis nodosa",
      "Granulomatosis with polyangiitis (GPA)",
      "Microscopic polyangiitis",
      "Eosinophilic granulomatosis with polyangiitis"
    ],
    correct: 1,
    explanation: "c-ANCA (PR3) with upper airway (sinusitis) + lungs + kidneys is classic for GPA (formerly Wegener's). MPA is p-ANCA positive and lacks upper airway involvement. PAN is ANCA-negative.",
    category: "Vasculitis"
  },
  {
    id: 9,
    question: "Which finding on examination would DISTINGUISH inflammatory back pain from mechanical back pain?",
    options: [
      "Pain worse with activity",
      "Pain better with rest",
      "Morning stiffness > 1 hour that improves with exercise",
      "Acute onset after specific traumatic event"
    ],
    correct: 2,
    explanation: "Prolonged morning stiffness (>30 min, often hours) that improves with exercise is hallmark of inflammatory back pain. Mechanical back pain is worse with activity, better with rest, and often has identifiable traumatic onset.",
    category: "AS"
  },
  {
    id: 10,
    question: "A 35-year-old woman with SLE has low C3 and C4 complement levels. What does this finding suggest?",
    options: [
      "Drug-induced lupus",
      "Inactive disease",
      "Active disease with potential nephritis",
      "Good prognosis"
    ],
    correct: 2,
    explanation: "Low complement levels (C3, C4) indicate complement consumption and suggest active SLE, particularly lupus nephritis. Rising anti-dsDNA with falling complements often heralds renal flare.",
    category: "SLE"
  },
  {
    id: 11,
    question: "Which of the following medications is MOST effective for axial symptoms in ankylosing spondylitis?",
    options: [
      "Methotrexate",
      "Hydroxychloroquine",
      "TNF inhibitors",
      "Low-dose prednisone"
    ],
    correct: 2,
    explanation: "TNF inhibitors are highly effective for axial disease in AS. Traditional DMARDs like methotrexate are NOT effective for axial involvement (only help peripheral arthritis). Systemic steroids have minimal role in AS.",
    category: "AS"
  },
  {
    id: 12,
    question: "A patient with newly diagnosed gout asks when to start allopurinol. What is the MOST appropriate timing?",
    options: [
      "Immediately during the acute attack",
      "After acute attack resolves, with prophylactic colchicine",
      "Only if uric acid is > 10 mg/dL",
      "Wait until second attack before considering"
    ],
    correct: 1,
    explanation: "Do NOT start urate-lowering therapy during acute attack (can worsen it). Wait until attack resolves, then start with prophylactic low-dose colchicine or NSAID for 3-6 months to prevent flares triggered by mobilization of urate.",
    category: "Gout"
  },
  {
    id: 13,
    question: "What is the MOST common extra-articular manifestation of ankylosing spondylitis?",
    options: [
      "Aortic regurgitation",
      "Acute anterior uveitis",
      "Pulmonary fibrosis",
      "IgA nephropathy"
    ],
    correct: 1,
    explanation: "Acute anterior uveitis (painful red eye, photophobia) occurs in 25-30% of AS patients, making it the most common extra-articular manifestation. It requires urgent ophthalmology referral to prevent vision loss.",
    category: "AS"
  },
  {
    id: 14,
    question: "A 68-year-old man with chronic kidney disease presents with podagra. Which treatment should be AVOIDED?",
    options: [
      "Intra-articular corticosteroid injection",
      "Oral prednisone",
      "Colchicine at usual dose",
      "Indomethacin"
    ],
    correct: 3,
    explanation: "NSAIDs should be avoided in CKD due to risk of further renal impairment. Colchicine can be used but requires dose reduction in renal insufficiency. Corticosteroids (intra-articular or systemic) are good alternatives.",
    category: "Gout"
  },
  {
    id: 15,
    question: "Which antibody is MOST specific for SLE but has low sensitivity?",
    options: [
      "ANA",
      "Anti-dsDNA",
      "Anti-Smith",
      "Anti-SSA"
    ],
    correct: 2,
    explanation: "Anti-Smith antibody has highest specificity for SLE (~99%) but low sensitivity (~30%). ANA is sensitive but not specific. Anti-dsDNA is both specific and correlates with disease activity.",
    category: "SLE"
  }
]

export default function Assessment() {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({})
  const [showResults, setShowResults] = useState<Record<number, boolean>>({})

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setSelectedAnswers(prev => ({ ...prev, [questionId]: answerIndex }))
  }

  const handleCheckAnswer = (questionId: number) => {
    setShowResults(prev => ({ ...prev, [questionId]: true }))
  }

  const handleResetQuestion = (questionId: number) => {
    setSelectedAnswers(prev => {
      const newAnswers = { ...prev }
      delete newAnswers[questionId]
      return newAnswers
    })
    setShowResults(prev => {
      const newResults = { ...prev }
      delete newResults[questionId]
      return newResults
    })
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <ClipboardList className="h-8 w-8 text-indigo-500" />
          <h1 className="text-3xl md:text-4xl font-bold">Assessment</h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Test your knowledge with MCQs and case-based questions
        </p>
      </div>

      {/* Info Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">How to Use</CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-2">
          <p>• Select an answer for each question</p>
          <p>• Click "Check Answer" to see if you're correct</p>
          <p>• Read the explanation to reinforce your learning</p>
          <p>• Click "Try Again" to reset and try again</p>
          <p className="text-muted-foreground italic mt-4">
            Note: This assessment is for learning purposes only. Answers are not tracked or stored.
          </p>
        </CardContent>
      </Card>

      {/* Questions */}
      <div className="space-y-6">
        {questions.map((q) => {
          const selected = selectedAnswers[q.id]
          const showResult = showResults[q.id]
          const isCorrect = selected === q.correct

          return (
            <Card key={q.id} className={showResult ? (isCorrect ? 'border-green-500' : 'border-red-500') : ''}>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{q.category}</Badge>
                      <Badge variant="secondary">Question {q.id}</Badge>
                    </div>
                    <CardTitle className="text-base font-normal leading-relaxed">
                      {q.question}
                    </CardTitle>
                  </div>
                  {showResult && (
                    <div>
                      {isCorrect ? (
                        <CheckCircle2 className="h-6 w-6 text-green-500" />
                      ) : (
                        <XCircle className="h-6 w-6 text-red-500" />
                      )}
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Options */}
                <div className="space-y-2">
                  {q.options.map((option, idx) => {
                    const isSelected = selected === idx
                    const isCorrectOption = idx === q.correct
                    let buttonVariant: "outline" | "default" | "secondary" = "outline"
                    let additionalClasses = ""

                    if (showResult) {
                      if (isCorrectOption) {
                        buttonVariant = "default"
                        additionalClasses = "border-green-500 bg-green-500/10 hover:bg-green-500/20"
                      } else if (isSelected && !isCorrect) {
                        additionalClasses = "border-red-500 bg-red-500/10"
                      }
                    } else if (isSelected) {
                      buttonVariant = "secondary"
                    }

                    return (
                      <Button
                        key={idx}
                        variant={buttonVariant}
                        className={`w-full justify-start text-left h-auto py-3 ${additionalClasses}`}
                        onClick={() => !showResult && handleAnswerSelect(q.id, idx)}
                        disabled={showResult}
                      >
                        <span className="mr-3 font-semibold">
                          {String.fromCharCode(65 + idx)}.
                        </span>
                        <span>{option}</span>
                      </Button>
                    )
                  })}
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  {!showResult ? (
                    <Button
                      onClick={() => handleCheckAnswer(q.id)}
                      disabled={selected === undefined}
                      className="flex-1"
                    >
                      Check Answer
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleResetQuestion(q.id)}
                      variant="outline"
                      className="flex-1"
                    >
                      Try Again
                    </Button>
                  )}
                </div>

                {/* Explanation */}
                {showResult && (
                  <div className={`p-4 rounded-lg border-l-4 ${
                    isCorrect ? 'bg-green-500/10 border-green-500' : 'bg-red-500/10 border-red-500'
                  }`}>
                    <h4 className="font-semibold mb-2">
                      {isCorrect ? '✓ Correct!' : '✗ Incorrect'}
                    </h4>
                    <p className="text-sm">{q.explanation}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Footer */}
      <Card className="mt-8">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground text-center">
            This assessment contains {questions.length} questions covering RA, SLE, vasculitis, gout, pseudogout, and AS.
            <br />
            Use this as a learning tool to reinforce your understanding of rheumatologic diseases.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
