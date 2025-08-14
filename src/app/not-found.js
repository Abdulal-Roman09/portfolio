"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, ArrowLeft, Search, Zap } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-lg text-center relative z-10 border-2 shadow-2xl bg-card/80">
        <CardContent className="pt-8 pb-8">
          <div className="mb-8 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <Search
                className="w-32 h-32 text-muted-foreground/20 animate-spin"
                style={{ animationDuration: "20s" }}
              />
            </div>
            <div className="relative z-10">
              <h1 className="text-8xl font-bold bg-gradient-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-transparent mb-4 animate-pulse">
                404
              </h1>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Zap className="w-6 h-6 text-chart-1 animate-bounce" />
                <h2 className="text-3xl font-bold text-foreground">Oops! Page Not Found</h2>
                <Zap className="w-6 h-6 text-chart-2 animate-bounce delay-150" />
              </div>
            </div>
          </div>

          <div className="mb-8 space-y-2">
            <p className="text-lg text-muted-foreground leading-relaxed">
              The page you're looking for seems to have vanished into the digital void.
            </p>
            <p className="text-sm text-muted-foreground/80">
              Don't worry though – let's get you back on track!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-chart-1 hover:from-chart-1 hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Link href="/">
                <Home className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Take Me Home
              </Link>
            </Button>

            <Button
              variant="outline"
              onClick={() => window.history.back()}
              className="group border-2 hover:bg-muted/50 transition-all duration-300 hover:border-primary/50 transform hover:scale-105"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Go Back
            </Button>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}
