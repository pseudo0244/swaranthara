"use client"

import { useEffect, useState, useRef } from "react"

interface CounterAnimationProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
}

export function CounterAnimation({ end, duration = 2000, prefix = "", suffix = "" }: CounterAnimationProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      let startTime: number | null = null
      const startValue = 0

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)
        const currentCount = Math.floor(progress * (end - startValue) + startValue)

        setCount(currentCount)

        if (progress < 1) {
          window.requestAnimationFrame(step)
        } else {
          setHasAnimated(true)
        }
      }

      window.requestAnimationFrame(step)
    }
  }, [isVisible, end, duration, hasAnimated])

  return (
    <div ref={countRef} className="font-bold text-4xl md:text-5xl">
      {prefix}
      {count}
      {suffix}
    </div>
  )
}

