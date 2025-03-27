import { CounterAnimation } from "@/components/counter-animation"
import { Users, Calendar, Award, MusicIcon } from "lucide-react"

export function SocialProof() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
      <div className="flex flex-col items-center space-y-2">
        <div className="bg-navy/10 p-4 rounded-full mb-4">
          <Users className="h-8 w-8 text-navy" />
        </div>
        <CounterAnimation end={100} suffix="+" />
        <p className="text-lg font-medium">Students Trained</p>
      </div>

      <div className="flex flex-col items-center space-y-2">
        <div className="bg-navy/10 p-4 rounded-full mb-4">
          <Calendar className="h-8 w-8 text-navy" />
        </div>
        <CounterAnimation end={15} suffix="+" />
        <p className="text-lg font-medium">Years of Experience</p>
      </div>

      <div className="flex flex-col items-center space-y-2">
        <div className="bg-navy/10 p-4 rounded-full mb-4">
          <MusicIcon className="h-8 w-8 text-navy" />
        </div>
        <CounterAnimation end={5} suffix="+" />
        <p className="text-lg font-medium">Courses Offered</p>
      </div>

      <div className="flex flex-col items-center space-y-2">
        <div className="bg-navy/10 p-4 rounded-full mb-4">
          <Award className="h-8 w-8 text-navy" />
        </div>
        <CounterAnimation end={10} suffix="+" />
        <p className="text-lg font-medium">Awards Won</p>
      </div>
    </div>
  )
}

