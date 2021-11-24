import moment from 'moment'
export const readableDate = date => {
  return moment(date).format('MMMM Do YYYY, hh:mm')
}
