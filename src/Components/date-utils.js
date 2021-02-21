const utils = {
  roundToYear: (date) => {
    return new Date(date.getFullYear(), 0, 1, 0, 0, 0, 0)
  },
  earliestDate: (dates) => {
    let earliest = new Date()
    for (let date of dates) {
      date = new Date(date)
      if (date < earliest)
        earliest = date
    }
    return earliest
  },
  datePointInRange: (from, to, date) => {
    from = new Date(from)
    to = new Date(to)
    date = new Date(date)

    const diff = date.getTime() - from.getTime()
    const full = to.getTime() - from.getTime()
    const percentage = (diff / full) * 100

    return percentage
  },
  datesToPercentage: (start, end, from, to) => {
    to = to || end
    start = new Date(start)
    end = new Date(end)
    from = new Date(from)
    to = new Date(to)

    const full = Math.abs(start.getTime() - end.getTime())
    const diff = Math.abs(to.getTime() - from.getTime())
    const percentage = (diff / full) * 100
    return percentage
  },
}

export default utils
