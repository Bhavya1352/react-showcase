import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Mic, MicOff, Heart, Brain, Flame, Droplets, Wind, Sun, Moon, Star, Sparkles, Zap, Leaf, Apple, Coffee, Waves } from "lucide-react";

interface DoshaResult {
  vata: number;
  pitta: number;
  kapha: number;
}

interface Question {
  id: number;
  question: string;
  options: { text: string; dosha: keyof DoshaResult; points: number }[];
  icon: React.ReactNode;
}

const questions: Question[] = [
  {
    id: 1,
    question: "How would you describe your body frame?",
    icon: <Heart className="w-6 h-6" />,
    options: [
      { text: "Slim and slender", dosha: "vata", points: 3 },
      { text: "Medium build", dosha: "pitta", points: 2 },
      { text: "Solid and sturdy", dosha: "kapha", points: 3 }
    ]
  },
  {
    id: 2,
    question: "What's your typical energy level throughout the day?",
    icon: <Zap className="w-6 h-6" />,
    options: [
      { text: "Variable - sometimes high, sometimes low", dosha: "vata", points: 3 },
      { text: "Consistently high and focused", dosha: "pitta", points: 3 },
      { text: "Steady and calm", dosha: "kapha", points: 3 }
    ]
  },
  {
    id: 3,
    question: "How do you react to stress?",
    icon: <Brain className="w-6 h-6" />,
    options: [
      { text: "I get anxious and worried easily", dosha: "vata", points: 3 },
      { text: "I get irritable and frustrated", dosha: "pitta", points: 3 },
      { text: "I remain calm but may feel lethargic", dosha: "kapha", points: 3 }
    ]
  },
  {
    id: 4,
    question: "What's your appetite like?",
    icon: <Apple className="w-6 h-6" />,
    options: [
      { text: "Irregular - sometimes very hungry, sometimes not", dosha: "vata", points: 3 },
      { text: "Strong and consistent, I get hangry easily", dosha: "pitta", points: 3 },
      { text: "Steady but I can skip meals easily", dosha: "kapha", points: 3 }
    ]
  },
  {
    id: 5,
    question: "How's your sleep quality?",
    icon: <Moon className="w-6 h-6" />,
    options: [
      { text: "Light and interrupted, I wake up easily", dosha: "vata", points: 3 },
      { text: "Deep but I need exactly 8 hours", dosha: "pitta", points: 2 },
      { text: "Heavy and long, hard to wake up", dosha: "kapha", points: 3 }
    ]
  }
];

const doshaInfo = {
  vata: {
    name: "Vata",
    element: "Air & Space",
    icon: <Wind className="w-8 h-8" />,
    color: "from-blue-400 to-purple-500",
    description: "Creative, energetic, and quick-thinking",
    traits: ["Creative", "Energetic", "Quick-thinking", "Flexible"],
    foods: ["Warm soups", "Cooked vegetables", "Nuts", "Oils"],
    herbs: ["Ashwagandha", "Ginger", "Cinnamon"]
  },
  pitta: {
    name: "Pitta",
    element: "Fire & Water",
    icon: <Flame className="w-8 h-8" />,
    color: "from-red-400 to-orange-500",
    description: "Intelligent, focused, and goal-oriented",
    traits: ["Intelligent", "Focused", "Goal-oriented", "Ambitious"],
    foods: ["Cool foods", "Sweet fruits", "Leafy greens", "Milk"],
    herbs: ["Aloe Vera", "Turmeric", "Neem"]
  },
  kapha: {
    name: "Kapha",
    element: "Earth & Water",
    icon: <Droplets className="w-8 h-8" />,
    color: "from-green-400 to-blue-500",
    description: "Calm, stable, and nurturing",
    traits: ["Calm", "Stable", "Nurturing", "Patient"],
    foods: ["Light foods", "Spicy foods", "Honey", "Ginger"],
    herbs: ["Guggulu", "Triphala", "Trikatu"]
  }
};

