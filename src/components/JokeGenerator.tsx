import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, RefreshCw } from "lucide-react";
import { toast } from "sonner";

interface Joke {
  type: string;
  setup?: string;
  delivery?: string;
  joke?: string;
}

export default function JokeGenerator() {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState(false);
  const [jokeType, setJokeType] = useState<"any" | "single" | "twopart">("any");

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://v2.jokeapi.dev/joke/Any?type=${jokeType === "any" ? "single,twopart" : jokeType}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch joke");
      }

      const data = await response.json();

      if (data.error) {
        toast.error("No joke found. Try again!");
        return;
      }

      setJoke(data);
      toast.success("New joke loaded! 😄");
    } catch (error) {
      toast.error("Failed to fetch joke. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const displayJoke = () => {
    if (!joke) return "";

    if (joke.type === "twopart") {
      return `${joke.setup}\n\n${joke.delivery}`;
    }
    return joke.joke || "";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <Card className="w-full max-w-2xl shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
          <CardTitle className="text-3xl font-bold text-center">
            😂 Random Joke Generator
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6 p-8">
          {/* Joke Type Selector */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-gray-700">
              Joke Type:
            </label>
            <div className="flex gap-3 flex-wrap">
              {["any", "single", "twopart"].map((type) => (
                <Button
                  key={type}
                  variant={jokeType === type ? "default" : "outline"}
                  onClick={() => setJokeType(type as "any" | "single" | "twopart")}
                  className="capitalize"
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>

          {/* Joke Display */}
          {joke ? (
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 min-h-[150px] flex items-center justify-center">
              <p className="text-lg text-gray-800 font-medium text-center whitespace-pre-line">
                {displayJoke()}
              </p>
            </div>
          ) : (
            <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6 min-h-[150px] flex items-center justify-center">
              <p className="text-gray-500 text-center">
                Click "Get Joke" to load a random joke!
              </p>
            </div>
          )}

          {/* Get Joke Button */}
          <Button
            onClick={fetchJoke}
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-6 text-lg"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Loading...
              </>
            ) : (
              <>
                <RefreshCw className="mr-2 h-5 w-5" />
                Get Joke
              </>
            )}
          </Button>

          {/* Info */}
          <p className="text-xs text-gray-500 text-center">
            Powered by{" "}
            <a
              href="https://jokeapi.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-semibold"
            >
              JokeAPI
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
