import { FC } from "react"

interface CarouselProps {
  className?: string
}

export const Carousel: FC<CarouselProps> = ({ children, className }) => {
  return (
    <>
      <div className="p-4 space-x-4 max-w-md carousel carousel-center bg-primary rounded-box">
        <div className="carousel-item">
          <img
            src="https://api.lorem.space/image/furniture?w=250&h=180&hash=8B7BCDC2"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://api.lorem.space/image/furniture?w=250&h=180&hash=500B67FB"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://api.lorem.space/image/furniture?w=250&h=180&hash=A89D0DE6"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://api.lorem.space/image/furniture?w=250&h=180&hash=225E6693"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://api.lorem.space/image/furniture?w=250&h=180&hash=9D9539E7"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://api.lorem.space/image/furniture?w=250&h=180&hash=BDC01094"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://api.lorem.space/image/furniture?w=250&h=180&hash=7F5AE56A"
            className="rounded-box"
          />
        </div>
      </div>
    </>
  )
}