export default function AIHealthAssistant() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<DoshaResult>({ vata: 0, pitta: 0, kapha: 0 });
  const [showResults, setShowResults] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [voiceInput, setVoiceInput] = useState("");

  const handleAnswer = (dosha: keyof DoshaResult, points: number) => {
    setAnswers(prev => ({ ...prev, [dosha]: prev[dosha] + points }));
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const getPrimaryDosha = () => {
    const { vata, pitta, kapha } = answers;
    const max = Math.max(vata, pitta, kapha);
    if (max === vata) return "vata";
    if (max === pitta) return "pitta";
    return "kapha";
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({ vata: 0, pitta: 0, kapha: 0 });
    setShowResults(false);
  };

  const startVoiceInput = () => {
    setIsListening(true);
    // Simulate voice recognition
    setTimeout(() => {
      setIsListening(false);
      setVoiceInput("I feel anxious and have irregular sleep patterns");
    }, 3000);
  };

  if (showResults) {
    const primaryDosha = getPrimaryDosha() as keyof typeof doshaInfo;
    const dosha = doshaInfo[primaryDosha];

    return (
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-yellow-200 to-amber-200 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
          </div>

          <div className="relative container mx-auto px-4 py-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-forest mb-4">
                Your Ayurvedic Profile
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Based on your responses, here's your personalized Ayurvedic analysis
              </p>
            </motion.div>

            {/* Dosha Result Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl mx-auto mb-12"
            >
              <Card className="bg-gradient-to-r p-8 shadow-2xl border-0">
                <CardContent className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
                    className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r ${dosha.color} text-white mb-6 shadow-lg`}
                  >
                    {dosha.icon}
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-3xl font-heading font-bold text-forest mb-2"
                  >
                    Primary Dosha: {dosha.name}
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-lg text-muted-foreground mb-6"
                  >
                    {dosha.element} • {dosha.description}
                  </motion.p>

                  {/* Dosha Scores */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                    {Object.entries(answers).map(([doshaKey, score], index) => (
                      <motion.div
                        key={doshaKey}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 + index * 0.1 }}
                        className="text-center"
                      >
                        <div className="text-2xl font-bold text-forest capitalize mb-2">{doshaKey}</div>
                        <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${(score / 15) * 100}%` }}
                            transition={{ delay: 1.5 + index * 0.1, duration: 1 }}
                            className={`h-3 rounded-full ${
                              doshaKey === 'vata' ? 'bg-blue-500' :
                              doshaKey === 'pitta' ? 'bg-red-500' : 'bg-green-500'
                            }`}
                          ></motion.div>
                        </div>
                        <div className="text-sm text-muted-foreground">{score}/15</div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Personalized Recommendations */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Leaf className="w-5 h-5 text-green-600" />
                      Recommended Foods
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {dosha.foods.map((food, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          {food}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-purple-600" />
                      Beneficial Herbs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {dosha.herbs.map((herb, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          {herb}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.6 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-amber-600" />
                      Your Traits
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {dosha.traits.map((trait, index) => (
                        <span key={index} className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
                          {trait}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* AI Recipe Generator */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              className="max-w-2xl mx-auto"
            >
              <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center gap-2 text-purple-800">
                    <Coffee className="w-6 h-6" />
                    AI Recipe Generator
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-purple-700 mb-4">
                    Get personalized Ayurvedic recipes based on your dosha type
                  </p>
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Generate My Recipe
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="text-center mt-8"
            >
              <Button onClick={resetQuiz} variant="outline">
                Take Quiz Again
              </Button>
            </motion.div>
          </div>
        </div>
      </Layout>
    );
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full blur-2xl opacity-40"
          ></motion.div>
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              rotate: [360, 180, 0]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-yellow-200 to-amber-200 rounded-full blur-2xl opacity-30"
          ></motion.div>
        </div>

        <div className="relative container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mb-6 shadow-lg">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-forest mb-4">
              AI Ayurvedic Health Assistant
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover your unique Ayurvedic constitution through our advanced AI analysis
            </p>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-md mx-auto mb-8"
          >
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-3" />
          </motion.div>

          {/* Voice Input */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <Card className="bg-white/80 backdrop-blur-sm border-amber-200">
              <CardContent className="p-6 text-center">
                <Button
                  onClick={startVoiceInput}
                  disabled={isListening}
                  className={`w-16 h-16 rounded-full mb-4 ${
                    isListening
                      ? 'bg-red-500 hover:bg-red-600 animate-pulse'
                      : 'bg-amber-500 hover:bg-amber-600'
                  }`}
                >
                  {isListening ? <MicOff className="w-8 h-8" /> : <Mic className="w-8 h-8" />}
                </Button>
                <p className="text-sm text-muted-foreground mb-2">
                  {isListening ? "Listening..." : "Try voice input for instant analysis"}
                </p>
                {voiceInput && (
                  <p className="text-amber-700 italic">"{voiceInput}"</p>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Question Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              <Card className="bg-white shadow-xl border-0">
                <CardHeader className="text-center pb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mb-4 shadow-lg">
                    {questions[currentQuestion].icon}
                  </div>
                  <CardTitle className="text-2xl font-heading text-forest">
                    {questions[currentQuestion].question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    {questions[currentQuestion].options.map((option, index) => (
                      <motion.button
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleAnswer(option.dosha, option.points)}
                        className="w-full p-4 text-left bg-gradient-to-r from-gray-50 to-gray-100 hover:from-amber-50 hover:to-orange-50 rounded-lg border border-gray-200 hover:border-amber-300 transition-all duration-200 group"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded-full border-2 transition-colors ${
                            option.dosha === 'vata' ? 'border-blue-400 group-hover:bg-blue-400' :
                            option.dosha === 'pitta' ? 'border-red-400 group-hover:bg-red-400' :
                            'border-green-400 group-hover:bg-green-400'
                          }`}></div>
                          <span className="font-medium text-forest">{option.text}</span>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Quick Tips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="max-w-4xl mx-auto mt-12 grid md:grid-cols-3 gap-6"
          >
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-4 text-center">
                <Wind className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-blue-800 mb-1">Vata</h3>
                <p className="text-sm text-blue-700">Air & Space • Creative & Energetic</p>
              </CardContent>
            </Card>

            <Card className="bg-red-50 border-red-200">
              <CardContent className="p-4 text-center">
                <Flame className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <h3 className="font-semibold text-red-800 mb-1">Pitta</h3>
                <p className="text-sm text-red-700">Fire & Water • Intelligent & Focused</p>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-4 text-center">
                <Droplets className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold text-green-800 mb-1">Kapha</h3>
                <p className="text-sm text-green-700">Earth & Water • Calm & Stable</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}