import CoreConcept from '../components/CoreConcept/CoreConcept'
import { CORE_CONCEPTS } from "../data"

export default function MeinConcept() {
  return (
    <section id="core-concepts">
    <h2>Core concepts!</h2>
    <ul>
      {CORE_CONCEPTS.map((item) => (
        <CoreConcept key={item.title} {...item} />
      ))}
    </ul>
  </section>
  )
}
