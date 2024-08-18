import { Link, useLoaderData } from "@remix-run/react"

export default function Careers() {
  const careers = useLoaderData()

  return (
    <div className="careers">
      {careers.map(career => (
        <Link to='/' key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  )
}

// data loader
export const CareersLoader = async () => {
  const res = await fetch('http://localhost:4000/careers')

  return res.json()
}