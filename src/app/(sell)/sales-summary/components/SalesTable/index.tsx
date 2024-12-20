export default function SalesTable() {
  const latestSales = [
    {
      id: 1,
      title: 'Product A',
      date: '20 December 2024',
      total: '$200',
      status: 'Completed',
    },
    {
      id: 2,
      title: 'Product B',
      date: '19 December 2024',
      total: '$150',
      status: 'Pending',
    },
    {
      id: 3,
      title: 'Product C',
      date: '18 December 2024',
      total: '$300',
      status: 'Completed',
    },
    {
      id: 4,
      title: 'Product D',
      date: '17 December 2024',
      total: '$120',
      status: 'Failed',
    },
    {
      id: 5,
      title: 'Product E',
      date: '16 December 2024',
      total: '$250',
      status: 'Completed',
    },
  ];

  return (
    <div className="mt-6">
      <h2 className="mb-4 text-xl font-semibold">Latest Sales</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Title
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Date
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Total
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {latestSales.map((sale) => (
              <tr key={sale.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  {sale.title}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {sale.date}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {sale.total}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {sale.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
