import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, MessageCircle, ThumbsUp, Share2, MoreVertical } from "lucide-react";

const questions = [
  {
    id: 1,
    author: "Anonymous",
    avatar: null,
    timeAgo: "2 days ago",
    question: "Can Ayurveda help with stress and mental health issues?",
    description:
      "Explore the powerful benefits of Ayurveda in naturally managing stress and improving mental health with calming herbs and Ayurvedic practices like meditation and pranayama.",
    replies: 23,
    likes: 45,
    shares: 12,
    expertReply: {
      name: "Dr. Mahima Sharma",
      avatar: "MS",
      timeAgo: "1 day ago",
      content:
        "Yes, Ayurveda offers holistic approaches like herbal remedies, lifestyle adjustments, and relaxation techniques to alleviate stress and support mental well-being naturally. Herbs like Ashwagandha, Brahmi, and Jatamansi are particularly effective.",
      likes: 89,
    },
  },
  {
    id: 2,
    author: "Anonymous",
    avatar: null,
    timeAgo: "3 days ago",
    question: "Can Ayurveda help with stress and mental health issues?",
    description:
      "Discover the benefits of Ashwagandha in naturally boosting energy and improving mental health, traditionally used for stress relief, better sleep, and overall wellness.",
    replies: 15,
    likes: 32,
    shares: 8,
    expertReply: {
      name: "Dr. Mahima Sharma",
      avatar: "MS",
      timeAgo: "2 days ago",
      content:
        "Ashwagandha is an adaptogenic herb that helps the body manage stress. It supports the adrenal glands and helps maintain normal cortisol levels. It's excellent for improving sleep quality and reducing anxiety.",
      likes: 56,
    },
  },
  {
    id: 3,
    author: "Anonymous",
    avatar: null,
    timeAgo: "5 days ago",
    question: "Can Ayurveda help with stress and mental health issues?",
    description:
      "Explore the powerful benefits of Ayurveda in naturally managing stress and improving mental health with calming herbs and Ayurvedic practices like meditation and pranayama.",
    replies: 31,
    likes: 67,
    shares: 19,
    expertReply: {
      name: "Dr. Mahima Sharma",
      avatar: "MS",
      timeAgo: "4 days ago",
      content:
        "Absolutely! Ayurveda provides comprehensive solutions for mental health through diet modifications, herbal supplements, yoga, meditation, and panchakarma treatments. Each approach is tailored to your unique dosha constitution.",
      likes: 102,
    },
  },
];

export default function Forum() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-beige to-background py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-3xl lg:text-4xl font-bold text-forest text-center mb-4">
            Find Discussions Related To Ayurveda Here
          </h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
            Join our community of wellness seekers and experts. Ask questions, share experiences,
            and learn from Ayurvedic practitioners.
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search discussions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-6 bg-card rounded-full"
            />
          </div>
        </div>
      </section>

      {/* Forum Content */}
      <section className="bg-background py-8 lg:py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Tabs defaultValue="questions" className="w-full">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
              <TabsList className="bg-muted">
                <TabsTrigger value="questions">Questions</TabsTrigger>
                <TabsTrigger value="thoughts">Thoughts</TabsTrigger>
              </TabsList>
              <Button className="bg-primary hover:bg-primary-dark">Ask a Question</Button>
            </div>

            {/* Filter by Expert */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="text-sm text-muted-foreground">Filter:</span>
              <select className="bg-card border border-border rounded-lg px-4 py-2 text-sm">
                <option>All Questions</option>
                <option>With Expert Reply</option>
                <option>Unanswered</option>
              </select>
              <select className="bg-card border border-border rounded-lg px-4 py-2 text-sm">
                <option>Sort by: Recent</option>
                <option>Most Liked</option>
                <option>Most Discussed</option>
              </select>
            </div>

            <TabsContent value="questions" className="space-y-6">
              {questions.map((q) => (
                <div key={q.id} className="bg-card rounded-xl border border-border overflow-hidden">
                  {/* Question Header */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                          <span className="text-muted-foreground">👤</span>
                        </div>
                        <div>
                          <p className="font-medium">{q.author}</p>
                          <p className="text-sm text-muted-foreground">{q.timeAgo}</p>
                        </div>
                      </div>
                      <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                        <MoreVertical className="w-5 h-5 text-muted-foreground" />
                      </button>
                    </div>

                    <h3 className="font-heading text-lg font-semibold text-forest mb-2">
                      {q.question}
                    </h3>
                    <p className="text-muted-foreground">{q.description}</p>

                    {/* Question Stats */}
                    <div className="flex items-center gap-6 mt-4 pt-4 border-t border-border">
                      <span className="text-sm text-muted-foreground">
                        Replies • {q.replies}
                      </span>
                      <button className="text-sm text-primary hover:underline">
                        View all {q.replies} Replies
                      </button>
                    </div>
                  </div>

                  {/* Expert Reply */}
                  {q.expertReply && (
                    <div className="bg-beige/50 p-6 border-t border-border">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium">
                          {q.expertReply.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <p className="font-medium text-forest">{q.expertReply.name}</p>
                            <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                              Expert
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">{q.expertReply.timeAgo}</p>
                        </div>
                        <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                          <MoreVertical className="w-5 h-5 text-muted-foreground" />
                        </button>
                      </div>
                      <p className="text-muted-foreground mb-4">{q.expertReply.content}</p>
                      <div className="flex items-center gap-2">
                        <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                          <ThumbsUp className="w-4 h-4" />
                          <span>{q.expertReply.likes}</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex items-center gap-4 px-6 py-4 border-t border-border">
                    <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                      <ThumbsUp className="w-5 h-5" />
                      <span>{q.likes} Likes</span>
                    </button>
                    <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      <span>{q.replies} Replies</span>
                    </button>
                    <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                      <Share2 className="w-5 h-5" />
                      <span>{q.shares} Shares</span>
                    </button>
                  </div>
                </div>
              ))}

              {/* Load More */}
              <div className="text-center pt-6">
                <Button variant="outline" className="px-8">
                  Load More
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="thoughts">
              <div className="text-center py-12">
                <p className="text-muted-foreground">Share your thoughts and experiences with the community.</p>
                <Button className="mt-4 bg-primary hover:bg-primary-dark">Share a Thought</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
}
