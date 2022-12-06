import Expenses from './components/Expenses'

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2022, 9, 2)
    },
    {
      id: 'e2',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2022, 6, 1)
    },
    {
      id: 'e3',
      title: 'Jupiter',
      amount: 594.12,
      date: new Date(2022, 3, 3)
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2022, 12, 5)
    },
]

  return (
    <div className="App">
      <h1>Let's Get Started</h1>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
