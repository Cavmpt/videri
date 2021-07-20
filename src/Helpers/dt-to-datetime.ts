export interface IDateTimeInterface {
  year: number
  month: string
  date: number
  hour: number
  min: number
  sec: number
}

export function unixTimestampToDate(dt: number) {
  const newDate: Date = new Date(dt * 1000)

  const months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const dateTimeObject: IDateTimeInterface = {
    year: newDate.getFullYear(),
    month: months[newDate.getMonth()],
    date: newDate.getDate(),
    hour: newDate.getHours(),
    min: newDate.getMinutes(),
    sec: newDate.getSeconds(),
  }
  return dateTimeObject
}
