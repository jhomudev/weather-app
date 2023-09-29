const getDateFormated = ({ date }: { date?: string }) => {
  const dateFound= date? new Date(date) : new Date()
  const currentDate = dateFound.toLocaleDateString('en-US', {
    weekday: 'short', // Abreviatura del día de la semana (e.g., "Wed")
    month: 'short',   // Abreviatura del mes (e.g., "Sep")
    day: 'numeric',   // Día del mes (e.g., "27")
    year: 'numeric'   // Año (e.g., "2023")
  })

  return currentDate 
}
export default getDateFormated