import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js/auto'

type Props = {
  chartData: any
}

ChartJS.register(ArcElement, Tooltip, Legend)

const Barchart = ({ chartData }: Props) => {
  return <Bar data={chartData} />
}

export default Barchart
